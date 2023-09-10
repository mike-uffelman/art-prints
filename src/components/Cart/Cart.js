// style import
import './Cart.css';
// need to access state and get items added to cart
// react, router, and redux
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../store/slices/cartsSlice';
import { addToast } from '../../store/slices/toastsSlice';

// components
import CartTotal from './CartTotal';

// utilities and helpers
import { v4 as uuidv4 } from 'uuid';
import CartItem from './CartItem';


function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => {
        return state.cart
    })

    // calculate product total, base amount, size, quantity factors

    const handleEditClick = () => {
        dispatch(addToast({id: uuidv4(), label: 'info', icon: 'info', message: 'Editing cart item'}))
    }

    const handleClick = (id) => {
        dispatch(removeFromCart(id))
        dispatch(addToast({id: uuidv4(), label: 'warning', icon: 'warning', message: 'Item removed from cart...'}))
    }

    const renderCart = cart.map((item, index) => {
        return (
            <React.Fragment key={`${item.product.id}-${index}`}>
                <CartItem  item={item} handleEditClick={handleEditClick} handleClick={handleClick} />
            </React.Fragment>
        )
    })

    const renderEmptyCartMessage = 
        <section className='cart__empty'>
                <span className="material-symbols-outlined">
                    shopping_cart
                </span>
                <h2 className='cart__empty--message'>Your cart is empty.</h2>

        </section>

    return (
        <div className="cart">
            <div className='cart__subtotal'>
                <CartTotal cart={cart}/>

            </div>
            {cart.length > 0 
                ?
                <div className='cart__items'>
                    {renderCart} 
                </div>

                : renderEmptyCartMessage
            }
        </div>
    )
}

export default Cart;