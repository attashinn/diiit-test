"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  FileText,
  UploadCloud,
  Armchair,
  Check,
  Headphones,
  PhoneCall,
  Clock,
  Send,
  ArrowRight,
} from "lucide-react";

export default function AdmissionSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    sscGpa: "",
    department: "Computer Engineering",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setFormSubmitted(true);
    }
  };

  return (
    <section id="admission" className="w-full py-16 sm:py-24 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Hero Split: Left Headline & Copy + Right Angled Campus Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-12 sm:mb-14">
          {/* Left Column (7 cols): Badge, Headline, Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 text-left"
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#F4B51B]/40 bg-[#FEF6E6] text-[#09285F] text-[11.5px] sm:text-[12px] font-bold mb-4">
              <Calendar size={14} className="text-[#09285F]" />
              <span>Admissions Open &bull; Spring &amp; Fall Sessions</span>
            </div>

            {/* Main Headline with Curved Yellow Underline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#09285F] tracking-[-0.025em] leading-[1.12] mb-4">
              Start Your Engineering
              <br />
              Journey in{" "}
              <span className="relative inline-block text-[#123DB8]">
                3 Simple Steps
                {/* Hand-drawn Golden Underline SVG Stroke */}
                <svg
                  className="absolute -bottom-2.5 left-0 w-full h-3 text-[#F4B51B] overflow-visible pointer-events-none"
                  viewBox="0 0 240 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
                    d="M2 9.5C60 2.5 150 1.5 238 10.5"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-[15.5px] text-[#667085] leading-relaxed max-w-xl font-normal">
              A clear and simple admission process to join any of our 6 diploma engineering departments at DIET.
            </p>
          </motion.div>

          {/* Right Column (5 cols): Angled DIET Campus Photo */}
          <div className="lg:col-span-5 relative w-full max-w-[460px] lg:max-w-none mx-auto flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden aspect-[1.5/1] w-full max-w-[440px] border border-gray-100 bg-slate-50 shadow-sm"
            >
              <Image
                src="/diet/admission-hero-building.webp"
                alt="DIET Campus Admission Building"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 38vw"
              />
            </motion.div>
          </div>
        </div>

        {/* 3 Step Cards in a Row with Connecting Arrows */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 mb-14 sm:mb-16">
          {/* Card 1: Step 01 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{
              y: -6,
              borderColor: "rgba(18, 61, 184, 0.4)",
              boxShadow: "0 18px 30px -8px rgba(18, 61, 184, 0.12)",
              transition: { duration: 0.2 },
            }}
            className="bg-white rounded-[26px] p-6 sm:p-7 border border-gray-200/90 transition-colors flex flex-col justify-between relative cursor-default"
          >
            <div>
              {/* Top Row: 01 Badge + Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#E8EDFB] text-[#123DB8] font-black text-sm px-3.5 py-1 rounded-full">
                  01
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#EEF2F6] text-[#123DB8] flex items-center justify-center">
                  <FileText size={18} strokeWidth={2.2} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[18px] font-extrabold text-[#09285F] mb-3">
                Verify Academic Criteria
              </h3>

              {/* Checklist */}
              <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#344054] leading-snug mb-5">
                <li className="flex items-start gap-2">
                  <Check size={15} strokeWidth={2.8} className="text-[#F4B51B] flex-shrink-0 mt-0.5" />
                  <span>Minimum SSC or equivalent with GPA 2.00.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={15} strokeWidth={2.8} className="text-[#F4B51B] flex-shrink-0 mt-0.5" />
                  <span>HSC (Science) students can directly enter 3rd semester.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={15} strokeWidth={2.8} className="text-[#F4B51B] flex-shrink-0 mt-0.5" />
                  <span>HSC (Vocational) students can directly enter 4th semester.</span>
                </li>
              </ul>
            </div>

            {/* Bottom Status Pill */}
            <div className="bg-[#F0F4FA] text-[#123DB8] text-[11.5px] font-bold py-2 px-4 rounded-xl text-center w-full">
              Any passing year accepted
            </div>
          </motion.div>

          {/* Desktop Arrow Connector 1 -> 2 */}
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:flex absolute top-1/2 left-[33.33%] -translate-x-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border border-gray-200 items-center justify-center text-[#123DB8] pointer-events-none shadow-sm"
          >
            <ArrowRight size={14} strokeWidth={2.4} />
          </motion.div>

          {/* Card 2: Step 02 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{
              y: -6,
              borderColor: "rgba(244, 181, 27, 0.7)",
              boxShadow: "0 18px 30px -8px rgba(244, 181, 27, 0.15)",
              transition: { duration: 0.2 },
            }}
            className="bg-white rounded-[26px] p-6 sm:p-7 border border-gray-200/90 transition-colors flex flex-col justify-between relative cursor-default"
          >
            <div>
              {/* Top Row: 02 Badge + Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#FEF6E6] text-[#B57C00] font-black text-sm px-3.5 py-1 rounded-full">
                  02
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#FEF6E6] text-[#F4B51B] flex items-center justify-center">
                  <UploadCloud size={18} strokeWidth={2.2} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[18px] font-extrabold text-[#09285F] mb-3">
                Submit Documents
              </h3>

              {/* Checklist */}
              <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#344054] leading-snug mb-5">
                <li className="flex items-start gap-2">
                  <Check size={15} strokeWidth={2.8} className="text-[#F4B51B] flex-shrink-0 mt-0.5" />
                  <span>Main or verified copy of SSC / equivalent transcript.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={15} strokeWidth={2.8} className="text-[#F4B51B] flex-shrink-0 mt-0.5" />
                  <span>4 copies of recent passport-size photographs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={15} strokeWidth={2.8} className="text-[#F4B51B] flex-shrink-0 mt-0.5" />
                  <span>Photocopy of Parent&apos;s NID card &amp; birth certificate.</span>
                </li>
              </ul>
            </div>

            {/* Bottom Status Pill */}
            <div className="bg-[#F0F4FA] text-[#123DB8] text-[11.5px] font-bold py-2 px-4 rounded-xl text-center w-full">
              Online or physical submission
            </div>
          </motion.div>

          {/* Desktop Arrow Connector 2 -> 3 */}
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            className="hidden md:flex absolute top-1/2 left-[66.66%] -translate-x-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border border-gray-200 items-center justify-center text-[#123DB8] pointer-events-none shadow-sm"
          >
            <ArrowRight size={14} strokeWidth={2.4} />
          </motion.div>

          {/* Card 3: Step 03 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{
              y: -6,
              borderColor: "rgba(18, 61, 184, 0.4)",
              boxShadow: "0 18px 30px -8px rgba(18, 61, 184, 0.12)",
              transition: { duration: 0.2 },
            }}
            className="bg-white rounded-[26px] p-6 sm:p-7 border border-gray-200/90 transition-colors flex flex-col justify-between relative cursor-default"
          >
            <div>
              {/* Top Row: 03 Badge + Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#E8EDFB] text-[#123DB8] font-black text-sm px-3.5 py-1 rounded-full">
                  03
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#EEF2F6] text-[#123DB8] flex items-center justify-center">
                  <Armchair size={18} strokeWidth={2.2} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[18px] font-extrabold text-[#09285F] mb-3">
                Confirm Seat &amp; Waiver
              </h3>

              {/* Checklist */}
              <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#344054] leading-snug mb-5">
                <li className="flex items-start gap-2">
                  <Check size={15} strokeWidth={2.8} className="text-[#F4B51B] flex-shrink-0 mt-0.5" />
                  <span>Instant merit scholarship assessment (up to 100% waiver).</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={15} strokeWidth={2.8} className="text-[#F4B51B] flex-shrink-0 mt-0.5" />
                  <span>Receive official DIET student registration card.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={15} strokeWidth={2.8} className="text-[#F4B51B] flex-shrink-0 mt-0.5" />
                  <span>Laptop allotment token &amp; semester syllabus orientation.</span>
                </li>
              </ul>
            </div>

            {/* Bottom Status Pill */}
            <div className="bg-[#F0F4FA] text-[#123DB8] text-[11.5px] font-bold py-2 px-4 rounded-xl text-center w-full">
              Immediate seat confirmation
            </div>
          </motion.div>
        </div>

        {/* Bottom Card: Deep Navy Consultation Box with White Quick Inquiry Form */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#09285F] text-white rounded-[32px] p-6 sm:p-9 lg:p-10 border border-[#09285F] shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left 7 cols: Headset Icon + Consultation Details + Contact Pills */}
            <div className="lg:col-span-7 flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
              {/* Headset Icon Container */}
              <motion.div
                whileHover={{ rotate: [0, -6, 6, 0], scale: 1.05 }}
                className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-white flex-shrink-0"
              >
                <Headphones size={28} strokeWidth={1.9} />
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#F4B51B] mb-1.5">
                  Immediate Consultation
                </div>
                <h3 className="text-2xl sm:text-[28px] font-black text-white leading-tight mb-2.5">
                  Need Assistance with Application?
                  <br />
                  Talk to an{" "}
                  <span className="text-[#F4B51B]">Admission Counselor</span>
                </h3>
                <p className="text-xs sm:text-[13.5px] text-slate-300 leading-relaxed mb-6 max-w-lg font-normal">
                  Visit our Dhanmondi campus or call our admission hotlines for one-on-one
                  career guidance, fee structure breakdown, and a lab tour.
                </p>

                {/* 3 Hotlines Pills */}
                <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 bg-white/10 border border-white/15 hover:bg-white/15 text-white px-3.5 py-2 rounded-full transition cursor-pointer"
                  >
                    <PhoneCall size={14} className="text-[#F4B51B]" />
                    <span>+880 1713-493240</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 bg-white/10 border border-white/15 hover:bg-white/15 text-white px-3.5 py-2 rounded-full transition cursor-pointer"
                  >
                    <PhoneCall size={14} className="text-[#F4B51B]" />
                    <span>+880 1833-102822</span>
                  </motion.div>
                  <div className="flex items-center gap-2 bg-white/10 border border-white/15 text-white px-3.5 py-2 rounded-full">
                    <Clock size={14} className="text-[#F4B51B]" />
                    <span>Sat &ndash; Thu: 9AM &ndash; 6PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 5 cols: White Quick Admission Inquiry Card */}
            <div className="lg:col-span-5 w-full flex justify-end">
              <div className="bg-white text-[#101828] rounded-[22px] p-6 sm:p-7 w-full max-w-md border border-white/20 shadow-lg">
                <AnimatePresence mode="wait">
                  {formSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.92 }}
                      transition={{ duration: 0.3 }}
                      className="text-center py-6 space-y-3"
                    >
                      <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                        <Check size={24} strokeWidth={2.6} />
                      </div>
                      <h4 className="text-base font-extrabold text-[#09285F]">
                        Inquiry Received!
                      </h4>
                      <p className="text-xs text-[#667085] max-w-xs mx-auto">
                        Our senior admission counselor will call you at{" "}
                        <span className="font-bold text-[#09285F]">{formData.phone}</span> shortly.
                      </p>
                      <button
                        type="button"
                        onClick={() => setFormSubmitted(false)}
                        className="text-xs text-[#123DB8] font-bold underline cursor-pointer"
                      >
                        Submit another inquiry
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-3"
                    >
                      <h4 className="text-[14px] font-extrabold text-[#09285F] mb-1">
                        Quick Admission Inquiry
                      </h4>

                      {/* Name */}
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full text-xs px-3.5 py-2.5 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                        />
                      </div>

                      {/* Phone & GPA */}
                      <div className="grid grid-cols-2 gap-2.5">
                        <input
                          type="tel"
                          required
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full text-xs px-3.5 py-2.5 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                        />
                        <input
                          type="text"
                          placeholder="SSC GPA (e.g. 4.50)"
                          value={formData.sscGpa}
                          onChange={(e) =>
                            setFormData({ ...formData, sscGpa: e.target.value })
                          }
                          className="w-full text-xs px-3.5 py-2.5 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#101828]"
                        />
                      </div>

                      {/* Department Dropdown */}
                      <div>
                        <select
                          value={formData.department}
                          onChange={(e) =>
                            setFormData({ ...formData, department: e.target.value })
                          }
                          className="w-full text-xs px-3.5 py-2.5 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:border-[#123DB8] text-[#344054]"
                        >
                          <option value="Computer Engineering">Computer Engineering</option>
                          <option value="Civil Engineering">Civil Engineering</option>
                          <option value="Electrical Engineering">Electrical Engineering</option>
                          <option value="Textile Engineering">Textile Engineering</option>
                          <option value="Mechanical Engineering">Mechanical Engineering</option>
                          <option value="Automobile Engineering">Automobile Engineering</option>
                        </select>
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#F4B51B] hover:bg-[#eab01a] text-[#09285F] font-extrabold text-xs sm:text-[13px] py-3 rounded-full shadow-[0_4px_14px_rgba(244,181,27,0.3)] transition-colors cursor-pointer mt-1"
                      >
                        <span>Submit Admission Request</span>
                        <Send size={13} strokeWidth={2.4} className="text-[#09285F]" />
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
