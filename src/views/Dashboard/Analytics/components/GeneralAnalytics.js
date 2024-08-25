import React from "react";
import UserGraph from "./UserGraph";
import EffectivenessGraph from "./EffectivenessGraph";
// Chakra imports
import {
    Divider,
  Flex,
  Grid,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people-image.png";
import logoChakra from "assets/svg/logo-white.svg";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import MiniStatistics from "views/Dashboard/Dashboard/components/MiniStatistics";
import EthnicityGraph from "./EthnicityAnalysis";
import EthnicityAnalysis from "./EthnicityAnalysis";
import AgeAnalysis from "./AgeAnalysis";
const GeneralAnalytics = () => {
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Flex direction="column">
      <Text fontSize="1.6rem" color={textColor} fontWeight="bold" pb="5px">
        Most Recent Event
      </Text>

      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px" pb="20px">
        <MiniStatistics
          title={"Attendees"}
          amount={"53"}
          percentage={55}
          icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Volunteers"}
          amount={"10"}
          percentage={5}
          icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Rating"}
          amount={"4.2"}
          percentage={-14}
          icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Popularity"}
          amount={"50"}
          percentage={8}
          icon={<CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
      </SimpleGrid>
      <Text fontSize="1.6rem" color={textColor} fontWeight="bold" pb="5px">
        Events Analysis
      </Text>
      <Grid
        templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
        templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
        gap="24px"
        mb={{ lg: "26px" }}
      >
        <UserGraph
          title={"Active Users"}
          percentage={23}
          chart={<BarChart />}
        />
        <EffectivenessGraph
          title={"Sales Overview"}
          percentage={5}
          chart={<LineChart />}
        />
      </Grid>
      <EthnicityAnalysis />
      <Flex py="10px"></Flex>
      <AgeAnalysis />
    </Flex>
  );
};

export default GeneralAnalytics;
