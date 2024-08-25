// Chakra imports
import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
  Text,
  Box
} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people-image.png";
import logoChakra from "assets/svg/logo-white.svg";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
import img_1 from 'assets/img/1.jpg';
import img_2 from 'assets/img/2.jpg';
import img_3 from 'assets/img/3.jpg';
import img_4 from 'assets/img/4.jpg';
import img_5 from 'assets/img/5.jpg';
import img_6 from 'assets/img/6.jpg';
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
  ClockIcon,
} from "components/Icons/Icons.js";
import React from "react";
import { dashboardTableData, timelineData } from "variables/general";
import leaderboard from "assets/img/leaderboard.png"

export default function Leaderboard() {
  return (
    <Flex
      bg={'white'}
      flexDirection='column'
      pt={{ base: "120px", md: "75px" }}
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Image
        src={leaderboard}
        objectFit="contain"
        boxSize="100%"
        maxHeight="calc(100vh - 120px)"
      />
    </Flex>
  );
}
