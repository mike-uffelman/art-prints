import './Landing.css';
import React, { useEffect, useState, useRef } from 'react';
import testData2 from '../../data/testData2.json';
import Image from '../Image/Image';
import { hero } from '../../data/heroCanvas';



export default function Landing() {
    const [ collage, setCollage ] = useState(testData2);
    // const [ width, setWidth ] = useState(0)
    const elRef = useRef(testData2.flat().map(() => React.createRef()));
    const heroRef = useRef();

    // useEffect(() => {
    //     console.log('heroRef', heroRef.current)
    //     elRef.current.map(el => {
    //         el.current.style.transform = `translate(${Math.random() * heroRef.current.clientWidth}px, ${Math.random() * heroRef.current.clientHeight}px) rotate(${Math.floor(Math.random()* 40)}deg) scale(.75)`

    //     })
    // }, [])

    useEffect(() => {
        const heroVar = hero()
        // setWidth(heroRef.current.clientWidth)
        elRef.current.map(el => {
            el.current.style.transform = `translate(${Math.random() * heroRef.current.clientWidth}px, ${Math.random() * heroRef.current.clientHeight}px) rotate(${Math.floor(Math.random()* 40)}deg) scale(.75)`

            // console.log(el)
        })
    })


    
    console.log('collage data: ', collage.flat())

    return (
        <div className='hero' ref={heroRef}>
            This is the landing page!
            <canvas id='hero'></canvas>
            {collage.flat().map((item, index) => {
        
                // elRef.current[index].style.transform = `translate(${Math.random() * 400}px, ${Math.random() * 400}px)`



                // elRef.current.style.transform = `rotate(${Math.floor(Math.random()* 60)}deg)`

                return (
                    <div ref={elRef.current[index]} className={`collage__item collage__item--${index}`}>
                        <Image product={item} className={`results collage collage-${index}`} />
                        
                    </div>

                )
            })}
            {/* <div className='hero__img'>
                <h1>Find your art today</h1>
                <p></p>
                <button className='hero__btn'>Browse</button>
                <button className='hero__btn'></button>
                
            </div> */}
            
        </div>
    )
}