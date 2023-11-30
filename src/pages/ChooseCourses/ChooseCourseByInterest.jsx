import React from 'react'
import { Container } from '@mui/material'
import InterestHeading from '../../components/Headings/InterestHeading'
import InterestAllCards from './InterestAllCards'

const ChooseCourseByInterest = () => {
  return (
    <>
        <Container>
            <InterestHeading />
            <InterestAllCards />
        </Container>
    </>
  )
}

export default ChooseCourseByInterest
