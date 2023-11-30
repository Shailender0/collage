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
          <Typography variant='inherit' sx={{textTransform: 'uppercase'}}>study in australia:</Typography>
          <Typography variant='inherit' sx={{fontWeight: '600', textTransform: 'uppercase'}}>find courses, universities, colleges & rankings</Typography>
        </Stack>
        <Typography variant='inherit' sx={{marginTop: '2rem', fontSize: '14px', fontWeight: '600'}}>Studying in Australia is becoming highly popular among international students seeking to further their education. Australia is one of the top three destinations for studying abroad and attracts over 600,000 students every year, after the USA and the UK. The number of Indian students in Australia opting for higher education exceeded 89,000 in the year 2023.</Typography>
        <Typography variant='inherit' sx={{marginTop: '1rem', fontSize: '14px', fontWeight: '600'}}>With over 11,000 institutions and a range of 22,000 courses, Australia dedicates 254 million AUD to scholarships annually. Among the top 100 universities globally, seven of them are Australian, while 36 higher education institutions are included in the QS top universities list.</Typography>
      </Box>
    </>
  )
}

export default AcadCounsel;
