import './Pagination.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { search } from '../../../data/dataHelper';
import { addResults } from '../../../store/slices/searchSlice';
import { addReviews } from '../../../store/slices/reviewsSlice';
import { buildReviews } from '../../../data/productGenerator';
import UpdatedComponent from '../../withSearch';

function Pagination({handleSubmit}) {
    const type = 'load more'
    // const [ page, setPage ] = useState(2);

    // const dispatch = useDispatch();
    // const searchState = useSelector((state) => {
    //     return state.search;
    // })

    // const increment = () => {
    //     setPage(page+1);
    // }

    // on click callback, to get more search results, increments page state count, makes call to search and dispatches to update state
    // const handleLoadMore = async() => {
    //     setPage(page+1);
    //     const results = await search(searchState.term, searchState.tags, page);
    //     // console.log(results)
    //     dispatch(addResults(results));

    //     const reviews = await buildReviews(results);
    //     dispatch(addReviews(reviews))

        

        // console.log('loading more results...')
        // console.log(page)
    // }

    return (
        <div className='pagination'>
        <button onClick={() => handleSubmit(type)} className='pagination__btn'>Load More</button>

        </div>
    )
}

export default UpdatedComponent(Pagination);