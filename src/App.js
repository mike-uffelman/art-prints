import './BaseStyles.css';
import './App.css';
// import ProductPage from './pages/ProductPage';
// import Cart from "./components/Cart/Cart";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { routesConfig } from './routesConfig';

import { Suspense, lazy } from 'react';

const RootLayout = lazy(() => import('./layouts/RootLayout'));
const Home = lazy(() => import('./pages/Home'));
const ResultsPage = lazy(() => import('./pages/ResultsPage'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
const EditPage = lazy(() => import('./pages/EditPage'));
const Cart = lazy(() => import('./components/Cart/Cart'));
const ErrorPage = lazy(() => import('./error-page'));

function App() {
    // styles for fallback message
    const styles = {
        position: "absolute",
        display: "flex",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "9999999",
        fontFamily: "'Trebuchet MS', sans-serif",
        fontSize: "3rem",
        backgroundImage: "linear-gradient(45deg, rgb(170, 0, 255), rgb(0, 72, 255))",
        backgroundClip: "text",
        color: "transparent",
        WebkitBackgroundClip: "text",
        width: "100%",
        justifyContent: "center"
    }
    // setting up react router to control page access/rendering using paths
    const router = createBrowserRouter(
        // routesConfig needed for testing, but cant seem to implement code splitting with a routes config object...
        // routesConfig
        

    
        createRoutesFromElements(
            // home path '/', renders RootLayout, acts like the skeleton - includes the logo, navigation, search bar, footer, etc. All other content is rendered as an 'Outlet' from within RootLayout
            <Route path='/' element={<RootLayout />}>
                
                {/* home/index */}
                <Route index element={<Home />} />

                {/* child paths */}
                <Route path='results/:term' element={<ResultsPage />}  />
                <Route path='product/:id' element={<ProductPage />} />
                <Route path='product/editCartItem/:id' element={<EditPage />} />
                <Route path='cart' element={<Cart />} />

                {/* Error page path */}
                <Route path='*' element={<ErrorPage />} />

            </Route>
        )
    )



    return( 
        // pass the router object into RouterProvider to render the route setup
        <Suspense fallback={<div style={styles}>Loading Art Prints!...</div>}>
            <RouterProvider router={router} />
        </Suspense>
    )

}



export default App;