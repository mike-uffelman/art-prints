import './Pagination.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { search } from '../../../data/dataHelper';
import { addResults } from '../../../store/slices/searchSlice';

export default function Pagination() {
    const [ page, setPage ] = useState(2);

    const dispatch = useDispatch();
    const pages = useSelector((state) => {
        return state.search;
    })

    // const increment = () => {
    //     setPage(page+1);
    // }

    const handleLoadMore = async() => {
        setPage(page+1);
        const results = await search(pages.term, page);
        console.log(results)
        dispatch(addResults(results));

        // console.log('loading more results...')
        // console.log(page)
    }

    return (
        <div>
        <button onClick={handleLoadMore} className='pagination__btn'>Load More</button>
        <div>{page}</div>

        </div>
    )
}