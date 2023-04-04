import './App.css';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Products from "./components/AllProducts";
import Cart from "./components/Cart";
import Search from "./components/Search";
import unsplash from "./data/unsplash";
import {buildProducts, getTags} from "./data/productGenerator";


function App() {
    // const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    const onSearch = async term => {
        // console.log('searching', term)
        // const response = await unsplash.get('/search/photos', {
        //     params: {
        //             query: term
        //     }
        // })

        
    }

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
    }, [])

    // getData();

    return (
        <article className="app">
            <Search onSearch={onSearch}/>
            <Cart />
            <Products products={products}/>
        </article>
    )
}

export default App;