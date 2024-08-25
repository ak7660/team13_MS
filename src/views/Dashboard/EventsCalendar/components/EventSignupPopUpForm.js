import {
    Box,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    Checkbox,
    Stack,
    StatLabel,
    Text,
    useColorModeValue,
    Flex,
  } from "@chakra-ui/react";
  import React from "react";
import background from "../../../../assets/img/modal.jpg"

const EventSignupPopUpForm = ({ isOpen, onClose, event, selectedSlots, selectedTasks, handleSlotChange, handleTaskChange, handleSubmit }) => {
    const textColor = useColorModeValue("gray.800", "white");
    return (
        <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside" >
        <ModalOverlay />
        <Box bg="yellow.400" py={2} px={4}>
                <Flex justify="flex-end">
                    <Text fontSize="sm" fontWeight="bold" color="gray.800">
                    A Zubin Foundation Exclusive Event
                    </Text>
                </Flex>
            </Box>
        <ModalContent 
            p={6} 
            maxW="120vh" 

            position="relative" // Ensure proper layering of content and background
            _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.7, // Adjust the opacity of the background image
                zIndex: -1, // Place it behind the content
                borderRadius: "inherit", // Ensure rounded corners match the modal
            }}
        >
            {
                event.attendStatus === false &&
                    <Box bg="#90CEF4" py={2} px={8} mt={5} borderRadius={12} ml={5} mr={5}>
                        <Flex justify="space-between" align="center">
                            <Text fontSize="md" fontWeight="bold" color="gray.800">
                            Seats Available. Book Now!
                            </Text>
                            <Text fontSize="md" fontWeight="bold" color="gray.800">
                            A Zubin Foundation Exclusive Event
                            </Text>
                        </Flex>
                    </Box>
            }
            {
                event.attendStatus === true &&
                    <Box bg="yellow.400" py={2} px={8} mt={5} borderRadius={12} ml={5} mr={5}>
                        <Flex justify="space-between" align="center">
                            <Text fontSize="md" fontWeight="bold" color="gray.800">
                                Make sure do your training and have fun!
                            </Text>
                            <Text fontSize="md" fontWeight="bold" color="gray.800">
                            A Zubin Foundation Exclusive Event
                            </Text>
                        </Flex>
                    </Box>
            }
            <ModalHeader>
            <Text fontSize="3xl" fontWeight="bold" color="blue.400" pb={4}>
                {event.eventName} - Available for Sign Up!
            </Text>
            <Text fontSize="xl" color={textColor} pb={0}>
                {event.dateTimeStart} - {event.dateTimeEnd}
            </Text>
            <Text fontSize="xl" color="gray.500">
                {event.location}
            </Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Box maxH="60vh" overflowY="auto">
                <Text fontSize="lg" color={textColor} mb={4}>
                {event.eventDescription && (
                    <Box mb={4}>
                    <StatLabel fontSize="xl" fontWeight="bold" pb={2}>
                        Event Details:
                    </StatLabel>
                    <Box mb={4} dangerouslySetInnerHTML={{ __html: event.eventDescription }} />
                    </Box>
                )}
                </Text>

                {
                    event.userType === "volunteer" &&
                        <Box ml={2}>
                        <StatLabel fontSize='xl' fontWeight='bold'>
                            Available Time Slots:
                        </StatLabel>
                        <Stack spacing={2} mt={1}>
                            {event.availableTimeSlots.map((slot, index) => (
                            <Checkbox
                                key={index}
                                isChecked={selectedSlots.includes(slot)}
                                onChange={() => handleSlotChange(slot)}
                                fontSize="lg"
                                borderColor="black"
                            >
                                <Text fontSize="lg">  
                                    {slot.startTime} - {slot.endTime}
                                </Text>
                                {/* {slot.startTime} - {slot.endTime} */}
                            </Checkbox>
                            ))}
                        </Stack>
                        <StatLabel fontSize='xl' fontWeight='bold' mt={4}>
                            Available Tasks:
                        </StatLabel>
                        <Stack spacing={2} mt={2}>
                            {event.taskTypes.map((task, index) => (
                            <Checkbox
                                key={index}
                                isChecked={selectedTasks.includes(task)}
                                onChange={() => handleTaskChange(task)}
                                borderColor="black"
                            >
                                <Text fontSize="lg">  
                                    {task}
                                </Text>
                            </Checkbox>
                            ))}
                        </Stack>
                </Box>
                }
            </Box>
            </ModalBody>
            <ModalFooter>
            <Button bg="#90CEF4" onClick={handleSubmit} w="20vh">
                Sign Up
            </Button>
            </ModalFooter>
        </ModalContent>
        </Modal>
    );
};
  
export default EventSignupPopUpForm;
  