import { Box, Button, Stack, Typography } from "@mui/material";
import clglogo from "../../Assets/vit_logo.png";


export const ClgRankTable = () => {

    return (
        <>
            <Box sx={{ backgroundColor: "#F3EEFF", margin: "0 2rem", borderRadius: "20px" }}>
                <Stack direction={"column"} >
                    <Stack direction={"row"} sx={{ alignItems: "center", padding: ".7rem", height: "2rem", paddingTop: "1.5rem", paddingBottom: "1.5rem" }}>
                        <Button variant="text" sx={{
                            background: "#D8DEFF", fontSize: "1rem", fontWeight: 700, color: "#210366", lineHeight: "1.5rem",
                            letterSpacing: "0.03em", borderRadius: ".5rem", padding: ".2rem 1rem", marginLeft: "5rem"
                        }}>College</Button>
                        <Button variant="text" sx={{
                            background: "#D8DEFF", fontSize: "1rem", fontWeight: 700, color: "#210366", lineHeight: "1.5rem",
                            letterSpacing: "0.03em", borderRadius: ".5rem", padding: ".2rem 1rem", marginLeft: "26rem"
                        }}>Ranking</Button>
                        <Button variant="text" sx={{
                            background: "#D8DEFF", fontSize: "1rem", fontWeight: 700, color: "#210366", lineHeight: "1.5rem",
                            letterSpacing: "0.03em", borderRadius: ".5rem", padding: ".2rem 1rem", marginLeft: "14rem"
                        }}>stream</Button>

                    </Stack>
                    <Stack spacing={1} direction={"row"} sx={{ alignItems: "center", boxShadow: '0px 0px 1px #D8DEFF' }} >
                        <Box
                            component="img"
                            src={clglogo}
                            alt="Logo"
                            sx={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                margin: '10px',
                                marginLeft: "2rem"
                            }}
                        />
                        <Box sx={{ width: "35rem" }}>
                            <Typography sx={{
                                fontFamily: "Poppins",
                                fontSize: "1rem",
                                fontWeight: 700,
                                lineHeight: "1.5rem",
                                letterSpacing: "0.03em",
                                color: "#210366",
                                alignItems: "center"
                            }}>
                                Miranda House, New Delhi
                            </Typography>
                        </Box>
                        <Box sx={{ width: "20rem" }}>
                            <Typography sx={{
                                fontFamily: "Poppins",
                                fontSize: "1rem",
                                fontWeight: 700,
                                lineHeight: "1.5rem",
                                letterSpacing: "0.03em",
                                color: "#210366",
                                alignItems: "center"


                            }}>
                                1 out of 200
                            </Typography>
                        </Box>
                        <Box sx={{ width: "10rem", textAlign: "center" }}>
                            <Typography sx={{
                                fontFamily: "Poppins",
                                fontSize: "1rem",
                                fontWeight: 700,
                                lineHeight: "1.5rem",
                                letterSpacing: "0.03em",
                                color: "#210366",
                                alignItems: "center"


                            }}>
                                overall
                            </Typography>
                        </Box>

                    </Stack>
                    <Stack spacing={1} direction={"row"} sx={{ alignItems: "center", boxShadow: '0px 0px 1px #D8DEFF' }} >
                        <Box
                            component="img"
                            src={clglogo}
                            alt="Logo"
                            sx={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                // boxShadow: '0px 0px 10px #888888',
                                margin: '10px',
                                // padding : '10px',
                                marginLeft: "2rem"
                            }}
                        />
                        <Box sx={{ width: "35rem" }}>
                            <Typography sx={{
                                fontFamily: "Poppins",
                                fontSize: "1rem",
                                fontWeight: 700,
                                lineHeight: "1.5rem",
                                letterSpacing: "0.03em",
                                // textAlign: "left",
                                // color: "#210366",
                                color: "#210366",
                                // padding: "0px 0px 0.6rem",
                                alignItems: "center"


                            }}>
                                Miranda House, New Delhi
                            </Typography>
                        </Box>
                        <Box sx={{ width: "20rem" }}>
                            <Typography sx={{
                                fontFamily: "Poppins",
                                fontSize: "1rem",
                                fontWeight: 700,
                                lineHeight: "1.5rem",
                                letterSpacing: "0.03em",
                                // textAlign: "left",
                                // color: "#210366",
                                color: "#210366",
                                // padding: "0px 0px 0.6rem",
                                alignItems: "center"



                            }}>
                                1 out of 200
                            </Typography>
                        </Box>
                        <Box sx={{ width: "10rem", textAlign: "center" }}>
                            <Typography sx={{
                                fontFamily: "Poppins",
                                fontSize: "1rem",
                                fontWeight: 700,
                                lineHeight: "1.5rem",
                                letterSpacing: "0.03em",
                                // textAlign: "left",
                                // color: "#210366",
                                color: "#210366",
                                // padding: "0px 0px 0.6rem",
                                alignItems: "center"


                            }}>
                                overall
                            </Typography>
                        </Box>

                    </Stack>
                    <Stack spacing={1} direction={"row"} sx={{ alignItems: "center", boxShadow: '0px 0px 1px #D8DEFF' }} >
                        <Box
                            component="img"
                            src={clglogo}
                            alt="Logo"
                            sx={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                // boxShadow: '0px 0px 10px #888888',
                                margin: '10px',
                                // padding : '10px',
                                marginLeft: "2rem"
                            }}
                        />
                        <Box sx={{ width: "35rem" }}>
                            <Typography sx={{
                                fontFamily: "Poppins",
                                fontSize: "1rem",
                                fontWeight: 700,
                                lineHeight: "1.5rem",
                                letterSpacing: "0.03em",
                                // textAlign: "left",
                                // color: "#210366",
                                color: "#210366",
                                // padding: "0px 0px 0.6rem",
                                alignItems: "center"


                            }}>
                                Miranda House, New Delhi
                            </Typography>
                        </Box>
                        <Box sx={{ width: "20rem" }}>
                            <Typography sx={{
                                fontFamily: "Poppins",
                                fontSize: "1rem",
                                fontWeight: 700,
                                lineHeight: "1.5rem",
                                letterSpacing: "0.03em",
                                // textAlign: "left",
                                // color: "#210366",
                                color: "#210366",
                                // padding: "0px 0px 0.6rem",
                                alignItems: "center"


                            }}>
                                1 out of 200
                            </Typography>
                        </Box>
                        <Box sx={{ width: "10rem", textAlign: "center" }}>
                            <Typography sx={{
                                fontFamily: "Poppins",
                                fontSize: "1rem",
                                fontWeight: 700,
                                lineHeight: "1.5rem",
                                letterSpacing: "0.03em",
                                // textAlign: "left",
                                // color: "#210366",
                                color: "#210366",
                                // padding: "0px 0px 0.6rem",
                                alignItems: "center"


                            }}>
                                overall
                            </Typography>
                        </Box>

                    </Stack>
                    <Stack spacing={1} direction={"row"} sx={{ alignItems: "center", boxShadow: '0px 0px 1px #D8DEFF' }} >
                        <Box
                            component="img"
                            src={clglogo}
                            alt="Logo"
                            sx={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                // boxShadow: '0px 0px 10px #888888',
                                margin: '10px',
                                // padding : '10px',
                                marginLeft: "2rem"
                            }}
                        />
                        <Box sx={{ width: "35rem" }}>
                            <Typography sx={{
                                fontFamily: "Poppins",
                                fontSize: "1rem",
                                fontWeight: 700,
                                lineHeight: "1.5rem",
                                letterSpacing: "0.03em",
                                // textAlign: "left",
                                // color: "#210366",
                                color: "#210366",
                                // padding: "0px 0px 0.6rem",
                                alignItems: "center"


                            }}>
                                Miranda House, New Delhi
                            </Typography>
                        </Box>
                        <Box sx={{ width: "20rem" }}>
                            <Typography sx={{
                                fontFamily: "Poppins",
                                fontSize: "1rem",
                                fontWeight: 700,
                                lineHeight: "1.5rem",
                                letterSpacing: "0.03em",
                                // textAlign: "left",
                                // color: "#210366",
                                color: "#210366",
                                // padding: "0px 0px 0.6rem",
                                alignItems: "center"


                            }}>
                                1 out of 200
                            </Typography>
                        </Box>
                        <Box sx={{ width: "10rem", textAlign: "center" }}>
                            <Typography sx={{
                                fontFamily: "Poppins",
                                fontSize: "1rem",
                                fontWeight: 700,
                                lineHeight: "1.5rem",
                                letterSpacing: "0.03em",
                                // textAlign: "left",
                                // color: "#210366",
                                color: "#210366",
                                // padding: "0px 0px 0.6rem",
                                alignItems: "center"


                            }}>
                                overall
                            </Typography>
                        </Box>

                    </Stack>
                    <Stack spacing={1} direction={"row"} sx={{ alignItems: "center", boxShadow: '0px 0px 1px #D8DEFF' }} >
                        <Box
                            component="img"
                            src={clglogo}
                            alt="Logo"
                            sx={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                // boxShadow: '0px 0px 10px #888888',
                                margin: '10px',
                                // padding : '10px',
                                marginLeft: "2rem"
                            }}
                        />
                        <Box sx={{ width: "35rem" }}>
                            <Typography sx={{
                                fontFamily: "Poppins",
                                fontSize: "1rem",
                                fontWeight: 700,
                                lineHeight: "1.5rem",
                                letterSpacing: "0.03em",
                                // textAlign: "left",
                                // color: "#210366",
                                color: "#210366",
                                // padding: "0px 0px 0.6rem",
                                alignItems: "center"


                            }}>
                                Miranda House, New Delhi
                            </Typography>
                        </Box>
                        <Box sx={{ width: "20rem" }}>
                            <Typography sx={{
                                fontFamily: "Poppins",
                                fontSize: "1rem",
                                fontWeight: 700,
                                lineHeight: "1.5rem",
                                letterSpacing: "0.03em",
                                // textAlign: "left",
                                // color: "#210366",
                                color: "#210366",
                                // padding: "0px 0px 0.6rem",
                                alignItems: "center"


                            }}>
                                1 out of 200
                            </Typography>
                        </Box>
                        <Box sx={{ width: "10rem", textAlign: "center" }}>
                            <Typography sx={{
                                fontFamily: "Poppins",
                                fontSize: "1rem",
                                fontWeight: 700,
                                lineHeight: "1.5rem",
                                letterSpacing: "0.03em",
                                // textAlign: "left",
                                // color: "#210366",
                                color: "#210366",
                                // padding: "0px 0px 0.6rem",
                                alignItems: "center"


                            }}>
                                overall
                            </Typography>
                        </Box>

                    </Stack>

                </Stack>
            </Box>

        </>
    );
}