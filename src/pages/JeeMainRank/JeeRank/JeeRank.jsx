import React from 'react'
import Trending from './components/Trending'
import AllRelatedQues from './components/AllRelatedQues'
import RankQuestion from './components/RankQuestion'
import AllRankQues from './components/AllRankQues'
import RightSection from './components/RightSection'
import { Box, Container } from '@mui/material'
import ViewedQues from './components/ViewedQues'
import AllViewedQues from './components/AllViewedQues'
import Ad from './components/Ad'
import Rating from './components/Rating'


export default function JeeRank() {
  return (
   <>
   <Container maxWidth="xl" sx={{display:'flex',marginTop:'1rem'}}>
  <Box>
  <Trending/>
 <AllRelatedQues/>
    </Box>
    <Box sx={{flexDirection:'column'}}>
<AllRankQues/>
</Box>
  

<Box sx={{marginLeft:'1rem'}}>
  <RightSection/>
 <AllViewedQues/>
 </Box>
 </Container>

 <Box sx={{
  marginLeft:'25rem'
 }}>
 <Rating/>
 </Box>


<Box sx={{marginLeft:'30rem',marginTop:'1rem',marginBottom:'1rem'}}>
 <Ad/>
 </Box>
   </>
  )
}
