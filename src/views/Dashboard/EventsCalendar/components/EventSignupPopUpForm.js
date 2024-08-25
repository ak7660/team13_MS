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
  Image,
} from "@chakra-ui/react";
import React from "react";
import relevantImage from "../../../../assets/img/eid.jpg";
import {
  LogoInstagramIcon,
  LogoWhatsappIcon,
  LogoFacebookIcon,
} from "chakra-ui-ionicons";

const EventSignupPopUpForm = ({
  isOpen,
  onClose,
  event,
  selectedSlots,
  selectedTasks,
  handleSlotChange,
  handleTaskChange,
  handleSubmit,
}) => {
  const textColor = useColorModeValue("gray.800", "white");
  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
      <ModalOverlay />
      <Box bg="yellow.400" py={2} px={4}>
        <Flex justify="flex-end">
          <Text fontSize="sm" fontWeight="bold" color="gray.800">
            A Zubin Foundation Exclusive Event
          </Text>
        </Flex>
      </Box>
      <ModalContent p={6} maxW="120vh" borderRadius={12}>
        {event.attendStatus === false && (
          <Box
            bg="#90CEF4"
            py={2}
            px={8}
            mt={5}
            borderRadius={12}
            ml={5}
            mr={5}
          >
            <Flex justify="space-between" align="center">
              <Text fontSize="md" fontWeight="bold" color="gray.800">
                Seats Available. Book Now!
              </Text>
              <Text fontSize="md" fontWeight="bold" color="gray.800">
                A Zubin Foundation Exclusive Event
              </Text>
            </Flex>
          </Box>
        )}
        {event.attendStatus === true && (
          <Box
            bg="yellow.400"
            py={2}
            px={8}
            mt={5}
            borderRadius={12}
            ml={5}
            mr={5}
          >
            <Flex justify="space-between" align="center">
              <Text fontSize="md" fontWeight="bold" color="gray.800">
                Make sure do your training and have fun!
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
              <Text fontSize="3xl" fontWeight="bold" color="blue.400" pb={0}>
                {event.eventName} - Sign Up Now!
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
                bg="#90CEF4"
                size="sm"
                variant="solid"
                marginTop={3}
                color="black"
              >
                View on Map
              </Button>
              <Button
                bg="#90CEF4"
                color="black"
                marginTop={3}
                variant="sold"
                marginLeft={2}
              >
                <LogoInstagramIcon />
              </Button>
              <Button
                bg="#90CEF4"
                color="black"
                marginTop={3}
                variant="sold"
                marginLeft={2}
              >
                <LogoWhatsappIcon />
              </Button>
              <Button
                bg="#90CEF4"
                color="black"
                marginTop={3}
                variant="sold"
                marginLeft={2}
              >
                <LogoFacebookIcon />
              </Button>
            </Box>

            {/* Right side: Image */}
            <Image
              src={relevantImage}
              alt="Event"
              boxSize="150px" // Adjust the size of the image
              objectFit="cover" // Adjust the image fitting
              borderRadius="12px"
              flex="1.2"
            />
          </Flex>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box maxH="60vh" overflowY="auto">
            <Text fontSize="lg" color={textColor} mb={4}>
              {event.eventDescription && (
                <Box mb={4}>
                  <StatLabel
                    fontSize="xl"
                    fontWeight="bold"
                    pb={2}
                    color="blue.400"
                  >
                    Event Details:
                  </StatLabel>
                  <Box
                    mb={4}
                    dangerouslySetInnerHTML={{ __html: event.eventDescription }}
                  />
                </Box>
              )}
            </Text>

            {event.userType === "volunteer" && (
              <Box ml={2}>
                <StatLabel fontSize="xl" fontWeight="bold" color="blue.500">
                  Available Time Slots:
                </StatLabel>
                <Stack spacing={2} mt={1}>
                  {event.availableTimeSlots &&
                    event.availableTimeSlots.map((slot, index) => (
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
                <StatLabel
                  fontSize="xl"
                  fontWeight="bold"
                  mt={4}
                  color="blue.500"
                >
                  Available Tasks:
                </StatLabel>
                <Stack spacing={2} mt={2}>
                  {event.taskTypes &&
                    event.taskTypes.map((task, index) => (
                      <Checkbox
                        key={index}
                        isChecked={selectedTasks.includes(task)}
                        onChange={() => handleTaskChange(task)}
                        borderColor="black"
                      >
                        <Text fontSize="lg">{task}</Text>
                      </Checkbox>
                    ))}
                </Stack>
              </Box>
            )}
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
