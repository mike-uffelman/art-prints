import './Reviews.css';
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { dateTransformer } from '../../utility/helpers';
import RatingStars from '../Products/Product-Reception/RatingStars';

export default function Reviews() {
    const reviews = useSelector((state) => {
        return state.reviews
    })
    const { id } = useParams();

    const renderReviews = reviews.flat().filter(review => review.product_id === id).map(review => {
        return (
            <section key={review.review_id} className="review__item">
                <div className="review__header">
                    <div className='review__header--rating'>
                        <RatingStars rating={review.rating} className='review__header--rating'/>
                    </div>
                    <div className='review__header--title'>{review.user}</div>
                    <div className='review__header--date'>{dateTransformer(review.date)}</div>
                </div>
                <div className="review__detail">
                    <p className='review__detail--title'>{review.comment.title}</p>
                    <p className="review__detail--text">{review.comment.comments}</p>
                </div>
            </section>
        )
    })

    if(!reviews || reviews === undefined) {
        return <div>Loading reviews...</div>
    }

    return (
        <section className="reviews" id='reviews'>
            <h3 className='reviews__heading'>Reviews</h3>
            {reviews ? renderReviews : 'Loading reviews...'}
        </section>
    )
}