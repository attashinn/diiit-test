"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Layers,
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
  Scissors,
  Shirt,
  Factory,
  TestTube2,
  Workflow,
  FileText,
  BadgePercent,
  Briefcase,
  HelpCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Real 8-Semester BTEB Curriculum Modules for Textile Engineering (Technology Code: 672)
const semesterCurriculum = [
  {
    sem: "1st Semester",
    title: "Textile Raw Materials & Fundamental Sciences",
    courses: [
      { code: "67211", name: "Yarn Manufacturing - I (Cotton Fiber & Blowroom)", credits: "4" },
      { code: "67212", name: "Basic Textile Raw Materials & Natural Fibers", credits: "3" },
      { code: "67213", name: "Textile Engineering Drawing & CAD Basics", credits: "2" },
      { code: "65911", name: "Mathematics - I (Calculus & Analytical Geometry)", credits: "4" },
      { code: "65912", name: "Physics - I (Mechanics, Wave & Heat)", credits: "3" },
      { code: "65712", name: "English Communication Skills - I", credits: "2" },
    ],
  },
  {
    sem: "2nd Semester",
    title: "Yarn Preparation & Applied Engineering Science",
    courses: [
      { code: "67221", name: "Fabric Manufacturing - I (Winding, Warping & Sizing)", credits: "4" },
      { code: "67222", name: "Textile Chemistry & Polymer Science", credits: "3" },
      { code: "67223", name: "Workshop Practice & Mechanical Machine Elements", credits: "2" },
      { code: "65921", name: "Mathematics - II (Differential Calculus & Vectors)", credits: "4" },
      { code: "65922", name: "Physics - II (Electricity, Magnetism & Optics)", credits: "3" },
      { code: "65722", name: "Bangla Language & Technical Communication", credits: "2" },
    ],
  },
  {
    sem: "3rd Semester",
    title: "Spinning Preparatory, Weaving & Chemical Pre-treatment",
    courses: [
      { code: "67231", name: "Yarn Manufacturing - II (Carding, Drawing & Combing)", credits: "4" },
      { code: "67232", name: "Fabric Manufacturing - II (Loom Mechanisms & Weaving Motions)", credits: "4" },
      { code: "67233", name: "Wet Processing Technology - I (Desizing, Scouring & Bleaching)", credits: "4" },
      { code: "65931", name: "Mathematics - III (Matrices, Complex & Stats)", credits: "4" },
      { code: "66711", name: "Basic Electrical Engineering for Textile Mills", credits: "3" },
      { code: "65821", name: "Business Organization & Communication", credits: "2" },
    ],
  },
  {
    sem: "4th Semester",
    title: "Ring Spinning, Knitting & Dyeing Processes",
    courses: [
      { code: "67241", name: "Yarn Manufacturing - III (Speed Frame & Ring Spinning)", credits: "4" },
      { code: "67242", name: "Knitting Technology & Non-Woven Fabrics", credits: "4" },
      { code: "67243", name: "Wet Processing Technology - II (Dyeing of Natural & Synthetic Fibers)", credits: "4" },
      { code: "67244", name: "Textile Testing & Quality Control - I (Fiber & Yarn Testing)", credits: "3" },
      { code: "66811", name: "Basic Electronics & Sensor Instrumentation", credits: "3" },
      { code: "65841", name: "Industrial Accounting & Garment Costing", credits: "2" },
    ],
  },
  {
    sem: "5th Semester",
    title: "Fabric Structure, Garment Cutting & Textile Printing",
    courses: [
      { code: "67251", name: "Fabric Structure & Design Analysis - I (Woven Cloth Construction)", credits: "4" },
      { code: "67252", name: "Garments Manufacturing Technology - I (Pattern Making & Cutting)", credits: "4" },
      { code: "67253", name: "Wet Processing Technology - III (Printing & Color Formulation)", credits: "4" },
      { code: "67254", name: "Textile Testing & Quality Control - II (Fabric Physical Properties)", credits: "3" },
      { code: "67255", name: "Textile Mill Utilities, Boiler & Humidification", credits: "3" },
      { code: "65852", name: "Industrial Management & Labor Relations", credits: "2" },
    ],
  },
  {
    sem: "6th Semester",
    title: "Apparel Assembly, Merchandising & Sustainable Finishing",
    courses: [
      { code: "67261", name: "Garments Manufacturing Technology - II (Sewing & Production Flow)", credits: "4" },
      { code: "67262", name: "Fabric Structure & Design Analysis - II (Complex Weaves & Jacquard)", credits: "3" },
      { code: "67263", name: "Wet Processing Technology - IV (Special Finishing & ETP Operations)", credits: "4" },
      { code: "67264", name: "Apparel Merchandising & Export-Import Documentation", credits: "3" },
      { code: "67265", name: "Apparel CAD/CAM & Automated Marker Making", credits: "3" },
      { code: "69054", name: "Environmental Management & Sustainable Green Textiles", credits: "2" },
    ],
  },
  {
    sem: "7th Semester",
    title: "Advanced Merchandising, Compliance & Department Capstone",
    courses: [
      { code: "67271", name: "Advanced Apparel Merchandising & Quality Audit (AQL Standards)", credits: "3" },
      { code: "67272", name: "Textile Mill Planning, Machine Maintenance & Costing", credits: "3" },
      { code: "67273", name: "Advanced Knitting & Technical Textiles (Geotextiles & Medical)", credits: "3" },
      { code: "67274", name: "Social Compliance, WRAP, BSCI, OEKO-TEX & Factory Safety", credits: "3" },
      { code: "67275", name: "Entrepreneurship in Fashion & Garments Industry", credits: "2" },
      { code: "67276", name: "Comprehensive Department Capstone Project (Garment Line / Fabric Dev)", credits: "4" },
    ],
  },
  {
    sem: "8th Semester",
    title: "Full-Time Industrial Attachment & Viva",
    courses: [
      { code: "67281", name: "16-Week Full-Time Industrial Attachment (RMG / Composite Mill)", credits: "12" },
      { code: "67282", name: "Industrial Attachment Internship Logbook & Mill Case Study Defense", credits: "4" },
      { code: "67283", name: "BTEB External Board Viva-Voce & Practical Comprehensive Evaluation", credits: "4" },
    ],
  },
];

// Department Lab Facilities with real photos
const departmentLabs = [
  {
    name: "Garment Manufacturing & Apparel Assembly Lab",
    equipment: "Industrial JUKI High-Speed Lockstitch Machines, 4-Thread & 5-Thread Overlock, Button Attaching Units",
    description:
      "Complete apparel production floor simulation where students master commercial stitch formation, sewing machine mechanics, seam engineering, assembly line balancing, and factory-standard garment finishing.",
    image: "/diet/department/textile/hero-textile-spinning.webp",
  },
  {
    name: "Pattern Drafting, Grading & Apparel CAD Lab",
    equipment: "Large-Format Drafting Tables, Precision Electric Rotary Cutters, Grading Rulers, French Curves, Digitizers",
    description:
      "Hands-on workstation where students perform manual pattern making, standard sizing charts, pattern grading, marker making, cutting efficiency optimization, and computer-aided apparel design (CAD).",
    image: "/diet/department/textile/textile-loom-weaving.webp",
  },
  {
    name: "Fabric Cutting & Precision Tailoring Suite",
    equipment: "Vertical Straight Knife Fabric Cutters, Band Knife Cutters, Fabric Spreading Tables, Clamps & Notchers",
    description:
      "Training students in tensionless fabric spreading, multi-ply precision cutting, ply numbering, bundling, and quality auditing to minimize fabric consumption and material wastage.",
    image: "/diet/department/textile/textile-testing-lab.webp",
  },
  {
    name: "Yarn Manufacturing & Fiber Testing Lab",
    equipment: "Fiber Fineness Testers, Digital Twist Testers, Lea Strength Testers, Wrap Reels, Yarn Count Balance",
    description:
      "Equipped for physical analysis of natural and synthetic fibers, testing yarn count (Ne, Tex, Denier), twist per inch (TPI), tensile strength, elongation, and yarn imperfection indices.",
    image: "/diet/department/textile/hero-textile-spinning.webp",
  },
  {
    name: "Wet Processing, Dyeing & Finishing Lab",
    equipment: "HTHP Lab Dyeing Machines, Pad-Steam Units, Spectrophotometer, Color Matching Cabinets, pH Meters",
    description:
      "Practical facility for fabric pre-treatment (desizing, scouring, bleaching), dyeing natural and synthetic fabrics with reactive and disperse dyes, color formulation, and wash fastness testing.",
    image: "/diet/department/textile/textile-loom-weaving.webp",
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

export default function TextileEngineeringPage() {
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
          {/* Background Real Textile Lab Photo */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/diet/department/textile/hero-textile-spinning.webp"
              alt="DIET Textile Engineering Students at Apparel Manufacturing Station"
              fill
              priority
              quality={95}
              className="object-cover object-[75%_center] sm:object-[78%_center] lg:object-[82%_center]"
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
              <span className="text-[#F4B51B] font-medium">Diploma in Textile Engineering</span>
            </nav>

            {/* Department Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 backdrop-blur-md border border-white/15 text-white text-[11px] sm:text-xs font-semibold mb-2.5">
              <span>Department of Textile Engineering</span>
              <span className="text-white/40">&bull;</span>
              <span className="text-[#F4B51B]">BTEB Curriculum Code: 672</span>
            </div>

            {/* Main Page Title */}
            <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-[-0.02em] leading-tight mb-3">
              Diploma in Textile Engineering
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
                      Diploma in Textile Engineering Program Objective
                    </h2>
                  </div>

                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    The <strong>Diploma in Textile Engineering</strong> program is designed to produce competent and skilled technical professionals who can make immediate, high-value contributions to the textile and apparel sector through their technical expertise, practical problem-solving abilities, and deep understanding of sustainable industrial practices. It is regarded as one of the most sought-after disciplines in the realm of engineering and applied technology.
                  </p>

                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    Diploma in Textile Engineering is experiencing surging global and national demand. Within Bangladesh’s powerhouse <strong>Ready-Made Garment (RMG)</strong> and export sector, textile engineers are an essential backbone, operating with extensive significance in diverse capacities including raw fiber sourcing, yarn production, fabric development, wet chemical processing, and international buying house procurement. Textile engineers contribute across composite industrial zones, including modern spinning, automated weaving, circular knitting, and apparel assembly. After completing the course at DIET under the <strong>Bangladesh Technical Education Board (BTEB)</strong>, graduates enjoy abundant career opportunities across private composite industries, banking, buying agencies, and industrial credit corporations.
                  </p>

                  {/* Masked Inset Lab Photo */}
                  <div className="my-6">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/9] w-full border border-gray-200 shadow-sm bg-slate-50">
                      <Image
                        src="/diet/department/textile/textile-loom-weaving.webp"
                        alt="DIET Textile Students Practicing Pattern Drafting and Garment Layout"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 65vw"
                      />
                    </div>
                    <p className="text-[11.5px] text-gray-500 italic mt-2 text-center">
                      DIET Textile Engineering Laboratory — Students engaged in precision pattern drafting, garment grading, and cutting table layout under faculty supervision.
                    </p>
                  </div>
                </article>

                {/* 2. Course Duration And Assessment */}
                <article id="duration-assessment" className="space-y-4">
                  <div className="border-b-2 border-[#09285F] pb-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#09285F]">
                      Diploma in Textile Engineering Course Duration And Assessment
                    </h2>
                  </div>

                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    Diploma in Textile Engineering is a <strong>4-year long program consisting of 8 semesters</strong> (1 Semester = 6 months). The final and the midterm exams of each semester are conducted under the strict supervision of the <strong>Bangladesh Technical Education Board (BTEB)</strong>. All the exam questions, answer script evaluations, and final semester results are published officially by the BTEB.
                  </p>

                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    Besides board examinations, each student attends regular class tests, practical laboratory quizzes, industrial assignments, and semester final capstone projects. After successful completion of the 8 semesters, including the 16-week industrial attachment in a recognized textile or RMG mill, students receive their prestigious Diploma in Engineering certificate from BTEB.
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
                      Official BTEB Course Breakdown &bull; Technology Code: 672
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
                      Career Prospects Of Diploma In Textile Engineering
                    </h2>
                  </div>

                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    A four-year Diploma in Textile Engineering is immensely valued among the new generation of technical learners for its direct industry alignment, work-oriented approach, and job-ready syllabuses. After passing SSC, a student can join this course and achieve the status of a recognized <strong>Diploma Engineer</strong>, smoothly bridging into the booming apparel and manufacturing sectors.
                  </p>

                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    Textile and apparel engineers are hired across large composite conglomerates, specialized manufacturing mills, international retailers, and multinational buying offices, or may establish their own fashion design and garment venture.
                  </p>

                  <h3 className="text-base sm:text-lg font-bold text-[#09285F] pt-2">
                    Industry Roles &amp; Career Pathways
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-lg border border-gray-200 bg-white">
                      <h4 className="text-xs sm:text-[13px] font-bold text-[#09285F] mb-1">
                        Garments Production Officer &amp; Floor Manager
                      </h4>
                      <p className="text-[12px] text-gray-600">
                        Managing automated sewing floors, line balancing, production tracking, operator training, and target outputs.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg border border-gray-200 bg-white">
                      <h4 className="text-xs sm:text-[13px] font-bold text-[#09285F] mb-1">
                        Apparel Merchandiser &amp; Buyer Liaison
                      </h4>
                      <p className="text-[12px] text-gray-600">
                        Bridging international fashion buyers with factories, managing order costing, sampling, trim sourcing, and ship dates.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg border border-gray-200 bg-white">
                      <h4 className="text-xs sm:text-[13px] font-bold text-[#09285F] mb-1">
                        Textile Quality Assurance (QA) Specialist
                      </h4>
                      <p className="text-[12px] text-gray-600">
                        Conducting AQL audits, fiber composition testing, wash fastness, tensile checks, and international compliance verification.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg border border-gray-200 bg-white">
                      <h4 className="text-xs sm:text-[13px] font-bold text-[#09285F] mb-1">
                        Spinning, Weaving &amp; Dyeing Master
                      </h4>
                      <p className="text-[12px] text-gray-600">
                        Overseeing industrial blowroom/carding, high-speed projectile looms, circular knitting, and automated dye recipe preparation.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg border border-gray-200 bg-white">
                      <h4 className="text-xs sm:text-[13px] font-bold text-[#09285F] mb-1">
                        Sub-Assistant Engineer (SAE) in BJMC / BTMC
                      </h4>
                      <p className="text-[12px] text-gray-600">
                        10th-grade technical gazetted officer opportunities across Bangladesh Jute Mills Corp, BTMC, and Ministry of Textiles.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg border border-gray-200 bg-white">
                      <h4 className="text-xs sm:text-[13px] font-bold text-[#09285F] mb-1">
                        Apparel CAD Specialist &amp; Pattern Designer
                      </h4>
                      <p className="text-[12px] text-gray-600">
                        Utilizing digital marker making, pattern grading software, and 3D virtual sampling to maximize fabric yield.
                      </p>
                    </div>
                  </div>
                </article>

                {/* 5. Masked Lab Facilities Grid */}
                <article id="lab-facilities" className="space-y-4">
                  <div className="border-b-2 border-[#09285F] pb-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#09285F]">
                      DIET - Textile Engineering Lab Facilities
                    </h2>
                  </div>

                  <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-relaxed">
                    Practical workshop training accounts for over 60% of academic credits in DIET’s textile program. DIET houses specialized laboratories fully aligned with BTEB standards:
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
                          alt="DIET Textile Engineering Student with Free Laptop"
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
                        DIET is the pioneer polytechnic in Bangladesh providing every enrolled student with a brand new personal laptop computer. Textile engineering students utilize their laptops for apparel CAD/CAM design, pattern drafting, garment cost calculation sheets, ERP merchandising tracking, and online technical certifications.
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
                    Official course expense breakdown for Diploma in Textile Engineering as published in official DIET fee schedules (Table 2: Textile, Mechanical &amp; Automobile Technology):
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
                      B.Sc. Credit Transfer Pathway &bull; Daffodil International University (DIU)
                    </h3>
                  </div>
                  <p className="text-xs sm:text-[13.5px] text-gray-600 leading-relaxed">
                    Graduates from DIET’s Diploma in Textile Engineering have direct pathway eligibility to Daffodil International University (DIU) for <strong>B.Sc. in Textile Engineering</strong>. Diploma engineers receive generous subject credit waivers for up to 1.5 years of coursework and enjoy special tuition fee waivers reserved exclusively for DIET polytechnic alumni.
                  </p>
                </article>
              </div>

              {/* =====================================================
                  RIGHT SIDEBAR (4 COLUMNS - REAL DIET STRUCTURE)
              ===================================================== */}
              <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-[88px]">
                {/* 1. Primary Action Button */}
                <Link
                  href="/apply?dept=textile"
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
                      <dd className="font-semibold text-gray-800">Textile Engineering</dd>
                    </div>
                    <div className="py-2 flex justify-between">
                      <dt className="text-gray-500">Curriculum Code</dt>
                      <dd className="font-semibold text-gray-800">672</dd>
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
                      <a href="#lab-facilities" className="hover:underline">Apparel &amp; Garments Lab</a>
                      <ChevronRight size={13} className="text-gray-400" />
                    </li>
                    <li className="py-2 flex items-center justify-between hover:text-[#09285F]">
                      <a href="#lab-facilities" className="hover:underline">Pattern &amp; Cutting Suite</a>
                      <ChevronRight size={13} className="text-gray-400" />
                    </li>
                    <li className="py-2 flex items-center justify-between hover:text-[#09285F]">
                      <a href="#lab-facilities" className="hover:underline">Yarn Manufacturing Lab</a>
                      <ChevronRight size={13} className="text-gray-400" />
                    </li>
                    <li className="py-2 flex items-center justify-between hover:text-[#09285F]">
                      <a href="#lab-facilities" className="hover:underline">Wet Processing &amp; Dyeing</a>
                      <ChevronRight size={13} className="text-gray-400" />
                    </li>
                    <li className="py-2 flex items-center justify-between hover:text-[#09285F]">
                      <a href="#lab-facilities" className="hover:underline">Textile Testing &amp; QC Lab</a>
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
                    Campus Textile Labs Gallery
                  </h4>
                  <div className="space-y-2.5">
                    <div className="relative rounded overflow-hidden aspect-[16/10] w-full border border-gray-200">
                      <Image
                        src="/diet/department/textile/textile-loom-weaving.webp"
                        alt="Garments Pattern Drafting & Assembly Station"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 30vw"
                      />
                    </div>
                    <div className="relative rounded overflow-hidden aspect-[16/10] w-full border border-gray-200">
                      <Image
                        src="/diet/department/textile/textile-testing-lab.webp"
                        alt="Fabric Precision Cutting & Tailoring Lab"
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
                  <span>Download Textile Brochure (PDF)</span>
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
