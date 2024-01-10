import testData2 from './testData2.json';

export function hero() {
    console.log(testData2.flat().length)
    const canvas = document.getElementById('hero');
    const ctx = canvas.getContext('2d');

    canvas.height = document.querySelector('.hero').clientHeight - 250
    canvas.width = document.querySelector('.hero').clientWidth

    console.log(canvas.width, canvas.height)

    // let samples = [[ 281, 182 ], [ 74, 25 ], [ 285, 70 ], [ 571, 148 ], [ 13, 251 ]]
    let samples = [];
    let coords = [
        [-100, -100], [canvas.width * .5, -100], [canvas.width * .25, -100], [canvas.width * .75, -100], [canvas.width + 100, -100], [canvas.width + 100, canvas.height + 100], [canvas.width + 100, canvas.height * .25], [canvas.width + 100, canvas.height * .75], [canvas.width + 100, canvas.height * .5], [canvas.width * .5, canvas.height + 100], [canvas.width * .25, canvas.height + 100], [canvas.width * .75, canvas.height + 100], [-100, canvas.height +100], [-100, canvas.height * .5], [-100, canvas.height * .25], [-100, canvas.height * .75]
    ];

    //? create a random coordintate
    function getCoord() {
        for(let i = 0; i < 10; i++) {
            const xCoord = Math.floor(Math.random() * canvas.width);
            const yCoord = Math.floor(Math.random() * canvas.height);
    
            // console.log(xCoord, yCoord)
            samples.push([xCoord, yCoord])
        }
        
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

        coords.push(furthestNum)
    }




    while (coords.length < 200) {
        const s =  getCoord()
        compareSampleToCoord(s, coords)
    }

    // coords.map((coord, index) => {
    //     const [x, y] = coord
    //     return ctx.fillText(index, x, y)
    // })

    return coords;

}   

