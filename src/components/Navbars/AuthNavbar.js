// Chakra imports
import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Text,
  useColorModeValue,
  Image
} from "@chakra-ui/react";
import {
  ZubinFoundationLogo,
  CreativeTimLogo,
  DocumentIcon,
  HomeIcon,
  PersonIcon,
  RocketIcon,
} from "components/Icons/Icons";
import SidebarResponsive from "components/Sidebar/SidebarResponsive";
import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import routes from "routes.js";
import mainLogo from "../../assets/apple-icon.png"
export default function AuthNavbar(props) {
  const [open, setOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  const { logo, logoText, secondary, ...rest } = props;
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  };
  // Chakra color mode
  let navbarIcon = "black";
  let mainText = "black";
  let navbarBg = "white";
  let navbarBorder = "2px solid";
  let navbarShadow = "0px 7px 23px rgba(0, 0, 0, 0.05)";
  let navbarFilter = "none";
  let navbarBackdrop = "blur(21px)";
  let bgButton = "white";
  let navbarPosition = "fixed";
  let colorButton = "black";
  let navBorderColor = "#FCA503"
  if (props.secondary === true) {
    navbarPosition = "absolute";
  }
  //${process.env.PUBLIC_URL}/#/
  var brand = (
    <Link
      href={`https://www.zubinfoundation.org/`} 
      target="_blank"
      display="flex"
      lineHeight="100%"
      fontWeight="bold"
      justifyContent="center"
      alignItems="center"
      color={mainText}
    >
      <Image src={mainLogo} alt="Zubin Foundation Logo" width="32px" height="32px" style={{ marginRight: "10px" }} />
      <Text fontSize="sm" mt="3px">
        {logoText}
      </Text>
    </Link>
  );
  var linksAuth = (
    <HStack display={{ sm: "none", lg: "flex" }}>
      <NavLink to="/admin/dashboard">
        <Button
          fontSize="sm"
          ms="0px"
          me="0px"
          px="0px"
          me={{ sm: "2px", md: "16px" }}
          color={navbarIcon}
          variant="transparent-with-icon"
          leftIcon={<HomeIcon color={navbarIcon} w="12px" h="12px" me="0px" />}
        >
          <Text>Dashboard</Text>
        </Button>
      </NavLink>
      <NavLink to="/auth/signin">
        <Button
          fontSize="sm"
          ms="0px"
          me="0px"
          px="0px"
          me={{ sm: "2px", md: "16px" }}
          color={navbarIcon}
          variant="transparent-with-icon"
          leftIcon={
            <RocketIcon color={navbarIcon} w="12px" h="12px" me="0px" />
          }
        >
          <Text>Sign In</Text>
        </Button>
      </NavLink>
      <NavLink to="/auth/signup">
        <Button
          fontSize="sm"
          ms="0px"
          px="0px"
          me={{ sm: "2px", md: "16px" }}
          color={navbarIcon}
          variant="transparent-with-icon"
          leftIcon={
            <DocumentIcon color={navbarIcon} w="12px" h="12px" me="0px" />
          }
        >
          <Text>Sign Up</Text>
        </Button>
      </NavLink>
    </HStack>
  );
  return (
    <Flex
      position={navbarPosition}
      top="16px"
      left="50%"
      transform="translate(-50%, 0px)"
      background={navbarBg}
      border={navbarBorder}
      boxShadow={navbarShadow}
      filter={navbarFilter}
      backdropFilter={navbarBackdrop}
      borderRadius="15px"
      borderColor={navBorderColor}
      px="16px"
      py="22px"
      mx="auto"
      width="1044px"
      maxW="90%"
      alignItems="center"
    >
      <Flex w="100%" justifyContent={{ sm: "start", lg: "space-between" }}>
        {brand}
        <Box
          ms={{ base: "auto", lg: "0px" }}
          display={{ base: "flex", lg: "none" }}
        >
          <SidebarResponsive
            logoText={props.logoText}
            secondary={props.secondary}
            routes={routes}
            // logo={logo}
            {...rest}
          />
        </Box>
        {linksAuth}
        <Link href="https://wa.me/85225409488"> 
          <Button
            bg={bgButton}
            color={colorButton}
            fontSize="xs"
            variant="no-hover"
            borderRadius="35px"
            px="30px"
            display={{
              sm: "none",
              lg: "flex",
            }}
          >
            Contact Us
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}

AuthNavbar.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  brandText: PropTypes.string,
};