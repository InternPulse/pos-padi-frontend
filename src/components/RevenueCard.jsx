import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Flex, 
  Text, 
  VStack 
} from '@chakra-ui/react';

export default function RevenueCard({ 
  amount = "N 150,967.64", 
  percentageChange = -70, 
  timeframe = "last month"
}) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  // Generate chart data based on percentage change
  const generateChartData = () => {
    const baseData = [20, 35, 25, 40, 30, 45, 35, 50];
    return percentageChange >= 0
      ? [...baseData, 55, 65, 60, 70, 75, 85]
      : [...baseData, 45, 35, 30, 25, 20, 15];
  };

  const barData = generateChartData();
  const isNegative = percentageChange < 0;

  return (
    <Flex justify="center" align="center" p={2}>
      <Box 
        bg="white" 
        borderRadius="md" 
        boxShadow="md" 
        w="100%" 
        maxW="xs" 
        p={3}
      >
        {/* Revenue title and waveform chart */}
        <Box 
          borderWidth="1px"
          borderStyle="solid" 
          borderColor="gray.200" 
          borderRadius="md" 
          p={2} 
          mb={2}
        >
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontSize="sm" fontWeight="medium" color="gray.700">
              Revenue
            </Text>
            <Flex 
              h="32px" 
              w="96px" 
              alignItems="flex-end" 
              role="img" 
              aria-label="Revenue trend visualization"
              gap="1px"
            >
              {barData.map((height, index) => (
                <Box 
                  key={index}
                  w="3px" 
                  bg="orange.500" 
                  borderTopRadius="sm"
                  height={isVisible ? `${height}%` : "0%"}
                  transition="all 0.5s ease-out"
                  transitionDelay={`${index * 50}ms`}
                />
              ))}
            </Flex>
          </Flex>
        </Box>
        
        {/* Amount and percentage change */}
        <Box 
          borderWidth="1px"
          borderStyle="solid" 
          borderColor="gray.200" 
          borderRadius="md" 
          p={2}
        >
          <VStack spacing={0}>
            <Text fontSize="lg" fontWeight="bold" color="gray.800">
              {amount}
            </Text>
            <Text fontSize="xs" color="black">
              {Math.abs(percentageChange)}% {isNegative ? 'decrease' : 'increase'} from {timeframe}
            </Text>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
