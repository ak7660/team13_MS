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
import EditableForm from "./EditableForm";

const EditEventModal = ({ isOpen, onClose, event }) => {

return (
    <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
      <ModalOverlay />
      <ModalContent maxW="7xl">
        <ModalHeader>Edit Event</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
            <EditableForm event={event} />
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

export default EditEventModal;