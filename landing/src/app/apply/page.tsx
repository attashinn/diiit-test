"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  GraduationCap,
  CheckCircle2,
  Clock,
  Award,
  FileText,
  Send,
  PhoneCall,
  MessageCircle,
  MapPin,
  Mail,
  Building2,
  Sparkles,
  Download,
  AlertCircle,
  Calendar,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Check,
  Laptop,
  BadgePercent,
  User,
  Phone,
  BookOpen,
  HelpCircle,
  Info,
  Lock,
  Layers,
  Printer,
  RotateCcw,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// All 6 BTEB Accredited Engineering Technologies
const engineeringPrograms = [
  {
    id: "computer",
    code: "685",
    name: "Diploma in Computer Engineering",
    shortName: "Computer",
    duration: "4 Years (8 Semesters)",
    seats: "120 Seats",
    fee: "৳ 2,40,000",
    color: "#09285F",
    accent: "#123DB8",
    badge: "Most Popular",
    icon: Laptop,
  },
  {
    id: "civil",
    code: "664",
    name: "Diploma in Civil Engineering",
    shortName: "Civil",
    duration: "4 Years (8 Semesters)",
    seats: "100 Seats",
    fee: "৳ 2,40,000",
    color: "#09285F",
    accent: "#0E7490",
    badge: "High Demand",
    icon: Building2,
  },
  {
    id: "electrical",
    code: "667",
    name: "Diploma in Electrical Engineering",
    shortName: "Electrical",
    duration: "4 Years (8 Semesters)",
    seats: "80 Seats",
    fee: "৳ 2,40,000",
    color: "#09285F",
    accent: "#D97706",
    badge: "Core Engineering",
    icon: Sparkles,
  },
  {
    id: "textile",
    code: "672",
    name: "Diploma in Textile Engineering",
    shortName: "Textile",
    duration: "4 Years (8 Semesters)",
    seats: "60 Seats",
    fee: "৳ 2,20,000",
    color: "#09285F",
    accent: "#059669",
    badge: "Affordable Package",
    icon: Layers,
  },
  {
    id: "mechanical",
    code: "670",
    name: "Diploma in Mechanical Engineering",
    shortName: "Mechanical",
    duration: "4 Years (8 Semesters)",
    seats: "60 Seats",
    fee: "৳ 2,20,000",
    color: "#09285F",
    accent: "#DC2626",
    badge: "Industrial Backbone",
    icon: ShieldCheck,
  },
  {
    id: "automobile",
    code: "662",
    name: "Diploma in Automobile Engineering",
    shortName: "Automobile",
    duration: "4 Years (8 Semesters)",
    seats: "60 Seats",
    fee: "৳ 2,20,000",
    color: "#09285F",
    accent: "#7C3AED",
    badge: "Emerging EV Tech",
    icon: Award,
  },
];

const educationBoards = [
  "Dhaka",
  "Chattogram",
  "Rajshahi",
  "Cumilla",
  "Jashore",
  "Sylhet",
  "Barishal",
  "Dinajpur",
  "Mymensingh",
  "Madrasah Board",
  "Technical Education Board (BTEB)",
  "Open University / Others",
];

const passingYears = ["2026", "2025", "2024", "2023", "2022", "2021", "2020"];

