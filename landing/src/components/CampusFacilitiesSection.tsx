"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  BookOpen,
  Cpu,
  LayoutGrid,
  Wrench,
  Trophy,
  ArrowRight,
  X,
  CheckCircle2,
  Calendar,
  Sparkles,
  Play,
  Layers,
  Users,
  Compass,
  Building,
  Check,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

interface CampusFacilitiesSectionProps {
  onOpenTourModal?: () => void;
}

interface FacilityItem {
  id: string;
  category: "labs" | "learning" | "life";
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  iconColor: string;
  image: string;
  description: string;
  highlights: string[];
  specs: string[];
}

const facilities: FacilityItem[] = [
  {
    id: "computer-labs",
    category: "labs",
    badge: "120+ Workstations",
    badgeColor: "bg-blue-50 text-[#0A44B6] border-blue-200/80",
    title: "High-Performance Computer Labs",
    subtitle: "High-Speed Workstations & Gigabit Networking",
    icon: Monitor,
    iconColor: "text-[#0A44B6] bg-blue-50 border-blue-100",
    image: "/diet/department/computer/lab-wide-overview.webp",
    description:
      "Fully air-conditioned computer laboratories equipped with high-spec workstations, dedicated fiber connectivity, and industry standard development environments.",
    highlights: ["120+ Workstations", "AutoCAD & MATLAB", "Gigabit Fiber LAN"],
    specs: [
      "120+ High-Performance Workstations with dedicated GPUs",
      "Gigabit dedicated fiber optic connectivity with 100% power backup",
      "AutoCAD, SolidWorks, MATLAB, and Cisco Packet Tracer preloaded",
      "Dedicated Python, Web & Full-Stack Prototyping sandbox environments",
    ],
  },
  {
    id: "digital-library",
    category: "learning",
    badge: "25,000+ Volumes",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    title: "Central Digital Library & Book Bank",
    subtitle: "Rich Academic Archives & Global IEEE Digital Access",
    icon: BookOpen,
    iconColor: "text-emerald-700 bg-emerald-50 border-emerald-100",
    image: "/diet/campus/library_highres.webp",
    description:
      "Expansive academic learning repository offering semester textbook allotment from our Central Book Bank alongside international e-journal subscriptions.",
    highlights: ["Free Semester Books", "IEEE & Springer Access", "Quiet Study Alcoves"],
    specs: [
      "Over 25,000 engineering, computing, and technology reference volumes",
      "100% free semester textbook distribution for every enrolled student",
      "Digital research workstations with IEEE, Springer & BTEB portal access",
      "Quiet reading alcoves and collaborative project breakout tables",
    ],
  },
  {
    id: "electrical-circuit-labs",
    category: "labs",
    badge: "Hardware Prototyping",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
    title: "Electrical & IoT Circuitry Labs",
    subtitle: "Hands-on Circuitry, Sensors & Automation Benches",
    icon: Cpu,
    iconColor: "text-indigo-700 bg-indigo-50 border-indigo-100",
    image: "/diet/department/electrical/circuit-bench-practice.webp",
    description:
      "Specialized engineering workstations equipped with Arduino, microcontrollers, signal generators, digital oscilloscopes, and circuit simulation trainers.",
    highlights: ["IoT Development Boards", "Digital Oscilloscopes", "Signal Trainers"],
    specs: [
      "Microcontroller development kits (Arduino, ESP32, PIC, ARM)",
      "Digital storage oscilloscopes, function generators & precision multimeters",
      "Embedded systems programming and telemetry test benches",
      "Printed Circuit Board (PCB) prototyping and soldering stations",
    ],
  },
  {
    id: "modern-classrooms",
    category: "learning",
    badge: "Smart Displays",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200/80",
    title: "Multimedia Digital Classrooms",
    subtitle: "Interactive Displays, Acoustics & Blended Learning",
    icon: LayoutGrid,
    iconColor: "text-purple-700 bg-purple-50 border-purple-100",
    image: "/diet/campus/smart_classroom_clean.webp",
    description:
      "Ergonomically designed lecture theaters featuring 4K interactive smart boards, acoustic audio treatment, and seamless Google Classroom synchronization.",
    highlights: ["Interactive Displays", "Acoustic Audio", "Hybrid Learning"],
    specs: [
      "Interactive 4K touch displays and smart digital projection",
      "Acoustically balanced surround audio for crystal-clear lectures",
      "Ergonomic, spacious seating configurations with power points",
      "Recorded lecture archives and DIET LMS integration",
    ],
  },
  {
    id: "engineering-workshops",
    category: "labs",
    badge: "60% Practical",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200/80",
    title: "Mechanical & Heavy Tooling Workshops",
    subtitle: "Industrial Lathes, Welding & Materials Fabrication",
    icon: Wrench,
    iconColor: "text-amber-700 bg-amber-50 border-amber-100",
    image: "/diet/department/mechanical/mechanical-workshop-tools.webp",
    description:
      "Heavy-duty workshops featuring industrial metal lathes, milling machinery, welding bays, and mechanical tooling for practical polytechnic training.",
    highlights: ["Industrial Lathes", "Welding Stations", "Engine Test-Rigs"],
    specs: [
      "Industrial metal cutting, shaping, and precision lathe machinery",
      "Electric arc and gas welding bays with certified safety gear",
      "Automobile engine breakdown, transmission, and diagnostic bays",
      "Textile yarn testing, weaving machinery, and fabric inspection benches",
    ],
  },
  {
    id: "automobile-diagnostics",
    category: "labs",
    badge: "Automotive Rig",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200/80",
    title: "Automobile Diagnostics & Testing Bays",
    subtitle: "Engine Overhaul, EFI Systems & Chassis Testing",
    icon: Trophy,
    iconColor: "text-rose-700 bg-rose-50 border-rose-100",
    image: "/diet/department/automobile/hero-automobile-engine-inspection.webp",
    description:
      "Modern automotive laboratory featuring computerized engine analyzers, EFI test rigs, steering & suspension stations, and complete vehicle diagnostics.",
    highlights: ["Computerized Analyzers", "EFI Engine Rigs", "Chassis Testing"],
    specs: [
      "Computerized automobile engine diagnostic scan tools and analyzers",
      "Electronic Fuel Injection (EFI) and hybrid powertrain training units",
      "Hydraulic vehicle lifts, brake dynamometers & steering alignment rigs",
      "Automotive HVAC servicing and electrical wiring testing benches",
    ],
  },
];

