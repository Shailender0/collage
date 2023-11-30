import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import questions from "../Data/DataPractQues.js";
import PracticeQues from "./PracticeQues.jsx";
import FoundQues from "./FoundQues.jsx";
import OtherHousesRoundedIcon from '@mui/icons-material/OtherHousesRounded';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import image from '../Image/pana.png'
const AllQuesAns = () => {
    return (
        <Container>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box >

                    <OtherHousesRoundedIcon sx={{
                        width: ' 2.18425rem',
                        height: '2.13831rem', color: '#7B90FF'
                    }} />


                </Box>
                <Box>
                    <ArrowForwardIosIcon sx={{ color: '#7B90FF' }} />

                </Box>
                <Box>
                    <Typography sx={{
                        color: '#2F1370', fontSize: '0.9375rem',
                        fontStyle: 'normal',
                        fontWeight: 600
                    }}>
                        Practice Questions
                    </Typography>
                </Box>
            </Box>

            <Grid container spacing={2} sx={{
                paddingTop: "2rem !important",
            }}>

                <Grid item xs={12} md={4} >
                 

                    <FoundQues />

                </Grid>
                <Grid item xs={12} md={8} sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                    padding: "0px ",
                    paddingTop: "2rem !important",
                }}>

<Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            height: "auto",
                            gap: "1rem",
                            marginBottom: "2rem",
                        }}
                    >     
                    <Box sx={{display:'flex', justifyContent:'space-between'}}>

            
                        <Typography variant='h5' sx={{
                        color: "#2F1370",
                        fontWeight: "600",
                        fontSize: "2.25rem",
                        paddingTop: '0.5rem',
                        fontFamily: "Poppins, sans-serif",
justifyContent:'flex-start'

                    }} > List of Practice Questions  </Typography>
        <img src={image} alt='image.png' width='50' height='50' style={{justifyContent:'flex-end'}}/>
        </Box>
                        {questions.map((answer, index) => {
                            return  <PracticeQues key={index} {...answer} />;
                           
                        })}
                    </Box>

                </Grid>
            </Grid>
        </Container>
    );
};

export default AllQuesAns;