import { useParams, useLoaderData } from "react-router-dom"
import { buildProducts } from "../data/productGenerator";
import Products from "../components/Products/AllProducts";
import Tags, { tagsLoader } from "../components/Tags";
import React from "react";

export default function ResultsPage() {
    const {term} = useParams();
    const data = useLoaderData();

    console.log(data)

    console.log(term)

    return (
        <React.Fragment >
            <Tags  products={data}/>
            <Products products={data} className='products__container'/>
        </React.Fragment>
    )
}

export const resultsLoader = async() => {
    const res = await buildProducts()

    return res;
    // console.log(res.json());

}