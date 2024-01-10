import './Cart.css';
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

export default function CartTotal({cart}) {

    const cartSubtotal = cart.reduce((acc, curr) => acc += curr.product.base_amt * curr.size.price_multiplier * curr.quantity, 0)

    const disabled = cartSubtotal > 0 ? false : true;

    return (
        <div className='subtotal'>
            <p className='subtotal__amount' >Subtotal: ${cartSubtotal.toFixed(2)}</p>
            
            <button className='subtotal__checkout-btn' disabled={disabled}>Checkout</button>
        </div>
    )
}

CartTotal.propTypes = {
    cart: PropTypes.array.isRequired
}