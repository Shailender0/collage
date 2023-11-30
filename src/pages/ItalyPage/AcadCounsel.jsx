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
          <Typography variant='inherit' sx={{textTransform: 'uppercase'}}>study in italy: </Typography>
          <Typography variant='inherit' sx={{fontWeight: '600', textTransform: 'uppercase'}}>find universities, costs, courses, scholarships, placements</Typography>
        </Stack>
        <Typography variant='inherit' sx={{marginTop: '2rem', fontSize: '14px', fontWeight: '600'}}>Education in Italy is compulsory from 6 to 16 years of age, and is divided into five stages: kindergarten, primary school, lower secondary school, upper secondary school and university.Education is free in Italy and free education is available to children of all nationalities who are residents in Italy.</Typography>
        <Typography variant='inherit' sx={{marginTop: '1rem', fontSize: '14px', fontWeight: '600'}}>33 Italian universities were ranked among the world's top 500 in 2019, the third-largest number in Europe after the United Kingdom and Germany.</Typography>
        <Typography variant='inherit' sx={{marginTop: '1rem', fontSize: '14px', fontWeight: '600'}}>In 2018, the Italian secondary education was evaluated as below the OECD average. Italy scored below the OECD average in reading and science, and near OECD average in mathematics.</Typography>
      </Box>
    </>
  )
}

export default AcadCounsel;
