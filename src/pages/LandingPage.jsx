import TestimonialCard from "../components/landing-page-components/TestimonialCard";
import HeroSection from "@/components/landing-page-components/HeroSection";
import Footer from "@/components/landing-page-components/Footer";
import { VStack } from "@chakra-ui/react";
import Features from "@/components/landing-page-components/Features";
import Navbar from "@/components/landing-page-components/Navbar";

function LandingPage() {
  return (
    <>
      <Navbar />
      <VStack maxW={"1440px"} minH={"100dvh"} mx={"auto"} gap={0}>
        <HeroSection />
        <Features />
        <TestimonialCard />
        <Footer />
      </VStack>
    </>
  );
}

export default LandingPage;
