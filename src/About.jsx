import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#121212', 
        color: '#ffffff',
        width: '100vw'
      }}
    >
      <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
        About Us
      </Typography>
      <Typography variant="h6" paragraph sx={{ maxWidth: '600px', opacity: 0.8 }}>
        Learn more about our mission and values.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        sx={{ fontSize: '18px', padding: '10px 20px', mt: 2 }}
        onClick={handleBackClick}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default About;