import testData2 from './testData2.json';

export function hero() {

    const canvas = document.getElementById('hero');
    const ctx = canvas.getContext('2d');

    canvas.height = 400
    canvas.width = 600
    ctx.fillStyle = 'green';

    ctx.fillRect(10, 10, 150, 50)

    console.log('canvas data: ', testData2.flat())

    let imgs = [];
    // imgs[0].addEventListener('load', () => {

        testData2.flat().map(img => {
            // imgs.push(img.image_urls.thumb)
            // console.log(img.image_urls.thumb)
    
            const image = new Image();
            image.src = img.image_urls.thumb
            imgs.push(image)
            
        })
    // }, false)
    

    imgs.map((img, index) => {
        const startX = Math.floor(Math.random() * canvas.width);
        const startY = Math.floor(Math.random() * canvas.height)
        // ctx.beginPath();
        // ctx.moveTo(0, 0)
        // ctx.lineTo(100, 100)
        ctx.drawImage(img, startX, startY)


    })

    // return imgs
    // console.log(imgs)

    // imgs



}