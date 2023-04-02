import './Products.css';

function Products({products}) {
    console.log(products)

    // const handleClick = () => {

    // }
    
    
    const renderProducts = products.map(photo => {
        return (
            <div className="product" key={photo.base_amt}>
                <a href={`/photo/${photo.id}`} className='product__link'>
                    <img className='product__img' src={photo.image_urls.thumb} alt={photo.description}/>
                </a>
                
                <div className='product__details'>
                    <h1 className='product__title'>{photo.alt_description === null ? photo.description : photo.alt_description}</h1>
                    <div className='product__price'>$ {photo.base_amt}</div>
                    <button className='product__addToCart'>Add to Cart</button>

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