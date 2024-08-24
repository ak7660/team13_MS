import React from "react";
import {
  Box,
  Flex,
  Text,
  Progress,
  Icon,
  VStack,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import Card from "components/Card/Card";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";
import StarDistribution from "./StarDistribution";
import OverallFeedback from "./OverallFeedback";

const FeedbackSection = () => {
  const totalReviews = 44;
  const rating = 4.4;
  const reviewDistribution = [
    { rating: 5, percentage: 75 },
    { rating: 4, percentage: 15 },
    { rating: 3, percentage: 5 },
    { rating: 2, percentage: 3 },
    { rating: 1, percentage: 2 },
  ];
  const overallFeedback =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <Flex direction="column"  w="100%">
      <Text fontSize="1.5rem" pb="5px" fontWeight="hairline">
        Event Review Summary
      </Text>
      <StarDistribution reviewDistribution={reviewDistribution}/>

      <Divider py="20px" mb="20px"/>
      <OverallFeedback overallFeedback={overallFeedback} />

      <Divider py="20px" mb="20px"/>
    </Flex>
  );
};

export default FeedbackSection;
