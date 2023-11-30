
import React from "react";
import { Box, Typography, Card, CardContent, CardHeader, Button, Divider } from '@mui/material';
import "@fontsource/poppins";
import myImage2 from './images/myImage2.png';
import myLogo1 from './images/myLogo1.png';
import myLogo2 from './images/myLogo2.png';
import myLogo3 from './images/myLogo3.png';
import cardimg from './images/cardimg.png';

const parts = [
    {
        image: myLogo1,
        heading: 'Lovely Professional University',
        Description: "India's Top Ranked University with Best Placements | 3 Cr Highest Package",
        SubDes: "Admissions Open for 2023",

    },

    {
        heading: 'Welingkar Institute of Management Development',
        image: myLogo2,
        Description: "1st Ranked Private B-School in Mumbai",
        SubDes: "Admissions Open for AY 2023-25",

    },
    {
        heading: 'Collegedunia Review Rewards',
        image: myLogo3,
        Description: "Write a Review & Earn Up To",
        SubDes: "₹500",

    },

]

const Latest = () => {
    return (
        <>
            <Box>
                <Card sx={{ marginTop: 4.5, background: 'white', boxShadow: '0px 0px 40px rgba(123, 144, 255, 0.15)', borderRadius: 8, }}>
                    <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', }}>
                                <Box>
                                    <img sx={{ width: 69, height: 56, background: 'linear-gradient(0deg, white 0%, white 100%)', borderRadius: 5 }}
                                        src={myImage2}></img>
                                </Box>
                                <Box>
                                    <Typography sx={{color: '#210366', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', textTransform: 'uppercase', wordWrap: 'break-word' }}>
                                        Latest Application Forms 2023</Typography>
                                </Box>

                            </Box>

                            <Box >
                                <Button sx={{ width: 172, height: 44, background: '#FF7900', borderRadius: 12, alignItems: 'center' }}>
                                    <Typography sx={{ textTransform:'none',textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word' }}>Sponsored</Typography>
                                </Button>
                            </Box>
                        </Box>

                        <Divider sx={{marginTop:2}}/>
                        <Box sx={{ marginLeft: '-27px', display: 'flex', justifyContent: 'space-between'}}>
                        {parts.map((part, index) => {
                            return (
                                <>
                                    
                                    <Box sx={{ display: 'flex', flexDirection: 'column',  justifyContent: 'center', }}>
                                    <Box sx={{ width: 331,  marginTop:index === 2 ? 4 : 2, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', }}>
                                    <Box>
                                        <img src={part.image}></img>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ margin: 1 , color: '#7B90FF', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>
                                            {part.heading}</Typography>
                                    </Box>
                                    </Box>

                                    <Box sx={{marginRight: 2}}>
                                    <Box>
                                        <Typography sx={{ marginLeft: 4, marginTop: 1, color: '#210366', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>
                                            {part.Description}
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography sx={{marginLeft: 4, marginTop: 0.8, color: '#FF7900', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>
                                            {part.SubDes}
                                        </Typography>
                                    </Box>
                                    </Box>

                                    {index === 2 ? 
                                    <>
                                    <Box sx={{display: 'flex',}}>
                                    <Box sx={{marginBottom: 0, marginTop: 2.8 , marginLeft: 2, marginRight: 4}}>
                                        <Button sx={{ width: 149, height: 44, background: '#FF7900', borderRadius: 12, }}>
                                            <Typography style={{textTransform:'none', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word' }}> Avail Now</Typography>
                                        </Button>
                                    </Box>
                                    <Box> <img src={cardimg}></img> </Box>
                                    </Box>
                                    </>:
                                    <>
                                    <Box sx={{marginTop: 2.5 , marginLeft: 7, marginRight: 7}}>
                                        <Button sx={{ width: 149, height: 44, background: '#FF7900', borderRadius: 12, }}>
                                            <Typography sx={{textTransform:'none', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word' }}>  Apply Now</Typography>
                                        </Button>
                                    </Box>
                                    </>
                                    
                                    }
                                       
                                    </Box>

                                 {index !=2 && <> <Box>
                                <Divider orientation="vertical" sx={{marginTop: 2 , marginLeft:0 , marginRight:2 }} />
                                </Box></>} 
                                </>
                            )
                        }
                        )
                        }
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}
export default Latest;

