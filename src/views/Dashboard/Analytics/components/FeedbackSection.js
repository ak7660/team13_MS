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

const FeedbackSection = ({totalReviews, rating, reviewDistribution, overallFeedback, feedbacks}) => {

  return (
    <Flex direction="column" w="100%">
      <Text fontSize="1.5rem" pb="5px" fontWeight="hairline">
        Event Review Summary
      </Text>
      <StarDistribution rating={rating} totalReviews={totalReviews} reviewDistribution={reviewDistribution} />

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
