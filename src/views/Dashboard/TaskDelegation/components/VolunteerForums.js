// Chakra imports
import {
  Avatar,
  Button,
  Flex,
  Text,
  useColorModeValue,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
// Assets
import Volunteer1 from "assets/img/Volunteer1.png";
import Volunteer2 from "assets/img/Volunteer2.png";
import Volunteer3 from "assets/img/Volunteer3.png";

// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React from "react";

function ForumsChatInput() {
  // const [show, setShow] = React.useState(false)
  // const handleClick = () => setShow(!show)

  return (
    <InputGroup size="md">
      <Input
        borderColor="#FFD147"
        borderWidth="thin"
        pr="4.5rem"
        placeholder="Type your message"
      />
      <InputRightElement width="4.5rem">
        <Button
          h="1.75rem"
          size="sm"
          // onClick={handleClick}
          bgColor="#FCA503"
          color="white"
        >
          {/* {show ? 'Hide' : 'Show'} */}
          Send
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

const VolunteerForums = () => {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card p="16px">
      <CardHeader p="12px 5px" mb="12px">
        <Text fontSize="lg" color={textColor} fontWeight="bold">
          Volunteer Forums
        </Text>
      </CardHeader>
      <CardBody px="5px">
        <Flex direction="column" w="100%">
          <Flex justifyContent="space-between" mb="21px">
            <Flex align="center">
              <Avatar
                src={Volunteer1}
                w="50px"
                h="50px"
                borderRadius="15px"
                me="10px"
              />
              <Flex direction="column">
                <Text fontSize="sm" color={textColor} fontWeight="bold">
                  Anshika J.{" "}
                </Text>
                <Text fontSize="xs" color="gray.500" fontWeight="400">
                  Hi! I need more information on the venue
                </Text>
              </Flex>
            </Flex>
            <Button p="0px" bg="transparent" variant="no-hover">
              <Text
                fontSize="sm"
                fontWeight="600"
                color="#FCA503"
                alignSelf="center"
              >
                REPLY
              </Text>
            </Button>
          </Flex>
          <Flex justifyContent="space-between" mb="21px">
            <Flex align="center">
              <Avatar
                src={Volunteer2}
                w="50px"
                h="50px"
                borderRadius="15px"
                me="10px"
              />
              <Flex direction="column">
                <Text fontSize="sm" color={textColor} fontWeight="bold">
                  Zain J.{" "}
                </Text>
                <Text fontSize="xs" color="gray.500" fontWeight="400">
                  I think they updated the info desc
                </Text>
              </Flex>
            </Flex>
            <Button p="0px" bg="transparent" variant="no-hover">
              <Text
                fontSize="sm"
                fontWeight="600"
                color="#FCA503"
                alignSelf="center"
              >
                REPLY
              </Text>
            </Button>
          </Flex>
          <Flex justifyContent="space-between" mb="21px">
            <Flex align="center">
              <Avatar
                src={Volunteer3}
                w="50px"
                h="50px"
                borderRadius="15px"
                me="10px"
              />
              <Flex direction="column">
                <Text fontSize="sm" color={textColor} fontWeight="bold">
                  Dana S.{" "}
                </Text>
                <Text fontSize="xs" color="gray.500" fontWeight="400">
                  Ooh, thanks for the info :)
                </Text>
              </Flex>
            </Flex>
            <Button p="0px" bg="transparent" variant="no-hover">
              <Text
                fontSize="sm"
                fontWeight="600"
                color="#FCA503"
                alignSelf="center"
              >
                REPLY
              </Text>
            </Button>
          </Flex>

          <ForumsChatInput />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default VolunteerForums;
