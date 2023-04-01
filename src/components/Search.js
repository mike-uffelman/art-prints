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
        <section>
            <form className='' onSubmit={handleSubmit}>
                <input className='' onChange={handleChange} type='text' value={term}></input>
                <button className=''>Search</button>
            </form>
        </section>
    )
}

export default Search;