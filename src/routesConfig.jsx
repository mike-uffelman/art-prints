// import components
// import ProductPage from './pages/ProductPage';
// import Cart from "./components/Cart/Cart";
// import RootLayout from './layouts/RootLayout';
// import Landing from './components/HomeNav/Landing';
// import Home from './pages/Home';
// import Home from './pages/Home';
// import ResultsPage from './pages/ResultsPage';
// import ErrorPage from './error-page';
// import EditPage from './pages/EditPage';

import { lazy } from 'react';

const RootLayout = lazy(() => import('./layouts/RootLayout.jsx'));
const Home = lazy(() => import('./pages/Home.jsx'));
const ResultsPage = lazy(() => import('./pages/ResultsPage.jsx'));
const ProductPage = lazy(() => import('./components/HomeNav/Landing.jsx'));
const EditPage = lazy(() => import('./pages/EditPage.jsx'));
const Cart = lazy(() => import('./components/Cart/Cart.jsx'));
const ErrorPage = lazy(() => import('./error-page.jsx'));


export const routesConfig = [
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                path: '/',
                element: <Home />
            },
            {
                path: 'results/:term',
                element: <ResultsPage />
            },
            {
                path: 'product/:id',
                element: <ProductPage />
            },
            {
                path: 'product/editCartItem/:id',
                element: <EditPage />
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: '*',
                element: <ErrorPage />
            }
        ]
    }
]