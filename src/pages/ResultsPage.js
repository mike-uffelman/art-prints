import Products from "../components/Products/AllProducts";
import Tags from "../components/Tags/Tags";
import React from "react";
import { useSelector } from "react-redux";
import Pagination from "../components/Products/Pagination/Pagination";

// layout component for the search results page
export default function ResultsPage() {
    // get the search data from store
    const results = useSelector((state) => {
        return state.search
    })

    // filter tags 
    const tagsData = Object.entries(results.tags).filter(tags => tags[1] > 0).map(tag => tag[0])

    if(!results || results === undefined) {
        return <div>Loading...</div>
    }

    return (
        <React.Fragment >

            {/* check for tags and results, render components if defined, otherwise render a loading message */}
            {results.tags ? <Tags tagsData={tagsData}/> : 'Loading tags...'}
            {results.results ? <Products className='products__container' results={results.results}/> : 'Loading photos...'}
            
            {/* Render pagination button below content */}
            <Pagination />

        </React.Fragment>
    )
}