import React from 'react';
import { Typography, Box, Link } from '@mui/material';

const Footer = () => (
  <Box
    sx={{
      marginTop: 6,
      padding: 3,
      backgroundColor: 'background.paper',
      color: 'white',
      textAlign: 'center',
    }}
  >
    <Typography variant="body1" sx={{ marginTop: 2 }}>
      Made with ❤️ by <Link href='https://ritsl.ch'>RITSL</Link>
    </Typography>
    <Typography variant="body1">
    <Link href="mailto:info@ritsl.ch" color="inherit">info@ritsl.ch</Link>
    </Typography>
  </Box>
);

export default Footer;
