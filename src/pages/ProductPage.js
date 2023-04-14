import Product from "../components/Products/Product"

export default function ProductPage({products}) {

    return (
        <div className="product-page">
            <Product products={products} />

        </div>
    )
}