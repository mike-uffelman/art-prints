// styles
import './Search.css';
// react, router
import { Form } from 'react-router-dom';
// components
import UpdatedComponent from '../withSearch';
// utilities and helpers
import PropTypes from 'prop-types';


// Search bar component
// user submits a search term into the input, component state 'term' updates as the term is entered (controlled), and on submit the handleSubmit callback clears the search object in the store, performs the search request, updates the store, builds reviews for the results and update the reviews store, finally the term is set back to blank

function Search({handleSubmit, term, setTerm, handleChange}) {
    const type = 'search'

    const disabled = term === '' ? true : false
        
    return (
        // <section className='search'>
            <Form  
                className='search__form' 
                onSubmit={() => handleSubmit(type)} 
                action={`/results/${term}`}
                name='search_form'
            >
                <input className='search__input' onChange={handleChange} type='text' value={term}></input>
                <button className='search__btn' disabled={disabled}>Search</button>
            </Form>
        // </section>
    )
}

export default UpdatedComponent(Search);

Search.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    term: PropTypes.string,
    handleChange: PropTypes.func.isRequired
}