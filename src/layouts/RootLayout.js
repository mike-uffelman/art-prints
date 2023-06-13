import { Outlet, Link } from "react-router-dom";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { useSelector } from 'react-redux';

export default function RootLayout() {
    const cart = useSelector((state) => {
        return state.cart
    })

    const results = useSelector((state) => {
        return state.search
    })

    return (
        <article className="app">
            <header className="app__header">
                    <Logo />
                    <div className="app__header--actions">
                        <Search />

                        {cart.length > 0 &&
                        <Link to='cart'>
                            <div className="app__header--cart">
                                <span className="cart--icon material-symbols-outlined">
                                    shopping_bag
                                </span>
                                <div className="cart--quantity"></div>
                            </div>
                        </Link>}
                    </div>
            </header>
            <aside className="breadcrumbs">
                <Link to={`/results/${results.term}`}>Back to results</Link>

            </aside>
            <section className="content">
                <Outlet />
            </section>
            <footer className="app__footer">
                <Footer />
            </footer>
        

        </article>
    )
}