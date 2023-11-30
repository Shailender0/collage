import {
    Box,
    Container,
    Typography,
  } from "@mui/material";
  import {CampusImages , eventImages} from "./Data/Data";
import RoundImages from "./RoundImages";

function IIMBangaloreImages(){
    return(
        <Box
        sx={{
          borderRadius: "28px",
          height: "891px",
          width: "995px",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          display: "flex",
          flexDirection: "column",
          margin: "1rem 0",
        }}
      >
        <Container>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "20px",
              fontWeight: "700",
              lineHeight: "44px",
              color: "#210366",
              margin:"0.8rem",
            }}
          >
            IIM bangalore Images
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: "700",
              lineHeight: "36px",
              color: "#210366",
              letterSpacing: "0em",
              margin:"0.8rem",
            }}
          >
            Campus Images
          </Typography>
         {CampusImages.map((value)=>{
           return (
            <RoundImages key={value.id} pic={value.img} picname={"Campus Images"}/>
        );
      })  } 
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: "700",
              lineHeight: "36px",
              color: "#210366",
              letterSpacing: "0em",
              gap:"0.8rem",
            }}
          >
            Events Images
          </Typography>

          {eventImages.map((value)=>{
            return (
              <RoundImages key={value.id} pic={value.img} picname={"Event Images"}/>
              );
            })  } 
        </Container>
      </Box>
    );
}

export default IIMBangaloreImages;