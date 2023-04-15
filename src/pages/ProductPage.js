import Product from "../components/Products/Product"
import Products from "../components/Products/AllProducts"


export default function ProductPage({products}) {

    return (
        <div className="product-page__container">
            <Product products={products} />
            <Products products={products} className={'products-page__similar'}/>

        </div>
    )
}