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
          <Typography variant='inherit' sx={{textTransform: 'uppercase'}}>study in germany: </Typography>
          <Typography variant='inherit' sx={{fontWeight: '600', textTransform: 'uppercase'}}>find universities, costs, courses, visa, rankings, scholarships</Typography>
        </Stack>
        <Typography variant='inherit' sx={{marginTop: '2rem', fontSize: '14px', fontWeight: '600'}}>Renowned as the world's most popular non-anglophone study destination, over 350,000 international students study in Germany. Having established itself in the list of top 5 study-abroad destinations among international students, the country is home to over 13 top universities in Germany that make the world’s top 250 prestigious institutes.</Typography>
        <Typography variant='inherit' sx={{marginTop: '1rem', fontSize: '14px', fontWeight: '600'}}>From a globally reputed curriculum with 20,000 courses to extremely low tuition rates, the country has proved itself a perfect overseas destination for international applicants after Canada, UK, and the USA. India is among the second largest senders of international students (6.1%) in Germany preceded by China.</Typography>
        <Typography variant='inherit' sx={{marginTop: '1rem', fontSize: '14px', fontWeight: '600'}}>According to Economic Times, the number of international students in Germany has increased from 64,000 in 2020-2021 to 72,000 and 80,000 lately in the 2021-2022 winter semester.</Typography>
      </Box>
    </>
  )
}

export default AcadCounsel;
