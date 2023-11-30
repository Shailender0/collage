import { Button } from '@mui/material'
import React from 'react'

const ExploreAllCoursesBtn = ({ exploreAllCourseLink }) => {
    return (
        <>
            <Button
                sx={{
                    display: "block",
                    color: "#41355D",
                    fontFamily: "Poppins",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    fontStyle: "bold",
                    lineHeight: "1.2rem",
                    letterSpacing: "0.02em",
                    textAlign: "center",
                    textDecoration: "underline",
                    textTransform: "none",
                    margin: "auto auto",
                }}
                href={exploreAllCourseLink}
            >
                Explore all courses
            </Button>
        </>
    )
}

export default ExploreAllCoursesBtn
