import { Stack } from '@mui/material'
import React from 'react'
import AllAnsSet from '../Left/AllAnswer'
import MainCard from '../Right/MainCard'

const Left = () => {
  return (
    <>
    <Stack display={"flex"}
    flexDirection={"row"}
    flexWrap={"wrap"}
    gap={"3rem"}
    >
          <AllAnsSet/>
            <MainCard/>

        
    </Stack>
    
    </>
  )
}

export default Left