import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, Input, VStack, Text, HStack } from '@chakra-ui/react';
import { AiOutlineUser, AiOutlineRobot } from 'react-icons/ai';
import './chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  const chatBodyRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);

    // Display a welcome message when the chatbot is opened for the first time
    if (!isOpen && messages.length === 0) {
      const welcomeMessage = { sender: 'bot', content: "Welcome to Zubin's virtual AI assistant!" };
      setMessages([welcomeMessage]);
    }
  };

  const handleMessageSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Clear the input field immediately after sending
    setInput('');

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();

      const botMessageContent = typeof data.reply === 'string' ? data.reply : 'Sorry, I didn’t understand that.';

      const botMessage = { sender: 'bot', content: botMessageContent };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const botMessage = { sender: 'bot', content: 'An error occurred. Please try again later.' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleMessageSend();
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [isOpen]);

  return (
    <Box
      className={`chatbot-popup ${isOpen ? 'open' : ''}`}
      position="fixed"
      bottom="30px"
      right="30px"
      zIndex="1000"
    >
      <Box
        className="chatbot-header"
        bg="#3a69c2"
        p="10px"
        color="white"
        textAlign="center"
        cursor="pointer"
        borderRadius="50%"
        width="70px"
        height="70px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="24px"
        onClick={handleToggle}
      >
        💬
      </Box>
      {isOpen && (
        <VStack
          className="chatbot-body"
          p="10px"
          bg="white"
          maxH="500px"  // Increased height
          overflowY="auto"
          spacing="4"
          width="400px"  // Increased width
          borderRadius="md"
          boxShadow="lg"
          ref={chatBodyRef}
        >
          <VStack className="chatbot-messages" align="stretch" spacing="4" w="full">
            {messages.map((msg, index) => (
              <HStack
                key={index}
                className={`message ${msg.sender}`}
                justifyContent={msg.sender === 'user' ? 'flex-end' : 'flex-start'}
              >
                {msg.sender === 'user' ? (
                  <AiOutlineUser className="message-icon" />
                ) : (
                  <AiOutlineRobot className="message-icon" />
                )}
                <Text
                  bg={msg.sender === 'user' ? '#216bf5' : 'gray.200'}
                  color={msg.sender === 'user' ? 'white' : 'black'}
                  p="8px"
                  borderRadius="18px"
                  maxW="100%"
                  wordBreak="keep-all"
                >
                  {msg.content}
                </Text>
              </HStack>
            ))}
            <div ref={messagesEndRef} />
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
              onKeyDown={handleKeyDown}
            />
            <Button onClick={handleMessageSend} bg="#216bf5" color="white" borderRadius="md">
              Send
            </Button>
          </HStack>
        </VStack>
      )}
    </Box>
  );
};

export default Chatbot;