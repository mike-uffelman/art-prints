import './History.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addHistory, resetHistory } from '../../store/slices/historySlice';
import { search } from '../../data/dataHelper';
import { useDispatch, useSelector } from 'react-redux';
import { addResults, reset } from '../../store/slices/searchSlice';
import { addReviews } from '../../store/slices/reviewsSlice';
import { buildReviews } from '../../data/productGenerator';

export default function History({history}) {
    const [ isOpen, setIsOpen ] = useState(false)
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

    }

    const clearHistory = (e) => {
        e.preventDefault();
        dispatch(resetHistory())
    }

    const renderHistory = history.map((term, index) => {
        return (
            <Link to={`results/${term}`} onClick={() => handleClick(term)} key={`history-${index}`} className=''>{term}</Link>
        )
    })

    useEffect(() => {
        console.log(isOpen)
    }, [isOpen])

    // const handleDropdownClick = () => {
    //     setIsOpen(!isOpen)
    // }

    const isToggled = isOpen ? 'isOpen' : '';
    const arrow = isOpen ? 'up' : 'down';


    return (
        <div className={`history ${isToggled}`}>
            <div className='history__icons' onClick={() => setIsOpen(!isOpen)}>
                <span className="material-symbols-rounded clock">
                    history
                </span>
                <span className="material-symbols-rounded arrow">
                    {`arrow_drop_${arrow}`}
                </span>
            </div>
            
            
            <div className='history__list'>
                {renderHistory}
                
                <button onClick={(e) => clearHistory(e)} className='history__clearBtn'>Clear History</button>
            </div>
            
        </div>
    )
}