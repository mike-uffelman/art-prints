// styling import
import './History.css';

// react, router, redux
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { resetHistory } from '../../store/slices/historySlice';
import { useDispatch } from 'react-redux';

// components
import UpdatedComponent from '../withSearch';

// utilities and helpers
import PropTypes from 'prop-types';

function History({handleSubmit, isModalOpen, setIsModalOpen, history, clearHistory}) {
    const type = 'history';
    const el = useRef();
    // const dispatch = useDispatch();


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

    

    const renderHistory = history.map((term, index) => {
        return (
            <Link to={`results/${term}`} onClick={() => handleSubmit(type, term)} key={`history-${index}`} className='history__link'>{term}</Link>
        )
    })

    return (
        <div data-testid='history' className={`history `}>
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

History.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    setIsModalOpen: PropTypes.func.isRequired,
    history: PropTypes.array.isRequired
}