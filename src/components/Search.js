import { useState } from 'react';
import { Form, redirect } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import { addResults, reset } from '../store/slices/searchSlice';
import { buildReviews } from '../data/productGenerator';
import { search } from '../data/dataHelper';
import { addReviews } from '../store/slices/reviewsSlice';


// Search bar component
// user submits a search term into the input, component state 'term' updates as the term is entered (controlled), and on submit the handleSubmit callback clears the search object in the store, performs the search request, updates the store, builds reviews for the results and update the reviews store, finally the term is set back to blank

function Search() {
    const [term, setTerm] = useState('');
    const prevSearch = useSelector((state) => {
        return state.search;
    })
    const dispatch = useDispatch();

        
    const handleChange = (e) => {
        setTerm(e.target.value);
    }

    const handleSubmit = async (e) => {
        
        await dispatch(reset());
        
        const results = await search(
            term, 
            prevSearch.term === term ? prevSearch.tags : undefined
        );

        await dispatch(addResults(results));

        const reviews = await buildReviews(results);
        await dispatch(addReviews(reviews));
        setTerm('')
    }

    return (
        <section className='search'>
            <Form className='search__form' onSubmit={handleSubmit} action={`/results/${term}`}>
                <input className='search__input' onChange={handleChange} type='text' value={term}></input>
                <button className='search__btn'>Search</button>
            </Form>
        </section>
    )
}

export default Search;