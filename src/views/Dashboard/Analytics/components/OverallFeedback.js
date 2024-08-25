import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { RocketIcon } from "components/Icons/Icons";
import React from "react";

const OverallFeedback = ({ overallFeedback }) => {
  return (
    <Grid templateColumns="30% 70%" alignItems="center" w="100%">
      <GridItem>
        <Flex justifyContent="center">
          <RocketIcon h="12rem" w="12rem" />
        </Flex>
      </GridItem>
      <GridItem w="100%">
        <Flex direction="column" w="100%" textAlign="end" >
          <Flex
            direction="column"
            alignSelf="flex-end"
            h="15rem"
            p="0px 20px"
            overflowY="auto"
            css={{
              "&::-webkit-scrollbar": {
                width: "2px",
                visibility: "hidden"
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#a0aec0",
                borderRadius: "5px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#718096",
                borderRadius: "5px",
              },
              "&:hover::-webkit-scrollbar": {
                visibility: "visible",
              },
              "&::-webkit-scrollbar": {
                visibility: "hidden",
              },
            }}
          >
            <Text fontSize="1.5rem" pb="5px" fontWeight="hairline">
              Overall Feedback
            </Text>
            <Text>{overallFeedback}</Text>
          </Flex>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default OverallFeedback;
