import { Flex, Text } from "@chakra-ui/react";
import Card from "components/Card/Card";
import AgeBarChart from "components/Charts/AgeBarChart";
import PieChart from "components/Charts/PieChart";
import React from "react";

const DemographicGraph = () => {
  return (
    <Flex w="100%">
      <Flex direction="column" alignItems="center" rounded="md" w="50%">
        <Text fontSize="1.5rem" pb="5px" fontWeight="hairline">
          Ethnicity Distribution
        </Text>
        <PieChart />
      </Flex>
      <Flex direction="column" alignItems="center" rounded="md" w="50%">
        <Text fontSize="1.5rem" pb="5px" fontWeight="hairline">
          Age Distribution
        </Text>
        <AgeBarChart />
      </Flex>
    </Flex>
  );
};

export default DemographicGraph;
