// styles
import './Toasts.css';
// react, redux, router
import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeToast } from '../../store/slices/toastsSlice';
// utilities and helpers
import PropTypes from 'prop-types';


function Toasts({toast}) {
    const dispatch = useDispatch();
    const toastEl = useRef();

    useEffect(() => {
        // clear toast after a timeout
        if(toastEl.current) {
            // console.log('closing toast message')
            setTimeout(() => {
                // check for toastEl.current before adding hide animation, prevents 'toastEl.current is null' error due to user click removal
                toastEl.current && toastEl.current.classList.add('hideToast');

                // after hide animation remove toast from state
                setTimeout(() => {
                    dispatch(removeToast(toast.id))

                }, 1000)
            }, 2000)
        }
    }, [])

    const handleClick = (e) => {
        if(toastEl.current && toastEl.current.contains(e.target)) {
            toastEl.current.classList.add('hideToast');
            setTimeout(() => {
                dispatch(removeToast(toast.id))
            }, 1000)
        }
    }
    
    // create an array of objects, map over to display toasts inside a container to prevent overlap

    return (
        // <section className='toasts__container'>
            <output key={toast.id} ref={toastEl} onTouchMove={handleClick}  onClick={handleClick} className={`toast__item position ${toast.label}`}>

                <span className="material-symbols-outlined icon--close">close</span>

                <div className='toast__icon-container'>
                    <span className="material-symbols-outlined icon--success">{toast.icon} </span>
                </div>

                <div className='toast__details-container'>
                    <p className='toast__message'>{toast.message}</p>
                </div>

            </output>
        // </section>

    )
}

export default Toasts;

Toasts.propTypes = {
    toasts: PropTypes.object
}