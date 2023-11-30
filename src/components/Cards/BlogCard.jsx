import React from 'react'
import { Box, Button, Typography } from '@mui/material'
const BlogCard = ({ image, date, title, description, readMoreLink }) => {
    return (
        <>
            <Box sx={{
                // backgroundColor: "white",
                // backgroundColor: "#F3EEFF",
                borderRadius: "28px",
                // height: "350px",
                height: "340px",
                width: "350px",
                display: "flex",
                flexDirection: "column",
                // justifyContent: "space-evenly",
                margin: "1rem 0",
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
            >
                {/* <Box
                    component="img"
                    src={image}
                    alt="Banner Image"
                    sx={{
                        borderRadius: '20px',
                    
                    }}
                >
                </Box>
                 */}
                {/* 
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: 600, fontSize: '14px' }}>May 9, 2023</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Button variant="contained" sx={{ textTransform: 'none' }}>Read more</Button>
                        </Box>
                    </Box> 
                */}

                <Box

                    sx={{
                        position: "relative",
                        height: "175px",
                        width: "100%",
                        backgroundImage: `url(${image})`,
                        // background : `url(${image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        // backgroundSize: "350px 175px",
                        backgroundPosition: "center",
                        borderRadius: "28px",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        // margin: "1rem 0",
                    }}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: "0",
                            left: "0",
                            right: "0",
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "0.5rem",
                            backgroundColor: "rgba(255, 255, 255, 0.8)",
                            borderRadius: "0 0 28px 28px",
                        }}
                    >
                        <Typography variant="caption">march 23434</Typography>
                        <Button variant="contained" color="primary">Like</Button>
                    </Box>
                </Box>
                <Box >


                    <Typography
                        sx={{
                            fontFamily: "Poppins",
                            fontSize: "1rem",
                            fontWeight: 600,
                            lineHeight: "1.4rem",
                            letterSpacing: "0.03em",
                            textAlign: "center",
                            color: "#210366",
                            padding: "0.8rem 0.8rem",
                            // margin: '0.8rem',
                        }}
                    >
                        {title}

                    </Typography>

                    <Typography
                        sx={{
                            color: "#210366",
                            fontSize: "0.7rem",
                            fontWeight: 600,
                            fontFamily: "Poppins",
                            lineHeight: "1.3rem",
                            textAlign: "center",
                            padding: "0rem 0.8rem",
                            // letterSpacing: "0.03em",

                        }}
                    >
                        {description ? description.slice(0, 135) + '...' : ''}

                    </Typography>




                    <Box sx={{ borderTop: "1px solid #7F56DA4D", margin: "0.5rem 1.8rem 0.2rem", }}></Box>

                    <Button
                        sx={{
                            display: "block",
                            color: "#210366",
                            fontFamily: "Poppins",
                            fontSize: "0.8rem",
                            fontWeight: 600,
                            lineHeight: "1rem",
                            textAlign: "center",
                            textDecoration: "underline",
                            textTransform: "none",
                            margin: "0 auto",
                        }}
                    >
                        Read More
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default BlogCard
