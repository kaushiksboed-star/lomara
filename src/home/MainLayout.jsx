import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import HeroSection from "./HeroSection";
import RecommendationSection from "./RecommendationSection";
import ServicesSection from "./ServicesSection";
import RecommendationInfoSection from "./RecommendationInfoSection";
import FooterSection from "./FooterSection";
import FooterBottomSection from "./FooterBottomSection";

function MainLayout() {
  return (
    <div className="layout-theme">
      <Sidebar />

      <div className="main-content">
        <Header />
        <HeroSection />
        <RecommendationSection />
        <ServicesSection />
        <RecommendationInfoSection />
        <FooterSection />
        <FooterBottomSection />
      </div>
    </div>
  );
}

export default MainLayout;
