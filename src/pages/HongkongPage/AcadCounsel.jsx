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
          <Typography variant='inherit' sx={{textTransform: 'uppercase'}}>study in hong kong: </Typography>
          <Typography variant='inherit' sx={{fontWeight: '600', textTransform: 'uppercase'}}>find universities, costs, courses, visa, rankings, scholarships</Typography>
        </Stack>
        <Typography variant='inherit' sx={{marginTop: '2rem', fontSize: '14px', fontWeight: '600'}}>Rising the rankings chart at a spectacular rate, Study in Hong Kong is quickly becoming the favored choice among millennials and Gen-Z. With around 50 universities and 6 globally ranked institutes, Hong Kong has featured among the world’s top 15 cities for students and is becoming the new regional hub of education.</Typography>
        <Typography variant='inherit' sx={{marginTop: '1rem', fontSize: '14px', fontWeight: '600'}}>With lower tuition rates (145,000 HKD or 18,700 USD) and relaxed visa policies, the country is ensuring tough competition for its fellow countries like the USA and UK.</Typography>
        <Typography variant='inherit' sx={{marginTop: '1rem', fontSize: '14px', fontWeight: '600'}}>As per the statistics revealed by QS University Rankings, nearly 30% of the student body at the top 6 universities in Hong Kong is composed of international candidates. Worrying if is it safe to study abroad in Hong Kong? Absolutely! The country has established itself as a safe haven in terms of COVID-19 (coronavirus) and has remained unaffected because of the pandemic with hardly any casualties.</Typography>
      </Box>
    </>
  )
}

export default AcadCounsel;
