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
          <Typography variant='inherit' sx={{textTransform: 'uppercase'}}>study in sweden: </Typography>
          <Typography variant='inherit' sx={{fontWeight: '600', textTransform: 'uppercase'}}>costs, visa process, top universities, application & interview, job opportunities</Typography>
        </Stack>
        <Typography variant='inherit' sx={{marginTop: '2rem', fontSize: '14px', fontWeight: '600'}}>Do you wish to study in Sweden? Climbing up the ladder of study abroad destinations, Sweden observed a rise in the number of international admissions by 13% despite the COVID-19 pandemic. Around 27,329 international students took admission in Swedish Universities for the year 2020-21 while in 2019-20, this number was around 24,099.</Typography>
        <Typography variant='inherit' sx={{marginTop: '1rem', fontSize: '14px', fontWeight: '600'}}>Sweden is one of the pioneer European countries for switching up to English-language education and offers over 1000 courses.</Typography>
        <Typography variant='inherit' sx={{marginTop: '1rem', fontSize: '14px', fontWeight: '600'}}>Alongside offering quality education, Sweden welcomes students from all across the world to enroll with 39 universities. The cost of studying in Sweden is around 80,000-200,000 SEK, depending on the choice of program and university. Check: Scholarships to Study in Sweden.</Typography>
      </Box>
    </>
  )
}

export default AcadCounsel;
