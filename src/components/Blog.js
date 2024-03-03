import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Masonry } from '@mui/lab';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const blogPosts = [
  { title: "Poèmes pour Maman : Une Ode à l'Amour Maternel", id: 1, image: 'https://source.unsplash.com/800x300/?mother' },
  { title: "L'Essence des Poèmes d'Amour", id: 2, image: 'https://source.unsplash.com/800x300/?love' },
  { title: "Poèmes pour Papa : Une Ode à l'Amour Paternel", id: 3, image: 'https://source.unsplash.com/800x300/?father' },
  { title: "Fête des pères en Maternelle", id: 4, image: 'https://source.unsplash.com/800x300/?father' },
  { title: "L'importance du poème engagé", id: 5, image: 'https://source.unsplash.com/800x300/?revolution' },
  { title: "La poésie d'Arthur Rimbaud", id: 6, image: 'https://source.unsplash.com/800x300/?poet' },
  { title: "Importance du Poème dans un Mariage", id: 7, image: 'https://source.unsplash.com/800x300/?wedding' },
  { title: "Poème érotique", id: 9, image: 'https://source.unsplash.com/800x300/?couple' },

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
