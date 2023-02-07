import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../partials/Footer'
import Header from '../partials/Header'

const RootLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default RootLayout