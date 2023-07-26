import './BaseStyles.css';
import './App.css';
import ProductPage from './pages/ProductPage';
import Cart from "./components/Cart/Cart";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { routesConfig } from './routesConfig';

import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import ResultsPage from './pages/ResultsPage';
import ErrorPage from './error-page';
import EditPage from './pages/EditPage';

function App() {

    // setting up react router to control page access/rendering using paths
    const router = createBrowserRouter(routesConfig
        
        // createRoutesFromElements(
        //     // home path '/', renders RootLayout, acts like the skeleton - includes the logo, navigation, search bar, footer, etc. All other content is rendered as an 'Outlet' from within RootLayout
        //     <Route path='/' element={<RootLayout />}>
                
        //         {/* home/index */}
        //         <Route index element={<Home />} />

        //         {/* child paths */}
        //         <Route path='results/:term' element={<ResultsPage />}  />
        //         <Route path='product/:id' element={<ProductPage />} />
        //         <Route path='product/editCartItem/:id' element={<EditPage />} />
        //         <Route path='cart' element={<Cart />} />

        //         {/* Error page path */}
        //         <Route path='*' element={<ErrorPage />} />

        //     </Route>
        // )
    )

    return( 
        // pass the router object into RouterProvider to render the route setup
        <RouterProvider router={router} />
    )
}



export default App;