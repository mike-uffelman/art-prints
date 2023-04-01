import testData from './testData.json';

export default async function buildProducts(data) {
    // console.log(testData)

    const newData = testData.map(product => {
        return {
            description: product.description || 'none',
            image_urls: product.urls,
            tags: product.tags,
            base_amt: (Math.random() * 10 + 6).toFixed(2)
        }

    })

    return newData;
    
}
