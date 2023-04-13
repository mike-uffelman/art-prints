import { useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';

function Search({onSearch}) {
    const [term, setTerm] = useState('');
    // const term = useSelector((state) => state.)
    // const dispatch = useDispatch();

    const handleChange = (e) => {
        setTerm(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(term);
    
    }

    return (
        <section className='search'>
            <form className='search__form' onSubmit={handleSubmit}>
                <input className='search__input' onChange={handleChange} type='text' value={term}></input>
                <button className='search__btn'>Search</button>
            </form>
        </section>
    )
}

export default Search;