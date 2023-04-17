import { useParams, useLoaderData } from "react-router-dom"
import { buildProducts } from "../data/productGenerator";
import Products from "../components/Products/AllProducts";
import Tags, { tagsLoader } from "../components/Tags";

export default function ResultsPage() {
    const {term} = useParams();
    const data = useLoaderData();

    console.log(data)

    console.log(term)

    return (
        <div className="">
            <Tags  products={data}/>
            <Products products={data} className='products__container'/>
        </div>
    )
}

export const resultsLoader = async() => {
    const res = await buildProducts()

    return res;
    // console.log(res.json());

}