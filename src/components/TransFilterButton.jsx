import { useState, useEffect } from 'react';
import { Box, Button } from '@chakra-ui/react';

export default function TransactionFilterButtonGroup({ onFilterChange }) {
  const [selectedFilter, setSelectedFilter] = useState('12months');
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Hardcoded data matching your screenshot
  const DummyData = [
    {
      reference: "HDKJNKR12",
      amount: "30,000.00",
      type: "Withdrawal",
      customer: "Biolaturvatto Adubi",
      date: "Jan 05, 2025, 10:48:00 AM",
      status: "Success(M)"
    },
    {
      reference: "FEGJNKR32",
      amount: "20,000.00",
      type: "Deposit",
      customer: "Oriorehu Mayowo",
      date: "Feb 14, 2025, 12:48:00 PM",
      status: "Success(M)"
    },
    {
      reference: "FEGJNKR32",
      amount: "12,000.00",
      type: "Transfer",
      customer: "Emmanuel Omobuwa",
      date: "Feb 27, 2025, 02:32:00 PM",
      status: "Failed"
    },
    {
      reference: "HDKGEF844",
      amount: "20,000.00",
      type: "Withdrawal",
      customer: "Abimbolo Yusuf",
      date: "Mar 02, 2025, 11:00:00 AM",
      status: "Success(M)"
    },
    {
      reference: "HDKCRTR22",
      amount: "37,000.00",
      type: "Deposit",
      customer: "Abdulwahab Habib",
      date: "Mar 18, 2025, 04:56:00 PM",
      status: "Success(M)"
    },
    {
      reference: "HDKJNKT13",
      amount: "5,000.00",
      type: "Transfer",
      customer: "Adamu Jibril",
      date: "Mar 28, 2025, 07:08:00 PM",
      status: "Success(M)"
    },
    {
      reference: "HDKJNKT13",
      amount: "5,000.00",
      type: "Transfer",
      customer: "Adamu Jibril",
      date: "Mar 28, 2025, 07:08:00 PM",
      status: "Success(M)"
    },
    {
      reference: "HDKJNKT13",
      amount: "5,000.00",
      type: "Transfer",
      customer: "Adamu Jibril",
      date: "April 18, 2025, 07:08:00 AM",
      status: "Success(M)"
    },
    {
      reference: "HDKJNKT13",
      amount: "5,000.00",
      type: "Transfer",
      customer: "Adamu Jibril",
      date: "Mar 28, 2025, 07:08:00 PM",
      status: "Success(M)"
    }
  ];

  useEffect(() => {
    const fetchTransactions = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Use hardcoded data
        const data = DummyData;
        
        // Convert date strings to Date objects for filtering
        const dataWithDates = data.map(item => ({
          ...item,
          dateObject: new Date(item.date.replace(',', ''))
        }));
        
        setTransactions(dataWithDates);
        filterTransactions(selectedFilter, dataWithDates);
      } catch (err) {
        console.error('Error:', err);
        setError(err.message);
        setTransactions([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  const filterTransactions = (filter, transactionsData = transactions) => {
    const currentDate = new Date();
    let filterDate = new Date();
    
    switch (filter) {
      case '12months':
        filterDate.setMonth(currentDate.getMonth() - 12);
        break;
      case '30days':
        filterDate.setDate(currentDate.getDate() - 30);
        break;
      case '7days':
        filterDate.setDate(currentDate.getDate() - 7);
        break;
      case '24hours':
        filterDate.setHours(currentDate.getHours() - 24);
        break;
      default:
        filterDate.setMonth(currentDate.getMonth() - 12);
    }
    
    const filtered = transactionsData.filter(transaction => {
      try {
        return transaction.dateObject >= filterDate && transaction.dateObject <= currentDate;
      } catch {
        return false;
      }
    });
    
    setFilteredTransactions(filtered);
    onFilterChange?.(filtered, filter);
    
    // Log filtered results to console
    // console.log(`Filtered by ${filter}:`, filtered);
    // console.log('Filter date range:', {
    //   from: filterDate.toISOString(),
    //   to: currentDate.toISOString()
    // });
  };

  
  const handleFilterChange = (filter) => {
    if (isLoading) return;
    setSelectedFilter(filter);
    filterTransactions(filter);
  };

  // ... (rest of your component code remains the same)
  const getButtonStyle = (filter, position) => {
    const isActive = selectedFilter === filter;
    const baseStyle = {
      height: '40px',
      fontSize: '13px',
      fontWeight: 'medium',
      border: '0px solid',
      borderColor: '#E2E8F0',
      _focus: { boxShadow: 'none' },
      _disabled: { opacity: 0.5, cursor: 'not-allowed' }
    };

    if (position === 'first') {
      baseStyle.borderRight = 'none';
      baseStyle.borderTopLeftRadius = '4px';
      baseStyle.borderBottomLeftRadius = '4px';
    } else if (position === 'middle') {
      baseStyle.borderRight = '0.1px solid #E2E8F0';
      baseStyle.borderLeft = '0.11px solid #E2E8F0';
      baseStyle.borderRadius = '0';
    } else if (position === 'last') {
      baseStyle.borderLeft = 'none';
      baseStyle.borderTopRightRadius = '4px';
      baseStyle.borderBottomRightRadius = '6px';
    }

    if (isActive) {
      baseStyle.backgroundColor = '#02B14F80';
      baseStyle.color = 'white';
      baseStyle._hover = { backgroundColor: '#02B14F80' };
    } else {
      baseStyle.backgroundColor = 'white';
      baseStyle.color = 'gray.700';
      baseStyle._hover = { backgroundColor: 'gray.50' };
    }

    return baseStyle;
  };

  return (
    <Box mb={4}>
      {error && (
        <Box mb={3} p={2} color="red.600" bg="red.50" fontSize="sm" borderRadius="md" borderWidth="1px">
          Error: {error}
        </Box>
      )}

      {isLoading && (
        <Box h="4px" bg="blue.200" mb={2} overflow="hidden">
          <Box h="full" bg="blue.500" animation="pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" />
        </Box>
      )}

      <Box display="inline-flex" borderRadius="md" borderWidth="1px" borderColor="gray.200">
        <Button
          {...getButtonStyle('12months', 'first')}
          onClick={() => handleFilterChange('12months')}
          isDisabled={isLoading}
        >
          12 months
        </Button>
        <Button
          {...getButtonStyle('30days', 'middle')}
          onClick={() => handleFilterChange('30days')}
          isDisabled={isLoading}
        >
          30 days
        </Button>
        <Button
          {...getButtonStyle('7days', 'middle')}
          onClick={() => handleFilterChange('7days')}
          isDisabled={isLoading}
        >
          7 days
        </Button>
        <Button
          {...getButtonStyle('24hours', 'last')}
          onClick={() => handleFilterChange('24hours')}
          isDisabled={isLoading}
        >
          24 hours
        </Button>
      </Box>
    </Box>
  );
}