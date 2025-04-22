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
} from "recharts"


import { Card} from "@chakra-ui/react"
// $ Transactions Data
import {transactions} from "../transactions/transactionsMockData";

const Financechartsdata= () => {
  const monthMap = {};

  transactions.forEach((transaction) => {
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

  // Step 2: Convert to array for the chart
  const chartData = Object.values(monthMap).sort((a, b) =>
    new Date(`1 ${a.month}`) - new Date(`1 ${b.month}`)
  );

  // Step 3: Hook up with Chakra UI Chart
  const chart = useChart({
    data: chartData,
    series: [
      { name: "Successful", color: "blue.solid" },
      { name: "failed", color: "red.solid" },
    ],
  });

  return (
    <Chart.Root maxH="lg" h="95%" marginLeft="-35px" paddingTop="10px" chart={chart}>
        <LineChart
        width={chart.width}
        height={chart.height}
        data={chart.data}>
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
            tick={true}
            />
            <Tooltip
            animationDuration={100}
            cursor={false}
            content={<Chart.Tooltip />}
            />
            
            <Legend content={<Chart.Legend interaction="hover" />} />
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
  <Card.Root w="full" h="full" bg={{base: 'white', _dark: 'gray.900'}} boxShadow={{base: "xs", _dark: '0 0 3px white'}}  borderRadius="lg" p={4} overflow="hidden">
    <Card.Header padding="0" color={{base: "#626C7A" , _dark: 'gray.400'}} fontSize={{base: "xs",  md:"sm"}} > Monthly Transaction Trend </Card.Header>
      <Card.Body p="0" overflow="hidden" h="full" w="full">
      <Financechartsdata />
    </Card.Body>
  </Card.Root>
)
}
export default Financecharts