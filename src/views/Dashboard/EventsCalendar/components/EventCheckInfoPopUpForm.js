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
    Select,
    useToast,
    Image,
  } from "@chakra-ui/react";
  import React from "react";
import background from "../../../../assets/img/modal.jpg";
import qrcode from "../../../../assets/img/qrcode.png";
import { useState } from "react";
import relevantImage from "../../../../assets/img/diwali1.jpg";


const EventCheckInfoPopUpForm = ({ isOpen, onClose, event, selectedSlots, selectedTasks, handleSlotChange, handleTaskChange, handleSubmit, handleRSVPOut }) => {
    const textColor = useColorModeValue("gray.800", "white");
    const toast = useToast();
    const [completedTasks, setCompletedTasks] = useState({});

    const handleTaskCompletionChange = (task) => (event) => {
        const value = event.target.value;
        setCompletedTasks({
          ...completedTasks,
          [task]: value,
        });
    
        if (value === "completed") {
          toast({
            title: "Congrats! Notification sent to Zubin Admins.",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top-right",
          });
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
            <ModalOverlay />
            <ModalContent 
                p={6} 
                maxW="120vh" 
                minH = "90vh"
                // position="relative" 
                // _before={{
                //     content: '""',
                //     position: "absolute",
                //     top: 0,
                //     left: 0,
                //     width: "100%",
                //     height: "100%",
                //     backgroundImage: `url(${background})`,
                //     backgroundSize: "cover",
                //     backgroundPosition: "center",
                //     opacity: 0.7, 
                //     zIndex: -1, 
                //     borderRadius: "inherit", 
                // }}
                borderRadius={12}
            >
                {event.attendStatus === true && (
                    <Box bg="#FFD147" py={2} px={8} mt={5} borderRadius={12} ml={5} mr={5}>
                        <Flex justify="space-between" align="center">
                            <Text fontSize="md" fontWeight="bold" color="gray.800">
                                Make sure to complete your training and have fun!
                            </Text>
                            <Text fontSize="md" fontWeight="bold" color="gray.800">
                                A Zubin Foundation Exclusive Event
                            </Text>
                        </Flex>
                    </Box>
                )}
                <ModalHeader>
                    <Flex justify="space-between" align="center">
                        {/* Left side: Event details */}
                        <Box flex="3">
                        <Text fontSize="3xl" fontWeight="bold" color="#a36b03" pb={0}>
                            {event.eventName} - Attending!
                        </Text>
                        <Text fontSize="xl" color={textColor} pb={0}>
                            {event.dateTimeStart} - {event.dateTimeEnd}
                        </Text>
                        <Text fontSize="xl" color="gray.500">
                            {event.location} 
                        </Text>
                        <Button
                            as="a"
                            href="https://maps.app.goo.gl/C2KHvnXYBCUVcwPu8"
                            target="_blank"
                            rel="noopener noreferrer"
                            bg="#FFD147"
                            size="sm"
                            variant="solid"
                            marginTop={3}
                            color="black"
                            >
                            View on Map
                            </Button>
                        </Box>

                        {/* Right side: Image */}
                        <Image 
                        src={relevantImage} 
                        alt="Event" 
                        boxSize="150px"  // Adjust the size of the image
                        objectFit="cover"  // Adjust the image fitting
                        borderRadius="12px"
                        flex="1"
                        />
                    </Flex>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box maxH="60vh" overflowY="auto" mt="-3">
                        <Text fontSize="lg" color={textColor} mb={4}>
                            {event.eventDescription && (
                                <Box mb={4}>
                                    <StatLabel fontSize="xl" fontWeight="bold" pb={2} color="#a36b03">
                                        Event Details:
                                    </StatLabel>
                                    <Box mb={4} dangerouslySetInnerHTML={{ __html: event.eventDescription }} />
                                </Box>
                            )}
                        </Text>
                        { event.userType === "volunteer" &&
                            <Box ml={2}>
                                <StatLabel fontSize='xl' fontWeight='bold' mt={4} color="#a36b03">
                                    Training Videos:
                                </StatLabel>
                                <StatLabel fontSize='md' fontWeight='' mb={2}>
                                    Hey, thanks for helping us out! We look forward to having you. Before you get started, please watch the training materials below to get integrated into our system!
                                </StatLabel>
                                <Stack spacing={2} mt={2}>
                                    {event.trainingMaterials.map((material, index) => (
                                        <Button
                                            key={index}
                                            as="a"
                                            href={material}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            bg="#FFD147"
                                            size="sm"
                                            variant="outline"
                                        >
                                            Watch Training Video {index + 1}
                                        </Button>
                                    ))}
                                </Stack>

                                {/* Selected Tasks and Time Slots */}
                                <StatLabel fontSize='xl' fontWeight='bold' mt={4}>
                                    Assigned Tasks:
                                </StatLabel>
                                <StatLabel fontSize='md' fontWeight='' mt={0}>
                                    Please find your delegated tasks below! We try our best to match you to the tasks you are interested in and to your available time slots. Make sure to have fun!
                                </StatLabel>

                                <Stack spacing={4} mt={2}>
                                    {event.delegatedTasks.map((taskInfo, index) => (
                                    <Box key={index} p={4} border="1px" borderColor="gray.800" borderRadius="md">
                                        <Text fontSize="lg" fontWeight="bold">
                                            {taskInfo.task}
                                        </Text>
                                        <Text fontSize="md" color="gray.800" fontWeight="bold" mb={4}>
                                            {taskInfo.startTime} - {taskInfo.endTime}
                                        </Text>
                                        
                                        <Text fontSize="md" color="gray.800" mb={4}>
                                            {taskInfo.taskDescription}
                                        </Text>
                                        {taskInfo.task === "Registration" && 
                                                <Box display="flex" justifyContent="left" mb={4}>
                                                    <img src={qrcode} alt="QR Code" width="250px" height="250px" />
                                                </Box>
                                        }
                                        <Select
                                            mt={2}
                                            placeholder="Mark task completion status"
                                            value={completedTasks[taskInfo.task] || "Incomplete"}
                                            onChange={handleTaskCompletionChange(taskInfo.task)}
                                            borderColor="gray.800"
                                            bg={completedTasks[taskInfo.task] === "completed" ? "green.200" : "white"}
                                        >
                                            <option value="incomplete">Χ Incomplete</option>
                                            <option value="completed"> ✓ Completed</option>
                                        </Select>
                                    </Box>
                                    ))}
                                </Stack>
                            </Box>
                        }
                        {event.userType === "community" && (
                        <Button
                            mt={4}
                            colorScheme="red"
                            onClick={handleRSVPOut}  // Call the function to RSVP out
                        >
                            RSVP Out of Event
                        </Button>
                        )}
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
  
export default EventCheckInfoPopUpForm;
