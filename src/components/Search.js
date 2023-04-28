import { useState } from 'react';
import { Form, redirect } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import { addResults } from '../store/slices/searchSlice';
import { buildReviews } from '../data/productGenerator';
import { search } from '../data/dataHelper';
import { addReviews } from '../store/slices/reviewsSlice';


function Search() {
    const [term, setTerm] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setTerm(e.target.value);
    }

    const handleSubmit = async (e) => {
        const results = await search(term);
        await dispatch(addResults(results));

        // console.log(results)
        const reviews = await buildReviews(results);
        await dispatch(addReviews(reviews));
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