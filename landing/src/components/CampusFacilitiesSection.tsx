"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Users,
  Zap,
  TrendingUp,
  Monitor,
  BookOpen,
  FlaskConical,
  LayoutGrid,
  Volleyball,
  ArrowRight,
  X,
  CheckCircle2,
  Calendar,
} from "lucide-react";

interface FacilityItem {
  id: string;
  title: string;
  icon: React.ElementType;
  image: string;
  description: string;
  specs: string[];
}

const facilities: FacilityItem[] = [
  {
    id: "computer-labs",
    title: "Computer Labs",
    icon: Monitor,
    image: "/diet/campus/facility-computer-labs.webp",
    description: "High-performance labs for programming, design and research.",
    specs: [
      "120+ High-Performance Workstations",
      "Dedicated Gigabit Fiber Network",
      "AutoCAD, MATLAB & Packet Tracer Installed",
      "Linux Kernel & Full-Stack Prototyping Benches",
    ],
  },
  {
    id: "digital-library",
    title: "Digital Library",
    icon: BookOpen,
    image: "/diet/campus/facility-digital-library.webp",
    description: "A rich collection of books, journals and online resources.",
    specs: [
      "25,000+ Engineering & Tech Textbooks",
      "IEEE & Springer Online Digital Access",
      "Quiet Individual & Group Research Alcoves",
      "Dedicated E-Library Terminals for Students",
    ],
  },
  {
    id: "advanced-labs",
    title: "Advanced Labs",
    icon: FlaskConical,
    image: "/diet/campus/facility-advanced-labs.webp",
    description: "Well-equipped laboratories for hands-on learning and innovation.",
    specs: [
      "Microcontroller & IoT Development Boards",
      "Digital Signal Oscilloscopes & Multimeters",
      "Telecommunication & Signal Processing Testbeds",
      "Power Electronics & Circuit Simulation Stations",
    ],
  },
  {
    id: "modern-classrooms",
    title: "Modern Classrooms",
    icon: LayoutGrid,
    image: "/diet/campus/facility-modern-classrooms.webp",
    description: "Smart, comfortable and technology-enabled classrooms.",
    specs: [
      "Interactive Smart Boards & 4K Projectors",
      "Acoustically Treated Audio Systems",
      "Ergonomic Seating Designed for Comfort",
      "Google Classroom & Blended Learning Integration",
    ],
  },
  {
    id: "sports-recreation",
    title: "Sports & Recreation",
    icon: Volleyball,
    image: "/diet/campus/facility-sports-recreation.webp",
    description: "Facilities for indoor and outdoor sports to keep students active and healthy.",
    specs: [
      "Multi-Sport Outdoor Basketball & Badminton Courts",
      "Indoor Table Tennis, Carrom & Chess Club",
      "Annual Inter-Polytechnic Cricket & Football Meets",
      "Student Fitness & Wellness Activities",
    ],
  },
  {
    id: "student-clubs",
    title: "Student Clubs",
    icon: Users,
    image: "/diet/campus/facility-student-clubs.webp",
    description: "A platform to explore interests, build skills and lead initiatives.",
    specs: [
      "DIET Robotics & AI Innovation Club",
      "Competitive Programming & Web Dev Guild",
      "Debating Society & English Language Circle",
      "Cultural & Heritage Arts Committee",
    ],
  },
];

