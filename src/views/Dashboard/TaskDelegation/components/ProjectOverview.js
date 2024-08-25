// Chakra imports
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  Image,
  Button,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import TaskLists from "./TaskLists";
import React from "react";

import ImageProjectTimeline from "assets/img/ImageProjectTimeline.png";

export default function ProjectOverview({ title, taskDone, taskOutstanding }) {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card p="28px 16px 28px 16px" mb={{ sm: "26px", lg: "0px" }} height="100%">
      <CardHeader mb="20px" pl="12px">
        <Flex direction="column" alignSelf="flex-start">
          <Text fontSize="lg" color={textColor} fontWeight="bold" mb="6px">
            {title}
          </Text>
          <Text fontSize="md" fontWeight="medium" color="gray.400">
            <Text
              as="span"
              color={
                taskDone / (taskDone + taskOutstanding) > 0.5
                  ? "#FCA503"
                  : "red.400"
              }
              fontWeight="bold"
            >
              {`${taskDone}`} tasks done,
            </Text>{" "}
            {`${taskOutstanding}`} tasks to go
          </Text>
        </Flex>
      </CardHeader>
      <Box w="100%" px="12px">
        <Image src={ImageProjectTimeline} />
      </Box>

      <TaskLists
        title={"Task Lists"}
        amount={15}
        captions={["Task", "Volunteer", "Status", "Completion"]}
        buttonValues={["All", "Ongoing", "Complete", "Cancelled", "Unassigned"]}
      />
    </Card>
  );
}
