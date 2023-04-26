import { useState } from 'react';
import { Form, redirect } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import unsplash from '../data/unsplash';
import { addResults } from '../store/slices/searchSlice';
import { buildProducts, getTags } from '../data/productGenerator';
import { search } from '../data/dataHelper';

function Search() {
    const [term, setTerm] = useState('');
    // const term = useSelector((state) => state.)
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setTerm(e.target.value)
    }

    const handleSubmit = async (e) => {
        const results = await search(term);

        await dispatch(addResults(results))
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

export const searchAction = () => {
    console.log()
    // redirect(`/results/boats`)
}

export default Search;