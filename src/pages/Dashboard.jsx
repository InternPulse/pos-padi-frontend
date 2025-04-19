import Financecharts from "@/components/DashboardComponents/Financecharts"
import { Box } from "@chakra-ui/react"

function Dashboard() {
  return (     
    <Box bg="white" w="100%" h="100%">
      <Financecharts />
    </Box>
  )
}

export default Dashboard