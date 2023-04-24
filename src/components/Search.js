import { useState } from 'react';
import { Form, redirect } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import unsplash from '../data/unsplash';
import { addResults } from '../store/slices/searchSlice';
import { buildProducts, getTags } from '../data/productGenerator';

function Search() {
    const [term, setTerm] = useState('');
    // const term = useSelector((state) => state.)
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setTerm(e.target.value)
    }

    const handleSubmit = async (e) => {
        // e.preventDefault();

        //*----------------uncomment below for search
        const res = await unsplash.get('/search/photos', {
            params: { query: term }
        });
        console.log(term, res.data.results)


        const data = await buildProducts(res.data.results); // search 

        const tags = await getTags(res.data.results);
        console.log('tags: ', tags)
        // *-----------------
        // const data = await buildProducts();

        const resultsObj = {
            results: data,
            tags: Object.keys(tags)
        }

        await dispatch(addResults(resultsObj))

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