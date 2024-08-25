// Chakra imports
import { Flex, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import EventDiwali from "assets/img/EventDiwali.png";
import ProfileBgImage from "assets/img/ProfileBackground.png";
import React from "react";
import { eventsData } from "variables/general";
import { PencilIcon } from "chakra-ui-ionicons";

import { DocumentIcon, PeopleIcon, FolderOpenIcon } from "chakra-ui-ionicons";

// Components imports
import VolunteerForums from "./components/VolunteerForums";
import ParticipantsReminder from "./components/ParticipantsReminder";
import Header from "./components/Header";
import ProjectOverview from "./components/ProjectOverview";
import ParticipantsEnquiries from "./components/ParticipantsEnquiries";
import CardEvents from "./components/CardEvents";

function VolunteerParticipant() {
  return (
    <Grid alignContent="space-between" gap="20px" height="100%">
      <VolunteerForums />
      <ParticipantsReminder />
      <ParticipantsEnquiries />
    </Grid>
  );
}

function TaskDelegation() {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );

  return (
    <Flex direction="column" gap="8" marginTop={"8%"}>
      <Flex gap={2}>
        {eventsData.map((event, index) => {
          const formatDate = (dateString) => {
            const date = new Date(dateString);
            const months = [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ];
            const day = date.getDate();
            const month = months[date.getMonth()];
            const year = date.getFullYear();
            return `${day} ${month} ${year}`;
          };

          const date = formatDate(event.dateTimeStart);

          return (
            <CardEvents
              key={index}
              title={event.eventName}
              amount={date}
              icon={<PencilIcon h={"24px"} w={"24px"} color={"white"} />}
              taskIdx={index}
            />
          );
        })}
      </Flex>

      <Header
        backgroundHeader={ProfileBgImage}
        backgroundProfile={bgProfile}
        avatarImage={EventDiwali}
        name={"Diwali Day Celebration 2024"}
        email={"30 October 2024"}
        desc={
          "Celebrate your Diwali with us! Come help us to arrange the event and meet the likeminded people!"
        }
        tabs={[
          {
            name: "OVERVIEW",
            //icon: <FaCube w="100%" h="100%" />,
            icon: <DocumentIcon color="{textColor}" />,
          },
          {
            name: "TEAMS",
            icon: <PeopleIcon color={textColor} />,
          },
          {
            name: "REQUIREMENTS",
            icon: <FolderOpenIcon color={textColor} />,
          },
        ]}
      />

      <Grid templateColumns={{ sm: "1fr", xl: "repeat(12, 1fr)" }} gap="22px">
        <GridItem colSpan={7}>
          <ProjectOverview
            title="Event Overview"
            taskDone={20}
            taskOutstanding={10}
          />
        </GridItem>

        <GridItem colSpan={5}>
          <VolunteerParticipant />
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default TaskDelegation;
