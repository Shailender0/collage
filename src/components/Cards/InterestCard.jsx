import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import CourseNameBtn from '../Buttons/CourseNameBtn'
import ExploreAllCoursesBtn from '../Buttons/ExploreAllCoursesBtn'

const InterestCard = ({ logo, heading, btn, exploreAllCourseLink }) => {
    return (
        <>
            <Box sx={{
                // backgroundColor: "#F3EEFF",
                backgroundColor: "white",
                borderRadius: "28px",
                height: "auto",
                width: "350px",
                display: "flex",
                flexDirection: "column",
                // justifyContent: "space-evenly",
                padding: "0.8rem",
                margin: "1rem 0",
                // boxShadow: '0px 0px 2px #888888',
                // boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            }}
            >
                <Box sx={{
                    padding: "0.6rem",
                    display: 'flex',
                }}
                >
                    <Box
                        component="img"
                        src={logo}
                        alt="Logo"
                        sx={{
                            width: '50px',
                            height: '50px',
                        }}
                    />
                    <Box 
                        sx = {{
                            display: "flex",
                            alignItems : "center",
                        }}
                        >


                        <Typography
                            sx={{
                                fontFamily: "Poppins",
                                fontSize: "1.3rem",
                                fontWeight: 700,
                                lineHeight: "1.6rem",
                                textAlign: "left",
                                color: "#41355D",
                                marginLeft : '0.6rem'
                                // letterSpacing: "0.03em",
                                // padding: "0px 0px 0.6rem",

                            }}
                        >
                            {heading}

                        </Typography>
                    </Box>
                </Box>

                {/* <Box > */}
                    <Stack
                        direction="row"
                        // justifyContent="space-evenly"
                        alignItems="center"
                        spacing={3}
                        padding={'0.6rem'}
                    >

                        {btn.map((btn, index) => (
                            <CourseNameBtn key={index} courseName={btn.courseName} link={btn.link}  />
                        ))}

                    </Stack>
                {/* </Box> */}

                <Box sx={{ borderTop: "1px solid #7B90FF1A",  margin: "0.5rem 2rem 0" ,}}></Box>

                <ExploreAllCoursesBtn exploreAllCourseLink= {exploreAllCourseLink} />
            </Box>
        </>
    )
}

export default InterestCard
