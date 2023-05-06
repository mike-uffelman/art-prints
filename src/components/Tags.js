import './Tags.css';
import { useEffect, useState } from "react";
import { buildProducts, getTags } from "../data/productGenerator"
import { useLoaderData, Link, defer, resolvePath } from "react-router-dom"
import unsplash from "../data/unsplash";
import { useDispatch, useSelector } from 'react-redux';
import { addResults, reset } from '../store/slices/searchSlice';
import { search } from '../data/dataHelper';

export default function Tags({tagsData}) {
    const dispatch = useDispatch();

    // useEffect(() => {

    // }, [])

    const handleClick = async (term) => {
        await dispatch(reset());
        const results = await search(term);
        await dispatch(addResults(results));
    }



    // console.log(tagsList)
    const renderTags = tagsData.flat() && tagsData.flat().map((tag, index) => {
    //         // console.log(tag)
            return ( 
                <Link to={`/results/${tag}`} onClick={() => handleClick(tag)} key={`${tag}-${index}`} className="tags__link" >{tag}</Link>
            )
        })

    if(!tagsData[0] || tagsData[0] === undefined) {
        return <div>Loading tags...</div>
    }

    return (
        <form className="tags__container">
            <label className="tags__label">Related Searches</label>
            <div className="tags__list">
                {/* {console.log('testtags: ', testTags)} */}
                    {tagsData[0] ? renderTags : '...'}
                {/* {testTags && Object.keys(testTags).length > 0 && renderTags} */}
            </div>
        </form>
    )
}

// export const tagsLoader = async(data) => {
//     const data = useSelector((state) => {
//         return state.search.flat();
//     })
//     console.log(data)
    // const tags = await getTags(data);
//     // console.log('tagloader', tags)

//     // const tags = {
//     //     "cat": 10,
//     //     "animal": 9,
//     //     "pet": 3,
//     //     "chicago": 1,
//     //     "rescue": 1,
//     //     "ginger": 1,
//     //     "grey": 1,
//     //     "snowbengal": 1,
//     //     "kitten": 1,
//     //     "delft": 1,
//     //     "butterfly": 1
//     //   }
    // console.log(Object.keys(tags))

    // return Object.keys(tags);
// }