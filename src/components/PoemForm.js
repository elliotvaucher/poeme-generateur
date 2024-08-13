import React, { useState } from 'react';
import { TextField, MenuItem, Button, Box } from '@mui/material';

const PoemForm = ({ onSubmit }) => {
  const [theme, setTheme] = useState('');
  const [languageRegister, setLanguageRegister] = useState('');
  const [poemType, setPoemType] = useState('');
  const [keywords, setKeywords] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ theme, languageRegister, poemType, keywords, specialRequests });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, textAlign: 'center' }}>
      <TextField
        select
        label="Thème"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        {['amour', 'famille', 'nature', 'érotique'].map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Registre de langue"
        value={languageRegister}
        onChange={(e) => setLanguageRegister(e.target.value)}
      >
        {['soutenu', 'neutre', 'populaire'].map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Type de poème"
        value={poemType}
        onChange={(e) => setPoemType(e.target.value)}
      >
        {['sonnet', 'ballade', 'haïku', 'vers libre'].map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Mots-clés"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Autres envies particulières"
        multiline
        rows={2}
        value={specialRequests}
        onChange={(e) => setSpecialRequests(e.target.value)}
        variant="outlined"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
        Génère ton poème
      </Button>
    </Box>
  );
};

export default PoemForm;
