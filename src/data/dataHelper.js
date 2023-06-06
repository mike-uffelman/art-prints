import unsplash from "./unsplash";
import { buildProducts, getTags } from "./productGenerator";
import { all } from "axios";

export const search = async(term, prevTags = {}, page = 1) => {

    const res = await unsplash.get('/search/photos', {
        params: {
            query: term,
            page: page
            // per_page: 30
        }
    })

    // console.log('response: ', res);
    const data = await buildProducts(res.data.results);

    const tags = await getTags(res.data.results);
    
    // console.log(prevTags, tags)

    const allTags = prevTags && { ...prevTags, ...tags}

    allTags && Object.keys(allTags).forEach(key => {
        if(prevTags[key] && tags[key]) {
            allTags[key] = prevTags[key] + tags[key]
        }
    })

    // console.log(allTags)

    const resultsObj = {
        pages: res.headers.link,
        results: data,
        tags: allTags,
        term: term
    }

    return resultsObj;
}

