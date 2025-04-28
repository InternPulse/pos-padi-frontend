
import TestimonialCard from '../components/landing-page-components/TestimonialCard'
import Footer from '@/components/Footer'
import { VStack } from '@chakra-ui/react'

function LandingPage() {
  return (
    <VStack maxW={'1280px'} minH={'100dvh'} mx={'auto'} gap={0}>
      <TestimonialCard />
      <Footer />
    </VStack>
  ) 
}

export default LandingPage