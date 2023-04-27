import testData from './testData.json';
import { faker } from '@faker-js/faker';
import {v4 as uuidv4 } from 'uuid';


export async function buildProducts(data) {
    // console.log(testData)

    console.log(data)

    const newData = data.map(product => {
        // return a random stock quantity, run a qualifier, if random number ===0 then stock is zero, otherwise return a random number over 0 
        const stockQuantity = () => {
            if((Math.round(Math.random()) * 5) === 0) {
                return 0;
            } else {
                return Math.round(Math.random() * 100  + 1);
            }
        }

        return {
            id: product.id,
            description: product.description || 'none',
            alt_description: product.alt_description || 'none',
            image_urls: product.urls || 'none',
            tags: product.tags || [],
            base_amt: (Math.random() * 10 + 6).toFixed(2),
            width: product.width || 2500,
            height: product.height || 1600,
            orientation: product.width > product.height ? 'landscape' : 'portrait',
            quantity_available: stockQuantity(),
            owner: product.user || 'none',
            likes: (Math.random() * 1000).toFixed(),
            created_at: product.created_at
        }

    })

    return newData;
    
}

export async function buildReviews(products) {
    // console.log('is buildReviews workign???')
    // console.log(faker.internet.userName(), faker.lorem.paragraph(), faker.date.between('2020-04-25T13:01:20Z', new Date().toISOString()))

    const today = new Date().toISOString();
    console.log(testData)

    const reviews = testData.map(product => {
        let productReviews = [];

        const reviewCount = Math.ceil(Math.random() * 10);

        for (let i = 0; i < reviewCount; i++) {
            productReviews.push({
                product_id: product.id,
                review_id: uuidv4(),
                comment: faker.lorem.paragraph(),
                date: faker.date.between('2020-04-25T13:01:20Z', today),
                user: faker.internet.userName(),
                rating: Math.ceil(Math.random() * 5)
            })
        }
        

        return productReviews;
    })

    console.log(reviews)


    // return products && products.map(product => console.log('hello: ', product))


}

export function getTags(products) {
    const tags = products.flat().reduce((acc, curr) => {
        acc.push(curr.tags.map(i => i.title))
        return acc;
    },[]).flat()

    // console.log(tags)

    // const tagsTest = tags.reduce((acc, curr) => {
        
    // });

    // console.log('tags test: ', tagsTest)

    const tagsCounter = tags.reduce((acc, curr) => {
        
        
        let key = curr;
        if(!acc[key]) acc[key] = 0;
        acc[key] = acc[key] + 1;
        return acc;
    }, {})

    // console.log('tagsCounter', tagsCounter)

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