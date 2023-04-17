import Product from "../components/Products/Product"
import Products from "../components/Products/AllProducts"


export default function ProductPage({products}) {

    return (
        <div className="product-page__container">
            <Product products={products} />

            {/* want this to be a carousel... */}
            <Products products={products} className='products__similar'/>

        </div>
    )
}