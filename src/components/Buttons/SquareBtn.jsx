import { Box, Typography, } from '@mui/material'
import React from 'react'


const RoundBtn = ({image, name, noOfCollege}) => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    // hight: '100px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    // flexWrap: 'wrap',
                    // margin : '1rem'
                   
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 100,
                        height: 100,
                        // borderRadius: '50%',
                        backgroundColor: '#7B90FF',
                        // margin: '1rem',
                       
                    }}
                >
                    <img
                        src={image}
                        alt={name}
                        // sx={{ width: 80, height: 80 }}
                    />

                </Box>

                <Typography
                    // variant="subtitle1"
                    sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        lineHeight: '1.1rem',
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        color: '#323C4F',
                        maxWidth : 100,
                        height : 30,
                       
                    }}
                >
                    {name}
                </Typography>
                <Typography
                    // variant="subtitle1"
                    sx={{
                        fontFamily: 'Poppins',
                        // fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        lineHeight: '1.2rem',
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        color: '#999999',
                        maxWidth : 100,
                        height : 30,
                       
                    }}
                >
                    {noOfCollege}
                </Typography>
            </Box>
        </>
    )
}

export default RoundBtn
