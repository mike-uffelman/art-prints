import './Reviews.css';
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { dateTransformer } from '../../utility/helpers';
import RatingStars from '../Products/Product-Reception/RatingStars';

export default function Reviews({selectedReviews}) {
    const [ currentPage, setCurrentPage ] = useState(1);

    // state for pagination navigation controls
    const [ startPageNav, setStartPageNav ] = useState(1);
    const [ endPageNav, setEndPageNav ] = useState(null);

    // state for review indexes to render
    const [ startIndex, setStartIndex ] = useState(1);
    const [ endIndex, setEndIndex ] = useState(null);
    const reviewsPerPage = 5;

    console.log('all reviews: ', selectedReviews)

    // useEffect(() => {
        // console.log(currentPage)

        // setEndPage(selectedReviews.length/endIndex)

        // const count = reviews.flat(2).filter(review => review.product_id === id).length
        // setEndPage(count)
    // }, [currentPage])

    // retrieve the product reviews from state
    // const reviews = useSelector((state) => {
    //     return state.reviews
    // })
    const { id } = useParams();
    useEffect(() => {
        setEndPageNav(Math.ceil(selectedReviews.length/reviewsPerPage))
        setEndIndex(reviewsPerPage)
        // setStartIndex((reviewsPerPage * currentPage) - reviewsPerPage);
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

    // create and build pagination vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    let pages = []

    for (let i = startPageNav; i <= endPageNav; i++ ) {
        console.log('create pagination i:', i)
        pages.push(i)
    }

    const renderPageButtons = pages.map((page, index) => {
        const activePage = currentPage === index + 1 ? 'isActive' : '';

        return (
            <button className={`pagination__btn ${activePage}`} onClick={() => setCurrentPage(index + 1)}>{page}</button>
        )
    })
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    let reviewsToRender = [];

    useEffect(() => {
        if(reviewsPerPage * currentPage > selectedReviews.length) {
            setEndIndex(selectedReviews.length - 1)
        } else {
            setEndIndex((reviewsPerPage * currentPage) - 1)

        }
        setStartIndex((reviewsPerPage * currentPage) - reviewsPerPage);

        
    }, [currentPage])

    for(let i = startIndex; i <= endIndex; i++ ) {
        
        console.log('rendering...', i)
        console.log(startIndex, endIndex)
        reviewsToRender.push(selectedReviews[i])
    }

    console.log(reviewsToRender)


    const renderingTheseReviews = reviewsToRender.map((review, index) => {
        console.log(index, review.review_id)
            // return <div key={review.review_id}>{review.review_id}</div>
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

    
    const showReviews = selectedReviews.map((rev, index) => {
        // console.log(selectedReviews, index)
        
        // if(index + 1 >= )
        // if(index+1 >= startPage && index+1 <= endPage) {
        //     return (
        //         <div> {rev.review_id}</div>
        //     )
        // }
        
        return (
            <div>{index + 1}: {rev.review_id}</div>
        )
        
    })

    const handleForwardBack = (n) => {
        console.log(currentPage, endPageNav, startPageNav)
        setCurrentPage(currentPage + n)

        setEndIndex((reviewsPerPage * currentPage) - 1)
        setStartIndex((reviewsPerPage * currentPage) - reviewsPerPage);
    }

    if(!selectedReviews || selectedReviews === undefined) {
        return <div>Loading reviews...</div>
    }

    const hideBack = currentPage === startPageNav ? 'hideBack' : '';
    const hideForward = currentPage >= endPageNav ? 'hideForward' : '';


    return (
        <section className="reviews" id='reviews'>
            <h3 className='reviews__heading'>Reviews</h3>
            {/* {reviews ? renderReviews : 'Loading reviews...'} */}
            {renderingTheseReviews}
            {/* {showReviews} */}
            <div className='review__pagination'>
                {/* {reviewPagination} */}
                    <span className={`material-symbols-rounded ${hideBack}`} onClick={() => handleForwardBack(-1)}>
                        arrow_back_ios
                    </span>
                    {renderPageButtons}
                
                    <span className={`material-symbols-rounded ${hideForward}`} onClick={() => handleForwardBack(1)}>
                        arrow_forward_ios
                    </span>
            </div>
        </section>
    )
}