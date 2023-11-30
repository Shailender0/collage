import React from 'react'
// import Navbar from './Navbar'
// import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Course from '../Course'
import { Container } from '@mui/material'
import Left from '../../components/Left'


const MainPageLayout = () => {
    return (
        <>
            <Container>
            <Course/>
             <Left/>
            <Outlet />
            </Container>
        </>
    )
}

export default MainPageLayout