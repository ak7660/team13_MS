import { Flex, Progress, Text, useColorModeValue } from "@chakra-ui/react";
import IconBox from "components/Icons/IconBox";
import React from "react";

const EventCardStatistics = ({
  title,
  amount,
  icon,
  percentage,
  showProgress = true,
}) => {
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  const overlayRef = React.useRef();
  return (
    <Flex direction="column">
      <Flex alignItems="center">
        <IconBox
          as="box"
          h={"1.3rem"}
          w={"1.3rem"}
          bg={iconTeal}
          me="6px"
          borderRadius="6px"
        >
          {icon}
        </IconBox>
        <Text fontSize="0.8rem" color="gray.400" fontWeight="semibold">
          {title}
        </Text>
      </Flex>
      <Text fontSize="lg" color={textColor} fontWeight="bold" mb="6px" my="6px">
        {amount}
      </Text>
      {showProgress && (
        <Progress
          colorScheme="teal"
          borderRadius="12px"
          h="5px"
          value={percentage}
        />
      )}
    </Flex>
  );
};

export default EventCardStatistics;
