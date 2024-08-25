// Chakra imports
import {
  Flex,
  Icon,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Button,
  Box,
  Tfoot,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  Checkbox,
  Skeleton,
} from "@chakra-ui/react";

// Custom components
import React from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import TaskListTableRow from "./TaskListTableRow";
import {
  TaskListCompletedData,
  TaskListUnassignedData,
  UpdatedListUnassignedData,
  UpdatedListCompletedData,
} from "./TaskDelegationData";

import { useState, useEffect } from "react";

function DelegateAIModal({ isOpen, closeHandle, forceClose }) {
  const [choseDelegate, setChoseDelegate] = useState(false);
  const [loadedDelegation, setLoadedDelegation] = useState(false);
  const [textOnButton, setTextOnButton] = useState("Waiting");
  //const [isLoading, setIsLoading] = useState(true);

  const handleChoseDelegate = () => {
    setChoseDelegate(true);
    //setLoadedDelegation(true);
  };

  useEffect(() => {
    //setIsLoading(true);
    if (choseDelegate) {
      setTimeout(() => {
        setLoadedDelegation(true);
        setTextOnButton("Done");
        //setIsLoading(false);
      }, 2000);
    }
  }, [choseDelegate]);

  return (
    <Modal isOpen={isOpen} onClose={closeHandle}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delegate Task</ModalHeader>
        <ModalCloseButton onClick={closeHandle} />

        {!choseDelegate ? (
          <ModalBody>
            <Text fontSize="md">
              Delegate your tasks to available volunteers with our AI?
            </Text>

            <Flex direction="column" marginY="12px" gap="8px">
              {TaskListUnassignedData.map((taskData) => {
                return (
                  <Flex direction="row" gap="8px">
                    <Checkbox colorScheme="yellow" defaultChecked />
                    <Text fontWeight="medium">{taskData.task}</Text>
                  </Flex>
                );
              })}
            </Flex>
          </ModalBody>
        ) : (
          <ModalBody>
            {!loadedDelegation ? (
              <Text fontSize="md">Matching task with volunteers.....</Text>
            ) : (
              <Text fontSize="md">We found volunteers for your tasks!</Text>
            )}
            <Flex direction="column" marginY="12px" gap="8px">
              {UpdatedListUnassignedData.map((taskData) => {
                return (
                  <Skeleton isLoaded={loadedDelegation} height="32px">
                    <Flex
                      direction="row"
                      width="100%"
                      justifyContent="space-between"
                    >
                      <Text fontWeight="semibold">{taskData.task}</Text>
                      <Text color="#FCA503">{taskData.volunteer}</Text>
                    </Flex>
                  </Skeleton>
                );
              })}
            </Flex>
          </ModalBody>
        )}

        <ModalFooter>
          {!choseDelegate ? (
            <Flex
              direction="row"
              justifyContent="center"
              width="100%"
              gap="20px"
            >
              <Button
                p="0px"
                bg="transparent"
                minWidth="100px"
                bgColor="#FCA503"
                onClick={handleChoseDelegate}
              >
                <Text
                  fontSize="xs"
                  color="white"
                  fontWeight="bold"
                  width="full"
                  px="12px"
                >
                  Yes, delegate
                </Text>
              </Button>

              <Button p="0px" bg="transparent" minWidth="100px">
                <Text
                  fontSize="xs"
                  color={"gray.700"}
                  fontWeight="bold"
                  px="12px"
                  onClick={closeHandle}
                >
                  Cancel
                </Text>
              </Button>
            </Flex>
          ) : (
            <Flex direction="row" justifyContent="center" width="100%">
              <Button
                p="0px"
                bg="transparent"
                minWidth="100px"
                onClick={forceClose}
              >
                <Text
                  fontSize="xs"
                  color={"gray.700"}
                  fontWeight="bold"
                  px="12px"
                >
                  {textOnButton}
                </Text>
              </Button>
            </Flex>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default function TaskLists({ title, amount, captions, buttonValues }) {
  const textColor = useColorModeValue("gray.700", "white");
  const emailColor = useColorModeValue("gray.400", "gray.300");

  const [filter, setFilter] = useState("All");
  const [taskData, setTaskData] = useState(TaskListCompletedData);
  const [openModal, setOpenModal] = useState(false);
  const [delegatedTask, setDelegatedTask] = useState(false);

  const handleClickButton = ({ filterValue }) => {
    setFilter(filterValue);
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const forceCloseModal = () => {
    setOpenModal(false);
    setDelegatedTask(true);
  };

  useEffect(() => {
    if (filter == "Unassigned") {
      setTaskData(TaskListUnassignedData);
    } else {
      if (delegatedTask) {
        setTaskData(UpdatedListCompletedData);
      } else {
        setTaskData(TaskListCompletedData);
      }
    }
  }, [filter, delegatedTask]);

  return (
    <Box p="16px" height="100%" width="100%">
      <Flex p="20px 0px 12px 0px" width="100%">
        <Flex
          justifyContent={"space-between"}
          align="center"
          direction={"row"}
          w="100%"
        >
          <Flex direction="column">
            <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
              {title}
            </Text>

            <Flex align="center">
              <Icon
                as={IoCheckmarkDoneCircleSharp}
                color="#FCA503"
                w={4}
                h={4}
                pe="3px"
              />

              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                <Text fontWeight="bold" as="span">
                  {amount} tasks done
                </Text>{" "}
                this month.
              </Text>
            </Flex>
          </Flex>

          <Flex
            direction={{ sm: "column", lg: "row" }}
            //w={{ sm: "100%", md: "50%", lg: "auto" }}
          >
            {buttonValues.map((value, index) => {
              return (
                <Button
                  p="0px"
                  bg="transparent"
                  _hover={{ bg: "none" }}
                  onClick={() => handleClickButton({ filterValue: value })}
                >
                  <Flex minW="16" justifyContent="center" cursor="pointer">
                    <Text
                      fontSize="xs"
                      color={value == filter ? "#FCA503" : emailColor}
                      fontWeight="bold"
                      mx="6px"
                    >
                      {value}
                    </Text>
                  </Flex>
                </Button>
              );
            })}
          </Flex>
        </Flex>
      </Flex>

      <Flex width="100%">
        <Table variant="simple" color={textColor} size="md">
          <Thead>
            <Tr my=".8rem" ps="0px">
              {captions.map((caption, idx) => {
                return (
                  <Th color="gray.400" key={idx} ps={idx === 0 ? "0px" : null}>
                    {caption}
                  </Th>
                );
              })}
            </Tr>
          </Thead>

          {delegatedTask && filter == "Unassigned" ? (
            <Flex width="100%" marginY="20px">
              <Text size="md" fontWeight="semibold" alignSelf="center">
                No unassigned tasks.
              </Text>
            </Flex>
          ) : (
            <Tbody>
              {taskData.map((row, index) => {
                return (
                  <TaskListTableRow
                    key={index}
                    task={row.task}
                    volunteer={row.volunteer}
                    status={row.status}
                    completion={row.completion}
                  />
                );
              })}
            </Tbody>
          )}

          {filter != "Unassigned" ? (
            <Tfoot>
              <Button
                h="1.75rem"
                marginTop="20px"
                p="0px"
                bg="transparent"
                _hover={{ bg: "none" }}
              >
                <Text color="#FCA503">Next</Text>
              </Button>
            </Tfoot>
          ) : (
            ""
          )}
        </Table>
      </Flex>

      {filter == "Unassigned" && !delegatedTask ? (
        <Flex width="full" bottom={0}>
          <Button
            marginY="24px"
            p="12px"
            bg="transparent"
            _hover={{ bg: "none" }}
            //border="1px"
            bgColor="#FCA503"
            width="100%"
            onClick={handleOpenModal}
          >
            <Text fontSize="xs" color="white" fontWeight="bold" ms="6px">
              DELEGATE TASK
            </Text>
          </Button>
        </Flex>
      ) : (
        ""
      )}

      <DelegateAIModal
        isOpen={openModal}
        closeHandle={handleOpenModal}
        forceClose={forceCloseModal}
      />

      {/* </Card> */}
    </Box>
  );
}
