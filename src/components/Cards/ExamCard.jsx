import { Box, Button, Typography } from "@mui/material";
import React from "react";

const ExamCard = ({
    examName,
    examDescription,
    registrationPage,
    readMore,
}) => {
    return (
        <>
            <Box
                sx={{
                    // backgroundColor: "#F3EEFF",
                    borderRadius: "12px",
                    width: "22rem",
                    height: "15rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    // padding: "1.5rem",
                    margin: "1rem auto",
                    textAlign: "center",
                    boxShadow : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    
                }}
            >
                <Box
                    sx={{
                        padding: "1rem 1.8rem",
                        height : "5.5rem",
                        backgroundColor: "#7B90FF33",
                        borderRadius: "12px",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems : "center",
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "Poppins",
                            fontSize: "1.1rem",
                            fontWeight: 700,
                            color: "#210366",
                        }}
                    >
                        {examName}
                    </Typography>
                </Box>

                <Box
                    sx={{
                        padding: "0.5rem 1rem",
                        overflow: "hidden",
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "Poppins",
                            fontSize: "0.7rem",
                            fontWeight: 600,
                            lineHeight: "1.3rem",
                            letterSpacing: "0.03em",
                            textAlign: "center",
                            color: "#210366",
                        }}
                    >
                        {examDescription ? examDescription.slice(0, 140) + "..." : ""}
                    </Typography>
                </Box>

                <Button
                    variant="text"
                    sx={{
                        color: "#FFFFFF",
                        backgroundColor: "#7B90FF",
                        fontFamily: "Poppins",
                        fontWeight: 600,
                        fontSize: "0.8rem",
                        letterSpacing: "0.02em",
                        borderRadius: "12px",
                        margin: "0rem auto",
                        "&:hover": {
                            backgroundColor: "#fff",
                            color: "#3c52b2",
                        },
                    }}
                >
                    {registrationPage}
                </Button>

                <Button
                    sx={{
                        display: "block",
                        color: "#210366",
                        fontFamily: "Poppins",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        lineHeight: "1.5rem",
                        letterSpacing: "0.02em",
                        textAlign: "center",
                        textDecoration: "underline",
                        textTransform: "none",
                        margin: "0 auto",
                    }}
                    href={readMore}
                >
                    Read Me
                </Button>
            </Box>
        </>
    );
};

export default ExamCard;
