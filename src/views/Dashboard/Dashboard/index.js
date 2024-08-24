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
import img_2 from 'assets/img/2.jpg';
import img_3 from 'assets/img/3.jpg';
import img_4 from 'assets/img/4.jpg';
import img_5 from 'assets/img/5.jpg';
import img_6 from 'assets/img/6.jpg';
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


export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");

  const my_event = [
    { title: "Morgan Stanley Volunteer Event", attendees: "10", imageId: img_1, description: "Join us in volunteering at the Morgan Stanley event to support minorities in Hong Kong.", distance: "0.1" },
    { title: "Goldman Sachs Community Outreach", attendees: "15", imageId: img_2, description: "Participate in our community outreach program organized by Goldman Sachs to help marginalized communities in Hong Kong.", distance: "0.8" },
    { title: "Citibank Charity Fundraiser", attendees: "20", imageId: img_3, description: "Support our charity fundraiser organized by Citibank to raise funds for minority groups in Hong Kong.", distance: "1.3" },
    { title: "JP Morgan Mentoring Program", attendees: "12", imageId: img_4, description: "Get involved in our mentoring program initiated by JP Morgan to empower underprivileged individuals in Hong Kong.", distance: "2.4" },
    { title: "HSBC Education Drive", attendees: "8", imageId: img_5, description: "Contribute to our education drive led by HSBC to provide educational resources to minority students in Hong Kong.", distance: "9.8" },
    { title: "UBS Healthcare Initiative", attendees: "10", imageId: img_6, description: "Partake in the healthcare initiative organized by UBS to improve healthcare access for minority populations in Hong Kong.", distance: "18.4" },
  ];


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
        <MiniStatistics
          title={"Your feedback ranking"}
          amount={"5"}
          percentage={-14}
          icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Today's Users"}
          amount={"230"}
          percentage={5}
          icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />

      </SimpleGrid>

      <Text fontSize='xx-large' color='black.100' fontWeight='bold' marginTop={10}>Trending</Text>

      <Grid
        templateColumns={{ sm: '1fr', md: "1fr 1fr", lg: "1fr 1fr" }}
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

      <Grid
        templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "1fr 1fr" }}
        templateRows={{ sm: "1fr", md: "1fr", lg: "1fr" }}
        gap='24px' marginTop={10}>
        <Projects
          title={"Feedback Ranking"}
          amount={30}
          captions={["Feedbacks", "Ranking"]}
          data={dashboardTableData}
        />
      </Grid>

    </Flex>
  );
}
