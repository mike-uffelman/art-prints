import unsplash from "./unsplash";
import { buildProducts, getTags } from "./productGenerator";

export const search = async(term) => {

    const res = await unsplash.get('/search/photos', {
        params: {
            query: term
        }
    })

    const data = await buildProducts(res.data.results);

    const tags = await getTags(res.data.results);

    const resultsObj = {
        results: data,
        tags: Object.keys(tags)
    }

    return resultsObj;
}

