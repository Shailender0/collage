import React from 'react';
import { Container, Box, Typography, Grid, Button, Checkbox, FormControlLabel } from '@mui/material';

const CourseSelect = () => {
    const CourseSelects = [
        "Degree",
        "Streams",
        "Program Type",
        "Entrance/Exam accepted",
        "Course Level",


    ];
    const Courses = [
        "PGPM",
        "PGPEM",
        "EPGP",
        "PGP-PPM",
        "Certification",
        "Ph.D"
    ]
    return (
        <Container    sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            padding: "0px ",
            paddingTop: "2rem !important",}}>
            <Box
                sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontStyle: "normal",
                    background: "#ffffff",
                    boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
                    borderRadius: "1rem",
                    padding: "1rem",
                    fontSize: "0.9rem",

                    color: "#2f1370",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",

                }}
            >

                <Box sx={{
                    margin: "1rem 1rem 1rem 1rem",
                    padding: "1rem 1rem 1rem 3rem",
                }}>
                    <Grid container spacing={4} sx={{ paddingTop: "1rem" }}>
                        <Grid item xs={6} md={12}>
                            <input
                                style={{

                                    paddingLeft: "0.8rem",
                                    borderRadius: "0.5rem 0.5rem 0.5rem 0.5rem",
                                    border: "none",
                                    margin: "0 0 0.5rem 0.5rem",
                                    height: "40px",
                                    width: "700px",
                                    alignItems: "start",

                                    flexWrap: "wrap",
                                    gap: "1rem"
                                }}
                                type="text"
                                placeholder="search for colleges, exams,  courses and more..."

                            />

                            <Button
                                variant="contained"
                                sx={{
                                    fontFamily: "Poppins",
                                    fontweight: "500",
                                    backgroundColor: "#FC6A03",
                                    padding: "0.2rem 1rem 0.2rem 1rem",
                                    color: "white",
                                    textTransform: "capitalize",
                                    borderRadius: "0.5rem 0.5rem 0.5rem 0.5rem",
                                    height: "40px",
                                    width: "200px",
                                }}
                            >
                                Search Course
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container spacing={4} sx={{ paddingTop: "1rem", display: 'flex' }}>
                        <Grid item xs={6} md={12} sx={{
                            display: "flex",
                            alignItems: "start",
                            height: "auto",
                            flexWrap: "wrap",
                            gap: "1rem"
                        }}>

                            {

                                CourseSelects.map((CourseSelects, index) => {
                                    return <Typography key={index} sx={{
                                        color: "#000080",
                                        fontWeight: "bold",
                                        fontSize: "1rem",
                                        fontFamily: "Poppins",

                                    }}
                                    >{CourseSelects}</Typography>;
                                })
                            }
                            </Grid>
                            <Grid item xs={6} md={12} >
                            {
                                Courses.map((Course, index) => {
                                    return <FormControlLabel  control={<Checkbox />} key={index}
                                        label={Course} />
                                })

                            }
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            <Box></Box>
        </Container>
    );
};



export default CourseSelect;