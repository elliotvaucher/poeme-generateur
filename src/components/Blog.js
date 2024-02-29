import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Masonry } from '@mui/lab';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const blogPosts = [
  { title: "Poèmes pour Maman : Une Ode à l'Amour Maternel", id: 1, image: 'https://source.unsplash.com/800x300/?mother' },
  { title: "L'Essence des Poèmes d'Amour", id: 2, image: 'https://source.unsplash.com/800x300/?love' },
  { title: "Poème de Arthur Rimbaud", id: 3, image: 'https://source.unsplash.com/800x300/?poet' },
  // Add more posts as needed
];

const Blog = () => (
  <Masonry columns={3} spacing={2}>
    {blogPosts.map((post) => (
      <Card key={post.id}>
        <CardActionArea component={RouterLink} to={`/article/${post.id}`}>
          <CardMedia
            component="img"
            height="140"
            image={post.image}
            alt={post.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.summary}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    ))}
  </Masonry>
);

export default Blog;
