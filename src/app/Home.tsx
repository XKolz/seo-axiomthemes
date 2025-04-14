import AgencySection from "@/components/AgencySection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesCarousel from "@/components/ServicesCarousel";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import SubscribeSection from "@/components/SubscribeSection";
import React from "react";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AgencySection />
      <StatsSection />
      <ServicesCarousel />
      <SubscribeSection />
      <ServicesSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Home;
