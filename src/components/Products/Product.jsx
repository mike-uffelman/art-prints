// styling import
import './Product.css';

// react and library imports
import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { addToCart, updateCartItem } from '../../store/slices/cartsSlice';

// utilities and helpers
import classNames from 'classnames';
import {v4 as uuidv4 } from 'uuid';
import { UNSPLASH_URL_W_REFERRAL } from '../../data/config';
import { shortenDescription } from "../../utility/helpers";
import PropTypes from 'prop-types';

// components
import ProductReception from './Product-Reception/ProductReception';
import ProductSize from './Product-Size/ProductSize';
import PhotoModal from './PhotoModal';
import Image from '../Image/Image';
import ProductQuantity from './Product-Quantity/ProductQuantity'
import { addToast } from '../../store/slices/toastsSlice';

function Product({type, product, className}) {
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [ size, setSize ] = useState({});
    const [ quantity , setQuantity ] = useState(null);
    const [ activeProduct, setActiveProduct ] = useState({}) // 
    const dispatch = useDispatch();
    
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'instant'})

        type === 'product-view' ? setActiveProduct(product) : setActiveProduct(product.product)
            
    }, [type, product])

    useEffect(() => {
        // may be able to use OR statements in each property to switch between product vs edit...
        if(type === 'product-view') {
            setSize({
                width: 9,
                height: 12,
                price_multiplier: 1
            })
            setQuantity(1)
        }

        if(type === 'edit-view') {
            setSize({
                width: product.size.width,
                height: product.size.height,
                price_multiplier: product.size.price_multiplier
            })
            setQuantity(product.quantity)
        }
    }, [activeProduct])

    const similarClassnames = classNames(className)

    const updateSize = (val) => {
        setSize(val)
    }

    // add to cart callback, create cart item dispatch to reducer
    const submitForm = (e, product) => {
        e.preventDefault();
        
        const cartItem = {
            quantity: Number(quantity),
            product,
            size,
            id: type === 'edit-view' ? product.id : uuidv4() // if edit-view use the cart item id, else generate a new cart it
        }

        type === 'product-view' ? dispatch(addToCart(cartItem)) : dispatch(updateCartItem(cartItem))
        
        if(type === 'edit-view') {
            dispatch(addToast({id: uuidv4(), label: 'success', icon: 'check_circle', message: 'Cart has been updated!'}))
        } else {
            dispatch(addToast({id: uuidv4(), label: 'success', icon: 'check_circle', message: 'Added to Cart!'}))

        }

    }

    const handleImgClick = () => {
        setIsModalOpen(!isModalOpen)
    }

    const renderProduct = activeProduct && 
                (
                    <section key={activeProduct.id} className={`products-page__product ${activeProduct.orientation}`}>
                        <div className={`product__image ${activeProduct.orientation}`}>
                            
                            {activeProduct.image_urls ? 
                                <Image 
                                    product={activeProduct} 
                                    handleImgClick={handleImgClick} 
                                    className={`product ${activeProduct.orientation}`} 
                                /> : 'Loading'
                            }

                            {isModalOpen && createPortal(
                                <PhotoModal 
                                    product={activeProduct} 
                                    image={activeProduct.image_urls.regular} 
                                    alt={activeProduct.description} 
                                    className={`photo-modal ${activeProduct.orientation}`} setIsModalOpen={setIsModalOpen} 
                                    toggleModal={handleImgClick} 
                                />, document.body
                            )}
                        </div>
                        
                        <form className="product__details" >
                            <div className='product__description'>
                                <h3 className="product__heading">{activeProduct.alt_description === null ? shortenDescription(activeProduct.description) : shortenDescription(activeProduct.alt_description)}</h3>
                                
                                {activeProduct.owner ? 
                                <label className='product__owner'>
                                    Photo by&nbsp; 
                                        <a href={`${activeProduct.owner.links.html}/utm_source=image-print-react-practice&utm_medium=referral`} target='_blank' rel="noreferrer" className='product__owner--links'>
                                            {activeProduct.owner.name}
                                        </a>
                                        &nbsp;on&nbsp;  
                                        <a href={UNSPLASH_URL_W_REFERRAL} className='product__owner--links' target='_blank' rel='noreferrer'>Unsplash</a>
                                        
                                </label>
                                : 'Loading...'}
                                {activeProduct.hasOwnProperty('id') && <ProductReception product={activeProduct}/> }

                            </div>
                            
                            <div className='product__box'>

                                <ProductQuantity quantity={quantity} setQuantity={setQuantity}/>

                                <div className='product__price'>
                                    <label className='product__price--label'>
                                        Amount per:
                                    </label>
                                    <p className="product__price--amount">${(activeProduct.base_amt * size.price_multiplier).toFixed(2)}</p>                            
                                </div>
                            </div>
                            
                            
                            
                            <ProductSize product={product} updateSize={updateSize} size={size}/>
                            <button
                                onClick={(e) => submitForm(e, product)}
                                className="product__add-to-cart--btn">{type === 'product-view' ? 'Add to cart' : 'Update Cart'}</button>
                        </form>
                        
                    </section>
                )

    if(!activeProduct) {
        return <div>Loading product...</div>
    }
        
    return (
        <div className="product-page">
            {type === 'edit-view' && <h3 className='product-page--editing'>Editing Cart Item</h3> }

            {renderProduct}
        </div>
    )
}

export default Product;

Product.propTypes = {
    type: PropTypes.string.isRequired,
    product: PropTypes.object.isRequired,
    className: PropTypes.string
}