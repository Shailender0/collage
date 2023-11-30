import React from 'react'
import Layout from './components/Layout'


import { Container,Box, Grid, Stack, } from '@mui/material'

import AllAmountCard from './components/AllAmountCard'
import AllScholarshipCard from './components/AllScholarshipCard'
import SimilarScholarships from './components/SimilarScholarships'
import AllSimilarCard from './components/AllSimilarCard'
import Layout2 from './components/Layout2'
import RatingBox from './components/RatingBox'
import Rating from './components/Rating'


export default function Scholarships() {
  return (
    
     <Container maxWidth='xl'>
        <Box sx={{display:'flex',marginTop:'1rem'}}>


           <Box sx={{
            paddingLeft:'3rem'
           }}>
            <Layout />
            <Layout2/>
           <Box sx={{display:'flex',gap:'3.5rem'}}> <AllSimilarCard/>  </Box>
             </Box>

         <Box sx={{
          marginLeft:'-24rem'
         }}>
            <AllAmountCard/>
            <AllScholarshipCard/>
         </Box>
    

         </Box>

         <Box sx={{marginLeft:'15rem'}}>
           <Rating/>
         </Box>
      </Container> 
 
  )
}