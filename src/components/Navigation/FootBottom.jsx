import React from 'react'
import { Typography, Box, Stack, Button } from '@mui/material';
import { Facebook, Instagram, Twitter, YouTube, LinkedIn } from '@mui/icons-material';
import googlePlayImg from '../../Assets/google-play.png';
import appStoreImg from '../../Assets/app-store.png';



const FootBottom = () => {
    return (
        <>
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={4} sx={{ backgroundColor: '#210366', color: '#FFF', p: '1rem' }} >

                <Stack
                    spacing={4}
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    style={{ display: "flex" }}
                >
                    <Typography
                        variant="body1"
                        component="div"
                        style={{
                            fontFamily: "Poppins",
                            fontWeight: 600,
                            fontSize: "18px",
                            opacity: 0.5
                        }}
                    >
                        Download the CollegeWallah app on
                    </Typography>
                    <Stack spacing={2} direction="row" justifyContent="center">
                        <Button href="https://play.google.com/store/apps/details?id=com.collegewallah&hl=en&gl=US" target="_blank" rel="noopener noreferrer" startIcon={<img src={googlePlayImg} alt="Google Play Store" width="120" height="40" />} />
                        <Button href="https://apps.apple.com/in/app/collegewallah/id1567682336" target="_blank" rel="noopener noreferrer" startIcon={<img src={appStoreImg} alt="Apple App Store" width="120" height="40" />} />
                    </Stack>
                </Stack>
                <Stack direction="row" spacing={3}>
                    <Facebook />
                    <Instagram />
                    <Twitter />
                    <YouTube />
                    <LinkedIn />
                </Stack>

            </Stack>
            <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{ backgroundColor: '#190054', color: '#FFF' }}>
                <Box style={{ margin: '2rem 1rem', fontFamily: 'popins' }}>
                    <Typography variant="body1" component="div">
                        &copy; 2023 CollegeWallah Web Pvt Ltd. All Rights Reserved.
                    </Typography>
                </Box>
            </Stack>
        </>
    )
}

export default FootBottom;
