import './Landing.css';
import React, { useEffect, useState, useRef } from 'react';
import testData2 from '../../data/testData2.json';
import Image from '../Image/Image';
import { hero } from '../../data/heroCanvas';
import heroImg from '../../hero-large.png';



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

    // useEffect(() => {
    //     const heroCoords = hero()
    //     console.log(heroCoords)
    //     // setWidth(heroRef.current.clientWidth)
    //     elRef.current.map((el, index) => {
    //         const polarity = Math.random() > .5 ? 1 : -1;
    //         const angle = Math.floor(Math.random() * 40) 

    //         el.current.style.left = `${heroCoords[index][0]}px`
    //         el.current.style.top = `${heroCoords[index][1]}px`

    //         el.current.style.transform = `rotate(${angle * polarity}deg) scale(.75)`

    //         // el.current.style.transform = `rotate(-40deg)`

    //         // el.current.style.transform = 
    //         //     `translate(${heroCoords[index][0]}px, ${heroCoords[index][1]}px) rotate(${Math.floor(Math.random()* 40)}deg) scale(.75)`

    //         // console.log(index, `translate(${heroCoords[index][0]}px, ${heroCoords[index][1]}px) rotate(${Math.floor(Math.random()* 40)}deg)`)
    //     })
    // })


    
    console.log('collage data: ', collage.flat())

    return (
        <div className='hero' ref={heroRef}>
            {/* This is the landing page! */}
            <canvas id='hero'></canvas>
            <div className='hero__detail'>
                <h1 className='hero__header'>
                    Welcome to Art Prints!
                </h1>
                <p className='hero__subtext'>Duis aute irure dolor in reprehenderit in voluptate.</p>
            </div>
            <img className='hero__img' src={heroImg} alt='hero'/>
            {/* {collage.flat().map((item, index) => {
        
                // elRef.current[index].style.transform = `translate(${Math.random() * 400}px, ${Math.random() * 400}px)`



                // elRef.current.style.transform = `rotate(${Math.floor(Math.random()* 60)}deg)`

                return (
                    <div ref={elRef.current[index]} className={`collage__item collage__item--${index}`}>
                        <Image product={item} className={`results collage collage-${index}`} />
                        
                    </div>


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