import './NoProducts.css';
import React from 'react';

export default function NoProducts({results}) {

    return (
        <React.Fragment>
            <article className='noresults'>
                <h3 className='noresults__message'>No results found for {results ? `"${results.term}"` : 'Loading...'}</h3>

            </article>
        </React.Fragment>
    )
}