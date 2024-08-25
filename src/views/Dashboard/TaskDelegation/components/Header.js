// Chakra imports
import {
  Avatar,
  Box,
  Button,
  Flex,
  Text,
  useColorModeValue,
  Grid,
} from "@chakra-ui/react";
import React from "react";

const Header = ({
  backgroundHeader,
  backgroundProfile,
  avatarImage,
  name,
  email,
  tabs,
  desc,
}) => {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const borderProfileColor = useColorModeValue(
    "white",
    "rgba(255, 255, 255, 0.31)"
  );
  const emailColor = useColorModeValue("gray.400", "gray.300");
  return (
    <Box
      w="100%"
      borderRadius="25px"
      bgRepeat="no-repeat"
      display="flex"
      justifyContent="center"
    >
      <Flex
        direction={"column"}
        w="100%"
        backdropFilter="saturate(200%) blur(50px)"
        boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
        border="2px solid"
        borderColor={borderProfileColor}
        bg={backgroundProfile}
        p="24px"
        borderRadius="20px"
      >
        <Flex
          justifyContent={{ sm: "center", md: "space-between" }}
          align="center"
          direction={"row"}
        >
          <Flex
            align="center"
            mb={{ sm: "10px", md: "0px" }}
            direction={{ sm: "column", md: "row" }}
            w={{ sm: "100%" }}
            textAlign={{ sm: "center", md: "start" }}
          >
            <Avatar
              me={{ md: "22px" }}
              src={avatarImage}
              w="80px"
              h="80px"
              borderRadius="15px"
            />
            <Flex direction="column" maxWidth="100%" my={{ sm: "14px" }}>
              <Text
                fontSize={{ sm: "lg", lg: "xl" }}
                color={textColor}
                fontWeight="bold"
                ms={{ sm: "8px", md: "0px" }}
              >
                {name}
              </Text>
              <Text
                fontSize={{ sm: "sm", md: "md" }}
                color={emailColor}
                fontWeight="semibold"
              >
                {email}
              </Text>
            </Flex>
          </Flex>
          <Flex
            direction={{ sm: "column", lg: "row" }}
            w={{ sm: "100%", md: "50%", lg: "auto" }}
          >
            <Button p="0px" bg="transparent" _hover={{ bg: "none" }}>
              <Flex
                align="center"
                w={{ sm: "100%", lg: "135px" }}
                bg="hsla(0,0%,100%,.3)"
                borderRadius="15px"
                justifyContent="center"
                py="10px"
                boxShadow="inset 0 0 1px 1px hsl(0deg 0% 100% / 90%), 0 20px 27px 0 rgb(0 0 0 / 5%)"
                //bgColor="#FCA503"
                border="1px solid gray.200"
                cursor="pointer"
              >
                {tabs[0].icon}
                <Text
                  fontSize="xs"
                  color={textColor}
                  fontWeight="bold"
                  ms="6px"
                >
                  {tabs[0].name}
                </Text>
              </Flex>
            </Button>
            <Button p="0px" bg="transparent" _hover={{ bg: "none" }}>
              <Flex
                align="center"
                w={{ lg: "135px" }}
                borderRadius="15px"
                justifyContent="center"
                py="10px"
                mx={{ lg: "1rem" }}
                cursor="pointer"
              >
                {tabs[1].icon}
                <Text
                  fontSize="xs"
                  color={textColor}
                  fontWeight="bold"
                  ms="6px"
                >
                  {tabs[1].name}
                </Text>
              </Flex>
            </Button>
            <Button p="0px" bg="transparent" _hover={{ bg: "none" }}>
              <Flex
                align="center"
                w={{ lg: "135px" }}
                borderRadius="15px"
                justifyContent="center"
                py="10px"
                cursor="pointer"
              >
                {tabs[2].icon}
                <Text
                  fontSize="xs"
                  color={textColor}
                  fontWeight="bold"
                  ms="6px"
                >
                  {tabs[2].name}
                </Text>
              </Flex>
            </Button>
          </Flex>
        </Flex>

        <Flex align="center" marginTop={"4"}>
          <Text fontSize={"md"} color={textColor}>
            {desc}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
