import './Toasts.css';

import classNames from 'classnames';


import React, { useState, useRef, useEffect } from 'react';



function Toasts({toasts, setToastsArray, className, message}) {
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const toastEl = useRef([]);
    const classes = classNames(className)


    const close = () => {
        setIsModalOpen(false)
    }

    const closeModal = (e) => {
        if(toastEl.current && !toastEl.current.contains(e.target)) {
            close();
        }
    }

    useEffect(() => {
        toastEl.current = toastEl.current.slice(0, toasts.length);
        toastEl.current.forEach((ref, index) => {
            ref.current = toasts[index];
        })
    //     setTimeout(() => {
    //         console.log('closing modal now...')
    //     }, 2000)
    //     window.addEventListener('click', e => closeModal(e), true);

    //     return () => {
    //         window.removeEventListener('click', e => closeModal(e));
    //     }
        console.log(toastEl.current)
    }, [toasts])

    const handleClick = (e, index) => {
        // toastEl.current[index].classList.toggle('hide')

        console.log(toasts[index], toastEl.current[index])
        // const findToast = toasts.findIndex(e => e.id === )
        


        // setTimeout(() => {
            // toastEl.current[index].remove()
            // setToastsArray(...toasts,)

        // }, 2000)

    }
    
    const renderToasts = toasts.map((toast, index) => {
        console.log(toast)
        return (
            <output key={toast.id} ref={(el) => (toastEl.current[index] = el)}  onClick={(e) => handleClick(e, index)} className={`toast__item position ${toast.label}`}>
            
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