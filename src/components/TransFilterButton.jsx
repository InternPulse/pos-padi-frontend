import { useState, useEffect } from 'react';
import { Box, Button, NativeSelect } from '@chakra-ui/react';

export default function TransDashFilterbutton({ onFilterChange }) {
  const [isMobile, setIsMobile] = useState(false);
  const [activeFilter, setActiveFilter] = useState('12months'); 

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 770);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Handle filter change and notify parent component
const handleFilterChange = (filter) => {
  setActiveFilter(filter);
  onFilterChange(filter);
};


  // Mobile dropdown
  if (isMobile) {
    return (
      <Box mb={4}>
        <NativeSelect.Root 
            size="lg" 
            width="max-content"
            borderRadius="lg"
            height="40px"
            fontSize="8.5rem"
            pr={2}
            _focus={{ outline: 'none' }}
            _dark={{
              borderColor: 'gray.600',
              color: 'white'
            }}
            _light={{
              borderColor: 'gray.200',
              color: 'gray.800',
            }}
            value={activeFilter}
            onChange={(e) => handleFilterChange(e.target.value)}
          >
  <NativeSelect.Field  >
    <option value="12months">12 months</option>
    <option value="30days">30 days</option>
    <option value="7days">7 days</option>
    <option value="24hours">24 hours</option>
  </NativeSelect.Field>
  <NativeSelect.Indicator />
</NativeSelect.Root>
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
         onClick={() => handleFilterChange('12months')}
        borderRight="1px solid"
        borderColor="gray.200"
        borderRadius="none"
        borderLeftRadius="md"
        fontSize="13px"
        height="40px"
        _focus={{ outline: 'none' }}
        _dark={{
          borderColor: 'gray.600',
          bg: activeFilter === '12months' ? 'gray.700' : 'gray.800',
          color: 'white',
          _hover: { bg: 'gray.700' }
        }}
        _light={{
          borderColor: 'gray.200',
          bg: activeFilter === '12months' ? 'green.100' : 'white',
          color: 'gray.800'
        }}
      >
        12 months
      </Button>
      <Button
        onClick={() => handleFilterChange('30days')}
        borderRight="1px solid"
        borderColor="gray.200"
        borderRadius="none"
        fontSize="13px"
        height="40px"
        _focus={{ outline: 'none' }}
        _dark={{
          borderColor: 'gray.600',
          bg: activeFilter === '30days' ? 'gray.700' : 'gray.800',
          color: 'white',
          _hover: { bg: 'gray.700' }
        }}
        _light={{
          borderColor: 'gray.200',
          bg: activeFilter === '30days' ? 'green.100' : 'white',
          color: 'gray.800'
        }}
      >
        30 days
      </Button>
      <Button
        onClick={() => handleFilterChange('7days')}
        borderRight="1px solid"
        borderColor="gray.200"
        borderRadius="none"
        fontSize="13px"
        height="40px"
        _focus={{ outline: 'none' }}
        _dark={{
          borderColor: 'gray.600',
          bg: activeFilter === '7days' ? 'gray.700' : 'gray.800',
          color: 'white',
          _hover: { bg: 'gray.700' }
        }}
        _light={{
          borderColor: 'white',
          bg: activeFilter === '7days' ? 'green.100' : 'white',
          color: 'gray.800'
        }}
      >
        7 days
      </Button>
      <Button
        onClick={() => handleFilterChange('24hours')}
        borderRadius="none"
        borderRightRadius="md"
        fontSize="13px"
        height="40px"
        _focus={{ outline: 'none' }}
        _dark={{
          bg: activeFilter === '24hours' ? 'gray.700' : 'gray.800',
          color: 'white',
          _hover: { bg: 'gray.700' }
        }}
        _light={{
          borderColor: 'gray.200',
          bg: activeFilter === '24hours' ? 'green.100' : 'white',
          color: 'gray.800'
        }}
      >
        24 hours
      </Button>
    </Box>
  );
}