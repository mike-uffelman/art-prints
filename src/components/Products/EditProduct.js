import './Product.css';
import React, { useEffect, useState } from "react";
// import NavContext from "../context/navigation";
import { useParams, Link } from "react-router-dom";
import { shortenDescription } from "../../utility/helpers";
import ProductSizeDropdown from "./Product-Size/ProductSizeDropdown";
import { useDispatch, useSelector } from 'react-redux';
import { updateCartItem } from '../../store/slices/cartsSlice';
import Products from "./AllProducts";
import classNames from 'classnames';
import {v4 as uuidv4 } from 'uuid';
import { UNSPLASH_URL } from '../../data/config';
import ProductSize from './Product-Size/ProductSize';
import Image from '../Image';

export default function EditProduct({className}) {
    const dispatch = useDispatch();
    const {id: cartItemId} = useParams();
    // console.log(cartItemId)

    const cartItem = useSelector((state) => {
        return state.cart.filter(item => item.id === cartItemId) 
    }) 
    // console.log(cartItem)
    // const [products, setProducts] = useState([]);

    const [ size, setSize ] = useState({})
    const [ quantity , setQuantity ] = useState(0); // quantity state for product

    
    useEffect(() => {
        if(cartItem) {
            // console.log(cartItem)
            setSize({
                width: cartItem[0].size.width,
                height: cartItem[0].size.height,
                price_multiplier: cartItem[0].size.price_multiplier
            })
            setQuantity(cartItem[0].quantity)
        }
    //     // console.log(currentPath)
    //     // window.history.pushState({}, '', `${window.location.pathname}/${product.id}`)
    }, [])

    
    const similarClassnames = classNames(className)

    const updatePrice = (val) => {
        // console.log(val);
        setSize(val)
    }

    const submitForm = (e, product) => {
        e.preventDefault();
        // console.log(e.target, product)
        const cartUpdate = {
            quantity: Number(quantity),
            product: cartItem && cartItem[0].product,
            size,
            id: cartItem && cartItem[0].id
        }
        
        
        dispatch(updateCartItem(cartUpdate))
    }


    const renderProduct = cartItem && 
    // cartItem && cartItems.map(item => {
            // if(cartItemId === item.id) {
                // return (
                    <section key={cartItem[0].id} className='products-page__product'>
                        <Image product={cartItem[0].product} className='product' />
                        
                        <form className="product__details" >
                            <h3 className="product__description">{cartItem[0].product.alt_description === null ? shortenDescription(cartItem[0].description) : shortenDescription(cartItem[0].product.alt_description)}</h3>
                            
                            <label className='product__owner'>
                                Photo by&nbsp; 
                                    <a href={`${cartItem[0].product.owner.links.html} utm_source=image-print-react-practice&utm_medium=referral`} target='_blank' rel="noreferrer" className='product__owner--links'>
                                         {cartItem[0].product.owner.name}
                                    </a>
                                     &nbsp;on&nbsp;  
                                    <a href={UNSPLASH_URL} className='product__owner--links' target='_blank' rel='noreferrer'>Unsplash</a>
                                    
                            </label>
                            
                            <p className="product__price">${(cartItem[0].product.base_amt * size.price_multiplier).toFixed(2)}</p>
                            <div className=''>
                                <label className='' >Quantity</label>
                                <input type='number' min='1' step='1' onChange={(e) => setQuantity(e.target.value)} value={quantity}></input>
                            </div>
                            
                            <ProductSize updatePrice={updatePrice} size={size}/>

                            <button
                                onClick={(e) => submitForm(e)}
                                className="product__add-to-cart--btn">Update</button>
                        </form>
                        
                    </section>
                // )
            // } 
            // else {
            //     throw Error('Photo not found');
            // }
        // })
    

    if(!cartItem || cartItem === undefined) {
        
    // if(!cartItems || cartItems === undefined) {
        return <div>Loading item...</div>
    }
        

    return (
        <div className="product-page">
            <h2 className='product-page__header'>Editing Cart Item</h2>
            {cartItem ? renderProduct : 'Loading...'}
        </div>
    )
}
