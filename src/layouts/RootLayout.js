import React, { useState } from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import Search from "../components/Search/Search";
import Footer from "../components/HomeNav/Footer";
import Logo from "../components/HomeNav/Logo";
import { useSelector } from 'react-redux';
import History from "../components/History/History";
import { createPortal } from "react-dom";
import Toasts from '../components/Toasts/Toasts';

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

    const renderCartIcon = 
    cart.length > 0 
        ? <Link to='cart'>
            <div className="header__cart">
                <span className="cart--icon material-symbols-outlined">
                    shopping_bag
                </span>
                <div className="cart--quantity"></div>
            </div>
        </Link>
        : null;

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

    return (
        <article className="app">
            <header className="app__header">
                <section className='header'>
                    <Logo />
                    <div className="header__actions">
                        <div className='header__history'>
                            <span onClick={() => setIsModalOpen(!isModalOpen)} className="material-symbols-rounded">
                                history
                            </span>

                            {isModalOpen && createPortal(
                                <History isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} history={results.history} />, 
                                document.body

                            )}
                        </div>

                        <Search />

                        {renderCartIcon}
                        
                        
                    </div>
                    
                    
                </section>
                            
                <aside className="breadcrumbs">
                    {location.pathname === '/' ? '' : <Link className="breadcrumbs__link" to='/'>Home</Link>} 
                    {location.pathname !== '/' && !location.pathname.includes('/results/') && <Link className="breadcrumbs__link" to={`/results/${results.search.term}`}>Back to results</Link>}

                </aside>
                
                
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