import { Container, Stack, Typography,Box, Grid} from '@mui/material'
import React from 'react'

import Cards from './Cards'


export default function AllCards() {

  let data=[{headings:"Mock Test-01: JEE Main 2023",attempts:"5344 Attempted"}, 
  {headings:"Mock Test-02: JEE Main 2023",attempts:"5062 Attempted"},
  {headings:"Mock Test-03: JEE Main 2023",attempts:"5994 Attempted"},
  {headings:"Mock Test-04: JEE Main 2023",attempts:"6861 Attempted"},
  {headings:"Mock Test-05: JEE Main 2023",attempts:"6970 Attempted"},
  
    ]

  return (
    <Container maxWidth='xl' sx={{
 width:'1487px',

height: '651px',
borderRadius: '28px',
boxShadow: '0px 0px 40px 0px #7B90FF26',
marginBottom:'20px',

}}>
      <Stack>
        <Typography sx={{
          fontFamily: 'Poppins',
          fontSize: '20px',
          fontWeight: '600',
          lineHeight: '26px',
          letterSpacing: '0em',
          textAlign: 'left',
          color: '#210366',
          
          
          marginTop:'1rem',
          marginBottom:'2rem'
         
        }}>Popular Tests</Typography>
  </Stack>

  
  <Grid container spacing={2} sx={{gap:'1rem'}}> 


   {
    data.map(({headings,attempts}, index) => (

      <Cards headings={headings} attempts={attempts} key={index} />))
  }
 
  
 </Grid>
  

    </Container>
  )
}
