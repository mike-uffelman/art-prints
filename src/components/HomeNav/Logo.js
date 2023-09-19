// styles
import './Logo.css';
import logoIcon from '../../images/logo.svg';
// react, router
import { Link } from "react-router-dom"

export default function Logo() {

    return (
            <Link to='/' name='logo-link'  className="logo__link">
                <div className='logo__container'>
                    <img className='logo--icon' src={logoIcon} alt='logo'></img>
                    <h1 className="logo__text">
                        ART
                    </h1>
                    <span className='logo__text logo__text--span'>Prints</span>

                </div>
                
            </Link>

    )
}