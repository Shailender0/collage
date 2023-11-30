import { Typography, MenuItem, Select, InputLabel, FormControl, Divider, } from "@mui/material";
import Box from '@mui/material/Box';
import { Container } from "@mui/system";

function FacultyReview() {
    return (
        <>
              <Container      sx={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      padding: "0px ",
      paddingTop: "2rem !important",}}>
                <Box sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontStyle: "normal",
                    background: "#ffffff",
                    boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
                    borderRadius: "1rem",
                    padding: "1rem",
                    fontSize: "0.9rem",

                    color: "#2f1370",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                }}>
                    <Typography variant='h5' sx={{
                        color: "#000080",
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                        paddingTop: "1rem",
                        flexGrow: "1",
                        fontFamily: "Poppins, sans-serif"
                    }} >IIM Bangalore Faculty Reviews</Typography>
                    <Box sx={{
                        display: "flex",
                    }}>
                        <Box >
                            <Typography sx={{
                                color: "#000080",
                                fontWeight: "bold",
                                fontSize: "1rem",
                                paddingTop: "1rem",
                                fontFamily: "Poppins, sans-serif"
                            }}>
                                Filter By
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            alignItems: "start",
                            height: "auto",
                            flexWrap: "wrap",
                            fontFamily: "Poppins",
                            gap: "1rem"
                        }}>
                            <Box sx={{
                                paddingLeft: "1rem"

                            }}>
                                <FormControl sx={{ m: 1, minWidth: 120 }} >
                                    <InputLabel>Stream</InputLabel>
                                    <Select
                                        sx={{
                                            width: "8rem",
                                            border: " 0.1rem solid #4683B7",
                                            borderRadius: "12px",
                                            height: "3rem",
                                            fontFamily: "Poppins",

                                        }}
                                    >
                                        <MenuItem value={1}>ECE</MenuItem>
                                        <MenuItem value={2}>CS</MenuItem>
                                        <MenuItem value={3}>ME</MenuItem>
                                        <MenuItem value={4}>EE</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>

                            <Box sx={{
                                paddingLeft: "1rem",

                            }}>
                                <FormControl sx={{ m: 1, minWidth: 120 }} >
                                    <InputLabel>Course Tag</InputLabel>
                                    <Select
                                        sx={{
                                            width: "8rem",
                                            border: " 0.1rem solid #4683B7",
                                            borderRadius: "12px",
                                            height: "3rem",
                                            fontFamily: "Poppins",
                                        }}
                                    >
                                        <MenuItem value={1}>ECE</MenuItem>
                                        <MenuItem value={2}>CS</MenuItem>
                                        <MenuItem value={3}>ME</MenuItem>
                                        <MenuItem value={4}>EE</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>

                            <Box sx={{
                                paddingLeft: "1rem",

                            }}>
                                <FormControl sx={{ m: 1, minWidth: 120 }} >
                                    <InputLabel>Course</InputLabel>
                                    <Select
                                        sx={{
                                            width: "8rem",
                                            border: " 0.1rem solid #4683B7",
                                            borderRadius: "12px",
                                            height: "3rem",
                                            fontFamily: "Poppins",
                                        }}
                                    >
                                        <MenuItem value={1}>ECE</MenuItem>
                                        <MenuItem value={2}>CS</MenuItem>
                                        <MenuItem value={3}>ME</MenuItem>
                                        <MenuItem value={4}>EE</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>

                            <Box sx={{
                                paddingLeft: "1rem",
                                flexGrow: "1"
                            }}>
                                <FormControl sx={{ m: 1, minWidth: 200 }} >
                                    <InputLabel sx={{ margin: "0.1rem 1.5rem" }}>Batch</InputLabel>
                                    <Select
                                        sx={{
                                            width: "8rem",
                                            border: " 0.1rem solid #4683B7",
                                            borderRadius: "12px",
                                            height: "3rem",
                                            fontFamily: "Poppins",
                                        }}
                                    >
                                        <MenuItem value={1}>ECE</MenuItem>
                                        <MenuItem value={2}>CS</MenuItem>
                                        <MenuItem value={3}>ME</MenuItem>
                                        <MenuItem value={4}>EE</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{
                        paddingTop: "1rem",
                        cursor: "pointer"
                    }}>
                        <Divider color="Black" />
                    </Box>
</Box>
            </Container>


        </>
    )
}
export default FacultyReview;