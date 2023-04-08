import { useEffect } from "react";
// import NavContext from "../context/navigation";
import { useParams } from "react-router-dom";

function Product() {
    const {id} = useParams();
    console.log(id)
    // const {currentPath} = useContext(NavContext);
    
    // useEffect(() => {
    //     // console.log(currentPath)
    //     // window.history.pushState({}, '', `${window.location.pathname}/${product.id}`)
    // }, [])

    const renderPhoto = () => {

        return (
            <div className="photo">
                this is the photo with id: {id}
            </div>
        )
    }

    return <div>{renderPhoto}</div>
}

export default Product;