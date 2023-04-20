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

    const addToCart = (item) => {
        console.log('adding to cart', item)
        setCart()
    }

    const removeFromCart = (id) => {
        console.log('removing from cart')
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<RootLayout />}>
                
                <Route index element={<Home />} />

                <Route path='results/:term' element={<ResultsPage />} loader={resultsLoader} />

                <Route path='photo/:id' element={<ProductPage products={products} addToCart={addToCart} removeFromCart={removeFromCart}/>} />
                <Route path='cart' element={<Cart cart={cart}/>} />
                <Route path='*' element={<ErrorPage />} />

            </Route>
        )
    )

    return( 
        <RouterProvider router={router} />
    )
}


// function App() {
//     const {currentPath} = useContext(NavContext);
//     // const dispatch = useDispatch();

//     const [products, setProducts] = useState([]);

//     const onSearch = async term => {
//         // console.log('searching', term)
//         // const response = await unsplash.get('/search/photos', {
//         //     params: {
//         //             query: term
//         //     }
//         // })

        
//     }

//     useEffect(() => {
//         const getProducts = async () => {
//             const results = await buildProducts();
//             setProducts(results);
//         }
//         getProducts()

//         getTags(products);
//     //     const results = onSearch('cars');
//     //     setProducts(results);
//     //     console.log(products)
//             // console.log(products)    
//             console.log(products)
//     }, [])

//     // getData();

//     return (
//         <article className="app">
//             <Route path='/photos/search'>
//                 <Search onSearch={onSearch}/>
//             </Route>
//             <Route path='/photos/cart'>
//                 <Cart />
//             </Route>
//             <Route path='/photos/results'>
//                 <Products products={products}/>
//             </Route>
//             <Route path='/photos/product' >
//                 <Product products={products} />
//             </Route>
//         </article>
//     )
// }

export default App;