import React, {useState} from "react";
// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import signInImage from "assets/img/SignInImage2.png";
import { Link as RouterLink} from "react-router-dom/cjs/react-router-dom";
import {auth} from "../../config/firebaseConfig"
import { signInWithEmailAndPassword } from "firebase/auth";

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // Chakra color mode
  const titleColor = "#FFD147";
  const textColor = "#28271f";

  const signingIn = (e) => {
  e.preventDefault();
  setError(''); // Clear previous error
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
      // If you need to set user properties, define the function here or remove this comment
    })
    .catch((error) => {
      console.log(error);
      setError(error.message); // Set error message
    });
};
  return (
    <Flex position='relative' mb='40px'>
      <Flex
        h={{ sm: "initial", md: "75vh", lg: "85vh" }}
        w='100%'
        maxW='1044px'
        mx='auto'
        justifyContent='space-between'
        mb='30px'
        pt={{ sm: "100px", md: "0px" }}>
        <Flex
          alignItems='center'
          justifyContent='start'
          style={{ userSelect: "none" }}
          w={{ base: "100%", md: "50%", lg: "42%" }}>
          <Flex
            direction='column'
            w='100%'
            p='48px'
            mt={{ md: "150px", lg: "80px" }}
            borderRadius="15px"
            border="3px solid"
            borderColor="#FDA503">
            <Heading color={titleColor} fontSize='32px' mb='10px'>
              Welcome Back
            </Heading>
            <Text
              mb='36px'
              ms='4px'
              color={textColor}
              fontWeight='bold'
              fontSize='14px'>
              Enter your email and password to sign in
            </Text>
            <form onSubmit={signingIn}>
              <FormControl>
                <FormLabel ms='4px' fontSize='sm' fontWeight='normal' color = {textColor}>
                  Email
                </FormLabel>
                <Input
                  borderRadius='15px'
                  mb='24px'
                  fontSize='sm'
                  type='text'
                  placeholder='Your email adress'
                  size='lg'
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                  Password
                </FormLabel>
                <Input
                  borderRadius='15px'
                  mb='36px'
                  fontSize='sm'
                  type='password'
                  placeholder='Your password'
                  size='lg'
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormControl display='flex' alignItems='center'>
                  <Switch id='remember-login' colorScheme='teal' me='10px' />
                  <FormLabel
                    htmlFor='remember-login'
                    mb='0'
                    ms='1'
                    fontWeight='normal'>
                    Remember me
                  </FormLabel>
                </FormControl>
                <Button
                  fontSize='10px'
                  type='submit'
                  bg='#fdc968'
                  w='100%'
                  h='45'
                  mb='20px'
                  color='white'
                  mt='20px'
                  _hover={{
                    bg: "#fedb9a",
                  }}
                  _active={{
                    bg: "#fca503",
                  }}>
                  SIGN IN
                </Button>
              </FormControl>
            </form>
            <Flex
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              maxW='100%'
              mt='0px'>
              <Text color={textColor} fontWeight='medium'>
                Don't have an account?
                <RouterLink
                to = "/auth/signup"
                style={{
                  color: "#FCA503",
                  marginLeft: '5px',
                  fontWeight: 'bold'
                }}>
                  Sign Up
                </RouterLink>
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          display={{ base: "none", md: "block" }}
          overflowX='hidden'
          h='100%'
          w='40vw'
          position='absolute'
          right='0px'>
          <Box
            bgImage={signInImage}
            w='100%'
            h='100%'
            bgSize='cover'
            bgPosition='50%'
            position='absolute'
            borderBottomLeftRadius='20px'></Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SignIn;
