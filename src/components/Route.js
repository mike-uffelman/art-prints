import { useContext } from "react";
import NavContext from "../context/navigation"

function Route({path, children}) {
    const {currentPath} = useContext(NavContext);
    

    console.log(path, currentPath)

    if(path === currentPath) {
        return children
    }
    return null;
    
}

export default Route