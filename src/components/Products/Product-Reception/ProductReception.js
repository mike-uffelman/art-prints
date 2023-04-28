import './ProductReception.css';
import { Link } from "react-router-dom"
import RatingStars from './RatingStars';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductRating } from '../../../utility/helpers';

export default function ProductReception({product}) {
    const reviews = useSelector((state) => {
        return state.reviews;
    })
    const {id} = useParams();
    const rating = reviews && getProductRating(reviews, id)
    
    if(!reviews || reviews === undefined) {
        return <div>Loading rating...</div>
    }

    return (
        <div className='product__reception'>
            <div className='product__reviews'>
                <a className='product__ratings' href='#reviews'>
                    {reviews ? <RatingStars rating={rating} /> : 'loading rating...'}
                    <span className='product__ratings--count'>{product.review_count}</span>
                </a>
                <div className='product__likes'>
                    <span className="material-icons product__likes--icon">favorite</span>
                    <span className='product__likes--count'>{product.likes}</span>
                </div>
            
            </div>

        </div>       
    )
}