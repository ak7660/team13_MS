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

const StarDistribution = ({ rating, totalReviews, reviewDistribution }) => {

  return (
    <VStack spacing={4}>
      <Flex w="full" justifyContent="space-between" alignItems="center">
        <VStack w="60%" spacing={2} alignItems="flex-start">
          {reviewDistribution.map((item) => (
            <Flex key={item.rating} w="full" alignItems="center">
              <Text w="15px" fontWeight="bold">
                {item.rating}
              </Text>
              <Icon as={StarIcon} color="yellow.400" mr={2} />
              <Progress
                value={item.percentage}
                size="sm"
                colorScheme="orange"
                w="full"
                borderRadius="sm"
              />
            </Flex>
          ))}
        </VStack>
        <VStack w="40%" spacing={2} alignItems="center">
          <Text fontSize="2xl" fontWeight="bold">
            {rating}
          </Text>
          <Rating
            initialRating={rating}
            emptySymbol={<FaStar color="#ccc" />}
            fullSymbol={<FaStar color="#ffc107" />}
            fractions={2}
            readonly
          />
          <Text>({totalReviews} reviews)</Text>
        </VStack>
      </Flex>
    </VStack>
  );
};

export default StarDistribution;
