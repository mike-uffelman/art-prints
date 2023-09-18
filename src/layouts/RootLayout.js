// react, router, redux
import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';

// components
import Footer from "../components/HomeNav/Footer";
import Toasts from '../components/Toasts/Toasts';
import Header from '../components/HomeNav/Header';

export default function RootLayout() {

    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const cart = useSelector((state) => {
        return state.cart
    })
    const results = useSelector((state) => {
        return state
    })
    const toasts = useSelector((state) => {
        return state.toasts
    })

    const renderToasts = toasts.length > 0 
        ? <section className='header__toasts'>
        {toasts.map((toast, index) => {
            return (
                <React.Fragment key={toast.id}>
                    <Toasts toast={toast} index={index} />
                </React.Fragment>
            )
        })
            }
        </section>
        : null;

    return (
        <article className="app">
            <header className="app__header">
                <Header results={results} cart={cart} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>
            </header>

            <div className='content'>
                {/* <section className="content__box"> */}
                    <Outlet />
                {/* </section> */}
                <Footer />
            </div>

            {renderToasts}
        </article>
    )
}