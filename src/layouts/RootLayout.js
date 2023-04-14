import { Outlet, Link } from "react-router-dom"
import Cart from "../components/Cart"
import Search from "../components/Search"

export default function RootLayout() {
    


    return (
        <article className="app">
            <header>
                <div className="app__header">
                    <div className="app__header--logo">
                        <Link to='/' className="app__header--logo">
                        PhotoPRINT

                        </Link>
                    </div>
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
                </div>
                <div className="content">
                    <Outlet />
                </div>
            </header>

        </article>
    )
}