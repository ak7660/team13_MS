import { Flex, Text } from "@chakra-ui/react";
import Card from "components/Card/Card";
import PieChart from "components/Charts/PieChart";
import React from "react";
import {
  List,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

const EthnicityAnalysis = () => {
  return (
    <Card>
      <Flex direction="row">
        <Flex direction="column">
          <Text fontSize="1.5rem" pb="5px" fontWeight="hairline">
            Ethnicity Analysis
          </Text>
          <PieChart />
        </Flex>
        <Flex pt="2rem">
          <UnorderedList spacing="4px">
            <ListItem fontWeight="bold">High Engagement Among South Asian Communities:</ListItem>
            <Text>Your cultural workshops are particularly popular among <Text as="span" color="blue.500">South Asian</Text> communities, with a 35% higher attendance rate compared to other ethnic groups.</Text>
            <ListItem fontWeight="bold">Increased Interest in Educational Programs:</ListItem>
            <Text>Educational events focused on language learning attract a significant portion of the <Text as="span" color="blue.500">Filipino</Text> community, showing a 40% repeat attendance rate.</Text>
            <ListItem fontWeight="bold">Growing Popularity of Health Initiatives:</ListItem>
            <Text>Health and wellness activities have seen the highest participation from the <Text as="span" color="blue.500">Nepali</Text> community, indicating strong interest in physical well-being initiatives.</Text>
            <ListItem fontWeight="bold">Strong Support for Cultural Exchange Events:</ListItem>
            <Text>Cultural exchange programs are most popular among the <Text as="span" color="blue.500">Pakistani</Text> community, with a 50% participation rate in cross-cultural festivals and activities.</Text>
          </UnorderedList>
        </Flex>
      </Flex>
    </Card>
  );
};

export default EthnicityAnalysis;
