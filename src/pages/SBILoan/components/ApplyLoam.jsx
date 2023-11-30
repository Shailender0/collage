import { Box, Typography, Button, Card, Stack } from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import DifferenceOutlinedIcon from "@mui/icons-material/DifferenceOutlined";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import React from "react";

const ApplyLoam = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            width:"100%",
            textAlign: "center",
            display: "flex",
            marginLeft: 6,
            marginTop:"4rem"
          }}
        >
          <Typography
            sx={{
              color: "#210366",
              fontSize: 32,
              fontFamily: "Poppins",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            How to apply for{" "}
          </Typography>
          <Typography
            sx={{
              color: "#FF7900",
              fontSize: 32,
              fontFamily: "Poppins",
              fontWeight: "500",
              wordWrap: "break-word",
              marginLeft: 2,
            }}
          >
            {" "}
            SBI Education Loan{" "}
          </Typography>
          <Typography
            sx={{
              color: "#210366",
              fontSize: 32,
              fontFamily: "Poppins",
              fontWeight: "500",
              wordWrap: "break-word",
              marginLeft: 1,
            }}
          >
            ?
          </Typography>
        </Box>

        <Stack
         display={"flex"}
         flexDirection={"column"}
         flexWrap={"wrap"}
         justifyContent={"center"}
         alignItems={"center"}
          sx={{
            color: "rgba(21.57, 0, 72.46, 0.60)",
            fontSize: 20,
            fontFamily: "Poppins",
            fontWeight: "500",
            wordWrap: "break-word",
            textAlign: "center",  
            marginTop:"2rem",
          }}
        >
          SBI Education loan application form can be available online or offline
          at Bank branches.
        <Stack 
        display={"flex"}
        flexDirection={"row"}
        margin={"2rem"}
        >
          <Button
            variant="contained"
            sx={{ borderTopLeftRadius: 16, borderBottomLeftRadius: 16 }}
          >
            Online
          </Button>
          <Button
            variant="outlined"
            sx={{ borderTopRightRadius: 16, borderBottomRightRadius: 16 }}
          >
            Offline
          </Button>
        </Stack>
        </Stack>

        <Stack
             width={"100%"}
             display={"flex"}
             flexDirection={"row"}
             flexWrap={"wrap"}
             marginTop={"2rem"}
             marginLeft={"2rem"}
             gap={"2rem"}
       >
        
          <Card
            sx={{
              width: "27%",
              // height: 106,
              display: "flex",
              textAlign: "center",
              position: "relative",
              background: "white",
              boxShadow: "0px 0px 40px rgba(123, 145, 255, 0.15)",
              borderRadius: 4,
             
            }}
          >
            <LocationOnOutlinedIcon
              sx={{ width: "25%", height: 70, color: "#FF7900", marginTop: 2 }}
            />
            <Typography
              sx={{
                color: "rgba(21.57, 0, 72.46, 0.60)",
                fontSize: 18,
                fontFamily: "Poppins",
                fontWeight: "500",
                lineHeight: 1.5,
                wordWrap: "break-word",
                marginTop: 2,
              }}
            >
              {" "}
              Visit the official website and Click on SBI Education Loan
            </Typography>
          </Card>

          <Card
            sx={{
              width: "27%",
              // height: 106,
              display: "flex",
              textAlign: "center",
              position: "relative",
              background: "white",
              boxShadow: "0px 0px 40px rgba(123, 145, 255, 0.15)",
              borderRadius: 4,
              
            }}
          >
            <DifferenceOutlinedIcon
              sx={{ width: "25%", height: 70, color: "#FF7900", marginTop: 2 }}
            />
            <Typography
              sx={{
                color: "rgba(21.57, 0, 72.46, 0.60)",
                fontSize: 18,
                fontFamily: "Poppins",
                fontWeight: "500",
                lineHeight: 1.5,
                wordWrap: "break-word",
                marginTop: 2,
              }}
            >
              {" "}
              Select the particular loan scheme and click on Apply Online
            </Typography>
          </Card>

          <Card
            sx={{
              width: "27%",
              // height: 106,
              display: "flex",
              textAlign: "center",
              position: "relative",
              background: "white",
              boxShadow: "0px 0px 40px rgba(123, 145, 255, 0.15)",
              borderRadius: 4,
            
            }}
          >
            <SaveAsOutlinedIcon
              sx={{ width: "25%", height: 70, color: "#FF7900", marginTop: 2 }}
            />
            <Typography
              sx={{
                color: "rgba(21.57, 0, 72.46, 0.60)",
                fontSize: 18,
                fontFamily: "Poppins",
                fontWeight: "500",
                lineHeight: 1.5,
                wordWrap: "break-word",
                marginTop: 2,
              }}
            >
              {" "}
              Fill up the form with all the necessary details
            </Typography>
          </Card>
        </Stack>

        <Stack
        width={"100%"}
              display={"flex"}
              flexDirection={"row"}
              flexWrap={"wrap"}
              marginLeft={"2rem"}
              gap={"2rem"}
       
        >
          <Card
            sx={{
              width: "27%",
              // height: 106,
              display: "flex",
              textAlign: "center",
              position: "relative",
              background: "white",
              boxShadow: "0px 0px 40px rgba(123, 145, 255, 0.15)",
              borderRadius: 4,
              
            }}
          >
            <FileUploadOutlinedIcon
              sx={{ width: "25%", height: 70, color: "#FF7900", marginTop: 2 }}
            />
            <Typography
              sx={{
                color: "rgba(21.57, 0, 72.46, 0.60)",
                fontSize: 18,
                fontFamily: "Poppins",
                fontWeight: "500",
                lineHeight: 1.5,
                wordWrap: "break-word",
                marginTop: 2,
              }}
            >
              {" "}
              Upload the signature, photograph other documents required
            </Typography>
          </Card>

          <Card
            sx={{
              width: "27%",
              // height: 106,
              display: "flex",
              textAlign: "center",
              position: "relative",
              background: "white",
              boxShadow: "0px 0px 40px rgba(123, 145, 255, 0.15)",
              borderRadius: 4,
              
            }}
          >
            <ThumbUpAltOutlinedIcon
              sx={{ width: "25%", height: 70, color: "#FF7900", marginTop: 2 }}
            />
            <Typography
              sx={{
                color: "rgba(21.57, 0, 72.46, 0.60)",
                fontSize: 18,
                fontFamily: "Poppins",
                fontWeight: "500",
                lineHeight: 1.5,
                wordWrap: "break-word",
                marginTop: 2,
              }}
            >
              {" "}
              Submit the Form and take the print out
            </Typography>
          </Card>

          <Card
            sx={{
              width: "27%",
              // height: 106,
              display: "flex",
              textAlign: "center",
              position: "relative",
              background: "white",
              boxShadow: "0px 0px 40px rgba(123, 145, 255, 0.15)",
              borderRadius: 4,
              
            }}
          >
            <AccountBalanceOutlinedIcon
              sx={{ width: "25%", height: 70, color: "#FF7900", marginTop: 2 }}
            />
            <Typography
              sx={{
                color: "rgba(21.57, 0, 72.46, 0.60)",
                fontSize: 16,
                fontFamily: "Poppins",
                fontWeight: "500",
                lineHeight: 1,
                wordWrap: "break-word",
                marginTop: 1,
              }}
            >
              {" "}
              Upload the signature, photograph other documents requiredAfter that visit the nearby SBI Bank for the further proceedings
            </Typography>
          </Card>
        </Stack>
      </Box>
    </>
  );
};

export default ApplyLoam;
