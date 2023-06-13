import { useSelector } from "react-redux"
import Product from "../components/Products/Product"
import Reviews from "../components/Reviews/Reviews"
import Tags from "../components/Tags"
import { useParams } from "react-router-dom"


// Builds the layout for the individual product page

export default function ProductPage({products, addToCart}) {
    const {id} = useParams();

    const productData = useSelector((state) => {
        return state.search;
    })

    const selectedProduct = productData.results.flat().filter(product => product.id === id && product)

    const productTags = selectedProduct[0].tags.map(tag => tag.title)

    return (
        <div className="product-page__container">
            {productData ? <Tags tagsData={productTags} /> : 'Loading tags...'}
            {selectedProduct ? <Product product={selectedProduct[0]} className=''/> : 'Loading Product...'}
            
            <Reviews />
            {/* want this to be a carousel... */}
            {/* <Products products={products} className='products__similar'/> */}

        </div>
    )
}