"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"


import { Card, HStack, Text } from "@chakra-ui/react"

const Financechartsdata= () => {
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

  return (
    <Chart.Root maxH="lg" chart={chart}>
        <LineChart data={chart.data}>
            <CartesianGrid stroke={chart.color("gray.200")} vertical={false}/>
            <XAxis
            axisLine={false}
            tickLine={false}
            dataKey={chart.key("month")}
            tickFormatter={(value) => value.slice(0, 3)}
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
                strokeWidth={3}
                dot={false}
                fill={chart.color("bg")}
                opacity={chart.getSeriesOpacity(item.name)}
            />
            ))}
        </LineChart>
    </Chart.Root>
  )
}
const Financecharts = () =>{
return(
  <Card.Root w="full" h="full" bg="white" borderRadius="lg" p={4} overflow="hidden">
    <HStack
      justifyContent="space-between"
      alignItems="center"
      w="full"
      mb={4}>
         <Card.Header color="black" > Monthly Transaction Trend </Card.Header>
         <HStack gap="6" pt="1.5rem" >
            <Text fontSize="xs" color="black">🔵 Successful</Text>
            <Text fontSize="xs" color="black">🔴 Fail</Text>
         </HStack>
      </HStack>
   
    <Card.Body p="0">
      <Financechartsdata />
    </Card.Body>
  </Card.Root>
)
}
export default Financecharts