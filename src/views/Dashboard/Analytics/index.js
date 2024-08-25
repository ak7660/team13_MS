import { Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import EventCard from "./components/EventCard";
import EventAnalytics from "./components/EventAnalytics";
import Navbar from "./components/Navbar";
import GeneralAnalytics from "./components/GeneralAnalytics";
import DiwaliImage from "assets/img/EventDiwali.png";
import ChaiImage from "assets/img/chai.png";


const Analytics = () => {
  const events = [
    {
      name: "Chai Tea Meet Up Event",
      image: ChaiImage,
      startTime: "17/05/2024",
      endTime: "18/05/2024",
      location: "Wan Chai",
      rating: 4.3,
      attendees: 63,
      volunteers: 7,
      numOfReviews: 20,
    },
    {
      name: "Diwali Celebration Event",
      image: DiwaliImage,
      startTime: "17/05/2024",
      endTime: "18/05/2024",
      location: "Wan Chai",
      rating: 4.2,
      attendees: 52,
      volunteers: 5,
      numOfReviews: 20,
    },
    {
      name: "Chai Tea Meet Up Event",
      image: "https://via.placeholder.com/150",
      startTime: "17/05/2024",
      endTime: "18/05/2024",
      location: "Wan Chai",
      rating: 4.2,
      attendees: 52,
      volunteers: 7,
      numOfReviews: 20,
    },
    {
      name: "Chai Tea Meet Up Event",
      image: "https://via.placeholder.com/150",
      startTime: "17/05/2024",
      endTime: "18/05/2024",
      location: "Wan Chai",
      rating: 4.2,
      attendees: 52,
      volunteers: 7,
      numOfReviews: 20,
    },
  ];

  const [selectedAnalytics, setSelectedAnalytics] = React.useState(0);

  const [selectedEventIndex, setSelectedEventIndex] = React.useState(0);
  
  return (
    <div>
      <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
        <Navbar
          selectedAnalytics={selectedAnalytics}
          setSelectedAnalytics={setSelectedAnalytics}
        />
        {selectedAnalytics === 0 ? (
          <GeneralAnalytics />
        ) : (
          <Grid templateColumns="30% 70%" gap="20px">
            <GridItem
              display="flex"
              flexDirection="column"
              alignItems="center"
              p="1px"
            >
              <Grid
                gap="30px"
                w="100%"
                h="40rem"
                overflow="scroll"
                pb="20px"
                px="15px"
                overflowX="hidden"
                overflowY="auto"
                css={{
                  "&::-webkit-scrollbar": {
                    width: "5px",
                    visibility: "hidden",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#a0aec0",
                    borderRadius: "5px",
                  },
                  "&::-webkit-scrollbar-thumb:hover": {
                    backgroundColor: "#718096",
                    borderRadius: "5px",
                  },
                  "&:hover::-webkit-scrollbar": {
                    visibility: "visible",
                  },
                  "&::-webkit-scrollbar": {
                    visibility: "hidden",
                  },
                }}
              >
                {events.map((event, index) => (
                  <GridItem
                    key={index}
                    onClick={() => setSelectedEventIndex(index)}
                    cursor="pointer"
                    justifyContent="flex-end"
                    alignContent="flex-end"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: index === selectedEventIndex ? 1 : 0.5,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <EventCard
                        data={event}
                        selected={index === selectedEventIndex}
                      />
                    </motion.div>
                  </GridItem>
                ))}
              </Grid>
            </GridItem>
            <GridItem
              h="40rem"
              overflow="scroll"
              overflowX="hidden"
              pb="20px"
              px="15px"
              overflowY="auto"
              css={{
                "&::-webkit-scrollbar": {
                  width: "2px",
                  visibility: "hidden",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#a0aec0",
                  borderRadius: "5px",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  backgroundColor: "#718096",
                  borderRadius: "5px",
                },
                "&:hover::-webkit-scrollbar": {
                  visibility: "visible",
                },
                "&::-webkit-scrollbar": {
                  visibility: "hidden",
                },
              }}
            >
              <EventAnalytics data={events[selectedEventIndex]} />
            </GridItem>
          </Grid>
        )}
      </Flex>
    </div>
  );
};

export default Analytics;
