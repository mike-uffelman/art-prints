import testData from './testData.json';

export async function buildProducts(data) {
    // console.log(testData)

    const newData = testData.map(product => {
        return {
            id: product.id,
            description: product.description,
            alt_description: product.alt_description,
            image_urls: product.urls,
            tags: product.tags,
            base_amt: (Math.random() * 10 + 6).toFixed(2),
            width: product.width,
            height: product.height
        }

    })

    return newData;
    
}



export function getTags(products) {
    const tags = products.reduce((acc, curr) => {
        acc.push(curr.tags.map(i => i.title))
        return acc;
    },[]).flat()

    console.log(tags)

    // const tagsTest = tags.reduce((acc, curr) => {
        
    // });

    // console.log('tags test: ', tagsTest)

    const tagsCounter = tags.reduce((acc, curr) => {
        
        
        let key = curr;
        if(!acc[key]) acc[key] = 0;
        acc[key] = acc[key] + 1;
        return acc;
    }, {})

    console.log('tagsCounter', tagsCounter)

    return tagsCounter;
}



// const reduceDailyTransactions = (data) => {
//     return data
//         .reduce((accumulator, current) => {
//             let key = current.date
//             if(!accumulator[key]) accumulator[key] = [];
//             accumulator[key].push(current)
//             return accumulator;
//         }, {})
// }