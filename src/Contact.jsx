import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [result, setResult] = React.useState("");

  const handleBackClick = () => {
    navigate('/');
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "518c902b-903a-4012-8c35-a9e7d5dc9fa4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', // Move content higher
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#2e2e2e',
        color: '#ffffff',
        width: '100vw',
        paddingTop: '50px' // Add padding to the top
      }}
    >
      <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
        Contact Us
      </Typography>
      <Typography variant="h6" paragraph sx={{ maxWidth: '600px', opacity: 0.8 }}>
        Get in touch with us for more information.
      </Typography>
      <form onSubmit={onSubmit} style={{ width: '100%', maxWidth: '600px', textAlign: 'left' }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>Name</Typography>
          <input type="text" name="name" required style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>Email</Typography>
          <input type="email" name="email" required style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>Message</Typography>
          <textarea name="message" required style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', minHeight: '100px' }}></textarea>
        </Box>
        <Button type="submit" variant="contained" color="primary" sx={{ fontSize: '18px', padding: '10px 20px', mt: 2 }}>
          Submit Form
        </Button>
      </form>
      <Typography variant="body1" sx={{ mt: 2 }}>{result}</Typography>

    </Box>
  );
};

export default Contact;