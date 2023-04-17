import './Product.css';
import React, { useEffect, useState } from "react";
// import NavContext from "../context/navigation";
import { useParams } from "react-router-dom";
import { shortenDescription } from "../../utility/helpers";
import ProductSizeDropdown from "./Product-Size/ProductSizeDropdown";
import Products from "./AllProducts";
import classNames from 'classnames';

function Product({products, className}) {
    const [ sizeMultiplier, setSizeMultiplier ] = useState(0)
    const {id} = useParams();
    // console.log(id)
    // console.log(products)
    // const {currentPath} = useContext(NavContext);
    
    // useEffect(() => {
    //     // console.log(currentPath)
    //     // window.history.pushState({}, '', `${window.location.pathname}/${product.id}`)
    // }, [])

    const similarClassnames = classNames(className)

    const updatePrice = (val) => {
        console.log(val);
        setSizeMultiplier(val.price_multiplier)
    }

    const renderPhoto = () => {

        return products.map(product => {
            if(id === product.id) {
                return (
                    <section key={product.id} className='products-page__product'>
                        <div className='img__container'>
                            <img className='product__img product__img--full' src={product.image_urls.regular} alt={product.description}/>
                        </div>
                        <div className="product__details">
                            <h3 className="product__description">{product.alt_description === null ? shortenDescription(product.description) : shortenDescription(product.alt_description)}</h3>
                            <p className='product__owner'>by {product.owner}</p>
                            <p className="product__price">${(product.base_amt * sizeMultiplier).toFixed(2)}</p>
                            <ProductSizeDropdown product={product} updatePrice={updatePrice}/>
                            <button className="product__add-to-cart--btn">Add to cart</button>
                        </div>
                        
                    </section>
                )
            } 
            // else {
            //     throw Error('Photo not found');
            // }
        })
    }

        
        
        

    return (
        <div className="product-page">
            {renderPhoto()}
        </div>
    )
}

export default Product;