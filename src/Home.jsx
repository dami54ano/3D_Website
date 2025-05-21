import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/3d-world');
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
        Welcome to My Website
      </Typography>
      <Typography variant="h6" paragraph sx={{ maxWidth: '600px', opacity: 0.8 }}>
        Explore my projects and learn more about what I do.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ fontSize: '18px', padding: '10px 20px', mt: 2 }}
        onClick={handleLearnMoreClick}
      >
        Learn More
      </Button>
    </Box>
  );
};

export default Home;