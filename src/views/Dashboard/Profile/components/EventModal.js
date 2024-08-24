import React, {useState} from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberDecrementStepper,
  InputGroup,
  InputLeftAddon,
  Flex,
  useColorModeValue,
  Box,
} from "@chakra-ui/react"
import { DeleteIcon , EditIcon } from '@chakra-ui/icons'

const EventModal = ({ isOpen, onClose }) => {
  const [tasks, setTasks] = useState([{ taskName: "", numOfVolunteers: "", dateTimeStart: "", dateTimeEnd: "" }]);
  const [materials, setMaterials] = useState([{ linkMaterial: "" }])

  const addTask = () => {
    setTasks([...tasks, { taskName: "", numOfVolunteers: "", dateTimeStart: "", dateTimeEnd: "" }]);
  };
  const addMaterial = () => {
    setMaterials([...materials, { linkMaterial: "" }]);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  const deleteMaterial = (index) => {
      const updatedMaterials = materials.filter((_, i) => i !== index);
      setMaterials(updatedMaterials);
  };

  const handleTaskChange = (index, key, value) => {
      const updatedTasks = [...tasks];
      updatedTasks[index][key] = value;
      setTasks(updatedTasks);
  };
  const handleMaterialChange = (index, key, value) => {
      const updatedMaterials = [...materials];
      updatedMaterials[index][key] = value;
      setMaterials(updatedMaterials);
  };

return (
    <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
      <ModalOverlay />
      <ModalContent maxW="7xl">
        <ModalHeader>Add Event</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
            <FormControl id="first-name" isRequired paddingBottom={2}>
                <FormLabel>Event name</FormLabel>
                <Input placeholder="Event name" />
            </FormControl>
            <FormControl id="description" isRequired paddingBottom={2}>
                <FormLabel>Description</FormLabel>
                <Input placeholder="Write descriptio here" />
            </FormControl>
            <FormControl id="date" isRequired paddingBottom={2}>
              <FormLabel>Date</FormLabel>
              <Flex gap={2}>
                <Input
                  placeholder="Start date"
                />
                <Input
                  placeholder="End date"
                />
              </Flex>
            </FormControl>
            <FormControl id="location" isRequired paddingBottom={2}>
                <FormLabel>Location</FormLabel>
                <Input placeholder="Location" />
            </FormControl>
            <FormControl id="numOfParticipant" isRequired paddingBottom={2}>
                <FormLabel>Number of participant</FormLabel>
                <NumberInput max={1000} min={0}>
                    <NumberInputField />
                    <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </FormControl>

            <FormControl id="requiredTask">
            <FormLabel>Required tasks</FormLabel>
            {tasks.map((task, index) => (
              <Box bg={"yellow.100"} padding={2} borderRadius={5} marginBottom={3}>
                  <Flex direction='column' gap={2}>
                    <Flex gap={2}>
                      <Input
                        flex="1 1 60%"
                        value={task.taskName}
                        onChange={(e) => handleTaskChange(index, 'taskName', e.target.value)}
                        placeholder="Task name"
                      />
                      <NumberInput max={1000} min={0}>
                        <NumberInputField
                          value={task.numOfVolunteers}
                          onChange={(e) => handleTaskChange(index, 'numOfVolunteers', e.target.value)}
                          placeholder="Number of volunteer"
                        />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </Flex>
                    <Flex gap={2}>
                      <Input
                        value={task.dateTimeStart}
                        onChange={(e) => handleTaskChange(index, 'dateTimeStart', e.target.value)}
                        placeholder="Start date"
                      />
                      <Input
                        value={task.dateTimeEnd}
                        onChange={(e) => handleTaskChange(index, 'dateTimeEnd', e.target.value)}
                        placeholder="End date"
                      />
                    </Flex>
                    
                    <Button colorScheme="yellow" size="sm" onClick={() => deleteTask(index)}>
                        Delete
                    </Button>
                  </Flex>
                </Box> 
            ))}
          </FormControl>
          <Button onClick={addTask} colorScheme="yellow" textColor="white" size="sm" mt={4}>
              Add Task
          </Button>
          <FormControl id="learningMaterials">
            <FormLabel>Learning materials</FormLabel>
            {materials.map((material, index) => (
              <Box bg={"yellow.100"} padding={2} borderRadius={5} marginBottom={3}>
                  <Flex gap={2}>
                    <Input
                      value={material.linkMaterial}
                      onChange={(e) => handleMaterialChange(index, 'linkMaterial', e.target.value)}
                      placeholder="Insert link"
                    />
                    <Button alignItems="center" leftIcon={<DeleteIcon />} colorScheme="yellow" variant="ghost" onClick={() => deleteMaterial(index)}></Button>
                  </Flex>
                </Box> 
            ))}
          </FormControl>
          <Button onClick={addMaterial} colorScheme="yellow" textColor="white" size="sm" mt={4}>
              Add material
          </Button>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="orange" mr={3} onClick={onClose}>
            Save
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EventModal;