import { useState } from 'react';
import { Form } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { addResults, reset } from '../../store/slices/searchSlice';
import { addReviews } from '../../store/slices/reviewsSlice';
import { addHistory } from '../../store/slices/historySlice';

import { buildReviews } from '../../data/productGenerator';
import { search } from '../../data/dataHelper';
import UpdatedComponent from '../withSearch';


// Search bar component
// user submits a search term into the input, component state 'term' updates as the term is entered (controlled), and on submit the handleSubmit callback clears the search object in the store, performs the search request, updates the store, builds reviews for the results and update the reviews store, finally the term is set back to blank

function Search({handleSubmit, term, setTerm, handleChange}) {
    const type = 'search'
    // const [term, setTerm] = useState('');
    // const store = useSelector((state) => {
    //     return state;
    // })
    // const dispatch = useDispatch();

        
    // const handleChange = (e) => {
    //     setTerm(e.target.value);
    // }

    // const handleSubmit = async (e) => {
        
    //     await dispatch(reset());
        
    //     const results = await search(
    //         term, 
    //         store.search.term === term ? store.search.tags : undefined
    //     );

    //     await dispatch(addResults(results));

    //     const reviews = await buildReviews(results);
    //     await dispatch(addReviews(reviews));
    
    // const submittingForm = async (e) => {
    //     e.preventDefault();
    //     await handleSubmit(type)
    //     clear()
    // }

        
    //     !store.history.includes(term) && await dispatch(addHistory(term))
    //     setTerm('')
    // }

    return (
        <section className='search'>
            <Form  
                className='search__form' 
                onSubmit={() => {
                    handleSubmit(type)
                }} 
                action={`/results/${term}`}
            >
                <input className='search__input' onChange={handleChange} type='text' value={term}></input>
                <button className='search__btn'>Search</button>
            </Form>
        </section>
    )
}

export default UpdatedComponent(Search);