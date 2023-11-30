import React from 'react'
import { Container } from '@mui/material'
import LevelHeading from '../../components/Headings/LevelHeading'
import LevelAllCards from './LevelAllCards'

const ChooseCourseByLevel = () => {
  return (
    <>
        <Container >
            <LevelHeading />
            <LevelAllCards />
        </Container>
    </>
  )
}

export default ChooseCourseByLevel
