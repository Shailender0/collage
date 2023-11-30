import { Box, Container } from '@mui/material'
import React from 'react'
import HeadText from '../../components/Headings/HeadText'

const OurStudentLovesUs = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{
          margin: "2rem 0",
        }} >
          <HeadText headText={"Our Student Loves us"} />
        </Box>
      </Container>
    </>
  )
}

export default OurStudentLovesUs
