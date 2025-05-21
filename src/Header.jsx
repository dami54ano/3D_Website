import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1e1e1e', padding: '10px 0' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', letterSpacing: '1px' }}>
          My Website
        </Typography>
        <div>
          <Button color="inherit" component={Link} to="/" sx={{ mx: 1, fontSize: '16px' }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about" sx={{ mx: 1, fontSize: '16px' }}>
            About
          </Button>
          <Button color="inherit" component={Link} to="/contact" sx={{ mx: 1, fontSize: '16px' }}>
            Contact
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
