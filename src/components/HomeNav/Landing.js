import heroThumb from '../../hero-thumb.jpg';
import './Landing.css';
import React, { useEffect, useState, useRef, Suspense, lazy } from 'react';
import testData2 from '../../data/testData2.json';
import Image from '../Image/Image';
import { hero } from '../../data/heroCanvas';
import heroXLImg from '../../hero-extralarge.jpg';
import heroLgImg from '../../hero-large.jpg';
import heroSmImg from '../../hero-small.jpg';
import heroMdImg from '../../hero-medium.jpg'

// const heroXLImg = lazy(() => import('../../hero-extralarge.png'))
// const heroLgImg = lazy(() => import('../../hero-large.png'))
// const heroSmImg = lazy(() => import('../../hero-small.png'))
// const heroMdImg = lazy(() => import('../../hero-medium.png'))






export default function Landing() {
    const [ collage, setCollage ] = useState(testData2);
    const [ imgLoaded, setImgLoaded ] = useState(false);
    // const [ width, setWidth ] = useState(0)
    const elRef = useRef(testData2.flat().map(() => React.createRef()));
    const heroRef = useRef();

    useEffect(() => {
    //     console.log('heroRef', heroRef.current)
    //     elRef.current.map(el => {
    //         el.current.style.transform = `translate(${Math.random() * heroRef.current.clientWidth}px, ${Math.random() * heroRef.current.clientHeight}px) rotate(${Math.floor(Math.random()* 40)}deg) scale(.75)`

    //     })
        
        // new Promise((resolve, reject) => {
        //     const img = import('../../hero-extralarge.png')
        //     resolve(setImgLoaded(true));
        //     console.log('image loaded', img, imgLoaded)
        // })

//         import heroXLImg from '../../hero-extralarge.png';
// import heroLgImg from '../../hero-large.png';
// import heroSmImg from '../../hero-small.png';
// import heroMdImg from '../../hero-medium.png'



        // setTimeout(() => {
        //     setImgLoaded(true)
        // }, 2000)

    }, [])


    //? to implement collage positioning -------------------
    // useEffect(() => {
    //     const heroCoords = hero()
    //     console.log(heroCoords)
    //     // setWidth(heroRef.current.clientWidth)
    //     elRef.current.map((el, index) => {
    //         const polarity = Math.random() > .5 ? 1 : -1;
    //         const angle = Math.floor(Math.random() * 40) 

    //         el.current.style.left = `${heroCoords[index][0]}px`
    //         el.current.style.top = `${heroCoords[index][1]}px`

    //         el.current.style.transform = `rotate(${angle * polarity}deg) scale(${Math.random() * .5 + .25})`

    //     })
    // }, [])
    //? ------------------------------------------------------

    const loadFade = imgLoaded && 'loadFade'

    
    // console.log('collage data: ', collage.flat())

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
            {/* <picture>
                <source
                    type='image/png' 
                    srcset={heroSmall} 
                    media='(min-width: 600px)'
                > */}
                {/* {!imgLoaded
                    ?  
                        <img 
                            className='hero__img' 
                            src={heroThumb}

                            srcSet={`${heroThumb} 500w`}
                            // sizes={{'(max-width: 300px)', '300px'}}
                            alt='hero' 
                            loading='eager'
                        />    
                    : */}
                    {/* <img 
                    className={`hero__img ${loadFade}`} 
                    src={heroThumb}

                    srcSet={`${heroThumb} 500w`}
                    // sizes={{'(max-width: 300px)', '300px'}}
                    alt='hero' 
                    loading='eager'
                />     */}
                    <img 
                    className={`hero__img ${loadFade}`} 
                    src={heroXLImg}

                    srcSet={imgLoaded ? `${heroMdImg} 300w, ${heroLgImg} 1080w, ${heroXLImg} 1080w` : `${heroThumb} 500w`}
                    // sizes={{'(max-width: 300px)', '300px'}}
                    alt='hero' 
                    fetchpriority='high'
                    onLoad={() => {
                        
                        setImgLoaded(true)
                    }}

                    // loading='eager'
                />    
            {/* } */}
                
                {/* </source> */}
            {/* // </picture> */}
            
            {/* collage positioning ---------------------------- */}
            {/* {collage.flat().map((item, index) => {
        
                // elRef.current[index].style.transform = `translate(${Math.random() * 400}px, ${Math.random() * 400}px)`



                // elRef.current.style.transform = `rotate(${Math.floor(Math.random()* 60)}deg)`

                return (
                    <div ref={elRef.current[index]} className={`collage__item collage__item--${index}`}>
                        <Image product={item} className={`results collage collage-${index}`} />
                        
                    </div>


                )
            })} */}
            {/* ---------------------------------------------------- */}
            
            
        </div>
    )
}