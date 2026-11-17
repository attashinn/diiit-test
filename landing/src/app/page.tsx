"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProgramsSection from "@/components/ProgramsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CampusFacilitiesSection from "@/components/CampusFacilitiesSection";
import AdmissionSection from "@/components/AdmissionSection";
import EventsNoticeSection from "@/components/EventsNoticeSection";
import PartnersMarquee from "@/components/PartnersMarquee";
import Footer from "@/components/Footer";
import TourModal from "@/components/TourModal";
import SearchModal from "@/components/SearchModal";

export default function Home() {
  const [tourOpen, setTourOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Floating/Fixed Navbar: Persistent on scroll, 0 gap at top */}
      <Navbar onOpenSearch={() => setSearchOpen(true)} />

      {/* 2. Hero Section: Official Campus Photo, Stats Card */}
      <Hero onOpenTourModal={() => setTourOpen(true)} />

      {/* 3. Section 2: Our Programs (6 Diploma Engineering Departments) */}
      <ProgramsSection />

      {/* 4. Section 3: Why Choose DIET (Exact Redesign: Split Hero + 6 Cards) */}
      <WhyChooseSection onOpenTourModal={() => setTourOpen(true)} />

      {/* 5. Section 4: Campus Facilities & Student Life (Real DIET Lab & Event Photos) */}
      <CampusFacilitiesSection />

      {/* 6. Section 5: Admissions 2026-2027 (3 Steps, Eligibility, Immediate Inquiry) */}
      <AdmissionSection />

      {/* 7. Section 6: News, Events & Official Notice Bulletin */}
      <EventsNoticeSection />

      {/* 8. Section 7: Government Affiliations & Global Partner Marquee */}
      <PartnersMarquee />

      {/* 9. Institutional Footer */}
      <Footer />

      {/* Interactive Modals */}
      <TourModal isOpen={tourOpen} onClose={() => setTourOpen(false)} />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </main>
  );
}