const categoryTabs = [
  { id: "all", label: "All Facilities (6)" },
  { id: "labs", label: "Laboratories & Workshops" },
  { id: "learning", label: "Learning & Library" },
  { id: "life", label: "Clubs & Student Life" },
];

const campusStats = [
  { value: "6+", label: "Specialized Labs", sub: "Textile, Mech, Civil, CSE, EEE, Auto" },
  { value: "120+", label: "Workstations", sub: "Gigabit Fiber & GPU Lab" },
  { value: "25,000+", label: "Textbooks & Journals", sub: "Central Book Bank & IEEE" },
  { value: "15+", label: "Active Student Clubs", sub: "Robotics, Coding, Sports & Arts" },
];

export default function CampusFacilitiesSection({ onOpenTourModal }: CampusFacilitiesSectionProps) {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedFacility, setSelectedFacility] = useState<FacilityItem | null>(null);

  const filteredFacilities =
    activeTab === "all"
      ? facilities
      : facilities.filter((f) => f.category === activeTab);

  return (
    <section id="campus-life" className="w-full py-16 sm:py-24 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================
            1. SECTION HEADER
        ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl text-left">
            {/* Headline with Yellow Accent */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#09285F] tracking-tight leading-[1.14] mb-3">
              Campus Life &amp; <span className="text-[#0A44B6]">Facilities</span>
            </h2>

            {/* Concise Subtitle */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Combining 6 specialized engineering laboratories, gigabit computing clusters, and vibrant student innovation clubs in Dhanmondi, Dhaka.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-slate-50 border border-gray-200/80 self-start md:self-end">
            {categoryTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-xs sm:text-[13px] font-bold px-3.5 sm:px-4 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-[#09285F] text-white shadow-xs"
                      : "text-slate-600 hover:text-[#09285F] hover:bg-white"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            2. INSTITUTIONAL 4-STAT STRIP
        ========================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12">
          {campusStats.map((stat) => (
            <div
              key={stat.label}
              className="p-4 sm:p-5 rounded-2xl border border-gray-100 bg-[#F9FBFC] hover:bg-white hover:border-gray-200 hover:shadow-xs transition-all text-left"
            >
              <div className="text-2xl sm:text-3xl font-black text-[#09285F] tracking-tight mb-0.5">
                {stat.value}
              </div>
              <div className="text-xs sm:text-[13.5px] font-bold text-[#0A44B6] mb-1">
                {stat.label}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-500 leading-tight">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================
            3. 6-CARD FACILITIES SHOWCASE GRID (3 Cols x 2 Rows)
        ========================================================= */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-14 sm:mb-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredFacilities.map((facility) => {
              const Icon = facility.icon;
              return (
                <motion.div
                  key={facility.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  onClick={() => setSelectedFacility(facility)}
                  className="group bg-white rounded-3xl border border-gray-200/80 overflow-hidden flex flex-col justify-between hover:border-gray-300 hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <div>
                    {/* Top Photograph Container with Zoom */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={facility.image}
                        alt={facility.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-106"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Top Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                      {/* Top Category Badge */}
                      <div className="absolute top-3.5 right-3.5 z-10">
                        <span
                          className={`text-[10.5px] font-bold px-2.5 py-1 rounded-full border backdrop-blur-md bg-white/95 shadow-2xs ${facility.badgeColor}`}
                        >
                          {facility.badge}
                        </span>
                      </div>
                    </div>

                    {/* Overlapping Icon Badge */}
                    <div className="-mt-6 ml-6 relative z-10 w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${facility.iconColor}`}>
                        <Icon size={19} strokeWidth={2.2} />
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="px-6 pt-3 pb-4 text-left">
                      <h3 className="text-lg sm:text-[19px] font-extrabold text-[#09285F] group-hover:text-[#0A44B6] transition-colors leading-snug mb-1">
                        {facility.title}
                      </h3>
                      <div className="text-xs font-semibold text-slate-500 mb-2.5">
                        {facility.subtitle}
                      </div>

                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-4 line-clamp-2">
                        {facility.description}
                      </p>

                      {/* 3 Highlight Pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {facility.highlights.map((h) => (
                          <span
                            key={h}
                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 bg-[#F8FAFC] border border-gray-200/90 px-2.5 py-1 rounded-lg"
                          >
                            <Check size={11} className="text-emerald-600 flex-shrink-0" />
                            <span>{h}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="px-6 py-3.5 border-t border-gray-100 bg-[#FAFBFD]/60 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0A44B6] group-hover:underline">
                      View Lab Specs &amp; Equipment
                    </span>
                    <div className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-500 group-hover:bg-[#0A44B6] group-hover:text-white group-hover:border-[#0A44B6] transition-all">
                      <ArrowRight size={13} strokeWidth={2.4} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* =========================================================
            4. CAMPUS EXPERIENCE & STUDENT LIFE BANNER (Bottom Showcase)
        ========================================================= */}
        <div className="bg-[#09285F] rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden">
          {/* Subtle Ambient Background Lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A44B6]/30 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 text-left">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#F4B51B] mb-3.5">
                <Compass size={14} />
                <span>Experience DIET Dhanmondi In Person</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-3">
                Where Theory Transforms Into <span className="text-[#F4B51B]">Real Practice</span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal mb-6 max-w-xl">
                Take a guided walkthrough of our computing clusters, heavy machine workshops, central library, and student lounges. Meet faculty mentors and see current diploma students in action.
              </p>

              {/* 3 Quick Benefit Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7 max-w-lg">
                {[
                  "Hands-on demonstration in 6 specialized labs",
                  "Free career assessment & department counseling",
                  "Review student robotics & capstone projects",
                  "Fast-track on-spot admission verification",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 size={14} className="text-[#F4B51B] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenTourModal}
                  className="inline-flex items-center gap-2 bg-[#F4B51B] hover:bg-[#eab01a] text-[#09285F] text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition shadow-sm hover:shadow-md cursor-pointer"
                >
                  <Play size={13} className="fill-[#09285F] text-[#09285F]" />
                  <span>Watch Campus Tour</span>
                </button>

                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-full border border-white/25 backdrop-blur-xs transition"
                >
                  <span>Apply for Admission</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right Visual Image with Floating Badges (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full border-2 border-white/20 shadow-xl bg-slate-800">
                <Image
                  src="/diet/campus/cultural_event.webp"
                  alt="DIET Campus Student Festival & Culture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>

              {/* Floating Badge 1: 15+ Active Clubs */}
              <div className="absolute -top-3 -left-3 bg-white text-[#09285F] rounded-xl px-3.5 py-2 shadow-lg border border-gray-100 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center flex-shrink-0">
                  <Trophy size={16} />
                </div>
                <div>
                  <div className="text-xs font-black leading-tight">15+ Active Clubs</div>
                  <div className="text-[10px] text-slate-500 font-medium">Robotics, Coding &amp; Sports</div>
                </div>
              </div>

              {/* Floating Badge 2: Annual Job Fair */}
              <div className="absolute -bottom-3 -right-3 bg-white text-[#09285F] rounded-xl px-3.5 py-2 shadow-lg border border-gray-100 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Sparkles size={16} />
                </div>
                <div>
                  <div className="text-xs font-black leading-tight">Daffodil Job Fair</div>
                  <div className="text-[10px] text-slate-500 font-medium">200+ Corporate Recruiters</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* =========================================================
          5. INTERACTIVE MODAL LIGHTBOX FOR LAB SPECIFICATIONS
      ========================================================= */}
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
                aria-label="Close dialog"
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#09285F]/90 via-[#09285F]/30 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 text-white text-left">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F4B51B] uppercase tracking-wider mb-1">
                    <selectedFacility.icon size={15} />
                    <span>DIET Dhanmondi Campus Infrastructure</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">{selectedFacility.title}</h3>
                </div>
              </div>

              {/* Details Body */}
              <div className="p-6 sm:p-7 space-y-4 text-left">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {selectedFacility.description}
                </p>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#09285F] mb-2.5">
                    Lab Specifications &amp; Equipment
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedFacility.specs.map((spec, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs text-slate-700 bg-[#F8FAFC] p-2.5 rounded-xl border border-gray-100"
                      >
                        <CheckCircle2 size={14} className="text-[#0A44B6] flex-shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <Link
                    href="/apply"
                    onClick={() => setSelectedFacility(null)}
                    className="inline-flex items-center gap-2 bg-[#F4B51B] hover:bg-[#eab01a] text-[#09285F] text-xs font-bold px-5 py-2.5 rounded-full transition shadow-xs"
                  >
                    <span>Apply for Admission</span>
                    <ArrowRight size={13} strokeWidth={2.4} />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setSelectedFacility(null)}
                    className="text-xs text-slate-500 hover:text-[#09285F] font-semibold cursor-pointer"
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
