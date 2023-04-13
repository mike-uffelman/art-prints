import { useEffect } from "react";
// import NavContext from "../context/navigation";
import { useParams } from "react-router-dom";

function Product({products}) {
    const {id} = useParams();
    console.log(id)
    console.log(products)
    // const {currentPath} = useContext(NavContext);
    
    // useEffect(() => {
    //     // console.log(currentPath)
    //     // window.history.pushState({}, '', `${window.location.pathname}/${product.id}`)
    // }, [])

    const renderPhoto = () => {

        return products.map(product => {
            if(id === product.id) {
                return (
                    <div key={product.id} className="photo">
                        <img className='product__img' src={product.image_urls.regular} alt={product.description}/>
                        this is the photo with id: {id}
                    </div>
                )
            } 
            // else {
            //     throw Error('Photo not found');
            // }
        })
    }

        
        
        

    return <div>{renderPhoto()}</div>
}

export default Product;