import React from 'react';
import Button from '@mui/material/Button';
  
const ExamCategoryButton = ({ label, link }) => {
  return (
      <Button
        variant="contained"
        sx={{
          fontFamily: 'Poppins',
          fontSize: '1.1rem',
          textTransform : 'none',
          fontWeight: 600,
          lineHeight: '1.3rem',
          letterSpacing: '0em',
          textAlign: 'center',
          borderRadius: '1.3rem',
          padding: '0.5rem 2rem',
          margin: '1rem 1rem 0 0 ',
          borderColor: '#7B90FF',
          borderWidth: '0.3rem',
          borderStyle: 'solid',
          color: '#210366',
          backgroundColor: 'white',
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

export default ExamCategoryButton;
