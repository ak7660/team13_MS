import { Flex, Text } from "@chakra-ui/react";
import Card from "components/Card/Card";
import PieChart from "components/Charts/PieChart";
import React from "react";
import {
  List,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import BarChart from "components/Charts/BarChart";
import AgeBarChart from "components/Charts/AgeBarChart";

const AgeAnalysis = () => {
  return (
    <Card>
      <Flex direction="row">
        <Flex direction="column" >
          <Text fontSize="1.5rem" pb="5px" fontWeight="hairline">
            Age Analysis
          </Text>
          <Flex>
            <AgeBarChart />
          </Flex>
        </Flex>
        <Flex pt="2rem" >
          <UnorderedList spacing="4px">
            <ListItem fontWeight="bold">High Participation Among <Text as="span" color="green.500">18-25</Text> Age Group:</ListItem>
            <Text>Young adults aged <Text as="span" color="green.500">18-25</Text> are the most engaged in your events, especially in career-oriented workshops and networking sessions.</Text>
            <ListItem fontWeight="bold">Strong Attendance from <Text as="span" color="green.500">26-35</Text> Year Olds:</ListItem>
            <Text>The <Text as="span" color="green.500">26-35</Text> age group shows a strong preference for health and wellness activities, with a 45% attendance rate in such events.</Text>
            <ListItem fontWeight="bold">Growing Interest in Family-Oriented Events Among <Text as="span" color="green.500">36-45</Text> Age Group:</ListItem>
            <Text>Family-oriented events are particularly popular among individuals aged <Text as="span" color="green.500">36-45</Text>, with a 30% increase in participation compared to last year.</Text>
            <ListItem fontWeight="bold">High Engagement in Cultural Events Among the <Text as="span" color="green.500">46-60</Text> Age Group:</ListItem>
            <Text>Cultural exchange and heritage events see the highest participation from the <Text as="span" color="green.500">46-60</Text> age group, indicating strong community ties and interest in cultural preservation.</Text>
          </UnorderedList>
        </Flex>
      </Flex>
    </Card>
  );
};

export default AgeAnalysis;
