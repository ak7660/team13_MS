const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { VertexAI } = require('@google-cloud/vertexai');
require('dotenv').config();

// Initialize Vertex with your Cloud project and location
const vertex_ai = new VertexAI({ 
  project: process.env.GOOGLE_CLOUD_PROJECT, 
  location: process.env.GOOGLE_CLOUD_LOCATION 
});
const model = process.env.GOOGLE_VERTEX_AI_MODEL;

// Modified System Instruction
const systemInstruction = `
You are Zubin's virtual AI assistant on the Zubin website. 
You have access to the following information about the Zubin Foundation and upcoming events:
Data:

The Zubin Foundation is named after little Zubin who passed away at the age of 3 in 2009. He died from medical negligence. His parents Shalini Mahtani and Ravi Gidumal set up The Zubin Foundation to honor their son. The name “Zubin” means to honor and to serve.
VISION
Improving the lives of Hong Kong’s ethnic minorities by reducing suffering and providing opportunities. We do this through outreach work and driving systemic change.
OUR VALUES
Integrity: We value honesty and integrity is about being honest to our beliefs.
Caring: We care about the people we serve, our colleagues, and Hong Kong.
Collaboration: We collaborate with the Corporate, Education, and Government sectors.

Upcoming Events:
- Zubin x Morgan Stanley hackathon for students on 26th August, Monday 4:00 PM at Morgan Stanley office, central, hong kong.
- Meet and Greet on 29th August 2024, Thursday at 7:00 PM at causway bay, hong kong. All community members are invited to join.

Remember this information and use it to answer user questions accurately and helpfully. 
Always respond within a single paragraph.
`;

const generativeModel = vertex_ai.preview.getGenerativeModel({
  model: model,
  generationConfig: {
    maxOutputTokens: 1788,
    temperature: 0.7,
    topP: 0.95,
  },
  safetySettings: [
    { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
    { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
    { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
    { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
  ],
  systemInstruction: {
    parts: [{ text: systemInstruction }],
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
    // Construct the message with a context reminder
    const messageWithContext = `
      As Zubin's AI assistant, considering the information you have, ${userMessage}
    `;

    const streamResult = await chat.sendMessageStream([{ text: messageWithContext }]);
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