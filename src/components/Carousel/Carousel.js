import './Carousel.css';
import React, {useState, useEffect, useRef} from 'react';
import { createPortal } from 'react-dom';
import Image from '../Image';
import PhotoModal from '../Products/PhotoModal';

// pass images into carousel
export default function Carousel({product, isModalOpen, handleImgClick, toggleModal }) {
    const [slideIndex, setSlideIndex] = useState(0);
    const imgEl = useRef();
    // console.log(slideIndex)
    // console.log(product);

    useEffect(() => {
        console.log(slideIndex)
    }, [slideIndex])

    
    const carouselImages = () => {
        for (let i = 0; i < 3; i++) {
            const show = slideIndex === i ? 'show' : '';
            let thirdPic;
            if (i === 2) {
                thirdPic = 'alternativePic'
            }


    
            return (
                // <div>asdf</div>
                <React.Fragment>
                    <Image product={product} toggleModal={handleImgClick} className={`product ${product.orientation} ${show} ${thirdPic}`} />
                    
                    {isModalOpen && createPortal(
                        <PhotoModal product={product} image={product.image_urls.regular} alt={product.description} className={``} toggleModal={handleImgClick} />, document.body
                    )}
                </React.Fragment>
                 
            )
        } 
        // product && product.carousel_links.map((link, index) => {
        

        // return <img ref={imgEl} className={`carousel--img ${show} ${index}`} width={100} height={100} key={`${link}-${index}`} alt={`${index}`} src={link}></img>
    }

    // function showSlides(n) {
    //     // var i;
    //     let slides = document.getElementsByClassName("mySlides");
    //     if (n > slides.length) {
    //         setSlideIndex(1)
    //     }
    //     if (n < 1) {
    //         setSlideIndex(slides.length)
    //     }
    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";
    //     }

    //     slides[slideIndex - 1].style.display = "block";

    // }

    const handleClick = (n) => {
        console.log(slideIndex)
        setSlideIndex(slideIndex + n)
        console.log(slideIndex)

        // let slide = slideIndex;
        // setSlideIndex(slideIndex + n)
        // slide = slideIndex + n
        // let pics = 2;

        // if(slide > pics) {
        //     setSlideIndex(0)
        // }
        // if(slide < 1) {
        //     setSlideIndex(pics);
        // }

        // console.log(slide)
    }

    return (
        <div className='carousel'>
            <div className='direction prev' onClick={() => handleClick(-1)}>&lt; Prev</div>
                {product ? carouselImages() : 'loading...'}

            <div className='direction next' onClick={() => handleClick(1)}>Next &gt;</div>
        </div>
                
    )
}