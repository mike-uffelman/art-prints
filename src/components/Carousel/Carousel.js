import './Carousel.css';
import React, {useState, useEffect, useRef} from 'react';
import { createPortal } from 'react-dom';
import Image from '../Image';
import PhotoModal from '../Products/PhotoModal';

// pass images into carousel
export default function Carousel({product, isModalOpen, handleImgClick, toggleModal }) {
    const [slideIndex, setSlideIndex] = useState(0);
    const imgEl = useRef();
    console.log(slideIndex)
    console.log(product);

    

    // var slideIndex = 1;
    // showSlides(slideIndex);

    // // function plusSlides(n) {
    // //     showSlides(slideIndex += n);
    // // }

    // // function currentSlide(n) {
    // //     showSlides(slideIndex = n);
    // // }

    // useEffect(() => {
    //     console.log(slideIndex)
    // }, [slideIndex])

    

    const carouselImages = product && product.carousel_links.map((link, index) => {
        const show = slideIndex === index ? 'show' : '';
        console.log(link)

        return (
            <React.Fragment>
                <Image product={product} toggleModal={handleImgClick} className={`product ${product.orientation} ${show}`} />
                    {isModalOpen && createPortal(
                <PhotoModal product={product} image={product.image_urls.regular} alt={product.description} className={``} toggleModal={handleImgClick} />, document.body
                )}
            </React.Fragment>
             
        )

        // return <img ref={imgEl} className={`carousel--img ${show} ${index}`} width={100} height={100} key={`${link}-${index}`} alt={`${index}`} src={link}></img>
    })

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



    // const prev = document.getElementsByClassName('prev')[0];
    // const next = document.getElementsByClassName('next')[0];


    // prev.addEventListener('click', () => {
    //     showSlides(slideIndex += -1);
    // })

    // next.addEventListener('click', () => {
    //     showSlides(slideIndex += 1);
    // })

    const handleClick = (n) => {
        setSlideIndex(slideIndex + n)
        console.log('clicked change by: ', n)
        // setSlideIndex(slideIndex + n)
        let slide = slideIndex + n
        let pics = product.carousel_links;

        if(slide > pics.length) {
            setSlideIndex(1)
        }
        if(slide < 1) {
            setSlideIndex(pics.length);
        }
        // for(i = 0; i < pics.length; i++){
        //     imgEl.style.display = 'none';
        // }



    }


    const renderImages = 'carousel images here'


    return (
        <div className='carousel'>
            <div className='direction prev' onClick={() => handleClick(-1)}>&lt; Prev</div>
                {product ? carouselImages : 'loading...'}

            <div className='direction next' onClick={() => handleClick(1)}>Next &gt;</div>
        </div>
                
    )
}