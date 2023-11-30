import React from 'react';
import { Container, Box, Typography, Toolbar, Grid, Stack } from '@mui/material';
import PageTitle from "../../components/Headings/PageTitle";
import Image1 from '../Hostel/images/image 63.png'
import ApplySection from './ApplySection';
import HostelFees from './HostelFees';
import HeroSection from './HeroSection';
import HostelDetails from './HostelDetails';
import FAQs from './FAQs';
import HostelReviews from './HostelReviews';

const Hostel = () => {
  return (
    <>
    <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
      <PageTitle title="Top Universities & Colleges  IIM Bangalore" />
      <HeroSection />
      <Grid container>
        <Grid item xs={8}>
          <Toolbar>
              <Stack direction="row" spacing={32}>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    fontWeight: "700",
                    fontStyle : "bold",
                    lineHeight: "3rem",
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#7B90FF"
                  }}
                  >IIM Bangalore Hostel</Typography>
                  <Stack sx={{ fontFamily: "Poppins", fontStyle: "bold", fontWeight: "500", fontSize: "14px", color: "#ff7900" }}>
                    <Typography variant="inherit">Fee</Typography>
                    <Typography variant="inherit" sx={{ fontWeight: "700", fontSize: "20px", marginTop: "-0.6rem" }}>₹80 k - ₹ 3.76 l</Typography>
                  </Stack>
                </Stack>
            </Toolbar>
            <Typography
              sx={{
                width: "630px",
                fontFamily: "Poppins",
                fontSize: "14px",
                fontWeight: "500",
                fontStyle : "bold",
                marginLeft: "24px",
                color: "#210366"
              }}
              variant="body1" 
            >
              IIM Bangalore Hostel is a 5-minute walk from IIM Banglore Institute. IIM Bangalore Hostel consists of 10
              Hostel Blocks, 1 Executive Block and Executive Accommodation at Management Development Center (MDC). All the
              students of the institute are provided with Accommodation on Campus in a Well-appointed Single Room in the Hostels.
              IIM Bangalore Hostel fees is INR 80K for single student and INR 3.76 for family accommodation. IIM Bangalore Hostel Fees 
              may very depending on factors like room accupancy type-single or twin sharing, AC / Non-AC etc.  
            </Typography>
            <Box sx={{
              display: "flex",
              marginTop: "1.5rem",
              marginLeft: "1rem",
              marginBottom: "2rem"
            }}
            >
              <img src={Image1} style={{ width: "630px", height: "400px" }} />
            </Box>

            
            <Box sx={{ backgroundColor: "#EEECFE", marginLeft: "1rem", marginBottom: "2rem", width: "630px", borderRadius: "20px", padding: "20px", boxShadow: "0px 0px 40px 0px #7B90FF26" }}>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  fontStyle : "bold",
                  fontSize: "20px",
                  color: "#7B90FF",
                }}
              >Table Of Content</Typography>
              <Stack
                sx={{ marginTop: "1rem", color: "#210366", fontFamily: "Poppins", fontSize: "14px", fontWeight: "400" }}
              >
                <Typography variant="inherit">1. IIM Bangalore Hostels Fees Structure</Typography>
                <Typography variant="inherit">2. IIM Bangalore Hostels Details</Typography>
                <Typography variant="inherit">3. IIM Bangalore Hostels Salient Features</Typography>
                <Typography variant="inherit">4. IIM Bangalore Hostels FAQs</Typography>
              </Stack>
            </Box>
          
            <HostelFees />
            <HostelDetails />
            <FAQs />
          </Grid>

          <Grid item xs={4}>
            <ApplySection />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Hostel;
