import React from 'react'
import { Box, Typography, Button } from "@mui/material";

const CardSection = ({ logo, heading, description }) => {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "28px",
                    boxShadow: "0px 0px 40px rgba(123, 144, 255, 0.15)",
                    width: "370px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "1.5rem",
                }}
            >
                <Box
                    sx={{
                        padding: "12px 12px",
                        display: 'flex',
                    }}
                >
                    <Box
                        component="img"
                        src={logo}
                        alt="Logo"
                        sx={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            // boxShadow: '0px 0px 10px #888888',
                            margin : '10px',
                            // padding : '10px',
                        }}
                    />
                    <Typography
                        sx={{
                            fontFamily: "Poppins",
                            fontSize: "1.4rem",
                            fontWeight: 700,
                            lineHeight: "1.5rem",
                            letterSpacing: "0.03em",
                            textAlign: "left",
                            color: "#210366",
                            padding: "0px 0px 0.6rem",
                            

                        }}
                    >
                        {heading ? heading.slice(0,50) : ''}
                    </Typography>
                </Box>

                <Box sx={{ borderTop: "1px solid #7F56DA4D", paddingTop: "1rem" }}></Box>

                <Box sx={{
                    padding: "1.8rem 0.8rem",
                    backgroundColor: "#7B90FF66",
                    borderRadius: "28px",
                    textAlign: "center",
                    overflow: "hidden",
                    // textAlign: "justify",
                }}>
                    <Typography
                        sx={{
                            color: "#210366",
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            fontFamily: "Poppins",
                            lineHeight: "1.5rem",
                            letterSpacing: "0.02em",
                            textOverflow: "ellipsis",
                        }}
                    >
                        {description ? description.slice(0, 100) + '...' : ''}
                    </Typography>
                </Box>

                <Box sx={{ borderTop: "1px solid #7F56DA4D", margin: "1rem 0 0" }}></Box>
                <Button
                    sx={{
                        display: "block",
                        color: "#210366",
                        fontFamily: "Poppins",
                        fontSize: "1rem",
                        fontWeight: 600,
                        lineHeight: "1.5rem",
                        letterSpacing: "0.02em",
                        textAlign: "center",
                        textDecoration: "underline",
                        textTransform: "none",
                        margin: "0 auto",
                    }}
                >
                    Read More
                </Button>
            </Box>
        </>
    )
}

export default CardSection
