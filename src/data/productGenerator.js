import testData from './testData.json';
import { faker } from '@faker-js/faker';
import {v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';


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
            carousel_links: {
                framed: {
                    url: 'https://images.pexels.com/photos/139764/pexels-photo-139764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    styles: ''
                }, 
                unframed: {
                    url: 'https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    styles: ''
                },
                scene: {
                    url: buildScenePhoto('https://images.pexels.com/photos/139764/pexels-photo-139764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
                    styles: ''
                }
            },
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

function buildScenePhoto(src, orientation, width, height) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext("2d");

    const image = new Image();
    image.src = './images/room.jpg';
    image.style.filter = 'blur(2px)'

    canvas.width = image.width;
    canvas.height = image.height;

    const newImage = new Image();
    newImage.src = src

    console.log(newImage)
    // newImage.style.height = '49px';
    // newImage.style.width = '32px';

    image.addEventListener('load', () => {
        ctx.drawImage(image, 0, 0);
    }, false)


    newImage.addEventListener('load', () => {
        console.log(image.src)
        // ctx.drawImage(newImage, 43, 75, 129, 178)
        if(image.src.includes('landscape')) {
            // ctx.fillStyle = 'white'
            // ctx.fillRect(553, 370, 317, 245);
            // ctx.beginPath();
            const frameWidth = 317
            const frameHeight = 239

            ctx.lineWidth = 1;
            ctx.moveTo(553, 373);
            ctx.lineTo(870, 373);
            ctx.lineTo(865, 612);
            ctx.lineTo(555, 612);
            ctx.closePath();
            ctx.fillStyle = 'rgb(247, 247, 247)'
            ctx.fill()
            
            ctx.strokeStyle = 'white'
            ctx.stroke()
            ctx.transform(1, 0.003, -0.003, 1, 0, 0);

            ctx.drawImage(newImage, 573, 393, frameWidth - 40, frameHeight - 40)

        } else {
            ctx.drawImage(newImage, 54, 86, 108, 156)

        }
        

    }, false)
    
    const dataURL = canvas.toDataURL('image/png', 1.0);
    console.log(dataURL)

    // console.log('building scene photo...', src)
    
}

// builds product reviews for each product, uses faker.js and uuid
export async function buildReviews(products) {
    const today = new Date().toISOString();

    const reviews = products.results.map(product => {
        let productReviews = [];
        const reviewCount = Math.ceil(Math.random() * 30);

        for (let i = 0; i < reviewCount; i++) {
            const date = faker.date.between(product.created_at, today)

            productReviews.push({
                product_id: product.id,
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
    // console.log(tagsCounter)
    return tagsCounter;
}