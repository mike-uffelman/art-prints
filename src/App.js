import './App.css';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Products from "./components/AllProducts";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Search from "./components/Search";
import { Link, Outlet } from 'react-router-dom';

// import Route from "./components/Route";
// import unsplash from "./data/unsplash";
import {buildProducts, getTags} from "./data/productGenerator";
// import { useContext } from 'react';
// import NavContext from './context/navigation';


function App() {
    const [products, setProducts] = useState([]);

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
            console.log(products)
    }, [])


    return( 
        <div className='app'>
            <Link to={'/'} className='app__header--link'><h1 className="app__header--logo">PhotoPrinter</h1></Link>
            <section className='heading'>
                <Search />
                <Cart />
                
            </section>
            <Outlet />
            <Product />
            <Products products={products} />
        </div>
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