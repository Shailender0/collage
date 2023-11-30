import React from 'react';
import { Typography, Box, Link, Stack } from '@mui/material';

const AcadCounsel = () => {
  return (
    <>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        marginTop: '1rem', 
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontStyle: 'bold',
        fontSize: '20px',
        color: '#210366',
        marginLeft: '2rem'
      }}>
        <Stack direction="row" spacing={1} sx={{font: 'Inter'}}>
          <Typography variant='inherit' sx={{textTransform: 'uppercase'}}>study in malaysia: </Typography>
          <Typography variant='inherit' sx={{fontWeight: '600', textTransform: 'uppercase'}}>find universities, costs, courses, visa, requirements, scholarships</Typography>
        </Stack>
        <Typography variant='inherit' sx={{marginTop: '2rem', fontSize: '14px', fontWeight: '600'}}>Quickly rising the charts of best-destinations to study abroad, Malaysia has recently made its entry in the top 10 most-favored countries for international students. It had an international student population of nearly 130,110 at the end of 2019 which is expected to rise to 250,000 by 2025. </Typography>
        <Typography variant='inherit' sx={{marginTop: '1rem', fontSize: '14px', fontWeight: '600'}}>With an unparalleled education system governed by the Malaysian Ministry of Education, the country offers hundreds of diverse programs across its 150+ top universities renowned in the list of 200 regarded institutes across the globe.</Typography>
        <Typography variant='inherit' sx={{marginTop: '1rem', fontSize: '14px', fontWeight: '600'}}>Standing proudly as a strong competitor to USA, Germany and UK, Malaysia is currently home to students from over 135 countries primarily from Asia, Europe, the Middle East and Africa. Other than its official languages, English is also considered as an official language that adds credit to the nation’s favor.</Typography>
      </Box>
    </>
  )
}

export default AcadCounsel;
