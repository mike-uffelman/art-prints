import './Cart.css';
// need to access state and get items added to cart
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartTotal from './CartTotal';
import { shortenDescription } from '../../utility/helpers';
import { removeFromCart } from '../../store/slices/cartsSlice';
import Image from '../Image/Image';
import { addToast } from '../../store/slices/toastsSlice';
import { v4 as uuidv4 } from 'uuid';


function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => {
        return state.cart
    })

    // calculate product total, base amount, size, quantity factors
    const total = (item) => {
        return (item.product.base_amt * item.size.price_multiplier * item.quantity).toFixed(2)
    }

    const handleEditClick = () => {
        dispatch(addToast({id: uuidv4(), label: 'info', icon: 'info', message: 'Editing cart item'}))
    }

    const handleClick = (id) => {
        dispatch(removeFromCart(id))
        dispatch(addToast({id: uuidv4(), label: 'warning', icon: 'warning', message: 'Item removed from cart...'}))
    }

    const renderCart = cart.map(item => {
        
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
    })


    return (
        <div className="cart">
            <div className='cart__subtotal'>
                <CartTotal />

            </div>
            <div className='cart__items'>
                {renderCart}
            </div>
        </div>
    )
}

export default Cart;