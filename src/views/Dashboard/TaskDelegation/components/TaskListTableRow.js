import {
  Avatar,
  AvatarGroup,
  Flex,
  Icon,
  Progress,
  Td,
  Text,
  Tr,
  useColorModeValue,
  Grid,
} from "@chakra-ui/react";

import React from "react";

function TaskListTableRow(props) {
  const { task, volunteer, status, completion } = props;
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Tr maxH={"fit-content"}>
      <Td width="40%" pl="0px">
        <Flex align="center" minWidth="100%" flexWrap="nowrap">
          <Text
            fontSize="sm"
            color={textColor}
            fontWeight="bold"
            minWidth="100%"
          >
            {task}
          </Text>
        </Flex>
      </Td>

      <Td width="20%">
        {volunteer.map((name) => {
          return (
            <Text fontSize="sm" color={textColor} fontWeight="bold" pb=".5rem">
              {name}
            </Text>
          );
        })}
      </Td>

      <Td width="20%">
        <Text
          fontSize="sm"
          color={textColor}
          fontWeight="bold"
          pb=".5rem"
          minWidth="100px"
        >
          {status}
        </Text>
      </Td>

      <Td width="20%">
        <Grid>
          <Text
            fontSize="sm"
            color="#FCA503"
            fontWeight="bold"
            pb=".2rem"
          >{`${completion}%`}</Text>
          <Progress
            colorScheme={completion === 100 ? "orange" : "yellow"}
            size="xs"
            value={completion}
            borderRadius="15px"
          />
        </Grid>
      </Td>
    </Tr>
  );
}

export default TaskListTableRow;
