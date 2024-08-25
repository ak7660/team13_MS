import { Flex, Icon, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import {
  CartIcon,
  RocketIcon,
  StatsIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import React from "react";
import ChartStatistics from "./ChartStatistics";
import { FaHandshake, FaUser } from "react-icons/fa";

const UserGraph = ({ title, percentage, chart }) => {
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card p='16px'>
      <CardBody>
        <Flex direction='column' w='100%'>
          {chart}
          <Flex direction='column' mt='24px' mb='36px' alignSelf='flex-start'>
            <Text fontSize='lg' color={textColor} fontWeight='bold' mb='6px'>
              {title}
            </Text>
            <Text fontSize='md' fontWeight='medium' color='gray.400'>
            <Text
              as='span'
              color={"green.400"}
              fontWeight='bold'>
              {`20%`} more
            </Text>{" "}
            than last month
          </Text>
          </Flex>
          <SimpleGrid gap={{ sm: "12px" }} columns={4}>
            <ChartStatistics
              title={"Attendees"}
              amount={"50"}
              percentage={20}
              icon={<Icon h={"0.8rem"} w={"0.8rem"} as={FaUser} color={iconBoxInside}/>}
              showProgress={false}
            />
            <ChartStatistics
              title={"Volunteers"}
              amount={16}
              percentage={16}
              icon={<Icon h={"0.8rem"} w={"0.8rem"} as={FaHandshake} color={iconBoxInside}/>}
              showProgress={false}
            />
            <ChartStatistics
              title={"Clicks"}
              amount={34}
              percentage={80}
              icon={<RocketIcon h={"15px"} w={"15px"} color={iconBoxInside}/>}
              showProgress={false}
            />
            <ChartStatistics
              title={"Popularity"}
              amount={20}
              percentage={30}
              icon={<Icon h={"0.8rem"} w={"0.8rem"} as={FaHandshake} color={iconBoxInside}/>}
              showProgress={false}
            />
            
          </SimpleGrid>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default UserGraph;
