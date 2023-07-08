import unsplash from "./unsplash";
import { buildProducts, getTags } from "./productGenerator";

// search request - fetches data from api, builds a result object for components and state
export const search = async(term, prevTags = {}, page = 1) => {

    const res = await unsplash.get('/search/photos', {
        params: {
            query: term,
            page: page,
            content_filter: 'high',
            // per_page: 30
        }
    })

    const data = await buildProducts(res.data.results);

    const tags = await getTags(res.data.results);
    
    const allTags = prevTags && { ...prevTags, ...tags}

    allTags && Object.keys(allTags).forEach(key => {
        if(prevTags[key] && tags[key]) {
            allTags[key] = prevTags[key] + tags[key]
        }
    })

    const resultsObj = {
        pages: res.headers.link,
        results: data,
        tags: allTags,
        term: term
    }

    return resultsObj;
}

