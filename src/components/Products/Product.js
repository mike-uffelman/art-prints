import './Product.css';
import React, { useEffect, useState } from "react";
// import NavContext from "../context/navigation";
import { useParams, Link } from "react-router-dom";
import { createPortal } from 'react-dom';
import { shortenDescription } from "../../utility/helpers";
import ProductSizeDropdown from "./Product-Size/ProductSizeDropdown";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/slices/cartsSlice';
import Products from "./AllProducts";
import classNames from 'classnames';
import {v4 as uuidv4 } from 'uuid';
import { UNSPLASH_URL } from '../../data/config';
import ProductReception from './Product-Reception/ProductReception';
import ProductSize from './Product-Size/ProductSize';
import PhotoModal from './PhotoModal';
import Image from '../Image';

function Product({className}) {
    // const [ isFetched, setIsFetched ] = useState(false);
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    
    const dispatch = useDispatch();
    const productData = useSelector((state) => {
        // setIsFetched(true)
        return state.search;
    }) 
    // const [products, setProducts] = useState([]);

    const [ size, setSize ] = useState({
        width: 9,
        height: 12,
        price_multiplier: 1
    })
    const [ quantity , setQuantity ] = useState(1); // quantity state for product
    const {id} = useParams();

    
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'instant'})
    }, [])

    useEffect(() => {
        // if(isModalOpen) {
            // document.body.style.overflow = 'hidden';
            document.body.classList.toggle('modal-open');
        // }
        // return () => {
            // document.body.style.overflow = 'none';
        // }
    
    }, [isModalOpen])


    
    const similarClassnames = classNames(className)

    const updatePrice = (val) => {
        console.log(val)
        setSize(val)
    }

    const submitForm = (e, product) => {
        e.preventDefault();
        const cartItem = {
            quantity: Number(quantity),
            product,
            size,
            id: uuidv4()
        }
        
        
        dispatch(addToCart(cartItem))
    }

    const handleImgClick = () => {
        console.log('img clicked')
        setIsModalOpen(!isModalOpen)
    }

    const renderProduct = productData && productData.results.flat().map(product => {
            if(id === product.id) {
                return (
                    <section key={product.id} className={`products-page__product ${product.orientation}`}>
                        <div className={`product__image ${product.orientation}`}>
                            <Image product={product} modalOpen={handleImgClick} className={`product ${product.orientation}`} />
                            {isModalOpen && createPortal(
                                <PhotoModal product={product} image={product.image_urls.regular} alt={product.description} className={``} toggleModal={handleImgClick} />, document.body
                            )}
                        </div>
                        
                        <form className="product__details" >
                            <div className='product__description'>
                                <h3 className="product__heading">{product.alt_description === null ? shortenDescription(product.description) : shortenDescription(product.alt_description)}</h3>
                                
                                
                                <label className='product__owner'>
                                    Photo by&nbsp; 
                                        <a href={`${product.owner.links.html} utm_source=image-print-react-practice&utm_medium=referral`} target='_blank' rel="noreferrer" className='product__owner--links'>
                                            {product.owner.name}
                                        </a>
                                        &nbsp;on&nbsp;  
                                        <a href={UNSPLASH_URL} className='product__owner--links' target='_blank' rel='noreferrer'>Unsplash</a>
                                        
                                </label>
                                <ProductReception product={product}/>

                            </div>
                            
                            <p className="product__price">${(product.base_amt * size.price_multiplier).toFixed(2)}</p>                            
                            <div className='product__box'>
                                    
                                <div className='product__quantity'>
                                    <label className='' >Quantity</label>
                                    <input type='number' min='1' step='1' onChange={(e) => setQuantity(e.target.value)} value={quantity}></input>
                                </div>

                            </div>
                            
                            
                            
                            <ProductSize product={product} updatePrice={updatePrice}/>
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