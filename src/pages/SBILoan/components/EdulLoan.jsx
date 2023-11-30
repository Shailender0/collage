import { Box,  Stack,  Typography } from "@mui/material";
import React from "react";

const EdulLoan = () => {
  return (
    <>
        <Box >
          <Typography
            sx={{
              color: "#210366",
              fontSize: 30,
              fontFamily: "Poppins",
              fontWeight: "600",
              wordWrap: "break-word",
              display:"flex"
            }}
          >
            SBI Education Loan
          <Typography
            sx={{
              color: "#FF7900",
              fontSize: 30,
              fontFamily: "Poppins",
              fontWeight: "600",
              wordWrap: "break-word",
              marginLeft: 0.8,
            }}
          >
            Rate of Interest
          </Typography>
          </Typography>
        </Box>
      
        <Stack
       
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        marginTop={"4rem"}
        gap={"2rem"}
        width={"100%"}
        >
          <Stack
            sx={{
            width:"40%",
              
              color: "#210366",
              fontSize: 18,
              fontFamily: "Poppins",
              fontWeight: "600",
              wordWrap: "break-word",
              
            }}
          >
            SBI offers distinctive education loan variants for studies in India
            and Abroad.
            <Typography
              sx={{
              
                color: "#210366",
                fontSize: 15,
                fontFamily: "Poppins",
                fontWeight: "400",
                wordWrap: "break-word",
                marginTop:"2rem"
              }}
            >
             {'\u25CF'} Maximum loan amount offered is INR 10 and 20 Lacs for India and
              abroad respectively.
              <br />
              {'\u25CF'}  The loan is extended with no margin on loan amount upto INR 4 Lacs
              <br />
              {'\u25CF'}  The repayment period for a SBI Student Loan Scheme is 15 years
            </Typography>
          </Stack>

          <Stack
            sx={{
              width:"50%", 
              background: "#E8E8E8",
              borderRadius: 6,
              textAlign: "start",
              
          
            }}
          >
            <Typography
              sx={{
                color: "#210366",
                fontSize: 15,
                fontFamily: "Poppins",
                fontWeight: "400",
                wordWrap: "break-word",
                marginLeft: 2,
                marginTop: 2,
              }}
            >
              The interest rate is charged on base rate fixed by SBI as per RBI
              guidelines.
            </Typography>
            <br />
            <Typography
              sx={{
                color: "#210366",
                marginLeft: 4,
                fontSize: 14,
                 marginBottom:2
              }}
            >
            {'\u25CF'}  Base rate fixed by SBI is 9.05%.
              <br />
              {'\u25CF'}  The bank charges 10.55% interest for loan amount upto INR 7.50.
              lacs
              <br />
              {'\u25CF'}  10.80% for the loan amounting above INR 7.50 Lacs.
            </Typography>
          </Stack>
        </Stack>
     
    </>
  );
};

export default EdulLoan;
