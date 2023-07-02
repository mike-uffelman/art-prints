import './Toasts.css';

import classNames from 'classnames';


import React, { useState, useRef, useEffect } from 'react';



function Toasts({className, message}) {
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const toastEl = useRef();
    const classes = classNames(className)

    const icons = [
        {label: 'success', icon: 'check_box'},
        {label: 'error', icon: 'close'},
        {label: 'warning', icon: 'warning'},
        {label: 'danger', icon: 'dangerous'}
    ]

    const iconSwitch = () => {
        const icons = classes.split('.')
        console.log(icons)
        switch(icons.includes(classes) ? classes : undefined) {
            case 'success':
                return 'check_circle';
            case 'error':
                return 'error';
            case 'warning':
                return 'warning';
            case 'danger':
                return 'dangerous';
            case 'info':
                return 'info';
                case 'help':
                    return 'help';
            default:
                return 'light_mode';
        }
    }

    const close = () => {
        setIsModalOpen(false)
    }

    const closeModal = (e) => {
        if(toastEl.current && !toastEl.current.contains(e.target)) {
            close();
        }
    }

    useEffect(() => {
        setTimeout(() => {
            console.log('closing modal now...')
        }, 2000)
        window.addEventListener('click', e => closeModal(e), true);

        return () => {
            window.removeEventListener('click', e => closeModal(e));
        }
    }, [])
    

    return (
        <div ref={toastEl} className={`toast__container ${classes}`}>
            
            <span class="material-symbols-outlined icon--close">close</span>
            <div className='toast__icon-container'>
                <span class="material-symbols-outlined icon--success">{iconSwitch()} </span>
            </div>

            <div className='toast__details-container'>
                {/* <h4 className='toast__heading'>asdf</h4> */}
                <p className='toast__message'>{message}</p>
            </div>
            

        </div>
    )
}

export default Toasts;