// import Search from "../components/Search/Search"
// import Cart from "../components/Cart/Cart"
// import { Outlet } from "react-router-dom"
import { lazy, Suspense } from 'react';
import Toasts from "../components/Toasts/Toasts"
// import Landing from '../components/HomeNav/Landing.js';
const Landing = lazy(() => import('../components/HomeNav/Landing.js')) 

export default function Home() {

    return (
        // <section className="">
            <Suspense fallback={<div>Loading...</div>}>
                <Landing />
            </Suspense>
            // {/* <Toasts className='success' message='Success!'/>
            // <Toasts className='error' message='Error!'/>
            // <Toasts className='warning' message='Warning!'/>
            // <Toasts className='danger' message='Danger!'/>
            // <Toasts className='info' message='Info!'/>
            // <Toasts className='help' message='Help'/> */}



        // </section>
    )
}