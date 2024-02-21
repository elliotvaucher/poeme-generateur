import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Masonry } from '@mui/lab';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const blogPosts = [
  { title: 'Post 1', summary: 'Summary of post 1', id: 1, image: 'url-to-image-1' },
  { title: 'Post 2', summary: 'Summary of post 2', id: 2, image: 'url-to-image-2' },
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
