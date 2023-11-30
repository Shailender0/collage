import React from 'react'
import InterestCard from '../../components/Cards/InterestCard'
import { Box, } from '@mui/material';
import logo1 from './images/logo/coin.png';
import logo2 from './images/logo/management.png';
import logo3 from './images/logo/Arts.png';
import logo4 from './images/logo/Laptop.png';
import logo5 from './images/logo/Books.png';
import logo6 from './images/logo/law.png';
import logo7 from './images/logo/eng.png';
import logo8 from './images/logo/medical.png';
import logo9 from './images/logo/Flask.png';

const InterestAllCards = () => {

    const data = [
        {
            logo: logo1,
            heading: 'Commerce',
            btn: [
                {
                    courseName: 'M.com',
                    link: '#',
                },
                {
                    courseName: 'B.com',
                    link: '#',
                },
                // {
                //     courseName: 'MA',
                //     link: '#',
                // },
            ],
            exploreAllCourseLink : 'https://www.google.com',
        },
        {
            logo: logo2,
            heading: 'Management',
            btn: [
                {
                    courseName: 'BBA/BBM',
                    link: '#',
                },
                {
                    courseName: 'MBA',
                    link: '#',
                },
                {
                    courseName: 'BHM',
                    link: '#',
                },
            ],
            exploreAllCourseLink : 'https://twitter.com',
        },
        {
            logo: logo3,
            heading: 'Arts',
            btn: [
                {
                    courseName: 'BA',
                    link: '#',
                },
                {
                    courseName: 'BFA',
                    link: '#',
                },
                {
                    courseName: 'MA',
                    link: '#',
                },
            ]
        },
        {
            logo: logo4,
            heading: 'Computer Application',
            btn: [
                {
                    courseName: 'BE/B.tech',
                    link: '#',
                },
                {
                    courseName: 'ME/M.tech',
                    link: '#',
                },
                {
                    courseName: 'Polytechnic',
                    link: '#',
                },
            ]
        },
        {
            logo: logo5,
            heading: 'Education',
            btn: [
                {
                    courseName: 'BE/B.tech',
                    link: '#',
                },
                {
                    courseName: 'ME/M.tech',
                    link: '#',
                },
                {
                    courseName: 'Polytechnic',
                    link: '#',
                },
            ]
        },
        {
            logo: logo6,
            heading: 'Law',
            btn: [
                {
                    courseName: 'BE/B.tech',
                    link: '#',
                },
                {
                    courseName: 'ME/M.tech',
                    link: '#',
                },
                {
                    courseName: 'Polytechnic',
                    link: '#',
                },
            ]
        },
        {
            
            logo: logo7,
            heading: 'Engineering',
            btn: [
                {
                    courseName: 'BE/B.tech',
                    link: '#',
                },
                {
                    courseName: 'ME/M.tech',
                    link: '#',
                },
                {
                    courseName: 'Polytechnic',
                    link: '#',
                },
            ]
        },
        {
            logo: logo8,
            heading: 'Medical',
            btn: [
                {
                    courseName: 'BAMS',
                    link: '#',
                },
                {
                    courseName: 'B.Sc',
                    link: '#',
                },
                {
                    courseName: 'BHMS',
                    link: '#',
                },
            ]
        },
        {
            logo: logo9,
            heading: 'Science',
            btn: [
                {
                    courseName: 'M.Sc',
                    link: '#',
                },
                {
                    courseName: 'B.Sc',
                    link: '#',
                },
                {
                    courseName: 'B.F.Sc',
                    link: '#',
                },
            ]
        },

    ]


    return (
        <>
            <Box  sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'start', height: 'auto' , flexWrap: 'wrap' , margin : '1rem 0' }}>
                {data.map((item, index) => (
                    <InterestCard key={index} {...item} />
                ))}
            </Box>

            {/* <Grid container spacing={4}>
                {data.map((item, index) => (
                    <Grid item  >
                        <ChooseCourseCard key={index} {...item} />
                    </Grid>
                ))}
            </Grid> */}

        </>
    )
}

export default InterestAllCards
