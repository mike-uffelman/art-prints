// react, router, redux
import React, { useState } from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

// components
import Search from "../components/Search/Search";
import Footer from "../components/HomeNav/Footer";
import Logo from "../components/HomeNav/Logo";
import History from "../components/History/History";
import Toasts from '../components/Toasts/Toasts';
import Header from '../components/HomeNav/Header';

export default function RootLayout() {
    const [ toastsArray, setToastsArray ] = useState([
        // {id: 1, label: 'success', icon: 'check_circle'}, 
        // {id: 2, label: 'error', icon: 'error'}, 
        // {id: 3, label: 'warning', icon: 'warning'},
        // {id: 4, label: 'danger', icon: 'dangerous'},
        // {id: 5, label: 'info', icon: 'info'},
        // {id: 6, label: 'help', icon: 'help'}
    ])
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const location = useLocation();
    const cart = useSelector((state) => {
        return state.cart
    })
    const results = useSelector((state) => {
        return state
    })
    const toasts = useSelector((state) => {
        return state.toasts
    })


    

    const renderToasts = toasts.length > 0 
        ? <section className='header__toasts'>
        {toasts.map((toast, index) => {
            return (
                <React.Fragment key={toast.id}>
                    <Toasts toast={toast} index={index} />
                </React.Fragment>
                
            )
        })
            }
        </section>
        : null;

    const renderBreadCrumbs = 
        <aside className="breadcrumbs">
            {location.pathname === '/' ? '' : <Link className="breadcrumbs__link" to='/'>Home</Link>} 
    
            {
                results.search.results && results.search.results.length > 0
                // location.pathname !== '/'
                && !location.pathname.includes('/results/')
                //  results && results.results.length > 0
                 ? <Link className="breadcrumbs__link" to={`/results/${results.search.term}`}>Back to results</Link>
                 : null
            }

            {
                location.pathname.includes('/product/editCartItem') &&
                    <Link className="breadcrumbs__link" to={`/cart`}>Back to cart</Link>
            }

        </aside>

    return (
        <article className="app">
            <header className="app__header">
                <Header results={results} cart={cart} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>
                
                            
                {renderBreadCrumbs}
                
                
            </header>

            <section className="content">
                <Outlet />
            </section>
            <footer className="app__footer">
                <Footer />
            </footer>

            {renderToasts}
        

        </article>
    )
}