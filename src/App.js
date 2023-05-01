import './App.css';
import ProductPage from './pages/ProductPage';
import Cart from "./components/Cart/Cart";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';

import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import ResultsPage from './pages/ResultsPage';
import ErrorPage from './error-page';
import EditPage from './pages/EditPage';

function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<RootLayout />}>
                
                <Route index element={<Home />} />

                <Route path='results/:term' element={<ResultsPage />}  />
            
                <Route path='product/:id' element={<ProductPage />} />
                <Route path='product/editCartItem/:id' element={<EditPage />} />
                <Route path='cart' element={<Cart />} />
                <Route path='*' element={<ErrorPage />} />

            </Route>
        )
    )

    return( 
        <RouterProvider router={router} />
    )
}



export default App;