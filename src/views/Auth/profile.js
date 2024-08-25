import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  CheckboxGroup,
  Checkbox,
  useColorModeValue,
  Text,
  Image
} from "@chakra-ui/react";

function ProfilePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    ethnicity: "",
    interests: [],
    volunteerExperience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (value) => {
    setFormData({ ...formData, interests: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Flex
      align="center"
      justify="center"
      minH="100vh"
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Box
        bg={useColorModeValue("white", "gray.700")}
        p={8}
        rounded="lg"
        shadow="lg"
        width="400px"
        borderRadius="15px"
        border="2px solid"
        borderColor="#FDA503"
      >
        <form onSubmit={handleSubmit}>
            <Image
            borderRadius="full"
            boxSize="150px"
            src="https://via.placeholder.com/150"
            alt="Profile Picture"
            mb={4}
          />
          <Text fontSize="xl">Welcome Back, Caroline!</Text>
          <Stack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </FormControl>
            <FormControl id="phone">
              <FormLabel>Phone Number</FormLabel>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </FormControl>
            <FormControl id="ethnicity">
              <FormLabel>Ethnicity</FormLabel>
              <Input
                name="ethnicity"
                value={formData.ethnicity}
                onChange={handleChange}
                placeholder="Enter your ethnicity"
              />
            </FormControl>
            <FormControl id="interests">
              <FormLabel>Interests</FormLabel>
              <CheckboxGroup
                colorScheme="green"
                value={formData.interests}
                onChange={handleCheckboxChange}
              >
                <Stack spacing={2} direction="column">
                  <Checkbox value="sports">Sports</Checkbox>
                  <Checkbox value="music">Music</Checkbox>
                  <Checkbox value="reading">Reading</Checkbox>
                  <Checkbox value="travel">Travel</Checkbox>
                </Stack>
              </CheckboxGroup>
            </FormControl>
            <FormControl id="volunteerExperience">
              <FormLabel>Volunteer Experience</FormLabel>
              <Textarea
                name="volunteerExperience"
                value={formData.volunteerExperience}
                onChange={handleChange}
                placeholder="Describe your volunteer experience"
              />
            </FormControl>
            <Button type="submit" colorScheme="blue" width="full">
              Save Profile
            </Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
}

export default ProfilePage;