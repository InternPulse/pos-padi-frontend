import { useState, useEffect } from 'react';
import { Box, Button } from '@chakra-ui/react';

export default function TransDashFilterbutton() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Mobile dropdown
  if (isMobile) {
    return (
      <Box mb={4}>
        <Box 
          as="select"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="md"
          height="40px"
          fontSize="13px"
          px={3}
          _focus={{ outline: 'none' }}
          _dark={{
            borderColor: 'gray.600',
            bg: 'gray.800',
            color: 'white'
          }}
          _light={{
            borderColor: 'gray.200',
            bg: 'white',
            color: 'gray.800'
          }}
        >
          <option value="12months">12 months</option>
          <option value="30days">30 days</option>
          <option value="7days">7 days</option>
          <option value="24hours">24 hours</option>
        </Box>
      </Box>
    );
  }

  // Desktop button group
  return (
    <Box 
      mb={4} 
      display="inline-flex" 
      border="1px solid" 
      borderColor="gray.200" 
      borderRadius="md"
      _dark={{
        borderColor: 'gray.600'
      }}
      _light={{
        borderColor: 'gray.200',
        bg: 'white',
        color: 'gray.800'
      }}
    >
      <Button
        borderRight="1px solid"
        borderColor="gray.200"
        borderRadius="none"
        borderLeftRadius="md"
        fontSize="13px"
        height="40px"
        _focus={{ outline: 'none' }}
        _dark={{
          borderColor: 'gray.600',
          bg: 'gray.800',
          color: 'white',
          _hover: { bg: 'gray.700' }
        }}
        _light={{
          borderColor: 'gray.200',
          bg: 'white',
          color: 'gray.800'
        }}
      >
        12 months
      </Button>
      <Button
        borderRight="1px solid"
        borderColor="gray.200"
        borderRadius="none"
        fontSize="13px"
        height="40px"
        _focus={{ outline: 'none' }}
        _dark={{
          borderColor: 'gray.600',
          bg: 'gray.800',
          color: 'white',
          _hover: { bg: 'gray.700' }
        }}
        _light={{
          borderColor: 'gray.200',
          bg: 'white',
          color: 'gray.800'
        }}
      >
        30 days
      </Button>
      <Button
        borderRight="1px solid"
        borderColor="gray.200"
        borderRadius="none"
        fontSize="13px"
        height="40px"
        _focus={{ outline: 'none' }}
        _dark={{
          borderColor: 'gray.600',
          bg: 'gray.800',
          color: 'white',
          _hover: { bg: 'gray.700' }
        }}
        _light={{
          borderColor: 'white',
          bg: 'white',
          color: 'gray.800'
        }}
      >
        7 days
      </Button>
      <Button
        borderRadius="none"
        borderRightRadius="md"
        fontSize="13px"
        height="40px"
        _focus={{ outline: 'none' }}
        _dark={{
          bg: 'gray.800',
          color: 'white',
          _hover: { bg: 'gray.700' }
        }}
        _light={{
            borderColor: 'gray.200',
            bg: 'white',
            color: 'gray.800'
          }}
      >
        24 hours
      </Button>
    </Box>
  );
}