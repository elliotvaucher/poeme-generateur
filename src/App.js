import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, createTheme, ThemeProvider, CssBaseline, TextField, LinearProgress } from '@mui/material';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PoemForm from './components/PoemForm';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Article from './components/Article';
import About from './components/About';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#d32f2f',
    },
    background: {
      default: '#000000',
      paper: '#1c1c1c',
    },
  },
  typography: {
    fontFamily: [
      'Arial',
      'sans-serif',
    ].join(','),
    h2: {
      fontWeight: 700,
      color: '#ffffff',
    },
    h5: {
      color: '#d3d3d3',
    },
    button: {
      fontStyle: 'italic',
    },
  },
});

function App() {
  const [poem, setPoem] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handlePoemSubmission = async (formData) => {
    setIsLoading(true); // Start loading
    try {
      const response = await fetch('/.netlify/functions/generate-poem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setPoem(data.poem);
    } catch (error) {
      console.error('Error fetching poem:', error);
    }
    setIsLoading(false); // End loading
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Container maxWidth="lg" sx={{ marginTop: 4, marginBottom: 4 }}>
          {isLoading && <LinearProgress color="primary" />} {/* LinearProgress shows when isLoading is true */}
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <PoemForm onSubmit={handlePoemSubmission} />
                {poem && <TextField
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  value={poem}
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ marginTop: 2 }}
                />}
              </>
            } />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/article/:articleId" element={<Article />} />
          </Routes>
          <Footer />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
