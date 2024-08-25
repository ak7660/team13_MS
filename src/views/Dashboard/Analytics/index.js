import React from "react";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import EventCard from "./components/EventCard";
import EventAnalytics from "./components/EventAnalytics";
import Navbar from "./components/Navbar";
import GeneralAnalytics from "./components/GeneralAnalytics";
import DiwaliImage from "assets/img/EventDiwali.png";
import ChaiImage from "assets/img/chai.png";
import FiestaImage from "assets/img/fiesta.png";
import FireworksImage from "assets/img/fireworks.png";

// Utility function to generate random data
const generateRandomData = (length, min, max) => {
  return Array.from(
    { length },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
};

// Utility function to generate review distribution that adds up to 100
const generateReviewDistribution = (ratings) => {
  const percentages = Array.from({ length: ratings }, () => Math.random());
  const total = percentages.reduce((acc, val) => acc + val, 0);
  return percentages.map(val => ({
    rating: ratings--,
    percentage: Math.round((val / total) * 100)
  }));
};

const Analytics = () => {
  const events = [
    {
      name: "Chai Tea Meet Up Event",
      image: ChaiImage,
      startTime: "17/05/2024",
      endTime: "17/05/2024",
      location: "Wan Chai",
      rating: 4.3,
      attendees: 63,
      volunteers: 7,
      numOfReviews: 20,
      ethnicityData: generateRandomData(5, 5, 50),
      ageData: generateRandomData(6, 5, 50),
      reviewDistribution: generateReviewDistribution(5),
      totalReviews: 45,
      overallFeedback: "The Chai Tea Meet Up Event received high praise for its welcoming atmosphere and diverse selection of teas. Attendees appreciated the well-organized nature of the event, though some noted that the service could be improved to handle peak times better. The overall feedback highlights the event's success in creating a comfortable and enjoyable environment for social interactions.",
      feedbacks: [
        {
          userImage: "https://via.placeholder.com/150?text=User1",
          userName: "Emily Davis",
          rating: 5,
          reviewText: "Wonderful event! The tea selection was diverse, and the ambiance was perfect for a social gathering.",
          timestamp: "3 hours ago",
          feedbackOptions: ["Great ambiance", "Diverse tea selection", "Friendly crowd"],
        },
        {
          userImage: "https://via.placeholder.com/150?text=User2",
          userName: "Michael Lee",
          rating: 4,
          reviewText: "Nice event, but the service was a bit slow. Still, a pleasant experience overall.",
          timestamp: "1 day ago",
          feedbackOptions: ["Good service", "Relaxing environment", "Slow service"],
        },
      ],
    },
    {
      name: "Diwali Celebration Event",
      image: DiwaliImage,
      startTime: "16/04/2024",
      endTime: "17/04/2024",
      location: "Wan Chai",
      rating: 4.1,
      attendees: 38,
      volunteers: 5,
      numOfReviews: 20,
      ethnicityData: generateRandomData(5, 5, 50),
      ageData: generateRandomData(6, 5, 50),
      reviewDistribution: generateReviewDistribution(5),
      totalReviews: 30,
      overallFeedback: "The Diwali Celebration Event was marked by vibrant cultural displays and festive activities, creating an immersive experience for all attendees. While the event was celebrated for its lively atmosphere and cultural richness, feedback suggested that the food offerings could have been more varied to cater to a wider range of tastes. Overall, the event was a successful celebration of Diwali, blending tradition with modern festivities.",
      feedbacks: [
        {
          userImage: "https://via.placeholder.com/150?text=User3",
          userName: "Aisha Patel",
          rating: 5,
          reviewText: "The celebration was lively and full of cultural richness. I enjoyed every moment!",
          timestamp: "5 hours ago",
          feedbackOptions: ["Cultural richness", "Lively atmosphere", "Great performances"],
        },
        {
          userImage: "https://via.placeholder.com/150?text=User4",
          userName: "Raj Kumar",
          rating: 3,
          reviewText: "The event was good, but the food was not up to the mark. I hope for better arrangements next time.",
          timestamp: "2 days ago",
          feedbackOptions: ["Good ambiance", "Food needs improvement", "Interesting performances"],
        },
      ],
    },
    {
      name: "Neighbourhood Fiesta",
      image: FiestaImage,
      startTime: "17/03/2024",
      endTime: "18/03/2024",
      location: "Wan Chai",
      rating: 3.8,
      attendees: 36,
      volunteers: 7,
      numOfReviews: 20,
      ethnicityData: generateRandomData(5, 5, 50),
      ageData: generateRandomData(6, 5, 50),
      reviewDistribution: generateReviewDistribution(5),
      totalReviews: 45,
      overallFeedback: "The event successfully fostered a warm and inviting environment for tea enthusiasts. The organizational aspects were generally well-received, though there were a few comments on the need for more engaging activities to enhance the overall experience. The positive aspects of the event, such as the quality of tea and the opportunity to connect with others, were frequently highlighted in the feedback.",
      feedbacks: [
        {
          userImage: "https://via.placeholder.com/150?text=User1",
          userName: "Emily Davis",
          rating: 5,
          reviewText: "Wonderful event! The tea selection was diverse, and the ambiance was perfect for a social gathering.",
          timestamp: "3 hours ago",
          feedbackOptions: ["Great ambiance", "Diverse tea selection", "Friendly crowd"],
        },
        {
          userImage: "https://via.placeholder.com/150?text=User2",
          userName: "Michael Lee",
          rating: 4,
          reviewText: "Nice event, but the service was a bit slow. Still, a pleasant experience overall.",
          timestamp: "1 day ago",
          feedbackOptions: ["Good service", "Relaxing environment", "Slow service"],
        },
      ],
    },
    {
      name: "New Year's Eve Party",
      image: FireworksImage,
      startTime: "31/05/2023",
      endTime: "31/05/2023",
      location: "Central",
      rating: 4.6,
      attendees: 20,
      volunteers: 7,
      numOfReviews: 20,
      ethnicityData: generateRandomData(5, 5, 50),
      ageData: generateRandomData(6, 5, 50),
      reviewDistribution: generateReviewDistribution(5),
      totalReviews: 45,
      overallFeedback: "The Chai Tea Meet Up Event offered a delightful experience with its carefully selected range of teas and a well-planned agenda. While the majority of feedback was positive, some attendees suggested that the event could benefit from more interactive elements. Overall, the event was appreciated for its charm and the quality of tea provided.",
      feedbacks: [
        {
          userImage: "https://via.placeholder.com/150?text=User1",
          userName: "Emily Davis",
          rating: 5,
          reviewText: "Wonderful event! The tea selection was diverse, and the ambiance was perfect for a social gathering.",
          timestamp: "3 hours ago",
          feedbackOptions: ["Great ambiance", "Diverse tea selection", "Friendly crowd"],
        },
        {
          userImage: "https://via.placeholder.com/150?text=User2",
          userName: "Michael Lee",
          rating: 4,
          reviewText: "Nice event, but the service was a bit slow. Still, a pleasant experience overall.",
          timestamp: "1 day ago",
          feedbackOptions: ["Good service", "Relaxing environment", "Slow service"],
        },
      ],
    }
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
              <motion.div
                key={selectedEventIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <EventAnalytics data={events[selectedEventIndex]} />
              </motion.div>
            </GridItem>
          </Grid>
        )}
      </Flex>
    </div>
  );
};

export default Analytics;