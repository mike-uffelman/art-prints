import History from "../History/History"
import Logo from "./Logo";
import { Link } from 'react-router-dom';
import { createPortal } from "react-dom";
import Search from "../Search/Search";







export default function Header({results, cart, setIsModalOpen, isModalOpen=false}) {
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


    return (
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
    )
}
