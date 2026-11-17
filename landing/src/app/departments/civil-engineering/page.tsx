"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Compass,
  Layers,
  Ruler,
  HardHat,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Award,
  Sparkles,
  Clock,
  FileText,
  ChevronRight,
  BadgePercent,
  BookOpen,
  Briefcase,
  ExternalLink,
  Download,
  Check,
  HelpCircle,
  PhoneCall,
  MessageCircle,
  Landmark,
  Droplets,
  Wrench,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Real 8-Semester BTEB Curriculum Modules for Civil Engineering
const semesterCurriculum = [
  {
    sem: "1st Semester",
    title: "Engineering Science & Drafting Foundation",
    courses: [
      { code: "66411", name: "Civil Engineering Materials & Specifications", credits: "3" },
      { code: "66412", name: "Basic Civil Engineering Drawing", credits: "4" },
      { code: "65911", name: "Mathematics - I (Calculus & Analytical Geometry)", credits: "4" },
      { code: "65912", name: "Physics - I (Mechanics, Wave & Heat)", credits: "3" },
      { code: "65711", name: "Basic Workshop Practice & Field Safety", credits: "2" },
      { code: "65712", name: "English Communication Skills - I", credits: "2" },
    ],
  },
  {
    sem: "2nd Semester",
    title: "Plane Surveying & Engineering Mechanics",
    courses: [
      { code: "66421", name: "Surveying - I (Chain, Compass & Plane Table)", credits: "4" },
      { code: "66422", name: "Civil Engineering Drawing - I (Architectural)", credits: "4" },
      { code: "65921", name: "Mathematics - II (Differential Calculus & Vectors)", credits: "4" },
      { code: "65922", name: "Physics - II (Electricity, Magnetism & Optics)", credits: "3" },
      { code: "65811", name: "Social Science & Engineering Ethics", credits: "2" },
      { code: "65722", name: "Bangla Language & Technical Communication", credits: "2" },
    ],
  },
  {
    sem: "3rd Semester",
    title: "Leveling, Construction Process & Applied Mechanics",
    courses: [
      { code: "66431", name: "Surveying - II (Leveling, Contouring & Theodolite)", credits: "4" },
      { code: "66432", name: "Construction Process - I (Masonry & Deep Foundations)", credits: "4" },
      { code: "66433", name: "Mechanics of Structures & Materials", credits: "3" },
      { code: "65931", name: "Mathematics - III (Matrices, Solid Geometry & Stats)", credits: "4" },
      { code: "65821", name: "Business Organization & Communication", credits: "2" },
      { code: "69054", name: "Environmental Studies & Sustainable Infrastructure", credits: "2" },
    ],
  },
  {
    sem: "4th Semester",
    title: "Structural Mechanics, AutoCAD & Geotechnical Lab",
    courses: [
      { code: "66441", name: "Theory of Structures & Stress Analysis", credits: "4" },
      { code: "66442", name: "Computer-Aided Drafting (AutoCAD 2D/3D)", credits: "3" },
      { code: "66443", name: "Geotechnical Engineering (Soil Mechanics Lab)", credits: "4" },
      { code: "66444", name: "Hydraulics & Fluid Mechanics Fundamentals", credits: "3" },
      { code: "66445", name: "Estimating & Costing - I (Material Takeoff)", credits: "3" },
      { code: "65841", name: "Industrial Accounting & Financial Basics", credits: "2" },
    ],
  },
  {
    sem: "5th Semester",
    title: "Reinforced Concrete Design & Transportation",
    courses: [
      { code: "66451", name: "Design of Structure - I (RCC Beams, Slabs & Columns)", credits: "4" },
      { code: "66452", name: "Transportation Engineering - I (Highways & Pavements)", credits: "4" },
      { code: "66453", name: "Water Supply & Public Health Engineering", credits: "3" },
      { code: "66454", name: "Construction Process - II (Formwork & Scaffolding)", credits: "3" },
      { code: "66455", name: "Surveying - III (Total Station & GPS Surveying)", credits: "3" },
      { code: "65852", name: "Industrial Management & Construction Safety", credits: "2" },
    ],
  },
  {
    sem: "6th Semester",
    title: "Advanced RCC, Estimating & Sanitary Engineering",
    courses: [
      { code: "66461", name: "Design of Structure - II (Footings, Retaining Walls)", credits: "4" },
      { code: "66462", name: "Transportation Engineering - II (Railways & Bridges)", credits: "3" },
      { code: "66463", name: "Estimating & Costing - II (BOQ, Rate Analysis, Tenders)", credits: "4" },
      { code: "66464", name: "Sanitary & Wastewater Treatment Engineering", credits: "3" },
      { code: "66465", name: "Foundation Engineering & Subsurface Investigation", credits: "3" },
      { code: "66466", name: "Structural Modeling with ETABS / SAP2000", credits: "3" },
    ],
  },
  {
    sem: "7th Semester",
    title: "Hydraulic Structures, Project Management & Capstone",
    courses: [
      { code: "66471", name: "Irrigation Engineering & Hydraulic Structures", credits: "3" },
      { code: "66472", name: "Construction Management, Tendering & Contracts", credits: "3" },
      { code: "66473", name: "Innovation, Green Building & Digital Entrepreneurship", credits: "2" },
      { code: "66474", name: "Steel Structure Design & Pre-Stressed Concrete", credits: "3" },
      { code: "66475", name: "Geographic Information Systems (GIS) & Remote Sensing", credits: "2" },
      { code: "66476", name: "Comprehensive Civil Engineering Capstone Project", credits: "4" },
    ],
  },
  {
    sem: "8th Semester",
    title: "Full-Time Industrial Attachment & Board Defense",
    courses: [
      { code: "66481", name: "16-Week Construction Corporate Attachment (Internship)", credits: "12" },
      { code: "66482", name: "Industrial Attachment Logbook & Field Project Report", credits: "4" },
      { code: "66483", name: "BTEB External Viva-Voce & Comprehensive Defense", credits: "4" },
    ],
  },
];

