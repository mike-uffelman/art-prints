import './Products.css';

function Products({products}) {
    console.log(products)
    const renderProducts = products.map(photo => {
        return (
            <div className="product" key={photo.base_amt}>
                <img src={photo.image_urls.thumb} alt={photo.description}/>
            </div>
        )
    })

    return (
        <section className="products__container">{products.length > 0 ? renderProducts : 'empty'}</section>
    )
}

export default Products;