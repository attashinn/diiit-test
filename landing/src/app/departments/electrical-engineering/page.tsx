"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  Cpu,
  Server,
  Activity,
  Layers,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Calendar,
  Building2,
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
  Radio,
  Power,
  BatteryCharging,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Real 8-Semester BTEB Curriculum Modules for Electrical Engineering
const semesterCurriculum = [
  {
    sem: "1st Semester",
    title: "Electrical Principles & Engineering Science",
    courses: [
      { code: "66711", name: "Basic Electrical Engineering Fundamentals", credits: "4" },
      { code: "66811", name: "Basic Electronics & Semiconductor Diodes", credits: "3" },
      { code: "66712", name: "Electrical Engineering Drawing & CAD", credits: "2" },
      { code: "65911", name: "Mathematics - I (Calculus & Analytical Geometry)", credits: "4" },
      { code: "65912", name: "Physics - I (Mechanics, Wave & Heat)", credits: "3" },
      { code: "65712", name: "English Communication Skills - I", credits: "2" },
    ],
  },
  {
    sem: "2nd Semester",
    title: "Electrical Circuits & Applied Sciences",
    courses: [
      { code: "66721", name: "Electrical Circuits - I (DC Network Analysis)", credits: "4" },
      { code: "66722", name: "Electrical Appliances & Domestic Wiring", credits: "3" },
      { code: "65921", name: "Mathematics - II (Differential Calculus & Vectors)", credits: "4" },
      { code: "65922", name: "Physics - II (Electricity, Magnetism & Optics)", credits: "3" },
      { code: "65811", name: "Social Science & Engineering Ethics", credits: "2" },
      { code: "65722", name: "Bangla Language & Technical Communication", credits: "2" },
    ],
  },
  {
    sem: "3rd Semester",
    title: "AC Circuits, DC Machines & Analog Electronics",
    courses: [
      { code: "66731", name: "Electrical Circuits - II (AC Single & Polyphase)", credits: "4" },
      { code: "66732", name: "Electrical Machines - I (DC Generators & Motors)", credits: "4" },
      { code: "66831", name: "Electronic Devices, BJT & Amplifiers", credits: "4" },
      { code: "65931", name: "Mathematics - III (Matrices, Complex & Stats)", credits: "4" },
      { code: "65821", name: "Business Organization & Communication", credits: "2" },
      { code: "66631", name: "Programming in C for Engineers", credits: "2" },
    ],
  },
  {
    sem: "4th Semester",
    title: "Transformers, Power Plants & Measurements",
    courses: [
      { code: "66741", name: "Electrical Machines - II (1-Phase & 3-Phase Transformers)", credits: "4" },
      { code: "66742", name: "Electrical & Electronic Measurements - I", credits: "3" },
      { code: "66743", name: "Power Plant Engineering (Thermal, Hydro & Nuclear)", credits: "3" },
      { code: "66841", name: "Digital Electronics & Logic Gates", credits: "4" },
      { code: "69054", name: "Environmental Management & Sustainable Energy", credits: "2" },
      { code: "65841", name: "Industrial Accounting & Financial Basics", credits: "2" },
    ],
  },
  {
    sem: "5th Semester",
    title: "AC Machines & Power Transmission Systems",
    courses: [
      { code: "66751", name: "Electrical Machines - III (Alternators & Synchronous Motors)", credits: "4" },
      { code: "66752", name: "Generation of Electrical Power & Grid Integration", credits: "3" },
      { code: "66753", name: "Transmission & Distribution of Electrical Power - I", credits: "4" },
      { code: "66851", name: "Industrial Electronics & Power Control Devices", credits: "4" },
      { code: "66852", name: "Microprocessor & Embedded Microcontrollers (8086)", credits: "3" },
      { code: "65852", name: "Industrial Management & Substation Safety", credits: "2" },
    ],
  },
  {
    sem: "6th Semester",
    title: "Switchgear, Substation Protection & Testing",
    courses: [
      { code: "66761", name: "Transmission & Distribution of Electrical Power - II", credits: "3" },
      { code: "66762", name: "Switchgear, Circuit Breakers & Substation Protection", credits: "4" },
      { code: "66763", name: "Testing & Maintenance of Electrical Equipment", credits: "3" },
      { code: "66764", name: "Electrical & Electronic Measurements - II (Digital Meters)", credits: "3" },
      { code: "66765", name: "Renewable Energy Technology (Solar PV & Wind)", credits: "3" },
      { code: "66766", name: "Electrical CAD (Substation Single-Line Diagrams)", credits: "3" },
    ],
  },
  {
    sem: "7th Semester",
    title: "PLC Automation, Power System Control & Capstone",
    courses: [
      { code: "66771", name: "Electrical Installation Planning, Estimating & Costing", credits: "3" },
      { code: "66772", name: "Power System Operation, SCADA & Smart Grids", credits: "3" },
      { code: "66773", name: "Industrial Automation & PLC Interfacing Lab", credits: "4" },
      { code: "66774", name: "Communication Engineering & Industrial Telemetry", credits: "3" },
      { code: "66775", name: "Innovation, Energy Auditing & Entrepreneurship", credits: "2" },
      { code: "66776", name: "Comprehensive Department Capstone Project", credits: "4" },
    ],
  },
  {
    sem: "8th Semester",
    title: "Full-Time Industrial Attachment & Viva",
    courses: [
      { code: "66781", name: "16-Week Power Station / Industrial Attachment (Internship)", credits: "12" },
      { code: "66782", name: "Industrial Attachment Logbook & Project Defense", credits: "4" },
      { code: "66783", name: "BTEB External Viva-Voce & Comprehensive Evaluation", credits: "4" },
    ],
  },
];

