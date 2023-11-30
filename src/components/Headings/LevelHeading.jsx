import React from 'react'
import HeadText from './HeadText'
import { Box } from '@mui/material'

const LevelHeading = () => {
  return (
    <>
      <Box sx={{
        display: 'flex',
        width: '100%',
        margin: '2rem 0',
        justifyContent: 'start',
        alignItems: 'center',
        
      }} >

        <HeadText headText='Choose courses by Level' />
      </Box>
    </>
  )
}

export default LevelHeading
