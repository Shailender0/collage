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
          <Typography variant='inherit' sx={{textTransform: 'uppercase'}}>study in singapore: </Typography>
          <Typography variant='inherit' sx={{fontWeight: '600', textTransform: 'uppercase'}}>find programs, colleges, costs, scholarship, visa details for Inter...</Typography>
        </Stack>
        <Typography variant='inherit' sx={{marginTop: '2rem', fontSize: '14px', fontWeight: '600'}}>An island state, Singapore envisages becoming a “Global Schoolhouse” offering world-class universities and a reputation for educational excellence. Providing a distinctive and diverse range of educational opportunities in a cosmopolitan blend of languages and cultures, Singapore boasts leading research and innovation.</Typography>
        <Typography variant='inherit' sx={{marginTop: '1rem', fontSize: '14px', fontWeight: '600'}}>Emerging as the new study-abroad destination, specifically among Asian/Indian students, Singapore has 34 Universities of which six are national universities. Aspirants who wish to study in Singapore look forward to pursuing education at national higher education institutions like NUS and NTU.</Typography>
        <Typography variant='inherit' sx={{marginTop: '1rem', fontSize: '14px', fontWeight: '600'}}>Apart from these public institutions in Singapore, there is a large pool of autonomous universities and foreign campuses offering a wide range of course choices to study in Singapore. </Typography>
      </Box>
    </>
  )
}

export default AcadCounsel;
