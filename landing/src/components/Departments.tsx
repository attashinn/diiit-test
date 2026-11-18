"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PORTAL_URLS } from "@/lib/config";
import {
  Code2,
  Cpu,
  Compass,
  Scissors,
  BarChart3,
  Building,
  CheckCircle2,
  Clock,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const programs = [
  {
    id: "cse",
    name: "Computer Science & Engineering",
    code: "CSE",
    degree: "B.Sc. in CSE",
    duration: "4 Years (8 Semesters)",
    credits: "148 Credits",
    icon: Code2,
    badge: "Most Popular",
    color: "#123DB8",
    description:
      "Master software architecture, generative AI, cloud engineering, cybersecurity, and data systems with enterprise lab infrastructure.",
    careers: ["Full-Stack Software Engineer", "AI/ML Engineer", "DevOps Specialist", "Cybersecurity Analyst"],
    highlights: ["NVIDIA Deep Learning Lab", "ACM ICPC Competitive Programming Cell", "100% Final Year Placement"],
  },
  {
    id: "eee",
    name: "Electrical & Electronic Engineering",
    code: "EEE",
    degree: "B.Sc. in EEE",
    duration: "4 Years (8 Semesters)",
    credits: "152 Credits",
    icon: Cpu,
    color: "#09285F",
    description:
      "Explore power grid modernizations, VLSI design, renewable energy systems, microelectronics, and advanced embedded IoT robotics.",
    careers: ["Power Systems Engineer", "VLSI Chip Designer", "Embedded Firmware Engineer", "Automation Specialist"],
    highlights: ["Smart Grid Simulation Rig", "Microcontroller & FPGA Testbenches", "IEEE Student Branch Chapter"],
  },
  {
    id: "ce",
    name: "Civil Engineering",
    code: "CE",
    degree: "B.Sc. in CE",
    duration: "4 Years (8 Semesters)",
    credits: "154 Credits",
    icon: Compass,
    color: "#123DB8",
    description:
      "Design sustainable megastructures, bridge systems, seismic-resistant skyscrapers, and urban transportation systems.",
    careers: ["Structural Consultant", "Geotechnical Engineer", "Project Director", "Urban Planning Specialist"],
    highlights: ["Soil Mechanics & Concrete Testing Lab", "Structural Dynamics Simulator", "Field Survey Camp"],
  },
  {
    id: "te",
    name: "Textile Engineering",
    code: "TE",
    degree: "B.Sc. in TE",
    duration: "4 Years (8 Semesters)",
    credits: "150 Credits",
    icon: Scissors,
    color: "#09285F",
    description:
      "Drive Bangladesh's multi-billion dollar export industry with modern yarn manufacturing, smart fabric finishing, and apparel supply chains.",
    careers: ["Textile Production Head", "Garments Merchandiser", "Quality Assurance Lead", "Dyeing Master"],
    highlights: ["Pilot Spinning & Weaving Floor", "Advanced Color Measurement Lab", "Corporate Buying House Links"],
  },
  {
    id: "bba",
    name: "Business Administration",
    code: "BBA",
    degree: "Bachelor of Business Admin",
    duration: "4 Years (8 Semesters)",
    credits: "130 Credits",
    icon: BarChart3,
    color: "#F4B51B",
    description:
      "Blend business analytics, corporate finance, digital marketing, and venture incubation for modern enterprise management.",
    careers: ["Investment Banker", "Brand Strategist", "Business Operations Lead", "Startup Founder"],
    highlights: ["Bloomberg Terminals Mock Suite", "Venture Pitch Competition", "Corporate CEO Speaker Sessions"],
  },
  {
    id: "arch",
    name: "Architecture & Design",
    code: "ARCH",
    degree: "Bachelor of Architecture",
    duration: "5 Years (10 Semesters)",
    credits: "180 Credits",
    icon: Building,
    color: "#123DB8",
    description:
      "Create environmentally responsible architectural landmarks, sustainable urban habitats, and biophilic architectural models.",
    careers: ["Architectural Designer", "Landscape Consultant", "Sustainable Building Assessor", "Interior Specialist"],
    highlights: ["Daylight & Wind Tunnel Studio", "Laser Cutting & 3D Prototyping", "Annual Design Exhibition"],
  },
];

export default function Departments() {
  const [selectedId, setSelectedId] = useState("cse");
  const selectedProgram = programs.find((p) => p.id === selectedId) || programs[0];
  const IconComponent = selectedProgram.icon;

  return (
    <section id="departments" className="w-full py-20 md:py-28 bg-[#F7F8FA]">
      <div className="max-w-[1340px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123DB8]/10 text-[#123DB8] text-xs font-bold uppercase tracking-wider mb-3">
            Academic Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#09285F] tracking-tight leading-tight">
            Industry-Aligned Degree Programs
          </h2>
          <p className="text-base sm:text-lg text-[#667085] mt-4 leading-relaxed">
            Curated by senior industrial advisory councils and accredited faculty, our
            curricula ensure graduates step into the tech and engineering markets fully job-ready.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {programs.map((prog) => (
            <button
              key={prog.id}
              onClick={() => setSelectedId(prog.id)}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-all duration-200 ${
                selectedId === prog.id
                  ? "bg-[#09285F] text-white shadow-md shadow-[#09285F]/20 scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {prog.code} — {prog.name.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Detailed Program Showcase Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Col: Core Details */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#123DB8]/10 text-[#123DB8] flex items-center justify-center">
                  <IconComponent size={26} strokeWidth={2.2} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#123DB8]">
                    {selectedProgram.code} DEPARTMENT
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#09285F]">
                    {selectedProgram.degree}
                  </h3>
                </div>
                {selectedProgram.badge && (
                  <span className="ml-auto px-3 py-1 bg-[#F4B51B] text-[#09285F] text-xs font-bold rounded-full">
                    {selectedProgram.badge}
                  </span>
                )}
              </div>

              <p className="text-base text-gray-600 leading-relaxed mb-6">
                {selectedProgram.description}
              </p>

              {/* Quick Metadata */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F7F8FA] border border-gray-100">
                  <Clock size={18} className="text-[#123DB8]" />
                  <div>
                    <div className="text-[11px] font-bold uppercase text-gray-400">Duration</div>
                    <div className="text-sm font-bold text-gray-900">{selectedProgram.duration}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F7F8FA] border border-gray-100">
                  <BookOpen size={18} className="text-[#123DB8]" />
                  <div>
                    <div className="text-[11px] font-bold uppercase text-gray-400">Total Credits</div>
                    <div className="text-sm font-bold text-gray-900">{selectedProgram.credits}</div>
                  </div>
                </div>
              </div>

              {/* Highlights Checklist */}
              <div className="space-y-2.5 mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                  Program Highlights &amp; Laboratories
                </div>
                {selectedProgram.highlights.map((hl, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm font-semibold text-gray-700">
                    <CheckCircle2 size={18} className="text-[#123DB8] flex-shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 bg-[#F4B51B] hover:bg-[#eab01a] text-[#09285F] font-bold text-sm px-6 py-3 rounded-xl shadow-md transition active:scale-95"
                >
                  <span>Apply for this Program</span>
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={PORTAL_URLS.courses}
                  className="inline-flex items-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold text-sm px-6 py-3 rounded-xl border border-gray-200 transition"
                >
                  <span>View Course Catalog</span>
                </a>
              </div>
            </div>

            {/* Right Col: Career Prospects Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#09285F] to-[#123DB8] rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F4B51B]">
                  Career Trajectories
                </span>
                <h4 className="text-xl font-bold mt-1 mb-4">
                  Where Our {selectedProgram.code} Graduates Work
                </h4>
                <p className="text-xs text-slate-200 leading-relaxed mb-6">
                  DIET students participate in mandatory 6-month industry internships with leading
                  software houses, telecommunications providers, engineering consultancies, and MNCs.
                </p>

                <div className="space-y-2.5">
                  {selectedProgram.careers.map((career, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-sm font-medium flex items-center justify-between"
                    >
                      <span>{career}</span>
                      <span className="text-xs text-[#F4B51B] font-bold">In-Demand</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/15 flex items-center justify-between text-xs text-slate-300">
                  <span>Average Starting Salary</span>
                  <span className="text-[#F4B51B] font-bold text-sm">৳ 45,000 - ৳ 90,000 / mo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
