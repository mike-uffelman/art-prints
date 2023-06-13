import { useParams, useLoaderData } from "react-router-dom"
import { buildProducts, buildReviews } from "../data/productGenerator";
import Products from "../components/Products/AllProducts";
import Tags, { tagsLoader } from "../components/Tags";
import React, { useState, useEffect } from "react";
import { addResults } from "../store/slices/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { getTags } from "../data/productGenerator";
import Pagination from "../components/Products/Pagination/Pagination";

// layout component for the search results page

export default function ResultsPage() {
    // const [ tags, setTags ] = useState([]);
    // const {term} = useParams();
    
    // get the search data from store
    const results = useSelector((state) => {
        return state.search
    })


    // useEffect(() => {
    //     const data = getTags(results);
    //     console.log(data);
    //     setTags(data);
    // }, [])

    // const renderComponents = 

    // filter tags 
    const tagsData = Object.entries(results.tags).filter(tags => tags[1] > 0).map(tag => tag[0])
    console.log(tagsData)
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

// export const resultsLoader = async({params}) => {
    // return params
    
    // const res = await buildProducts()
    // console.log(res)
    // return res;
    // console.log(res.json());

// }