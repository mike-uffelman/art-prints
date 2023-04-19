import './Product.css';
import React, { useEffect, useState } from "react";
// import NavContext from "../context/navigation";
import { useParams } from "react-router-dom";
import { shortenDescription } from "../../utility/helpers";
import ProductSizeDropdown from "./Product-Size/ProductSizeDropdown";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/slices/cartsSlice';
import Products from "./AllProducts";
import classNames from 'classnames';

function Product({products, className, addToCart}) {
    const [ sizeMultiplier, setSizeMultiplier ] = useState(0)
    const {id} = useParams();

    const dispatch = useDispatch();
    // const productData = useSelector((state) => {
        // return state.
    // }) 

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

    const submitForm = (e, product) => {
        e.preventDefault();
        console.log(e.target, product)
        dispatch(addToCart('hello'))
    }

    const renderProduct = products.map(product => {
            if(id === product.id) {
                return (
                    <section key={product.id} className='products-page__product'>
                        <div className='img__container'>
                            <img className='product__img product__img--full' src={product.image_urls.regular} alt={product.description}/>
                        </div>
                        <form className="product__details" onSubmit={(e) => submitForm(e, product)}>
                            <h3 className="product__description">{product.alt_description === null ? shortenDescription(product.description) : shortenDescription(product.alt_description)}</h3>
                            <p className='product__owner'>by {product.owner}</p>
                            <p className="product__price">${(product.base_amt * sizeMultiplier).toFixed(2)}</p>
                            <ProductSizeDropdown product={product} updatePrice={updatePrice}/>
                            <button onClick={() => addToCart(product)} className="product__add-to-cart--btn">Add to cart</button>
                        </form>
                        
                    </section>
                )
            } 
            // else {
            //     throw Error('Photo not found');
            // }
        })
    

        
        
        

    return (
        <div className="product-page">
            {renderProduct}
        </div>
    )
}

export default Product;