import History from "../History/History"
import Logo from "./Logo";
import { Link, useLocation } from 'react-router-dom';
import { createPortal } from "react-dom";
import Search from "../Search/Search";







export default function Header({results, history, cart, setIsModalOpen, isModalOpen=false}) {
    console.log('results', results)
    console.log('history', history)
    const location = useLocation();

    const renderCartIcon = 
    cart.length > 0 
        ? <Link to='cart'>
            <div className="header__cart">
                <span className="cart--icon material-symbols-outlined">
                    shopping_cart
                </span>
                <div className="cart--quantity">{cart.length}</div>
            </div>
        </Link>
        : null;

    const renderBreadCrumbs = 
        <aside className="breadcrumbs">
            {location.pathname === '/' ? '' : <Link className="breadcrumbs__link" title='home-breadcrumb' to='/'>Home</Link>} 
    
            {
                results.results && results.results.length > 0
                // location.pathname !== '/'
                && !location.pathname.includes('/results/')
                //  results && results.results.length > 0
                 ? <Link className="breadcrumbs__link" to={`/results/${results.term}`}>Back to results</Link>
                 : null
            }

            {
                location.pathname.includes('/product/editCartItem') &&
                    <Link className="breadcrumbs__link" to={`/cart`}>Back to cart</Link>
            }

        </aside>


    return (
        <section className='header'>
            <div className='header__box'>
                <Logo />
                <div className="header__actions">
                    <div className='header__history'>
                        <span onClick={() => setIsModalOpen(!isModalOpen)} className="material-symbols-rounded">
                            history
                        </span>

                        {isModalOpen && createPortal(
                            <History isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} history={history} />, 
                            document.body
                        )}
                    </div>
                    <Search />
                    {renderCartIcon}

                </div>
            </div>
            
            {location.pathname === '/' && results.results.length === 0 ? '' : renderBreadCrumbs}

        </section>
    )
}
