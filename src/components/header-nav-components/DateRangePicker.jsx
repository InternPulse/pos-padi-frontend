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

/**
 * DateRangePicker Component
 * 
 * A reusable component that provides a date range selection interface with a dropdown.
 * It fetches transaction data from an API based on the selected date range.
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
   * Fetches transactions from the API based on the selected date range
   */
  const fetchTransactions = async (startDate, endDate) => {
    try {
      const response = await fetch(`/api/transactions?startDate=${startDate}&endDate=${endDate}`);
      if (!response.ok) {
        throw new Error('Failed to fetch transactions');
      }
      const data = await response.json();
      return data.map(transaction => ({
        reference: transaction.reference,
        amount: transaction.amount,
        customer: transaction.customer,
        type: transaction.type,
        agent: transaction.agent,
        dateTime: transaction.dateTime,
        status: transaction.status
      }));
    } catch (error) {
      console.error('Error fetching transactions:', error);
      return [];
    }
  };

  const handleApply = async () => {
    if (startDate && endDate) {
      setIsLoading(true);
      try {
        const formattedStart = new Date(startDate).toLocaleDateString();
        const formattedEnd = new Date(endDate).toLocaleDateString();
        setDisplayText(`${formattedStart} - ${formattedEnd}`);
        
        const transactions = await fetchTransactions(startDate, endDate);
        
        onDateRangeChange({ 
          startDate: new Date(startDate), 
          endDate: new Date(endDate),
          transactions
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
    onDateRangeChange(null);
  };

  return (
    <Box position="relative" display="inline-block">
      <Flex
        as="button"
        alignItems="center"
        px={4}
        py={2.5}
        fontSize="sm"
        border="1px"
        borderColor={{base: 'gray.200', _dark: 'gray.600'}}
        borderRadius="md"
        bg="transparent"
        cursor="pointer"
        gap={3}
        onClick={() => setIsOpen(!isOpen)}
        opacity={isLoading ? 0.7 : 1}
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