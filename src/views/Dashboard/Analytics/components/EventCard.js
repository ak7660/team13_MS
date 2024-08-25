// Chakra imports
import {
  Flex,
  Icon,
  Image,
  SimpleGrid,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import DashboardTableRow from "components/Tables/DashboardTableRow";
import React from "react";
import { startTransition } from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { StarIcon } from "@chakra-ui/icons";
import { GPSIcon } from "components/Icons/Icons";
import peopleImage from "assets/img/people-image.png";
import EventCardStatistics from "./EventCardStatistics";
import { FaHandshake, FaUser } from "react-icons/fa";

// data includes:
// name, image, startDay, endDay, location, rating, numOfReviews
const EventCard = ({ data, selected }) => {
  const textColor = useColorModeValue("gray.700", "white");
  const iconBoxInside = useColorModeValue("white", "white");

  return (
    <Card p="0px" overflowX={{ sm: "scroll", xl: "hidden" }} maxWidth="30rem" w="100%" boxShadow={selected ? "xl" : "lg"}>
      <Image
        src={data.image}
        alt="chakra image"
        w="100%"
        h="8rem"
        objectFit="cover"
      />
      <CardHeader p="20px">
        <Flex direction="column" w="100%">
          <Flex align="center">
            <Text fontSize="0.7rem" color="gray.400" fontWeight="normal">
              {data.startTime} - {data.endTime}
            </Text>
          </Flex>
          <Text fontSize="1.2rem" color={textColor} fontWeight="bold" pb="">
            {data.name}
          </Text>
          <Flex gap="5px" align="center" pb="8px">
            <Icon as={GPSIcon} color="yellow.400" w="0.8rem" />
            <Text fontSize="0.8rem" color="gray.400" fontWeight="normal">
              {data.location}
            </Text>
          </Flex>
          <Flex w="100%" justifyContent="space-between" alignItems="center" wrap="wrap" >
          <EventCardStatistics
              title={"Rating"}
              amount={data.rating}
              percentage={30}
              icon={<StarIcon h={"0.8rem"} w={"0.8rem"} color={iconBoxInside} />}
              showProgress={false}
            />
            <EventCardStatistics
              title={"Attendees"}
              amount={data.attendees}
              percentage={20}
              icon={<Icon h={"0.8rem"} w={"0.8rem"} as={FaUser} color={iconBoxInside} />}
              showProgress={false}
            />
            <EventCardStatistics
              title={"Volunteers"}
              amount={data.volunteers}
              percentage={80}
              icon={<Icon h={"0.8rem"} w={"0.8rem"} as={FaHandshake} color={iconBoxInside} />}
              showProgress={false}
            />
            
          </Flex>
        </Flex>
      </CardHeader>
    </Card>
  );
};

export default EventCard;
