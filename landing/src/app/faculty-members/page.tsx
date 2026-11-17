"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Mail,
  Phone,
  Building2,
  BookOpen,
  Award,
  ChevronRight,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Sparkles,
  MapPin,
  Briefcase,
  Layers,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Authentic 22 Faculty Members from https://diet.ac/faculty-members/
const facultyMembers = [
  {
    id: "badeuzzamal-sarker",
    name: "Md. Badeuzzamal Sarker",
    designation: "Instructor & Head of Department",
    department: "Electrical Engineering",
    deptCode: "electrical",
    image: "/diet/faculty/badeuzzamal-sarker.png",
    education: "B.Sc. in Electrical & Electronic Engineering (EEE)",
    specialization: "Electrical Power Systems, AC/DC Machines & Substation Automation",
    room: "Room 402, Academic Block A",
    email: "badeuzzamal.eee@diet.edu.bd",
    phone: "01713-493240 (Ext: 201)",
    isHead: true,
  },
  {
    id: "mohammad-soheb",
    name: "Mohammad Soheb",
    designation: "Instructor",
    department: "Electrical Engineering",
    deptCode: "electrical",
    image: "/diet/faculty/mohammad-soheb.png",
    education: "B.Sc. in Electrical Engineering",
    specialization: "Transmission & Distribution, Electrical Circuit Analysis",
    room: "Room 405, Academic Block A",
    email: "soheb.eee@diet.edu.bd",
    phone: "01713-493240 (Ext: 202)",
    isHead: false,
  },
  {
    id: "asif-faisal-ishrak",
    name: "Asif Faisal Ishrak",
    designation: "Instructor",
    department: "Electrical Engineering",
    deptCode: "electrical",
    image: "/diet/faculty/asif-faisal-ishrak.jpg",
    education: "B.Sc. in Electrical & Electronic Engineering",
    specialization: "Industrial Automation, PLC Programming & Switchgear",
    room: "Room 406, Academic Block A",
    email: "asif.eee@diet.edu.bd",
    phone: "01713-493240 (Ext: 203)",
    isHead: false,
  },
  {
    id: "emam-sad-ahmed",
    name: "Emam Sad Ahmed",
    designation: "Sr. Instructor & Coordinator",
    department: "Computer Engineering",
    deptCode: "computer",
    image: "/diet/faculty/emam-sad-ahmed.png",
    education: "B.Sc. in Computer Science & Engineering (CSE)",
    specialization: "Data Structures, Database Management Systems (SQL) & Python",
    room: "Room 301, IT Lab Complex",
    email: "emam.cse@diet.edu.bd",
    phone: "01713-493240 (Ext: 101)",
    isHead: true,
  },
  {
    id: "akia-anjum-sristy",
    name: "Akia Anjum Sristy",
    designation: "Instructor",
    department: "Computer Engineering",
    deptCode: "computer",
    image: "/diet/faculty/akia-anjum-sristy.jpg",
    education: "B.Sc. in Computer Science & Engineering",
    specialization: "Object-Oriented Programming (Java/C++), Web Application Design",
    room: "Room 303, IT Lab Complex",
    email: "sristy.cse@diet.edu.bd",
    phone: "01713-493240 (Ext: 102)",
    isHead: false,
  },
  {
    id: "maisha-manik-mohona",
    name: "Maisha Manik Mohona",
    designation: "Instructor",
    department: "Computer Engineering",
    deptCode: "computer",
    image: "/diet/faculty/maisha-manik-mohona.jpg",
    education: "B.Sc. in Computer Science & Engineering",
    specialization: "Full-Stack Web Development, UI/UX Prototyping & Software Testing",
    room: "Room 304, IT Lab Complex",
    email: "mohona.cse@diet.edu.bd",
    phone: "01713-493240 (Ext: 103)",
    isHead: false,
  },
  {
    id: "tasfia-zaman-prova",
    name: "Tasfia Zaman Prova",
    designation: "Instructor",
    department: "Computer Engineering",
    deptCode: "computer",
    image: "/diet/faculty/tasfia-zaman-prova.jpg",
    education: "B.Sc. in Computer Science & Engineering",
    specialization: "Computer Architecture, Microprocessor Interfacing & IoT",
    room: "Room 305, IT Lab Complex",
    email: "prova.cse@diet.edu.bd",
    phone: "01713-493240 (Ext: 104)",
    isHead: false,
  },
  {
    id: "soma-rani-das",
    name: "Soma Rani Das",
    designation: "Sr. Instructor & Head of Department",
    department: "Civil Engineering",
    deptCode: "civil",
    image: "/diet/faculty/soma-rani-das.jpg",
    education: "B.Sc. in Civil Engineering (CE)",
    specialization: "Structural RCC Design, Estimating & Costing, Construction Tech",
    room: "Room 501, Civil Drafting Hall",
    email: "soma.ce@diet.edu.bd",
    phone: "01713-493240 (Ext: 301)",
    isHead: true,
  },
  {
    id: "aysha-siddika",
    name: "Aysha Siddika",
    designation: "Instructor",
    department: "Civil Engineering",
    deptCode: "civil",
    image: "/diet/faculty/aysha-siddika.jpg",
    education: "B.Sc. in Civil Engineering",
    specialization: "AutoCAD 2D/3D Architectural Drafting, Plane Surveying & Leveling",
    room: "Room 503, Civil Drafting Hall",
    email: "aysha.ce@diet.edu.bd",
    phone: "01713-493240 (Ext: 302)",
    isHead: false,
  },
  {
    id: "md-sazzad-hossain",
    name: "Md Sazzad Hossain",
    designation: "Instructor",
    department: "Civil Engineering",
    deptCode: "civil",
    image: "/diet/faculty/md-sazzad-hossain.jpg",
    education: "B.Sc. in Civil Engineering",
    specialization: "Geotechnical Engineering, Soil Mechanics & Foundation Design",
    room: "Room 504, Civil Drafting Hall",
    email: "sazzad.ce@diet.edu.bd",
    phone: "01713-493240 (Ext: 303)",
    isHead: false,
  },
  {
    id: "md-obydullah-al-masum",
    name: "Md. Obydullah Al Masum",
    designation: "Instructor",
    department: "Civil Engineering",
    deptCode: "civil",
    image: "/diet/faculty/md-obydullah-al-masum.jpg",
    education: "B.Sc. in Civil Engineering",
    specialization: "Transportation Engineering, Highway Pavements & Total Station Survey",
    room: "Room 505, Civil Drafting Hall",
    email: "masum.ce@diet.edu.bd",
    phone: "01713-493240 (Ext: 304)",
    isHead: false,
  },
  {
    id: "bikash-chandra-sarkar",
    name: "Bikash Chandra Sarkar",
    designation: "Instructor & Coordinator",
    department: "Mechanical Engineering",
    deptCode: "mechanical",
    image: "/diet/faculty/bikash-chandra-sarkar.png",
    education: "B.Sc. in Mechanical Engineering (ME)",
    specialization: "Applied Thermodynamics, Heat Transfer & Machine Tool Technology",
    room: "Room 201, Mechanical Workshop",
    email: "bikash.me@diet.edu.bd",
    phone: "01713-493240 (Ext: 401)",
    isHead: true,
  },
  {
    id: "muhammad-shahidul-islam",
    name: "Muhammad Shahidul Islam",
    designation: "Sr. Instructor",
    department: "Mechanical Engineering",
    deptCode: "mechanical",
    image: "/diet/faculty/muhammad-shahidul-islam.jpg",
    education: "B.Sc. in Mechanical Engineering",
    specialization: "CAD/CAM Modeling, Foundry & Pattern Making, Welding Technology",
    room: "Room 203, Mechanical Workshop",
    email: "shahidul.me@diet.edu.bd",
    phone: "01713-493240 (Ext: 402)",
    isHead: false,
  },
  {
    id: "nazmul-hoque-shawon",
    name: "Mohammed Nazmul Hoque Shawon",
    designation: "Instructor & Head of Department",
    department: "Textile Engineering",
    deptCode: "textile",
    image: "/diet/faculty/nazmul-hoque-shawon.jpg",
    education: "B.Sc. in Textile Engineering (TE)",
    specialization: "Yarn Manufacturing Technology, Rotor Spinning & Quality Testing",
    room: "Room 601, Textile Lab Suite",
    email: "shawon.te@diet.edu.bd",
    phone: "01713-493240 (Ext: 501)",
    isHead: true,
  },
  {
    id: "srabusty-nasrin-sojja",
    name: "Srabusty Nasrin Sojja",
    designation: "Instructor",
    department: "Textile Engineering",
    deptCode: "textile",
    image: "/diet/faculty/srabusty-nasrin-sojja.jpg",
    education: "B.Sc. in Textile Engineering",
    specialization: "Fabric Manufacturing, Automatic Weaving Looms & Knitting",
    room: "Room 603, Textile Lab Suite",
    email: "srabusty.te@diet.edu.bd",
    phone: "01713-493240 (Ext: 502)",
    isHead: false,
  },
  {
    id: "md-rakibul-hasan",
    name: "Md. Rakibul Hasan",
    designation: "Instructor",
    department: "Textile Engineering",
    deptCode: "textile",
    image: "/diet/faculty/md-rakibul-hasan.jpg",
    education: "B.Sc. in Textile Engineering",
    specialization: "Wet Processing, Dyeing & Printing, Apparel Merchandising",
    room: "Room 604, Textile Lab Suite",
    email: "rakibul.te@diet.edu.bd",
    phone: "01713-493240 (Ext: 503)",
    isHead: false,
  },
  {
    id: "md-jihad-hasan",
    name: "Md. Jihad Hasan",
    designation: "Instructor & Coordinator",
    department: "Automobile Engineering",
    deptCode: "automobile",
    image: "/diet/faculty/md-jihad-hasan.jpg",
    education: "B.Sc. in Automobile / Mechanical Engineering",
    specialization: "Internal Combustion Engine Overhauling, EFI Systems & Dyno",
    room: "Room 101, Automotive Garage",
    email: "jihad.auto@diet.edu.bd",
    phone: "01713-493240 (Ext: 601)",
    isHead: true,
  },
  {
    id: "md-mahamud-hasan",
    name: "Md. Mahamud Hasan",
    designation: "Jr. Instructor",
    department: "Automobile Engineering",
    deptCode: "automobile",
    image: "/diet/faculty/md-mahamud-hasan.png",
    education: "Diploma in Automobile Engineering",
    specialization: "Transmission & Differential Gearboxes, Autotronics Diagnostic Scanners",
    room: "Room 103, Automotive Garage",
    email: "mahamud.auto@diet.edu.bd",
    phone: "01713-493240 (Ext: 602)",
    isHead: false,
  },
  {
    id: "hafizur-rahman",
    name: "Hafizur Rahman",
    designation: "Guest Lecturer & Industrial Expert",
    department: "Automobile Engineering",
    deptCode: "automobile",
    image: "/diet/faculty/hafizur-rahman.png",
    education: "B.Sc. in Mechanical / Automotive Technology",
    specialization: "Hybrid & Electric Vehicle (EV) Powertrains, Modern Steering Systems",
    room: "Room 105, Automotive Garage",
    email: "hafizur.auto@diet.edu.bd",
    phone: "01713-493240 (Ext: 603)",
    isHead: false,
  },
  {
    id: "monira-sultana-soniya",
    name: "Monira Sultana Soniya",
    designation: "Instructor & Coordinator",
    department: "General & Related Science",
    deptCode: "general",
    image: "/diet/faculty/monira-sultana-soniya.png",
    education: "M.Sc. in Mathematics",
    specialization: "Engineering Mathematics (Calculus, Linear Algebra & Differential Equations)",
    room: "Room 208, Academic Block B",
    email: "soniya.math@diet.edu.bd",
    phone: "01713-493240 (Ext: 701)",
    isHead: true,
  },
  {
    id: "md-rofiqul-islam",
    name: "Md. Rofiqul Islam",
    designation: "Jr. Instructor",
    department: "General & Related Science",
    deptCode: "general",
    image: "/diet/faculty/md-rofiqul-islam.jpg",
    education: "M.Sc. in Physics",
    specialization: "Engineering Physics (Mechanics, Wave Optics & Electromagnetism)",
    room: "Room 209, Physics Laboratory",
    email: "rofiqul.phy@diet.edu.bd",
    phone: "01713-493240 (Ext: 702)",
    isHead: false,
  },
  {
    id: "ruma-bhowmik",
    name: "Ruma Bhowmik",
    designation: "Instructor",
    department: "General & Related Science",
    deptCode: "general",
    image: "/diet/faculty/ruma-bhowmik.jpg",
    education: "M.A. in English Language & Literature",
    specialization: "Professional Communication, Technical English & Presentation Skills",
    room: "Room 211, Language Studio",
    email: "ruma.eng@diet.edu.bd",
    phone: "01713-493240 (Ext: 703)",
    isHead: false,
  },
];

