
import TestimonialCard from '../components/landing-page-components/TestimonialCard'
import HeroSection from '@/components/landing-page-components/HeroSection'
import Footer from '@/components/landing-page-components/Footer'
import { VStack } from '@chakra-ui/react'
import Faq from '@/components/landing-page-components/Faq'

function LandingPage() {
  return (
    <VStack maxW={'1280px'} minH={'100dvh'} mx={'auto'} gap={0}>
      <HeroSection />
      <TestimonialCard />
      <Faq/>
      <Footer />
    </VStack>
  ) 
}

export default LandingPage