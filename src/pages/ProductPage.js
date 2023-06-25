import { useSelector } from "react-redux"
import Product from "../components/Products/Product"
import Reviews from "../components/Reviews/Reviews"
import Tags from "../components/Tags"
import { useParams } from "react-router-dom"
import ProductTabs from "../components/Products/Product-Tabs/ProductTabs"


// Builds the layout for the individual product page

export default function ProductPage({products, addToCart}) {
    const {id} = useParams();

    const productData = useSelector((state) => {
        return state.search;
    })

    const productReviews = useSelector((state) => {
        return state.reviews;
    })

    // console.log(productReviews)
    // console.log(id)

    const selectedReviews = productReviews.flat(2).filter(review => review.product_id === id);

    // const selectedReviews = productReviews
    // console.log(selectedReviews)
    const selectedProduct = productData.results.flat().filter(product => product.id === id && product)

    const productTags = selectedProduct[0].tags.map(tag => tag.title)

    // console.log(selectedProduct)

    // if(!reviews) {
    //     return <div>'Reviews not available...'</div>
    // }

    return (
        <div className="product-page__container">
            {productData ? <Tags tagsData={productTags} /> : 'Loading tags...'}
            {selectedProduct ? <Product type='product-view' product={selectedProduct[0]} className=''/> : 'Loading Product...'}
            
            {/* {selectedReviews && productData && selectedProduct  */}
                {/* ?  */}
                <ProductTabs product={productData} selectedReviews={selectedReviews}>

                    {/* {productReviews ? <Reviews selectedReviews={productReviews}/> : 'Reviews not found'} */}
                    {/* {productData ? <Tags tagsData={productTags} /> : 'Loading tags...'} */}

                </ProductTabs >
                {/* : 'Loading product details...'} */}
        </div>
    )
}