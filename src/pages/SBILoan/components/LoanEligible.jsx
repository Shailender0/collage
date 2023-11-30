import {  Stack, Typography } from "@mui/material";
import React from "react";

const LoanEligible = () => {
  return (
    <>
      <Stack>
        <Stack
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        gap={"4rem"}
          sx={{
           width:"100%",
            height: "100%",
            // alignItems: "center", 
            marginLeft: "2rem",
            marginTop: 10,
          }}
        >
          <img
            style={{ width: 200, height: 250 }}
            src="https://static-00.iconduck.com/assets.00/web-developer-illustration-2005x2048-fal2biag.png "
            alt=""
          />
          <Stack sx={{
             textAlign: "center",
              marginBottom: 8, 
              }}>
            <Typography
              sx={{
                color: "#210366",
                fontSize: 32,
                fontFamily: "Poppins",
                fontWeight: "600",
                wordWrap: "break-word",
                display:"flex",
                textAlign:"center",
                justifyContent:"center"
              }}
            >
              SBI Education
            <Typography
              sx={{
                color: "#FF7900",
                fontSize: 32,
                fontFamily: "Poppins",
                fontWeight: "600",
                wordWrap: "break-word",
                marginLeft: 1,
              }}
            >
              Loan Eligibility
            </Typography>
            </Typography>
          <Typography sx={{color: "#210366",
                fontSize: 15,
                fontFamily: "Poppins",
                fontWeight: "400",
                wordWrap: "break-word",
                marginTop:3}}>
                    {'\u25CF'} Indian National. Student must be a citizen of India or a holder of Indian passport.
                    <br/>
                    {'\u25CF'} 10+2 qualified. One must have cleared 10+2 from a recognized board of institutions
                    <br/>
                    {'\u25CF'} Premier Universities. Admission must be in the top global institutes through Entrance test/Selection process.
                    <br/>
                    {'\u25CF'} Co-Signer. Applicant must have a credit worthy co-signer/ co-borrower to increase chances of getting a loan.

          </Typography>
          </Stack>

        </Stack>
      </Stack>
    </>
  );
};

export default LoanEligible;
