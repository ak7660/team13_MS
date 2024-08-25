import { Flex, Text } from "@chakra-ui/react";
import Card from "components/Card/Card";
import AgeBarChart from "components/Charts/AgeBarChart";
import PieChart from "components/Charts/PieChart";
import React from "react";

const DemographicGraph = ({ethnicitySeries, ageSeries}) => {
  console.log(ageSeries);
  return (
    <Flex w="100%">
      <Flex direction="column" alignItems="center" rounded="md" w="50%">
        <Text fontSize="1.5rem" pb="5px" fontWeight="hairline">
          Ethnicity Distribution
        </Text>
        <PieChart series={ethnicitySeries}/>
      </Flex>
      <Flex direction="column" alignItems="center" rounded="md" w="50%">
        <Text fontSize="1.5rem" pb="5px" fontWeight="hairline">
          Age Distribution
        </Text>
        <AgeBarChart series={ageSeries}/>
      </Flex>
    </Flex>
  );
};

export default DemographicGraph;
