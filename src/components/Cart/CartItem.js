import './Cart.css';
// react, router, redux
import { Link } from "react-router-dom"
// components
import Image from "../Image/Image"
// utilities and helpers
import { shortenDescription } from "../../utility/helpers"
import PropTypes from 'prop-types';

export default function CartItem({item, handleClick, handleEditClick}) {
    const total = (item) => {
        return (item.product.base_amt * item.size.price_multiplier * item.quantity).toFixed(2)
    }

    return (
        <div key={Math.random()} className='cart__item'>
            <div className='item__img'>
                <Link to={`/product/${item.product.id}`} className=''>
                    <Image product={item.product} className={`cart`} />
                </Link>

            </div>
            

            <div className='item__detail'>
                <h3 className='item__title'><Link to={`/product/${item.product.id}`}>{shortenDescription(item.product.alt_description)}</Link></h3>
                {/* <p className=''>image type i.e. poster, painting, etc</p> */}
                <div className='item__details'>
                    <div className='item__specs'>

                        <p className='item__size'>Size: {`${item.size.width}" x ${item.size.height}`}"</p>
                        {/* <p className='item__arrival-est'>Arrives by Sat, Apr 29</p> */}
                        <div className='item__quantity'>
                            Quantity: {item.quantity}
                        </div>

                    </div>
                    <p className='item__total'>${total(item)}</p>
                </div>
                
                
                
                <div className='cart__item-actions'>
                    
                    <Link onClick={handleEditClick} to={`/product/editCartItem/${item.id}`} className='cart__btn cart__btn--edit'>Edit</Link>
                    <button onClick={() => handleClick(item.id)} className='cart__btn cart__btn--delete'>Delete</button>
                </div>
                
            </div>

        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
    handleEditClick: PropTypes.func.isRequired
}