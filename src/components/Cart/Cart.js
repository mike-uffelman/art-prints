import './Cart.css';
// need to access state and get items added to cart
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Cart() {
    const cart = useSelector((state) => {
        return state.cart
    })

    useEffect(() => {
        console.log(cart)
    }, [])

    const renderCart = cart.map(item => {
        
        return (
            <div key={Math.random()} className='cart__item'>
                <Link to={`/photo/${item.product.id}`} className='product__link item__img'>
                    <img className='product__img product__img--thumb' src={item.product.image_urls.thumb} alt={item.product.description}/>

                </Link>
                <div className='item__details'>
                    <h3 className='item__title'>{item.product.alt_description}</h3>
                    <p className=''>image type i.e. poster, painting, etc</p>
                    <p className='item__size'>item size selection</p>
                    {/* <p className='item__arrival-est'>Arrives by Sat, Apr 29</p> */}
                </div>
                <div className='item__quantity'>
                    Quantity: {item.quantity}
                </div>
            </div>
        )
    })

    const renderSubtotal = 'some calculation here'

    return (
        <div className="cart">
            {renderSubtotal}
            <div className='cart__items'>
                {renderCart}
            </div>
        </div>
    )
}

export default Cart;