import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import CourseNameBtn from '../Buttons/CourseNameBtn'
import ExploreAllCoursesBtn from '../Buttons/ExploreAllCoursesBtn'


const LevelCard = ({ imagePath, levelHeading, exploreAllCourseLink, btn }) => {
    return (
        <>
            <Box sx={{
                backgroundColor: "white",
                // backgroundColor: "#F3EEFF",
                borderRadius: "28px",
                // height: "350px",
                minHeight: "340px",
                width: "350px",
                display: "flex",
                flexDirection: "column",
                // justifyContent: "space-evenly",
                // padding: "0.8rem",
                margin: "1rem 0",
                // boxShadow: '0px 0px 2px #888888',
                // boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            }}
            >

                <Box
                    component="img"
                    src={imagePath}
                    alt="Banner Image"
                    sx={{
                        // width: '50px',
                        // height: '50px',
                        borderRadius: '20px',
                        // boxShadow: '0px 0px 10px #888888',
                        // margin: '0.8rem ',
                        // padding : '10px',
                    }}
                />
                <Stack direction="row" alignItems="center" justifyContent="center"  >
                    <Typography
                        sx={{
                            fontFamily: "Poppins",
                            fontSize: "1.3rem",
                            fontWeight: 700,
                            lineHeight: "1.6rem",
                            textAlign: "left",
                            color: "#41355D",
                            margin: '1rem'
                            // letterSpacing: "0.03em",
                            // padding: "0px 0px 0.6rem",

                        }}
                    >
                        {levelHeading}

                    </Typography>


                </Stack>


                <Stack spacing={1} useFlexGap direction='row' sx={{
                    // display: 'flex',
                    flexWrap: 'wrap',
                    // alignItems: 'left',
                    // justifyContent: 'center',
                    // padding : '1rem 0'

                }}>

                    {btn.map((btn, index) => (
                        <CourseNameBtn key={index} courseName={btn.courseName} link={btn.link} />
                    ))}
                </Stack>
                <Box sx={{ borderTop: "1px solid #7B90FF1A", margin: "0.5rem 2rem 0", }}></Box>
                <ExploreAllCoursesBtn exploreAllCourseLink={exploreAllCourseLink} />
            </Box>
        </>
    )
}

export default LevelCard
