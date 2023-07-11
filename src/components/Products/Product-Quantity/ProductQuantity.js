// styles
import './ProductQuantity.css';
// utilities and helpers
import PropTypes from 'prop-types';

export default function ProductQuantity({quantity, setQuantity}) {
    const handleClick = (e, n) => {
        e.preventDefault();
        setQuantity(quantity + n)
    }

    const isDisabledMin = quantity < 2 ? true : false;
    const isDisabledMax = quantity > 98 ? true : false;


    return (
        <section className='quantity__container'>
            
            <label className='quantity__label'>Select Quantity:</label>
            
            <div className='quantity__input'>
                <button onClick={(e) => handleClick(e, -1)} disabled={isDisabledMin} className='quantity__btn decrement'>
                    <span className="material-symbols-rounded">
                        remove
                    </span>
                </button>

                <div className='quantity__value' >{quantity}</div>
                
                <button onClick={(e) => handleClick(e, 1)} disabled={isDisabledMax} className='quantity__btn increment'>
                    <span className="material-symbols-rounded">
                        add
                    </span>
                </button>    
            </div>
        </section>
    )
}

ProductQuantity.propTypes = {
    quantity: PropTypes.number,
    setQuantity: PropTypes.func.isRequired
}