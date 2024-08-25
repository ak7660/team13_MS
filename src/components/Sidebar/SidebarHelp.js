import { QuestionIcon } from "@chakra-ui/icons";
import { Button, Flex, Link, Text, useColorModeValue } from "@chakra-ui/react";
import SidebarHelpImage from "assets/img/SidebarHelpImage.png";
import IconBox from "components/Icons/IconBox";
import React from "react";

export function SidebarHelp(props) {
  // Pass the computed styles into the `__css` prop
  const { children, ...rest } = props;
  const bgProfile = useColorModeValue(
    "linear-gradient(135deg, #fca503, #ffd147)",
    "linear-gradient(112.83deg, rgba(255, 209, 71, 0.21) 0%, rgba(255, 209, 71, 0) 110.84%)"
  );
  return (
    <Flex
      borderRadius="15px"
      flexDirection="column"
      bg={bgProfile}
      justifyContent="flex-start"
      alignItems="start"
      boxSize="border-box"
      p="16px"
      h="170px"
      w="100%"
    >
      <IconBox width="35px" h="35px" bg="white" mb="auto">
        <QuestionIcon color="orange.300" h="18px" w="18px" />
      </IconBox>
      <Text fontSize="sm" color="white" fontWeight="bold">
        Need help?
      </Text>
      <Text fontSize="xs" color="white" mb="10px">
        Please check our docs
      </Text>
      <Link
        w="100%"
        href="https://demos.creative-tim.com/docs-purity-ui-dashboard/"
      >
        <Button
          fontSize="10px"
          fontWeight="bold"
          w="100%"
          bg="white"
          _hover="none"
          _active={{
            bg: "white",
            transform: "none",
            borderColor: "transparent",
          }}
          _focus={{
            boxShadow: "none",
          }}
          color="black"
        >
          DOCUMENTATION
        </Button>
      </Link>
    </Flex>
  );
}
