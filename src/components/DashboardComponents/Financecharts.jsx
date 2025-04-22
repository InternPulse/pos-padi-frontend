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

const Financechartsdata = () => {
  // Responsive adjustments based on breakpoint - using percentages for height to fit container
  const strokeWidth = useBreakpointValue({ base: 1.5, md: 2, lg: 3 })
  const fontSize = useBreakpointValue({ base: "8px", sm: "10px", md: "12px", lg: "14px" })
  
  const chart = useChart({
    data: [
        { month: "Jan", Successful: 60, fail: 55 },
        { month: "Feb", Successful: 60, fail: 45 },
        { month: "Mar", Successful: 60, fail: 30 },
        { month: "Apr", Successful: 50, fail: 50 },
        { month: "May", Successful: 40, fail: 70 },
        { month: "Jun", Successful: 60, fail: 60 },
        { month: "Jul", Successful: 80, fail: 40 },
        { month: "Aug", Successful: 60, fail: 30 },
        { month: "Sep", Successful: 40, fail: 40 },
        { month: "Oct", Successful: 20, fail: 40 },
        { month: "Nov", Successful: 40, fail: 40 },
        { month: "Dec", Successful: 60, fail: 40 }
    ],
    series: [
      { name: "Successful", color: "blue.solid" },
      { name: "fail", color: "red.solid" },
    ],
  })


  const tickInterval = useBreakpointValue({ base: 2, sm: 1 })
  
  return (
    <Chart.Root chart={chart} width="100%" height="100%">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chart.data} margin={{ top: 5, right: 10, left: 5, bottom: 15 }}>
            <CartesianGrid stroke={chart.color("gray.200")} vertical={false} />
            <XAxis
              axisLine={false}
              tickLine={false}
              dataKey={chart.key("month")}
              tickFormatter={(value) => value.slice(0, 3)}
              tick={{ fontSize: fontSize }}
              // On smaller screens, show fewer ticks
              interval={tickInterval}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={() => null}
            />
            <Tooltip
              animationDuration={100}
              cursor={false}
              content={<Chart.Tooltip />}
            />
            
            {chart.series.map((item) => (
            <Line
                type="natural"
                key={item.name}
                isAnimationActive={false}
                dataKey={chart.key(item.name)}
                stroke={chart.color(item.color)}
                strokeWidth={strokeWidth}
                dot={false}
                fill={chart.color("bg")}
                opacity={chart.getSeriesOpacity(item.name)}
            />
            ))}
        </LineChart>
      </ResponsiveContainer>
    </Chart.Root>
  )
}

const Financecharts = () => {
  // Responsive text sizes
  const headerSize = useBreakpointValue({ base: "xs", sm: "sm", md: "md" })
  const legendSize = useBreakpointValue({ base: "2xs", sm: "xs" })
  const padding = useBreakpointValue({ base: 2, sm: 3, md: 4 })
  
  // Responsive layout direction
  const headerDirection = useBreakpointValue({ base: "column", sm: "row" })
  const legendSpacing = useBreakpointValue({ base: 2, md: 4 })

  return (
    <Card.Root w="full" h="full" bg="white" borderRadius="lg" p={padding} overflow="hidden">
      <Box 
        display="flex"
        flexDirection={headerDirection}
        justifyContent="space-between"
        alignItems={{ base: "flex-start", sm: "center" }}
        w="full"
        mb={2}>
        <Card.Header color="black" fontSize={headerSize} fontWeight="medium" py={1}>
          Monthly Transaction Trend
        </Card.Header>
        <HStack gap={legendSpacing} flexWrap="wrap" mt={{ base: 0, sm: 0 }} pt={{ base: 0, sm: 0 }}>
          <Text fontSize={legendSize} color="black">🔵 Successful</Text>
          <Text fontSize={legendSize} color="black">🔴 Fail</Text>
        </HStack>
      </Box>
     
      <Card.Body p="0" h="calc(100% - 40px)">
        <Box h="100%" w="100%">
          <Financechartsdata />
        </Box>
      </Card.Body>
    </Card.Root>
  )
}

export default Financecharts