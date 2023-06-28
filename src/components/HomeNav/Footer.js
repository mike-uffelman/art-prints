import './Footer.css';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {

    return (
        <div className="footer">
            <Logo /> 
            @2023 Mike Uffelman
        </div>
    )
}