// Department Lab Facilities with real photos
const departmentLabs = [
  {
    name: "Surveying & Geomatics Laboratory",
    equipment: "Electronic Total Stations, Digital Theodolites, Auto Levels, GPS Units, Prisms",
    description:
      "Equipped for high-precision topographic mapping, land surveying, contouring, route alignment, and GIS coordinate data acquisition across Dhaka field testing grounds.",
    image: "/diet/department/civil/surveying-total-station.webp",
  },
  {
    name: "Construction & Materials Testing Lab",
    equipment: "Universal Testing Machine (UTM), Compression Testing Rig, Vicat Apparatus, Sieve Shakers",
    description:
      "Rigorous concrete mix design, compressive strength of cylinders, tensile testing of steel rebar, aggregate sieve analysis, and slump testing according to ASTM and BNBC standards.",
    image: "/diet/department/civil/blueprint-analysis.webp",
  },
  {
    name: "Computer CAD & Structural Drafting Lab",
    equipment: "High-Performance Workstations, AutoCAD Civil 3D, ETABS, SAP2000, BIM Tools",
    description:
      "Modern digital drawing studios where civil diploma students prepare architectural floor plans, structural detailing, reinforcement scheduling, and 3D building models.",
    image: "/diet/department/civil/hero-civil-field-laptop.webp",
  },
  {
    name: "Geotechnical & Soil Mechanics Lab",
    equipment: "Direct Shear Apparatus, Triaxial Cell, Standard Proctor Compaction, Atterberg Limit Devices",
    description:
      "Essential testing suite for soil bearing capacity, moisture content, liquid limit, plastic limit, unconfined compression, and settlement evaluation for foundation design.",
    image: "/diet/why-building-exact.webp",
  },
];

// Official Tuition Fee Rows from diet.ac/tuition-fees/ (Table 1: Civil, Electrical, Computer)
const feeBreakdown = [
  { description: "Admission Fee (One-Time)", schedule: "Payable at admission", amount: "৳ 6,000" },
  { description: "Library, Lab Development & Campus Activities", schedule: "Payable at admission", amount: "৳ 6,000" },
  { description: "Semester Fee (8 Semesters × ৳ 14,000)", schedule: "Every 6 months (Semester start)", amount: "৳ 1,12,000" },
  { description: "Monthly Tuition Fee (48 Months × ৳ 2,000)", schedule: "Monthly installments", amount: "৳ 96,000" },
  { description: "Skill Package & Field Certifications", schedule: "One-Time package", amount: "৳ 20,000" },
];

