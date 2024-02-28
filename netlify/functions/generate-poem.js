const axios = require('axios');
const process = require('process');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { theme, languageRegister, poemType, keywords, specialRequests } = JSON.parse(event.body);
  const promptMessage = `Write a poem with a '${poemType}' structure about '${theme}'. The language should be '${languageRegister}'. Include keywords '${keywords}'. Write the poem in French. ${specialRequests}`;

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
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

    console.log("OpenAI response:", response.data);

    return {
      statusCode: 200,
      body: JSON.stringify({ poem: response.data.choices[0].message.content })
    };
  } catch (error) {
    console.error('Error generating poem:', error);
    if (error.response) {
      console.error("OpenAI error response:", error.response.data);
    }
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to generate poem' })
    };
  }
};
