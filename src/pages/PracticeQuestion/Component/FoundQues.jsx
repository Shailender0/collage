import { Box, Button, Checkbox, Container, FormControlLabel, FormGroup, InputAdornment, TextField, Typography } from "@mui/material";
import { useState } from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import SearchIcon from '@mui/icons-material/Search';

const FoundQues = () => {
    const FindExams = [
        "Manipur",
        "Manipur Board",
        "MET",
        "MGIMS Wardha",
        "MH CET",
        "MHT CET",
        "MP PMT"
    ];
    const FindSubjects = [
        "Biology",
        "Chemistry",
        "Mathematics",
        "Physics",
];

    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
   

    return (
      

        <Box     sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            padding: "0px ",
            paddingTop: "2rem !important",}}>
            <Box  sx={{
                            fontFamily: "Poppins, sans-serif",
                            fontStyle: "normal",
                            background: "#ffffff",
                            boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
                            borderRadius: "1rem",
                            padding: "1rem",
                            fontSize: "0.9rem",
width:'auto',
                            color: "#2f1370",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.5rem",
                        }} >
                        <Container>
            <Box sx={{display:'flex', alignItems:'center' ,justifyContent:'space-between'}}
                    >
   <Typography variant='h5' sx={{
                        color: "#000080",
                        fontWeight: "bold",
                        fontSize: "1rem",
                        paddingTop: '0.5rem',
                        fontFamily: "Poppins, sans-serif",


                    }} >Found 6715 Questions</Typography>
                    <Typography  sx={{
                        color: "#000080",
                        fontWeight: "bold",
                        fontSize: "1rem",
                        paddingTop: '0.5rem',
                        fontFamily: "Poppins, sans-serif",
                    }}>
                    Set default
                    </Typography>
                    </Box>
                    <Box >
                <Button variant="contained" sx={{
                    borderRadius: '0.75rem',
                    background: '#7B90FF', width: 'auto',
                    //  justifyContent: 'flex-start',
                    //  justifyContent:"space-around"
                }} >
                <Typography>
                Class
                </Typography>
          

                    <Box sx={{ 
                       paddingLeft: '10.5rem'
                        // justifyContent:"flex-end"
                         }}>
                        <ExpandLessIcon />
                    </Box>



                </Button>
            </Box>
            <Box sx={{
                paddingTop: '1rem', alignItems: 'center',
            }}>
                <TextField



                    value={searchTerm}
                    onChange={handleChange}
                    sx={{
                        width: 'auto', borderRadius: ' 0.9375rem',
                    }}

                    label="search"

                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />

            </Box>
            <Box>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Class 12th" sx={{ paddingLeft: '1rem', color: '#210366' }} />

                </FormGroup>
            </Box>

            <Box >

                <Button variant="contained" sx={{
                    borderRadius: '0.75rem',
                    background: '#7B90FF', width: 'auto', justifyContent: 'flex-start'
                }}>Exams

                    <Box sx={{  paddingLeft: '10.5rem' }}>
                        <ExpandLessIcon />
                    </Box>



                </Button>
            </Box>
            <Box sx={{
                paddingTop: '1rem', alignItems: 'center',
            }}>
                <TextField



                    value={searchTerm}
                    onChange={handleChange}
                    sx={{
                        width: 'auto', borderRadius: ' 0.9375rem',
                    }}

                    label="Find Exams "

                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />

            </Box>
            <Box>
                <FormGroup>
                   
                    {
                        FindExams.map((FindExam, index) => {
                                    return <FormControlLabel  control={<Checkbox />} key={index}
                                        label={FindExam} sx={{ paddingLeft: '1rem', color: '#210366' }} />
                                })

                            }
                </FormGroup>
            </Box>

            <Box >



    <Button variant="contained" sx={{
                    borderRadius: '0.75rem',
                    background: '#7B90FF', width: 'auto', justifyContent: 'flex-start'
                }}>Subjects

                    <Box sx={{  paddingLeft: '8.7rem' }}>
                        <ExpandLessIcon />
                    </Box>

</Button>
</Box>
<Box sx={{
paddingTop: '1rem', alignItems: 'center',
}}>
<TextField



    value={searchTerm}
    onChange={handleChange}
    sx={{
        width: 'auto', borderRadius: ' 0.9375rem',
    }}

    label="Find Subjects "

    InputProps={{
        endAdornment: (
            <InputAdornment position="end">
                <SearchIcon />
            </InputAdornment>
        ),
    }}
/>

</Box>
<Box>
<FormGroup>
   
    {
        FindSubjects.map((Subjects, index) => {
                    return <FormControlLabel  control={<Checkbox />} key={index}
                        label={Subjects} sx={{ paddingLeft: '1rem', color: '#210366' }} />
                })

            }
</FormGroup>
</Box>
</Container>
</Box>
        </Box>

    )
}
export default FoundQues;
