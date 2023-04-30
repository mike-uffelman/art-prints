import './PhotoModal.css';
import classNames from 'classnames';

export default function PhotoModal({image, alt, toggleModal, className}) {
    const classes = classNames(className)
    
    return (
        <section className="modal">
            <div className={`modal__img-container ${classes}`}>
                <button className='modal__close' onClick={toggleModal} >
                    <span className="material-symbols-outlined">
                        close
                    </span>
                </button>
                <div className='img__border'>
                    <div className='img__inset'>
                        <img className='product__img product__img--modal' src={image} alt={alt}/>

                    </div>

                </div>
            </div>
        </section>
    )
}