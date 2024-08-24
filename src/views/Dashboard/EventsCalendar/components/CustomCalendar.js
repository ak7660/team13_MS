import {
    Flex,
    Grid,
    Box,
    Text,
  } from "@chakra-ui/react";
import React from "react";
import EventCard from "./EventCard";
  
export default function CustomCalendar({ events }) {

  const generateDaysInMonth = (month, year) => {
    const days = [];
    const date = new Date(year, month, 1);
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const daysInAugust2024 = generateDaysInMonth(7, 2024); 

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }} width="170%">
      <Grid templateColumns="repeat(7, 1fr)" gap={4}>
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <Box key={day} p={2} textAlign="center" bg="#FFD147" borderRadius={12}>
            <Text fontWeight="bold">{day}</Text>
          </Box>
        ))}

        {daysInAugust2024.map((day) => {
          const dayEvents = events.filter((event) => {
            const eventDate = new Date(event.dateTimeStartMap);
            return (
              eventDate.getDate() === day.getDate() &&
              eventDate.getMonth() === day.getMonth() &&
              eventDate.getFullYear() === day.getFullYear()
            );
          });

          return (
            <Box
              key={day}
              p={2}
              minHeight="150px"
              border="1px solid #FCA503"
              position="relative"
              borderRadius={12}
            >
              <Text fontSize="lg" mb={2}>
                {day.getDate()}
              </Text>
              {dayEvents.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </Box>
          );
        })}
      </Grid>
    </Flex>
  );
}
  