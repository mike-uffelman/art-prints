import './Toasts.css';

import classNames from 'classnames';


import React, { useState, useRef, useEffect } from 'react';



function Toasts({toasts, className, message}) {
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const toastEl = useRef();
    const classes = classNames(className)


    const close = () => {
        setIsModalOpen(false)
    }

    const closeModal = (e) => {
        if(toastEl.current && !toastEl.current.contains(e.target)) {
            close();
        }
    }

    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log('closing modal now...')
    //     }, 2000)
    //     window.addEventListener('click', e => closeModal(e), true);

    //     return () => {
    //         window.removeEventListener('click', e => closeModal(e));
    //     }
    // }, [])

    const hideToast = (e, id) => {
        if(toastEl.current && toastEl.current.contains(e.target)) {
            console.log('clicking the toast')
        }
        // console.log(toastEl.current, id)
        // toastEl.current.classList.add('hide')
    }
    
    const renderToasts = toasts.map(toast => {
        console.log(toast)
        return (
            <output key={toast.id}  ref={toastEl} onClick={(e) => hideToast(e, toast.id)} className={`toast__item ${toast.label}`}>
            
            <span className="material-symbols-outlined icon--close">close</span>
            <div className='toast__icon-container'>
                <span className="material-symbols-outlined icon--success">{toast.icon} </span>
            </div>

            <div className='toast__details-container'>
                {/* <h4 className='toast__heading'>asdf</h4> */}
                <p className='toast__message'>{message}</p>
            </div>
            

        </output>
        )
    })

    // create an array of objects, map over to display toasts inside a container to prevent overlap

    return (
        <section className='toasts__container'>
            toasts here........
            {/* {console.log(toasts)} */}
            {toasts && renderToasts}
        </section>

    )
}

export default Toasts;