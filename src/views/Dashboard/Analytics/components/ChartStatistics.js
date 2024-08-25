import { Flex, Progress, Text, useColorModeValue } from "@chakra-ui/react";
import IconBox from "components/Icons/IconBox";
import React from "react";

const ChartStatistics = ({
  title,
  amount,
  icon,
  percentage,
  showProgress = true,
}) => {
  const iconTeal = useColorModeValue("#FFD147", "#FFD147");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  const overlayRef = React.useRef();
  return (
    <Flex direction="column">
      <Flex alignItems="center">
        <IconBox as="box" h={"30px"} w={"30px"} bg={iconTeal} me="6px">
          {icon}
        </IconBox>
        <Text fontSize="sm" color="gray.400" fontWeight="semibold">
          {title}
        </Text>
      </Flex>
      <Text fontSize="xl" color={textColor} fontWeight="bold" mb="6px" my="6px">
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

export default ChartStatistics;
