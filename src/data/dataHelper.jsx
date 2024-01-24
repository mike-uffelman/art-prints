import axios from "axios";
import unsplash from "./unsplash";
import { buildProducts, getTags } from "./productGenerator";
import { NETLIFY_SERVER_URL } from "./config";

// search request - sends data to fectch-photos.js to make the request, returns data from api, builds a result object for components and state
export const search = async(term, prevTags = {}, page = 1) => {

    try {
        const requestOptions = {
            url: NETLIFY_SERVER_URL,
            method: 'get',
            params: {
                query: term,
                page: page,
                content_filter: 'high',
                // per_page: 30
            }
        }

        const res = await axios.request(requestOptions)
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
    } catch(error) {
        console.log(error)
    }
    
}

