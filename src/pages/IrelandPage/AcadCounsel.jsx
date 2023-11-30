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
          <Typography variant='inherit' sx={{textTransform: 'uppercase'}}>study in ireland: </Typography>
          <Typography variant='inherit' sx={{fontWeight: '600', textTransform: 'uppercase'}}>find universities, costs, courses, visa, requirements, scholarships</Typography>
        </Stack>
        <Typography variant='inherit' sx={{marginTop: '2rem', fontSize: '14px', fontWeight: '600'}}>One of the predominantly English-speaking European countries, Ireland is the 6th most competitive world economy that is quickly becoming the go-to destination for studying abroad. Currently, more than 44,000 international students from over 160 countries across the globe form the student population at higher education levels in the country (2020).</Typography>
        <Typography variant='inherit' sx={{marginTop: '1rem', fontSize: '14px', fontWeight: '600'}}>With more than 5,000 courses to choose from, international applicants from diverse corners rush to Ireland to be part of the world's 20th best education system. </Typography>
        <Typography variant='inherit' sx={{marginTop: '1rem', fontSize: '14px', fontWeight: '600'}}>The country has deservingly made itself recognized in the list of top countries for studying abroad like Canada, UK, USA, and Germany. India was among the second-largest senders of international students in Ireland after China (3,000).</Typography>
      </Box>
    </>
  )
}

export default AcadCounsel;
