import React from 'react'
import Navbar from '../components/Navigation/Navbar'
import Footer from '../components/Navigation/Footer'
import { Outlet } from 'react-router-dom'

const MainPageLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainPageLayout
