import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container } from '@mui/material';
import ReactMarkdown from 'react-markdown';

const Article = () => {
  const { articleId } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    // Dynamically import the Markdown file based on articleId
    import(`../articles/${articleId}.md`)
      .then(res => {
        // Fetch the raw content of the markdown file
        return fetch(res.default)
          .then(response => response.text())
          .then(text => setContent(text));
      })
      .catch(err => console.log(err));
  }, [articleId]);

  return (
    <Container>
      {/* Render the Markdown content */}
      <ReactMarkdown children={content} />
    </Container>
  );
};

export default Article;
