import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Product from "../components/Products/Product.jsx"

// renders the edit product layout page

export default function EditPage() {
    const cart = useSelector(state => {
        return state.cart
    })
    const {id} = useParams();
    const product = cart.filter(item => item.id === id);

    return (
        <div className="product-page__container">
            {product ? <Product type='edit-view' product={product[0]} className='edit-cart' /> : 'Loading product...'}
        </div>
    )
}