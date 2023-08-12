import './Landing.css';
import React, { useEffect, useState } from 'react';
import testData2 from '../../data/testData2.json';
import Image from '../Image/Image';
import { hero } from '../../data/heroCanvas';



export default function Landing() {
    const [ collage, setCollage ] = useState(testData2);

    useEffect(() => {
        hero()

    }, [])

    
    console.log('collage data: ', collage.flat())

    return (
        <div className='hero'>
            This is the landing page!
            <canvas id='hero'></canvas>
            {/* {collage.flat().map((item, index) => {

                return (
                    <Image product={item} className={`results collage collage-${index}`} />

                )
            })} */}
            {/* <div className='hero__img'>
                <h1>Find your art today</h1>
                <p></p>
                <button className='hero__btn'>Browse</button>
                <button className='hero__btn'></button>
                
            </div> */}
            
        </div>
    )
}