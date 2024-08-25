import React from "react";
import {
  Flex,
  Text,
  Divider,
  Grid,
} from "@chakra-ui/react";
import StarDistribution from "./StarDistribution";
import OverallFeedback from "./OverallFeedback";
import FeedbackCard from "./FeedbackCard";

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

  // Sample feedback data
  const feedbacks = [
    {
      userImage: "https://via.placeholder.com/150",
      userName: "Jane Doe",
      rating: 5,
      reviewText: "Amazing experience! Will definitely come back.",
      timestamp: "2 hours ago",
      feedbackOptions: ["Friendly people", "Fun activities", "Great venue"],
    },
    {
      userImage: "https://via.placeholder.com/150",
      userName: "John Smith",
      rating: 4,
      reviewText: "Good service, but the food could be better.",
      timestamp: "1 day ago",
      feedbackOptions: ["Good organization", "Interesting content"],
    },
    // Add more feedback objects as needed
  ];

  return (
    <Flex direction="column" w="100%">
      <Text fontSize="1.5rem" pb="5px" fontWeight="hairline">
        Event Review Summary
      </Text>
      <StarDistribution reviewDistribution={reviewDistribution} />

      <Divider py="20px" mb="20px" />
      <OverallFeedback overallFeedback={overallFeedback} />

      <Divider py="20px" mb="20px" />
      <Text fontSize="1.5rem" pb="5px" fontWeight="hairline">
        Reviews
      </Text>
      <Grid templateColumns="1fr" gap={6}>
        {feedbacks.map((feedback, index) => (
          <FeedbackCard
            key={index}
            userImage={feedback.userImage}
            userName={feedback.userName}
            rating={feedback.rating}
            reviewText={feedback.reviewText}
            timestamp={feedback.timestamp}
            feedbackOptions={feedback.feedbackOptions}
          />
        ))}
      </Grid>
    </Flex>
  );
};

export default FeedbackSection;
