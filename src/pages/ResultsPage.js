import { useParams, useLoaderData } from "react-router-dom"
import { buildProducts } from "../data/productGenerator";
import Products from "../components/Products/AllProducts";
import Tags, { tagsLoader } from "../components/Tags";
import React, { useState, useEffect } from "react";
import { addResults } from "../store/slices/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { getTags } from "../data/productGenerator";



export default function ResultsPage() {
    // const [ tags, setTags ] = useState([]);
    // const {term} = useParams();
    
    const results = useSelector((state) => {
        console.log(state.search)
        return state.search;
    })

    // useEffect(() => {
    //     const data = getTags(results);
    //     console.log(data);
    //     setTags(data);
    // }, [])

    // const renderComponents = 

    if(!results) {
        return <div>Loading...</div>
    }

    return (
        <React.Fragment >
            <Tags tagsData={results[0]}/>

            <Products className='products__container' results={results[0]} />

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