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
  Upload,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// All 6 BTEB Accredited Engineering Technologies
const engineeringPrograms = [
  { id: "computer", code: "685", name: "Diploma in Computer Engineering" },
  { id: "civil", code: "664", name: "Diploma in Civil Engineering" },
  { id: "electrical", code: "667", name: "Diploma in Electrical Engineering" },
  { id: "textile", code: "672", name: "Diploma in Textile Engineering" },
  { id: "mechanical", code: "670", name: "Diploma in Mechanical Engineering" },
  { id: "automobile", code: "662", name: "Diploma in Automobile Engineering" },
];

function ApplyFormContent() {
  const searchParams = useSearchParams();
  const initialDept = searchParams?.get("dept") || "computer";

  // Form State
  const [selectedProgram, setSelectedProgram] = useState(initialDept);
  const [sessionPeriod] = useState("Session 2025-26");

  // Personal Information
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  // Academic Background
  const [sscSchool, setSscSchool] = useState("");
  const [sscGpa, setSscGpa] = useState("");
  const [sscYear, setSscYear] = useState("");

  const [hscCollege, setHscCollege] = useState("");
  const [hscGpa, setHscGpa] = useState("");
  const [hscYear, setHscYear] = useState("");

  // Address & Guardian
  const [presentAddress, setPresentAddress] = useState("");
  const [guardianName, setGuardianName] = useState("");
  const [guardianPhone, setGuardianPhone] = useState("");

  // Payment
  const [trxId, setTrxId] = useState("");
  const [paymentScreenshotName, setPaymentScreenshotName] = useState("");
  const [agreedTerms, setAgreedTerms] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedTerms) {
      alert("Please read and accept the Preliminary Admission Conditions.");
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
    setSscYear("");
    setHscCollege("");
    setHscGpa("");
    setHscYear("");
    setPresentAddress("");
    setGuardianName("");
    setGuardianPhone("");
    setTrxId("");
    setPaymentScreenshotName("");
    setAgreedTerms(false);
  };

  const currentProgramName = useMemo(() => {
    const prog = engineeringPrograms.find((p) => p.id === selectedProgram);
    return prog ? prog.name : "Diploma in Computer Engineering";
  }, [selectedProgram]);

  return (
    <div className="w-full bg-[#F4F6F9]">
      {/* =========================================================
          DARK NAVY HERO TITLE BAR (EXACT AS SCREENSHOT)
      ========================================================= */}
      <section className="w-full bg-[#061224] text-white pt-12 pb-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight">
            Online <span className="text-[#3B82F6]">Admission</span> Form
          </h1>
          <p className="text-xs sm:text-[13.5px] text-slate-300 mt-2 font-normal">
            Spring 2026 Session &bull; Bangladesh Technical Education Board (BTEB) Affiliated
          </p>
        </div>
      </section>

      {/* =========================================================
          MAIN APPLICATION FORM CONTAINER (-MT-14 FOR FLOAT EFFECT)
      ========================================================= */}
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 -mt-14 pb-24">
        {submitted ? (
          /* =========================================================
              SUCCESS RECEIPT SLIP
          ========================================================= */
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 sm:p-10 border border-emerald-200 shadow-xl text-left">
            <div className="flex items-center gap-4 border-b border-gray-100 pb-6 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={32} />
              </div>
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-1">
                  Application Submitted
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#09285F]">
                  Thank You, {fullName || "Applicant"}!
                </h2>
                <p className="text-xs sm:text-sm text-gray-500">
                  Your admission application has been received by our admission office.
                </p>
              </div>
            </div>

            <div className="bg-[#F8FAFC] border border-gray-200 rounded-xl p-5 mb-6 text-xs sm:text-sm space-y-2.5">
              <div className="flex justify-between border-b border-gray-200/60 pb-2">
                <span className="text-gray-500">Tracking Reference:</span>
                <span className="font-mono font-extrabold text-[#123DB8] text-sm sm:text-base">
                  {trackingId}
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-200/60 pb-2">
                <span className="text-gray-500">Selected Program:</span>
                <span className="font-bold text-[#09285F]">{currentProgramName}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200/60 pb-2">
                <span className="text-gray-500">Submission Time:</span>
                <span className="font-medium text-slate-700">{submissionDate}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200/60 pb-2">
                <span className="text-gray-500">Registered Phone:</span>
                <span className="font-medium text-slate-700">{phoneNumber || "N/A"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">bKash Transaction ID:</span>
                <span className="font-mono font-bold text-[#E2136E]">{trxId || "Recorded"}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 bg-[#09285F] hover:bg-[#123DB8] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition"
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
              MAIN FORM + SIDEBAR (STRUCTURE FROM SCREENSHOT)
          ========================================================= */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* =======================================================
                LEFT / MAIN CARDS (8 COLS)
            ======================================================= */}
            <form onSubmit={handleSubmit} className="lg:col-span-8 space-y-6 text-left">
              {/* -----------------------------------------------------
                  CARD 1: PROGRAM SELECTION
              ----------------------------------------------------- */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                {/* Header with Icon */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-[#EFF4FE] text-[#123DB8] flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={18} strokeWidth={2.4} />
                  </div>
                  <h3 className="text-[15px] sm:text-base font-bold text-[#09285F]">
                    Program Selection
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Select Program */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Select Program <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={selectedProgram}
                        onChange={(e) => setSelectedProgram(e.target.value)}
                        required
                        className="w-full text-xs sm:text-[13px] px-3.5 py-3 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828] appearance-none cursor-pointer"
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
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
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
                </div>
              </div>

              {/* -----------------------------------------------------
                  CARD 2: PERSONAL INFORMATION
              ----------------------------------------------------- */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                {/* Header with Icon */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-[#EFF4FE] text-[#123DB8] flex items-center justify-center flex-shrink-0">
                    <User size={18} strokeWidth={2.4} />
                  </div>
                  <h3 className="text-[15px] sm:text-base font-bold text-[#09285F]">
                    Personal Information
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-stretch">
                  {/* Left: Upload Photo Box */}
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
                      className="w-full h-full min-h-[170px] border-2 border-dashed border-gray-200 hover:border-[#123DB8] rounded-2xl flex flex-col items-center justify-center p-3 text-center bg-[#F8FAFC] hover:bg-blue-50/40 cursor-pointer transition relative group overflow-hidden"
                    >
                      {photoPreview ? (
                        <>
                          <Image
                            src={photoPreview}
                            alt="Uploaded Student Photo"
                            fill
                            className="object-cover object-center"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs font-bold transition">
                            Change Photo
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 group-hover:text-[#123DB8] mb-2 shadow-xs transition">
                            <Camera size={18} />
                          </div>
                          <span className="text-xs font-bold text-[#09285F] group-hover:text-[#123DB8]">
                            Upload Photo
                          </span>
                          <span className="text-[10px] text-gray-400 mt-0.5">
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
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
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
                          className="w-full text-xs sm:text-[13px] pl-10 pr-3.5 py-2.5 sm:py-3 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                        />
                      </div>
                    </div>

                    {/* Phone & Date of Birth */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
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
                            className="w-full text-xs sm:text-[13px] pl-10 pr-3.5 py-2.5 sm:py-3 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Date of Birth <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            required
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            className="w-full text-xs sm:text-[13px] px-3.5 py-2.5 sm:py-3 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
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
                          className="w-full text-xs sm:text-[13px] pl-10 pr-3.5 py-2.5 sm:py-3 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* -----------------------------------------------------
                  CARD 3: ACADEMIC BACKGROUND
              ----------------------------------------------------- */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                {/* Header with Icon */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-[#EFF4FE] text-[#123DB8] flex items-center justify-center flex-shrink-0">
                    <Building size={18} strokeWidth={2.4} />
                  </div>
                  <h3 className="text-[15px] sm:text-base font-bold text-[#09285F]">
                    Academic Background
                  </h3>
                </div>

                <div className="space-y-5">
                  {/* Sub-card 1: SSC / O-LEVEL */}
                  <div className="p-4 sm:p-5 rounded-xl border border-gray-200/90 bg-white">
                    <div className="mb-3">
                      <span className="inline-block bg-[#0B1E48] text-white text-[10.5px] font-extrabold uppercase px-3 py-1 rounded tracking-wider">
                        SSC / O-LEVEL
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                      <div className="sm:col-span-6">
                        <input
                          type="text"
                          required
                          placeholder="School / Institute Name"
                          value={sscSchool}
                          onChange={(e) => setSscSchool(e.target.value)}
                          className="w-full text-xs sm:text-[13px] px-3.5 py-2.5 sm:py-3 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                        />
                      </div>
                      <div className="sm:col-span-3">
                        <input
                          type="text"
                          required
                          placeholder="GPA (5.00)"
                          value={sscGpa}
                          onChange={(e) => setSscGpa(e.target.value)}
                          className="w-full text-xs sm:text-[13px] px-3.5 py-2.5 sm:py-3 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                        />
                      </div>
                      <div className="sm:col-span-3">
                        <input
                          type="text"
                          required
                          placeholder="Passing Year"
                          value={sscYear}
                          onChange={(e) => setSscYear(e.target.value)}
                          className="w-full text-xs sm:text-[13px] px-3.5 py-2.5 sm:py-3 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Sub-card 2: HSC / DIPLOMA */}
                  <div className="p-4 sm:p-5 rounded-xl border border-gray-200/90 bg-white">
                    <div className="mb-3">
                      <span className="inline-block bg-[#0B1E48] text-white text-[10.5px] font-extrabold uppercase px-3 py-1 rounded tracking-wider">
                        HSC / DIPLOMA
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                      <div className="sm:col-span-6">
                        <input
                          type="text"
                          placeholder="College / Institute Name"
                          value={hscCollege}
                          onChange={(e) => setHscCollege(e.target.value)}
                          className="w-full text-xs sm:text-[13px] px-3.5 py-2.5 sm:py-3 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                        />
                      </div>
                      <div className="sm:col-span-3">
                        <input
                          type="text"
                          placeholder="GPA (5.00)"
                          value={hscGpa}
                          onChange={(e) => setHscGpa(e.target.value)}
                          className="w-full text-xs sm:text-[13px] px-3.5 py-2.5 sm:py-3 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                        />
                      </div>
                      <div className="sm:col-span-3">
                        <input
                          type="text"
                          placeholder="Passing Year"
                          value={hscYear}
                          onChange={(e) => setHscYear(e.target.value)}
                          className="w-full text-xs sm:text-[13px] px-3.5 py-2.5 sm:py-3 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* -----------------------------------------------------
                  CARD 4: ADDRESS & GUARDIAN
              ----------------------------------------------------- */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                {/* Header with Icon */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-[#EFF4FE] text-[#123DB8] flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} strokeWidth={2.4} />
                  </div>
                  <h3 className="text-[15px] sm:text-base font-bold text-[#09285F]">
                    Address &amp; Guardian
                  </h3>
                </div>

                <div className="space-y-4">
                  {/* Present Address */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Present Address <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={presentAddress}
                      onChange={(e) => setPresentAddress(e.target.value)}
                      placeholder="Street address, city, district"
                      className="w-full text-xs sm:text-[13px] px-3.5 py-2.5 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828] resize-none"
                    />
                  </div>

                  {/* Guardian Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Guardian Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Father's / Guardian's Full Name"
                        value={guardianName}
                        onChange={(e) => setGuardianName(e.target.value)}
                        className="w-full text-xs sm:text-[13px] px-3.5 py-2.5 sm:py-3 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Guardian Phone <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="018..."
                        value={guardianPhone}
                        onChange={(e) => setGuardianPhone(e.target.value)}
                        className="w-full text-xs sm:text-[13px] px-3.5 py-2.5 sm:py-3 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* -----------------------------------------------------
                  CARD 5: PAYMENT & CONDITIONS
              ----------------------------------------------------- */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)] space-y-6">
                {/* Header with Icon */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EFF4FE] text-[#123DB8] flex items-center justify-center flex-shrink-0">
                    <CreditCard size={18} strokeWidth={2.4} />
                  </div>
                  <h3 className="text-[15px] sm:text-base font-bold text-[#09285F]">
                    Payment &amp; Conditions
                  </h3>
                </div>

                {/* VIBRANT BKASH PINK BANNER (AS IN SCREENSHOT) */}
                <div className="bg-[#E2136E] text-white rounded-2xl p-6 sm:p-7 relative overflow-hidden shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white/80 block">
                        APPLICATION FEE
                      </span>
                      <div className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5 tracking-tight">
                        BDT 16,000
                      </div>

                      {/* Merchant Pill */}
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/25 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold mt-2.5">
                        <span className="opacity-90">bKash Merchant :</span>
                        <span className="font-mono font-extrabold text-white">01791484344</span>
                      </div>
                    </div>

                    {/* bKash White Logo Card */}
                    <div className="bg-white rounded-xl px-5 py-3 self-start sm:self-center shadow-xs flex items-center justify-center">
                      <div className="flex items-center gap-1.5 select-none">
                        {/* bKash Origami Bird SVG */}
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 2L32 14L22 18L28 34L14 24L8 38L8 16L20 2Z"
                            fill="#E2136E"
                          />
                        </svg>
                        <span className="text-[#E2136E] font-extrabold text-xl tracking-tight">
                          bKash
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] sm:text-[11.5px] text-white/85 mt-4 leading-relaxed">
                    * Please make the payment to the Merchant Number above. Keep your Transaction ID ready to require during the admission process.
                  </p>
                </div>

                {/* Transaction ID & Screenshot Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* TrxID */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Transaction ID <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Lock size={15} className="absolute left-3.5 top-3.5 text-gray-400" />
                      <input
                        type="text"
                        required
                        placeholder="Enter 10-digit TrxID"
                        value={trxId}
                        onChange={(e) => setTrxId(e.target.value)}
                        className="w-full text-xs sm:text-[13px] pl-10 pr-3.5 py-2.5 sm:py-3 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828] uppercase font-mono"
                      />
                    </div>
                  </div>

                  {/* Payment Screenshot */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
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
                      className="w-full flex items-center justify-between px-3.5 py-2 sm:py-2.5 bg-[#F8FAFC] border border-gray-200 rounded-xl cursor-pointer hover:border-[#123DB8] transition"
                    >
                      <div className="flex items-center gap-2 truncate pr-2">
                        <Paperclip size={15} className="text-gray-400 flex-shrink-0" />
                        <span className="text-xs text-gray-500 truncate">
                          {paymentScreenshotName || "Choose Screenshot..."}
                        </span>
                      </div>
                      <span className="bg-slate-200 hover:bg-slate-300 text-slate-700 text-[10px] font-bold px-2.5 py-1 rounded transition flex-shrink-0 uppercase">
                        Browse
                      </span>
                    </div>
                  </div>
                </div>

                {/* Preliminary Admission Conditions Box */}
                <div>
                  <h4 className="text-xs font-bold text-[#09285F] uppercase tracking-wider mb-2">
                    Preliminary Admission Conditions
                  </h4>
                  <div className="rounded-xl bg-[#F8FAFC] border border-gray-200/90 p-4 sm:p-5 text-xs text-slate-600 space-y-2 leading-relaxed">
                    <p className="flex items-start gap-2">
                      <span className="text-slate-400 mt-0.5">&bull;</span>
                      <span>
                        If National University / BTEB conducts an admission eligibility test, every applicant must pass it.
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-slate-400 mt-0.5">&bull;</span>
                      <span>
                        The Institute will provide necessary assistance regarding preparation for the admission test.
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-slate-400 mt-0.5">&bull;</span>
                      <span>
                        <strong>Refund Policy:</strong> For candidates who fail the admission exam and do not appear on the merit list, the entire collected amount will be refunded (subject to conditions) within the time frame determined by the Board / University.
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-slate-400 mt-0.5">&bull;</span>
                      <span>
                        Students must strictly follow the rules and regulations of the Institute.
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-slate-400 mt-0.5">&bull;</span>
                      <span>
                        <strong>Result Coordination:</strong> If SSC/HSC results are delayed, national changes and the student's subsequent admission schedule will be updated accordingly.
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
                      <strong>Preliminary Admission Conditions</strong> stated above. I understand the application is subject to these terms.
                    </span>
                  </label>
                </div>
              </div>

              {/* -----------------------------------------------------
                  SUBMIT APPLICATION BUTTON (CENTERED PILL)
              ----------------------------------------------------- */}
              <div className="text-center pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#09285F] hover:bg-[#123DB8] text-white font-extrabold text-sm px-10 py-3.5 rounded-xl shadow-md transition-all cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <Send size={15} strokeWidth={2.4} />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* =======================================================
                RIGHT / STICKY SIDEBAR: "NEED HELP?" (4 COLS)
            ======================================================= */}
            <div className="lg:col-span-4 sticky top-24 space-y-6 text-left">
              <div className="bg-[#0B1E48] text-white rounded-2xl p-6 sm:p-7 shadow-sm">
                {/* Clock / Headphones icon */}
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white mb-3">
                  <PhoneCall size={18} />
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  Need Help?
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Our admissions team is here to guide you through the process.
                </p>

                <div className="space-y-3">
                  {/* Phone Button */}
                  <a
                    href="tel:01713493240"
                    className="w-full flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-[13px] py-3 rounded-xl transition"
                  >
                    <PhoneCall size={15} />
                    <span>+880 1713-493240</span>
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
    <div className="min-h-screen bg-[#F4F6F9] text-[#101828] flex flex-col font-sans selection:bg-[#F4B51B] selection:text-[#09285F]">
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
