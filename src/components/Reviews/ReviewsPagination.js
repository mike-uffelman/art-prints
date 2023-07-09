import './Reviews.css';
import { useEffect, useState } from 'react';
import Reviews from './Reviews';
import PropTypes from 'prop-types';

export default function ReviewsPagination({selectedReviews}) {
    const [ currentPage, setCurrentPage ] = useState(1);
    console.log(selectedReviews)
    // state for pagination navigation controls
    const [ startPageNav ] = useState(1);
    const [ endPageNav, setEndPageNav ] = useState(null);

    // state for review indexes to render
    const [ startIndex, setStartIndex ] = useState(1);
    const [ endIndex, setEndIndex ] = useState(null);
    const reviewsPerPage = 5;

    let pages = []
    let reviewsToRender = [];

    useEffect(() => {
        setEndPageNav(Math.ceil(selectedReviews.length/reviewsPerPage))
        setEndIndex(reviewsPerPage)
    }, [])

    useEffect(() => {
        if(reviewsPerPage * currentPage > selectedReviews.length) {
            setEndIndex(selectedReviews.length - 1)
        } else {
            setEndIndex((reviewsPerPage * currentPage) - 1)
        }
        setStartIndex((reviewsPerPage * currentPage) - reviewsPerPage);
    }, [currentPage, selectedReviews])

    const handleForwardBack = (n) => {
        setCurrentPage(currentPage + n)
    }

    for (let i = startPageNav; i <= endPageNav; i++ ) {
        pages.push(i)
    }
    const renderPageButtons = pages.map((page, index) => {
        const activePage = currentPage === index + 1 ? 'isActive' : '';

        return (
            <button key={`${page}-${index}`} className={`pagination__btn ${activePage}`} onClick={() => setCurrentPage(index + 1)}>{page}</button>
        )
    })

    for(let i = startIndex; i <= endIndex; i++ ) {
        reviewsToRender.push(selectedReviews[i])
    }

    if(!selectedReviews || selectedReviews === undefined) {
        return <div>Loading reviews...</div>
    }

    const hideBack = currentPage === startPageNav ? 'hideBack' : '';
    const hideForward = currentPage >= endPageNav ? 'hideForward' : '';


    return (
        <section className="reviews" id='reviews'>
            <Reviews reviewsToRender={reviewsToRender} />
            <div className='review__pagination'>
                    <span className={`material-symbols-rounded ${hideBack}`} onClick={() => handleForwardBack(-1)}>arrow_back_ios</span>

                    {renderPageButtons}
                
                    <span className={`material-symbols-rounded ${hideForward}`} onClick={() => handleForwardBack(1)}>arrow_forward_ios</span>
            </div>
        </section>
    )
}

ReviewsPagination.propTypes = {
    selectedReviews: PropTypes.array.isRequired
}