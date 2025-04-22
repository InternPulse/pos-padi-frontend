"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer
} from "recharts"
import { Card, HStack, Text, Box, useBreakpointValue } from "@chakra-ui/react"
import { useMemo } from "react"
import { transactions } from "@/components/transactions/transactionsMockData" 

// Custom tooltip component to show transaction counts
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Box
        bg="var(--chakra-colors-white, white)"
        color="var(--chakra-colors-gray-900, black)"
        p={2}
        border="1px solid"
        borderColor="var(--chakra-colors-gray-200, #E2E8F0)"
        borderRadius="md"
        boxShadow="sm"
        fontSize="sm"
      >
        <Text fontWeight="bold" mb={1}>{label}</Text>
        <HStack color="blue.500" mb={1}>
          <Box w={2} h={2} borderRadius="full" bg="blue.500" />
          <Text>Successful: {Math.floor(payload[0].value)}</Text>
        </HStack>
        <HStack color="red.500">
          <Box w={2} h={2} borderRadius="full" bg="red.500" />
          <Text>Failed: {Math.floor(payload[1].value)}</Text>
        </HStack>
      </Box>
    );
  }
  return null;
};

const Financechartsdata = ({ filteredTransactions, showEmptyState }) => {
  // Responsive adjustments based on breakpoint
  const strokeWidth = useBreakpointValue({ base: 1.5, md: 2, lg: 3 })
  const fontSize = useBreakpointValue({ base: "8px", sm: "10px", md: "12px", lg: "14px" })
  
  // Create a map to organize transactions by month
  const monthMap = {
    Jan: { month: "Jan", Successful: 0, fail: 0 },
    Feb: { month: "Feb", Successful: 0, fail: 0 },
    Mar: { month: "Mar", Successful: 0, fail: 0 },
    Apr: { month: "Apr", Successful: 0, fail: 0 },
    May: { month: "May", Successful: 0, fail: 0 },
    Jun: { month: "Jun", Successful: 0, fail: 0 },
    Jul: { month: "Jul", Successful: 0, fail: 0 },
    Aug: { month: "Aug", Successful: 0, fail: 0 },
    Sep: { month: "Sep", Successful: 0, fail: 0 },
    Oct: { month: "Oct", Successful: 0, fail: 0 },
    Nov: { month: "Nov", Successful: 0, fail: 0 },
    Dec: { month: "Dec", Successful: 0, fail: 0 }
  };
  
  // Process transaction data to create chart data
  const chartData = useMemo(() => {
    if (showEmptyState) {
      // Return empty data structure for all months
      return Object.keys(monthMap).map(month => ({
        month,
        Successful: 0,
        fail: 0
      }));
    }
    
    // Create a copy of the monthMap for processing
    const processedMonthMap = { ...monthMap };
    
    // Process each transaction
    const transactionsToProcess = filteredTransactions || transactions;
    transactionsToProcess.forEach(transaction => {
      // Extract month from dateTime
      const dateStr = transaction.dateTime
      const monthStr = dateStr.substring(0, 3)
      
      // Increment the appropriate counter
      if (transaction.status === "successful") {
        processedMonthMap[monthStr].Successful += 1
      } else {
        processedMonthMap[monthStr].fail += 1
      }
    })
    
    // Convert map to array and add a little offset to ensure lines don't reach the very edge
    const result = Object.values(processedMonthMap);
    
    // Add a tiny offset to first and last months to avoid edge issues
    if (result[0]) {
      result[0].Successful += 0.01;
      result[0].fail += 0.01;
    }
    
    if (result[result.length - 1]) {
      result[result.length - 1].Successful += 0.01;
      result[result.length - 1].fail += 0.01;
    }
    
    return result;
  }, [filteredTransactions, showEmptyState])
  
  const chart = useChart({
    data: chartData,
    series: [
      { name: "Successful", color: "blue.500" },
      { name: "fail", color: "red.500" },
    ],
  })

  // Determine if we should show all month labels or fewer based on screen size
  const tickInterval = useBreakpointValue({ base: 2, sm: 1 })
  
  return (
    <Chart.Root chart={chart} width="100%" height="100%">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart 
          data={chart.data} 
          margin={{ top: 5, right: 10, left: 10, bottom: 30 }}
        >
          <CartesianGrid stroke="var(--chakra-colors-gray-200, #E2E8F0)" vertical={false} />
          <XAxis
            axisLine={false}
            tickLine={false}
            dataKey={chart.key("month")}
            tickFormatter={(value) => value.slice(0, 3)}
            tick={{ fontSize: fontSize, fill: "currentColor" }}
            interval={tickInterval}
            height={25}
            dy={15}
            padding={{ left: 10, right: 10 }}
            style={{ zIndex: 1000 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={() => null}
            padding={{ top: 20, bottom: 20 }}
          />
          <Tooltip 
            content={<CustomTooltip />}
            cursor={{ stroke: "var(--chakra-colors-gray-200, #E2E8F0)", strokeDasharray: "3 3" }}
          />
          
          {chart.series.map((item) => (
            <Line
              type="monotone"
              key={item.name}
              dataKey={chart.key(item.name)}
              stroke={chart.color(item.color)}
              strokeWidth={strokeWidth}
              dot={true}
              activeDot={{ r: 6, strokeWidth: 1 }}
              fill="transparent"
              opacity={chart.getSeriesOpacity(item.name)}
              connectNulls={true}
              style={{ zIndex: 5 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </Chart.Root>
  )
}

const Financecharts = ({ filteredTransactions, showEmptyState }) => {
  // Responsive text sizes
  const headerSize = useBreakpointValue({ base: "xs", sm: "sm", md: "md" })
  const legendSize = useBreakpointValue({ base: "2xs", sm: "xs" })
  const padding = useBreakpointValue({ base: 2, sm: 3, md: 4 })
  
  // Responsive layout direction
  const headerDirection = useBreakpointValue({ base: "column", sm: "row" })
  const legendSpacing = useBreakpointValue({ base: 2, md: 4 })

  return (
    <Card.Root 
      w="full" 
      h="full" 
      borderRadius="lg" 
      p={padding} 
      overflow="hidden"
      position="relative"
      zIndex={10}
    >
      <Box 
        display="flex"
        flexDirection={headerDirection}
        justifyContent="space-between"
        alignItems={{ base: "flex-start", sm: "center" }}
        w="full"
        mb={2}
        px={{ base: 1, sm: 2 }}
        position="relative"
        zIndex={10}
      >
        <Card.Header 
          fontSize={headerSize} 
          fontWeight="medium" 
          py={1}
          pl={{ base: 2, sm: 2 }}
          position="relative"
          zIndex={10}
        >
          Monthly Transaction Trend
        </Card.Header>
        <HStack 
          gap={legendSpacing} 
          flexWrap="wrap" 
          mt={{ base: 0, sm: 0 }} 
          pt={{ base: 0, sm: 0 }}
          justify={{ base: "flex-start", sm: "flex-end" }}
          position="relative"
          zIndex={10}
        >
          <Text fontSize={legendSize}>🔵 Successful</Text>
          <Text fontSize={legendSize}>🔴 Failed</Text>
        </HStack>
      </Box>
     
      <Card.Body p="0" h="calc(100% - 40px)">
        <Box 
          h="100%" 
          w="100%" 
          position="relative"
          px={{ base: 2, sm: 2 }}
          ml={{ base: -1, sm: 0 }}
        >
          <Box 
            w="100%" 
            h="100%"
            position="relative"
            overflow="hidden"
          >
            <Financechartsdata 
              filteredTransactions={filteredTransactions} 
              showEmptyState={showEmptyState}
            />
          </Box>
        </Box>
      </Card.Body>
    </Card.Root>
  )
}

export default Financecharts