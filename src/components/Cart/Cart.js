import './Cart.css';
// need to access state and get items added to cart
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartTotal from './CartTotal';
import { shortenDescription } from '../../utility/helpers';
import { removeFromCart } from '../../store/slices/cartsSlice';

function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => {
        return state.cart
    })

    useEffect(() => {
        console.log(cart)
    }, [])

    const total = (item) => {
        return (item.product.base_amt * item.size.price_multiplier * item.quantity).toFixed(2)
    }

    const handleClick = (id) => {
        console.log(id)
        dispatch(removeFromCart(id))
    }

    const renderCart = cart.map(item => {
        
        return (
            <div key={Math.random()} className='cart__item'>
                <div className=''>
                    <Link to={`/product/${item.product.id}`} className='product__link item__img'>
                        <img className='product__img product__img--thumb' src={item.product.image_urls.thumb} alt={item.product.description}/>

                    </Link>

                </div>
                

                <div className='item__details'>
                    <h3 className='item__title'><Link to={`/product/${item.product.id}`}>{shortenDescription(item.product.alt_description)}</Link></h3>
                    {/* <p className=''>image type i.e. poster, painting, etc</p> */}
                    <p className='item__size'>Size: {`${item.size.width}" x ${item.size.height}`}"</p>
                    {/* <p className='item__arrival-est'>Arrives by Sat, Apr 29</p> */}
                    <div className='item__quantity'>
                        Quantity: {item.quantity}
                    </div>
                    <p className='item__total'>
                        ${total(item)}
                    </p>
                    <div onClick={() => handleClick(item.id)} className='item__delete'>Delete</div>
                    <Link to={`/product/editCartItem/${item.id}`} className=''>Edit</Link>
                </div>

            </div>
        )
    })


    return (
        <div className="cart">
            <CartTotal />
            <div className='cart__items'>
                {renderCart}
            </div>
        </div>
    )
}

export default Cart;