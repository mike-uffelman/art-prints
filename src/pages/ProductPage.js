import { lazy, Suspense } from 'react';
import { useSelector } from "react-redux"
// import Product from "../components/Products/Product"
// import Tags from "../components/Tags/Tags"
import { useParams } from "react-router-dom"
// import ProductTabs from "../components/Products/Product-Tabs/ProductTabs"

const Product = lazy(() => import("../components/Products/Product"));
const Tags = lazy(() => import("../components/Tags/Tags"));
const ProductTabs = lazy(() => import("../components/Products/Product-Tabs/ProductTabs"));
// Builds the layout for the individual product page

export default function ProductPage() {

    const {id} = useParams();

    const productData = useSelector((state) => {
        return state.search;
    })

    const productReviews = useSelector((state) => {
        return state.reviews;
    })

    const selectedReviews = productReviews.flat(2).filter(review => review.product_id === id);

    const selectedProduct = productData.results.flat().filter(product => product.id === id && product)

    const productTags = selectedProduct[0].tags.map(tag => tag.title)

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="product-page__container">
                {productTags ? <Tags tagsData={productTags} /> : 'Loading tags...'}
                {selectedProduct ? <Product type='product-view' product={selectedProduct[0]} className=''/> : 'Loading Product...'}
                
                {/* {selectedReviews && productData && selectedProduct  */}
                    {/* ?  */}
                    <ProductTabs product={selectedProduct} selectedReviews={selectedReviews}>

                        {/* {productReviews ? <Reviews selectedReviews={productReviews}/> : 'Reviews not found'} */}
                        {/* {productData ? <Tags tagsData={productTags} /> : 'Loading tags...'} */}

                    </ProductTabs >
                    {/* : 'Loading product details...'} */}
            </div>
        </Suspense>
    )
}