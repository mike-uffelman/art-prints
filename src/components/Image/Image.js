import './Image.css';
import { useState, useRef, useEffect } from 'react';
import classNames from "classnames";


// reusable image component 
export default function Image({product, modalOpen, className}) {
    const imgRef = useRef();
    const [ isHovered, setIsHovered ] = useState(null)
    
    const classes = classNames(className)

    const handleMouseOver = () => {
        imgRef.current.classList.toggle('hovered')

        setIsHovered(true)
    }

    const handleMouseOut = () => {
        imgRef.current.classList.toggle('hovered')
        setIsHovered(null)
    }

    // switch for image size to render
    const imgSwitch = () => {
        const classValue = classes.split(' ')[0]
        switch(classValue) {
            case 'product':
                return product.image_urls.small;
            case 'modal':
                return product.image_urls.regular;
            case 'results':
                return product.image_urls.thumb
            default:
                return product.image_urls.regular;
        }
    }

    const hovered = isHovered ? 'hovered' : '';

    return (
        <div className={`img ${classes} ${hovered}`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            {/* <div className={`img__container ${classes} ${hovered}`}  > */}
            {/* {isHovered 
                ?   
                <img onClick={modalOpen}  className={`img__product`}  src={product.image_urls.regular} alt={product.description}/> 
                :    */}
                {/* <div className={`img__border ${classes} ${hovered}`}> */}
                        {/* <div className={`img__inset ${classes} ${hovered}`}> */}
                            <img 
                                onClick={modalOpen} 
                                ref={imgRef} 
                                className={`img__product ${classes} ${hovered}`} 
                                src={imgSwitch()} 
                                alt={product.description}/>
                        {/* </div> */}
                    {/* // </div> */}
            {/* } */}
        {/* // </div> */}
        </div>
        
    ) 
}