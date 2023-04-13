import { useEffect, useState } from "react";
import { getTags } from "../data/productGenerator"
import { useLoaderData, Link } from "react-router-dom"
import unsplash from "../data/unsplash";

export default function Tags({products}) {
    const [ tags, setTags ] = useState([])
    // const tags = useLoaderData();

    // console.log('loaded data for tags: ', tags)
    useEffect(() => {
        const runGetTags = async() => {
            setTags(getTags(products))

        }
        runGetTags();

    }, [])

    const handleClick = async (e) => {
        // e.preventDefault();
        console.log(e.target.textContent);
        
        const res = await unsplash.get('/search/photos', {
            params: {
                query: e.target.textContent
            }
        })
    }


    // console.log(tagsList)
    const renderTags = Object.keys(tags).map(tag => {
        // const size = Object.entries
        return (
            <Link to={`/results/${tag}`} key={tag} className="tags__link" onClick={handleClick}>{tag}</Link>
        )
    })

    return (
        <form className="tags__container">
            <label className="tags__label">Related Searches</label>
            <div className="tags__list">
                {renderTags}
            </div>
        </form>
    )
}

export const tagsLoader = (data) => {
    // const tags = getTags(data)
    // console.log('tagloader', tags)
    // return tags;
}