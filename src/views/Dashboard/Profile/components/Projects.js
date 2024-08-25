// Chakra imports
import {
  Button,
  Flex,
  Grid,
  Icon,
  Text,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar6 from "assets/img/avatars/avatar6.png";
import imageArchitect1 from "assets/img/ImageArchitect1.png";
import imageArchitect2 from "assets/img/ImageArchitect2.png";
import imageArchitect3 from "assets/img/ImageArchitect3.png";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React, {useState} from "react";
import { FaPlus } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import { eventsData } from "variables/general";
import EventCard from "./EventCard";
import EditEventModal from "./EditEventModal";
import { DeleteIcon , EditIcon, AddIcon } from '@chakra-ui/icons'
import EventModal from "./EventModal";

const Projects = ({ title, description }) => {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const [isAdd, setIsAdd] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEdit = (event) => {
      setIsEditing(true);
      setSelectedEvent(event);
  };

  const handleCloseEdit = () => {
      setIsEditing(false);
  };

  const handleAdd = () => {
    setIsAdd(true);
  };

  const handleCloseAdd = () => {
    setIsAdd(false);
  };

  return (
    <Card p='16px' my='24px'>
      <CardHeader p='12px 5px' mb='12px'>
        <Flex w={"100%"}>
          <Text fontSize='lg' color={textColor} fontWeight='bold'>
            {title}
          </Text>
          <Button marginLeft="auto" leftIcon={<AddIcon />} fontSize='sm' colorScheme="orange" variant="solid" onClick={handleAdd}>
            Add event
          </Button>
          <EventModal isOpen={isAdd} onClose={handleCloseAdd} />
        </Flex>
      </CardHeader>
      <CardBody px='5px'>
        <Flex direction='column' w={"100%"}>
          {eventsData.map((events) => {
            const totalVolunteers = (events.requiredTask && events.requiredTask.reduce) ? events.requiredTask.reduce((acc, curr) => acc + curr.volunteer, 0) : 0;
            const totalQuotaVolunteers = (events.requiredTask && events.requiredTask.reduce) ? events.requiredTask.reduce((acc, curr) => acc + curr.quotaVolunteer, 0) : 0;
            return (
              <EventCard 
                dateTimeString={events.dateTimeStart}
                name={events.eventName}
                numOfVolunteer={totalVolunteers}
                quotaVolunteer={totalQuotaVolunteers}
                numOfParticipant={events.numOfParticipant}
                quotaParticipant={events.quotaParticipant} 
                location={events.location}
                onEdit={() => handleEdit(events)}
              />
            )
          })}
          <EditEventModal isOpen={isEditing} onClose={handleCloseEdit} event={selectedEvent} />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Projects;
