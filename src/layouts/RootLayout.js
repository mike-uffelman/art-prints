import { Outlet, Link, useLocation } from "react-router-dom";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { useSelector } from 'react-redux';

export default function RootLayout() {
    const cart = useSelector((state) => {
        return state.cart
    })

    const location = useLocation();

    const results = useSelector((state) => {
        return state.search
    })

    return (
        <article className="app">
            <header className="app__header">
                <section className='header'>
                    <Logo />
                    <div className="header__actions">
                        <Search />

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

                    {location.pathname !== '/' && !location.pathname.includes('/results/') && <Link className="breadcrumbs__link" to={`/results/${results.term}`}>Back to results</Link>}

                </aside>
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