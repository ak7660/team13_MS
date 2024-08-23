const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { VertexAI } = require('@google-cloud/vertexai');
require('dotenv').config();

// Initialize Vertex with your Cloud project and location
const vertex_ai = new VertexAI({ project: process.env.GOOGLE_CLOUD_PROJECT, location: process.env.GOOGLE_CLOUD_LOCATION });
const model = process.env.GOOGLE_VERTEX_AI_MODEL;

const generativeModel = vertex_ai.preview.getGenerativeModel({
  model: model,
  generationConfig: {
    maxOutputTokens: 1024,
    temperature: 0.2,
    topP: 0.8,
  },
  safetySettings: [
    { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
    { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
    { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
    { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
  ],
  systemInstruction: {
    parts: [{ text: process.env.SYSTEM_INSTRUCTION }],
  },
});

const chat = generativeModel.startChat({});

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle chat messages
app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const streamResult = await chat.sendMessageStream([{ text: userMessage }]);
    const candidate = (await streamResult.response).candidates[0];

    // Extract the text from the `parts` array in the response
    const responseText = candidate.content.parts.map(part => part.text).join(' ');

    // Log the full response for debugging
    console.log('Vertex AI Response:', JSON.stringify(await streamResult.response, null, 2));

    // Send the extracted text back to the client
    res.json({ reply: responseText });
  } catch (error) {
    console.error('Error during Vertex AI call:', error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});