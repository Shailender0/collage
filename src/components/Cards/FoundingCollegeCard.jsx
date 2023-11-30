import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Link, Avatar, Button, Stack } from '@mui/material';

export default function FoundingCollege(props) {
  return (
    <>
    <Box
    sx={{
        display: "flex",
        backgroundColor: "white",
        marginY: "0.5rem",
        marginX: "5rem", 
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.15);',
        borderRadius: '12px',
    }}>
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "1080px"
            
        }}>
            <Box sx={{
                fontFamily: "Poppins",
                fontSize: "1rem",
                fontWeight: "700",
                marginLeft: "1rem"
            }}>
                {props.id}

            </Box>
            <Box sx={{
                borderRadius: "50%",
                margin: "1rem",
                borderColor: "#7B90FF",
                borderStyle: "solid",
                borderWidth: "1.5px"

            }}>
            <Avatar sx={{
                width: "120px",
                height: "120px",
                padding: "0.8rem"
            }} 
            src={props.img}
            />
            </Box>
            <Box sx={{
                display: "flex",
                width: '350px',
                flexDirection: "column",
                justifyContent: "center",
            }}>
                <Typography sx={{
                    textAlign: "left",
                    // margin: "0.5rem 1rem 0rem 1rem",
                    fontSize: "1rem",
                    fontFamily: "Poppins",
                    fontWeight: "700",
                    color: "#210366"
                }}>
                    {props.heading}
                </Typography>
                <Typography sx={{
                    textAlign: "left",
                    // margin: "0.5rem 1rem 0rem 1rem",
                    fontSize: "0.6rem",
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    color: "#210366"
                }}>
                    {props.subheading}
                </Typography>
                <Box sx={{
                display: "flex",
                flexDirection: "row", 
                }}>
                <Button variant = "text" sx={{
                    backgroundColor: "#F6F6F6",
                    color: "#210366",
                    textTransform: "capitalize",
                    fontSize: "0.6rem",
                    fontFamily: "Poppins",
                    fontWeight: "700",
                    borderRadius: "0.5rem"

                }}>
                    {props.btn1}
                </Button>
                <Button variant = "text" sx={{
                    backgroundColor: "#F6F6F6",
                    color: "#210366",
                    textTransform: "capitalize",
                    fontSize: "0.6rem",
                    fontFamily: "Poppins",
                    fontWeight: "700",
                    marginLeft: "0.5rem",
                    borderRadius: "0.5rem"

                }}>
                    {props.btn2}
                </Button>
                <Button variant = "contained" sx={{
                    backgroundColor: "#7B90FF",
                    color: "white",
                    textTransform: "capitalize",
                    fontSize: "0.6rem",
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    marginLeft: "0.5rem",
                    borderRadius: "0.5rem"

                }}>
                    {props.btn3}
                </Button>

                </Box>
                <Box sx={{
                display: "flex",
                flexDirection: "row", 
                marginY: "0.3rem",
                justifyContent: "center"
                }}>
                
                <Typography sx={{
                    fontSize: "0.6rem",
                    fontFamily: "Poppins",
                    fontWeight: "700",
                    color: "#210366"
                }}>
                    {props.body1}
                </Typography>
                <Typography sx={{
                    fontSize: "0.6rem",
                    fontFamily: "Poppins",
                    fontWeight: "600",
                    color: "#210366",
                    marginLeft: "0.5rem"
                }}>
                    {props.body2}
                </Typography>

                </Box>

            </Box>
            <Box sx={{
                marginBottom: "4rem",
                marginX: "4rem",
                display: "flex",

            }}>
            <Avatar src={props.rating} sx={{
                borderRadius: "0",
                width: "133px",
                height: "19px"
            }} />  
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginRight: "2rem",
                alignItems: "flex-end"
            }}>
            <Button variant = "contained" sx={{
                    backgroundColor: "#FF7900",
                    color: "white",
                    textTransform: "capitalize",
                    fontSize: "0.8rem",
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    marginLeft: "0.5rem",
                    borderRadius: "0.5rem",
                    paddingX: "2rem",
                    width: "155px",
                    '&:hover':{
                        backgroundColor:'#0086ff',
                        color:'black'
                    } 

                }}>
                    {props.brochure}
                </Button>
                <Button variant = "contained" sx={{
                    backgroundColor: "#FF7900",
                    color: "white",
                    textTransform: "capitalize",
                    fontSize: "0.8rem",
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    marginLeft: "0.5rem",
                    marginTop: "0.6rem",
                    borderRadius: "0.5rem",
                    paddingX: "2rem",
                    width: "155px",
                    '&:hover':{
                        backgroundColor:'#0086ff',
                        color:'black'
                    } 

                }}>
                    {props.enquire}
                </Button>
            </Box>
        </Box>
    </Box>
    </>
  )
}