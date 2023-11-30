import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

export const TopSection = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            backgroundColor: "#160048",
            margin: "3rem 0",
            borderRadius: "10px",
            textAlign: 'center',
            // marginBottom: "3rem",
            padding: "1rem",
          }}>

          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontSize: '1rem',
              fontWeight: 900,
              lineHeight: '1rem',
              letterSpacing: '.05em',
              textAlign: 'center',
              color: 'white',
              display: 'inline',
            }}>
            Keep Your Chance For the Admission
          </Typography>

          <Button
            variant="contained"
            size="small"
            color="warning"
            sx={{
              marginLeft: "1rem",
              textAlign: "center",
              padding: "0.2rem 1rem"
            }}>
            Start Now
          </Button>

        </Box>
      </Container>
    </>
  );
};