// Department Lab Facilities with real photos
const departmentLabs = [
  {
    name: "Electrical Machines & Motor Control Lab",
    equipment: "AC/DC Motor Benches, Single & Three-Phase Transformers, Alternators, Starters",
    description:
      "Equipped for hands-on motor testing, star-delta starting, synchronous machine synchronization, speed control of induction motors, and load characteristic testing under faculty supervision.",
    image: "/diet/department/electrical/faculty-motor-instruction.webp",
  },
  {
    name: "Power System & Transmission Line Lab",
    equipment: "High-Voltage Transmission Simulators, Grid Testbeds, Protective Relays, CT/PTs",
    description:
      "Dedicated testbeds for analyzing power transmission lines, calculating voltage regulation, testing distance relays, fault simulation, and simulating power grid synchronization.",
    image: "/diet/department/electrical/transmission-trainer.webp",
  },
  {
    name: "Circuit & Electrical Measurements Lab",
    equipment: "Precision Digital Multimeters, Wattmeters, Power Factor Meters, Oscilloscopes",
    description:
      "Modern workstations where students verify Ohm's law, Kirchhoff's laws, Thevenin's theorem, RLC resonance, power factor correction, and energy meter calibration.",
    image: "/diet/department/electrical/circuit-bench-practice.webp",
  },
  {
    name: "Switchgear, Relay & Automation Lab",
    equipment: "Air Circuit Breakers (ACB), Vacuum Circuit Breakers (VCB), PLC Units, SCADA Panels",
    description:
      "Practical training facility bridging power engineering with modern Industry 4.0 automation, switchgear interlocking, fault clearing, and ladder logic programming.",
    image: "/diet/department/electrical/hero-electrical-panel.webp",
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

export default function ElectricalEngineeringPage() {
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
          {/* Background Real Electrical Lab Photo */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/diet/department/electrical/hero-electrical-panel.webp"
              alt="DIET Electrical Engineering Students at Control Panel"
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
              <span className="text-[#F4B51B] font-medium">Diploma in Electrical Engineering</span>
            </nav>

            {/* Department Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 backdrop-blur-md border border-white/15 text-white text-[11px] sm:text-xs font-semibold mb-2.5">
              <span>Department of Electrical Engineering</span>
              <span className="text-white/40">&bull;</span>
              <span className="text-[#F4B51B]">BTEB Curriculum Code: 667</span>
            </div>

            {/* Main Page Title */}
            <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-[-0.02em] leading-tight mb-3">
              Diploma in Electrical Engineering
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
                      Diploma in Electrical Engineering Program Objective
                    </h2>
                  </div>

                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    A <strong>Diploma in Electrical Engineering</strong> presents an outstanding and resilient foundation for your technical career. Students enrolled in this program have vast potential to create an impactful career in modern energy, industrial automation, and infrastructure. An associate degree technologist has the opportunity to work in prestigious government, autonomous, and private sector organizations across Bangladesh.
                  </p>

                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    Graduates enjoy extensive employment opportunities in electric power generation, transmission, and distribution utilities, telecommunication industries, IT systems, ready-made garment (RMG) automated plants, and key governmental engineering authorities such as the <strong>Bangladesh Rural Electrification Board (BREB)</strong>, <strong>Public Works Department (PWD)</strong>, <strong>Dhaka Electric Supply Company (DESCO)</strong>, <strong>Dhaka Power Distribution Company (DPDC)</strong>, <strong>Power Grid Company of Bangladesh (PGCB)</strong>, <strong>Bangladesh Power Development Board (BPDB)</strong>, <strong>Roads &amp; Highways (R&amp;H)</strong>, <strong>Military Engineer Services (MES)</strong>, DESA, and numerous service sectors. Additionally, certified electrical technologists can establish themselves as independent technical entrepreneurs by fitting into small, medium, and heavy industrial automation plants.
                  </p>

                  {/* Masked Inset Lab Photo */}
                  <div className="my-6">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/9] w-full border border-gray-200 shadow-sm bg-slate-50">
                      <Image
                        src="/diet/department/electrical/transmission-trainer.webp"
                        alt="DIET Electrical Students & Faculty on Power Transmission Trainer"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 65vw"
                      />
                    </div>
                    <p className="text-[11.5px] text-gray-500 italic mt-2 text-center">
                      DIET Electrical Engineering laboratory — Faculty instructing students on high-voltage transmission simulators and protective relay panels.
                    </p>
                  </div>
                </article>

                {/* 2. Course Duration And Assessment */}
                <article id="duration-assessment" className="space-y-4">
                  <div className="border-b-2 border-[#09285F] pb-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#09285F]">
                      Diploma in Electrical Engineering Course Duration And Assessment
                    </h2>
                  </div>

                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    Diploma in Electrical Engineering is a <strong>4-year long program consisting of 8 semesters</strong> (1 Semester = 6 months). The final and the midterm exams of each semester are conducted under the supervision of the <strong>Bangladesh Technical Education Board (BTEB)</strong>. All the exam questions, answer script checking and final results are published by the BTEB. Besides this, each student has to attend the regular class test, quiz test, and semester final project. After successful completion, a student will receive a Diploma in Electrical Engineering Certificate.
                  </p>

                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    The admission procedure starts after the publication of SSC results. There is mainly one session in a year. Students have to follow the admission announcement which is given by the Bangladesh Technical Education Board Authority. Usually, the admission procedure starts after May (depending on the SSC Result).
                  </p>
                </article>

                {/* 3. Interactive 8-Semester BTEB Curriculum Framework */}
                <article id="curriculum" className="space-y-4">
                  <div className="border-b-2 border-[#09285F] pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#09285F]">
                      8-Semester BTEB Curriculum Structure
                    </h2>
                    <span className="text-xs text-gray-500 font-medium">
                      Official BTEB Course Breakdown &bull; Code: 667
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
                      Career Prospects Of Diploma In Electrical Engineering
                    </h2>
                  </div>

                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    Electrical engineers are instrumental in revolutionizing the lives of contemporary society. They are needed across manufacturing industries producing household and workplace appliances such as refrigeration systems, televisions, computer systems, and industrial electrical gear. In our modern age of satellite communications, continental networks, and expanding electric grids, these engineers are in unprecedented demand.
                  </p>

                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    Electrical engineers are widely employed in nuclear power plants, thermal generating stations, hydroelectric facilities, and modern solar farms. Job responsibilities embrace technical specification, design, development, circuit maintenance, and implementation of electrical hardware, as well as testing prototypes to innovate new power technologies.
                  </p>

                  <h3 className="text-base sm:text-lg font-bold text-[#09285F] pt-2">
                    Career Path
                  </h3>
                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    Electrical engineers use physics, electronics and electromagnetism to design systems that generate, transmit, or utilize electricity. Nearly every industry has a vital place for an electrical engineer:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-lg border border-gray-200 bg-white">
                      <h4 className="text-xs sm:text-[13px] font-bold text-[#09285F] mb-1">
                        Sub-Assistant Engineer (SAE) in National Power Grid
                      </h4>
                      <p className="text-[12px] text-gray-600">
                        10th-grade technical gazetted positions in BPDB, PGCB, DESCO, DPDC, BREB, and PWD.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg border border-gray-200 bg-white">
                      <h4 className="text-xs sm:text-[13px] font-bold text-[#09285F] mb-1">
                        Substation &amp; Switchgear Engineer
                      </h4>
                      <p className="text-[12px] text-gray-600">
                        Managing high-voltage transformers, circuit breakers, protective relays, and substation busbars.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg border border-gray-200 bg-white">
                      <h4 className="text-xs sm:text-[13px] font-bold text-[#09285F] mb-1">
                        Industrial Automation &amp; PLC Specialist
                      </h4>
                      <p className="text-[12px] text-gray-600">
                        Operating automated motor drives, variable frequency drives (VFD), sensor networks, and SCADA telemetry.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg border border-gray-200 bg-white">
                      <h4 className="text-xs sm:text-[13px] font-bold text-[#09285F] mb-1">
                        Renewable Energy &amp; Solar System Designer
                      </h4>
                      <p className="text-[12px] text-gray-600">
                        Planning grid-tied rooftop solar installations, battery storage setups, and clean energy audits.
                      </p>
                    </div>
                  </div>
                </article>

                {/* 5. Masked Lab Facilities Grid */}
                <article id="lab-facilities" className="space-y-4">
                  <div className="border-b-2 border-[#09285F] pb-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#09285F]">
                      DIET - Electrical Engineering Lab Facilities
                    </h2>
                  </div>

                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    Practical engineering laboratory sessions account for over 60% of technical credits. DIET maintains five dedicated electrical testing suites:
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

                {/* 6. One Student One Laptop Scheme */}
                <article id="laptop-scheme" className="p-5 sm:p-6 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                    <div className="sm:col-span-5">
                      <div className="relative rounded-lg overflow-hidden aspect-[4/3] w-full border border-gray-200 shadow-sm bg-white">
                        <Image
                          src="/diet/department/computer/student-laptop.webp"
                          alt="DIET Electrical Student with Personal Laptop"
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
                        DIET provides every enrolled student with their own brand new laptop computer. Electrical engineering students utilize their personal laptops for circuit simulation (Proteus, Multisim, MATLAB/Simulink), electrical AutoCAD drafting, and microcontroller programming throughout their 4-year academic stay.
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
                    Official course expense breakdown for Diploma in Electrical Engineering as published on DIET fee schedules:
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
                    Graduates from DIET’s Diploma in Electrical Engineering have direct credit transfer eligibility to Daffodil International University (DIU) for <strong>B.Sc. in Electrical and Electronic Engineering (EEE)</strong>. Diploma engineers receive subject credit waivers for up to 1.5 years of coursework and enjoy special tuition fee waivers reserved exclusively for DIET alumni.
                  </p>
                </article>
              </div>

              {/* =====================================================
                  RIGHT SIDEBAR (4 COLUMNS - REAL DIET STRUCTURE)
              ===================================================== */}
              <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-[88px]">
                {/* 1. Primary Action Button */}
                <Link
                  href="/#admission"
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
                      <dd className="font-semibold text-gray-800">Electrical Engineering</dd>
                    </div>
                    <div className="py-2 flex justify-between">
                      <dt className="text-gray-500">Curriculum Code</dt>
                      <dd className="font-semibold text-gray-800">667</dd>
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
                      <a href="#lab-facilities" className="hover:underline">Circuit Lab</a>
                      <ChevronRight size={13} className="text-gray-400" />
                    </li>
                    <li className="py-2 flex items-center justify-between hover:text-[#09285F]">
                      <a href="#lab-facilities" className="hover:underline">Machines Lab</a>
                      <ChevronRight size={13} className="text-gray-400" />
                    </li>
                    <li className="py-2 flex items-center justify-between hover:text-[#09285F]">
                      <a href="#lab-facilities" className="hover:underline">Electronics Lab</a>
                      <ChevronRight size={13} className="text-gray-400" />
                    </li>
                    <li className="py-2 flex items-center justify-between hover:text-[#09285F]">
                      <a href="#lab-facilities" className="hover:underline">Communication Lab</a>
                      <ChevronRight size={13} className="text-gray-400" />
                    </li>
                    <li className="py-2 flex items-center justify-between hover:text-[#09285F]">
                      <a href="#lab-facilities" className="hover:underline">Computer Lab</a>
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
                    Campus Electrical Labs Gallery
                  </h4>
                  <div className="space-y-2.5">
                    <div className="relative rounded overflow-hidden aspect-[16/10] w-full border border-gray-200">
                      <Image
                        src="/diet/department/electrical/faculty-motor-instruction.webp"
                        alt="Electrical Motor Control & Starter Testbed"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 30vw"
                      />
                    </div>
                    <div className="relative rounded overflow-hidden aspect-[16/10] w-full border border-gray-200">
                      <Image
                        src="/diet/department/electrical/circuit-bench-practice.webp"
                        alt="Circuit Wiring & Relay Bench Practice"
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
                  <span>Download Electrical Brochure (PDF)</span>
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
