import { Button, Flex } from '@chakra-ui/react'
import React from 'react'

const Navbar = ({ selectedAnalytics, setSelectedAnalytics }) => {
  return (
    <Flex direction='row' gap="8px" alignItems="center" p="10px">
      <Button colorScheme='teal' variant={selectedAnalytics === 0 ? 'solid' : 'outline'} onClick={() => setSelectedAnalytics(0)}>
        General
      </Button>
      <Button colorScheme='teal' variant={selectedAnalytics === 1 ? 'solid' : 'outline'} onClick={() => setSelectedAnalytics(1)}>
        Events  
      </Button>
    </Flex>
  );
}


export default Navbar
