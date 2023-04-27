import './Reviews.css';
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

export default function Reviews() {
    const reviews = useSelector((state) => {
        return state.reviews
    })
    const { id } = useParams();

    const renderReviews = reviews.flat().filter(review => review.product_id === id).map(review => {
        return (
            <section className="review__item">
                <div className="review__header">
                    {review.user}
                </div>
                <div className="review__detail">
                    <p className="review__detail--text">{review.comment}</p>
                </div>
            </section>
        )
    })

    if(!reviews || reviews === undefined) {
        return <div>Loading reviews...</div>
    }

    return (
        <section className="reviews">
            <h3 className='reviews__heading'>Product Reviews</h3>
            {reviews ? renderReviews : 'Loading reviews...'}
        </section>
    )
}