export default function CampusFacilitiesSection() {
  const [selectedFacility, setSelectedFacility] = useState<FacilityItem | null>(null);

  return (
    <section id="campus-life" className="w-full py-16 sm:py-24 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Hero Split: Left Content + Right Angled Student Photo with Yellow Accent */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-14">
          {/* Left Column (7 cols): Kicker, Headline, Description, 4 Quick Icons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 text-left"
          >
            {/* Top Kicker with Gold Bar */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-7 h-[3.5px] bg-[#F4B51B] rounded-full inline-block" />
              <span className="text-[12.5px] sm:text-[13.5px] font-extrabold text-[#09285F] tracking-tight">
                Campus Life &amp; Facilities
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#09285F] tracking-[-0.025em] leading-[1.12] mb-3.5">
              More Than
              <br />
              Just <span className="text-[#F4B51B]">Academics</span>
            </h2>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-[15px] text-[#667085] leading-relaxed max-w-xl font-normal mb-8 sm:mb-9">
              A vibrant, supportive and future-focused campus where students learn, collaborate, create and grow.
            </p>

            {/* 4 Feature Items in a Row */}
            <div className="flex items-center gap-4 sm:gap-7 max-w-md">
              {[
                { label: "Learn", icon: GraduationCap },
                { label: "Connect", icon: Users },
                { label: "Create", icon: Zap },
                { label: "Grow", icon: TrendingUp },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="flex flex-col items-center text-center group cursor-default"
                  >
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#EEF4FB] border border-[#D9E5F5]/70 flex items-center justify-center text-[#123DB8] group-hover:bg-[#123DB8] group-hover:text-white transition-colors duration-200 mb-2">
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <span className="text-xs sm:text-[13px] font-extrabold text-[#09285F]">
                      {item.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column (5 cols): Building & Students Photo with Offset Yellow Accent Card */}
          <div className="lg:col-span-5 relative w-full max-w-[500px] lg:max-w-none mx-auto pr-3 pb-3 sm:pr-4 sm:pb-4">
            {/* Golden Yellow Offset Background Accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="absolute inset-0 translate-x-3.5 sm:translate-x-4 translate-y-3.5 sm:translate-y-4 bg-[#F4B51B] rounded-[32px] sm:rounded-[40px] z-0"
            />

            {/* Main Students Photo Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="relative z-10 rounded-[28px] sm:rounded-[36px] overflow-hidden aspect-[1.64/1] w-full border-[3px] border-white bg-slate-100 shadow-sm"
            >
              <Image
                src="/diet/campus/campus-hero-students.webp"
                alt="DIET Students collaborating at campus"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom 6 Facilities Cards Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {facilities.map((facility, idx) => {
            const Icon = facility.icon;
            return (
              <motion.div
                key={facility.id}
                onClick={() => setSelectedFacility(facility)}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{
                  y: -5,
                  borderColor: "rgba(18, 61, 184, 0.35)",
                  boxShadow: "0 15px 30px -8px rgba(0, 0, 0, 0.08)",
                  transition: { duration: 0.2 },
                }}
                className="group bg-white rounded-[24px] border border-gray-200/90 p-3 sm:p-3.5 flex items-center gap-3.5 sm:gap-4 transition-colors cursor-pointer"
              >
                {/* Left Photo Container */}
                <div className="relative w-[115px] sm:w-[126px] h-[105px] sm:h-[114px] rounded-[18px] overflow-hidden flex-shrink-0 bg-slate-100">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                    sizes="(max-width: 640px) 115px, 126px"
                  />
                </div>

                {/* Right Content */}
                <div className="flex-1 min-w-0 flex flex-col justify-between h-[105px] sm:h-[114px] py-0.5">
                  <div>
                    {/* Category Icon */}
                    <div className="text-[#09285F] mb-1 transition-transform duration-200 group-hover:scale-110 origin-left">
                      <Icon size={18} strokeWidth={2.2} />
                    </div>

                    {/* Title */}
                    <h3 className="text-[14.5px] sm:text-[15.5px] font-extrabold text-[#09285F] group-hover:text-[#123DB8] transition-colors leading-tight mb-1 truncate">
                      {facility.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[11px] sm:text-[11.5px] text-[#667085] leading-relaxed line-clamp-2">
                      {facility.description}
                    </p>
                  </div>

                  {/* Bottom Row: Yellow Circular Arrow Button */}
                  <div className="flex justify-end">
                    <div className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full border border-[#F4B51B] bg-white flex items-center justify-center text-[#F4B51B] group-hover:bg-[#F4B51B] group-hover:text-[#09285F] transition-all duration-200 group-hover:scale-105">
                      <ArrowRight size={11} strokeWidth={2.4} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Modal Lightbox for Facility Details with Framer Motion AnimatePresence */}
      <AnimatePresence>
        {selectedFacility && (
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedFacility(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 18 }}
              transition={{ type: "spring", damping: 25, stiffness: 320 }}
              className="relative max-w-xl w-full bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedFacility(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Photo Header */}
              <div className="relative aspect-[16/10] w-full bg-slate-900">
                <Image
                  src={selectedFacility.image}
                  alt={selectedFacility.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09285F]/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F4B51B] uppercase tracking-wider mb-1">
                    <selectedFacility.icon size={15} />
                    <span>DIET Campus Facility</span>
                  </div>
                  <h3 className="text-2xl font-black">{selectedFacility.title}</h3>
                </div>
              </div>

              {/* Details Body */}
              <div className="p-6 sm:p-7 space-y-4">
                <p className="text-sm text-[#475467] leading-relaxed">
                  {selectedFacility.description}
                </p>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#09285F] mb-2.5">
                    Key Specifications &amp; Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedFacility.specs.map((spec, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs text-[#344054] bg-[#F8FAFC] p-2.5 rounded-xl border border-gray-100"
                      >
                        <CheckCircle2 size={14} className="text-[#F4B51B] flex-shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <a
                    href="#admission"
                    onClick={() => setSelectedFacility(null)}
                    className="inline-flex items-center gap-2 bg-[#09285F] hover:bg-[#123DB8] text-white text-xs font-bold px-4 py-2.5 rounded-full transition shadow-sm hover:scale-102 active:scale-98"
                  >
                    <Calendar size={13} />
                    <span>Book a Campus Tour</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedFacility(null)}
                    className="text-xs text-[#667085] hover:text-[#09285F] font-semibold cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
