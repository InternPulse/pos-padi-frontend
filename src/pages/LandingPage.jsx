import TestimonialCard from "../components/landing-page-components/TestimonialCard";
import HeroSection from "@/components/landing-page-components/HeroSection";
import Footer from "@/components/landing-page-components/Footer";
import { VStack } from "@chakra-ui/react";
import Faq from "@/components/landing-page-components/Faq";
import Banner from "../components/landing-page-components/Banner";
import Header from "@/components/landing-page-components/Header";
import Features from "@/components/landing-page-components/Features";
import WhyPadi from "../components/landing-page-components/WhyPadi";

function LandingPage() {
  return (
    <VStack w="100%" minH="100dvh" spacing={0}>
      <Header />
      <HeroSection />
      <Features />
      <WhyPadi />
      <TestimonialCard />
      <Banner />
      <Faq />
      <Footer />
    </VStack>
  );
}

export default LandingPage;
