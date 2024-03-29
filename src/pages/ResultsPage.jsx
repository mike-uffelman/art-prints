import Products from "../components/Products/AllProducts";
import Tags from "../components/Tags/Tags";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Pagination from "../components/Products/Pagination/Pagination";
import NoProducts from "../components/Products/NoProducts";

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
    
    if (results.results.flat().length === 0) {
        return <NoProducts results={results}/>
    } else if (results.results.flat().length > 0) {
        return (
            <React.Fragment >

                {/* check for tags and results, render components if defined, otherwise render a loading message */}
                {tagsData ? <Tags tagsData={tagsData}/> : 'Loading Tags...'}
                {results.results.flat().length > 0 ? <Products className='products__container' results={results.results}/> : 'Loading photos...'}

                {/* Render pagination button below content */}
                <Pagination />

            </React.Fragment>
        
        )
    } 

    // if(isLoading && results.results.flat().length === 0) {
    //     console.log('Loading: ', isLoading, results.results.flat().length, results)

    //     return (
    //         <div className='loading'>Looking for &quot;{term}&quot;</div>
    //     )
    // } else 
    
    
    

    
}