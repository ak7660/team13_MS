// Chakra imports
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Flex,
    Image,
    Text,
    Stack,
    useColorModeValue,
} from "@chakra-ui/react";
import { DeleteIcon , EditIcon } from '@chakra-ui/icons'
import React from "react";

const EventCard = ({  dateTimeString, name, numOfVolunteer, quotaVolunteer, numOfParticipant, quotaParticipant, location, onEdit }) => {
    // Chakra color mode
    console.log(name)
    const textColor = useColorModeValue("gray.700", "white");
    const getFormattedDate = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const day = date.getDate();
        return day;
    };
    
    const getFormattedMonth = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const month = date.getMonth();
        const monthNames = [
            "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
            "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
        ];
        return monthNames[month];
    };
    
    const date = getFormattedDate(dateTimeString);
    const month = getFormattedMonth(dateTimeString);
  
    return (
      <Flex mb={5}>
        <Box mb='20px' position='relative' borderRadius='15px' marginX={5} marginY={4}>
          <Flex direction='column' alignItems='center'>
            <Text fontSize='sm' color='yellow.400' fontWeight='600'>
              {month}
            </Text>
            <Text fontSize='xl' color='gray.500' fontWeight='600'>
              {date}
            </Text>
          </Flex>
        </Box>
        <Flex direction='column' marginLeft={2}>
            <Text fontSize='md' color='gray.500' fontWeight='600'>
                {name}
            </Text>
            <Text fontSize='sm' color='gray.500' fontWeight='400'>
                {location}
            </Text>
            <Text fontSize='sm' color='gray.500' fontWeight='400'>
                Volunteers: {numOfVolunteer} / {quotaVolunteer}
            </Text>
            <Text fontSize='sm' color='gray.500' fontWeight='400'>
                Participants: {numOfParticipant} / {quotaParticipant}
            </Text>
        </Flex>
        <Stack direction="row" marginLeft="auto" marginTop={2} marginRight={5}>
            <Button leftIcon={<DeleteIcon />} colorScheme="red" variant="ghost">
                Delete
            </Button>
            <Button leftIcon={<EditIcon />} colorScheme="gray" variant="ghost" onClick={onEdit}>
                Edit
            </Button>
        </Stack>
      </Flex>
    );
};
  
 export default EventCard;