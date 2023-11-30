import React from 'react'
import HeadText from '../../components/Headings/HeadText'
import { Container, Typography } from '@mui/material'
const ChooseAProgramToStudy = () => {
  return (
    <>
      <Container maxWidth="lg" >
        <HeadText headText='Choose A Program To Study' />
        <Typography
          sx={{
            color: "#210366",
            fontFamily: "Poppins",
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.03em",
            margin: "1rem",
          }}
        >
          Before we begin, the first main step is to finalize the choice of study students want to pursue for the future. There are a lot of programs offered at the associate, bachelor’s, master’s, doctoral and certificate levels in a wide variety of professional fields such as Business & Finance, Medicine, Engineering & Technology, Education, History, Literature, Visual & Performing Arts, Politics, etc. Detailed below are some of the most opted programs among Indian students studying abroad.
        </Typography>
      </Container>
    </>
  )
}

export default ChooseAProgramToStudy
