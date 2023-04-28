import './ProductReception.css';
import { Link } from "react-router-dom"

export default function ProductReception({product}) {
    console.log(product)

    return (
        <div className='product__reception'>
            <div className='product__reviews'>
                <a className='product__ratings' href='#reviews'>
                    <span className="material-symbols-rounded product__ratings--icon">star</span>
                    <span className="material-symbols-rounded product__ratings--icon">star</span>
                    <span className="material-symbols-rounded product__ratings--icon">star</span>
                    <span className="material-symbols-rounded product__ratings--icon">star</span>
                    <span className="material-symbols-rounded product__ratings--icon">star</span>
                    <span className='product__reviews--count'>{(Math.round(Math.random() *20000)/100).toFixed(1)}K</span>
                </a>
                {/* loop over stars to fill based on ratings */}
                

                <div className='product__likes'>

                    <span className="material-icons product__likes--icon">favorite</span>
                    <span className='product__likes--count'>{product.likes}</span>
                </div>
            
            </div>

        </div>       
    )
}