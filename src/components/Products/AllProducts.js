import './AllProducts.css';
// import Link from './Link';
import { Link, useLoaderData } from 'react-router-dom';
import { shortenDescription } from '../../utility/helpers';
import classNames from 'classnames';
import { UNSPLASH_URL } from '../../data/config';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Image from '../Image';
import Pagination from './Pagination/Pagination';

function Products({className, results}) {
    // const data = useLoaderData()
    // const searchResults = useSelector( (state) => {
    //     return state.search[0].results
    // })
    // console.log(products)

    // const handleClick = () => {

    // }

    useEffect(() => {
        // console.log(results)
        
    }, [])
    
    const productsClassNames = classNames(className)
    
    // const renderProducts = <div>these are the products!!!!!</div>

    const renderProducts = results && results.flat().map(photo => {
    //     // console.log('photo urls...', photo.image_urls)

        return (
            // <div >{searchResults[0][0].id}</div>
            <Link to={`/product/${photo.id}`} key={photo.id} className='product__link'>

                <div className="product__item" >
                    <Image product={photo} className={'results'} />
                </div>
                <div className='products__details'> 
                    <h1 className='product__title'>{photo.alt_description === null ? shortenDescription(photo.description) : shortenDescription(photo.alt_description)}</h1>
                    <p className='product__owner--label'>{photo.owner.name || 'none'}</p>

                    <div className='product__footer'>
                        <p className='product__size'>9" x 12"</p>
                        
                        <div className='product__price'>From ${Math.round(photo.base_amt)}</div>
                    </div>
                    
                    {/* <div className='product__actions'> */}
                        {/* <a href={`/photo/${photo.id}`} className='product__actions--btn product__view '>View</a> */}
                        {/* <button className='product__actions--btn product__addToCart'> */}
                            {/* <span className="product__addToCart--icon material-symbols-outlined"> */}
                                {/* add_shopping_cart */}
                            {/* </span> */}
                        {/* </button> */}
                    {/* </div> */}

                </div>
            </Link>

        )
    })

    if(!results || results === undefined || results.length === 0) {
        return <div>Loading search results...</div>
    }

    return (
        <section className={productsClassNames}>
            {results !== undefined ? renderProducts : '...'}
            {/* {/* {products.length > 0 ? renderProducts : 'empty'} */}
            {/* {searchResults.length > 0 ? renderProducts : 'empty'} */}
        </section>
    )
}

export default Products;
