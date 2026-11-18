"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProgramsSection from "@/components/ProgramsSection";
import LinkAccreditation from "@/components/LinkAccreditation";
import WhyChooseSection from "@/components/WhyChooseSection";
import LeadershipMessageSection from "@/components/LeadershipMessageSection";
import CampusFacilitiesSection from "@/components/CampusFacilitiesSection";
import EventsNoticeSection from "@/components/EventsNoticeSection";
import Footer from "@/components/Footer";
import TourModal from "@/components/TourModal";
import SearchModal from "@/components/SearchModal";
import FloatingActions from "@/components/FloatingActions";

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

      {/* 4. Link & Accreditation: Authentic Partner & Regulatory Logos from diet.ac */}
      <LinkAccreditation />

      {/* 5. Section 3: Why Choose DIET (Exact Redesign: Split Hero + 6 Cards) */}
      <WhyChooseSection onOpenTourModal={() => setTourOpen(true)} />

      {/* 6. Section 4: Leadership Messages (Chairman, CEO, ED Messages from diet.ac) */}
      <LeadershipMessageSection />

      {/* 7. Section 5: News, Events & Official Notice Bulletin */}
      <EventsNoticeSection />

      {/* 9. Institutional Footer */}
      <Footer />

      {/* Interactive Modals */}
      <TourModal isOpen={tourOpen} onClose={() => setTourOpen(false)} />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Floating Action Icons & Scroll-to-Top */}
      <FloatingActions />
    </main>
  );
}
