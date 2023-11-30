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
          <Typography variant='inherit' sx={{textTransform: 'uppercase'}}>study in france: </Typography>
          <Typography variant='inherit' sx={{fontWeight: '600', textTransform: 'uppercase'}}>top universities, cost, admissions, funding, visa & scope for international student</Typography>
        </Stack>
        <Typography variant='inherit' sx={{marginTop: '2rem', fontSize: '14px', fontWeight: '600'}}>France ranks amongst the most popular higher education destinations in Europe, just after the UK and Germany. Numerous top-ranking French universities and Grandes Ecoles rank highly in the various reputable international rankings, such as THE, the FT ranking, and the QS. The perfect blend of ancient and modern universities along with 5-star rated quality education is what allures international students to study in France.</Typography>
        <Typography variant='inherit' sx={{marginTop: '1rem', fontSize: '14px', fontWeight: '600'}}>The French government is also keen on inviting students to study in France and diversifying the education system. Presently, around 3,50,000 students from countries across the world are enrolled with higher education institutions in France.</Typography>
        <Typography variant='inherit' sx={{marginTop: '1rem', fontSize: '14px', fontWeight: '600'}}>Around 70% of the total international student population is pursuing studies in public universities, where the tuition is charged at subsidized rates. Students are required to pay tuition fees of 2,770 to 3,770 EUR (around 2.5 to 3.5 Lakhs).</Typography>
      </Box>
    </>
  )
}

export default AcadCounsel;
