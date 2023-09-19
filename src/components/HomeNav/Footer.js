// styles
import './Footer.css';
// react, router
// import { Link } from 'react-router-dom';
// components
import Logo from './Logo';
// resources
import githubLogo from '../../images/github.svg'



export default function Footer() {

    return (
        <footer className="app__footer">
            <div className="footer">
                <Logo /> 
                <div className='footer__attribution'>
                    <a className='footer__link' alt='github' target='_blank' rel='noreferrer' href='https://github.com/mike-uffelman/art-prints'>
                        <p className=''>&#169;2023</p> 
                        <p className=''>&nbsp; Mike Uffelman &nbsp; </p>
                        <img alt='github' className='footer__icon--github' src={githubLogo}></img>    
                    </a>
                    
                </div>
            </div>
        </footer>
    )
} 