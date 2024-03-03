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
      Ce site est un projet personnel pour m'entraîner à utiliser React, OpenAI, et python. Les articles du blog sont générés automatiquement à partir d'une liste de mots-clés sélectionnés pour leur qualité en SEO. Les images sont récupérées depuis l'API de Unsplash.

      L'objectif est de créer un site qui soit à la fois utile pour les visiteurs, et qui me permette de m'entraîner à utiliser des technologies modernes. C'est un projet expérimental visant à tester des idées et des concepts de SEO, d'intelligence artificielle, d'outils web.

      Toute remarque ou suggestion d'amélioration est la bienvenue, et peut m'être envoyée par mail à l'adresse suivante : info@ritsl.ch. 
    </Typography>
  </Container>
);

export default About;
