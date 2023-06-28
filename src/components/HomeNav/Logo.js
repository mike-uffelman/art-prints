import './Logo.css';
import { Link } from "react-router-dom"

export default function Logo() {

    return (
        // <div className="app__header--logo">
            <Link to='/' className="logo__link">
                <div className='logo__container'>
                    <span className="material-symbols-outlined logo--icon">
                        panorama
                    </span>
                    <h1 className="logo__text">
                        
                        ART
                    </h1>
                    <span className='logo__text logo__text--span'>Prints</span>

                </div>
                
            </Link>
        // </div>

    )
}