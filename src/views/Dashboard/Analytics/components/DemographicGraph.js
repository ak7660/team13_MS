import { Text } from "@chakra-ui/react";
import PieChart from "components/Charts/PieChart";
import React from "react";

const DemographicGraph = () => {
  return (
    <div>
      <Text fontSize="1.5rem" pb="5px" fontWeight="hairline">
        Ethnicity Distribution
      </Text>
      <PieChart />
    </div>
  );
};

export default DemographicGraph;
