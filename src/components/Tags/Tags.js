import './Tags.css';
import { useEffect } from "react";
import { Link } from "react-router-dom"
import { buildReviews } from '../../data/productGenerator';
import { useDispatch } from 'react-redux';
import { addResults, reset } from '../../store/slices/searchSlice';
import { addReviews } from '../../store/slices/reviewsSlice';
import { search } from '../../data/dataHelper';
import { addHistory } from '../../store/slices/historySlice';
import UpdatedComponent from '../withSearch';

function Tags({tagsData, handleSubmit}) {
    console.log(tagsData)
    // define the dispatch hook for store actions
    // const dispatch = useDispatch();

    // on tag click, reset search results in store, execute new search request, update state, create reviews, update reviews state
    // const handleClick = async (term) => {
    //     await dispatch(reset());
    //     const results = await search(term);
    //     await dispatch(addResults(results));

    //     const reviews = await buildReviews(results);
    //     await dispatch(addReviews(reviews));
    //     await dispatch(addHistory(term))
    // }

    // if tagsData, filter over tags and return link with path to tag term; tag click handled by callback
    const renderTags = tagsData && tagsData.map((tag, index) => {
        // console.log(tag)
        return ( 
            <Link to={`/results/${tag}`} onClick={() => handleSubmit(tag)} key={`${tag}-${index}`} className="tags__link" >{tag}</Link>
        )
    })
    
    console.log(tagsData)

    // if tags undefined or null, render loading
    if(!tagsData || tagsData === undefined) {
        return <div>Loading tags...</div>
    }

    return (
        <form className="tags__container">
            {/* <label className="tags__label">Related Searches</label> */}
            <div className='tags__content'>
                {/* <div className='tags__arrow tags__arrow--left'>L</div> */}
                <div className="tags__list">
                    {/* {console.log('testtags: ', testTags)} */}
                        {tagsData && tagsData !== undefined ? renderTags : '...'}
                        {/* {tagsData && popularTags()} */}
                    {/* {testTags && Object.keys(testTags).length > 0 && renderTags} */}
                </div>
                {/* <div className='tags__arrow tags__arrow--right'>R</div> */}
            </div>
        </form>
    )
}

export default UpdatedComponent(Tags);