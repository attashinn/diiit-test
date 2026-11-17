"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Building2,
  GraduationCap,
  Users,
  Award,
  Globe,
  Laptop,
  Calendar,
  Briefcase,
  Rocket,
  BookOpen,
  Wifi,
  ArrowRight,
  Check,
  PhoneCall,
  ExternalLink,
  ChevronRight,
  Download,
  School,
  Monitor,
  Library,
  MapPin,
  Clock,
  Layers,
  Sparkles,
  ShieldCheck,
  FileText,
} from "lucide-react";

export default function AtAGlancePage() {
  const [activeSection, setActiveSection] = useState<string>("all");

  const keyStats = [
    { value: "4,500+", label: "Enrolled Students", sub: "Active diploma learners", icon: Users },
    { value: "6", label: "Engineering Programs", sub: "4-Year BTEB accredited", icon: Layers },
    { value: "87+", label: "Faculty & Trainers", sub: "49 Full-Time • 38 Part-Time", icon: GraduationCap },
    { value: "65", label: "Classrooms", sub: "70 seating capacity each", icon: School },
    { value: "100+", label: "Lab Workstations", sub: "High-spec computing seats", icon: Monitor },
    { value: "200+", label: "Placement Partners", sub: "Direct corporate linkages", icon: Briefcase },
  ];

  const internationalPartners = [
    {
      name: "Child & Youth Finance International (CYFI)",
      country: "Netherlands",
      scope: "Youth financial inclusion, economic empowerment and global workshop collaboration.",
    },
    {
      name: "Spiral World",
      country: "Malaysia",
      scope: "Technical student exchange programs and cross-border industrial training.",
    },
    {
      name: "Confederation of Tourism and Hospitality (CTH)",
      country: "United Kingdom",
      scope: "Internationally accredited curriculum benchmarks and qualification endorsements.",
    },
    {
      name: "Vinsys IT Services (Pvt) Ltd.",
      country: "India",
      scope: "Corporate IT skill certifications, software testing and cloud infrastructure training.",
    },
    {
      name: "British Council",
      country: "Bangladesh / UK",
      scope: "English language proficiency programs, academic assessments and international certifications.",
    },
    {
      name: "WOW Factor",
      country: "South Africa",
      scope: "Workplace communication, executive grooming, and global career orientation.",
    },
  ];

  const programs = [
    { name: "Computer Technology", duration: "4 Years (8 Semesters)", seats: "Direct / SSC Passed", credential: "Diploma in Engineering" },
    { name: "Electrical Technology", duration: "4 Years (8 Semesters)", seats: "Direct / SSC Passed", credential: "Diploma in Engineering" },
    { name: "Civil Technology", duration: "4 Years (8 Semesters)", seats: "Direct / SSC Passed", credential: "Diploma in Engineering" },
    { name: "Automobile Technology", duration: "4 Years (8 Semesters)", seats: "Direct / SSC Passed", credential: "Diploma in Engineering" },
    { name: "Textile Technology", duration: "4 Years (8 Semesters)", seats: "Direct / SSC Passed", credential: "Diploma in Engineering" },
    { name: "Mechanical Technology", duration: "4 Years (8 Semesters)", seats: "Direct / SSC Passed", credential: "Diploma in Engineering" },
  ];

  const eventCalendar = [
    "Skills Competition",
    "Laptop Distribution Ceremony",
    "Annual Campus Job Fair",
    "Corporate Internship Fest",
    "Annual Study Tour & Picnic",
    "International Food Festivals",
    "Technical Quiz Bowls",
    "Book Reading Month",
    "DEAR (Drop Everything And Read) Period",
    "Creativity & Innovation Competition",
    "Engineering Project Exhibition",
    "Career Guiding and Grooming Sessions",
  ];

  return (
    <div className="min-h-screen bg-white text-[#101828] flex flex-col font-sans selection:bg-[#F4B51B] selection:text-[#09285F]">
      {/* Persistent Global Top Navbar */}
      <Navbar />

      <main className="flex-1 w-full pt-[73px]">
        {/* =========================================================
            HEADER BANNER (Matching DIET Inner Page Standard)
        ========================================================= */}
        <section className="relative w-full bg-[#F4F7FB] border-b border-gray-200/80 py-12 sm:py-16 overflow-hidden">
          {/* Subtle Watermark Pattern (like diet.ac/at-a-glance/) */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 opacity-5 pointer-events-none select-none bg-[radial-gradient(#09285F_2px,transparent_2px)] [background-size:16px_16px]"
            aria-hidden="true"
          />

          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#667085] mb-4">
              <Link href="/" className="hover:text-[#09285F] transition">
                Home
              </Link>
              <span>&raquo;</span>
              <Link href="/vision" className="hover:text-[#09285F] transition">
                About Us
              </Link>
              <span>&raquo;</span>
              <span className="text-[#09285F] font-bold">At A Glance</span>
            </div>

            {/* Title & Kicker */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-[3px] bg-[#F4B51B] rounded-full inline-block" />
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#09285F]">
                    ABOUT US &bull; INSTITUTIONAL OVERVIEW
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#09285F] tracking-tight">
                  At A Glance
                </h1>
                <p className="mt-2 text-xs sm:text-sm text-[#475467] max-w-2xl leading-relaxed">
                  Official institutional benchmarks, academic programs, infrastructure capacities, and government affiliations of Daffodil Institute of Engineering &amp; Technology (DIET).
                </p>
              </div>

              {/* Official Source Link Pill */}
              <div className="flex items-center gap-3">
                <a
                  href="https://diet.ac/at-a-glance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-gray-300 text-xs font-bold text-[#09285F] hover:bg-gray-50 transition shadow-xs"
                >
                  <span>Official Page: diet.ac/at-a-glance</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            KEY STATS BANNER (Clean, Human-Designed Grid)
        ========================================================= */}
        <section className="w-full py-8 sm:py-10 bg-white border-b border-gray-100">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {keyStats.map((st, i) => {
                const Icon = st.icon;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#F8FAFC] border border-gray-200/80 hover:border-[#09285F]/30 transition"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 text-[#09285F] flex items-center justify-center mb-2.5 shadow-2xs">
                      <Icon size={16} strokeWidth={2.2} />
                    </div>
                    <div className="text-2xl font-black text-[#09285F] leading-none mb-1">
                      {st.value}
                    </div>
                    <div className="text-xs font-extrabold text-[#101828] leading-tight mb-0.5">
                      {st.label}
                    </div>
                    <div className="text-[10.5px] text-[#667085] leading-snug">
                      {st.sub}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            MAIN CONTENT: OFFICIAL INSTITUTIONAL SPECIFICATION MATRIX
        ========================================================= */}
        <section className="w-full py-12 sm:py-16 bg-white">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Top Bar with Table Description */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-gray-200 gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-[#09285F] tracking-tight">
                  Official Institutional Profile Matrix
                </h2>
                <p className="text-xs sm:text-[13px] text-[#667085] mt-1">
                  Verified institutional information according to official DIET records and BTEB accreditation.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E8F5E9] text-[#2E7D32] border border-[#A5D6A7]">
                  <ShieldCheck size={14} />
                  <span>BTEB Affiliated</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FEF6E6] text-[#B57C00] border border-[#F4B51B]/40">
                  <Award size={14} />
                  <span>Govt. Approved</span>
                </span>
              </div>
            </div>

            {/* Clean, High-End Institutional Specification Matrix */}
            <div className="w-full border border-gray-200 rounded-xl overflow-hidden bg-white shadow-2xs divide-y divide-gray-200">
              {/* Row 1: Official Name */}
              <div className="flex flex-col sm:flex-row hover:bg-slate-50/50 transition">
                <div className="w-full sm:w-[32%] lg:w-[28%] p-4 sm:p-5 bg-[#F9FBFC] text-xs sm:text-[13px] font-extrabold text-[#09285F] flex-shrink-0 border-b sm:border-b-0 sm:border-r border-gray-200 flex items-center gap-2">
                  <Building2 size={16} className="text-[#09285F] flex-shrink-0" />
                  <span>Official Name of the Institute</span>
                </div>
                <div className="flex-1 p-4 sm:p-5 text-xs sm:text-sm text-[#101828]">
                  <div className="font-extrabold text-base text-[#09285F]">
                    Daffodil Institute of Engineering &amp; Technology (DIET)
                  </div>
                  <div className="text-xs text-[#667085] mt-1">
                    A flagship technical education institute under the Daffodil Family, established to produce world-class diploma engineers.
                  </div>
                </div>
              </div>

              {/* Row 2: Government Affiliation */}
              <div className="flex flex-col sm:flex-row hover:bg-slate-50/50 transition">
                <div className="w-full sm:w-[32%] lg:w-[28%] p-4 sm:p-5 bg-[#F9FBFC] text-xs sm:text-[13px] font-extrabold text-[#09285F] flex-shrink-0 border-b sm:border-b-0 sm:border-r border-gray-200 flex items-center gap-2">
                  <Award size={16} className="text-[#09285F] flex-shrink-0" />
                  <span>Government Affiliation</span>
                </div>
                <div className="flex-1 p-4 sm:p-5 text-xs sm:text-sm text-[#101828]">
                  <div className="font-bold text-[#09285F]">
                    Bangladesh Technical Education Board (BTEB), Ministry of Education
                  </div>
                  <div className="text-xs text-[#667085] mt-1">
                    Approved by the Ministry of Education, Government of Bangladesh. Diploma awarded is nationally and internationally recognized for government and private engineering employment.
                  </div>
                </div>
              </div>

              {/* Row 3: Programs & Courses */}
              <div className="flex flex-col sm:flex-row hover:bg-slate-50/50 transition">
                <div className="w-full sm:w-[32%] lg:w-[28%] p-4 sm:p-5 bg-[#F9FBFC] text-xs sm:text-[13px] font-extrabold text-[#09285F] flex-shrink-0 border-b sm:border-b-0 sm:border-r border-gray-200 flex items-center gap-2">
                  <GraduationCap size={16} className="text-[#09285F] flex-shrink-0" />
                  <span>Programs &amp; Courses</span>
                </div>
                <div className="flex-1 p-4 sm:p-5 text-xs sm:text-sm text-[#101828]">
                  <div className="font-bold text-[#09285F] mb-2.5">
                    4 Years Diploma in Engineering (6 Core Technologies)
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {programs.map((prog, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg border border-gray-200 bg-[#F9FBFC] flex items-center justify-between"
                      >
                        <div>
                          <div className="font-bold text-xs text-[#09285F]">
                            {prog.name}
                          </div>
                          <div className="text-[11px] text-[#667085]">
                            {prog.duration}
                          </div>
                        </div>
                        <span className="text-[10.5px] font-semibold text-[#09285F] px-2 py-0.5 rounded bg-white border border-gray-200">
                          BTEB
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 4: Team Members */}
              <div className="flex flex-col sm:flex-row hover:bg-slate-50/50 transition">
                <div className="w-full sm:w-[32%] lg:w-[28%] p-4 sm:p-5 bg-[#F9FBFC] text-xs sm:text-[13px] font-extrabold text-[#09285F] flex-shrink-0 border-b sm:border-b-0 sm:border-r border-gray-200 flex items-center gap-2">
                  <Users size={16} className="text-[#09285F] flex-shrink-0" />
                  <span>Team Members &amp; Faculty</span>
                </div>
                <div className="flex-1 p-4 sm:p-5 text-xs sm:text-sm text-[#101828]">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3 rounded-lg border border-gray-200 bg-white">
                      <div className="text-2xl font-black text-[#09285F]">49</div>
                      <div className="text-xs font-bold text-[#101828] mt-0.5">Trainers (Full-time)</div>
                      <div className="text-[11px] text-[#667085]">Certified engineering instructors</div>
                    </div>

                    <div className="p-3 rounded-lg border border-gray-200 bg-white">
                      <div className="text-2xl font-black text-[#09285F]">38</div>
                      <div className="text-xs font-bold text-[#101828] mt-0.5">Trainers (Part-Time)</div>
                      <div className="text-[11px] text-[#667085]">Senior industry practitioners</div>
                    </div>

                    <div className="p-3 rounded-lg border border-gray-200 bg-white">
                      <div className="text-2xl font-black text-[#09285F]">30</div>
                      <div className="text-xs font-bold text-[#101828] mt-0.5">Officials &amp; Staff</div>
                      <div className="text-[11px] text-[#667085]">Academic support &amp; lab administration</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 5: Infrastructural Strength */}
              <div className="flex flex-col sm:flex-row hover:bg-slate-50/50 transition">
                <div className="w-full sm:w-[32%] lg:w-[28%] p-4 sm:p-5 bg-[#F9FBFC] text-xs sm:text-[13px] font-extrabold text-[#09285F] flex-shrink-0 border-b sm:border-b-0 sm:border-r border-gray-200 flex items-center gap-2">
                  <School size={16} className="text-[#09285F] flex-shrink-0" />
                  <span>Infrastructural Strength</span>
                </div>
                <div className="flex-1 p-4 sm:p-5 text-xs sm:text-sm text-[#101828]">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-[13px] text-[#344054]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F4B51B] mt-1.5 flex-shrink-0" />
                      <span><strong>500 seating capacity</strong> Conference Hall</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F4B51B] mt-1.5 flex-shrink-0" />
                      <span><strong>200 seating capacity</strong> Seminar Hall</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F4B51B] mt-1.5 flex-shrink-0" />
                      <span><strong>50 seating capacity</strong> Masterclass Hall</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F4B51B] mt-1.5 flex-shrink-0" />
                      <span><strong>100 capacity</strong> well-equipped Computer Labs</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Row 6: Theory Class Rooms */}
              <div className="flex flex-col sm:flex-row hover:bg-slate-50/50 transition">
                <div className="w-full sm:w-[32%] lg:w-[28%] p-4 sm:p-5 bg-[#F9FBFC] text-xs sm:text-[13px] font-extrabold text-[#09285F] flex-shrink-0 border-b sm:border-b-0 sm:border-r border-gray-200 flex items-center gap-2">
                  <BookOpen size={16} className="text-[#09285F] flex-shrink-0" />
                  <span>Theory Class Rooms</span>
                </div>
                <div className="flex-1 p-4 sm:p-5 text-xs sm:text-sm text-[#101828]">
                  <div className="font-bold text-[#09285F]">
                    65 classrooms with 70 seating capacity each class
                  </div>
                  <div className="text-xs text-[#667085] mt-1">
                    Total simultaneous academic capacity: <strong>4,550+ students</strong>. Every room is outfitted with multimedia projectors, sound systems, and ergonomic classroom furniture.
                  </div>
                </div>
              </div>

              {/* Row 7: Digital Amenities */}
              <div className="flex flex-col sm:flex-row hover:bg-slate-50/50 transition">
                <div className="w-full sm:w-[32%] lg:w-[28%] p-4 sm:p-5 bg-[#F9FBFC] text-xs sm:text-[13px] font-extrabold text-[#09285F] flex-shrink-0 border-b sm:border-b-0 sm:border-r border-gray-200 flex items-center gap-2">
                  <Laptop size={16} className="text-[#09285F] flex-shrink-0" />
                  <span>Digital Amenities</span>
                </div>
                <div className="flex-1 p-4 sm:p-5 text-xs sm:text-sm text-[#101828]">
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Google Classroom",
                      "Informative Website",
                      "Virtual University System (VUS)",
                      "DIET Blog",
                      "E-Library",
                      "Broadband Internet",
                      "Wi-Fi Facilities",
                      "Digital Smart Classroom",
                      "Hostel Booking System",
                    ].map((amenity, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F4F7FB] border border-gray-200 text-xs font-semibold text-[#09285F]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#123DB8]" />
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 8: International Partners */}
              <div className="flex flex-col sm:flex-row hover:bg-slate-50/50 transition">
                <div className="w-full sm:w-[32%] lg:w-[28%] p-4 sm:p-5 bg-[#F9FBFC] text-xs sm:text-[13px] font-extrabold text-[#09285F] flex-shrink-0 border-b sm:border-b-0 sm:border-r border-gray-200 flex items-center gap-2">
                  <Globe size={16} className="text-[#09285F] flex-shrink-0" />
                  <span>International Partners</span>
                </div>
                <div className="flex-1 p-4 sm:p-5 text-xs sm:text-sm text-[#101828]">
                  <div className="space-y-2">
                    {internationalPartners.map((partner, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg border border-gray-200 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-1.5"
                      >
                        <div>
                          <div className="font-bold text-xs sm:text-sm text-[#09285F]">
                            &bull; {partner.name}
                          </div>
                          <div className="text-xs text-[#667085] mt-0.5">
                            {partner.scope}
                          </div>
                        </div>
                        <span className="self-start sm:self-auto text-[11px] font-bold text-[#09285F] px-2.5 py-0.5 rounded-full bg-[#EEF4FB] border border-[#D5E3F7]">
                          {partner.country}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 9: Job Placement Cell */}
              <div className="flex flex-col sm:flex-row hover:bg-slate-50/50 transition">
                <div className="w-full sm:w-[32%] lg:w-[28%] p-4 sm:p-5 bg-[#F9FBFC] text-xs sm:text-[13px] font-extrabold text-[#09285F] flex-shrink-0 border-b sm:border-b-0 sm:border-r border-gray-200 flex items-center gap-2">
                  <Briefcase size={16} className="text-[#09285F] flex-shrink-0" />
                  <span>Job Placement Cell</span>
                </div>
                <div className="flex-1 p-4 sm:p-5 text-xs sm:text-sm text-[#101828]">
                  <div className="font-semibold text-[#101828] leading-relaxed">
                    Organizing job fair and Internship fest for the graduates, career counselling, liaison with the industries and business organization for ensuring employment.
                  </div>
                  <div className="text-xs text-[#667085] mt-1.5 flex flex-wrap gap-4 font-medium">
                    <span>&bull; 200+ Active Partner Companies</span>
                    <span>&bull; Mock Interviews &amp; Resume Clinics</span>
                    <span>&bull; Direct Campus Recruitment</span>
                  </div>
                </div>
              </div>

              {/* Row 10: Entrepreneurship Development Cell */}
              <div className="flex flex-col sm:flex-row hover:bg-slate-50/50 transition">
                <div className="w-full sm:w-[32%] lg:w-[28%] p-4 sm:p-5 bg-[#F9FBFC] text-xs sm:text-[13px] font-extrabold text-[#09285F] flex-shrink-0 border-b sm:border-b-0 sm:border-r border-gray-200 flex items-center gap-2">
                  <Rocket size={16} className="text-[#09285F] flex-shrink-0" />
                  <span>Entrepreneurship Development Cell</span>
                </div>
                <div className="flex-1 p-4 sm:p-5 text-xs sm:text-sm text-[#101828]">
                  <div className="font-semibold text-[#101828] leading-relaxed">
                    DIET intends to help students to develop entrepreneurship skills, associated with Bangladesh Venture Capital ltd. and Business Incubator.
                  </div>
                  <div className="text-xs text-[#667085] mt-1.5 flex flex-wrap gap-4 font-medium">
                    <span>&bull; Seed Capital Mentorship</span>
                    <span>&bull; Business Incubation Lab</span>
                    <span>&bull; Commercial Prototype Support</span>
                  </div>
                </div>
              </div>

              {/* Row 11: Event Calendar */}
              <div className="flex flex-col sm:flex-row hover:bg-slate-50/50 transition">
                <div className="w-full sm:w-[32%] lg:w-[28%] p-4 sm:p-5 bg-[#F9FBFC] text-xs sm:text-[13px] font-extrabold text-[#09285F] flex-shrink-0 border-b sm:border-b-0 sm:border-r border-gray-200 flex items-center gap-2">
                  <Calendar size={16} className="text-[#09285F] flex-shrink-0" />
                  <span>Event Calendar</span>
                </div>
                <div className="flex-1 p-4 sm:p-5 text-xs sm:text-sm text-[#101828]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {eventCalendar.map((evt, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-2 rounded-md bg-[#F9FBFC] border border-gray-200 text-xs text-[#344054]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F4B51B] flex-shrink-0" />
                        <span className="font-semibold">{evt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CAMPUS FACILITY SHOWCASE (Authentic Photography)
        ========================================================= */}
        <section className="w-full py-12 sm:py-16 bg-[#F9FBFC] border-t border-gray-200/80">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[3px] bg-[#F4B51B] rounded-full inline-block" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#09285F]">
                  CAMPUS ENVIRONMENT
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#09285F] tracking-tight">
                Modern Facilities at Dhanmondi Campus
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "Central Auditorium",
                  desc: "500-capacity hall for national symposiums and orientation.",
                  image: "/diet/campus/tech_seminar.webp",
                },
                {
                  title: "High-Tech Computer Labs",
                  desc: "100+ workstations configured for CAD, programming and simulations.",
                  image: "/diet/campus/facility-computer-labs.webp",
                },
                {
                  title: "Theory Classrooms",
                  desc: "65 multimedia classrooms with 70 seats capacity each.",
                  image: "/diet/campus/facility-modern-classrooms.webp",
                },
                {
                  title: "Central Digital Library",
                  desc: "Rich physical book bank and online academic repositories.",
                  image: "/diet/campus/facility-digital-library.webp",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                >
                  <div className="relative aspect-[16/10] w-full bg-slate-100">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-[#09285F] mb-1">
                      {card.title}
                    </h3>
                    <p className="text-xs text-[#667085] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            BOTTOM CALL TO ACTION BANNER
        ========================================================= */}
        <section className="w-full py-16 bg-[#09285F] text-white">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-3">
              Build Your Future in Engineering at DIET
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
              Join a government-approved, industry-connected polytechnic institute with 100% placement support and hands-on laboratory education.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/#admission"
                className="bg-[#F4B51B] hover:bg-[#E5A812] text-[#09285F] px-6 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition shadow-sm inline-flex items-center gap-2"
              >
                <span>Apply for Admission</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/vision"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition inline-flex items-center gap-2"
              >
                <span>About &amp; Vision Page</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Persistent Global Footer */}
      <Footer />
    </div>
  );
}
