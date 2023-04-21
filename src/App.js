import './App.css';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Products from "./components/Products/AllProducts";
import Product from "./components/Products/Product";
import ProductPage from './pages/ProductPage';
import Cart from "./components/Cart/Cart";
import Search from "./components/Search";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Link, Outlet } from 'react-router-dom';

// import Route from "./components/Route";
// import unsplash from "./data/unsplash";
import {buildProducts, getTags} from "./data/productGenerator";
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import ResultsPage, { resultsLoader } from './pages/ResultsPage';
import ErrorPage from './error-page';
// import { useContext } from 'react';
// import NavContext from './context/navigation';


function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const results = await buildProducts();
            setProducts(results);
        }
        getProducts()

        getTags(products);
    //     const results = onSearch('cars');
    //     setProducts(results);
    //     console.log(products)
            // console.log(products)    
            // console.log(products)
    }, [])

    useEffect(() => {
        console.log('cart: ', cart)
    }, [cart])


    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<RootLayout />}>
                
                <Route index element={<Home />} />

                <Route path='results/:term' element={<ResultsPage />} loader={resultsLoader} />

                <Route path='product/:id' element={<ProductPage products={products} />} />
                <Route path='product/edit/:id' element={<ProductPage products={products} />} />
                <Route path='cart' element={<Cart cart={cart}/>} />
                <Route path='*' element={<ErrorPage />} />

            </Route>
        )
    )

    return( 
        <RouterProvider router={router} />
    )
}



export default App;