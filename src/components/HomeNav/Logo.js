// styles
import './Logo.css';
// react, router
import { Link } from "react-router-dom"

export default function Logo() {

    return (
            <Link to='/' name='logo-link'  className="logo__link">
                <div className='logo__container'>
                    <span role='img' data-testid='logo-img' className="material-symbols-outlined logo--icon">
                        panorama
                    </span>
                    <h1 className="logo__text">
                        
                        ART
                    </h1>
                    <span className='logo__text logo__text--span'>Prints</span>

                </div>
                
            </Link>

    )
}