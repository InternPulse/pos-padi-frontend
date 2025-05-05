import React from 'react'
import { VStack } from '@chakra-ui/react'
import Header from '@/components/landing-page-components/Header'
import Footer from '@/components/landing-page-components/Footer'

const LandingPageLayout = ({ children }) => {
  return (
    <VStack  w="100%" minH="100dvh" spacing={0}>
      <Header />
      {children}
      <Footer />
    </VStack>
  )
}

export default LandingPageLayout