// styles
import './Footer.css';
// react, router
import { Link } from 'react-router-dom';
// components
import Logo from './Logo';

export default function Footer() {

    return (
        <footer className="app__footer">
            <div className="footer">
                <Logo /> 
                @2023 Mike Uffelman
            </div>
        </footer>
    )
}