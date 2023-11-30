import React from 'react';
import Button from '@mui/material/Button';

const MyButton = ({ label, link, isAdmissionButton }) => {
  return (
      <Button
        variant="text"
        sx={{
          fontFamily: 'Poppins',
          fontSize: '1rem',
          textTransform : 'none',
          fontWeight: 600,
          // lineHeight: '1.3rem',
          letterSpacing: '0em',
          textAlign: 'center',
          borderRadius: '1.3rem',
          padding: '0.2rem 1.5rem',
          margin: '1rem 1rem 0 0 ',
          borderColor: '#7B90FF',
          borderWidth: '0.2rem',
          borderStyle: 'solid',
          color: isAdmissionButton ? 'white': '#210366',
          backgroundColor: isAdmissionButton ? '#7B90FF' : 'white',
          '&:hover': {
            backgroundColor: '#7B90FF',
            color: 'white',
          },
        }}
        href={link}
      >
        {label}
      </Button>
  );
};

export default MyButton;
