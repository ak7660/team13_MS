import React, { useState } from 'react';
import { Box, Button, Input, VStack, Text, HStack } from '@chakra-ui/react';
import './chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMessageSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();

      // Handle the response and display it in the chatbot
      const botMessageContent = typeof data.reply === 'string' ? data.reply : 'Sorry, I didn’t understand that.';

      const botMessage = { sender: 'bot', content: botMessageContent };
      setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const botMessage = { sender: 'bot', content: 'An error occurred. Please try again later.' };
      setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
    }

    setInput('');
  };

  return (
    <Box
      className={`chatbot-popup ${isOpen ? 'open' : ''}`}
      position="fixed"
      bottom="20px"
      right="20px"
      zIndex="1000"
    >
      <Box
        className="chatbot-header"
        bg="blue.500"
        p="10px"
        color="white"
        textAlign="center"
        cursor="pointer"
        onClick={handleToggle}
      >
        Chatbot
      </Box>
      {isOpen && (
        <VStack className="chatbot-body" p="10px" bg="white" maxH="400px" overflowY="scroll" spacing="4">
          <VStack className="chatbot-messages" align="stretch" spacing="4" w="full">
            {messages.map((msg, index) => (
              <HStack
                key={index}
                className={`message ${msg.sender}`}
                justifyContent={msg.sender === 'user' ? 'flex-end' : 'flex-start'}
              >
                <Text
                  bg={msg.sender === 'user' ? 'blue.500' : 'gray.200'}
                  color={msg.sender === 'user' ? 'white' : 'black'}
                  p="8px"
                  borderRadius="md"
                >
                  {msg.content}
                </Text>
              </HStack>
            ))}
          </VStack>
          <HStack className="chatbot-input" w="full">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              bg="white"
              border="1px solid #ddd"
              borderRadius="md"
              flex="1"
            />
            <Button onClick={handleMessageSend} bg="blue.500" color="white" borderRadius="md">
              Send
            </Button>
          </HStack>
        </VStack>
      )}
    </Box>
  );
};

export default Chatbot;