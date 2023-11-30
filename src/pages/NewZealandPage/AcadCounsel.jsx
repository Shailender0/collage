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
          <Typography variant='inherit' sx={{textTransform: 'uppercase'}}>study in new zealand: </Typography>
          <Typography variant='inherit' sx={{fontWeight: '600', textTransform: 'uppercase'}}>find programs, colleges, costs, scholarships, visa, job details</Typography>
        </Stack>
        <Typography variant='inherit' sx={{marginTop: '2rem', fontSize: '14px', fontWeight: '600'}}>Getting an internationally recognized degree while having the time of your life is what comes along when you plan to study in New Zealand. Beating the fight against Coronavirus, New Zealand has now become the new favorite among foreign nationals.</Typography>
        <Typography variant='inherit' sx={{marginTop: '1rem', fontSize: '14px', fontWeight: '600'}}>New Zealand boasts being ranked second on the Global Peace Index, making it one of the safest study destinations.</Typography>
        <Typography variant='inherit' sx={{marginTop: '1rem', fontSize: '14px', fontWeight: '600'}}>Students in New Zealand are encouraged to be questioning, flexible, and to seek their answers through research initiatives and experiential learning. This young country has made its way from picturesque landscapes to progressive education.</Typography>
      </Box>
    </>
  )
}

export default AcadCounsel;
