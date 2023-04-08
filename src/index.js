import './routes/root.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Search from './components/Search';
import Products from './components/AllProducts';
import Product from './components/Product';
import Contact from './routes/contact';
// import { store } from './store/index';
// import { Provider } from 'react-redux'
// import { NavProvider } from './context/navigation';

import {createBrowserRouter, createRoutesFromElements, Router, RouterProvider, Route, Link, Outlet} from 'react-router-dom';
import Root, {rootLoader} from './routes/root';
import ErrorPage from './error-page';

const el = document.querySelector('#root');
const root = ReactDOM.createRoot(el);

// const Root = () => {
//     return (
//         <>
//             <div>
//                 <Link to='/'>Welcome to the page thing</Link>
                
//                 {/* <Link to='/search'>Search</Link> */}
//             </div>

//             <div>
//                 <Outlet />
//             </div>
//         </>
//     )
// }

const router = createBrowserRouter([
    // {
    //     path: '/',
    //     element: <Root />,
    //     errorElement: <ErrorPage />,
    //     children: [
    //         {
    //             path: 'contacts/:contactId',
    //             element: <Contact />,
    //         },
    //         // {
    //         //     path: 'photos',
    //         //     element: <Products />,
    //         // },
    //         // {
    //         //     path: 'photos',
    //         //     element: <Products />,
    //         // },
    //         // {
    //         //     path: 'photo/:id',
    //         //     element: <Product />
    //         // }
    //     ]
    // }
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            // {
            //     path: 'results',
            //     element: <Products />
            // },
            {
                path: 'photo/:id',
                element: <Product />
            }
        ]
    }
])

// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path='/' element={<Root />}>
            
//             {/* <Route index element={<App />} /> */}
//             {/* <Route path='/search' element={<Search />}/> */}
//             {/* <Route path='results/:term' element={<Products />} /> */}
//             <Route path='*' element={<ErrorPage />} />
//             {/* <Route path='/photo/:id' element={<Product />} /> */}
//         </Route>
//     )
    
// )



root.render(
    // <Provider store={store}>
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>

        // <NavProvider>
        //     <App />
        // </NavProvider>
    // </Provider>
)