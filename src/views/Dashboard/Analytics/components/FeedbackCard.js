import React from "react";
import {
  Box,
  Flex,
  Avatar,
  Heading,
  Text,
  VStack,
  Tag,
  Wrap,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const FeedbackCard = ({
  userImage,
  userName,
  rating,
  reviewText,
  timestamp,
  feedbackOptions,
}) => {
    
  return (
    <Box
      p={4}
      borderWidth={1}
      borderRadius="md"
      boxShadow="md"
      bg="white"
      maxW="sm"
    >
      <Flex align="center" mb={4}>
        <Avatar src={userImage} name={userName} size="md" mr={4} />
        <VStack align="start" spacing={1}>
          <Heading size="md">{userName}</Heading>
          <Flex>
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                color={i < rating ? "yellow.400" : "gray.300"}
                boxSize={5}
              />
            ))}
          </Flex>
        </VStack>
      </Flex>
     
      <Wrap spacing={2} mb={4}>
        {feedbackOptions.map((option, index) => (
          <Tag key={index} colorScheme="teal">
            {option}
          </Tag>
        ))}
         <Text mb={4}>{reviewText}</Text>
      </Wrap>
      <Text color="gray.500" fontSize="sm">
        {timestamp}
      </Text>
    </Box>
  );
};

export default FeedbackCard;
