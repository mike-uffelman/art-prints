import './Cart.css';
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function CartTotal() {
    const cart = useSelector((state) => {
        return state.cart
    })

    const cartSubtotal = cart.reduce((acc, curr) => acc += curr.product.base_amt * curr.size.price_multiplier * curr.quantity, 0)

    const disabled = cartSubtotal > 0 ? false : true;

    return (
        <div className='subtotal'>
            <p className='subtotal__amount' >Subtotal: ${cartSubtotal.toFixed(2)}</p>
            
            <button className='subtotal__checkout-btn' disabled={disabled}>Checkout</button>
        </div>
    )
}