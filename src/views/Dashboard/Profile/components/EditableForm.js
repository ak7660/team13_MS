import React, { useState } from "react";
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
  Button,
  useColorModeValue,
  Textarea,
  Box,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const EditableForm = ({ event }) => {
  if (!event) {
    return <div>Loading...</div>;
  }

  const {
    eventName,
    location,
    numOfParticipant,
    quotaParticipant,
    eventDescription,
    dateTimeStart,
    dateTimeEnd,
    requiredTask,
    trainingMaterials,
  } = event;

  const [tasks, setTasks] = useState(
    requiredTask.map((task) => ({
      taskName: task.task,
      numOfVolunteers: task.quotaVolunteer,
      dateTimeStart: task.startTime,
      dateTimeEnd: task.endTime,
    }))
  );
  const [materials, setMaterials] = useState(
    trainingMaterials.map((material) => ({
      linkMaterial: material,
    }))
  );

  const addTask = () => {
    setTasks([
      ...tasks,
      { taskName: "", numOfVolunteers: "", dateTimeStart: "", dateTimeEnd: "" },
    ]);
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
    <form>
      <FormControl id="first-name" isRequired paddingBottom={2}>
        <FormLabel>Event name</FormLabel>
        <Input placeholder="Event name" defaultValue={eventName} />
      </FormControl>
      <FormControl id="description" isRequired paddingBottom={2}>
        <FormLabel>Description</FormLabel>
        <Textarea
          placeholder="Write description here"
          defaultValue={eventDescription}
        />
      </FormControl>
      <FormControl id="date" isRequired paddingBottom={2}>
        <FormLabel>Date</FormLabel>
        <Flex gap={2}>
          <Input placeholder="Start date" defaultValue={dateTimeStart} />
          <Input placeholder="End date" defaultValue={dateTimeEnd} />
        </Flex>
      </FormControl>
      <FormControl id="location" isRequired paddingBottom={2}>
        <FormLabel>Location</FormLabel>
        <Input placeholder="Location" defaultValue={location} />
      </FormControl>
      <FormControl id="numOfParticipant" isRequired paddingBottom={2}>
        <FormLabel>Number of participant</FormLabel>
        <NumberInput max={1000} min={0} value={numOfParticipant}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <FormControl id="requiredTask" paddingBottom={2}>
        <FormLabel>Required tasks</FormLabel>
        {tasks.map((task, index) => (
          <Box bg={"gray.50"} padding={2} borderRadius={5} marginBottom={3}>
            <Box
              display="flex"
              flexDirection="row"
              flexGrow={1}
              alignItems="center"
            >
              <Flex direction="column" gap={2} flexGrow={1}>
                <Flex gap={2}>
                  <Input
                    flex="1 1 60%"
                    value={task.taskName}
                    onChange={(e) =>
                      handleTaskChange(index, "taskName", e.target.value)
                    }
                    placeholder="Task name"
                  />
                  <NumberInput max={1000} min={0} value={task.numOfVolunteers}>
                    <NumberInputField
                      value={task.numOfVolunteers}
                      onChange={(e) =>
                        handleTaskChange(
                          index,
                          "numOfVolunteers",
                          e.target.value
                        )
                      }
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
                    onChange={(e) =>
                      handleTaskChange(index, "dateTimeStart", e.target.value)
                    }
                    placeholder="Start date"
                  />
                  <Input
                    value={task.dateTimeEnd}
                    onChange={(e) =>
                      handleTaskChange(index, "dateTimeEnd", e.target.value)
                    }
                    placeholder="End date"
                  />
                </Flex>
              </Flex>
              <Button
                colorScheme="yellow"
                size="sm"
                onClick={() => deleteTask(index)}
                variant="ghost"
                marginX={2}
              >
                <DeleteIcon />
              </Button>
            </Box>
          </Box>
        ))}
      </FormControl>
      <Button
        onClick={addTask}
        colorScheme="yellow"
        size="sm"
        mt={4}
        textColor="white"
      >
        Add Task
      </Button>
      <FormControl id="learningMaterials">
        <FormLabel>Learning materials</FormLabel>
        {materials.map((material, index) => (
          <Box bg={"gray.50"} padding={2} borderRadius={5} marginBottom={3}>
            <Flex gap={2}>
              <Input
                value={material.linkMaterial}
                onChange={(e) =>
                  handleMaterialChange(index, "linkMaterial", e.target.value)
                }
                placeholder="Insert link"
              />
              <Button
                alignItems="center"
                colorScheme="yellow"
                variant="ghost"
                onClick={() => deleteMaterial(index)}
              >
                <DeleteIcon />
              </Button>
            </Flex>
          </Box>
        ))}
      </FormControl>
      <Button
        onClick={addMaterial}
        colorScheme="yellow"
        textColor="white"
        size="sm"
        mt={4}
      >
        Add material
      </Button>
    </form>
  );
};

export default EditableForm;
