import './Reviews.css';
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { dateTransformer } from '../../utility/helpers';
import RatingStars from '../Products/Product-Reception/RatingStars';

export default function Reviews({selectedReviews}) {
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ startPage, setStartPage ] = useState(1);
    const [ endPage, setEndPage ] = useState(null)
    const [ startIndex, setStartIndex ] = useState(null);
    const [ endIndex, setEndIndex ] = useState(null);
    const reviewsPerPage = 5;

    useEffect(() => {
        console.log(currentPage)

        // setEndPage(selectedReviews.length/endIndex)

        // const count = reviews.flat(2).filter(review => review.product_id === id).length
        // setEndPage(count)
    }, [currentPage])

    // retrieve the product reviews from state
    // const reviews = useSelector((state) => {
    //     return state.reviews
    // })
    const { id } = useParams();
    useEffect(() => {
        setEndPage(Math.ceil(selectedReviews.length/reviewsPerPage))
        setStartIndex(1);
        setEndIndex(5)
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

    for (let i = startPage; i <= endPage; i++ ) {
        console.log('create pagination i:', i)
        pages.push(i)
    }

    const renderPageButtons = pages.map((page, index) => {
        const activePage = currentPage === index + 1 ? 'active' : '';

        return (
            <button className={`pagination__btn ${activePage}`} onClick={() => setCurrentPage(index + 1)}>{page}</button>
        )
    })
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    
    const showReviews = selectedReviews.map((rev, index) => {
        console.log(selectedReviews, index)
        
        // if(index + 1 >= )
        // if(index+1 >= startPage && index+1 <= endPage) {
        //     return (
        //         <div> {rev.review_id}</div>
        //     )
        // }
        
        return (
            <div>{rev.review_id}</div>
        )
        
    })

    const handleForwardBack = (n) => {
        console.log(currentPage, endPage, startPage)
        setCurrentPage(currentPage + n)
        setStartIndex(n * reviewsPerPage);
        setEndIndex(((n + 1) * reviewsPerPage) - 1)
    }

    if(!selectedReviews || selectedReviews === undefined) {
        return <div>Loading reviews...</div>
    }

    const hideBack = currentPage === startPage ? 'hideBack' : '';
    const hideForward = currentPage >= endPage ? 'hideForward' : '';


    return (
        <section className="reviews" id='reviews'>
            <h3 className='reviews__heading'>Reviews</h3>
            {/* {reviews ? renderReviews : 'Loading reviews...'} */}
            
            {showReviews}
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