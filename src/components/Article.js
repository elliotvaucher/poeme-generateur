import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container } from '@mui/material';

const Article = () => {
  const { articleId } = useParams(); // Get the article ID from the URL
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Heading 1 - Article {articleId}
      </Typography>
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.
      </Typography>
      {/* Add more paragraphs as needed */}
    </Container>
  );
};

export default Article;
