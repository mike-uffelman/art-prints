import './Product.css';

// react and library imports
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { createPortal } from 'react-dom';

// utilities and helpers
import { shortenDescription } from "../../utility/helpers";
import {v4 as uuidv4 } from 'uuid';
import { UNSPLASH_URL } from '../../data/config';
import classNames from 'classnames';

// components
import { updateCartItem } from '../../store/slices/cartsSlice';
import Products from "./AllProducts";
import ProductSize from './Product-Size/ProductSize';
import Image from '../Image';
import ProductSizeDropdown from "./Product-Size/ProductSizeDropdown";
import PhotoModal from './PhotoModal';



export default function EditProduct({product, className}) {
    const dispatch = useDispatch();
    console.log('edit -> product: ', product)
    // const {id: cartItemId} = useParams();
    // console.log(cartItemId)

    // const cartItem = useSelector((state) => {
    //     return state.cart.filter(item => item.id === cartItemId) 
    // }) 
    // console.log(cartItem)
    // const [products, setProducts] = useState([]);

    const [ size, setSize ] = useState({})
    const [ quantity , setQuantity ] = useState(0); // quantity state for product
    const [ isModalOpen, setIsModalOpen ] = useState(false);


    
    useEffect(() => {
        if(product) {
            // console.log(product)
            setSize({
                width: product.size.width,
                height: product.size.height,
                price_multiplier: product.size.price_multiplier
            })
            setQuantity(product.quantity)
        }
    //     // console.log(currentPath)
    //     // window.history.pushState({}, '', `${window.location.pathname}/${product.id}`)
    }, [])

    
    const similarClassnames = classNames(className)

    const updatePrice = (val) => {
        // console.log(val);
        setSize(val)
    }

    const submitForm = (e, ) => {
        console.log('quantity', quantity)
        e.preventDefault();
        console.log('id and product', product)
        const cartUpdate = {
            quantity: Number(quantity),
            product: product && product.product,
            size,
            id: product && product.id
        }
        
        
        dispatch(updateCartItem(cartUpdate))
    }

    const handleImgClick = () => {
        //     // console.log('img clicked')
            setIsModalOpen(!isModalOpen)
        }


    const renderProduct = product && 
    // product && products.map(item => {
            // if(productId === item.id) {
                // return (
                    <section key={product.id} className='products-page__product'>
                        <div className={`product__image ${product.orientation}`}>
                            <Image product={product} modalOpen={handleImgClick} className={`product ${product.orientation}`} />
                            {isModalOpen && createPortal(
                                <PhotoModal product={product} image={product.image_urls.regular} alt={product.description} className={`photo-modal ${product.orientation}`} setIsModalOpen={setIsModalOpen} toggleModal={handleImgClick} />, document.body
                            )}
                        </div>
                        <Image product={product.product} className='product' />
                        
                        <form className="product__details" >
                            <h3 className="product__description">{product.product.alt_description === null ? shortenDescription(product.description) : shortenDescription(product.product.alt_description)}</h3>
                            
                            <label className='product__owner'>
                                Photo by&nbsp; 
                                    <a href={`${product.product.owner.links.html} utm_source=image-print-react-practice&utm_medium=referral`} target='_blank' rel="noreferrer" className='product__owner--links'>
                                         {product.product.owner.name}
                                    </a>
                                     &nbsp;on&nbsp;  
                                    <a href={UNSPLASH_URL} className='product__owner--links' target='_blank' rel='noreferrer'>Unsplash</a>
                                    
                            </label>
                            
                            <p className="product__price">${(product.product.base_amt * size.price_multiplier).toFixed(2)}</p>
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
    

    if(!product || product === undefined) {
        
    // if(!products || products === undefined) {
        return <div>Loading item...</div>
    }
        

    return (
        <div className="product-page">
            <h2 className='product-page__header'>Editing Cart Item</h2>
            {product ? renderProduct : 'Loading...'}
        </div>
    )
}
