// Chakra imports
import {
    Flex,
    Icon,
    Image,
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
  
  // data includes:
  // name, image, startDay, endDay, location, rating, numOfReviews
  const EventCard = ({ data }) => {
    const textColor = useColorModeValue("gray.700", "white");
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
      <Card p="0px" overflowX={{ sm: "scroll", xl: "hidden" }} maxWidth="12rem">
        <Image
                src={peopleImage}
                alt='chakra image'
                w="100%"
                h="auto" // Maintain aspect ratio
                maxHeight="150px" // Set a maximum height
                objectFit="cover"
              />
        <CardHeader p="12px 10px 14px 10px">
          <Flex direction="column">
            <Flex align="center">
              <Text fontSize="10px" color="gray.400" fontWeight="normal">
                {data.startTime} - {data.endTime}
              </Text>
            </Flex>
            <Text fontSize="12px" color={textColor} fontWeight="bold" pb="">
              {data.name}
            </Text>
            <Flex gap="5px" align="center">
              <Icon as={GPSIcon} color="yellow.400" w="0.7rem" />
              <Text fontSize="10px" color="gray.400" fontWeight="normal">
                {data.location}
              </Text>
            </Flex>
            <Flex gap="5px" align="center">
              <Icon as={StarIcon} color="yellow.400" w="0.7rem" />
              <Text fontSize="10px" color="gray.400" fontWeight="normal">
                {data.rating} ({data.numOfReviews})
              </Text>
            </Flex>
          </Flex>
        </CardHeader>
      </Card>
    );
  };
  
  export default EventCard;