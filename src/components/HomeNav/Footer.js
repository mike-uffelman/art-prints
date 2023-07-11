// styles
import './Footer.css';
// react, router
import { Link } from 'react-router-dom';
// components
import Logo from './Logo';

export default function Footer() {

    return (
        <div className="footer">
            <Logo /> 
            @2023 Mike Uffelman
        </div>
    )
}