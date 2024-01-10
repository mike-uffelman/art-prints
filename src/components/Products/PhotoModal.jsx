// styles
import './PhotoModal.css';

// react, router, redux
import { useEffect, useRef } from 'react';

// components
import Image from '../Image/Image';

// utilities and helpers
import classNames from 'classnames';
import PropTypes from 'prop-types';


export default function PhotoModal({product, className, setIsModalOpen}) {
    const el = useRef();
    const classes = classNames(className)

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
    
    return (
        <section className="modal" >
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

PhotoModal.propTypes = {
    product: PropTypes.object.isRequired,
    setIsModalOpen: PropTypes.func.isRequired,
    className: PropTypes.string
}