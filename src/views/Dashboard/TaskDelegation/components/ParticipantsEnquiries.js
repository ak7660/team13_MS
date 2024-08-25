// Chakra imports
import {
  Button,
  Flex,
  Text,
  Avatar,
  AvatarGroup,
  useColorModeValue,
  Grid,
} from "@chakra-ui/react";

import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";

// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React from "react";

export default function ParticipantsEnquiries() {
  const textColor = useColorModeValue("gray.700", "white");
  const participants = [avatar1, avatar2, avatar3];
  return (
    <Card p="16px">
      <CardHeader mb="4px">
        <Text fontSize="lg" color={textColor} fontWeight="bold">
          Participants Enquiries
        </Text>
      </CardHeader>

      <CardBody>
        <Flex direction="row" justifyContent="space-between" width="100%">
          <AvatarGroup size="sm">
            {participants.map((participant) => {
              return (
                <Avatar
                  key={participant}
                  src={participant}
                  _hover={{ zIndex: "3", cursor: "pointer" }}
                />
              );
            })}
          </AvatarGroup>

          <Button p="0px" bg="transparent" _hover={{ bg: "none" }}>
            <Flex
              align="center"
              w={{ sm: "100%", lg: "135px" }}
              bg="hsla(0,0%,100%,.3)"
              borderRadius="15px"
              justifyContent="center"
              py="10px"
              boxShadow="inset 0 0 1px 1px hsl(0deg 0% 100% / 90%), 0 20px 27px 0 rgb(0 0 0 / 5%)"
              border="1px solid gray.200"
              cursor="pointer"
            >
              <Text fontSize="xs" color={textColor} fontWeight="bold" ms="6px">
                Check Enquiries
              </Text>
            </Flex>
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
}
