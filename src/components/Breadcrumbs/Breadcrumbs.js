import './Breadcrumbs.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export default function Breadcrumbs({prev}) {

    const location = useLocation();
const prevRoute = useLocation();
const navigate = useNavigate();

console.log(location.state?.from)

console.log(navigate)

    let path = '';

    const renderBreadcrumbs = location.pathname.split('/').filter(crumb => crumb !== '').map((crumb, index) => {
        console.log(crumb)
        path =+ `/${crumb}`

        return (
            <div className="" key={crumb}>
                <Navigate to={path} state={{ prevRoute }} replace />
                <Link to={path} >{crumb} &gt;</Link>
            </div>
        )
    })

    console.log(location.pathname)

    return (
        <div className='breadcrumbs'>
            {location.pathname === '/' ? '' : <Link to='/'>Home</Link>}
            {location.pathname === '/product'}
            {/* {renderBreadcrumbs} */}
            <button onClick={() => navigate(-1)}>Back</button>
            <button onClick={() => navigate(1)}>Forward</button>
            
        </div>
    )
}