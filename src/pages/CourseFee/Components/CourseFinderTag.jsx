import React from 'react';
import FilterButton from '../../../components/Buttons/FilterButton';
import { Container, TextField, Typography } from "@mui/material";
import Box from '@mui/material/Box';
const FinderTag = () => {
    const FinderTags = [
        "Digital Mraketing",
        "Fashion Designing",
        "Interior Design",
        "Paramedical",
        "Nursing",
        "Graphic Design",
        "Data Science",
        "Computer",
        "Hotel Management",
        "BE/B.Tech",
        "BA",
        "B.Sc",
        "M.Com",
        "B.Ed",
        "B.Com",
        "M.Sc",
        "MA",
        "BBA",
        " Doctrate"
    ];
    return (
        <Container sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "0px ",
            paddingTop: "2rem !important",
        }}>
            <Box sx={{
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
                gap: "2rem",
            }}>
                <Typography variant='h5' sx={{
                    color: "#000080",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    paddingTop: '2rem',
                    textTransform: "capitalize",
                    fontFamily: "Poppins, sans-serif"

                }} > Course Finder - Search From 20K + Courses</Typography>

                <TextField id="outlined-size-normal" sx={{

                    padding: "1rem 1rem 0 0",
                    borderRadius: "0.5rem 0.5rem 0.5rem 0.5rem",
                    border: "none",
                    TextTransform: "capitalize",
                    margin: "0 0 0.5rem 0.5rem",
                    paddingTop: "1rem",
                    display: "flex",
                }} placeholder="search Degree, stream or program" />
                <Box sx={{
                    display: "flex",
                    alignItems: "start",
                    height: "auto",
                    width: "auto",
                    flexWrap: "wrap",
                    gap: "1rem",
                    paddingTop: "1rem",
                    TextTransform: "capitalize",
                    borderRadius: "0.5rem 0.5rem 0.5rem 0.5rem",
                    fontFamily: "Poppins",
                }} >

                    {

                        FinderTags.map((Tags, index) => {
                            return <FilterButton key={index}>{Tags}</FilterButton>;
                        })

                    }

                </Box>
            </Box>
        </Container>
    );
};
export default FinderTag;