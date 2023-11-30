import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Button} from "@mui/material";

const EduLoan = () => {

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <>
      <Box>
        <Typography
          sx={{
            width: "100%",
            height: "100%",
            color: "#210366",
            fontSize: 25,
            fontFamily: "Poppins",
            fontWeight: "700",
            wordWrap: "break-word",
            marginTop: 10,
            textAlign:"center",
          }}
        >
          EDUCATION LOAN: EVERYTHING TO KNOW ABOUT
        </Typography>

        < Stack  
        display={"flex"}
        flexDirection={"row"}
        
        justifyContent={"center"}
        alignItems={"center"}
        >
        <Typography
          style={{
            width: "70%",
            height: "100%",
            color: "#210366",
            fontSize: 18,
            fontFamily: "Poppins",
            fontWeight: "500",
            wordWrap: "break-word",
            marginTop: 6,

          }}
        >
          Education Loan is a facility that extends monetary assistance to
          students aspiring to study either in India or Abroad but are held back
          due to financial constraints. Various banks (Government, Private or
          Co-operative) and NBFCs offer general and specialised education loans
          to meet all your needs.
          <br />
          While Education in India and Abroad is getting expensive, it gets hard
          for aspirants to pursue their higher education in reputed institutes.
          Hence, here our banks come into the frame and extend variants of
          education loan along with Government driven subsidy schemes to promote
          academic excellence in each sector of the society.
        <Box>
           {showMore && (
             <>
            Curabitur vel fermentum justo. Nunc auctor nec enim vel tristique. Vestibulum ultrices quam nec justo luctus, sed pulvinar lorem congue.
          </>
        )}
      
      <Button onClick={toggleShowMore} style={{
              color: "#FF7900",
              fontSize: 15,
              fontFamily: "Poppins",
              fontWeight: "600",
              textDecoration: "underline",
              wordWrap: "break-word",
            }}>
        {showMore ? 'Read Less' : 'Read More'}
      </Button>
          </Box>
              </Typography>
        
        <Card
          style={{
            width: 160,
            height: 180,
            background: "linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)",
            boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.15)",
            borderRadius: 28,
            display:"flex",
            marginTop:8,
            marginLeft:24
          }}
        >
             <img
                  style={{  width:160,
                    height: 180 }}
                  src="https://img.freepik.com/free-photo/businesswoman-with-smartphone-outdoors_23-2148002508.jpg?w=2000 "
                  alt=""
                />
        </Card>
        </Stack> 
      </Box>
    </>
  );
};

export default EduLoan;
