import { Outlet, Link } from "react-router-dom"
import Cart from "../components/Cart/Cart"
import Search from "../components/Search"
import Footer from "../components/Footer"
import Logo from "../components/Logo"
export default function RootLayout() {
    


    return (
        <article className="app">
            <header className="app__header">
                    <Logo />
                    <div className="app__header--actions">
                        <Search />

                        {/* // Add Conditional if cart empty, hide it */}
                        <Link to='cart'>
                            <div className="app__header--cart">
                                <span className="cart--icon material-symbols-outlined">
                                    shopping_bag
                                </span>
                                <div className="cart--quantity"></div>
                            </div>
                        </Link>
                    </div>
            </header>
            <aside className="breadcrumbs">
                <Link to='/results/dogs'>Back to results</Link>

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