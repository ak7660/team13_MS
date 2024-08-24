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
import img_2 from 'assets/img/2.jpeg';
import img_3 from 'assets/img/3.webp';
import img_4 from 'assets/img/4.png';
import img_5 from 'assets/img/5.jpg';
import img_6 from 'assets/img/6.webp';
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
import ActiveUsers from "./components/ActiveUsers";
import BuiltByDevelopers from "./components/BuiltByDevelopers";
import MiniStatistics from "./components/MiniStatistics";
import OrdersOverview from "./components/OrdersOverview";
import Projects from "./components/Projects";
import { useHistory } from 'react-router-dom';

export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");

  const minor = [
    { title: "Diwali Celebration Event", attendees: "50", imageId: img_1, description: "Celebrate Diwali with us at this event dedicated to promoting cultural diversity and inclusivity.", distance: "0.1" },
    { title: "Women Empowerment Workshop", attendees: "25", imageId: img_2, description: "Join our workshop aimed at empowering women in various aspects of life and work.", distance: "0.8" },
    { title: "1 on 1 Consultation for Ethnic Minorities", attendees: "15", imageId: img_3, description: "Participate in personalized consultations tailored to the needs of ethnic minority individuals.", distance: "1.3" },
  ]
  const my_event = [

    { title: "Cultural Exchange Program for Diversity", attendees: "30", imageId: img_4, description: "Engage in our cultural exchange program designed to foster understanding and appreciation for diverse ethnic backgrounds.", distance: "2.4" },
    { title: "Diversity in Tech Panel Discussion", attendees: "20", imageId: img_5, description: "Join our panel discussion focusing on diversity in the tech industry and ways to promote inclusivity.", distance: "9.8" },
    { title: "Minority Business Networking Event", attendees: "40", imageId: img_6, description: "Network with entrepreneurs and professionals from minority communities to foster collaboration and growth.", distance: "18.4" },
  ];
  const history = useHistory();

  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'>
        <MiniStatistics
          title={"Events"}
          amount={"10 events near you"}
          percentage={55}
          icon={<ClockIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Joining"}
          amount={"2"}
          percentage={8}
          icon={<CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <button onMouseDown={() => history.push('/admin/leaderboard')}>
          <MiniStatistics
            title={"You have feedback to complete"}
            amount={"5"}
            percentage={-14}
            color={'#90cef4'}
            icon={<DocumentIcon h={"24px"} w={"24px"} color={'#90cef4'}
            />}
          />
        </button>

        <MiniStatistics
          title={"Today's Users"}
          amount={"230"}
          percentage={5}
          icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />

      </SimpleGrid>

      <SimpleGrid columns={2} gap={20}>
        <Box>
          <Text fontSize='xx-large' color='black.100' fontWeight='bold' marginTop={10}>Trending events</Text>

          <Grid
            templateColumns={{ sm: '1fr', md: "1fr", lg: "1fr" }}
            templateRows={{ md: "1fr auto", lg: "1fr" }}
            my='26px'
            gap='24px'>

            {my_event.map((event) => {
              return (<BuiltByDevelopers
                title={event.title}
                name={event.name}
                description={
                  event.description
                }
                distance={`${event.distance} km away from you`}
                image={
                  <Image
                    width={300}
                    height={300}
                    objectFit='cover'
                    borderRadius='30'
                    src={event.imageId}
                    minWidth={{ md: "50px" }}
                  />
                }
              />);
            })}
          </Grid>
        </Box>

        <Box>
          <Text fontSize='xx-large' color='black.100' fontWeight='bold' marginTop={10}>Embracing Diversity</Text>

          <Grid
            templateColumns={{ sm: '1fr', md: "1fr", lg: "1fr" }}
            templateRows={{ md: "1fr auto", lg: "1fr" }}
            my='26px'
            gap='24px'>

            {minor.map((event) => {
              return (<BuiltByDevelopers
                title={event.title}
                name={event.name}
                description={
                  event.description
                }
                distance={`${event.distance} km away from you`}
                image={
                  <Image
                    width={300}
                    height={300}
                    objectFit='cover'
                    borderRadius='30'
                    src={event.imageId}
                    minWidth={{ md: "50px" }}
                  />
                }
              />);
            })}
          </Grid>
        </Box>

      </SimpleGrid>

      {/* <Grid
        templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "1fr 1fr" }}
        templateRows={{ sm: "1fr", md: "1fr", lg: "1fr" }}
        gap='24px' marginTop={10}>
        <Projects
          title={"Feedback Ranking"}
          amount={30}
          captions={["Feedbacks", "Ranking"]}
          data={dashboardTableData}
        />
      </Grid> */}

    </Flex >
  );
}
