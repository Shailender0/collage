import React from 'react'
import HeadText from './HeadText'
import BtnViewMore from '../Buttons/ViewMoreBtn'
import { Box } from '@mui/material'

const InterestHeading = () => {
    return (
        <>
            <Box sx={{
                display: 'flex',
                width: '100%',
                margin: '2rem 0',
                justifyContent: 'space-between',
                alignItems : 'center',
                

            }} >
                <HeadText headText ='Choose courses by interest' />

                <BtnViewMore btnText = 'View More' />

            </Box>
        </>
    )
}

export default InterestHeading
