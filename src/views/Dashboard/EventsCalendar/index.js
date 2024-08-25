// Chakra imports
import {
  Box,
  Flex,
  Grid,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css"; // Import the CSS
import CustomCalendar from "./components/CustomCalendar";
import {events as initialEvents} from "./events";

export default function EventsCalendar() {
  const iconBoxInside = useColorModeValue("white", "white");
  const [events, setEvents] = useState(initialEvents);

  const handleUpdateAttendStatus = (eventId, newStatus) => {
    setEvents((prevEvents) =>
        prevEvents.map((evt) =>
            evt.eventId === eventId ? { ...evt, attendStatus: newStatus } : evt
        )
    );
  };  

  return (
    <Flex flexDirection='column' pt={{ base: "80px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing=''>
        <Box gridColumn="span 4" textAlign="celeftnter">
          <Text fontSize="3xl" fontWeight="bold" color="#d19e06">
            Events Dashboard
          </Text>
          <Text fontSize="lg" fontWeight="" color="#28271F" mb="4">
            Find events near you from our exclusive calendar. Sign up to help in our events and be at the top of our leaderboards! 
          </Text>
          {/* <Text fontSize="lg" fontWeight="" color="#28271F">
            Find your delegated tasks for existing events and mark them as complete when done to earn points!
          </Text> */}
          <Flex alignItems="center" justifyContent="space-between" mt={1} border="#FFD147 1px solid" borderRadius={12} pl={3} pr={5} pt={2} pb={2}>
            <Box>
              <Text fontSize="xl" fontWeight="bold" color="yellow.600">
                Month: August 2024
              </Text>
            </Box>
            <Flex alignItems="center">
              <Box display="flex" alignItems="center" mr={4}>
                <Box width="15px" height="15px" bg="green.300" mr={2} borderRadius="md"></Box>
                <Text color="#28271F">Attending</Text>
              </Box>
              <Box display="flex" alignItems="center">
                <Box width="15px" height="15px" bg="blue.300" mr={2} borderRadius="md"></Box>
                <Text color="#28271F">Open</Text>
              </Box>
            </Flex>
            <Flex>
              <Box
                as="button"
                p={2}
                borderRadius={12}
                bg="#FFD147"
                color="#28271F"
                mr={2}
                minW={40}
              >
                ← Previous
              </Box>
              <Box
                as="button"
                p={2}
                borderRadius={12}
                bg="#FFD147"
                color="#28271F"
                minW={40}
              >
                Next →
              </Box>
            </Flex>
          </Flex>
        </Box>
      </SimpleGrid>
      <Grid
        templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my="-55px"
        gap="24px"
      >
        <Box width="100%" height="auto" paddingBottom={10}>
        <CustomCalendar
          events={events.map(event => ({
            ...event,
            updateAttendStatus: (newStatus) => handleUpdateAttendStatus(event.eventId, newStatus),
          }))}
        />
        </Box>
      </Grid>
    </Flex>
  );
}
