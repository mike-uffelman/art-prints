// styles
import './ProductReception.css';
// react, router, redux
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// components
import RatingStars from './RatingStars';
// utilities and helpers
import { getProductRating } from '../../../utility/helpers';
import PropTypes from 'prop-types';


export default function ProductReception({product}) {
    const reviews = useSelector((state) => {
        return state.reviews;
    })
    // const {id} = useParams();
    const rating = reviews && getProductRating(reviews, product.id)
    
    if(!reviews || reviews === undefined) {
        return <div>Loading rating...</div>
    }

    if(rating && reviews) {
        return (

        
            <div className='product__reception'>
                <div className='product__reviews'>
                    <a className='product__ratings' href='#reviews'>
                        {<RatingStars rating={rating} />}
                        <span className='product__ratings--count'>{product.review_count}</span>
                    </a>
                    <div className='product__likes'>
                        <span className="material-icons product__likes--icon">favorite</span>
                        <span className='product__likes--count'>{product.likes}</span>
                    </div>
                
                </div>

            </div>       
        )
    } else {
        return <div>Loading ratings...</div>
    }

    
}

ProductReception.propTypes = {
    product: PropTypes.object.isRequired
}