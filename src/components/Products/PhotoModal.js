import './PhotoModal.css';

import classNames from 'classnames';
import Image from '../Image';

export default function PhotoModal({product, toggleModal, className}) {
    const classes = classNames(className)
    console.log(classes)
    
    return (
        <section className="modal">
            <div className={`modal__img-container ${product.orientation}`}>
                <button className='modal__close' onClick={toggleModal} >
                    <span className="material-symbols-outlined">
                        close
                    </span>
                </button>
                <Image product={product} className={classes}/>

            </div>
        </section>
    )
}