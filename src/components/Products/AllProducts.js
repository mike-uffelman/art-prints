// styles
import './AllProducts.css';

// react, redux, router
import { Link } from 'react-router-dom';

// components
import Image from '../Image/Image';

// utilities and helpers
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { shortenDescription } from '../../utility/helpers';


function Products({className, results}) {
    const productsClassNames = classNames(className)
    console.log(results)
    
    const renderProducts = results && results.flat().map(photo => {

        return (
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


Products.propTypes = {
    results: PropTypes.array.isRequired,
    className: PropTypes.string
}