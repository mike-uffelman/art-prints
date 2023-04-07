import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Search from './components/Search';
import Products from './components/AllProducts';
// import { store } from './store/index';
// import { Provider } from 'react-redux'
// import { NavProvider } from './context/navigation';

import {createBrowserRouter, createRoutesFromElements, Router, RouterProvider, Route, Link, Outlet} from 'react-router-dom';
// import Root, {rootLoader} from './routes/root';
import ErrorPage from './error-page';

const el = document.querySelector('#root');
const root = ReactDOM.createRoot(el);

const Root = () => {
    return (
        <>
            <div>
                <Link to='/'>Welcome to the page thing</Link>
                {/* <Link to='/search'>Search</Link> */}
            </div>

            <div>
                <Outlet />
            </div>
        </>
    )
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            {/* <Route index element={<App />} /> */}
            {/* <Route path='/search' element={<Search />}/> */}
            <Route path='/results/:term' element={<Products />} />
            <Route path='*' element={<ErrorPage />} />
        </Route>
    )
    
)



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