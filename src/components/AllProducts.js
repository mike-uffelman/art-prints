import './AllProducts.css';

function Products({products}) {
    console.log(products)

    // const handleClick = () => {

    // }
    
    const shortenDescription = (str) => {
        // return str.split('').filter((_, i) => i < 30).join('') + '...';
        return str.split(' ').filter((_, i) => i < 5).join(' ');
    }
    
    const renderProducts = products.map(photo => {
        return (
            <div className="product" key={photo.base_amt}>
                {/* replace anchor tag with Link navigation, create Link component with <a/> returned */}
                <a href={`/photo/${photo.id}`} className='product__link'>
                    <img className='product__img' src={photo.image_urls.thumb} alt={photo.description}/>
                </a>
                
                <div className='product__details'>
                    <h1 className='product__title'>{photo.alt_description === null ? shortenDescription(photo.description) : shortenDescription(photo.alt_description)}</h1>
                    <p className='product__size'>{(photo.width/96).toFixed(0)}" x {(photo.height/96).toFixed(0)}"</p>
                    
                    <div className='product__price'>From ${Math.round(photo.base_amt)}</div>
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
        <section className="products__container">
            {products.length > 0 ? renderProducts : 'empty'}
            {products.length > 0 ? renderProducts : 'empty'}
        </section>
    )
}

export default Products;