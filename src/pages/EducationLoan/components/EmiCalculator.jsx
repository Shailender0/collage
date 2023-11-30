import React, { useState } from "react";
import { Button, Typography, Grid, Box, Stack } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import Slider from "@mui/material/Slider";
import InputAdornment from "@mui/material/InputAdornment";
import { Payment } from "@mui/icons-material";

const marks = [
  {
    value: 10000,
    label: "10000",
  },
  {
    value: 10,
    label: "10L",
  },
  {
    value: 20,
    label: "20L",
  },
  {
    value: 30,
    label: "30L",
  },
  {
    value: 40,
    label: "40L",
  },
  {
    value: 50,
    label: "50L",
  },
  {
    value: 60,
    label: "60L",
  },
  {
    value: 70,
    label: "70L",
  },
  {
    value: 80,
    label: "80L",
  },
  {
    value: 90,
    label: "90L",
  },
  {
    value: 100,
    label: "1cr",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

const EmiCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [emi, setEmi] = useState(0);

  const calculateEMI = () => {
    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanTenure) * 12;

    if (p && r && n) {
      const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setEmi(emiValue.toFixed(2));
    }
  };

  return (
    <>
      <Box>
        <Typography
          sx={{
            color: "#210366",
            fontSize: 25,
            fontFamily: "Poppins",
            fontWeight: "700",
            wordWrap: "break-word",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            marginTop: 4,
          }}
        >
          CALCULATE YOUR EDUCATION LOAN EMI
        </Typography>
      </Box>
      <Stack
        style={{
          width: "100%",
          boxShadow: "0px 4px 4px 0px rgba(123, 144, 255, 0.15)",
          borderRadius: 28,
          border: "0.50px black solid",
        }}
      >
        <Stack
          display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          marginLeft={"3rem"}
          gap={"4rem"}
        >
          <Typography
            sx={{
              color: "#210366",
              fontSize: 22,
              fontFamily: "Poppins",
              fontWeight: "500",
              wordWrap: "break-word",
              display: "flex",

              marginTop: 4,
            }}
          >
            Fill the Loan Amount
          </Typography>

          <OutlinedInput
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            id="outlined-adornment-rupee"
            endAdornment={<InputAdornment position="end">₹</InputAdornment>}
            aria-describedby="outlined-rupee-helper-text"
            sx={{
              height: 30,

              marginTop: 4,
              borderRadius: 5,
            }}
          />

          <Typography
            style={{
              color: "#210366",
              fontSize: 18,
              fontFamily: "Poppins",
              fontWeight: "550",
              wordWrap: "break-word",
              marginLeft: "19rem",
              marginTop: 20,
            }}
          >
            EMI Payable
          </Typography>
        </Stack>

        <Typography
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            color: "#210366",
            fontSize: 16,
            fontFamily: "Poppins",
            fontWeight: "400",
            wordWrap: "break-word",
            marginRight: 16.5,
          }}
        >
          1,509 per month
        </Typography>
        <Box
          sx={{
            marginTop: 2,
            marginLeft: 6,
          }}
        >
          <Slider
            sx={{ width: "70%" }}
            aria-label="Always visible"
            defaultValue={10000}
            getAriaValueText={valuetext}
            step={10}
            marks={marks}
            valueLabelDisplay="on"
          />
        </Box>
      <Stack 
      
      > 
        <Stack
          display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          marginLeft={"3rem"}
          gap={"4rem"}
        >
          <Typography
            style={{
              color: "#210366",
              fontSize: 22,
              fontFamily: "Poppins",
              fontWeight: "500",
              wordWrap: "break-word",

              marginTop: 20,
            }}
          >
            Fill the Interest Rate
          </Typography>
          <OutlinedInput
            variant="outlined"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            sx={{
              height: 30,

              marginTop: 3,
              borderRadius: 5,
            }}
          />
     

        <Stack
        display={"flex"}
        flexDirection={"column"}
        marginLeft={"20rem"}
        >

          <Typography
            style={{
              color: "#210366",
              fontSize: 18,
              fontFamily: "Poppins",
              fontWeight: "550",
              wordWrap: "break-word",
              marginTop: 2,
            }}
          >
            Total Interest
          </Typography>
        <Typography
          sx={{
           
           
            color: "#210366",
            fontSize: 16,
            fontFamily: "Poppins",
            fontWeight: "400",
            wordWrap: "break-word",
            
          }}
        >
          10,509
        </Typography>
        </Stack>
        </Stack>
        <Box
          sx={{
            marginTop: 2,
            marginLeft: 6,
          }}
        >
          <Slider
            sx={{ width: "70%" }}
            aria-label="Always visible"
            defaultValue={10000}
            getAriaValueText={valuetext}
            step={10}
            marks={marks}
            valueLabelDisplay="on"
          />
        </Box>
        </Stack>

        <Stack
          display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          marginLeft={"3rem"}
          gap={"4rem"}
        >
          <Typography
            style={{
              color: "#210366",
              fontSize: 22,
              fontFamily: "Poppins",
              fontWeight: "500",
              wordWrap: "break-word",
              marginTop: 50,
            }}
          >
            Fill the Loan Tenure
          </Typography>
          <OutlinedInput
            variant="outlined"
            value={loanTenure}
            onChange={(e) => setLoanTenure(e.target.value)}
            sx={{
              borderRadius: 5,
              height: 30,
              marginTop: 7,
            }}
          />
          <Box sx={{ marginLeft: "19rem" }}>
            <Button
              color="primary"
              Icon={<Payment />}
              onClick={calculateEMI}
              sx={{
                color: "#210366",
                fontSize: 17,
                fontFamily: "Poppins",
                fontWeight: "550",
                wordWrap: "break-word",
              }}
            >
              Payable Amount
            </Button>

            {emi > 0 && (
              <Grid item>
                <Typography
                  variant="h6"
                  style={{
                    color: "#210366",
                    fontSize: 16,
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    wordWrap: "break-word",
                    marginLeft: "12rem",
                  }}
                >
                  {emi}
                </Typography>
              </Grid>
            )}
          </Box>
        </Stack>
        <Box
          sx={{
            marginTop: 4,
            marginLeft: 6,
          }}
        >
          <Slider
            aria-label="Always visible"
            defaultValue={10000}
            getAriaValueText={valuetext}
            step={10}
            marks={marks}
            valueLabelDisplay="on"
            sx={{ width: "70%" }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <div
            style={{
              width: 16,
              height: 16,
              background: "#210366",
              borderRadius: 4,
            }}
          />
          <div
            style={{
              color: "#210366",
              fontSize: 18,
              fontFamily: "Poppins",
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            Total Interest
          </div>
          <div
            style={{
              width: 16,
              height: 16,
              background: "#D9D9D9",
              borderRadius: 4,
            }}
          />
          <div
            style={{
              color: "#210366",
              fontSize: 18,
              fontFamily: "Poppins",
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            Principal Loan Amount
          </div>
        </Box>
        <Typography
          style={{
            height: 21,
            color: "#210366",
            fontSize: 20,
            fontFamily: "Poppins",
            fontWeight: "500",

            wordWrap: "break-word",
            textAlign: "center",
          }}
        >
          Not sure about interest and fees rates, use our advanced EMI
          Calculator
        </Typography>
      </Stack>
    </>
  );
};

export default EmiCalculator;

