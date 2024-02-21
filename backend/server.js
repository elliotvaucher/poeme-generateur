require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/generate-poem', async (req, res) => {
    const { theme, languageRegister, poemType, keywords, specialRequests } = req.body;
    const promptMessage = `Write a poem in a '${poemType}' style about '${theme}'. The language should be '${languageRegister}'. Include keywords '${keywords}'. ${specialRequests}`;

    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo', // Ensure this is the correct model for your use case
        messages: [{
          role: "system",
          content: "You are a highly skilled poet."
        }, {
          role: "user",
          content: promptMessage
        }],
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      });

      // Logging OpenAI response for debugging
      console.log("OpenAI response:", response.data);

      res.json({ poem: response.data.choices[0].message.content });
    } catch (error) {
      console.error('Error generating poem:', error);
      // Log OpenAI error response if available
      if (error.response) {
        console.error("OpenAI error response:", error.response.data);
      }
      res.status(500).json({ error: 'Failed to generate poem' });
    }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
