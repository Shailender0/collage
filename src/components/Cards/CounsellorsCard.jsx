import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const CounsellorsCard = (props) => {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "column",
                    // justifyContent: "center",
                    width: "330px",
                    height: "480px",
                    borderRadius: "1rem",
                    backgroundColor: "white",
                    // border: "2px solid green",
                    boxSizing: 'border-box',
                }}>

                <Box sx={{
                    // backgroundImage: "url({props.image})",
                    // border: "2px solid black",

                }}>
                    <img
                        width="320px"
                        height="320px"

                        src={props.image} />

                </Box>

                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: '1.6rem',
                        fontWeight: 600,
                        fontStyle: 'bold',
                        lineHeight: '2rem',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        color: '#210366',
                        textTransform: "capitalize"
                    }}
                >
                    {props.name}
                </Typography>
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        fontStyle: 'bold',
                        lineHeight: '1.2rem',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        color: '#210366',
                        textTransform: "capitalize"
                    }}
                >
                    {props.designation}
                </Typography>
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        fontStyle: 'bold',
                        lineHeight: '1.2rem',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        color: '#210366',
                        textTransform: "capitalize"
                    }}
                >
                    {props.exp}
                </Typography>
                <Button
                    variant='text'
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        textTransform: 'capitalize',
                        fontWeight: '500',
                        borderRadius: '12px',
                        boxSizing: 'border-box',
                        color: '#FFFFFF',
                        backgroundColor: '#7B90FF',
                        padding: '0.5rem 1rem',
                        // margin: '1rem',

                        '&:hover': {
                            backgroundColor: '#FFFFFF',
                            color: '#7B90FF',
                        },
                    }}
                >
                    Fix an Appprintment
                </Button>

            </Box >
        </>
    )
}

export default CounsellorsCard
