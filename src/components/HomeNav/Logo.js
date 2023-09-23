// styles
import './Logo.css';
import logoIcon from '../../images/logo.svg';
// react, router
import { Link } from "react-router-dom"

export default function Logo() {

    return (
            <Link to='/' name='logo-link'  className="logo__link">
                <div className='logo__container'>
                    <div className='logo__container--top'>
                        <h1 className="logo__text">
                            ART
                        </h1>
                        <img className='logo--icon' src={logoIcon} alt='logo'></img>

                    </div>
                    
                    <span className='logo__container--bottom logo__text logo__text--span'>Prints</span>

                </div>
                
            </Link>

    )
}