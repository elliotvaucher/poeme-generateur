import React from 'react';
import { Container, Typography, Card, CardMedia } from '@mui/material';

const About = () => (
  <Container>

    {/* Title */}
    <Typography variant="h2" gutterBottom>
      À propos
    </Typography>

    {/* Image */}
    <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://source.unsplash.com/800x600/?nature"
        alt="Nature"
      />
    </Card>


    {/* Text Paragraph */}
    <Typography variant="body1" gutterBottom>
      Ce site est un projet personnel pour m'entraîner à utiliser React et MUI. Il vise à présenter une interface simple et élégante, en mettant en pratique les composants et le système de design de MUI.
    </Typography>
  </Container>
);

export default About;
