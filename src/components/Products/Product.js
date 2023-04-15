import React, { useEffect, useState } from "react";
// import NavContext from "../context/navigation";
import { useParams } from "react-router-dom";
import { shortenDescription } from "../../utility/helpers";
import SizeOption from "./Product-Size/ProductSize";
import Products from "./AllProducts";

function Product({products}) {
    const [ sizeIndex, setSizeIndex ] = useState(0)
    const {id} = useParams();
    console.log(id)
    console.log(products)
    // const {currentPath} = useContext(NavContext);
    
    // useEffect(() => {
    //     // console.log(currentPath)
    //     // window.history.pushState({}, '', `${window.location.pathname}/${product.id}`)
    // }, [])

    const renderPhoto = () => {

        return products.map(product => {
            if(id === product.id) {
                return (
                    <section key={product.id} className='products-page__product'>
                        <img className='product__img' src={product.image_urls.regular} alt={product.description}/>
                        <div className="product__details">
                            <h3 className="product__description">{product.alt_description === null ? shortenDescription(product.description) : shortenDescription(product.alt_description)}</h3>
                            <p className="product__price">${product.base_amt}</p>
                            <SizeOption />
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