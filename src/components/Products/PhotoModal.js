import './PhotoModal.css';

import { useEffect, useRef } from 'react';
import classNames from 'classnames';
import Image from '../Image';


export default function PhotoModal({product, toggleModal, className, setIsModalOpen}) {
    const el = useRef();
    const classes = classNames(className)
    // console.log(classes)

    const close = () => {
        setIsModalOpen(false)
    }

    const closeModal = (e) => {
        console.log(e.target)
        console.log(el.current)
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
    
    return (
        <section onClick={e => console.log(e.target)}  className="modal" >
                <button className='modal__close' onClick={() => setIsModalOpen(false)} >
                    <span className="material-symbols-outlined">
                        close
                    </span>
                </button>
            <div  ref={el} className={`modal__img-container ${product.orientation}`}>
                
                <Image product={product} className={classes}/>

            </div>
        </section>
    )
}