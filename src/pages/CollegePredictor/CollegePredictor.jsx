import React from 'react'
import Allcard from './Allcard'
import {  Container } from '@mui/material'
import AllLowerCard from './CardsData/AllLowerCard'
import FooterCard from './FooterCard/FooterCard'
const CollegePredictor = () => {
  return (
    <Container>
    <Allcard/>
     <AllLowerCard/>
     <FooterCard/>
    </Container>
  )
}

export default CollegePredictor