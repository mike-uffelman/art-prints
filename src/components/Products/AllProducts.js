import './AllProducts.css';
// import Link from './Link';
import { Link, useLoaderData } from 'react-router-dom';
import { shortenDescription } from '../../utility/helpers';
import classNames from 'classnames';
import { UNSPLASH_URL } from '../../data/config';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Products({className, results}) {
    // const data = useLoaderData()
    // const searchResults = useSelector( (state) => {
    //     return state.search[0].results
    // })
    // console.log(products)

    // const handleClick = () => {

    // }

    useEffect(() => {
        console.log(results)
        
    }, [])
    
    const productsClassNames = classNames(className)
    
    // const renderProducts = <div>these are the products!!!!!</div>

    const renderProducts = results && results.results.map(photo => {
    //     // console.log('photo urls...', photo.image_urls)

        return (
            // <div >{searchResults[0][0].id}</div>
            <div className="product__item" key={photo.base_amt}>
                <Link to={`/product/${photo.id}`} className='product__link'>
                    <img className='product__img product__img--thumb' src={photo.image_urls.thumb} alt={photo.description}/>

                </Link>
                <div className='products__details'> 
                    <h1 className='product__title'>{photo.alt_description === null ? shortenDescription(photo.description) : shortenDescription(photo.alt_description)}</h1>
                    <p className='product__owner--label'>{photo.owner.name || 'none'}</p>

                    <div className='product__footer'>
                        <p className='product__size'>{(photo.width/96).toFixed(0)}" x {(photo.height/96).toFixed(0)}"</p>
                        
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
            </div>
        )
    })

    if(!results || results === undefined) {
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
