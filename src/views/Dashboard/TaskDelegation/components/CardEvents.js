// Chakra imports
import {
  border,
  Flex,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import IconBox from "components/Icons/IconBox";
import React from "react";

const CardEvents = ({ title, amount, percentage, icon, color, taskIdx }) => {
  const iconTeal = useColorModeValue("#fca503", "teal.300");
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card
      minH="83px"
      bg={color}
      style={{ border: taskIdx == 0 ? "1px solid #fca503" : "none" }}
    >
      <CardBody>
        <Flex flexDirection="row" align="center" justify="center" w="100%">
          <Stat me="auto">
            <StatLabel
              fontSize="sm"
              color={color ? "white" : "gray.400"}
              fontWeight="bold"
              pb=".1rem"
            >
              {title}
            </StatLabel>
            <Flex>
              <StatNumber fontSize="lg" color={color ? "white" : textColor}>
                {amount}
              </StatNumber>
            </Flex>
          </Stat>
          <IconBox
            as="box"
            h={"45px"}
            w={"45px"}
            bg={color ? "white" : iconTeal}
          >
            {icon}
          </IconBox>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default CardEvents;