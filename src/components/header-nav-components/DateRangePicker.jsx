import { useState } from 'react';
import PropTypes from 'prop-types';
import { Calendar } from 'lucide-react';
import { 
  Box, 
  IconButton,
  Flex, 
  Text, 
  Input
} from '@chakra-ui/react';
import { transactions } from '@/components/transactions/transactionsMockData';

/**
 * DateRangePicker Component
 * 
 * A reusable component that provides a date range selection interface with a dropdown.
 * It filters transaction data from mock data based on the selected date range.
 * 
 * @component
 * @example
 * ```jsx
 * <DateRangePicker 
 *   onDateRangeChange={({ startDate, endDate, transactions }) => {
 *     // Handle the date range change and transactions
 *   }} 
 * />
 * ```
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onDateRangeChange - Callback function called when date range changes
 * @param {Object} props.onDateRangeChange.startDate - Start date of the selected range
 * @param {Object} props.onDateRangeChange.endDate - End date of the selected range
 * @param {Array} props.onDateRangeChange.transactions - Array of transactions within the date range
 * @returns {JSX.Element} DateRangePicker component
 */
const DateRangePicker = ({ onDateRangeChange = () => {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [displayText, setDisplayText] = useState('Select Date Range');
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Filters transactions based on the selected date range
   */
  const filterTransactions = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    return transactions.filter(transaction => {
      const transactionDate = new Date(transaction.dateTime);
      return transactionDate >= start && transactionDate <= end;
    });
  };

  const handleApply = async () => {
    if (startDate && endDate) {
      setIsLoading(true);
      try {
        const formattedStart = new Date(startDate).toLocaleDateString();
        const formattedEnd = new Date(endDate).toLocaleDateString();
        setDisplayText(`${formattedStart} - ${formattedEnd}`);
        
        const filteredTransactions = filterTransactions(startDate, endDate);
        
        onDateRangeChange({ 
          startDate: new Date(startDate), 
          endDate: new Date(endDate),
          transactions: filteredTransactions
        });
        
        setIsOpen(false);
      } catch (error) {
        console.error('Error applying date range:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleClear = () => {
    setStartDate('');
    setEndDate('');
    setDisplayText('Select Date Range');
    onDateRangeChange({ 
      startDate: null, 
      endDate: null,
      transactions: []
    });
  };

  return (
    <Box position="relative" display="inline-block">
      <Flex
        as="button"
        alignItems="center"
        px={4}
        py={2.5}
        fontSize="sm"
        border="1px solid"
        borderColor={{base: 'gray.300', _dark: 'gray.600'}}
        borderRadius="md"
        bg={{base: 'white', _dark: 'gray.800'}}
        cursor="pointer"
        gap={3}
        onClick={() => setIsOpen(!isOpen)}
        opacity={isLoading ? 0.7 : 1}
        _hover={{ 
          bg: {base: 'gray.50', _dark: 'gray.700'},
          borderColor: {base: 'gray.400', _dark: 'gray.500'}
        }}
        _active={{
          bg: {base: 'gray.100', _dark: 'gray.600'},
          borderColor: {base: 'gray.500', _dark: 'gray.400'}
        }}
        transition="all 0.2s"
        boxSizing="border-box"
        w="auto"
        minW="fit-content"
        boxShadow=""
      >
        <Calendar size={16} style={{ color: 'currentColor' }} />
        <Text color={{base: 'gray.800', _dark: 'white'}}>
          {isLoading ? 'Loading...' : displayText}
        </Text>
      </Flex>
      
      {isOpen && (
        <Box
          position="absolute"
          top="12"
          right={0}
          left={{ base: 0, sm: 'auto' }}
          w={{ base: 'full', sm: '80', md: '96' }}
          bg={{base: 'white', _dark: 'gray.800'}}
          border="1px"
          borderColor={{base: 'gray.200', _dark: 'gray.600'}}
          borderRadius="md"
          boxShadow="md"
          zIndex={50}
          p={8}
        >
          <Flex justifyContent="space-between" alignItems="center" mb={6}>
            <Text 
              fontWeight="semibold" 
              color={{base: 'gray.800', _dark: 'white'}}
            >
              Filter by Date Range
            </Text>
            <IconButton
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
              icon={<Text color={{base: 'gray.600', _dark: 'gray.400'}}>✕</Text>}
            />
          </Flex>

          <Box mb={6}>
            <Text 
              fontSize="sm" 
              mb={2} 
              color={{base: 'gray.700', _dark: 'gray.300'}} 
              fontWeight="medium"
            >
              Start Date
            </Text>
            <Input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              bg={{base: 'white', _dark: 'gray.700'}}
              color={{base: 'gray.800', _dark: 'white'}}
              borderColor={{base: 'gray.300', _dark: 'gray.600'}}
            />
          </Box>
          
          <Box mb={6}>
            <Text 
              fontSize="sm" 
              mb={2} 
              color={{base: 'gray.700', _dark: 'gray.300'}} 
              fontWeight="medium"
            >
              End Date
            </Text>
            <Input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              min={startDate}
              bg={{base: 'white', _dark: 'gray.700'}}
              color={{base: 'gray.800', _dark: 'white'}}
              borderColor={{base: 'gray.300', _dark: 'gray.600'}}
            />
          </Box>

          <Flex justifyContent="flex-end" mt={6}>
            <Box
              as="button"
              px={4}
              py={2}
              mr={3}
              fontSize="sm"
              color={{base: 'gray.600', _dark: 'gray.400'}}
              bg="transparent"
              borderRadius="md"
              _hover={{ bg: {base: 'gray.100', _dark: 'gray.700'} }}
              onClick={handleClear}
            >
              Clear
            </Box>
            <Box
              as="button"
              px={4}
              py={2}
              fontSize="sm"
              color="white"
              bg="blue.500"
              _hover={{ bg: 'blue.600' }}
              borderRadius="md"
              onClick={handleApply}
            >
              Apply
            </Box>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

DateRangePicker.propTypes = {
  onDateRangeChange: PropTypes.func
};

export default DateRangePicker;