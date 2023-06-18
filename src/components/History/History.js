import './History.css';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { addHistory, resetHistory } from '../../store/slices/historySlice';
import { search } from '../../data/dataHelper';
import { useDispatch, useSelector } from 'react-redux';
import { addResults, reset } from '../../store/slices/searchSlice';
import { addReviews } from '../../store/slices/reviewsSlice';
import { buildReviews } from '../../data/productGenerator';

export default function History({history, isModalOpen, setIsModalOpen}) {
    const [ isOpen, setIsOpen ] = useState(false)
    const el = useRef();
    const dispatch = useDispatch();
    const store = useSelector((state) => {
        return state;
    })

    //? handleClick is duplicated in other files, need to refactor and abstract to separate module
    const handleClick = async (term) => {
        dispatch(reset())
        const results = await search(
            term, 
            store.search.term === term ? store.search.tags : undefined
        );

        await dispatch(addResults(results));

        const reviews = await buildReviews(results);
        await dispatch(addReviews(reviews));


        !store.history.includes(term) && await dispatch(addHistory(term));
        // setTerm('')

        close();

    }

    const close = () => {
        setIsModalOpen(false)
    }

    const closeModal = (e) => {
        if(el.current && !el.current.contains(e.target)) {
            console.log('clicking the ref')
            close();
        }
    }

    useEffect(() => {
        

        window.addEventListener('click', e => closeModal(e), true);

        return () => {
            window.removeEventListener('click', e => closeModal(e));
        }
    }, [])

    const clearHistory = (e) => {
        e.preventDefault();
        dispatch(resetHistory())
    }

    const renderHistory = history.map((term, index) => {
        return (
            <Link to={`results/${term}`} onClick={() => handleClick(term)} key={`history-${index}`} className='history__link'>{term}</Link>
        )
    })

    const isToggled = isOpen ? 'isOpen' : '';
    const arrow = isOpen ? 'up' : 'down';


    return (
        // <div className={`history ${isToggled}`}>
        <div className={`history `}>

            {/* <div className='history__icons' onClick={() => setIsOpen(!isOpen)}>
                <span className="material-symbols-rounded clock">
                    history
                </span>
                <span className="material-symbols-rounded arrow">
                    {`arrow_drop_${arrow}`}
                </span>
            </div> */}
                        
            
            <div ref={el} className='history__list'>
                <div className='history__header'>
                    <h3 className='history__heading'>Recent Searches</h3>
                    <div className='history__close'>
                        <span onClick={() => setIsModalOpen(false)} className="material-symbols-outlined">
                            close
                        </span>    
                    </div>
                </div>
                

                <div className='history__items'>
                    {renderHistory}
                </div>
                
                <button onClick={(e) => clearHistory(e)} className='history__clearBtn'>Clear History</button>
            </div>
            
        </div>
    )
}