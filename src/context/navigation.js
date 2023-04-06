
import { createContext, useState, useEffect } from "react";

const NavContext = createContext();

function NavProvider ({children}) {
    // create path state variable, initialized to window.location.pathname
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    // create popstate event - add window listener to call handler which updates the path state to the current window location 
    useEffect(() => {
        const handler = () => {
            console.log('popstate callback...')
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener('popstate', handler);

        return () => {
            window.removeEventListener('popstate', handler);
        }
    }, [])

    // create a function to update the browser address bar and update path state when a Link is clicked
    const navigate = (to) => {
        // updates the address bar with 'to' (prop in Link component)
        window.history.pushState({}, '', to);
        console.log('to: ', to)
        // updates path state when Link comp clicked
        setCurrentPath(to);
    }




    return (
        <NavContext.Provider value={{currentPath, navigate}}>
            {children}
        </NavContext.Provider>
    )
}

// export named NavProvider and default NavContext
export {NavProvider};
export default NavContext;