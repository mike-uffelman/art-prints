import './BaseStyles.css';
import './App.css';
// import ProductPage from './pages/ProductPage';
// import Cart from "./components/Cart/Cart";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
// import { routesConfig } from './routesConfig.jsx';

import React, { Suspense, lazy } from 'react';
// import RootLayout from'./layouts/RootLayout.jsx';
// import Home from'./pages/Home.jsx';
// import ResultsPage from'./pages/ResultsPage.jsx';
// import ProductPage from'./pages/ProductPage.jsx';
// import EditPage from'./pages/EditPage.jsx';
// import Cart from'./components/Cart/Cart.jsx';
// import ErrorPage from'./error-page.jsx';


const RootLayout = lazy(() => import('./layouts/RootLayout.jsx'));
const Home = lazy(() => import('./pages/Home.jsx'));
const ResultsPage = lazy(() => import('./pages/ResultsPage.jsx'));
const ProductPage = lazy(() => import('./pages/ProductPage.jsx'));
const EditPage = lazy(() => import('./pages/EditPage.jsx'));
const Cart = lazy(() => import('./components/Cart/Cart.jsx'));
const ErrorPage = lazy(() => import('./error-page.jsx'));

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
                <Route path='results/:term' element={
                    <Suspense fallback={<div style={styles}>Loading results...</div>}>
                        <ResultsPage />
                    </Suspense>
                } />
                    
                <Route path='product/:id' element={
                    <Suspense fallback={<div style={styles}>Loading product...</div>}>
                        <ProductPage />
                    </Suspense>} />
                <Route path='product/editCartItem/:id' element={
                    <Suspense fallback={<div style={styles}>Loading edit product...</div>}>
                    <EditPage /> 

                    </Suspense>
                } />
                <Route path='cart' element={
                    <Suspense fallback={<div style={styles}>Loading cart...</div>}>
                        <Cart />    
                    </Suspense>
                } />

                {/* Error page path */}
                <Route path='*' element={<ErrorPage />} />

            </Route>
        )
    )



    return( 
        // pass the router object into RouterProvider to render the route setup
        <Suspense fallback={<div style={styles}>Loading Art Prints!</div>}>
            <RouterProvider router={router} />
        </Suspense>
    )

}



export default App;