"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import {
  CartesianGrid,
  Legend,
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
  
  // Process transaction data to create chart data
  const chartData = useMemo(() => {
    const monthMap = {};

    const transactionsToProcess = filteredTransactions || transactions;
    transactionsToProcess.forEach((transaction) => {
      const dateObj = new Date(transaction.dateTime);
      const month = dateObj.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
      });

      if (!monthMap[month]) {
        monthMap[month] = { month, Successful: 0, failed: 0 };
      }

      if (transaction.status === "successful") {
        monthMap[month].Successful += 1;
      } else if (transaction.status === "failed") {
        monthMap[month].failed += 1;
      }
    });

    // Converting data to array for the chart and sorting by date
    const result = Object.values(monthMap).sort((a, b) =>
      new Date(`1 ${a.month}`) - new Date(`1 ${b.month}`)
    );

    // Add a tiny offset to first and last months to avoid edge issues
    if (result[0]) {
      result[0].Successful += 0.01;
      result[0].failed += 0.01;
    }
    
    if (result[result.length - 1]) {
      result[result.length - 1].Successful += 0.01;
      result[result.length - 1].failed += 0.01;
    }

    return result;
  }, [filteredTransactions, showEmptyState])
  
  const chart = useChart({
    data: chartData,
    series: [
      { name: "Successful", color: "blue.500" },
      { name: "failed", color: "red.500" },
    ],
  });

  // Determine if we should show all month labels or fewer based on screen size
  const tickInterval = useBreakpointValue({ base: 2, sm: 1 })
  
  return (
    <Chart.Root chart={chart} width="100%" height="100%">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart 
          data={chart.data} 
          margin={{ top: 5, right: 5, left: 5, bottom: 30 }}
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
            padding={{ left: 5, right: 5 }}
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
              key={item.name}
              type="monotone"
              dataKey={chart.key(item.name)}
              stroke={chart.color(item.color)}
              strokeWidth={strokeWidth}
              dot={false}
              activeDot={{
                r: 4,
                style: { fill: chart.color(item.color) }
              }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </Chart.Root>
  );
};

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
      bg={{base: 'white', _dark: 'gray.900'}}
      boxShadow={{base: "xs", _dark: '0 0 3px white'}}
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
          color={{base: "#626C7A", _dark: 'gray.400'}}
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
          px={{ base: 0, sm: 1 }}
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