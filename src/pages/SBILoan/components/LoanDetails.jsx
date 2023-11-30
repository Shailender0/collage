import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const LoanDetails = () => {
  return (
    <>
      <Box>
        <Box sx={{display:"flex", textAlign: "centre",marginLeft:"2rem",marginTop:"2rem"}}>
          <Typography sx={{color: '#210366', fontSize: 32, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>
            SBI{" "}
          </Typography>
          <Typography sx={{color: '#FF7900', fontSize: 32, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word',marginLeft:2}}>
            {" "}
             Education Loan{" "}
          </Typography>
          <Typography sx={{color: '#210366', fontSize: 32, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word',marginLeft:1}}>
            Details
          </Typography>
      </Box>
        </Box>
        

        <Stack  display={"flex"} flexDirection={"row"}>
            <Typography sx={{ color: '#210366', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word',marginLeft:6,marginTop:3}}>Loan Limit </Typography>
            <Typography sx={{ color: 'rgba(21.57, 0, 72.46, 0.60)', fontSize: 18, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word',marginLeft:16,marginTop:2}}>For India- INR 10 Lacs <br/>For Abroad- 20 Lacs</Typography>
        </Stack>
        <Stack display={"flex"} flexDirection={"row"}>
            <Typography sx={{ color: '#210366', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word',marginLeft:6,marginTop:5}}>Margin </Typography>
            <Typography sx={{ color: 'rgba(21.57, 0, 72.46, 0.60)', fontSize: 18, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word',marginLeft:20,marginTop:2}}>For loan above INR 4 Lacs,<br/>In India: 5%<br/>In abroad: 15%</Typography>
        </Stack>
        <Stack display={"flex"} flexDirection={"row"}>
            <Typography sx={{ color: '#210366', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word',marginLeft:6,marginTop:3}}>Processing Fee </Typography>
            <Typography sx={{ color: 'rgba(21.57, 0, 72.46, 0.60)', fontSize: 18, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word',marginLeft:12,marginTop:2}}>Up to INR 4 Lacs: NilAbove<br/> INR 4 Lacs: INR 5000</Typography>
        </Stack>
        <Stack display={"flex"} flexDirection={"row"}>
            <Typography sx={{ color: '#210366', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word',marginLeft:6,marginTop:3}}>Loan Security </Typography>
            <Typography sx={{ color: 'rgba(21.57, 0, 72.46, 0.60)', fontSize: 18, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word',marginLeft:13,marginTop:2}}>Upto 7.50 Lacs: Only Parent/ Guardian as co-borrower. No Collateral Security or third party guarantee<br/>Above INR 7.50 Lacs: Tangible security along with parents as co borrower</Typography>
        </Stack>
        <Stack display={"flex"} flexDirection={"row"} >
            <Typography sx={{ color: '#210366', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word',marginLeft:6,marginTop:2}}>Loan Repayment </Typography>
            <Typography sx={{ color: 'rgba(21.57, 0, 72.46, 0.60)', fontSize: 18, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word',marginLeft:10,marginTop:2}}>Starts After 1 year of course completion or 6 months after getting job</Typography>
        </Stack>
    </>
  );
};

export default LoanDetails;
