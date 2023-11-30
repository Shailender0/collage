import React from 'react';
import { Box, Container } from '@mui/material';
import MyButton from '../../components/Buttons/MyButton';
import MyHeading from '../../components/Headings/MyHeading';

const TopCourses = () => {
  const heading = 'Top Courses';
  const buttons = [
    {
      label: 'BE/B.Tech',
      link: '#',
    },
    {
      label: 'BA',
      link: '#',
    },
    {
      label: 'B.Sc',
      link: '#',
    },
    {
      label: 'MBA/PGDM',
      link: '#',
    },
    {
      label: 'M.Sc',
      link: '#',
    },
    {
      label: 'ME/M.Tech',
      link: '#',
    },
    {
      label: 'M.A.',
      link: '#',
    },
    {
      label: 'Doctrate',
      link: '#',
    },
    {
      label: 'BDS',
      link: '#',
    },
    {
      label: 'Polytechnic',
      link: '#',
    },
    {
      label: 'MD',
      link: '#',
    },
    {
      label: 'M.Phil/Ph.D in Science',
      link: '#',
    },
    {
      label: 'B.Com',
      link: '#',
    },
    {
      label: 'BBA/BBM',
      link: '#',
    },
    {
      label: 'BBA',
      link: '#',
    },
    {
      label: 'Diploma in Engineering',
      link: '#',
    },
    {
      label: 'M.Phil/Ph.D Arts',
      link: '#',
    },
    {
      label: 'M.Com',
      link: '#',
    },
    {
      label: 'B.Ed',
      link: '#',
    },
    {
      label: 'M.Phil/PH.D in Engineering',
      link: '#',
    },

  ];

  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ margin: '2rem 0' }}>
          <MyHeading headingName={heading} />
          {buttons.map((button, index) => (
            <MyButton key={index} label={button.label} link={button.link} />
          ))}
        </Box>
      </Container>
    </>
  );
};

export default TopCourses;
