import './Image.css';
import { useState, useRef } from 'react';
import classNames from "classnames";

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

    const hovered = isHovered ? 'hovered' : '';

    return (
        <div className='img' >
            <div className={`img__container ${classes} ${hovered}`}  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            {/* {isHovered 
                ?   
                <img onClick={modalOpen}  className={`img__product`}  src={product.image_urls.regular} alt={product.description}/> 
                :    */}
                <div className={`img__border ${classes} ${hovered}`}>
                        <div className={`img__inset ${classes} ${hovered}`}>
                            <img onClick={modalOpen} ref={imgRef} className={`img__product ${classes} ${hovered}`} src={product.image_urls.regular} alt={product.description}/>
                        </div>
                    </div>
            {/* } */}
        </div>
        </div>
        
    ) 
}