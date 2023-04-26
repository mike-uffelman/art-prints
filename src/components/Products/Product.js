import './Product.css';
import React, { useEffect, useState } from "react";
// import NavContext from "../context/navigation";
import { useParams, Link } from "react-router-dom";
import { shortenDescription } from "../../utility/helpers";
import ProductSizeDropdown from "./Product-Size/ProductSizeDropdown";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/slices/cartsSlice';
import Products from "./AllProducts";
import classNames from 'classnames';
import {v4 as uuidv4 } from 'uuid';
import { UNSPLASH_URL } from '../../data/config';

function Product({className}) {
    const [ isFetched, setIsFetched ] = useState(false);
    
    const dispatch = useDispatch();
    const productData = useSelector((state) => {
        console.log(state.search)
        // setIsFetched(true)
        return state.search;
    }) 
    const [products, setProducts] = useState([]);

    const [ size, setSize ] = useState({
        width: 9,
        height: 12,
        price_multiplier: 1
    })
    const [ quantity , setQuantity ] = useState(1); // quantity state for product
    const {id} = useParams();
    console.log(id)

    
    useEffect(() => {

    //     // console.log(currentPath)
    //     // window.history.pushState({}, '', `${window.location.pathname}/${product.id}`)
    }, [])

    
    const similarClassnames = classNames(className)

    const updatePrice = (val) => {
        console.log(val);
        setSize(val)
    }

    const submitForm = (e, product) => {
        e.preventDefault();
        console.log(e.target, product)
        const cartItem = {
            quantity: Number(quantity),
            product,
            size,
            id: uuidv4()
        }
        
        
        dispatch(addToCart(cartItem))
    }


    const renderProduct = productData && productData.results.map(product => {
            if(id === product.id) {
                return (
                    <section key={product.id} className='products-page__product'>
                        <div className='img__container'>
                            <img className='product__img product__img--full' src={product.image_urls.regular} alt={product.description}/>
                        </div>
                        <form className="product__details" >
                            <h3 className="product__description">{product.alt_description === null ? shortenDescription(product.description) : shortenDescription(product.alt_description)}</h3>
                            
                            <label className='product__owner'>
                                Photo by&nbsp; 
                                    <a href={`${product.owner.links.html} utm_source=image-print-react-practice&utm_medium=referral`} target='_blank' rel="noreferrer" className='product__owner--links'>
                                         {product.owner.name}
                                    </a>
                                     &nbsp;on&nbsp;  
                                    <a href={UNSPLASH_URL} className='product__owner--links' target='_blank' rel='noreferrer'>Unsplash</a>
                                    
                            </label>
                            
                            <p className="product__price">${(product.base_amt * size.price_multiplier).toFixed(2)}</p>
                            <div className=''>
                                <label className='' >Quantity</label>
                                <input type='number' min='1' step='1' onChange={(e) => setQuantity(e.target.value)} value={quantity}></input>
                            </div>
                            
                            <ProductSizeDropdown product={product} updatePrice={updatePrice}/>
                            <button
                                onClick={(e) => submitForm(e, product)}
                                className="product__add-to-cart--btn">Add to cart</button>
                        </form>
                        
                    </section>
                )
            } 
            // else {
            //     throw Error('Photo not found');
            // }
        })
    

    if(!productData) {
        
    // if(!productData || productData === undefined) {
        return <div>Loading product...</div>
    }
        

    return (
        <div className="product-page">
            {productData ? renderProduct : 'Loading...'}
        </div>
    )
}

export default Product;