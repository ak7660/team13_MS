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

// data includes:
// name, image, startDay, endDay, location, rating, numOfReviews
const EventCard = ({ data, selected }) => {
  const textColor = useColorModeValue("gray.700", "white");
  const iconBoxInside = useColorModeValue("white", "white");

  data = {
    name: "Chai Tea Meet Up Event",
    image: "https://via.placeholder.com/150",
    startTime: "17/05/2024",
    endTime: "18/05/2024",
    location: "Wan Chai",
    rating: 4.2,
    numOfReviews: 20,
  };

  return (
    <Card p="0px" overflowX={{ sm: "scroll", xl: "hidden" }} maxWidth="30rem" w="100%" boxShadow={selected ? "xl" : "lg"}>
      <Image
        src={peopleImage}
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
              title={"Ratings"}
              amount={"2,400$"}
              percentage={30}
              icon={<StarIcon h={"0.8rem"} w={"0.8rem"} color={iconBoxInside} />}
            />
            <EventCardStatistics
              title={"Attendees"}
              amount={"32,984"}
              percentage={20}
              icon={<StarIcon h={"0.8rem"} w={"0.8rem"} color={iconBoxInside} />}
            />
            <EventCardStatistics
              title={"Volunteers"}
              amount={"2.42m"}
              percentage={80}
              icon={<StarIcon h={"0.8rem"} w={"0.8rem"} color={iconBoxInside} />}
            />
            
          </Flex>
        </Flex>
      </CardHeader>
    </Card>
  );
};

export default EventCard;
