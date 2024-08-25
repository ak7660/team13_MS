import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import React from "react";
import DemographicGraph from "./DemographicGraph";
import CardHeader from "components/Card/CardHeader";
import { useColorModeValue } from "@chakra-ui/system";
import { Divider, Flex, Icon, Text } from "@chakra-ui/react";
import { GPSIcon } from "components/Icons/Icons";
import FeedbackSection from "./FeedbackSection";

const EventAnalytics = ({ data }) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card boxShadow="lg" padding="30px">
      <CardHeader>
        <Flex direction="column">
          <Text fontSize="1.6rem" color={textColor} fontWeight="bold" pb="">
            {data.name}
          </Text>
          <Flex gap="5px" align="center" pb="8px">
            <Icon as={GPSIcon} color="yellow.400" w="0.8rem" />
            <Text fontSize="0.8rem" color="gray.400" fontWeight="normal">
              {data.location}
            </Text>
          </Flex>
        </Flex>
      </CardHeader>
      <Divider py="5px" mb="20px"/>
      <CardBody>
        <Flex direction="column" w="100%">
          <Flex w="100%">
            <DemographicGraph />
          </Flex>
          <Divider py="20px" mb="20px" />
          <FeedbackSection />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default EventAnalytics;
