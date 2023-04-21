import './AllProducts.css';
// import Link from './Link';
import { Link } from 'react-router-dom';
import { shortenDescription } from '../../utility/helpers';
import classNames from 'classnames';

function Products({products, className}) {
    // console.log(products)

    // const handleClick = () => {

    // }
    
    const productsClassNames = classNames(className)
    
    

    const renderProducts = products.map(photo => {
        return (
            <div className="product__item" key={photo.base_amt}>
                {/* replace anchor tag with Link navigation, create Link component with <a/> returned */}
                <Link to={`/product/${photo.id}`} className='product__link'>
                    <img className='product__img product__img--thumb' src={photo.image_urls.thumb} alt={photo.description}/>

                </Link>
                {/* <a href={`/photo/${photo.id}`} className='product__link'>
                </a>
                 */}
                <div className='products__details'> 
                    <h1 className='product__title'>{photo.alt_description === null ? shortenDescription(photo.description) : shortenDescription(photo.alt_description)}</h1>
                    {/* <div className='product__footer'> */}
                        {/* <p className='product__size'>{(photo.width/96).toFixed(0)}" x {(photo.height/96).toFixed(0)}"</p> */}
                        
                        <div className='product__price'>From ${Math.round(photo.base_amt)}</div>
                    {/* </div> */}
                    
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

    return (
        <section className={productsClassNames}>
            {products.length > 0 ? renderProducts : 'empty'}
            {products.length > 0 ? renderProducts : 'empty'}
        </section>
    )
}

export default Products;