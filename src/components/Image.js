import './Image.css';
import classNames from "classnames";

export default function Image({product, modalOpen, className}) {
    const classes = classNames(className)
    console.log(classes)

    return (
        <div className={`img__container ${classes}`}>
            <div className={`img__border ${classes}`}>
                <div className={`img__inset ${classes}`}>
                    <img onClick={modalOpen}  className={`img__product ${classes}`} src={product.image_urls.regular} alt={product.description}/>

                </div>
            </div>
        </div>
    ) 
}