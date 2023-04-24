import './Tags.css';
import { useEffect, useState } from "react";
import { getTags } from "../data/productGenerator"
import { useLoaderData, Link, defer } from "react-router-dom"
import unsplash from "../data/unsplash";
import { useSelector } from 'react-redux';

export default function Tags({tagsData}) {
    // const [ tagsLoaded, setTagsLoaded ] = useState(false);
    // const [ tagList, setTagList ] = useState([])
    // const tags = useLoaderData();
    // setTagList(tags);
    // const results = useSelector((state) => {
    //     console.log(state.search) 
    //     return state.search; 
    // })
    // console.log('outside of useEffect: ', results)
    // const tagsObj = useSelector((state) => {
    //     console.log(state.search[0].tags)
    //     return state.search[0].tags;
    // })
    // console.log('loaded data for tags: ', tagList)
    useEffect(() => {
    //     console.log('tags component rendered')
    //     console.log('tags results: ', results)
        // const runGetTags = async() => {
        //     return await getTags(results)
        // }
        
        // runGetTags();
        // setTagList(runGetTags())
        // setTagsLoaded(true)
    //     console.log(tags)
        // console.log(testTags)
        console.log(tagsData)
    }, [])

    // const handleClick = async (e) => {
    //     // e.preventDefault();
    //     console.log(e.target.textContent);
        
    //     const res = await unsplash.get('/search/photos', {
    //         params: {
    //             query: e.target.textContent
    //         }
    //     })
    // }



    // console.log(tagsList)
    const renderTags = tagsData && tagsData.tags.map(tag => {
    //         // console.log(tag)
            return ( 
                <Link to={`/results/${tag}`} key={tag} className="tags__link" >{tag}</Link>
            )
        })

    if(!tagsData) {
        return <div>Loading tags...</div>
    }

    return (
        <form className="tags__container">
            <label className="tags__label">Related Searches</label>
            <div className="tags__list">
                tags list goes here...
                {/* {console.log('testtags: ', testTags)} */}
                    {tagsData ? renderTags : '...'}
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