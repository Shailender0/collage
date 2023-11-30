import React from 'react';
import { Container, Grid, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import image1 from '..//Image/profilePic.jpg'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const Notification = () => {
    const notify = [
        "10 May, 2023 : IIM Admission 2023: Keeping a Check on the Waitlist Movement Trend Might Subdue your Anxiety. Read How? IIM Bangalore Cutoff may range between 99 to 100 percentile for the general category candidates. IIM Bangalore admission 2023 follows a two step process i.e Writing Ability test (WAT) & Personal Interview (PI). However, IIMs do not release the CAT cutoffs in public domain."
    ];
    const Highlights = [
        "IIM Bangalore accepts both sectional & overall cutoff for admission process. IIM Bangalore cutoff 2023 will be 99 to 100 percentile for the general category students. The below table represents the minimum prescribed cutoffs for preparing shortlist of IIM Bangalore:"
    ];
    return (
        <Container   >

            <Box
                sx={{
                    background: "#ffffff",
                    padding: "1rem",
                    fontSize: "0.9rem",
                    color: "#2f1370",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "auto",
                        gap: "1rem",
                        marginBottom: "2rem",
                    }}
                >
                    <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center', fontFamily: "Poppins, sans-serif" }} >

                        <Grid item xs={10} md={8} sx={{ display: 'flex', }}>
                            <Grid item xs={2} md={1} >
                                <img src={image1} alt="Trulli" width="40" height="40" style={{ borderRadius: '50%', }} ></img>
                            </Grid>
                            <Grid item xs={4} md={4} sx={{ alignItems: 'center', color: '#2F1370' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', }}>

                                    <Typography sx={{
                                        color: '#7B90FF', fontSize: '0.9375rem',
                                        fontStyle: 'normal',
                                        fontWeight: 700
                                    }}>Aparna Das</Typography>
                                    <CheckCircleIcon sx={{ color: '#3EBA9F' }} />
                                </Box>
                                <Box>
                                    <Typography sx={{
                                        color: '#210366', fontSize: '0.625rem',
                                        fontStyle: 'normal',
                                        fontWeight: 700,
                                        fontFamily: "Poppins, sans-serif"
                                    }}>Updated on - Apr 25, 2023</Typography>
                                </Box>

                            </Grid>

                        </Grid>
                    </Grid>
                    <Typography sx={{
                        color: '#210366', fontSize: '1.25rem',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontFamily: "Poppins, sans-serif"
                    }}>IIM Bangalore Latest Notification</Typography>
                    <Box sx={{ display: 'flex', gap: 6, }}>
                        {
                            notify.map((Notification, index) => {
                                return <Typography sx={{
                                    display: 'flex', flexDirection: "row",

                                    fontStyle: "normal",
                                    fontSize: '0.875rem',
                                    fontWeight: 400,
                                    fontFamily: "Poppins, sans-serif"
                                }} key={index}>{Notification}</Typography>;
                            })
                        }
                    </Box>

                </Box>
            </Box>


            <Box
                sx={{
                    background: "#ffffff",
                    padding: "1rem",
                    fontSize: "0.9rem",
                    color: "#2f1370",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "auto",
                        gap: "1rem",
                        marginBottom: "2rem",
                    }}
                >

                    <Typography sx={{
                        color: '#210366', fontSize: '1.25rem',
                        fontStyle: 'normal',
                        fontWeight: 600
                    }}>IIM Bangalore Cutoff 2023 Highlights</Typography>
                    <Box sx={{ display: 'flex', gap: 6, }}>
                        {
                            Highlights.map((Highlight, index) => {
                                return <Typography sx={{
                                    display: 'flex', flexDirection: "row",
                                    fontFamily: "Poppins, sans-serif",
                                    fontStyle: "normal",
                                    fontSize: '0.875rem',
                                    fontWeight: 400,

                                }} key={index}>{Highlight}</Typography>;
                            })
                        }
                    </Box>

                </Box>
            </Box>
        </Container>
    );
};
export default Notification;