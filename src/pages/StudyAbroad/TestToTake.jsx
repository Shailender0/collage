import { Container, Typography } from '@mui/material'
import React from 'react'
import HeadText from '../../components/Headings/HeadText'

const TestToTake = () => {
  return (
    <>
      <Container maxWidth="lg">
        <HeadText headText='Tests to Take' />
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
          There are two types of tests international students must take before starting with the application process. These are Language Proficiency Tests (IELTS, TOEFL, PTE, etc) and Standardized Tests (SAT, ACT, GMAT, GRE, etc). Different countries have different preferences for one test over another. For instance:-
        </Typography>
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
          IELTS and PTE (Pearson Tests of English) exams are the most preferred language exams in the United Kingdom, Australia, and New Zealand.

        </Typography>
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

          TOEFL (Test of English as a Foreign Language) is widely accepted by the USA and Canadian universities.

        </Typography>
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

          Cambridge English Proficiency Tests (CAE & CPE) are given a huge preference by British universities.

        </Typography>
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

          SAT and/or ACT scores are widely accepted by countries for undergraduate programs.

        </Typography>
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

          GMAT/ GRE scores are globally accepted by the universities for graduate programs.
        </Typography>
      </Container>
    </>
  )
}

export default TestToTake