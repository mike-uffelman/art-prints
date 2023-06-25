import './Reviews.css';
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { dateTransformer } from '../../utility/helpers';
import RatingStars from '../Products/Product-Reception/RatingStars';

export default function Reviews({selectedReviews}) {
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ startPage, setStartPage ] = useState(0);
    const [ startIndex, setStartIndex ] = useState(0);
    const [ endIndex, setEndIndex] = useState(5);
    const [ endPage, setEndPage ] = useState(null)
    const reviewsPerPage = 5;

    useEffect(() => {

        // setEndPage(selectedReviews.length/endIndex)

        // const count = reviews.flat(2).filter(review => review.product_id === id).length
        // setEndPage(count)
    }, [])

    // retrieve the product reviews from state
    // const reviews = useSelector((state) => {
    //     return state.reviews
    // })
    const { id } = useParams();
    useEffect(() => {
        setEndIndex(Math.ceil(selectedReviews.length/reviewsPerPage))

    }, [])

    // if param id matches the product id render the product reviews
    // const renderReviews = reviews.flat(2).filter(review => review.product_id === id).map(review => {
    //     return (
    //         <section key={review.review_id} className="review__item">
    //             <div className="review__header">
    //                 <div className='review__header--rating'>
    //                     <RatingStars rating={review.rating} className='review__header--rating'/>
    //                 </div>
    //                 <div className='review__header--title'>{review.user}</div>
    //                 <div className='review__header--date'>{dateTransformer(review.date)}</div>
    //             </div>
    //             <div className="review__detail">
    //                 <p className='review__detail--title'>{review.comment.title}</p>
    //                 <p className="review__detail--text">{review.comment.comments}</p>
    //             </div>
    //         </section>
    //     )
    // })

    

    // const reviewPagination = reviews.flat(2).filter(review => review.product_id === id).map((rev, index) => {
    //     const activePage = currentPage === index ? 'active' : '';
        
    //     return (
    //         <div className={`${activePage}`} onClick={() => setCurrentPage(index)}>{index}</div>
    //     )
    // })

    let pages = []

    for (let i = startIndex + 1; i <= endIndex; i++ ) {
        pages.push(i)
    }
    
        
    const showReviews = selectedReviews.map(rev => {
        return (
            <div> {rev.review_id}</div>
        )
    })

    const renderPages = pages.map((page, index) => {
        const activePage = currentPage === index ? 'active' : '';

        return (
            <div className={activePage} onClick={() => setCurrentPage(index)}>{page}</div>
        )
    })
    

    if(!selectedReviews || selectedReviews === undefined) {
        return <div>Loading reviews...</div>
    }

    return (
        <section className="reviews" id='reviews'>
            <h3 className='reviews__heading'>Reviews</h3>
            {/* {reviews ? renderReviews : 'Loading reviews...'} */}
            {showReviews}
            <div className='review__pagination'>
                {/* {reviewPagination} */}
                <div>{currentPage === startPage ? '' : "<"}</div>
                {renderPages}
                <div>{currentPage === endPage ? '' : ">"}</div>

            </div>
        </section>
    )
}