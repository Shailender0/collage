import React from "react";
import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
  return (
    <>
      <Box sx={{display:"flex"}}>
        <Box>
        <Accordion
          sx={{
            width: "100%",
            borderRadius: 3,
            marginTop: 2,
            border: "0.50px rgba(0, 0, 0, 0.20) solid",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  background: "#7B90FF",
                  color: "#FFFFFF",
                  borderRadius: 6,
                }}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{
                color: "#210366",
                fontSize: 20,
                fontFamily: "Inter",
                fontWeight: "700",
              }}
            >
              What is Margin Money
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{
                color: "#210366",
                fontSize: 18,
                fontFamily: "Inter",
                fontWeight: "600",
              }}>
              Ans. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            width: "100%",
            borderRadius: 3,
            marginTop: 2,
            border: "0.50px rgba(0, 0, 0, 0.20) solid",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  background: "#7B90FF",
                  color: "#FFFFFF",
                  borderRadius: 6,
                }}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              sx={{
                color: "#210366",
                fontSize: 20,
                fontFamily: "Inter",
                fontWeight: "700",
              }}
            >
              What are the documents Required while applying for the loan?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{
                color: "#210366",
                fontSize: 18,
                fontFamily: "Inter",
                fontWeight: "600",
              }} >
              Ans. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            width: "100%",
            borderRadius: 3,
            marginTop: 2,
            border: "0.50px rgba(0, 0, 0, 0.20) solid",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  background: "#7B90FF",
                  color: "#FFFFFF",
                  borderRadius: 6,
                }}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              sx={{
                color: "#210366",
                fontSize: 20,
                fontFamily: "Inter",
                fontWeight: "700",
              }}
            >
              What is holiday Period?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{
                color: "#210366",
                fontSize: 18,
                fontFamily: "Inter",
                fontWeight: "600",
              }}>
              Ans. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            width: "100%",
            borderRadius: 3,
            marginTop: 2,
            border: "0.50px rgba(0, 0, 0, 0.20) solid",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  background: "#7B90FF",
                  color: "#FFFFFF",
                  borderRadius: 6,
                }}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              sx={{
                color: "#210366",
                fontSize: 20,
                fontFamily: "Inter",
                fontWeight: "700",
              }}
            >
              What is Moratorium Period?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{
                color: "#210366",
                fontSize: 18,
                fontFamily: "Inter",
                fontWeight: "600",
              }}>
              Ans. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            width: "100%",
            borderRadius: 3,
            marginTop: 2,
            border: "0.50px rgba(0, 0, 0, 0.20) solid",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  background: "#7B90FF",
                  color: "#FFFFFF",
                  borderRadius: 6,
                }}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              sx={{
                color: "#210366",
                fontSize: 20,
                fontFamily: "Inter",
                fontWeight: "700",
              }}
            >
              I want SBI Education loan for Studying in IIM? For which loan I
              should apply?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography     sx={{
                color: "#210366",
                fontSize: 18,
                fontFamily: "Inter",
                fontWeight: "600",
              }}>
              Ans. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        </Box>
        <Box sx={{marginLeft:4}}>
            
        <img
            style={{ width: "80%", height: "70%", }}
            src=" https://www.upwork.com/catalog-images/7ae395fad38743f5aaf5843ece14aa57 "
            alt=""
          />
          </Box>
      </Box>
    </>
  );
};

export default Faq;