const departmentTabs = [
  { id: "all", label: "All Faculty", count: 22 },
  { id: "computer", label: "Computer Engineering", count: 4 },
  { id: "civil", label: "Civil Engineering", count: 4 },
  { id: "electrical", label: "Electrical Engineering", count: 3 },
  { id: "textile", label: "Textile Engineering", count: 3 },
  { id: "mechanical", label: "Mechanical Engineering", count: 2 },
  { id: "automobile", label: "Automobile Engineering", count: 3 },
  { id: "general", label: "General & Science", count: 3 },
];

export default function FacultyMembersPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaculty = useMemo(() => {
    return facultyMembers.filter((faculty) => {
      const matchesTab = activeTab === "all" || faculty.deptCode === activeTab;
      const matchesSearch =
        searchQuery === "" ||
        faculty.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faculty.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faculty.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faculty.specialization.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#101828] flex flex-col font-sans selection:bg-[#F4B51B] selection:text-[#09285F]">
      {/* Global Navbar */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* =========================================================
            INSTITUTIONAL PANORAMIC HERO BANNER (REAL DIET STYLE)
        ========================================================= */}
        <section className="relative w-full min-h-[260px] sm:min-h-[320px] bg-[#09285F] text-white flex items-center overflow-hidden">
          {/* Authentic Campus Photograph Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/diet/campus/tech_seminar.webp"
              alt="Daffodil Institute Faculty Mentoring Students"
              fill
              priority
              quality={92}
              className="object-cover object-[center_35%]"
            />
            {/* Signature DIET Navy Gradient */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(9, 40, 95, 0.98) 0%, rgba(9, 40, 95, 0.92) 48%, rgba(9, 40, 95, 0.65) 75%, rgba(9, 40, 95, 0.35) 100%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(9, 40, 95, 0.35) 0%, transparent 40%, rgba(9, 40, 95, 0.75) 100%)",
              }}
            />
          </div>

          {/* Banner Content */}
          <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-left">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-[12.5px] text-slate-300 mb-3 sm:mb-4">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight size={12} className="text-slate-400" />
              <Link href="/vision" className="hover:text-white transition-colors">
                About
              </Link>
              <ChevronRight size={12} className="text-slate-400" />
              <span className="text-[#F4B51B] font-medium">Faculty Members</span>
            </nav>

            {/* Department Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 backdrop-blur-md border border-white/15 text-white text-[11px] sm:text-xs font-semibold mb-2.5">
              <GraduationCap size={13} className="text-[#F4B51B]" />
              <span>DIET Academic Directory</span>
              <span className="text-white/40">&bull;</span>
              <span className="text-[#F4B51B]">BTEB Accredited Engineering Faculty</span>
            </div>

            {/* Main Title */}
            <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-[-0.02em] leading-tight mb-3">
              Distinguished <span className="text-[#F4B51B]">Faculty</span> Members
            </h1>

            {/* Subtitle Ribbon */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-[13px] text-slate-200">
              <div className="flex items-center gap-1.5">
                <Award size={14} className="text-[#F4B51B]" />
                <span>Mentors: <strong>Experienced Engineers &amp; Scholars</strong></span>
              </div>
              <span className="hidden sm:inline text-white/30">&bull;</span>
              <div className="flex items-center gap-1.5">
                <BookOpen size={14} className="text-[#F4B51B]" />
                <span>Hands-on Focus: <strong>60% Laboratory &amp; Field Practical</strong></span>
              </div>
              <span className="hidden sm:inline text-white/30">&bull;</span>
              <div className="flex items-center gap-1.5">
                <Building2 size={14} className="text-[#F4B51B]" />
                <span>Departments: <strong>6 Diploma Engineering Programs</strong></span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FACULTY FILTER & SEARCH CONTROLS
        ========================================================= */}
        <section className="w-full bg-white border-b border-gray-200/80 sticky top-14 sm:top-18 z-20 shadow-xs">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3.5">
              {/* Department Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none text-left">
                {departmentTabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`whitespace-nowrap px-3.5 py-1.5 sm:py-2 rounded-full text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                      activeTab === tab.id
                        ? "bg-[#09285F] text-white shadow-xs"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        activeTab === tab.id ? "bg-white/20 text-white" : "bg-white text-slate-500 border border-gray-200"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-64 flex-shrink-0">
                <Search size={15} className="absolute left-3.5 top-3 text-gray-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search faculty name, subject..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs pl-10 pr-4 py-2.5 bg-slate-50 border border-gray-200 rounded-full focus:outline-none focus:border-[#123DB8] focus:bg-white text-[#101828] transition"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FACULTY MEMBERS GRID
        ========================================================= */}
        <section className="w-full py-10 sm:py-16">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            {filteredFaculty.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-gray-200/80 max-w-lg mx-auto">
                <GraduationCap size={40} className="mx-auto text-gray-300 mb-3" />
                <h3 className="text-base font-bold text-[#09285F]">No faculty members found</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Try adjusting your search query or select another department tab.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("all");
                    setSearchQuery("");
                  }}
                  className="mt-4 px-4 py-2 bg-[#09285F] text-white rounded-full text-xs font-bold hover:bg-[#123DB8] transition"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredFaculty.map((member) => (
                  <div
                    key={member.id}
                    className="group bg-white rounded-3xl border border-gray-200/80 hover:border-[#123DB8]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden text-left"
                  >
                    <div>
                      {/* Photo Container */}
                      <div className="relative aspect-[1/1.05] w-full bg-[#F3F6FA] overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        {/* Status / Department Badge */}
                        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start z-10">
                          {member.isHead && (
                            <span className="bg-[#F4B51B] text-[#09285F] text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow-xs">
                              Department Head
                            </span>
                          )}
                          <span className="bg-[#09285F]/85 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-white/20">
                            {member.department}
                          </span>
                        </div>
                      </div>

                      {/* Info Body */}
                      <div className="p-5 sm:p-6 space-y-3">
                        <div>
                          <h3 className="text-[16px] font-extrabold text-[#09285F] group-hover:text-[#123DB8] transition leading-snug">
                            {member.name}
                          </h3>
                          <div className="text-xs font-semibold text-[#123DB8] mt-0.5">
                            {member.designation}
                          </div>
                        </div>

                        {/* Specialization / Area */}
                        <div className="text-[11.5px] text-slate-600 leading-relaxed border-t border-gray-100 pt-3">
                          <span className="font-semibold text-slate-800 block mb-0.5">Focus Area:</span>
                          <span className="line-clamp-2">{member.specialization}</span>
                        </div>

                        {/* Education */}
                        <div className="text-[11px] text-gray-500 flex items-center gap-1.5">
                          <GraduationCap size={13} className="text-[#F4B51B] flex-shrink-0" />
                          <span className="truncate">{member.education}</span>
                        </div>

                        {/* Room Location */}
                        <div className="text-[11px] text-gray-500 flex items-center gap-1.5">
                          <MapPin size={13} className="text-gray-400 flex-shrink-0" />
                          <span className="truncate">{member.room}</span>
                        </div>
                      </div>
                    </div>

                    {/* Footer Contact Triggers */}
                    <div className="px-5 sm:px-6 py-3.5 bg-[#F8FAFC] border-t border-gray-100 flex items-center justify-between text-xs font-medium text-slate-600">
                      <a
                        href={`mailto:${member.email}`}
                        className="hover:text-[#123DB8] flex items-center gap-1 transition"
                        title={member.email}
                      >
                        <Mail size={13} className="text-[#123DB8]" />
                        <span className="text-[11px] font-semibold">Email Desk</span>
                      </a>
                      <a
                        href={`tel:${member.phone.split(" ")[0]}`}
                        className="hover:text-[#123DB8] flex items-center gap-1 transition"
                        title={member.phone}
                      >
                        <Phone size={13} className="text-[#123DB8]" />
                        <span className="text-[11px] font-semibold">Office Call</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* =========================================================
            ACADEMIC MENTORSHIP HIGHLIGHTS SECTION
        ========================================================= */}
        <section className="w-full py-12 sm:py-16 bg-white border-t border-gray-200/80">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123DB8]/10 text-[#123DB8] text-xs font-bold uppercase tracking-wider">
                  <Sparkles size={14} />
                  <span>Daffodil Academic Standard</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#09285F] tracking-tight">
                  Student-Centered Hands-On Engineering Pedagogy
                </h2>
                <p className="text-xs sm:text-[14px] text-slate-600 leading-relaxed">
                  Every diploma curriculum at DIET is taught by qualified, full-time engineering instructors who undergo regular pedagogical and technical training. Through small lab batch sizes of 20 to 25 students, every learner receives individualized code reviews, CAD drafting corrections, and machine workshop mentoring.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-slate-700">1:25 Faculty-to-Student Mentorship Ratio</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-slate-700">Dedicated Job Placement Cell Linkage</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-slate-700">BTEB External Defense &amp; Viva Preparation</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-slate-700">Full-Time Academic Counseling Hours</span>
                  </div>
                </div>
              </div>

              {/* Right CTA Card */}
              <div className="lg:col-span-5 bg-[#09285F] text-white rounded-3xl p-7 sm:p-8 relative overflow-hidden text-left shadow-lg">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#F4B51B] block mb-2">
                  Admission Season 2026-2027
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 leading-tight">
                  Study Under Our Expert Engineering Faculty
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed mb-6">
                  Admissions are currently open for all 6 diploma engineering technologies. Eligible students can apply online in 3 minutes.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/apply"
                    className="inline-flex items-center gap-2 bg-[#F4B51B] hover:bg-[#eab01a] text-[#09285F] font-extrabold text-xs sm:text-sm px-5 py-3 rounded-full transition shadow-sm"
                  >
                    <span>Apply for Admission</span>
                    <ArrowRight size={15} strokeWidth={2.4} />
                  </Link>
                  <Link
                    href="/#programs"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-full border border-white/20 transition"
                  >
                    <span>View All Programs</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
