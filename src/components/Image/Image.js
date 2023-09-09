// styles
import './Image.css';
// react
import { useState, useRef } from 'react';
// utilities and helpers
import classNames from "classnames";
import PropTypes from 'prop-types';


// reusable image component 
export default function Image({product, handleImgClick, className}) {
    const imgRef = useRef();
    const [ isHovered, setIsHovered ] = useState(null)
    const [isLoaded, setIsLoaded ] = useState(false);
    
    const classes = classNames(className)

    const handleMouseOver = () => {
        imgRef.current?.classList.toggle('hovered')

        setIsHovered(true)
    }

    const handleMouseOut = () => {
        imgRef.current?.classList.toggle('hovered')
        setIsHovered(null)
    }

    // console.log('image component - product: ', product)

    // switch for image size to render
    const imgSwitch = () => {
        const classValue = classes.split(' ')[0]
        switch(classValue) {
            case 'product':
                return product.image_urls.regular;
            case 'modal':
                return product.image_urls.regular;
            case 'results':
                return product.image_urls.thumb;
            default:
                return product.image_urls.regular;
        }
    }

    const hovered = isHovered ? 'hovered' : '';

    return (
        <div 
            data-testid='img-wrapper' 
            className={`img  ${hovered} ${isLoaded ? 'isLoaded': ''}`} 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut}
>
            {/* <div className={`img__container ${classes} ${hovered}`}  > */}
            {/* {isHovered 
                ?   
                <img onClick={modalOpen}  className={`img__product`}  src={product.image_urls.regular} alt={product.description}/> 
                :    */}
                {/* <div className={`img__border ${classes} ${hovered}`}> */}
                        {/* <div className={`img__inset ${hovered}`}> */}
                            <img 
                                onLoad={() => setIsLoaded(true)}
                                // width={product.width}
                                // height={product.height}
                                onClick={handleImgClick}
                                loading='eager'
                                ref={imgRef} 
                                className={`img__product ${classes} ${hovered}`} 
                                src={imgSwitch()} 
                                alt={product.description}
                                
                            />
                        {/* </div> */}
                    {/* // </div> */}
            {/* } */}
        {/* // </div> */}
            {/* {!isLoaded && <div className='img__loading'>Loading...</div>} */}
        </div>
        
    ) 
}

Image.propTypes = {
    product: PropTypes.object.isRequired,
    handleImgClick: PropTypes.func,
}