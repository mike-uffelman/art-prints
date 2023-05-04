import unsplash from "./unsplash";
import { buildProducts, getTags } from "./productGenerator";

export const search = async(term, page = 1) => {

    const res = await unsplash.get('/search/photos', {
        params: {
            query: term,
            page: page
            // per_page: 30
        }
    })

    console.log('response: ', res);
    const data = await buildProducts(res.data.results);

    const tags = await getTags(res.data.results);

    const resultsObj = {
        pages: res.headers.link,
        results: data,
        tags: Object.keys(tags),
        term: term
    }

    return resultsObj;
}

