"use client";

import React, { useState, useEffect, useMemo, useRef, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  GraduationCap,
  CheckCircle2,
  PhoneCall,
  Mail,
  Calendar,
  Lock,
  User,
  Phone,
  Camera,
  MapPin,
  Paperclip,
  Send,
  Printer,
  RotateCcw,
  Info,
  Check,
  CreditCard,
  FileCheck,
  Building,
  ChevronDown,
  ChevronRight,
  Upload,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  Copy,
  BadgePercent,
  Laptop,
  MessageCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// All 6 BTEB Accredited Engineering Technologies
const engineeringPrograms = [
  { id: "computer", code: "685", name: "Diploma in Computer Engineering", duration: "4 Years", seats: "120 Seats" },
  { id: "civil", code: "664", name: "Diploma in Civil Engineering", duration: "4 Years", seats: "100 Seats" },
  { id: "electrical", code: "667", name: "Diploma in Electrical Engineering", duration: "4 Years", seats: "80 Seats" },
  { id: "textile", code: "672", name: "Diploma in Textile Engineering", duration: "4 Years", seats: "60 Seats" },
  { id: "mechanical", code: "670", name: "Diploma in Mechanical Engineering", duration: "4 Years", seats: "60 Seats" },
  { id: "automobile", code: "662", name: "Diploma in Automobile Engineering", duration: "4 Years", seats: "60 Seats" },
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

  // Form State - Program Selection
  const [selectedProgram, setSelectedProgram] = useState(initialDept);
  const [shiftPreference, setShiftPreference] = useState("1st Shift (Morning 8:00 AM – 1:00 PM)");
  const [sessionPeriod] = useState("Spring 2026 – Fall 2027 Session");

  // Personal Information
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("Male");
  const [emailAddress, setEmailAddress] = useState("");

  // Academic Background
  const [sscSchool, setSscSchool] = useState("");
  const [sscBoard, setSscBoard] = useState("Dhaka");
  const [sscGpa, setSscGpa] = useState("");
  const [sscYear, setSscYear] = useState("2026");

  const [hscCollege, setHscCollege] = useState("");
  const [hscBoard, setHscBoard] = useState("Dhaka");
  const [hscGpa, setHscGpa] = useState("");
  const [hscYear, setHscYear] = useState("2026");

  // Address & Guardian
  const [presentAddress, setPresentAddress] = useState("");
  const [guardianName, setGuardianName] = useState("");
  const [guardianPhone, setGuardianPhone] = useState("");

  // Payment
  const [paymentMethod, setPaymentMethod] = useState("bKash");
  const [trxId, setTrxId] = useState("");
  const [paymentScreenshotName, setPaymentScreenshotName] = useState("");
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [copiedNumber, setCopiedNumber] = useState(false);

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState("");
  const [submissionDate, setSubmissionDate] = useState("");

  const photoInputRef = useRef<HTMLInputElement>(null);
  const screenshotInputRef = useRef<HTMLInputElement>(null);

  // Sync initial query param
  useEffect(() => {
    if (searchParams) {
      const qDept = searchParams.get("dept");
      if (qDept && engineeringPrograms.some((p) => p.id === qDept)) {
        setSelectedProgram(qDept);
      }
    }
  }, [searchParams]);

  // Live scholarship calculation based on SSC GPA
  const scholarshipEstimate = useMemo(() => {
    const gpa = parseFloat(sscGpa);
    if (isNaN(gpa) || gpa <= 0) {
      return {
        percent: "Up to 100% Merit Waiver",
        note: "Enter your SSC GPA to view your calculated tuition scholarship band.",
        badge: "Scholarship Available",
      };
    }
    if (gpa >= 5.0) {
      return {
        percent: "70% – 100% Merit Waiver",
        note: "Golden GPA 5.00 qualifies for Chairman's Merit Scholarship + Free Laptop.",
        badge: "Top Merit Tier",
      };
    }
    if (gpa >= 4.5) {
      return {
        percent: "40% – 50% Tuition Waiver",
        note: "First Class academic standing qualifies for departmental excellence waiver.",
        badge: "First Class Tier",
      };
    }
    if (gpa >= 4.0) {
      return {
        percent: "25% – 35% Tuition Waiver",
        note: "Strong performance qualifies for technical skill development grant.",
        badge: "Merit Tier",
      };
    }
    return {
      percent: "Eligible for Admission",
      note: "Standard BTEB eligibility met (Min GPA 2.00). Flexible 48-month payment plan.",
      badge: "Standard Entry",
    };
  }, [sscGpa]);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleScreenshotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPaymentScreenshotName(file.name);
    }
  };

  const handleCopyMerchant = () => {
    navigator.clipboard.writeText("01713493240");
    setCopiedNumber(true);
    setTimeout(() => setCopiedNumber(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedTerms) {
      alert("Please accept the Preliminary Admission Conditions to proceed.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const randomCode = Math.floor(100000 + Math.random() * 900000);
      setTrackingId(`DIET-APP-2026-${randomCode}`);
      setSubmissionDate(
        new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setTrackingId("");
    setFullName("");
    setPhoneNumber("");
    setEmailAddress("");
    setDateOfBirth("");
    setPhotoPreview(null);
    setSscSchool("");
    setSscGpa("");
    setHscCollege("");
    setHscGpa("");
    setPresentAddress("");
    setGuardianName("");
    setGuardianPhone("");
    setTrxId("");
    setPaymentScreenshotName("");
    setAgreedTerms(false);
  };

  const currentProgram = useMemo(() => {
    return engineeringPrograms.find((p) => p.id === selectedProgram) || engineeringPrograms[0];
  }, [selectedProgram]);

  return (
    <div className="w-full bg-[#F7F9FC]">
      {/* =========================================================
          DAFFODIL (DIET) INSTITUTIONAL PANORAMIC HERO BANNER
      ========================================================= */}
      <section className="relative w-full min-h-[260px] sm:min-h-[320px] bg-[#09285F] text-white flex items-center overflow-hidden">
        {/* Authentic DIET Campus Photography with Vignette */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/diet/admission-hero-building.webp"
            alt="Daffodil Institute Campus Admissions"
            fill
            priority
            quality={92}
            className="object-cover object-[center_35%]"
          />
          {/* Deep Navy Institutional Gradient */}
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
            <span className="text-[#F4B51B] font-medium">Online Admission Form</span>
          </nav>

          {/* Department Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 backdrop-blur-md border border-white/15 text-white text-[11px] sm:text-xs font-semibold mb-2.5">
            <Calendar size={13} className="text-[#F4B51B]" />
            <span>Academic Admissions 2026-2027</span>
            <span className="text-white/40">&bull;</span>
            <span className="text-[#F4B51B]">BTEB Curriculum Code: 685/664/667/672/670/662</span>
          </div>

          {/* Main Title with Daffodil Yellow Word Highlight */}
          <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-[-0.02em] leading-tight mb-3">
            Online <span className="text-[#F4B51B]">Admission</span> Application
          </h1>

          {/* Meta Information Ribbon */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-[13px] text-slate-200">
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-[#F4B51B]" />
              <span>Duration: <strong>4 Years (8 Semesters)</strong></span>
            </div>
            <span className="hidden sm:inline text-white/30">&bull;</span>
            <div className="flex items-center gap-1.5">
              <Laptop size={14} className="text-[#F4B51B]" />
              <span>Benefit: <strong>Free Laptop Included</strong></span>
            </div>
            <span className="hidden sm:inline text-white/30">&bull;</span>
            <div className="flex items-center gap-1.5">
              <BadgePercent size={14} className="text-[#F4B51B]" />
              <span>Scholarship: <strong>Up to 100% Merit Waiver</strong></span>
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
          APPLICATION FORM (USER'S EXACT STRUCTURE IN DIET DESIGN)
      ========================================================= */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {submitted ? (
          /* =========================================================
              SUCCESS RECEIPT SLIP (DIET BRANDED)
          ========================================================= */
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-emerald-200 shadow-xl text-left">
            <div className="flex items-center gap-4 border-b border-gray-100 pb-6 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={32} />
              </div>
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-1">
                  Application Successfully Logged
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#09285F]">
                  Thank You, {fullName || "Applicant"}!
                </h2>
                <p className="text-xs sm:text-sm text-gray-500">
                  Your admission application has been registered with the Daffodil Central Admission Cell.
                </p>
              </div>
            </div>

            <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-5 mb-6 text-xs sm:text-sm space-y-2.5">
              <div className="flex justify-between border-b border-gray-200/60 pb-2">
                <span className="text-gray-500">Tracking Reference:</span>
                <span className="font-mono font-extrabold text-[#123DB8] text-sm sm:text-base">
                  {trackingId}
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-200/60 pb-2">
                <span className="text-gray-500">Applied Program:</span>
                <span className="font-bold text-[#09285F]">{currentProgram.name}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200/60 pb-2">
                <span className="text-gray-500">Submission Timestamp:</span>
                <span className="font-medium text-slate-700">{submissionDate}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200/60 pb-2">
                <span className="text-gray-500">Mobile Number:</span>
                <span className="font-medium text-slate-700">{phoneNumber || "N/A"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">bKash Transaction ID:</span>
                <span className="font-mono font-bold text-[#123DB8]">{trxId || "Recorded"}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 bg-[#09285F] hover:bg-[#123DB8] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition shadow-sm"
              >
                <Printer size={16} />
                <span>Print Application Slip</span>
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-slate-700 font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition"
              >
                <RotateCcw size={15} />
                <span>Submit Another Form</span>
              </button>
            </div>
          </div>
        ) : (
          /* =========================================================
              2-COLUMN APPLICATION LAYOUT (FORM + SIDEBAR)
          ========================================================= */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* =======================================================
                LEFT / MAIN FORM (8 COLUMNS)
            ======================================================= */}
            <form onSubmit={handleSubmit} className="lg:col-span-8 space-y-6 text-left">
              {/* -----------------------------------------------------
                  CARD 1: PROGRAM SELECTION (STRUCTURE 1)
              ----------------------------------------------------- */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs hover:border-[#123DB8]/30 transition">
                {/* Step Header */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#09285F]/10 text-[#09285F] flex items-center justify-center flex-shrink-0 font-extrabold text-xs">
                      01
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#09285F]">
                        Program Selection
                      </h3>
                      <p className="text-xs text-gray-500">
                        Choose your preferred engineering technology &amp; academic shift
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] font-semibold text-[#123DB8] bg-[#EFF4FE] px-3 py-1 rounded-full">
                    BTEB Affiliated
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Select Program */}
                  <div>
                    <label className="block text-xs font-semibold text-[#09285F] mb-1.5">
                      Select Program <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={selectedProgram}
                        onChange={(e) => setSelectedProgram(e.target.value)}
                        required
                        className="w-full text-xs sm:text-[13px] px-3.5 py-3 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] focus:bg-white text-[#101828] appearance-none cursor-pointer transition"
                      >
                        <option value="" disabled>
                          Choose a degree path...
                        </option>
                        {engineeringPrograms.map((prog) => (
                          <option key={prog.id} value={prog.id}>
                            {prog.name} (Code: {prog.code})
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={15}
                        className="absolute right-3.5 top-3.5 text-gray-400 pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Session */}
                  <div>
                    <label className="block text-xs font-semibold text-[#09285F] mb-1.5">
                      Session <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        readOnly
                        value={sessionPeriod}
                        className="w-full text-xs sm:text-[13px] px-3.5 py-3 bg-[#F8FAFC] border border-gray-200 rounded-xl text-slate-700 cursor-not-allowed font-medium"
                      />
                      <Calendar
                        size={15}
                        className="absolute right-3.5 top-3.5 text-gray-400 pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Shift Preference */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-[#09285F] mb-1.5">
                      Shift Preference
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { id: "1st Shift", label: "1st Shift (Morning)", time: "8:00 AM – 1:00 PM" },
                        { id: "2nd Shift", label: "2nd Shift (Day)", time: "1:30 PM – 6:30 PM" },
                      ].map((shift) => (
                        <div
                          key={shift.id}
                          onClick={() => setShiftPreference(`${shift.label} ${shift.time}`)}
                          className={`p-3 rounded-xl border text-xs cursor-pointer flex items-center justify-between transition ${
                            shiftPreference.includes(shift.id)
                              ? "border-[#123DB8] bg-[#EFF4FE] text-[#123DB8] font-bold"
                              : "border-gray-200 hover:border-gray-300 text-slate-600 bg-white"
                          }`}
                        >
                          <span>{shift.label}</span>
                          <span className="text-[11px] opacity-75">{shift.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* -----------------------------------------------------
                  CARD 2: PERSONAL INFORMATION (STRUCTURE 2)
              ----------------------------------------------------- */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs hover:border-[#123DB8]/30 transition">
                {/* Step Header */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#09285F]/10 text-[#09285F] flex items-center justify-center flex-shrink-0 font-extrabold text-xs">
                      02
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#09285F]">
                        Personal Information
                      </h3>
                      <p className="text-xs text-gray-500">
                        Applicant legal credentials and passport photo
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] font-semibold text-gray-400">
                    Step 2 of 5
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-stretch">
                  {/* Left: Upload Photo Box (DIET Style) */}
                  <div className="sm:col-span-4">
                    <input
                      ref={photoInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                      className="hidden"
                    />
                    <div
                      onClick={() => photoInputRef.current?.click()}
                      className="w-full h-full min-h-[190px] border-2 border-dashed border-gray-200 hover:border-[#123DB8] rounded-2xl flex flex-col items-center justify-center p-4 text-center bg-[#F8FAFC] hover:bg-[#EFF4FE]/40 cursor-pointer transition relative group overflow-hidden"
                    >
                      {photoPreview ? (
                        <>
                          <Image
                            src={photoPreview}
                            alt="Uploaded Student Photo"
                            fill
                            className="object-cover object-center"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs font-bold transition">
                            Change Photo
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-[#09285F] group-hover:text-[#123DB8] group-hover:scale-105 mb-2.5 shadow-xs transition">
                            <Camera size={22} strokeWidth={2} />
                          </div>
                          <span className="text-xs font-bold text-[#09285F] group-hover:text-[#123DB8]">
                            Upload Photo
                          </span>
                          <span className="text-[10.5px] text-gray-400 mt-1">
                            (Passport Size Only)
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Right: Form Inputs */}
                  <div className="sm:col-span-8 space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-[#09285F] mb-1">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <User size={15} className="absolute left-3.5 top-3.5 text-gray-400" />
                        <input
                          type="text"
                          required
                          placeholder="As per SSC Transcript"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full text-xs sm:text-[13px] pl-10 pr-3.5 py-2.5 sm:py-3 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] focus:bg-white text-[#101828] transition"
                        />
                      </div>
                    </div>

                    {/* Phone & Date of Birth */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-[#09285F] mb-1">
                          Phone Number <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone size={15} className="absolute left-3.5 top-3.5 text-gray-400" />
                          <input
                            type="tel"
                            required
                            placeholder="017..."
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="w-full text-xs sm:text-[13px] pl-10 pr-3.5 py-2.5 sm:py-3 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] focus:bg-white text-[#101828] transition"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#09285F] mb-1">
                          Date of Birth <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            required
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            className="w-full text-xs sm:text-[13px] px-3.5 py-2.5 sm:py-3 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] focus:bg-white text-[#101828] transition"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email & Gender */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                      <div className="sm:col-span-8">
                        <label className="block text-xs font-semibold text-[#09285F] mb-1">
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail size={15} className="absolute left-3.5 top-3.5 text-gray-400" />
                          <input
                            type="email"
                            required
                            placeholder="student@example.com"
                            value={emailAddress}
                            onChange={(e) => setEmailAddress(e.target.value)}
                            className="w-full text-xs sm:text-[13px] pl-10 pr-3.5 py-2.5 sm:py-3 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] focus:bg-white text-[#101828] transition"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-4">
                        <label className="block text-xs font-semibold text-[#09285F] mb-1">
                          Gender
                        </label>
                        <select
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                          className="w-full text-xs sm:text-[13px] px-3.5 py-2.5 sm:py-3 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] focus:bg-white text-[#101828] transition"
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female (Special 10% STEM Stipend)</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* -----------------------------------------------------
                  CARD 3: ACADEMIC BACKGROUND (STRUCTURE 3)
              ----------------------------------------------------- */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs hover:border-[#123DB8]/30 transition">
                {/* Step Header */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#09285F]/10 text-[#09285F] flex items-center justify-center flex-shrink-0 font-extrabold text-xs">
                      03
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#09285F]">
                        Academic Background
                      </h3>
                      <p className="text-xs text-gray-500">
                        SSC &amp; higher academic examination details for merit evaluation
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] font-semibold text-gray-400">
                    Step 3 of 5
                  </span>
                </div>

                <div className="space-y-5">
                  {/* Sub-card 1: SSC / O-LEVEL */}
                  <div className="p-4 sm:p-5 rounded-2xl border border-gray-200/80 bg-[#FAFCFF]">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block bg-[#09285F] text-white text-[10.5px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider">
                        SSC / O-LEVEL / EQUIVALENT
                      </span>
                      <span className="text-[11px] font-semibold text-[#123DB8]">
                        Mandatory
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                      <div className="sm:col-span-6">
                        <label className="block text-[11px] font-semibold text-gray-500 mb-1">
                          School / Institute Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ideal School & College"
                          value={sscSchool}
                          onChange={(e) => setSscSchool(e.target.value)}
                          className="w-full text-xs sm:text-[13px] px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                        />
                      </div>
                      <div className="sm:col-span-3">
                        <label className="block text-[11px] font-semibold text-gray-500 mb-1">
                          GPA (5.00)
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          min="2.00"
                          max="5.00"
                          required
                          placeholder="e.g. 4.80"
                          value={sscGpa}
                          onChange={(e) => setSscGpa(e.target.value)}
                          className="w-full text-xs sm:text-[13px] px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828] font-bold"
                        />
                      </div>
                      <div className="sm:col-span-3">
                        <label className="block text-[11px] font-semibold text-gray-500 mb-1">
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
                    </div>
                  </div>

                  {/* Sub-card 2: HSC / DIPLOMA */}
                  <div className="p-4 sm:p-5 rounded-2xl border border-gray-200/80 bg-white">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block bg-[#09285F] text-white text-[10.5px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider">
                        HSC / DIPLOMA / VOCATIONAL
                      </span>
                      <span className="text-[11px] text-gray-400">
                        Optional (Direct 3rd/4th Sem Entry)
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                      <div className="sm:col-span-6">
                        <label className="block text-[11px] font-semibold text-gray-500 mb-1">
                          College / Institute Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Dhaka City College"
                          value={hscCollege}
                          onChange={(e) => setHscCollege(e.target.value)}
                          className="w-full text-xs sm:text-[13px] px-3.5 py-2.5 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                        />
                      </div>
                      <div className="sm:col-span-3">
                        <label className="block text-[11px] font-semibold text-gray-500 mb-1">
                          GPA (5.00)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 4.50"
                          value={hscGpa}
                          onChange={(e) => setHscGpa(e.target.value)}
                          className="w-full text-xs sm:text-[13px] px-3.5 py-2.5 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                        />
                      </div>
                      <div className="sm:col-span-3">
                        <label className="block text-[11px] font-semibold text-gray-500 mb-1">
                          Passing Year
                        </label>
                        <select
                          value={hscYear}
                          onChange={(e) => setHscYear(e.target.value)}
                          className="w-full text-xs sm:text-[13px] px-3.5 py-2.5 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                        >
                          {passingYears.map((y) => (
                            <option key={y} value={y}>
                              {y}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* DIET Scholarship Estimator Badge */}
                  <div className="p-4 rounded-2xl bg-[#FEF8E7] border border-[#FDE68A] flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#F4B51B] text-[#09285F] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                      <BadgePercent size={18} strokeWidth={2.4} />
                    </div>
                    <div>
                      <div className="text-xs sm:text-[13px] font-bold text-[#09285F] flex items-center gap-2">
                        <span>Calculated Scholarship:</span>
                        <span className="text-[#B45309] font-extrabold">{scholarshipEstimate.percent}</span>
                      </div>
                      <p className="text-[11.5px] text-[#92400E] mt-0.5 leading-snug">
                        {scholarshipEstimate.note}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* -----------------------------------------------------
                  CARD 4: ADDRESS & GUARDIAN (STRUCTURE 4)
              ----------------------------------------------------- */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs hover:border-[#123DB8]/30 transition">
                {/* Step Header */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#09285F]/10 text-[#09285F] flex items-center justify-center flex-shrink-0 font-extrabold text-xs">
                      04
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#09285F]">
                        Address &amp; Guardian
                      </h3>
                      <p className="text-xs text-gray-500">
                        Permanent residence and emergency contact details
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] font-semibold text-gray-400">
                    Step 4 of 5
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Present Address */}
                  <div>
                    <label className="block text-xs font-semibold text-[#09285F] mb-1">
                      Present Address <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={presentAddress}
                      onChange={(e) => setPresentAddress(e.target.value)}
                      placeholder="House / Village, Road, Thana, District"
                      className="w-full text-xs sm:text-[13px] px-3.5 py-2.5 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] focus:bg-white text-[#101828] resize-none transition"
                    />
                  </div>

                  {/* Guardian Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#09285F] mb-1">
                        Guardian Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Father's / Guardian's Full Name"
                        value={guardianName}
                        onChange={(e) => setGuardianName(e.target.value)}
                        className="w-full text-xs sm:text-[13px] px-3.5 py-2.5 sm:py-3 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] focus:bg-white text-[#101828] transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#09285F] mb-1">
                        Guardian Phone <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="018..."
                        value={guardianPhone}
                        onChange={(e) => setGuardianPhone(e.target.value)}
                        className="w-full text-xs sm:text-[13px] px-3.5 py-2.5 sm:py-3 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] focus:bg-white text-[#101828] transition"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* -----------------------------------------------------
                  CARD 5: PAYMENT & CONDITIONS (STRUCTURE 5 IN DIET UI)
              ----------------------------------------------------- */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs hover:border-[#123DB8]/30 transition space-y-6">
                {/* Step Header */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-1">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#09285F]/10 text-[#09285F] flex items-center justify-center flex-shrink-0 font-extrabold text-xs">
                      05
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#09285F]">
                        Payment &amp; Conditions
                      </h3>
                      <p className="text-xs text-gray-500">
                        Official admission application fee and verification agreement
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] font-semibold text-gray-400">
                    Final Step
                  </span>
                </div>

                {/* PREMIUM DIET FEE PAYMENT BANNER */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#09285F] via-[#0E357E] to-[#123DB8] text-white p-6 sm:p-8 shadow-md">
                  {/* Subtle Geometric Graphic */}
                  <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 pointer-events-none transform -skew-x-12 translate-x-10" />

                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F4B51B] text-[10.5px] font-extrabold uppercase tracking-wider mb-2">
                        <CreditCard size={13} />
                        <span>Application &amp; Registration Fee</span>
                      </div>
                      <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        BDT 16,000
                      </div>

                      {/* Official Merchant Pill with Copy Button */}
                      <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold mt-3">
                        <span className="text-[#F4B51B]">bKash Merchant:</span>
                        <span className="font-mono font-extrabold text-white text-sm">01713493240</span>
                        <button
                          type="button"
                          onClick={handleCopyMerchant}
                          className="p-1 hover:bg-white/20 rounded-md transition cursor-pointer text-slate-200"
                          title="Copy Merchant Number"
                        >
                          {copiedNumber ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                        </button>
                      </div>
                    </div>

                    {/* bKash Official Brand Badge */}
                    <div className="bg-white rounded-2xl p-4 self-start sm:self-center shadow-lg border border-white/20 flex flex-col items-center justify-center min-w-[120px]">
                      <div className="flex items-center gap-1.5 select-none">
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 2L32 14L22 18L28 34L14 24L8 38L8 16L20 2Z"
                            fill="#E2136E"
                          />
                        </svg>
                        <span className="text-[#E2136E] font-black text-xl tracking-tight">
                          bKash
                        </span>
                      </div>
                      <span className="text-[9.5px] text-gray-500 font-bold uppercase tracking-wider mt-1">
                        Merchant Pay
                      </span>
                    </div>
                  </div>

                  <p className="relative z-10 text-[11.5px] sm:text-xs text-slate-200/90 mt-5 pt-4 border-t border-white/15 leading-relaxed">
                    * Make the payment through <strong>bKash &gt; Make Payment</strong> to the merchant number above. Please record your 10-character Transaction ID (TrxID) for instant verification.
                  </p>
                </div>

                {/* Transaction ID & Screenshot Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* TrxID */}
                  <div>
                    <label className="block text-xs font-semibold text-[#09285F] mb-1">
                      Transaction ID <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Lock size={15} className="absolute left-3.5 top-3.5 text-gray-400" />
                      <input
                        type="text"
                        required
                        placeholder="Enter 10-character TrxID"
                        value={trxId}
                        onChange={(e) => setTrxId(e.target.value)}
                        className="w-full text-xs sm:text-[13px] pl-10 pr-3.5 py-2.5 sm:py-3 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] focus:bg-white text-[#101828] uppercase font-mono tracking-wider transition"
                      />
                    </div>
                  </div>

                  {/* Payment Screenshot */}
                  <div>
                    <label className="block text-xs font-semibold text-[#09285F] mb-1">
                      Payment Screenshot <span className="text-rose-500">*</span>
                    </label>
                    <input
                      ref={screenshotInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleScreenshotChange}
                      className="hidden"
                    />
                    <div
                      onClick={() => screenshotInputRef.current?.click()}
                      className="w-full flex items-center justify-between px-3.5 py-2 sm:py-2.5 bg-[#F8FAFC] border border-gray-200 hover:border-[#123DB8] rounded-xl cursor-pointer transition"
                    >
                      <div className="flex items-center gap-2 truncate pr-2">
                        <Paperclip size={15} className="text-gray-400 flex-shrink-0" />
                        <span className="text-xs text-gray-500 truncate">
                          {paymentScreenshotName || "Choose Screenshot..."}
                        </span>
                      </div>
                      <span className="bg-[#09285F] hover:bg-[#123DB8] text-white text-[11px] font-bold px-3 py-1 rounded-lg transition flex-shrink-0 uppercase">
                        Browse
                      </span>
                    </div>
                  </div>
                </div>

                {/* Preliminary Admission Conditions Box */}
                <div>
                  <h4 className="text-xs font-bold text-[#09285F] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Info size={14} className="text-[#123DB8]" />
                    <span>Preliminary Admission Conditions</span>
                  </h4>
                  <div className="rounded-2xl bg-[#F8FAFC] border border-gray-200/90 p-4 sm:p-5 text-xs text-slate-600 space-y-2 leading-relaxed">
                    <p className="flex items-start gap-2">
                      <span className="text-[#123DB8] font-bold mt-0.5">&bull;</span>
                      <span>
                        All admissions are subject to Bangladesh Technical Education Board (BTEB) eligibility confirmation and merit list approval.
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-[#123DB8] font-bold mt-0.5">&bull;</span>
                      <span>
                        The Institute will provide full academic guidance and counseling regarding classroom batch assignment and student portal credentials.
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-[#123DB8] font-bold mt-0.5">&bull;</span>
                      <span>
                        <strong>Refund Policy:</strong> For applicants who cannot be admitted due to board eligibility or seat quota constraints, the collected application amount will be fully refunded within the statutory board timeline.
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-[#123DB8] font-bold mt-0.5">&bull;</span>
                      <span>
                        Students must strictly adhere to institute codes of conduct, laboratory safety protocols, and 80% minimum semester attendance rules.
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-[#123DB8] font-bold mt-0.5">&bull;</span>
                      <span>
                        <strong>Result Coordination:</strong> If official board certificate issuance is delayed, provisional registration is granted based on verified online marksheets.
                      </span>
                    </p>
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={agreedTerms}
                      onChange={(e) => setAgreedTerms(e.target.checked)}
                      className="mt-0.5 w-4 h-4 text-[#09285F] rounded focus:ring-0 cursor-pointer"
                    />
                    <span className="text-xs text-slate-700 leading-snug">
                      I have read the payment instructions and agree to the{" "}
                      <strong>Preliminary Admission Conditions</strong> stated above. I understand the application is subject to these institutional terms.
                    </span>
                  </label>
                </div>
              </div>

              {/* -----------------------------------------------------
                  SUBMIT APPLICATION BUTTON (DAFFODIL YELLOW PILL)
              ----------------------------------------------------- */}
              <div className="text-center pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#F4B51B] hover:bg-[#eab01a] text-[#09285F] font-extrabold text-sm sm:text-base px-10 py-4 rounded-full shadow-[0_4px_20px_rgba(244,181,27,0.35)] transition-all duration-200 cursor-pointer disabled:opacity-60 active:scale-98"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#09285F] border-t-transparent rounded-full animate-spin" />
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Admission Application</span>
                      <Send size={16} strokeWidth={2.4} />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* =======================================================
                RIGHT / STICKY SIDEBAR (DAFFODIL BRANDED)
            ======================================================= */}
            <div className="lg:col-span-4 sticky top-24 space-y-6 text-left">
              {/* 1. Need Help / Admission Hotline Box (Daffodil Navy) */}
              <div className="bg-[#09285F] text-white rounded-3xl p-6 sm:p-7 shadow-md relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-[#F4B51B] mb-3">
                    <PhoneCall size={20} />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">
                    Need Help?
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    Our admissions team is here to guide you through the application and scholarship verification process.
                  </p>

                  <div className="space-y-3">
                    {/* Call Button */}
                    <a
                      href="tel:01713493240"
                      className="w-full flex items-center justify-center gap-2.5 bg-[#F4B51B] hover:bg-[#eab01a] text-[#09285F] font-bold text-xs sm:text-[13px] py-3 rounded-xl transition shadow-sm"
                    >
                      <PhoneCall size={15} />
                      <span>+880 1713-493240</span>
                    </a>

                    {/* WhatsApp Button */}
                    <a
                      href="https://wa.me/8801833102822"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-[13px] py-3 rounded-xl transition"
                    >
                      <MessageCircle size={15} />
                      <span>WhatsApp: 01833-102822</span>
                    </a>

                    {/* Email Button */}
                    <a
                      href="mailto:admission@diet.edu.bd"
                      className="w-full flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-[13px] py-3 rounded-xl transition"
                    >
                      <Mail size={15} />
                      <span>admission@diet.edu.bd</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* 2. Documents Checklist Card */}
              <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-xs">
                <h4 className="text-xs font-bold text-[#09285F] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <FileCheck size={16} className="text-[#123DB8]" />
                  <span>Physical Documents Checklist</span>
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Original / Attested Copy of SSC Academic Transcript (Marksheet).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Original / Attested Testimonial from School Headmaster.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>4 Copies of Passport-Size Laboratory Photographs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Photocopy of Student Birth Certificate or NID.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Photocopy of Parent / Guardian National ID (NID).</span>
                  </li>
                </ul>
              </div>

              {/* 3. Campus Location Card */}
              <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-xs space-y-3">
                <h4 className="text-xs font-bold text-[#09285F] uppercase tracking-wider flex items-center gap-2">
                  <Building size={16} className="text-[#123DB8]" />
                  <span>Campus Location &amp; Visiting Hours</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Daffodil Institute of Engineering &amp; Technology (DIET)</strong>
                  <br />
                  104 Sukrabad, Mirpur Road, Dhanmondi, Dhaka-1207.
                </p>
                <div className="pt-2 border-t border-gray-100 text-[11.5px] text-gray-500">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                    <Clock size={13} className="text-[#F4B51B]" />
                    <span>Open 7 Days: 9:00 AM – 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-[#F7F9FC] text-[#101828] flex flex-col font-sans selection:bg-[#F4B51B] selection:text-[#09285F]">
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
