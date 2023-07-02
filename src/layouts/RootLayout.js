import { useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import Search from "../components/Search/Search";
import Footer from "../components/HomeNav/Footer";
import Logo from "../components/HomeNav/Logo";
import { useSelector } from 'react-redux';
import History from "../components/History/History";
import { createPortal } from "react-dom";
import Toasts from '../components/Toasts/Toasts';

export default function RootLayout() {
    const [ toastsArray, setToastsArray ] = useState([{id: 1, label: 'success', icon: 'check_circle'}, {id: 2, label: 'error', icon: 'error'}])
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [ isPageLoaded, setIsPageLoaded ] = useState(false);
    const location = useLocation();
    const cart = useSelector((state) => {
        return state.cart
    })
    const results = useSelector((state) => {
        return state
    })

    // [{id: 1, label: 'success', icon: 'check_circle'},
    // {id: 2, label: 'error', icon: 'error'},
    // {id: 3, label: 'warning', icon: 'warning'},
    // {id: 4, label: 'danger', icon: 'dangerous'},
    // {id: 5, label: 'info', icon: 'info'},
    // {id: 6, label: 'help', icon: 'help'}]

    useEffect(() => {
        setIsPageLoaded(true)

        
    }, [])

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

                        {/* search history here */}
                        {cart.length > 0 &&
                        <Link to='cart'>
                            <div className="header__cart">
                                <span className="cart--icon material-symbols-outlined">
                                    shopping_bag
                                </span>
                                <div className="cart--quantity"></div>
                            </div>
                        </Link>}
                    </div>
                </section>

                <aside className="breadcrumbs">
                    {location.pathname === '/' ? '' : <Link className="breadcrumbs__link" to='/'>Home</Link>} 
                    {location.pathname !== '/' && !location.pathname.includes('/results/') && <Link className="breadcrumbs__link" to={`/results/${results.search.term}`}>Back to results</Link>}

                </aside>
                {createPortal(
                <Toasts toasts={toastsArray} setToastsArray={setToastsArray} message={'Loaded Successfuly!'}/>, document.body

            )}
            </header>

            <section className="content">
                <Outlet />
            </section>
            <footer className="app__footer">
                <Footer />
            </footer>
        

        </article>
    )
}