import React from "react";
import { useState, useEffect } from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";


const HeroSection = () => {

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const [images, setImages] = useState([
    "Main.png",
    "Main2.png",
    "Main3.png",
    "Main4.png",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);
  return (
    <>
    
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop:"2rem",
          
          alignItems:"center"
          
        }}
      >
        <Box
          sx={{
            borderRadius: "2rem",
            width: "100%",
            height:"100%",
            // height: "500px",
            backgroundImage: `url("https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=847&q=80")`,
            backdropFilter: "blur(100px)",
            display: "flex",
            flexWrap:"wrap",
            flexDirection:"column",
            justifyContent: "center",
            alignItems: "center",
            padding: "3rem",
          }}
        >
          <Box
          sx={{
            display:'flex',
            flexDirection:"row",
            justifyContent:"center",
            alignItems:'center'
          }}
          >

          
          <Typography
            sx={{
              width: "80%",
              // height: 135,
              color: "white",
              fontSize: 40,
              fontFamily: "Poppins",
              fontWeight: "700",
              wordWrap: "break-word",
              // marginBottom: 20,
            }}
          >
            Education Loans in India <br />
            and Abroad
            <Typography
              sx={{
                width: "80%",
                // height: 143,
                color: "white",
                fontSize: 25,
                fontFamily: "Poppins",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Education Loans are designed to extend financial assistance to
              students aspiring to pursue their higher studies in reputed
              colleges in India or Abroad.

            </Typography>
              <Button
            variant="conatined"
            sx={{
              background: "#FF7900",
              fontFamily: "Poppins",
              fontweight: "500",
              padding: "0.2rem 1rem 0.2rem 1rem",
              color: "white",
              textTransform: "capitalize",
              borderRadius: "0.5rem 0.5rem 0.5rem 0.5rem",
              marginBottom:16  
            }} >
            Apply
          </Button>
          </Typography>          

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Card
              style={{
                width: 195,
                height: 252,
                background: "white",
                boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.15)",
                borderRadius: 28,
                marginBottom: 50,
              }}
            >
                 <img
                  style={{ width: 60, 
                 marginLeft:65,
                 marginTop:30
                  }}
                  src={require("./../Asset/Home/cal1.png")} 
                  alt=""
                />
              <Typography
                style={{
                  color: "#210366",
                  fontSize: 20,
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  textTransform: "capitalize",
                  wordWrap: "break-word",
                  textAlign: "center",
                  marginTop:18
                }}
              >
                Calculate EMI's
              </Typography>
              <div
                style={{
                  textAlign: "center",
                  color: "#210366",
                  fontSize: 14,
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  marginTop:6
                }}
              >
                Wondering how many
                <br />
                installments will you have to pay
                <br /> for the repayment of your <br />
                education loan? Check Now!
              </div>
            </Card>
            <Card
              style={{
                width: 195,
                height: 252,
                background: "white",
                boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.15)",
                borderRadius: 28,
                marginLeft: 8,
                marginBottom: 50,
              }}
            >
              <img
                  style={{ width: 60, 
                 marginLeft:65,
                 marginTop:30
                  }}
                  src={require("./../Asset/Home/Group.png")} 
                  alt=""
                />
                <Typography
                style={{
                  color: "#210366",
                  fontSize: 20,
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  textTransform: "capitalize",
                  wordWrap: "break-word",
                  textAlign: "center",
                  marginTop:18
                }}
              >
                Compare Loans
              </Typography>
              <div
                style={{
                  textAlign: "center",
                  color: "#210366",
                  fontSize: 14,
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  marginTop:6
                }}
              >
                Why settle for less? Compare <br/>which bank offers the most<br/>suitable education loan for you.
              </div>
            </Card>
          </Box>
          </Box>
          <Box
            sx={{
              width: "80%",
        
              backgroundColor: "white",
              
              display: "flex",
              flexDirection: "row",
              
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "0.8rem",
              
              marginBottom: "-10.5rem",
              padding: "0.8rem",
              boxShadow: 3,
            }}
          >
            <Grid container spacing={8}>
              <Grid item>
                <img
                  style={{ width: 100, height: 34 }}
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/5/58/State_Bank_of_India_logo.svg/1280px-State_Bank_of_India_logo.svg.png "
                  alt=""
                />
              </Grid>
              <Grid item>
                <img
                  style={{ width: 84, height: 34 }}
                  src="https://companieslogo.com/img/orig/PNB.NS_BIG-6ba17682.png?t=1611211975"
                  alt=""
                />
              </Grid>
              <Grid item>
                <img
                  style={{ width: 84, height: 34 }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/2560px-HDFC_Bank_Logo.svg.png"
                  alt=""
                />
              </Grid>
              <Grid item>
                <img
                  style={{ width: 84, height: 34 }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Axis_Bank_logo.svg/800px-Axis_Bank_logo.svg.png"
                  alt=""
                />
              </Grid>
              <Grid item>
                <img
                  style={{ width: 84, height: 34 }}
                  src="https://zeevector.com/wp-content/uploads/Canara-Bank-New-Logo-PNG-VECTOR.png"
                  alt=""
                />
              </Grid>
              <Grid item>
                <img
                  style={{ width: 84, height: 34 }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/2560px-ICICI_Bank_Logo.svg.png"
                  alt=""
                />
              </Grid>
              <Grid item>
                <img
                  style={{ width: 84, height: 34 }}
                  src="https://logos-download.com/wp-content/uploads/2016/06/Kotak_Mahindra_Bank_logo.png"
                  alt=""
                />
              </Grid>
              <Grid item>
                <img
                  style={{ width: 84, height: 34 }}
                  src="https://1000logos.net/wp-content/uploads/2021/05/IDBI-Bank-logo.png"
                  alt=""
                />
              </Grid>
              <Grid item>
                <img
                  style={{ width: 84, height: 34 }}
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/BankOfBarodaLogo.svg/1200px-BankOfBarodaLogo.svg.png"
                  alt=""
                />
              </Grid>
              <Grid item>
                <img
                  style={{ width: 84, height: 34 }}
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Indian_Bank_logo.svg/1200px-Indian_Bank_logo.svg.png"
                  alt=""
                />
              </Grid>
              <Grid item>
                <img
                  style={{ width: 84, height: 34 }}
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Allahabad_Bank_Logo.svg/1200px-Allahabad_Bank_Logo.svg.png"
                  alt=""
                />
              </Grid>
              <Grid item>
                <img
                  style={{ width: 84, height: 34 }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Union_Bank_of_India_Logo.svg/2560px-Union_Bank_of_India_Logo.svg.png"
                  alt=""
                />
              </Grid>


              <Box sx={{display:"flex",
              marginLeft:2,}}>
             {showMore && (
          <>
          <Grid container spacing={2}>


             <Grid item>
                <img
                  style={{ width: 84, height: 34 }}
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/BankOfBarodaLogo.svg/1200px-BankOfBarodaLogo.svg.png"
                  alt=""
                />
              </Grid>
              <Grid item>
                <img
                  style={{ width: 84, height: 34 }}
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Indian_Bank_logo.svg/1200px-Indian_Bank_logo.svg.png"
                  alt=""
                  />
              </Grid>
                    </Grid>
          </>
                    )}
               {/* <Button onClick={toggleShowMore} style={{
                  color: "#FF7900",
                  fontSize: 18,
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  wordWrap: "break-word",
                  
                }}>
        {showMore ? 'Show Less' : 'Show More'}
      </Button> */}
              </Box>
            </Grid>
            </Box>
            </Box>
            </Box>
            </>
  );
};

export default HeroSection;
