import EditProduct from "../components/Products/EditProduct"


export default function EditPage() {

    return (
        <div className="product-page__container">
            <EditProduct className='' />

            {/* want this to be a carousel... */}
            {/* <Products products={products} className='products__similar'/> */}

        </div>
    )
}