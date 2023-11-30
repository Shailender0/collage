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
          <Typography variant='inherit' sx={{textTransform: 'uppercase'}}>study in uae:</Typography>
          <Typography variant='inherit' sx={{fontWeight: '600', textTransform: 'uppercase'}}>visa process, top universities, application & interview, job opportunities</Typography>
        </Stack>
        <Typography variant='inherit' sx={{marginTop: '2rem', fontSize: '14px', fontWeight: '600'}}>UAE is a perfect study-abroad destination offering a wealth of knowledge in combination with unmatched innovative and intercultural experiences in a globally recognized nation. With six of its universities in UAE making it to the QS top ranking 2021 list, UAE is rising up the ladder and making its name in the popular abroad destinations for higher education.</Typography>
        <Typography variant='inherit' sx={{marginTop: '1rem', fontSize: '14px', fontWeight: '600'}}>In addition to some world-class universities in the gulf region, potential tax-free earnings after completion of studies from the United Arab Emirates attracts a huge number of Indian students to the country.</Typography>
        <Typography variant='inherit' sx={{marginTop: '1rem', fontSize: '14px', fontWeight: '600'}}>This small country in the Arabian Peninsula is bordered by Saudi Arabia, Oman, and the Persian Gulf and is composed of seven emirates- Abu Dhabi (the capital), Dubai, Sharjah, Fujairah, Ajman, Ras al-Khaimah, and Umm al-Quwain.</Typography>
      </Box>
    </>
  )
}

export default AcadCounsel;
