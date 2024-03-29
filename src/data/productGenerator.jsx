// import testData from './testData.json';
import { faker } from '@faker-js/faker';
import {v4 as uuidv4 } from 'uuid';

// const faker = await import('@faker-js/faker')



// builds each product based on the data response from api request
export async function buildProducts(data) {

    // console.log(data);
    const newData = data.map(product => {
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
            created_at: product.created_at,
            review_count: Math.round(Math.random() * 1000)

        }
    })

    return newData;
    
}

// builds product reviews for each product, uses faker.js and uuid
export async function buildReviews(products) {
    const today = new Date().toISOString();

    const reviews = products.results.map(product => {
        const { created_at, id } = product
        let productReviews = [];
        const reviewCount = Math.ceil(Math.random() * 30);

        for (let i = 0; i < reviewCount; i++) {
            const date = faker.date.between({created_at, today})

            productReviews.push({
                product_id: id,
                review_id: uuidv4(),
                comment: {
                    title: faker.lorem.words(),
                    comments: faker.lorem.paragraph(),
                },
                date: date.toString(),
                user: faker.internet.userName(),
                rating: Math.ceil(Math.random() * 5),
            })
        }
        return productReviews;
    })
    return reviews
}

// builds a tags object, with a tag property and count of times appeared in product results
export function getTags(products) {
    
    const tags = products.flat().reduce((acc, curr) => {
        acc.push(curr.tags.map(i => i.title))
        return acc;
    },[]).flat()

    const tagsCounter = tags.reduce((acc, curr) => {
        let key = curr;
        if(!acc[key]) acc[key] = 0;
        acc[key] = acc[key] + 1;
        return acc;
    }, {})
    return tagsCounter;
}