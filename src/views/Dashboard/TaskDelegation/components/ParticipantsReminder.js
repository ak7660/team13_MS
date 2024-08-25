// Chakra imports
import { Button, Flex, Text, useColorModeValue, Grid } from "@chakra-ui/react";
import { LogoWhatsappIcon } from "chakra-ui-ionicons";

// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React from "react";

function RemindersSection({ isScheduled, reminders }) {
  return (
    <Flex direction="column" gap="12px" mb="16px">
      <Text
        fontSize="md"
        color={isScheduled ? "gray.700" : "gray.500"}
        fontWeight="bold"
      >
        {isScheduled ? "Scheduled Reminder" : "Past Reminders"}
      </Text>
      {reminders.map((reminder) => {
        return (
          <Flex justifyContent="space-between" mb="8px">
            <Flex direction="column" maxW="60%">
              <Text
                fontSize="sm"
                color={isScheduled ? "gray.700" : "gray.500"}
                fontWeight="bold"
              >
                {reminder.title}
              </Text>
              <Text
                fontSize="xs"
                color={isScheduled ? "gray.400" : "gray.200"}
                fontWeight="400"
              >
                {reminder.content}
              </Text>
            </Flex>

            <Flex gap="4px" alignItems="center">
              <Text
                fontSize="xs"
                color={isScheduled ? "#FCA503" : "#FED147"}
                fontWeight="bold"
              >
                {isScheduled
                  ? `${reminder.date}`
                  : "Sent on " + `${reminder.date}`}
              </Text>

              <LogoWhatsappIcon color="#FED147" />
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
}

const ScheduledReminder = [
  {
    title: "Final Reminder",
    content: "It's D-1! See you at the event!",
    date: "30/08/2024",
  },
  {
    title: "Second Reminder",
    content: "Don't forget to wear your most festive attires",
    date: "27/08/2024",
  },
];

const PastReminder = [
  // {
  //   title: "Second Reminder",
  //   content: "Hi everyone! Please bring water for the event.",
  //   date: "24/08/2024",
  // },
  {
    title: "First Reminder",
    content: "Welcome everyone! Please check the rules in the website.",
    date: "22/08/2024",
  },
];

export default function ParticipantsReminder() {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card p="16px">
      <CardHeader p="12px 5px" mb="12px">
        <Text fontSize="lg" color={textColor} fontWeight="bold">
          Participants Reminders
        </Text>
      </CardHeader>

      <CardBody px="5px">
        <Flex direction="column" w="100%">
          <RemindersSection isScheduled={true} reminders={ScheduledReminder} />
          <RemindersSection isScheduled={false} reminders={PastReminder} />
          <Button
            p="0px"
            bg="transparent"
            //_hover={{ bg: "none" }}
            bgColor="#FCA503"
            //boxShadow="inset 0 0 1px 1px hsl(0deg 0% 100% / 90%), 0 20px 27px 0 rgb(0 0 0 / 5%)"
          >
            <Text fontSize="xs" color="white" fontWeight="bold" ms="6px">
              Generate New Reminder
            </Text>
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
}