function ApplyFormContent() {
  const searchParams = useSearchParams();
  const initialDept = searchParams?.get("dept") || "computer";

  // Form State
  const [selectedProgram, setSelectedProgram] = useState(initialDept);
  const [shiftPreference, setShiftPreference] = useState("1st Shift (Morning 8:00 AM - 1:00 PM)");
  const [sessionPeriod, setSessionPeriod] = useState("2026-2027 Academic Session");

  // Personal Info
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("Male");
  const [presentAddress, setPresentAddress] = useState("");
  const [district, setDistrict] = useState("Dhaka");
  const [guardianName, setGuardianName] = useState("");
  const [guardianPhone, setGuardianPhone] = useState("");

  // Academic Info
  const [sscRoll, setSscRoll] = useState("");
  const [sscReg, setSscReg] = useState("");
  const [sscBoard, setSscBoard] = useState("Dhaka");
  const [sscYear, setSscYear] = useState("2026");
  const [sscGpa, setSscGpa] = useState("");
  const [sscGroup, setSscGroup] = useState("Science");

  // Additional options
  const [laptopScheme, setLaptopScheme] = useState(true);
  const [hostelRequirement, setHostelRequirement] = useState("No, Day Scholar");
  const [specialQuota, setSpecialQuota] = useState("General / Merit");

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState("");
  const [submissionDate, setSubmissionDate] = useState("");

  // Auto-sync query param when changed
  useEffect(() => {
    if (searchParams) {
      const qDept = searchParams.get("dept");
      if (qDept && engineeringPrograms.some((p) => p.id === qDept)) {
        setSelectedProgram(qDept);
      }
    }
  }, [searchParams]);

  // Scholarship estimator calculation
  const scholarshipEstimate = useMemo(() => {
    const gpa = parseFloat(sscGpa);
    if (isNaN(gpa) || gpa <= 0) {
      return {
        percent: "Up to 100%",
        note: "Enter your SSC GPA to calculate your estimated tuition waiver.",
        status: "neutral",
      };
    }
    if (gpa >= 5.0) {
      return {
        percent: "70% – 100% Merit Waiver",
        note: "Golden GPA 5.00 qualify for maximum Chairman's Merit Scholarship + Free Laptop.",
        status: "success",
      };
    }
    if (gpa >= 4.5) {
      return {
        percent: "40% – 50% Tuition Waiver",
        note: "Outstanding performance qualifies for First Class Merit discount.",
        status: "success",
      };
    }
    if (gpa >= 4.0) {
      return {
        percent: "25% – 35% Tuition Waiver",
        note: "Solid grade qualifies for institutional technical development grant.",
        status: "info",
      };
    }
    if (gpa >= 3.0) {
      return {
        percent: "15% – 20% Early Bird Concession",
        note: "Eligible for prompt enrollment grant and monthly flexible installment plan.",
        status: "info",
      };
    }
    return {
      percent: "Eligible for Admission (Minimum GPA 2.00)",
      note: "Standard BTEB eligibility requirements met. Flexible 48-month payment plan available.",
      status: "neutral",
    };
  }, [sscGpa]);

  const currentProgram = useMemo(
    () => engineeringPrograms.find((p) => p.id === selectedProgram) || engineeringPrograms[0],
    [selectedProgram]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate instant secure processing
    setTimeout(() => {
      const randomCode = Math.floor(100000 + Math.random() * 900000);
      const generatedId = `DIET-APP-2026-${randomCode}`;
      setTrackingId(generatedId);
      setSubmissionDate(new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }));
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setTrackingId("");
    setFullName("");
    setPhoneNumber("");
    setEmailAddress("");
    setSscGpa("");
    setSscRoll("");
    setSscReg("");
  };

  return (
    <div className="w-full">
      {/* =========================================================
          PANORAMIC INSTITUTIONAL HERO HEADER
      ========================================================= */}
      <section className="relative w-full min-h-[260px] sm:min-h-[320px] bg-[#09285F] text-white flex items-center overflow-hidden">
        {/* Background Image & Architectural Vignette */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/diet/admission-hero-building.webp"
            alt="Daffodil Institute Campus Admissions"
            fill
            priority
            quality={92}
            className="object-cover object-[center_35%]"
          />
          {/* DIET Deep Navy Gradient for high contrast */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(9, 40, 95, 0.98) 0%, rgba(9, 40, 95, 0.92) 45%, rgba(9, 40, 95, 0.65) 75%, rgba(9, 40, 95, 0.35) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(9, 40, 95, 0.4) 0%, transparent 40%, rgba(9, 40, 95, 0.7) 100%)",
            }}
          />
        </div>

        {/* Content Container */}
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
            <span className="text-[#F4B51B] font-medium">Online Admission Application</span>
          </nav>

          {/* Department Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 backdrop-blur-md border border-white/15 text-white text-[11px] sm:text-xs font-semibold mb-2.5">
            <Calendar size={13} className="text-[#F4B51B]" />
            <span>Academic Admissions 2026-2027</span>
            <span className="text-white/40">&bull;</span>
            <span className="text-[#F4B51B]">BTEB Curriculum Approved</span>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-[-0.02em] leading-tight mb-3">
            Apply for Admission
          </h1>

          {/* Subtitle Ribbon */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-[13.5px] text-slate-200">
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-[#F4B51B]" />
              <span>4-Year Diploma (8 Semesters)</span>
            </div>
            <span className="hidden sm:inline text-white/30">&bull;</span>
            <div className="flex items-center gap-1.5">
              <Laptop size={14} className="text-[#F4B51B]" />
              <span>Free Laptop Scheme</span>
            </div>
            <span className="hidden sm:inline text-white/30">&bull;</span>
            <div className="flex items-center gap-1.5">
              <BadgePercent size={14} className="text-[#F4B51B]" />
              <span>Up to 100% Merit Scholarships</span>
            </div>
            <span className="hidden sm:inline text-white/30">&bull;</span>
            <div className="flex items-center gap-1.5">
              <MapPin size={14} className="text-[#F4B51B]" />
              <span>Dhanmondi Campus, Dhaka</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN APPLICATION FORM & EDITORIAL DETAILS
      ========================================================= */}
      <section className="w-full py-8 sm:py-14 bg-[#F8FAFC]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            /* =========================================================
                SUCCESS CONFIRMATION RECEIPT
            ========================================================= */
            <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-emerald-200 shadow-xl text-left">
              <div className="flex items-center gap-4 border-b border-gray-100 pb-6 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={32} />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100/80 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-1">
                    Application Successfully Received
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#09285F]">
                    Congratulations, {fullName || "Applicant"}!
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Your official admission request for Daffodil Institute of Engineering &amp; Technology has been recorded.
                  </p>
                </div>
              </div>

              {/* Reference Slip Card */}
              <div className="bg-[#F8FAFC] border border-gray-200/80 rounded-2xl p-5 sm:p-6 mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-[13.5px]">
                  <div>
                    <span className="text-gray-500 block text-[11.5px] uppercase tracking-wider font-semibold">
                      Application Tracking Number
                    </span>
                    <span className="font-mono font-extrabold text-[#123DB8] text-base sm:text-lg">
                      {trackingId}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[11.5px] uppercase tracking-wider font-semibold">
                      Applied Program
                    </span>
                    <span className="font-bold text-[#09285F]">
                      {currentProgram.name} (Code: {currentProgram.code})
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[11.5px] uppercase tracking-wider font-semibold">
                      Submission Timestamp
                    </span>
                    <span className="font-medium text-slate-700">{submissionDate}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[11.5px] uppercase tracking-wider font-semibold">
                      Estimated Scholarship Waiver
                    </span>
                    <span className="font-bold text-emerald-700">{scholarshipEstimate.percent}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[11.5px] uppercase tracking-wider font-semibold">
                      Registered Phone
                    </span>
                    <span className="font-medium text-slate-700">{phoneNumber || "N/A"}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[11.5px] uppercase tracking-wider font-semibold">
                      Selected Shift &amp; Session
                    </span>
                    <span className="font-medium text-slate-700">{shiftPreference}</span>
                  </div>
                </div>
              </div>

              {/* Next Steps Instructions */}
              <div className="border border-blue-100 bg-[#EFF6FF] rounded-2xl p-5 mb-8">
                <h3 className="text-sm font-bold text-[#09285F] mb-2 flex items-center gap-1.5">
                  <Info size={16} className="text-[#123DB8]" />
                  <span>Immediate Next Steps for Final Seat Confirmation</span>
                </h3>
                <ul className="text-xs sm:text-[13px] text-slate-700 space-y-1.5 list-disc list-inside">
                  <li>
                    A senior admission counselor from DIET will call you on <strong>{phoneNumber}</strong> within 2 to 4 business hours to verify your details.
                  </li>
                  <li>
                    Please prepare 4 passport-size photographs, your SSC marksheet, and birth certificate/NID.
                  </li>
                  <li>
                    You can visit the campus at <strong>104 Sukrabad, Mirpur Road, Dhanmondi</strong> anytime between 9:00 AM and 6:00 PM for on-the-spot document verification and seat booking.
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 bg-[#09285F] hover:bg-[#123DB8] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition shadow-sm"
                >
                  <Printer size={16} />
                  <span>Print Reference Slip</span>
                </button>
                <div className="flex items-center gap-2">
                  <a
                    href="https://wa.me/8801713493240"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp Admission Desk</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-slate-700 font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition"
                  >
                    <RotateCcw size={15} />
                    <span>New Application</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* =========================================================
                APPLICATION FORM & SIDEBAR GUIDE
            ========================================================= */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* =====================================================
                  LEFT: COMPREHENSIVE MULTI-STEP FORM (8 COLUMNS)
              ===================================================== */}
              <div className="lg:col-span-8 space-y-8 text-left">
                {/* Form Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-sm">
                  {/* Form Headline */}
                  <div className="border-b border-gray-100 pb-5 mb-8">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#123DB8]/10 text-[#123DB8] text-xs font-bold uppercase tracking-wider mb-2">
                      <GraduationCap size={14} />
                      <span>Online Application Form &bull; Academic Year 2026-2027</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#09285F] tracking-tight">
                      Enroll in Diploma Engineering
                    </h2>
                    <p className="text-xs sm:text-[14px] text-gray-500 mt-1">
                      Fill out the form below. Our centralized admission board evaluates all submissions on merit. No application fees required for online registration.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* -------------------------------------------------
                        STEP 1: SELECT ENGINEERING PROGRAM
                    ------------------------------------------------- */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-xs sm:text-[13.5px] font-bold text-[#09285F] uppercase tracking-wider flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-[#09285F] text-white text-xs flex items-center justify-center font-extrabold">
                            1
                          </span>
                          <span>Choose Diploma Engineering Technology</span>
                        </label>
                        <span className="text-[11.5px] text-gray-400 font-medium">BTEB Approved</span>
                      </div>

                      {/* 6 Program Radio / Card Selectors */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {engineeringPrograms.map((prog) => {
                          const isSelected = selectedProgram === prog.id;
                          const Icon = prog.icon;
                          return (
                            <div
                              key={prog.id}
                              onClick={() => setSelectedProgram(prog.id)}
                              className={`relative p-4 rounded-2xl border cursor-pointer transition-all ${
                                isSelected
                                  ? "border-[#123DB8] bg-[#EFF4FE] shadow-sm ring-2 ring-[#123DB8]/20"
                                  : "border-gray-200 hover:border-gray-300 bg-white hover:bg-slate-50/50"
                              }`}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <div
                                  className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                    isSelected ? "bg-[#123DB8] text-white" : "bg-gray-100 text-gray-600"
                                  }`}
                                >
                                  <Icon size={16} />
                                </div>
                                <span
                                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                    isSelected
                                      ? "bg-[#123DB8] text-white"
                                      : "bg-gray-100 text-gray-600"
                                  }`}
                                >
                                  Code: {prog.code}
                                </span>
                              </div>
                              <h4 className="text-[13px] font-bold text-[#09285F] leading-tight mb-1">
                                {prog.shortName} Engineering
                              </h4>
                              <div className="flex items-center justify-between text-[11px] text-gray-500 mt-2 pt-2 border-t border-gray-200/60">
                                <span>{prog.duration}</span>
                                <span className="font-bold text-[#123DB8]">{prog.fee}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Shift & Session Preference */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Shift Preference
                          </label>
                          <select
                            value={shiftPreference}
                            onChange={(e) => setShiftPreference(e.target.value)}
                            className="w-full text-xs sm:text-[13px] px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                          >
                            <option value="1st Shift (Morning 8:00 AM - 1:00 PM)">
                              1st Shift (Morning 8:00 AM - 1:00 PM)
                            </option>
                            <option value="2nd Shift (Day 1:30 PM - 6:30 PM)">
                              2nd Shift (Day 1:30 PM - 6:30 PM)
                            </option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Session Period
                          </label>
                          <select
                            value={sessionPeriod}
                            onChange={(e) => setSessionPeriod(e.target.value)}
                            className="w-full text-xs sm:text-[13px] px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                          >
                            <option value="2026-2027 Academic Session">2026-2027 Academic Session</option>
                            <option value="Immediate Direct Admission (Rolling)">Immediate Direct Admission (Rolling)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* -------------------------------------------------
                        STEP 2: APPLICANT PERSONAL INFORMATION
                    ------------------------------------------------- */}
                    <div className="border-t border-gray-100 pt-7">
                      <div className="flex items-center justify-between mb-4">
                        <label className="text-xs sm:text-[13.5px] font-bold text-[#09285F] uppercase tracking-wider flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-[#09285F] text-white text-xs flex items-center justify-center font-extrabold">
                            2
                          </span>
                          <span>Applicant Personal Details</span>
                        </label>
                        <span className="text-[11.5px] text-gray-400 font-medium">Confidential &amp; Secure</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Full Name */}
                        <div className="sm:col-span-2">
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Applicant Full Name (As per SSC Certificate) <span className="text-rose-500">*</span>
                          </label>
                          <div className="relative">
                            <User size={15} className="absolute left-3.5 top-3 text-gray-400" />
                            <input
                              type="text"
                              required
                              placeholder="e.g. Md. Tanvir Ahmed"
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                              className="w-full text-xs sm:text-[13px] pl-10 pr-3.5 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                            />
                          </div>
                        </div>

                        {/* Phone Number */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Mobile Number (WhatsApp Preferred) <span className="text-rose-500">*</span>
                          </label>
                          <div className="relative">
                            <Phone size={15} className="absolute left-3.5 top-3 text-gray-400" />
                            <input
                              type="tel"
                              required
                              placeholder="017XXXXXXXX"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              className="w-full text-xs sm:text-[13px] pl-10 pr-3.5 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                            />
                          </div>
                        </div>

                        {/* Email Address */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Email Address (Optional)
                          </label>
                          <div className="relative">
                            <Mail size={15} className="absolute left-3.5 top-3 text-gray-400" />
                            <input
                              type="email"
                              placeholder="student@example.com"
                              value={emailAddress}
                              onChange={(e) => setEmailAddress(e.target.value)}
                              className="w-full text-xs sm:text-[13px] pl-10 pr-3.5 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                            />
                          </div>
                        </div>

                        {/* Date of Birth */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Date of Birth
                          </label>
                          <input
                            type="date"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            className="w-full text-xs sm:text-[13px] px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                          />
                        </div>

                        {/* Gender */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Gender
                          </label>
                          <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="w-full text-xs sm:text-[13px] px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female (Special 10% STEM Stipend)</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        {/* Guardian Name */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Father / Guardian Name <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Guardian Name"
                            value={guardianName}
                            onChange={(e) => setGuardianName(e.target.value)}
                            className="w-full text-xs sm:text-[13px] px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                          />
                        </div>

                        {/* Guardian Phone */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Guardian Mobile Number <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="018XXXXXXXX"
                            value={guardianPhone}
                            onChange={(e) => setGuardianPhone(e.target.value)}
                            className="w-full text-xs sm:text-[13px] px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                          />
                        </div>

                        {/* Present Address */}
                        <div className="sm:col-span-2">
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Present Address / Permanent Location
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. House 14, Road 5, Mirpur, Dhaka"
                            value={presentAddress}
                            onChange={(e) => setPresentAddress(e.target.value)}
                            className="w-full text-xs sm:text-[13px] px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* -------------------------------------------------
                        STEP 3: SSC / DAKHIL ACADEMIC BACKGROUND
                    ------------------------------------------------- */}
                    <div className="border-t border-gray-100 pt-7">
                      <div className="flex items-center justify-between mb-4">
                        <label className="text-xs sm:text-[13.5px] font-bold text-[#09285F] uppercase tracking-wider flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-[#09285F] text-white text-xs flex items-center justify-center font-extrabold">
                            3
                          </span>
                          <span>SSC / Dakhil / Equivalent Examination</span>
                        </label>
                        <span className="text-[11.5px] text-gray-400 font-medium">BTEB Merit Eligibility</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {/* Board */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Education Board
                          </label>
                          <select
                            value={sscBoard}
                            onChange={(e) => setSscBoard(e.target.value)}
                            className="w-full text-xs sm:text-[13px] px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                          >
                            {educationBoards.map((b) => (
                              <option key={b} value={b}>
                                {b}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Passing Year */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Passing Year
                          </label>
                          <select
                            value={sscYear}
                            onChange={(e) => setSscYear(e.target.value)}
                            className="w-full text-xs sm:text-[13px] px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                          >
                            {passingYears.map((y) => (
                              <option key={y} value={y}>
                                {y}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Group */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Discipline / Group
                          </label>
                          <select
                            value={sscGroup}
                            onChange={(e) => setSscGroup(e.target.value)}
                            className="w-full text-xs sm:text-[13px] px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                          >
                            <option value="Science">Science (Direct Entry)</option>
                            <option value="Vocational">Vocational (Direct Entry)</option>
                            <option value="Business Studies">Business Studies / Commerce</option>
                            <option value="Humanities">Humanities / Arts</option>
                            <option value="HSC Science / D.Eng">HSC Science (3rd Sem Entry)</option>
                          </select>
                        </div>

                        {/* SSC Roll */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            SSC Roll Number <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. 104523"
                            value={sscRoll}
                            onChange={(e) => setSscRoll(e.target.value)}
                            className="w-full text-xs sm:text-[13px] px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                          />
                        </div>

                        {/* SSC Reg */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Registration Number
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 1812456789"
                            value={sscReg}
                            onChange={(e) => setSscReg(e.target.value)}
                            className="w-full text-xs sm:text-[13px] px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                          />
                        </div>

                        {/* SSC GPA */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            SSC GPA (Out of 5.00) <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="number"
                            step="0.01"
                            min="2.00"
                            max="5.00"
                            required
                            placeholder="e.g. 4.85"
                            value={sscGpa}
                            onChange={(e) => setSscGpa(e.target.value)}
                            className="w-full text-xs sm:text-[13px] px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828] font-bold"
                          />
                        </div>
                      </div>

                      {/* Live Scholarship Band Indicator */}
                      <div className="mt-4 p-4 rounded-2xl bg-[#FEF8E7] border border-[#FDE68A] flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#F4B51B] text-[#09285F] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <BadgePercent size={18} strokeWidth={2.4} />
                        </div>
                        <div>
                          <div className="text-xs sm:text-[13px] font-bold text-[#09285F]">
                            Estimated Scholarship: <span className="text-[#B45309]">{scholarshipEstimate.percent}</span>
                          </div>
                          <p className="text-[11.5px] sm:text-xs text-[#92400E] mt-0.5 leading-snug">
                            {scholarshipEstimate.note}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* -------------------------------------------------
                        STEP 4: CAMPUS SCHEMES & FACILITIES
                    ------------------------------------------------- */}
                    <div className="border-t border-gray-100 pt-7">
                      <div className="flex items-center justify-between mb-4">
                        <label className="text-xs sm:text-[13.5px] font-bold text-[#09285F] uppercase tracking-wider flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-[#09285F] text-white text-xs flex items-center justify-center font-extrabold">
                            4
                          </span>
                          <span>Campus Facilities &amp; Laptop Preference</span>
                        </label>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Free Laptop Opt-In */}
                        <div className="p-4 rounded-2xl border border-gray-200 bg-[#F8FAFC]">
                          <label className="flex items-start gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={laptopScheme}
                              onChange={(e) => setLaptopScheme(e.target.checked)}
                              className="mt-1 w-4 h-4 text-[#123DB8] rounded focus:ring-0 cursor-pointer"
                            />
                            <div>
                              <div className="text-xs sm:text-[13px] font-bold text-[#09285F]">
                                Include "One Student One Laptop" Scheme
                              </div>
                              <p className="text-[11px] text-gray-500 mt-0.5">
                                Every diploma engineering student receives a brand-new branded laptop during studies for software modeling and project development.
                              </p>
                            </div>
                          </label>
                        </div>

                        {/* Hostel Requirement */}
                        <div className="p-4 rounded-2xl border border-gray-200 bg-[#F8FAFC]">
                          <label className="block text-xs font-bold text-[#09285F] mb-1">
                            Hostel Accommodation Preference
                          </label>
                          <select
                            value={hostelRequirement}
                            onChange={(e) => setHostelRequirement(e.target.value)}
                            className="w-full text-xs px-3 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                          >
                            <option value="No, Day Scholar">No, Day Scholar (Local Student)</option>
                            <option value="Yes, Male Student Hostel (Dhanmondi)">
                              Yes, Male Student Hostel (Dhanmondi)
                            </option>
                            <option value="Yes, Female Student Hostel (Dhanmondi)">
                              Yes, Female Student Hostel (Dhanmondi)
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Submit Bar */}
                    <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Lock size={14} className="text-emerald-600" />
                        <span>Your data is protected under DIET institutional privacy guidelines.</span>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F4B51B] hover:bg-[#eab01a] text-[#09285F] font-extrabold text-xs sm:text-[14px] px-8 py-3.5 rounded-full shadow-[0_4px_16px_rgba(244,181,27,0.35)] transition-all cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-[#09285F] border-t-transparent rounded-full animate-spin" />
                            <span>Processing Application...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Admission Application</span>
                            <ArrowRight size={16} strokeWidth={2.4} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* =====================================================
                  RIGHT: STICKY INSTITUTIONAL ADMISSION SIDEBAR (4 COLS)
              ===================================================== */}
              <div className="lg:col-span-4 space-y-6 text-left">
                {/* 1. Direct Admission Hotline Box */}
                <div className="bg-[#09285F] text-white rounded-3xl p-6 sm:p-7 shadow-md relative overflow-hidden">
                  <div className="relative z-10">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#F4B51B] block mb-1">
                      Direct Admission Desk
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Need Instant Counseling?
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed mb-5">
                      Our admission officers are available to assist you with subject selection, scholarship eligibility, and credit transfer guidance.
                    </p>

                    <div className="space-y-3">
                      <a
                        href="tel:01713493240"
                        className="w-full flex items-center justify-center gap-2 bg-[#F4B51B] hover:bg-[#eab01a] text-[#09285F] font-bold text-xs sm:text-sm py-3 rounded-xl transition"
                      >
                        <PhoneCall size={16} />
                        <span>Call: 01713-493240</span>
                      </a>
                      <a
                        href="https://wa.me/8801713493240"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm py-3 rounded-xl transition"
                      >
                        <MessageCircle size={16} />
                        <span>WhatsApp: 01833-102822</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* 2. Documents Required for Physical Verification */}
                <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-xs">
                  <h4 className="text-sm font-bold text-[#09285F] uppercase tracking-wider mb-4 flex items-center gap-2">
                    <FileText size={16} className="text-[#123DB8]" />
                    <span>Documents to Bring</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>Original / Attested Copy of SSC Academic Transcript (Marksheet).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>Original / Attested Testimonial Certificate from High School Principal.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>4 Copies of Passport-Size Color Photographs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>Photocopy of Student Birth Certificate or NID.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>Photocopy of Father's &amp; Mother's National ID (NID).</span>
                    </li>
                  </ul>
                </div>

                {/* 3. Campus Visiting Hours */}
                <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-xs space-y-3">
                  <h4 className="text-sm font-bold text-[#09285F] uppercase tracking-wider flex items-center gap-2">
                    <Building2 size={16} className="text-[#123DB8]" />
                    <span>Campus Location</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Daffodil Institute of Engineering &amp; Technology (DIET)</strong>
                    <br />
                    104 Sukrabad, Mirpur Road, Dhanmondi, Dhaka-1207 (Opposite Metro Shopping Mall).
                  </p>
                  <div className="pt-2 border-t border-gray-100 text-[11.5px] text-gray-500">
                    <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                      <Clock size={13} className="text-[#F4B51B]" />
                      <span>Hours: 9:00 AM – 6:00 PM (7 Days a Week)</span>
                    </div>
                  </div>
                </div>

                {/* 4. Quick Link to Student Portal */}
                <div className="bg-[#EFF4FE] rounded-3xl p-5 border border-[#BFDBFE] text-left">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#123DB8] block mb-1">
                    Already Enrolled?
                  </span>
                  <p className="text-xs text-slate-700 mb-3">
                    Enrolled students can log in to the Student Portal to track class schedules, attendance, grades, and invoices.
                  </p>
                  <a
                    href="http://localhost:8000/accounts/login/"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123DB8] hover:underline"
                  >
                    <span>Go to Student Portal Login</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-white text-[#101828] flex flex-col font-sans selection:bg-[#F4B51B] selection:text-[#09285F]">
      {/* Global Navbar */}
      <Navbar />

      <main className="flex-1 w-full">
        <Suspense
          fallback={
            <div className="min-h-[50vh] flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-[#123DB8] border-t-transparent rounded-full animate-spin" />
            </div>
          }
        >
          <ApplyFormContent />
        </Suspense>
      </main>
    </div>
  );
}
