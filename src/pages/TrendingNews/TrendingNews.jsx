import { useState } from 'react'
import One from './components/one';
import { Box, Container } from '@mui/material'
import Latest from './components/Latest';
import Content from './components/contents';
import Recommend from './components/recommend';
import Comments from './components/comments';
import Side from './components/side';
import Top from './components/top';
// import { Box } from '@mui/material';

function TrendingNews() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Container >
    <Box sx={{display: 'flex', justifyContent:'space-between'  }}>

      <Box sx={{ width: 995, paddingRight: 2, }}>
      <Top/>
      <One />
      <Latest />
      <Content />
      <Recommend />
      <Comments />
   
    </Box>

    <Box sx={{ width: 400, paddingRight: 1.5, }}>
    <Side />
    </Box>

    </Box>
    </Container>
    </>
  )
}

export default TrendingNews
