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
          <Typography variant='inherit' sx={{textTransform: 'uppercase'}}>study in netherlands: </Typography>
          <Typography variant='inherit' sx={{fontWeight: '600', textTransform: 'uppercase'}}>find programs, universities, costs, scholarships, visa details for internation</Typography>
        </Stack>
        <Typography variant='inherit' sx={{marginTop: '2rem', fontSize: '14px', fontWeight: '600'}}>Are you planning to sign-up for Dutch Style Education? Studying in the Netherlands, or as also known as Holland, is the newfound viable study abroad choice among international students. Gaining its popularity among Indian students as well, Netherlands enrolled over 2,500 Indian students for the year 2018 (MoE).</Typography>
        <Typography variant='inherit' sx={{marginTop: '1rem', fontSize: '14px', fontWeight: '600'}}>Each year the Netherlands hosts international students from over 160 countries across the world and one out of every tenth student studying in Holland is international.</Typography>
        <Typography variant='inherit' sx={{marginTop: '1rem', fontSize: '14px', fontWeight: '600'}}>The Netherlands was the first non-native English speaking country to offer English language programs to its students. There are over 2,100 English language programs currently running with colleges/universities in Netherlands. From the 27+ listed institutions, 13 are recognized globally and are ranked among the top 2% of world universities.</Typography>
      </Box>
    </>
  )
}

export default AcadCounsel;
