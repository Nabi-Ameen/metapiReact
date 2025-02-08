import React from 'react'
import Header from '../header/Header';
import Footer from "../footer/Footer"
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout