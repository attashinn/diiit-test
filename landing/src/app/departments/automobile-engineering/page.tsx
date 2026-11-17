"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Car,
  Wrench,
  Award,
  Clock,
  MapPin,
  Check,
  CheckCircle2,
  ChevronRight,
  Phone,
  Mail,
  PhoneCall,
  MessageCircle,
  Download,
  ArrowRight,
  Gauge,
  Flame,
  Cpu,
  Workflow,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Real 8-Semester BTEB Curriculum Modules for Automobile Engineering (Technology Code: 662)
const semesterCurriculum = [
  {
    sem: "1st Semester",
    title: "Engineering Materials & Automotive Workshop Foundations",
    courses: [
      { code: "66211", name: "Automobile Engineering Materials (Alloys, Composites & Polymers)", credits: "4" },
      { code: "66212", name: "Basic Foundry, Bench Fitting & Welding Practice", credits: "3" },
      { code: "66213", name: "Engineering Drawing - I (Orthographic & Isometric Projections)", credits: "2" },
      { code: "65911", name: "Mathematics - I (Calculus & Analytical Geometry)", credits: "4" },
      { code: "65912", name: "Physics - I (Mechanics, Wave & Heat)", credits: "3" },
      { code: "65712", name: "English Communication Skills - I", credits: "2" },
    ],
  },
  {
    sem: "2nd Semester",
    title: "Machine Shop & Electrical Systems Fundamentals",
    courses: [
      { code: "66221", name: "Machine Shop Practice (Lathe & Shaper Operations)", credits: "4" },
      { code: "66222", name: "Engineering Drawing - II (Automotive Fasteners & Part Assemblies)", credits: "2" },
      { code: "66711", name: "Basic Electrical Engineering for Automotive Technologists", credits: "3" },
      { code: "65921", name: "Mathematics - II (Differential Calculus & Vectors)", credits: "4" },
      { code: "65922", name: "Physics - II (Electricity, Magnetism & Optics)", credits: "3" },
      { code: "65722", name: "Bangla Language & Technical Communication", credits: "2" },
    ],
  },
  {
    sem: "3rd Semester",
    title: "Internal Combustion Engines, Chassis & Mechanics",
    courses: [
      { code: "66231", name: "Automotive Internal Combustion (IC) Engines - I (Petrol & Diesel)", credits: "4" },
      { code: "66232", name: "Automotive Chassis, Frame & Suspension Systems", credits: "4" },
      { code: "66233", name: "Strength of Materials & Machine Elements", credits: "4" },
      { code: "65931", name: "Mathematics - III (Matrices, Complex Numbers & Statistics)", credits: "4" },
      { code: "66811", name: "Basic Electronics & Semiconductor Diodes", credits: "3" },
      { code: "65821", name: "Business Organization & Communication", credits: "2" },
    ],
  },
  {
    sem: "4th Semester",
    title: "Engine Overhauling, Transmissions & Thermodynamics",
    courses: [
      { code: "66241", name: "Automotive Internal Combustion (IC) Engines - II (Overhauling & Tuning)", credits: "4" },
      { code: "66242", name: "Automotive Transmission & Drive Lines (Gearboxes & Differentials)", credits: "4" },
      { code: "66243", name: "Applied Thermodynamics & Heat Engines", credits: "3" },
      { code: "66244", name: "Automotive Fuel Injection & Carburetion Systems", credits: "3" },
      { code: "66245", name: "Automotive CAD (2D AutoCAD for Mechanical Systems)", credits: "2" },
      { code: "65841", name: "Industrial Accounting & Workshop Costing", credits: "2" },
    ],
  },
  {
    sem: "5th Semester",
    title: "Electrical Charging, Steering, Braking & Climate Control",
    courses: [
      { code: "66251", name: "Automotive Electrical & Starting/Charging Systems (Alternators, Starters)", credits: "4" },
      { code: "66252", name: "Automotive Steering, Braking & Anti-Lock Braking (ABS) Systems", credits: "4" },
      { code: "66253", name: "Hydraulics, Pneumatics & Fluid Power Systems", credits: "3" },
      { code: "66254", name: "2 & 3 Wheeler Vehicle Technology & Workshop Practice", credits: "3" },
      { code: "66255", name: "Automotive Air Conditioning & Climate Control (HVAC)", credits: "3" },
      { code: "65852", name: "Industrial Management & Garage Safety", credits: "2" },
    ],
  },
  {
    sem: "6th Semester",
    title: "Autotronics, EFI/CRDi, Wheel Alignment & EV Tech",
    courses: [
      { code: "66261", name: "Autotronics - I (Microcontrollers, Sensors & Actuators)", credits: "4" },
      { code: "66262", name: "Electronic Fuel Injection (EFI) & Common Rail Diesel Injection (CRDi)", credits: "4" },
      { code: "66263", name: "Vehicle Dynamics, Computerized Wheel Alignment & Balancing", credits: "3" },
      { code: "66264", name: "Automotive Maintenance, Trouble Shooting & Garage Service", credits: "3" },
      { code: "66265", name: "Hybrid & Electric Vehicle (EV) Technology Fundamentals", credits: "3" },
      { code: "69054", name: "Environmental Management & Vehicle Emission Control (Euro Standards)", credits: "2" },
    ],
  },
  {
    sem: "7th Semester",
    title: "Diagnostic Scanning, Motor Vehicle Law & Capstone",
    courses: [
      { code: "66271", name: "Autotronics - II & Computerized Diagnostic Scanning (OBD-II, CAN Bus)", credits: "4" },
      { code: "66272", name: "Modern Heavy Transport & Commercial Fleet Management", credits: "3" },
      { code: "66273", name: "Motor Vehicle Law, BRTA Regulations, Insurance & Accident Inspection", credits: "3" },
      { code: "66274", name: "Garage Planning, Modern Service Station Setup & Estimating", credits: "3" },
      { code: "66275", name: "Innovation, Entrepreneurship & Auto Enterprise Setup", credits: "2" },
      { code: "66276", name: "Comprehensive Automobile Engineering Capstone Project", credits: "4" },
    ],
  },
  {
    sem: "8th Semester",
    title: "Full-Time Industrial Attachment & Viva",
    courses: [
      { code: "66281", name: "16-Week Full-Time Industrial Attachment (Automotive Plant / Authorized Center)", credits: "12" },
      { code: "66282", name: "Industrial Attachment Internship Logbook & Technical Case Defense", credits: "4" },
      { code: "66283", name: "BTEB External Board Viva-Voce & Practical Comprehensive Evaluation", credits: "4" },
    ],
  },
];

// Department Lab Facilities with real photos
const departmentLabs = [
  {
    name: "Automotive Engine & Overhauling Lab",
    equipment: "VVT-i 4-Cylinder Petrol Engines, Common Rail Turbo Diesel (CRDi) Engines, Dynamometers, Valve Grinders",
    description:
      "Comprehensive engine workstation where students perform engine dismantling, valve clearance calibration, piston ring fitting, compression testing, crankshaft journal micrometer inspection, and complete engine overhauling.",
    image: "/diet/department/automobile/hero-automobile-engine-inspection.webp",
  },
  {
    name: "Chassis, Steering & Suspension Systems Lab",
    equipment: "Complete Vehicle Chassis Rigs, Rack & Pinion Steering Benches, Coil/Leaf Springs, Shock Absorbers, Brake Testbeds",
    description:
      "Workstations for examining steering linkages, wheel geometry, camber/caster alignment, brake bleeding, tandem master cylinder overhaul, and independent suspension damping dynamics under faculty supervision.",
    image: "/diet/department/automobile/automobile-steering-chassis-lab.webp",
  },
  {
    name: "Transmission & Differential Gearbox Suite",
    equipment: "Heavy-Duty Rear Axle Differential Units, 5-Speed Manual Gearboxes, Automatic Transmissions, Clutch Assemblies",
    description:
      "Practical training in transmission gear ratios, differential bevel gear backlash adjustment, clutch plate wear assessment, torque converters, propeller shafts, and commercial drive axle maintenance.",
    image: "/diet/department/automobile/automobile-differential-gearbox.webp",
  },
  {
    name: "Autotronics, Sensors & Diagnostic Scanning Lab",
    equipment: "OBD-II Computerized Scanners, Oscilloscopes, Automotive Sensor Simulators (MAF, MAP, O2), CAN-Bus Trainers",
    description:
      "Advanced electronic troubleshooting suite where students diagnose check-engine DTC codes, calibrate EFI sensors, analyze fuel injector waveforms, test ABS wheel speed sensors, and learn hybrid/EV battery management.",
    image: "/diet/department/automobile/automobile-faculty-engine-instruction.webp",
  },
  {
    name: "Automotive Air Conditioning & Climate Control (HVAC)",
    equipment: "R134a/R1234yf AC Recovery & Recycling Machines, Manifold Gauge Sets, Swash-Plate Compressors, Condenser Coils",
    description:
      "Training students in vehicle climate circuits, automotive compressor servicing, refrigerant leak detection with UV dye, system evacuation, expansion valve diagnosis, and vehicle climate optimization.",
    image: "/diet/department/automobile/automobile-hvac-service.webp",
  },
];

