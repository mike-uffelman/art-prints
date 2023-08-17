import testData2 from './testData2.json';

export function hero() {

    const canvas = document.getElementById('hero');
    const ctx = canvas.getContext('2d');

    canvas.height = 400
    canvas.width = 600


    // console.log('canvas data: ', testData2.flat())

    // let imgs = [];
    // imgs[0].addEventListener('load', () => {

        // testData2.flat().map(img => {
            // imgs.push(img.image_urls.thumb)
            // console.log(img.image_urls.thumb)
    
            // const image = new Image();
            // image.src = img.image_urls.thumb
            // imgs.push(image)
            
        // })
    // }, false)
    
    
    // imgs.map((img, index) => {
    //     img.addEventListener('load', () => {
    //         const startX = Math.floor(Math.random() * canvas.width);
    //         const startY = Math.floor(Math.random() * canvas.height)
    //         // ctx.beginPath();
    //         // ctx.moveTo(0, 0)
    //         // ctx.lineTo(100, 100)
    //         ctx.lineWidth = 10
    //         ctx.strokeStyle = 'white'
    //         // ctx.fill()


    //         ctx.moveTo(startX - 10, startY - 10  );
    //         ctx.lineTo(startX + (img.width * .5) + 10, startY - 10  )
    //         ctx.lineTo(startX - 10  + img.width * .5, startY - 10  + img.height * .5)
    //         ctx.lineTo(startX - 10, startY - 10  + img.height * .5)

    //         // ctx.setTransform(1, 1, .5, 1, 0, 1)
    //         ctx.closePath()
    //         ctx.stroke()
    //         ctx.drawImage(img, startX, startY, img.width * .5, img.height * .5 )


    //     }, false)
    // })

    // 
    // create sample coords
    // find sample furthest from current point


    // let samples = [[ 281, 182 ], [ 74, 25 ], [ 285, 70 ], [ 571, 148 ], [ 13, 251 ]]
    let samples = [];
    let coords = [[0, 0]];

    //? create a random coordintate
    function getCoord() {
        for(let i = 0; i < 5; i++) {
            const xCoord = Math.floor(Math.random() * canvas.width);
            const yCoord = Math.floor(Math.random() * canvas.height);
    
            samples.push([xCoord, yCoord])
        }
        
        // console.log(sample)
        return samples;
    }

    //? compute distance between two points
    function distance(a, b) {
        let dx = a[0] - b[0];
        let dy = a[1] - b[1];

        return Math.sqrt(dx * dx + dy * dy);
    }

    //? compare existing coords to new sample coords
    function compareSampleToCoord(samples, coords) {
        // const samples = [1, 2, 3, 4, 5];
        // const val = [1, 10, 20]
        // let samples = getCoord()

        // val.reduce((acc, curr) => {
            // console.log(curr)
            // gets distance of each, sorts by largest, returns largest
            // const diff = samples.map(s => s - curr).sort((a, b) => a - b)[0]
            // acc.push(diff)

        let maxDist = -Infinity;
        let furthestNum = null;


        for (let i = 0; i < samples.length; i++ ) {
            let minDist = Infinity;

            for (let j = 0; j < coords.length; j++ ) {
                // let dist = Math.abs(samples[i] - val[j]);
                let dist = distance(coords[j], samples[i])

                if(dist < minDist) {
                    minDist = dist;
                }
            }

            if (minDist > maxDist) {
                maxDist = minDist;
                furthestNum = samples[i]
            }

        }

        console.log(furthestNum)
        coords.push(furthestNum)
        console.log(coords)

        return coords
            
            // console.log(acc)
        // }, [])



        // val.map(v => {
        //     const a = samples.map(s => {
        //         return s - v
        //     })

        //     console.log()
        // })

        // coords.reduce((acc, cur) => {
        //     console.log(distance(coords[0], cur))

        // })


        // console.log('distance: ', distance(coords[0], sample[0]))


    }




    // ctx.strokeStyle = 'blue'

    // createCoords()

    // function createImgCoords() {
        // initiate 
        // if(coords.length < 3) {

        // }
        // getCoord()
        // compareSampleToCoord(samples, coords)

    // }

    while (coords.length < 40) {
        const s =  getCoord()
        // coords.push(s)
        console.log(s)
        compareSampleToCoord(s, coords)
        console.log(coords)
        // createImgCoords()

    }


    coords.map((coord, index) => {
        const [x, y] = coord
        console.log('coord map: ', coord, index)
        ctx.fillRect(x, y, 100, 100)
    })

    console.log(coords)


    // if(coords.length > 0) {
    //     for (let i = 0; i <= coords.length + 1; i++) {
    //         console.log(coords[i])
    //         ctx.fillRect(coords[i][0], coords[i][1], 10, 10)
    //         // ctx.stroke()
    //         // ctx.fill()
    
    //     }
    // }

    

    // ctx.fillRect(coords[0][1], coords[0][1], 5, 5)
    // ctx.fillRect(canvas.width / 2, canvas.height / 2, 5, 5)
    

    console.log('coords: ', coords)


    // return imgs
    // console.log(imgs)

    // imgs



}   

