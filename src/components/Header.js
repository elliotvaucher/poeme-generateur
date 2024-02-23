import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => (
  <AppBar position="static" color="primary" sx={{ marginBottom: 4 }}>
    <Container maxWidth="lg">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Générateur de poèmes
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">
          Accueil
        </Button>
        <Button color="inherit" component={RouterLink} to="/blog">
          Blog
        </Button>
        <Button color="inherit" component={RouterLink} to="/about">
          À propos
        </Button>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Header;
