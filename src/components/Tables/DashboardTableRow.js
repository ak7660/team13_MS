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
} from "@chakra-ui/react";
import React, { Fragment } from "react";

let starMap = {
  '1': <Fragment>&#xe033;</Fragment>,
  '0.5': <Fragment>&#xe032;</Fragment>,
  '0': <Fragment>&#xe031;</Fragment>
}

function DashboardTableRow(props) {
  const { logo, name, members, budget, progression } = props;
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Tr>
      <Td minWidth={{ sm: "100px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Avatar
            name="Ryan Florence"
            key={members[0]}
            src={members[0]}
            _hover={{ zIndex: "3", cursor: "pointer" }}
          />
          <Text
            marginLeft={5}
            fontSize="md"
            color={textColor}
            fontWeight="bold"
            minWidth="100%"
          >
            {name}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {budget}
        </Text>
      </Td>
    </Tr>
  );
}

export default DashboardTableRow;
