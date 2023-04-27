import './App.css';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Products from "./components/Products/AllProducts";
import Product from "./components/Products/Product";
import ProductPage from './pages/ProductPage';
import Cart from "./components/Cart/Cart";
import Search from "./components/Search";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Link, Outlet } from 'react-router-dom';
import { tagsLoader } from './components/Tags';

// import Route from "./components/Route";
// import unsplash from "./data/unsplash";
import {buildProducts, getTags, buildReviews} from "./data/productGenerator";
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import ResultsPage, { resultsLoader } from './pages/ResultsPage';
import ErrorPage from './error-page';
// import { useContext } from 'react';
// import NavContext from './context/navigation';
import EditPage from './pages/EditPage';

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    const productIds = [{id: 'm3m-lnR90uM'}, {id: 'YApiWyp0lqo'}, {id: '3ZUsNJhi_Ik'}]
   
    useEffect(() => {
        buildReviews(productIds)
    }, [])


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