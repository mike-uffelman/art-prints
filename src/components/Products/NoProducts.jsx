import './NoProducts.css';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function NoProducts({results}) {
    const {term} = useParams()

    return (
        <React.Fragment>
            <article className='noresults'>
                <h3 className='noresults__message'>No results found for {results ? `"${term}"` : 'Loading...'}</h3>

            </article>
        </React.Fragment>
    )
}