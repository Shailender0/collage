import React from "react";
import { Box, Typography, Card, Button } from "@mui/material";

const Scheme = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            width: 615,
            textAlign: "center",
            display: "flex",
            marginLeft: 6,
            marginTop:"3rem"
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
            Interest{" "}
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
            Subsidy Schemes{" "}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", marginTop: 4 }}>
          <Card
            sx={{
              width: 448,
              // height: 180,
              background: "white",
              boxShadow: "0px 0px 40px rgba(123, 144, 255, 0.15)",
              borderRadius: 4,
            }}
          >
            <Typography
              sx={{
                color: "#FF7900",
                fontSize: 26,
                fontFamily: "Poppins",
                fontWeight: "500",
                wordWrap: "break-word",
                textAlign: "center",
              }}
            >
              SBI Skill Loan Scheme
            </Typography>
            <Typography
              sx={{
                color: "#210366",
                fontSize: 22,
                fontFamily: "Poppins",
                fontWeight: "500",
                wordWrap: "break-word",
                marginLeft: 2,
                marginTop: 4,
              }}
            >
              The bank offers Skill Loan Scheme for students who aspire to gain
              knowledge and specialized training in one specific field.
            </Typography>
          </Card>

          <Card
            sx={{
              width: 548,
              // height: 180,
              background: "white",
              boxShadow: "0px 0px 40px rgba(123, 144, 255, 0.15)",
              borderRadius: 4,
              marginLeft: 12,
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: "#FF7900",
                fontSize: 26,
                fontFamily: "Poppins",
                fontWeight: "500",
                wordWrap: "break-word",
                textAlign: "center",
              }}
            >
              CSIS (Central Scheme to provide Interest Subsidy)
            </Typography>
            <Typography
              sx={{
                color: "#210366",
                fontSize: 22,
                fontFamily: "Poppins",
                fontWeight: "500",
                wordWrap: "break-word",
                marginLeft: 2,
                marginTop: 4,
              }}
            >
              Central Government of India offered the scheme for economically
              weaker section for subsidy on education loan interest.
            </Typography>
          </Card>
        </Box>
        <Box sx={{display:"flex",justifyContent:"center",marginTop:1}}>
        <Button sx={{color: '#FF7900',fontSize: 16, fontFamily: 'Poppins', fontWeight: '500',}}>Show More</Button>
        </Box>
      </Box>
    </>
  );
};

export default Scheme;
