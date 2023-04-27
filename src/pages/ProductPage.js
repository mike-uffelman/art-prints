import Product from "../components/Products/Product"
import Products from "../components/Products/AllProducts"
import Reviews from "../components/Reviews/Reviews"


export default function ProductPage({products, addToCart}) {

    return (
        <div className="product-page__container">
            <Product className=''/>
            <Reviews />
            {/* want this to be a carousel... */}
            {/* <Products products={products} className='products__similar'/> */}

        </div>
    )
}