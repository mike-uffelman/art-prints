import './History.css';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { resetHistory } from '../../store/slices/historySlice';
import { useDispatch } from 'react-redux';
import UpdatedComponent from '../withSearch';

function History({handleSubmit, isModalOpen, setIsModalOpen, history}) {
    const type = 'history';
    const el = useRef();
    const dispatch = useDispatch();

    const close = () => {
        setIsModalOpen(false)
    }

    const closeModal = (e) => {
        if(el.current && !el.current.contains(e.target)) {
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
            <Link to={`results/${term}`} onClick={() => handleSubmit(type, term)} key={`history-${index}`} className='history__link'>{term}</Link>
        )
    })

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

export default UpdatedComponent(History);