import React from 'react'
import { Typography } from '@mui/material'

const HeadText = ({ headText }) => {
    return (
        <>
            <Typography
                sx={{
                    fontFamily: 'Poppins',
                    fontSize: '2rem',
                    fontWeight: 700,
                    fontStyle : 'bold',
                    lineHeight: '3rem',
                    letterSpacing: '0em',
                    textAlign: 'left',
                    color: '#210366',
                }}
            >
                {headText}
            </Typography>
        </>
    )
}

export default HeadText
