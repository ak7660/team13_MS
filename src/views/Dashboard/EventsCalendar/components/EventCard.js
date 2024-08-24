// Chakra imports
import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Stack,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React, { useState } from "react";
import EventSignupPopUpForm from "./EventSignupPopUpForm";
import EventCheckInfoPopUpForm from "./EventCheckInfoPopUpForm";

const EventCard = ({ event }) => {
  const bgColor = event.attendStatus
    ? useColorModeValue("green.200", "green.700")  // Softer green background
    : useColorModeValue("blue.200", "blue.700");  // Softer blue background
  const textColor = useColorModeValue("black.700", "white");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);

  const [openForm, setOpenForm] = useState(null);


  const handleSlotChange = (slot) => {
    setSelectedSlots((prev) =>
      prev.includes(slot)
        ? prev.filter((s) => s !== slot)
        : [...prev, slot]
    );
  };

  const handleTaskChange = (task) => {
    setSelectedTasks((prev) =>
      prev.includes(task)
        ? prev.filter((t) => t !== task)
        : [...prev, task]
    );
  };

  const handleEventClick = () => {
    if (event.attendStatus) {
      setOpenForm("checkInfo");  // Set to open EventCheckInfoPopUpForm
    } else {
      setOpenForm("signUp");  // Set to open EventSignupPopUpForm
    }
    onOpen();
  };


  const handleSubmit = () => {
    if (typeof event.updateAttendStatus === "function") {
      event.updateAttendStatus(true);  // Set the status to true
    }

    console.log("Selected Slots:", selectedSlots);
    console.log("Selected Tasks:", selectedTasks);
    onClose();
  };

  const handleRSVPOut = () => {
    if (typeof event.updateAttendStatus === "function") {
      event.updateAttendStatus(false);  // Set the status to false
    }
    console.log("RSVP'd Out of Event:", event.eventName);
    onClose();
  };

  return (
    <>
      <Card 
        minH='75px' 
        bg={bgColor}
        cursor="pointer"
        transition="transform 0.2s"
        _hover={{
          transform: "scale(1.05)", // Slight zoom on hover
        }}
        onClick={handleEventClick}
      >
        <CardBody>
          <Flex flexDirection='row' align='center' justify='center' w='100%'>
            <Stat me='auto'>
              <StatLabel
                fontSize='sm'
                color='black'
                fontWeight=''
                pb=''>
                {event.dateTimeStart} - {event.dateTimeEnd}
              </StatLabel>
              <Flex>
                <StatNumber fontSize='md' color={textColor}>
                  {event.eventName}
                </StatNumber>
              </Flex>
            </Stat>
          </Flex>
        </CardBody>
      </Card>

    {openForm === "checkInfo" && (
      <EventCheckInfoPopUpForm 
        isOpen={isOpen} 
        onClose={onClose} 
        event={event} 
        selectedSlots={selectedSlots} 
        selectedTasks={selectedTasks} 
        handleSlotChange={handleSlotChange} 
        handleTaskChange={handleTaskChange} 
        handleSubmit={handleSubmit}
        handleRSVPOut={handleRSVPOut}
      />
    )}

    {openForm === "signUp" && (
      <EventSignupPopUpForm 
        isOpen={isOpen} 
        onClose={onClose} 
        event={event} 
        selectedSlots={selectedSlots} 
        selectedTasks={selectedTasks} 
        handleSlotChange={handleSlotChange} 
        handleTaskChange={handleTaskChange} 
        handleSubmit={handleSubmit} 
      />
    )}
    </>
  );
};

export default EventCard;