// Official Tuition Fee Rows from diet.ac/tuition-fees/ (Table 2: Textile, Mechanical, Automobile)
const feeBreakdown = [
  { description: "Admission Fee (One-Time)", schedule: "Payable at admission", amount: "৳ 6,000" },
  { description: "Library, Lab Development & Other Fees", schedule: "Payable at admission", amount: "৳ 6,000" },
  { description: "Semester Fee (8 Semesters × ৳ 12,700)", schedule: "Every 6 months (Semester start)", amount: "৳ 1,01,600" },
  { description: "Monthly Tuition Fee (48 Months × ৳ 1,800)", schedule: "Monthly installments", amount: "৳ 86,400" },
  { description: "Skill Package & Field Certifications", schedule: "One-Time package", amount: "৳ 20,000" },
];

export default function AutomobileEngineeringPage() {
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
          {/* Background Real Automobile Lab Photo */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/diet/department/automobile/hero-automobile-engine-inspection.webp"
              alt="DIET Automobile Engineering Student Inspecting Car Engine Bay"
              fill
              priority
              quality={95}
              className="object-cover object-[75%_center] sm:object-[78%_center] lg:object-[82%_center]"
            />
            {/* Deep DIET Navy Gradient: Solid on left for text legibility, decreased on right so the student working under the car hood is clearly visible */}
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
              <span className="text-[#F4B51B] font-medium">Diploma in Automobile Engineering</span>
            </nav>

            {/* Department Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 backdrop-blur-md border border-white/15 text-white text-[11px] sm:text-xs font-semibold mb-2.5">
              <span>Department of Automobile Engineering</span>
              <span className="text-white/40">&bull;</span>
              <span className="text-[#F4B51B]">BTEB Curriculum Code: 662</span>
            </div>

            {/* Main Page Title */}
            <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-[-0.02em] leading-tight mb-3">
              Diploma in Automobile Engineering
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
                      Diploma in Automobile Engineering Program Objective
                    </h2>
                  </div>

                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    The <strong>Diploma in Automobile Engineering</strong> course is meticulously structured to train students to design, develop, manufacture, assemble, diagnose, and maintain modern automobiles. The department faculty members are seasoned professionals, combining rigorous academic credentials with rich hands-on industrial and automotive experience.
                  </p>

                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    Automobile Engineering represents the specialized engineering domain dealing with the planning, manufacturing, and operation of motor vehicles—ranging from passenger cars, motorcycles, and three-wheelers to commercial buses, trucks, and heavy transport equipment. The discipline comprehensively integrates mechanical mechanics, electrical electronics (Autotronics), computerized sensor management, chassis safety systems, and modern aerodynamic styling.
                  </p>

                  {/* Masked Inset Lab Photo */}
                  <div className="my-6">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/9] w-full border border-gray-200 shadow-sm bg-slate-50">
                      <Image
                        src="/diet/department/automobile/automobile-faculty-engine-instruction.webp"
                        alt="DIET Automobile Faculty Instructing Students on IC Engine Assembly"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 65vw"
                      />
                    </div>
                    <p className="text-[11.5px] text-gray-500 italic mt-2 text-center">
                      DIET Automobile Engineering Laboratory — Faculty member explaining internal combustion engine assembly and valve train mechanics to diploma students with DIET campus ID lanyards.
                    </p>
                  </div>
                </article>

                {/* 2. Course Duration And Assessment */}
                <article id="duration-assessment" className="space-y-4">
                  <div className="border-b-2 border-[#09285F] pb-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#09285F]">
                      Diploma in Automobile Engineering Course Duration And Assessment
                    </h2>
                  </div>

                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    Diploma in Automobile Engineering is a <strong>4-year long program consisting of 8 semesters</strong> (1 Semester = 6 months). The final and the midterm exams of each semester are conducted under the strict supervision of the <strong>Bangladesh Technical Education Board (BTEB)</strong>. All the exam questions, answer script evaluations, and final semester results are published officially by the BTEB.
                  </p>

                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    Besides board examinations, each student attends regular practical workshop tests, engine tuning quizzes, industrial assignments, and semester final capstone projects. After successful completion of the 8 semesters, including the 16-week industrial attachment in a recognized automobile assembly plant, authorized dealership, or power transmission facility, students receive their prestigious Diploma in Engineering certificate from BTEB.
                  </p>

                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    The admission procedure starts immediately after the publication of SSC results. There is mainly one academic session in a year. Students follow the official admission announcement published by the Bangladesh Technical Education Board Authority, with enrollment typically opening after May.
                  </p>
                </article>

                {/* 3. Interactive 8-Semester BTEB Curriculum Framework */}
                <article id="curriculum" className="space-y-4">
                  <div className="border-b-2 border-[#09285F] pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#09285F]">
                      8-Semester BTEB Curriculum Structure
                    </h2>
                    <span className="text-xs text-gray-500 font-medium">
                      Official BTEB Course Breakdown &bull; Technology Code: 662
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
                      Career Prospects Of Diploma In Automobile Engineering
                    </h2>
                  </div>

                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    Automobile engineers are involved in vehicle design, manufacture, distribution, marketing, sales, and after-sales care of passenger cars, motorbikes, buses, and commercial transport fleets. After completing SSC, a student can join this course and earn the recognized status of a <strong>Diploma Engineer</strong>, smoothly entering the burgeoning automotive sector.
                  </p>

                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    Graduates qualify for the post of <strong>Sub-Assistant Engineer (SAE)</strong> in government and autonomous bodies such as the <strong>Bangladesh Road Transport Authority (BRTA)</strong>, <strong>Bangladesh Road Transport Corporation (BRTC)</strong>, <strong>Roads and Highways Department (RHD)</strong>, <strong>Bangladesh Railway</strong>, <strong>Dhaka WASA</strong>, <strong>BPDB</strong>, <strong>RAJUK</strong>, <strong>EGCB</strong>, and <strong>PGCB</strong>. In the private sector, automotive engineers command high demand in automotive manufacturing and assembly plants (Runner, Walton, Pragoti, Uttara Motors, ACI Motors, Hyundai, Toyota/Navana), computerized diagnostic service centers, insurance claim surveyor offices, and fleet logistics. Many graduates also establish successful vehicle repair workshops, EFI conversion centers, and automobile spare parts businesses.
                  </p>

                  <h3 className="text-base sm:text-lg font-bold text-[#09285F] pt-2">
                    Industry Roles &amp; Career Pathways
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-lg border border-gray-200 bg-white">
                      <h4 className="text-xs sm:text-[13px] font-bold text-[#09285F] mb-1">
                        Sub-Assistant Engineer (SAE) in BRTA &amp; BRTC
                      </h4>
                      <p className="text-[12px] text-gray-600">
                        Vehicle fitness inspection, driving test examiner, motor vehicle registration, and state bus fleet maintenance.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg border border-gray-200 bg-white">
                      <h4 className="text-xs sm:text-[13px] font-bold text-[#09285F] mb-1">
                        Automotive Assembly &amp; Production Engineer
                      </h4>
                      <p className="text-[12px] text-gray-600">
                        Managing vehicle assembly lines, CKD/SKD assembly units, body paint shops, and quality audit stations in manufacturing plants.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg border border-gray-200 bg-white">
                      <h4 className="text-xs sm:text-[13px] font-bold text-[#09285F] mb-1">
                        Autotronics &amp; Computerized Diagnostic Specialist
                      </h4>
                      <p className="text-[12px] text-gray-600">
                        Conducting OBD-II scanner diagnostics, ECU re-mapping, sensor calibrations, CAN-bus troubleshooting, and EFI tuning.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg border border-gray-200 bg-white">
                      <h4 className="text-xs sm:text-[13px] font-bold text-[#09285F] mb-1">
                        Hybrid &amp; Electric Vehicle (EV) Technician
                      </h4>
                      <p className="text-[12px] text-gray-600">
                        Inspecting high-voltage lithium battery packs, regenerative braking systems, inverter drives, and EV charging infrastructure.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg border border-gray-200 bg-white">
                      <h4 className="text-xs sm:text-[13px] font-bold text-[#09285F] mb-1">
                        Automotive Insurance Surveyor &amp; Loss Adjuster
                      </h4>
                      <p className="text-[12px] text-gray-600">
                        Evaluating vehicular accident damage, estimating repair expenses, assessing parts replacement, and drafting surveyor reports.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg border border-gray-200 bg-white">
                      <h4 className="text-xs sm:text-[13px] font-bold text-[#09285F] mb-1">
                        Modern Auto Service Center Entrepreneur
                      </h4>
                      <p className="text-[12px] text-gray-600">
                        Establishing independent computerized garage workshops, 3D wheel alignment setups, AC servicing, and spare parts dealerships.
                      </p>
                    </div>
                  </div>
                </article>

                {/* 5. Masked Lab Facilities Grid */}
                <article id="lab-facilities" className="space-y-4">
                  <div className="border-b-2 border-[#09285F] pb-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#09285F]">
                      DIET - Automobile Engineering Lab Facilities
                    </h2>
                  </div>

                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    Practical engineering laboratory sessions account for over 60% of technical credits. DIET maintains specialized automotive laboratories fully aligned with BTEB standards:
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
                          alt="DIET Automobile Engineering Student with Free Laptop"
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
                        DIET is the pioneer polytechnic in Bangladesh providing every enrolled student with a brand new personal laptop computer. Automobile engineering students utilize their personal laptops for automotive AutoCAD design, OBD-II scanner telemetry software, workshop inventory ERP systems, and hybrid vehicle simulation software.
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
                        <strong>Minimum requirement:</strong> SSC or equivalent from <strong>any discipline</strong> (Science, Arts, Commerce, Vocational) with minimum GPA: <strong>2.00</strong>.
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
                    Admission Guidelines &amp; Required Documents
                  </h3>
                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    Students are advised to collect the admission form directly from the DIET admission office at the Sukrabad, Dhanmondi campus. To confirm admission, candidates must submit:
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
                        <span>Photocopy of Parent&apos;s National ID (NID) Card</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-emerald-600 flex-shrink-0" />
                        <span>Properly filled DIET admission application form</span>
                      </li>
                    </ul>
                    <div className="mt-3 text-[11px] text-amber-800 font-bold">
                      NOTE: Admission is granted on a first-come, first-served basis for limited seats approved under BTEB quotas.
                    </div>
                  </div>
                </article>

                {/* 8. Official Tuition Fees Table (Table 2 on diet.ac/tuition-fees/: BDT 2,20,000) */}
                <article id="tuition-fees" className="space-y-4">
                  <div className="border-b-2 border-[#09285F] pb-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#09285F]">
                      Tuition Fees &amp; Expenses (BDT 2,20,000)
                    </h2>
                  </div>

                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    Official course expense breakdown for Diploma in Automobile Engineering as published in official DIET fee schedules (Table 2: Textile, Mechanical &amp; Automobile Technology):
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
                          <td className="py-3 px-4 text-right text-sm sm:text-base">৳ 2,20,000</td>
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
                      <li><strong>Work-Based Scholarships:</strong> Available through the DIET Job Placement Cell for on-campus technical tasks.</li>
                      <li><strong>Startup Venture Fund:</strong> Seed capital, incubator space, and business mentorship from Bangladesh Venture Capital Ltd.</li>
                    </ul>
                  </div>
                </article>

                {/* 9. Higher Education & DIU Pathway */}
                <article id="diu-pathway" className="p-5 rounded-xl border border-gray-200 bg-white shadow-sm space-y-3">
                  <div className="flex items-center gap-2">
                    <Award size={18} className="text-[#09285F]" />
                    <h3 className="text-base sm:text-lg font-bold text-[#09285F]">
                      B.Sc. Credit Transfer Pathway &bull; Higher Education Opportunities
                    </h3>
                  </div>
                  <p className="text-xs sm:text-[13.5px] text-gray-600 leading-relaxed">
                    Graduates from DIET’s Diploma in Automobile Engineering are eligible for admission into <strong>Dhaka University of Engineering &amp; Technology (DUET)</strong> as well as direct credit transfer eligibility to Daffodil International University (DIU) for <strong>B.Sc. in Mechanical Engineering (with Automotive Specialization)</strong>. Diploma engineers receive generous course exemptions for up to 1.5 years and enjoy exclusive tuition fee waivers reserved for DIET polytechnic alumni.
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
                      <dd className="font-semibold text-gray-800">Automobile Engineering</dd>
                    </div>
                    <div className="py-2 flex justify-between">
                      <dt className="text-gray-500">Curriculum Code</dt>
                      <dd className="font-semibold text-gray-800">662</dd>
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
                      <dd className="font-bold text-[#09285F]">৳ 2,20,000</dd>
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
                      <a href="#lab-facilities" className="hover:underline">Engine &amp; Overhauling Lab</a>
                      <ChevronRight size={13} className="text-gray-400" />
                    </li>
                    <li className="py-2 flex items-center justify-between hover:text-[#09285F]">
                      <a href="#lab-facilities" className="hover:underline">Chassis &amp; Steering Systems</a>
                      <ChevronRight size={13} className="text-gray-400" />
                    </li>
                    <li className="py-2 flex items-center justify-between hover:text-[#09285F]">
                      <a href="#lab-facilities" className="hover:underline">Transmission &amp; Gearbox</a>
                      <ChevronRight size={13} className="text-gray-400" />
                    </li>
                    <li className="py-2 flex items-center justify-between hover:text-[#09285F]">
                      <a href="#lab-facilities" className="hover:underline">Autotronics &amp; Diagnostics</a>
                      <ChevronRight size={13} className="text-gray-400" />
                    </li>
                    <li className="py-2 flex items-center justify-between hover:text-[#09285F]">
                      <a href="#lab-facilities" className="hover:underline">Automotive HVAC Suite</a>
                      <ChevronRight size={13} className="text-gray-400" />
                    </li>
                    <li className="py-2 flex items-center justify-between hover:text-[#09285F]">
                      <a href="#admission-eligibility" className="hover:underline">Admission Requirements</a>
                      <ChevronRight size={13} className="text-gray-400" />
                    </li>
                    <li className="py-2 flex items-center justify-between hover:text-[#09285F]">
                      <a href="#tuition-fees" className="hover:underline">Tuition Fees (৳ 2,20,000)</a>
                      <ChevronRight size={13} className="text-gray-400" />
                    </li>
                  </ul>
                </div>

                {/* 5. Authentic Photo Gallery Stack */}
                <div className="rounded-lg border border-gray-200 bg-white p-4 text-left space-y-3">
                  <h4 className="text-xs font-bold text-[#09285F] uppercase tracking-wider border-b border-gray-200 pb-2">
                    Campus Automobile Labs Gallery
                  </h4>
                  <div className="space-y-2.5">
                    <div className="relative rounded overflow-hidden aspect-[16/10] w-full border border-gray-200">
                      <Image
                        src="/diet/department/automobile/automobile-steering-chassis-lab.webp"
                        alt="Steering Column & Suspension Rig"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 30vw"
                      />
                    </div>
                    <div className="relative rounded overflow-hidden aspect-[16/10] w-full border border-gray-200">
                      <Image
                        src="/diet/department/automobile/automobile-differential-gearbox.webp"
                        alt="Rear Axle & Differential Gearbox Testbed"
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
                  <span>Download Automobile Brochure (PDF)</span>
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
