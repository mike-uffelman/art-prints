import { useContext, useEffect } from "react";
import NavContext from "../context/navigation";

function Product({product}) {
    const {currentPath} = useContext(NavContext);
    
    useEffect(() => {
        console.log(currentPath)
        // window.history.pushState({}, '', `${window.location.pathname}/${product.id}`)
    }, [])

    return <div>One product</div>
}

export default Product;