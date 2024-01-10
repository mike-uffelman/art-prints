import './Reviews.css';
import React from 'react';
import { dateTransformer } from '../../utility/helpers';
import RatingStars from '../Products/Product-Reception/RatingStars';
import PropTypes from 'prop-types';

export default function Reviews({reviewsToRender}) {
    const renderingTheseReviews = reviewsToRender.map((review, index) => {
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


    return (
        <React.Fragment>
            {renderingTheseReviews}
        </React.Fragment>
    )
}

Reviews.propTypes = {
    reviewsToRender: PropTypes.array.isRequired
}