import './Tags.css';
import { useEffect } from "react";
import { Link } from "react-router-dom"
import { buildReviews } from '../data/productGenerator';
import { useDispatch } from 'react-redux';
import { addResults, reset } from '../store/slices/searchSlice';
import { addReviews } from '../store/slices/reviewsSlice';
import { search } from '../data/dataHelper';

export default function Tags({tagsData}) {
    // define the dispatch hook for store actions
    const dispatch = useDispatch();

    // on tag click, reset search results in store, execute new search request, update state, create reviews, update reviews state
    const handleClick = async (term) => {
        await dispatch(reset());
        const results = await search(term);
        await dispatch(addResults(results));

        const reviews = await buildReviews(results);
        await dispatch(addReviews(reviews));
    }

    // if tagsData, filter over tags and return link with path to tag term; tag click handled by callback
    const renderTags = tagsData && Object.entries(tagsData).filter(tags => tags[1] > 0).map((tag, index) => {
        // console.log(tag)
        return ( 
            <Link to={`/results/${tag[0]}`} onClick={() => handleClick(tag[0])} key={`${tag[0]}-${index}`} className="tags__link" >{tag[0]}</Link>
        )
    })
    
    // if tags undefined or null, render loading
    if(!tagsData || tagsData === undefined) {
        return <div>Loading tags...</div>
    }

    return (
        <form className="tags__container">
            <label className="tags__label">Related Searches</label>
            <div className='tags__content'>
                {/* <div className='tags__arrow tags__arrow--left'>L</div> */}
                <div className="tags__list">
                    {/* {console.log('testtags: ', testTags)} */}
                        {tagsData ? renderTags : '...'}
                        {/* {tagsData && popularTags()} */}
                    {/* {testTags && Object.keys(testTags).length > 0 && renderTags} */}
                </div>
                {/* <div className='tags__arrow tags__arrow--right'>R</div> */}
            </div>
        </form>
    )
}