export default function CivilEngineeringPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-white text-[#101828] flex flex-col font-sans selection:bg-[#F4B51B] selection:text-[#09285F]">
      {/* Global Navbar */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* =========================================================
            INSTITUTIONAL PANORAMIC HERO BANNER (REAL DIET STYLE)
        ========================================================= */}
        <section className="relative w-full min-h-[260px] sm:min-h-[320px] lg:min-h-[380px] flex items-center bg-[#09285F] overflow-hidden">
          {/* Background Real Civil Field Photo */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/diet/department/civil/hero-civil-field-laptop.webp"
              alt="DIET Civil Engineering Field Training"
              fill
              priority
              quality={95}
              className="object-cover object-[70%_center] sm:object-[78%_center] lg:object-[82%_center]"
            />
            {/* Deep DIET Navy Gradient: Solid on left for text legibility, decreased on right so the students in the lab are clearly visible */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(9, 40, 95, 0.98) 0%, rgba(9, 40, 95, 0.90) 38%, rgba(9, 40, 95, 0.58) 60%, rgba(9, 40, 95, 0.28) 80%, rgba(9, 40, 95, 0.12) 100%)",
              }}
            />
            {/* Subtle vertical vignette */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(9, 40, 95, 0.35) 0%, transparent 40%, rgba(9, 40, 95, 0.55) 100%)",
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
              <Link href="/#programs" className="hover:text-white transition-colors">
                Departments
              </Link>
              <ChevronRight size={12} className="text-slate-400" />
              <span className="text-[#F4B51B] font-medium">Diploma in Civil Engineering</span>
            </nav>

            {/* Department Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 backdrop-blur-md border border-white/15 text-white text-[11px] sm:text-xs font-semibold mb-2.5">
              <span>Department of Civil Engineering</span>
              <span className="text-white/40">&bull;</span>
              <span className="text-[#F4B51B]">BTEB Curriculum Code: 664</span>
            </div>

            {/* Main Page Title */}
            <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-[-0.02em] leading-tight mb-3">
              Diploma in Civil Engineering
            </h1>

            {/* Meta Information Ribbon */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-[13px] text-slate-200">
              <div className="flex items-center gap-1.5">
                <Clock size={14} className="text-[#F4B51B]" />
                <span>Duration: <strong>4 Years (8 Semesters)</strong></span>
              </div>
              <span className="hidden sm:inline text-white/30">&bull;</span>
              <div className="flex items-center gap-1.5">
                <Award size={14} className="text-[#F4B51B]" />
                <span>Affiliation: <strong>Bangladesh Technical Education Board (BTEB)</strong></span>
              </div>
              <span className="hidden sm:inline text-white/30">&bull;</span>
              <div className="flex items-center gap-1.5">
                <MapPin size={14} className="text-[#F4B51B]" />
                <span>Campus: <strong>Dhanmondi, Dhaka</strong></span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            2-COLUMN ACADEMIC LAYOUT (EDITORIAL CONTENT + SIDEBAR)
        ========================================================= */}
        <section className="w-full py-8 sm:py-12 bg-white">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* =====================================================
                  MAIN EDITORIAL CONTENT (8 COLUMNS)
              ===================================================== */}
              <div className="lg:col-span-8 text-left space-y-10">
                {/* 1. Program Objective */}
                <article id="program-objective" className="space-y-4">
                  <div className="border-b-2 border-[#09285F] pb-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#09285F]">
                      Diploma In Civil Engineering Program Objective
                    </h2>
                  </div>

                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    A Diploma in Civil Engineering is a valuable option for advancing your career. This field is a vital branch of modern engineering and technology, focusing on designing, planning, and executing various structures. Civil engineering encompasses a wide range of projects, including the design and supervision of construction activities related to roads, bridges, tunnels, buildings, airports, dams, sewer systems, ports, and more.
                  </p>

                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    Civil engineers play a crucial role in the planning, execution, and maintenance of these projects. They are professionals who hold a degree in civil engineering, which equips them with both technical knowledge and practical skills. Civil engineers can find employment as site engineers or managers, designers, researchers, educators, and more at various construction sites, both in the public and private sectors.
                  </p>

                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    They also have opportunities to work as Deputy Assistant Engineers (DAE / SAE) in various government, semi-government, and autonomous organizations such as the <strong>Local Government Engineering Department (LGED)</strong>, <strong>Public Works Department (PWD)</strong>, <strong>Roads &amp; Highways Department (R&amp;H)</strong>, <strong>Bangladesh Railway (BR)</strong>, <strong>Bangladesh Bridge Authority (BBA)</strong>, <strong>Military Engineer Services (MES)</strong>, <strong>Education Engineering Department (EED)</strong>, <strong>Water Supply and Sewerage Authority (WASA)</strong>, <strong>Dhaka Power Distribution Company (DPDC)</strong>, <strong>Water Development Board (WDB)</strong>, <strong>Bangladesh Agricultural Development Corporation (BADC)</strong>, Biman Bangladesh Airlines, and various telecommunications tower infrastructure companies, as well as public and private mega housing and urban development projects.
                  </p>

                  {/* Masked Inset Lab Photo */}
                  <div className="my-6">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/9] w-full border border-gray-200 shadow-sm bg-slate-50">
                      <Image
                        src="/diet/department/civil/blueprint-analysis.webp"
                        alt="DIET Civil Engineering Students Reviewing Structural Blueprint"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 65vw"
                      />
                    </div>
                    <p className="text-[11.5px] text-gray-500 italic mt-2 text-center">
                      DIET Civil Engineering practical session — Students analyzing architectural floor plans and reinforcement detailing.
                    </p>
                  </div>
                </article>

                {/* 2. Course Duration And Assessment */}
                <article id="duration-assessment" className="space-y-4">
                  <div className="border-b-2 border-[#09285F] pb-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#09285F]">
                      Diploma In Civil Engineering Technology Course Duration And Assessment
                    </h2>
                  </div>

                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    Diploma in Civil Engineering Technology is a <strong>4-year long program consisting of 8 semesters</strong> (1 Semester = 6 months). The final and the midterm exams of each semester are conducted under the supervision of the <strong>Bangladesh Technical Education Board (BTEB)</strong>. All the exam questions, answer script checking and final results are published by the BTEB. Besides this, each student has to attend the regular class test, quiz test, and semester final project. After successful completion, a student will receive a Diploma Certificate.
                  </p>

                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    The admission procedure starts after the SSC results. There is mainly one session in a year. Students have to follow the admission announcement which is given by the Bangladesh Technical Education Board Authority. Usually, the admission procedure starts after May (depending on the SSC Result).
                  </p>
                </article>

                {/* 3. Interactive 8-Semester BTEB Curriculum Framework */}
                <article id="curriculum" className="space-y-4">
                  <div className="border-b-2 border-[#09285F] pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#09285F]">
                      8-Semester BTEB Curriculum Structure
                    </h2>
                    <span className="text-xs text-gray-500 font-medium">
                      Official BTEB Course Breakdown &bull; Code: 664
                    </span>
                  </div>

                  {/* Semester Selection Tabs */}
                  <div className="flex flex-wrap gap-1.5 border-b border-gray-200 pb-2">
                    {semesterCurriculum.map((item, idx) => (
                      <button
                        key={item.sem}
                        type="button"
                        onClick={() => setActiveTab(idx)}
                        className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors cursor-pointer ${
                          activeTab === idx
                            ? "bg-[#09285F] text-white"
                            : "bg-slate-100 text-gray-700 hover:bg-slate-200"
                        }`}
                      >
                        {item.sem}
                      </button>
                    ))}
                  </div>

                  {/* Active Semester Subjects Table */}
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 sm:p-5">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2.5 mb-3.5">
                      <div>
                        <span className="text-xs font-bold text-[#09285F] uppercase tracking-wide">
                          {semesterCurriculum[activeTab].sem}
                        </span>
                        <h4 className="text-sm sm:text-base font-bold text-gray-900">
                          {semesterCurriculum[activeTab].title}
                        </h4>
                      </div>
                      <span className="text-[11px] text-gray-500">6 Months Term</span>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs sm:text-[13px]">
                        <thead>
                          <tr className="border-b border-slate-200 text-gray-600">
                            <th className="py-2 pr-4 font-semibold">Course Code</th>
                            <th className="py-2 px-2 font-semibold">Subject Title</th>
                            <th className="py-2 pl-4 font-semibold text-right">Credit</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200/60">
                          {semesterCurriculum[activeTab].courses.map((course, cIdx) => (
                            <tr key={cIdx} className="hover:bg-white/60">
                              <td className="py-2.5 pr-4 font-mono font-medium text-[#09285F]">
                                {course.code}
                              </td>
                              <td className="py-2.5 px-2 text-gray-800 font-medium">
                                {course.name}
                              </td>
                              <td className="py-2.5 pl-4 text-right text-gray-600 font-semibold">
                                {course.credits}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </article>

                {/* 4. Career Prospects & Career Path */}
                <article id="career-prospects" className="space-y-4">
                  <div className="border-b-2 border-[#09285F] pb-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#09285F]">
                      Career Prospects Of Diploma In Civil Engineering
                    </h2>
                  </div>

                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    Diploma in Civil Engineering is a 4-year long program consisting of 8 semesters (1 Semester = 6 months). After completing SSC, a student can join this course and receive the status of a <strong>Diploma Engineer</strong>, from where they can enter the job field with ease. The final and the midterm exams of each semester are conducted under the supervision of the Bangladesh Technical Education Board (BTEB). All exam questions, answer script checking and final results are published by the BTEB. Besides this, each student has to attend regular class tests, quizzes, and semester final projects. After successful completion, a student receives a Diploma in Civil Engineering certificate from BTEB.
                  </p>

                  <h3 className="text-base sm:text-lg font-bold text-[#09285F] pt-2">
                    Career Path
                  </h3>
                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    As a qualified civil engineer, you can realize opportunities across a variety of sectors, significantly within the construction sector, on residential buildings, commercial complexes, mega bridges, flyovers, highways, transport and communications infrastructure. You will also work for employers concerned with the production, storage, and distribution of water resources, irrigation canals, gas, and power distribution systems:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-lg border border-gray-200 bg-white">
                      <h4 className="text-xs sm:text-[13px] font-bold text-[#09285F] mb-1">
                        Sub-Assistant Engineer (SAE) / Deputy Assistant Engineer
                      </h4>
                      <p className="text-[12px] text-gray-600">
                        10th-grade technical gazetted government positions in LGED, PWD, Roads &amp; Highways, Bangladesh Railway, and WASA.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg border border-gray-200 bg-white">
                      <h4 className="text-xs sm:text-[13px] font-bold text-[#09285F] mb-1">
                        Site Engineer &amp; Construction Supervisor
                      </h4>
                      <p className="text-[12px] text-gray-600">
                        On-site execution, concrete quality verification, rebar placement supervision, and contractor management.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg border border-gray-200 bg-white">
                      <h4 className="text-xs sm:text-[13px] font-bold text-[#09285F] mb-1">
                        Structural Estimator &amp; Cost Engineer
                      </h4>
                      <p className="text-[12px] text-gray-600">
                        Quantity takeoff, Bill of Quantities (BOQ) preparation, project budgeting, and government public procurement tenders.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg border border-gray-200 bg-white">
                      <h4 className="text-xs sm:text-[13px] font-bold text-[#09285F] mb-1">
                        CAD Designer &amp; Structural Draftsperson
                      </h4>
                      <p className="text-[12px] text-gray-600">
                        Architectural drafting in AutoCAD, structural load modeling in ETABS, and Building Information Modeling (BIM).
                      </p>
                    </div>
                  </div>
                </article>

                {/* 5. Masked Lab Facilities Grid */}
                <article id="lab-facilities" className="space-y-4">
                  <div className="border-b-2 border-[#09285F] pb-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#09285F]">
                      DIET - Civil Engineering Lab Facilities
                    </h2>
                  </div>

                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    Practical training accounts for over 60% of the diploma engineering course load. DIET maintains specialized laboratories equipped with precision surveying devices, concrete compression machines, and soil mechanics testbeds:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    {departmentLabs.map((lab, lIdx) => (
                      <div
                        key={lIdx}
                        className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm flex flex-col"
                      >
                        <div className="relative aspect-[16/10] w-full bg-slate-100">
                          <Image
                            src={lab.image}
                            alt={lab.name}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 768px) 100vw, 35vw"
                          />
                        </div>
                        <div className="p-4 flex-1 flex flex-col justify-between">
                          <div>
                            <h4 className="text-sm sm:text-base font-bold text-[#09285F] mb-1">
                              {lab.name}
                            </h4>
                            <p className="text-xs text-gray-600 leading-relaxed mb-3">
                              {lab.description}
                            </p>
                          </div>
                          <div className="text-[11px] font-medium text-gray-500 pt-2 border-t border-gray-100">
                            <strong>Key Equipment:</strong> {lab.equipment}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>

                {/* 6. One Student One Laptop & Engineering Toolkits Scheme */}
                <article id="laptop-scheme" className="p-5 sm:p-6 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                    <div className="sm:col-span-5">
                      <div className="relative rounded-lg overflow-hidden aspect-[4/3] w-full border border-gray-200 shadow-sm bg-white">
                        <Image
                          src="/diet/department/civil/hero-civil-field-laptop.webp"
                          alt="DIET Civil Student Using Personal Laptop in Field Training"
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 100vw, 30vw"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-7">
                      <span className="text-[11px] font-bold text-[#F4B51B] bg-[#09285F] px-2.5 py-0.5 rounded uppercase tracking-wider inline-block mb-1.5">
                        Free Laptop Program
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-[#09285F] mb-2">
                        One Student One Laptop Initiative
                      </h3>
                      <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed mb-3">
                        DIET provides every enrolled student with their own brand new laptop computer. Civil engineering students use their personal laptops for digital architectural drawing in AutoCAD, structural analysis in ETABS, quantity takeoff spreadsheets, and project management coursework throughout their 4-year study.
                      </p>
                      <div className="text-xs font-semibold text-[#09285F] flex items-center gap-1.5">
                        <Check size={14} className="text-emerald-600" />
                        <span>Included with curriculum enrollment &bull; No extra charge</span>
                      </div>
                    </div>
                  </div>
                </article>

                {/* 7. Admission Eligibility & Guidelines */}
                <div id="admission" className="scroll-mt-24" />
                <article id="admission-eligibility" className="space-y-4 scroll-mt-24">
                  <div className="border-b-2 border-[#09285F] pb-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#09285F]">
                      Admission Eligibility
                    </h2>
                  </div>

                  <ul className="space-y-2 text-[13.5px] sm:text-[14.5px] text-[#334155]">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-[#09285F] mt-1 flex-shrink-0" />
                      <span>
                        <strong>Minimum requirement:</strong> Minimum SSC or equivalent from <strong>any discipline</strong> (Science, Arts, Commerce) with minimum GPA: <strong>2.00</strong>.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-[#09285F] mt-1 flex-shrink-0" />
                      <span>
                        <strong>HSC (Science) students:</strong> Can directly join in the <strong>3rd Semester</strong> (saving 1 full academic year).
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-[#09285F] mt-1 flex-shrink-0" />
                      <span>
                        <strong>HSC (Vocational) students:</strong> Can directly join in the <strong>4th Semester</strong> (Passing year 2011 or later, GPA &ge; 2.00).
                      </span>
                    </li>
                  </ul>

                  <h3 className="text-base sm:text-lg font-bold text-[#09285F] pt-3">
                    Admission Guidelines
                  </h3>
                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    Students are advised to collect the admission form from the admission office at the Sukrabad, Dhanmondi campus. To confirm admission, students must submit:
                  </p>

                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                    <ul className="space-y-1.5 text-xs sm:text-[13px] text-gray-700">
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-emerald-600 flex-shrink-0" />
                        <span>4 copies of recent passport size photographs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-emerald-600 flex-shrink-0" />
                        <span>Main copy of SSC transcript / mark sheet</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-emerald-600 flex-shrink-0" />
                        <span>Photocopy of Parent&apos;s NID Card</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-emerald-600 flex-shrink-0" />
                        <span>Along with the properly filled admission form</span>
                      </li>
                    </ul>
                    <div className="mt-3 text-[11px] text-amber-800 font-bold">
                      NOTE: Students will be admitted for limited seats as per BTEB quotas.
                    </div>
                  </div>
                </article>

                {/* 8. Official Tuition Fees Table */}
                <article id="tuition-fees" className="space-y-4">
                  <div className="border-b-2 border-[#09285F] pb-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#09285F]">
                      Tuition Fees &amp; Expenses (BDT 2,40,000)
                    </h2>
                  </div>

                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    Official course expense breakdown for Diploma in Civil Engineering as published on DIET fee schedules:
                  </p>

                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <table className="w-full text-left text-xs sm:text-[13.5px]">
                      <thead>
                        <tr className="bg-[#09285F] text-white">
                          <th className="py-2.5 px-4 font-semibold">Fee Particulars</th>
                          <th className="py-2.5 px-4 font-semibold">Payment Frequency</th>
                          <th className="py-2.5 px-4 font-semibold text-right">Amount (BDT)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {feeBreakdown.map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-50">
                            <td className="py-2.5 px-4 font-medium text-gray-800">{row.description}</td>
                            <td className="py-2.5 px-4 text-gray-500">{row.schedule}</td>
                            <td className="py-2.5 px-4 font-bold text-[#09285F] text-right">{row.amount}</td>
                          </tr>
                        ))}
                        <tr className="bg-slate-100 font-extrabold text-[#09285F]">
                          <td className="py-3 px-4">Grand Expense (8 Semesters)</td>
                          <td className="py-3 px-4 text-xs text-gray-600">4-Year Complete Program</td>
                          <td className="py-3 px-4 text-right text-sm sm:text-base">৳ 2,40,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Scholarships & Stipends */}
                  <div className="p-4 rounded-lg bg-blue-50/70 border border-blue-200 text-xs text-gray-700 space-y-2">
                    <div className="font-bold text-[#09285F]">Merit Scholarships &amp; Financial Aid:</div>
                    <ul className="list-disc list-inside space-y-1 pl-1">
                      <li><strong>Golden GPA 5.00:</strong> 100% Tuition Fee Waiver.</li>
                      <li><strong>Regular GPA 5.00:</strong> 50% Tuition Fee Waiver.</li>
                      <li><strong>World Bank STEP Stipend:</strong> ৳ 500/month (৳ 3,000/semester) + ৳ 1,000 book allowance per semester.</li>
                      <li><strong>Work-Based Scholarships:</strong> Available through the DIET Job Placement Cell.</li>
                    </ul>
                  </div>
                </article>

                {/* 9. Higher Education & DIU Pathway */}
                <article id="diu-pathway" className="p-5 rounded-xl border border-gray-200 bg-white shadow-sm space-y-3">
                  <div className="flex items-center gap-2">
                    <Award size={18} className="text-[#09285F]" />
                    <h3 className="text-base sm:text-lg font-bold text-[#09285F]">
                      B.Sc. Credit Transfer Pathway &bull; Daffodil International University (DIU)
                    </h3>
                  </div>
                  <p className="text-xs sm:text-[13.5px] text-gray-600 leading-relaxed">
                    Graduates from DIET’s Diploma in Civil Engineering have direct credit transfer eligibility to Daffodil International University (DIU) for <strong>B.Sc. in Civil Engineering</strong>. Diploma engineers receive subject credit waivers for up to 1.5 years of coursework and enjoy special tuition fee waivers reserved exclusively for DIET alumni.
                  </p>
                </article>
              </div>

              {/* =====================================================
                  RIGHT SIDEBAR (4 COLUMNS - REAL DIET STRUCTURE)
              ===================================================== */}
              <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-[88px]">
                {/* 1. Primary Action Button */}
                <Link
                  href="/apply?dept=civil"
                  className="w-full flex items-center justify-center gap-2 bg-[#09285F] hover:bg-[#123DB8] text-white font-bold text-sm px-6 py-3.5 rounded-md shadow-sm transition-colors text-center"
                >
                  <span>Apply Now for Admission</span>
                  <ArrowRight size={16} />
                </Link>

                {/* 2. Contact Us Sidebar Box (Authentic Light Blue Card) */}
                <div className="rounded-lg bg-[#EBF3FC] border border-[#D0E2FF] p-5 text-left space-y-3">
                  <h3 className="text-base font-bold text-[#09285F]">
                    Contact Us
                  </h3>

                  <div className="text-xs sm:text-[13px] text-gray-700 leading-relaxed space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin size={15} className="text-[#09285F] mt-0.5 flex-shrink-0" />
                      <span>104 Sukrabad, Mirpur Road, Dhaka-1207 / 1209</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Phone size={15} className="text-[#09285F] flex-shrink-0" />
                      <span>01833102822, 01713493240</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Mail size={15} className="text-[#09285F] flex-shrink-0" />
                      <span>ac2@bsdi-bd.org</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#D0E2FF] flex items-center gap-2">
                    <Link
                      href="tel:01833102822"
                      className="flex-1 flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 text-[#09285F] border border-[#CBD5E1] rounded px-3 py-2 text-xs font-bold transition-colors"
                    >
                      <PhoneCall size={13} />
                      <span>Call Desk</span>
                    </Link>
                    <Link
                      href="https://wa.me/8801833102822"
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded px-3 py-2 text-xs font-bold transition-colors"
                    >
                      <MessageCircle size={13} />
                      <span>WhatsApp</span>
                    </Link>
                  </div>
                </div>

                {/* 3. Program Quick Facts Table */}
                <div className="rounded-lg border border-gray-200 bg-white p-4 text-left">
                  <h4 className="text-xs font-bold text-[#09285F] uppercase tracking-wider border-b border-gray-200 pb-2 mb-3">
                    Program Quick Facts
                  </h4>
                  <dl className="divide-y divide-gray-100 text-xs">
                    <div className="py-2 flex justify-between">
                      <dt className="text-gray-500">Degree</dt>
                      <dd className="font-semibold text-gray-800">Diploma in Engineering</dd>
                    </div>
                    <div className="py-2 flex justify-between">
                      <dt className="text-gray-500">Discipline</dt>
                      <dd className="font-semibold text-gray-800">Civil Engineering</dd>
                    </div>
                    <div className="py-2 flex justify-between">
                      <dt className="text-gray-500">Curriculum Code</dt>
                      <dd className="font-semibold text-gray-800">664</dd>
                    </div>
                    <div className="py-2 flex justify-between">
                      <dt className="text-gray-500">Duration</dt>
                      <dd className="font-semibold text-gray-800">4 Years (8 Semesters)</dd>
                    </div>
                    <div className="py-2 flex justify-between">
                      <dt className="text-gray-500">Board</dt>
                      <dd className="font-semibold text-[#09285F]">BTEB (Government)</dd>
                    </div>
                    <div className="py-2 flex justify-between">
                      <dt className="text-gray-500">Total Course Fee</dt>
                      <dd className="font-bold text-[#09285F]">৳ 2,40,000</dd>
                    </div>
                    <div className="py-2 flex justify-between">
                      <dt className="text-gray-500">Free Laptop</dt>
                      <dd className="font-semibold text-emerald-600">Yes (All Students)</dd>
                    </div>
                    <div className="py-2 flex justify-between">
                      <dt className="text-gray-500">Session</dt>
                      <dd className="font-semibold text-gray-800">2025–2026</dd>
                    </div>
                  </dl>
                </div>

                {/* 4. DIET Lab Facilities Quick Nav */}
                <div className="rounded-lg border border-gray-200 bg-white p-4 text-left">
                  <h4 className="text-xs font-bold text-[#09285F] uppercase tracking-wider border-b border-gray-200 pb-2 mb-2">
                    Department Facilities
                  </h4>
                  <ul className="divide-y divide-gray-100 text-xs text-gray-700">
                    <li className="py-2 flex items-center justify-between hover:text-[#09285F]">
                      <a href="#lab-facilities" className="hover:underline">Construction Lab</a>
                      <ChevronRight size={13} className="text-gray-400" />
                    </li>
                    <li className="py-2 flex items-center justify-between hover:text-[#09285F]">
                      <a href="#lab-facilities" className="hover:underline">Surveying Lab</a>
                      <ChevronRight size={13} className="text-gray-400" />
                    </li>
                    <li className="py-2 flex items-center justify-between hover:text-[#09285F]">
                      <a href="#lab-facilities" className="hover:underline">Computer CAD Lab</a>
                      <ChevronRight size={13} className="text-gray-400" />
                    </li>
                    <li className="py-2 flex items-center justify-between hover:text-[#09285F]">
                      <a href="#lab-facilities" className="hover:underline">Hydraulics Lab</a>
                      <ChevronRight size={13} className="text-gray-400" />
                    </li>
                    <li className="py-2 flex items-center justify-between hover:text-[#09285F]">
                      <a href="#lab-facilities" className="hover:underline">Geotechnical Lab</a>
                      <ChevronRight size={13} className="text-gray-400" />
                    </li>
                    <li className="py-2 flex items-center justify-between hover:text-[#09285F]">
                      <a href="#admission-eligibility" className="hover:underline">Admission Requirements</a>
                      <ChevronRight size={13} className="text-gray-400" />
                    </li>
                    <li className="py-2 flex items-center justify-between hover:text-[#09285F]">
                      <a href="#tuition-fees" className="hover:underline">Tuition Fees</a>
                      <ChevronRight size={13} className="text-gray-400" />
                    </li>
                  </ul>
                </div>

                {/* 5. Authentic Photo Gallery Stack */}
                <div className="rounded-lg border border-gray-200 bg-white p-4 text-left space-y-3">
                  <h4 className="text-xs font-bold text-[#09285F] uppercase tracking-wider border-b border-gray-200 pb-2">
                    Campus Civil Field Gallery
                  </h4>
                  <div className="space-y-2.5">
                    <div className="relative rounded overflow-hidden aspect-[16/10] w-full border border-gray-200">
                      <Image
                        src="/diet/department/civil/surveying-total-station.webp"
                        alt="Total Station Electronic Surveying Practice"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 30vw"
                      />
                    </div>
                    <div className="relative rounded overflow-hidden aspect-[16/10] w-full border border-gray-200">
                      <Image
                        src="/diet/department/civil/blueprint-analysis.webp"
                        alt="Structural Drawings & Blueprint Evaluation"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 30vw"
                      />
                    </div>
                  </div>
                </div>

                {/* 6. Download Brochure CTA */}
                <a
                  href="/diet/brochure.pdf"
                  target="_blank"
                  className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-[#09285F] font-bold text-xs px-4 py-3 rounded-md border border-gray-300 transition-colors"
                >
                  <Download size={14} />
                  <span>Download Civil Department Brochure (PDF)</span>
                </a>
              </aside>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
