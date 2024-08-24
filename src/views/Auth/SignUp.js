// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
// Assets
import BgSignUp from "assets/img/BgSignUp3.png";
import React, {useState} from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { Link as RouterLink} from "react-router-dom/cjs/react-router-dom";
import { auth, db } from "../../config/firebaseConfig"; // Import db
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"


function SignUp() {
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const bgIcons = useColorModeValue("#FDA503", "rgba(255, 255, 255, 0.5)");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [ethnicity, setEthnicity] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name,
        email,
        phoneNumber,
        ethnicity,
        age,
      });
      console.log(userCredential);
    } catch (error) {
      console.log(error);
    }
  };
return (
    <Flex
      direction='column'
      alignSelf='center'
      justifySelf='center'
      overflow='hidden'>
      <Box
        position='absolute'
        minH={{ base: "70vh", md: "50vh" }}
        w={{ md: "calc(100vw - 50px)" }}
        borderRadius={{ md: "15px" }}
        left='0'
        right='0'
        bgRepeat='no-repeat'
        overflow='hidden'
        zIndex='-1'
        top='0'
        mx={{ md: "auto" }}
        mt={{ md: "14px" }}></Box>
      <Flex
        direction='column'
        textAlign='center'
        justifyContent='center'
        align='center'
        mt='6.5rem'
        mb='30px'>
        <Text
          fontSize='md'
          color='white'
          fontWeight='normal'
          mt='10px'
          mb='26px'
          w={{ base: "90%", sm: "60%", lg: "40%", xl: "30%" }}>
          Please 
        </Text>
      </Flex>
      <Flex alignItems='center' justifyContent='center' mb='60px' mt='20px' border>
        <Flex
          direction='column'
          w='900px'
          background='transparent'
          borderRadius='15px'
          border = '2px solid'
          borderColor="#FCA503"
          p='40px'
          mx={{ base: "100px" }}
          bg={bgColor}
          boxShadow='0 20px 27px 0 rgb(0 0 0 / 5%)'>
          <Text
            fontSize='xl'
            color={textColor}
            fontWeight='bold'
            textAlign='center'
            mb='22px'>
            Register With
          </Text>
          <HStack spacing='15px' justify='center' mb='22px'>
            <Flex
              justify='center'
              align='center'
              w='75px'
              h='75px'
              borderRadius='15px'
              border='1px solid lightgray'
              cursor='pointer'
              transition='all .25s ease'
              _hover={{ filter: "brightness(120%)", bg: bgIcons }}>
              <Link>
                <Icon
                  as={FaFacebook}
                  w='30px'
                  h='30px'
                  _hover={{ filter: "brightness(120%)" }}
                />
              </Link>
            </Flex>
            <Flex
              justify='center'
              align='center'
              w='75px'
              h='75px'
              borderRadius='25px'
              border='1px solid lightgray'
              cursor='pointer'
              transition='all .25s ease'
              _hover={{ filter: "brightness(120%)", bg: bgIcons }}>
              <Link>
                <Icon
                  as={FaApple}
                  w='30px'
                  h='30px'
                  _hover={{ filter: "brightness(120%)" }}
                />
              </Link>
            </Flex>
            <Flex
              justify='center'
              align='center'
              w='75px'
              h='75px'
              borderRadius='15px'
              border='1px solid lightgray'
              cursor='pointer'
              transition='all .25s ease'
              _hover={{ filter: "brightness(120%)", bg: bgIcons }}>
              <Link>
                <Icon
                  as={FaGoogle}
                  w='30px'
                  h='30px'
                  _hover={{ filter: "brightness(120%)" }}
                />
              </Link>
            </Flex>
          </HStack>
          <Text
            fontSize='lg'
            color='gray.400'
            fontWeight='bold'
            textAlign='center'
            mb='22px'>
            or
          </Text>
          {error && (
          <Alert status="error" mb="24px">
            <AlertIcon />
            {error}
          </Alert>
          )}
          <form onSubmit={handleSignUp}>
            <FormControl>
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Name
              </FormLabel>
              <Input
                fontSize='sm'
                ms='4px'
                borderRadius='15px'
                type='text'
                placeholder='Your full name'
                mb='24px'
                size='lg'
                onChange={(e) => setName(e.target.value)}
              />
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Email
              </FormLabel>
              <Input
                fontSize='sm'
                ms='4px'
                borderRadius='15px'
                type='email'
                placeholder='Your email address'
                mb='24px'
                size='lg'
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Phone Number
              </FormLabel>
              <Input
                fontSize='sm'
                ms='4px'
                borderRadius='15px'
                type='tel'
                placeholder='PhoneNumber'
                mb='24px'
                size='lg'
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Ethnicity
              </FormLabel>
              <Input
                fontSize='sm'
                ms='4px'
                borderRadius='15px'
                type='ethnicity'
                placeholder='Ethnicity'
                mb='24px'
                size='lg'
                onChange={(e) => setEthnicity(e.target.value)}
              />
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Age
              </FormLabel>
              <Input
                fontSize='sm'
                ms='4px'
                borderRadius='15px'
                type='number'
                placeholder='Age'
                mb='24px'
                size='lg'
                onChange={(e) => setAge(e.target.value)}
              />
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Password
              </FormLabel>
              <Input
                fontSize='sm'
                ms='4px'
                borderRadius='15px'
                type='password'
                placeholder='Your password'
                mb='24px'
                size='lg'
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControl display='flex' alignItems='center' mb='24px'>
                <Switch id='remember-login' colorScheme='teal' me='10px' />
                <FormLabel htmlFor='remember-login' mb='0' fontWeight='normal'>
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
                SIGN UP
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
              Already have an account?
              <RouterLink
                to = "/auth/signin"
                style={{
                  color: "#FCA503",
                  marginLeft: '5px',
                  fontWeight: 'bold'
                }}>
                Sign In
              </RouterLink>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignUp;
