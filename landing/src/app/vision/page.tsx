"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  GraduationCap,
  Building2,
  Users,
  Rocket,
  Layers,
  FlaskConical,
  Trophy,
  Handshake,
  Lightbulb,
  TrendingUp,
  ArrowRight,
  Check,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Award,
  Globe,
  Laptop,
  Calendar,
  Briefcase,
  Landmark,
  BookOpen,
  ExternalLink,
} from "lucide-react";

export default function AboutVisionPage() {
  const [partnerIndex, setPartnerIndex] = useState(0);

  const leaders = [
    {
      name: "A. B. M. Firoz Alam",
      role: "Chairman, DIET",
      image: "/diet/leaders/leader_firoz_alam.webp",
      desc: "A visionary leader committed to technical education, innovation and industry-academia collaboration.",
    },
    {
      name: "A. K. M. Fazlul Hoque",
      role: "Member, Board of Trustees",
      image: "/diet/leaders/leader_fazlul_hoque.webp",
      desc: "An experienced educationalist dedicated to quality, governance and institutional development.",
    },
    {
      name: "Md. Nazmul Hasan",
      role: "Member, Board of Trustees",
      image: "/diet/leaders/leader_nazmul_hasan.webp",
      desc: "A dynamic leader focused on student success, innovation and the future of technical education.",
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "4,500+",
      label: "Enrolled Students",
      desc: "A growing community of learners",
    },
    {
      icon: Layers,
      value: "6",
      label: "Diploma Programs",
      desc: "Across key engineering fields",
    },
    {
      icon: Building2,
      value: "50+",
      label: "Qualified Faculty",
      desc: "Experienced and industry-oriented",
    },
    {
      icon: FlaskConical,
      value: "20+",
      label: "Modern Laboratories",
      desc: "For hands-on practical learning",
    },
    {
      icon: Trophy,
      value: "10+",
      label: "Annual Events",
      desc: "Technical, cultural and co-curricular",
    },
    {
      icon: Handshake,
      value: "200+",
      label: "Industry Connections",
      desc: "For training, internships and jobs",
    },
  ];

  const coreValues = [
    {
      icon: GraduationCap,
      title: "Quality Education",
      desc: "Industry-aligned curriculum with practical exposure.",
    },
    {
      icon: Lightbulb,
      title: "Innovation & Creativity",
      desc: "Encouraging new ideas, projects and problem-solving.",
    },
    {
      icon: Users,
      title: "Discipline & Ethics",
      desc: "Building responsible and professional individuals.",
    },
    {
      icon: TrendingUp,
      title: "Career Readiness",
      desc: "Skills, training and guidance for a successful career.",
    },
  ];

  const affiliations = [
    {
      name: "BTEB",
      logo: "/diet/partners/partner_1.png",
    },
    {
      name: "National University",
      logo: "/diet/partners/partner_nu_clean.webp",
    },
    {
      name: "Daffodil University",
      logo: "/diet/partners/partner_3.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#101828] flex flex-col font-sans selection:bg-[#F4B51B] selection:text-[#09285F]">
      {/* Persistent Global Top Navbar */}
      <Navbar />

      <main className="flex-1 w-full pt-[58px] sm:pt-[72px]">
        {/* =========================================================
            SECTION 1: HERO (DIET — A BTEB-AFFILIATED INSTITUTE)
        ========================================================= */}
        <section className="w-full pt-4 sm:pt-10 lg:pt-16 pb-10 sm:pb-14 lg:pb-20 bg-white overflow-hidden">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
              {/* Right Column (5 cols on desktop, FIRST on mobile): Building Image */}
              <div className="order-1 lg:order-2 lg:col-span-5 relative w-full max-w-[340px] sm:max-w-[440px] lg:max-w-none mx-auto mb-4 lg:mb-0 pr-3 pb-3 sm:pr-4 sm:pb-4">
                {/* Golden Yellow Offset Background Accent */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                  className="absolute inset-0 translate-x-2 sm:translate-x-4 translate-y-2 sm:translate-y-4 bg-[#F4B51B] rounded-[22px] sm:rounded-[38px] z-0"
                />

                {/* Main DIET Campus Building Photo Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                  className="relative z-10 rounded-[18px] sm:rounded-[34px] overflow-hidden aspect-[1.5/1] w-full border-[3px] border-white bg-slate-100 shadow-sm"
                >
                  <Image
                    src="/diet/why-building-exact.webp"
                    alt="DIET Campus Building"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </motion.div>
              </div>

              {/* Left Column (7 cols on desktop, SECOND on mobile): Overline, Headline, Paragraph, 2 CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="order-2 lg:order-1 lg:col-span-7 text-left"
              >
                {/* Kicker with Gold Bar */}
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <span className="w-6 h-[3px] bg-[#F4B51B] rounded-full inline-block" />
                  <span className="text-[11.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#09285F]">
                    DIET &mdash; A BTEB-AFFILIATED INSTITUTE
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-extrabold text-[#09285F] tracking-[-0.025em] leading-[1.15] mb-3 sm:mb-3.5">
                  Empowering Future Engineers
                  <br />
                  Through <span className="text-[#F4B51B]">Technical Excellence</span>
                </h1>

                {/* Paragraph Description */}
                <p className="text-xs sm:text-[14px] text-[#667085] leading-relaxed max-w-xl font-normal mb-6 sm:mb-8">
                  Daffodil Institute of Engineering &amp; Technology (DIET) provides a modern
                  learning ecosystem where practical knowledge, industry exposure and career
                  preparation go hand in hand.
                </p>

                {/* 2 Action Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                    <Link
                      href="/#programs"
                      className="inline-flex items-center gap-1.5 bg-[#F4B51B] hover:bg-[#eab01a] text-[#09285F] font-extrabold text-xs sm:text-[13px] px-6 py-2.5 sm:py-3 rounded-full shadow-[0_4px_14px_rgba(244,181,27,0.3)] transition-colors text-center cursor-pointer"
                    >
                      <span>Explore Programs</span>
                      <ArrowRight size={13} strokeWidth={2.4} />
                    </Link>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                    <Link
                      href="#about-diet"
                      className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 text-[#09285F] font-bold text-xs sm:text-[13px] px-6 py-2.5 sm:py-3 rounded-full border border-gray-300 transition-colors text-center cursor-pointer"
                    >
                      <span>About DIET</span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 2: ABOUT DIET & WHY CHOOSE DIET (Split Grid)
        ========================================================= */}
        <section id="about-diet" className="w-full py-14 sm:py-18 bg-white border-t border-gray-100">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column (7 cols): About DIET Content + 4 Checkmark Bullets */}
              <div className="lg:col-span-7 text-left">
                {/* Kicker */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-[3px] bg-[#F4B51B] rounded-full inline-block" />
                  <span className="text-[11.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#09285F]">
                    ABOUT DIET
                  </span>
                </div>

                {/* Headline */}
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#09285F] tracking-[-0.025em] leading-[1.18] mb-3.5">
                  Industry-Aligned Technical Education for a Better Tomorrow
                </h2>

                {/* Paragraph */}
                <p className="text-xs sm:text-[13.5px] text-[#667085] leading-relaxed max-w-xl font-normal mb-6">
                  DIET is committed to delivering practical, industry-relevant and quality
                  technical education. With modern facilities, experienced faculty and strong
                  industry connections, we prepare students to excel in the real world.
                </p>

                {/* 4 Bullet Points with Golden Checkmarks */}
                <div className="space-y-3 max-w-lg">
                  <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#344054] font-medium">
                    <div className="w-4.5 h-4.5 rounded-full bg-[#FEF6E6] text-[#F4B51B] flex items-center justify-center flex-shrink-0">
                      <Check size={12} strokeWidth={3} className="text-[#F4B51B]" />
                    </div>
                    <span>BTEB affiliated diploma programs</span>
                  </div>

                  <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#344054] font-medium">
                    <div className="w-4.5 h-4.5 rounded-full bg-[#FEF6E6] text-[#F4B51B] flex items-center justify-center flex-shrink-0">
                      <Check size={12} strokeWidth={3} className="text-[#F4B51B]" />
                    </div>
                    <span>Industry-focused practical training</span>
                  </div>

                  <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#344054] font-medium">
                    <div className="w-4.5 h-4.5 rounded-full bg-[#FEF6E6] text-[#F4B51B] flex items-center justify-center flex-shrink-0">
                      <Check size={12} strokeWidth={3} className="text-[#F4B51B]" />
                    </div>
                    <span>Career support &amp; placement assistance</span>
                  </div>

                  <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#344054] font-medium">
                    <div className="w-4.5 h-4.5 rounded-full bg-[#FEF6E6] text-[#F4B51B] flex items-center justify-center flex-shrink-0">
                      <Check size={12} strokeWidth={3} className="text-[#F4B51B]" />
                    </div>
                    <span>A student-centered learning environment</span>
                  </div>
                </div>
              </div>

              {/* Right Column (5 cols): Deep Navy "Why Choose DIET" Card */}
              <div className="lg:col-span-5 bg-[#09285F] text-white rounded-[24px] p-6 sm:p-7 border border-[#09285F]">
                {/* Header with Star Icon */}
                <div className="flex items-center gap-2 text-[#F4B51B] text-base sm:text-[17px] font-black mb-5">
                  <Sparkles size={18} className="fill-[#F4B51B] text-[#F4B51B]" />
                  <span>Why Choose DIET</span>
                </div>

                {/* 4 Feature Items */}
                <div className="space-y-4">
                  {/* Item 1 */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <GraduationCap size={18} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-[13.5px] font-extrabold text-white leading-tight mb-0.5">
                        Practical &amp; Industry-Focused Learning
                      </h4>
                      <p className="text-[11px] text-slate-300 leading-snug">
                        Hands-on training and real-world projects.
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Building2 size={18} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-[13.5px] font-extrabold text-white leading-tight mb-0.5">
                        Modern Facilities
                      </h4>
                      <p className="text-[11px] text-slate-300 leading-snug">
                        Well-equipped labs, computer centers and workshops.
                      </p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Users size={18} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-[13.5px] font-extrabold text-white leading-tight mb-0.5">
                        Experienced Faculty
                      </h4>
                      <p className="text-[11px] text-slate-300 leading-snug">
                        A team of qualified and industry-experienced educators.
                      </p>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Rocket size={18} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-[13.5px] font-extrabold text-white leading-tight mb-0.5">
                        Career &amp; Higher Study Opportunities
                      </h4>
                      <p className="text-[11px] text-slate-300 leading-snug">
                        Guidance for job placement and further education.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 3: OUR LEADERSHIP (Guidance from Experienced Leaders)
        ========================================================= */}
        <section className="w-full py-14 sm:py-18 bg-white border-t border-gray-100">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-6 h-[3px] bg-[#F4B51B] rounded-full inline-block" />
                <span className="text-[11.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#09285F]">
                  OUR LEADERSHIP
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#09285F] tracking-[-0.025em] mb-2">
                Guidance from Experienced Leaders
              </h2>
              <p className="text-xs sm:text-[13px] text-[#667085] leading-relaxed">
                A dedicated leadership team driving DIET&apos;s vision, academic excellence and industry collaboration.
              </p>
            </div>

            {/* 3 Leader Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
              {leaders.map((leader, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 18px 30px -8px rgba(0,0,0,0.1)",
                    borderColor: "rgba(18, 61, 184, 0.35)",
                    transition: { duration: 0.2 },
                  }}
                  className="group bg-white rounded-[22px] border border-gray-200/90 p-4 sm:p-5 text-left flex flex-col justify-between transition-colors cursor-default"
                >
                  <div>
                    {/* Leader Portrait */}
                    <div className="relative aspect-[1/0.88] w-full rounded-[16px] overflow-hidden mb-3.5 bg-slate-100 border border-gray-100">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 30vw"
                      />
                    </div>

                    {/* Name */}
                    <h3 className="text-[15px] sm:text-[16px] font-black text-[#09285F] leading-tight mb-1 group-hover:text-[#123DB8] transition-colors">
                      {leader.name}
                    </h3>

                    {/* Pill Badge */}
                    <div className="mb-2.5">
                      <span className="inline-block text-[10px] font-bold text-[#B57C00] bg-[#FEF6E6] border border-[#F4B51B]/40 px-2 py-0.5 rounded-full">
                        {leader.role}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[#667085] leading-relaxed">
                      {leader.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 4: DIET AT A GLANCE (6 Stat Cards)
        ========================================================= */}
        <section className="w-full py-14 sm:py-18 bg-white border-t border-gray-100">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header with View More Stats Button */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-9 sm:mb-10">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-6 h-[3px] bg-[#F4B51B] rounded-full inline-block" />
                  <span className="text-[11.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#09285F]">
                    DIET at a Glance
                  </span>
                </div>
                <p className="text-xs text-[#667085] leading-relaxed">
                  A quick look at our academic strength, students and learning ecosystem.
                </p>
              </div>

              <div className="flex-shrink-0">
                <Link
                  href="/at-a-glance"
                  className="inline-flex items-center gap-1.5 border border-gray-300 hover:border-[#09285F] text-[#09285F] rounded-full px-3.5 py-1 text-[11.5px] font-bold transition cursor-pointer"
                >
                  <span>View More Stats</span>
                  <ArrowRight size={11} strokeWidth={2.4} />
                </Link>
              </div>
            </div>

            {/* 6 Stats Grid (3 Columns x 2 Rows) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {stats.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-[18px] border border-gray-200/90 p-4 flex items-start gap-3.5 hover:border-[#123DB8]/40 transition-all duration-200"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#EEF4FB] text-[#123DB8] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={18} strokeWidth={2.2} />
                    </div>

                    <div>
                      <div className="text-2xl font-black text-[#09285F] tracking-tight leading-none mb-1">
                        {item.value}
                      </div>
                      <h4 className="text-xs sm:text-[12.5px] font-extrabold text-[#09285F] leading-tight mb-0.5">
                        {item.label}
                      </h4>
                      <p className="text-[10.5px] text-[#667085] leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 5: OUR PROGRAMS & CORE VALUES (4 Columns)
        ========================================================= */}
        <section className="w-full py-14 sm:py-18 bg-white border-t border-gray-100">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <div className="flex items-center justify-center gap-2 mb-1.5">
                <span className="w-6 h-[3px] bg-[#F4B51B] rounded-full inline-block" />
                <span className="text-[11.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#09285F]">
                  Our Programs &amp; Core Values
                </span>
              </div>
              <p className="text-xs text-[#667085] leading-relaxed">
                Quality technical education, guided by strong values and real-world relevance.
              </p>
            </div>

            {/* 4 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {coreValues.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-[20px] border border-gray-200/90 p-4 sm:p-5 text-left hover:border-[#123DB8]/40 transition-all duration-200"
                  >
                    {/* Icon in yellow/amber box */}
                    <div className="w-9 h-9 rounded-xl bg-[#FEF6E6] text-[#F4B51B] flex items-center justify-center mb-3.5">
                      <Icon size={19} strokeWidth={2.2} />
                    </div>

                    <h3 className="text-xs sm:text-[13.5px] font-extrabold text-[#09285F] leading-snug mb-1.5">
                      {val.title}
                    </h3>
                    <p className="text-[11px] text-[#667085] leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 6: RECOGNIZED & AFFILIATED BY (3 Cards with Controls)
        ========================================================= */}
        <section className="w-full py-14 sm:py-18 bg-white border-t border-gray-100">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <div className="flex items-center justify-center gap-2 mb-1.5">
                <span className="w-6 h-[3px] bg-[#F4B51B] rounded-full inline-block" />
                <span className="text-[11.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#09285F]">
                  Recognized &amp; Affiliated By
                </span>
              </div>
              <p className="text-xs text-[#667085] leading-relaxed">
                Our programs are approved and affiliated by national education authorities.
              </p>
            </div>

            {/* 3 Cards with Carousel Controls */}
            <div className="relative flex items-center justify-center gap-3 max-w-3xl mx-auto">
              {/* Left Arrow Button */}
              <button
                type="button"
                onClick={() => setPartnerIndex((prev) => (prev > 0 ? prev - 1 : affiliations.length - 1))}
                className="w-7 h-7 rounded-full border border-gray-200 hover:border-[#09285F] text-[#09285F] flex items-center justify-center transition flex-shrink-0 cursor-pointer"
                aria-label="Previous partner"
              >
                <ChevronLeft size={14} strokeWidth={2.2} />
              </button>

              {/* 3 Partner Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 flex-1">
                {affiliations.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-[18px] border border-gray-200/90 py-3 px-5 flex items-center justify-center gap-2.5 hover:border-[#123DB8]/40 transition-all text-center h-16"
                  >
                    <div className="relative w-7 h-7 flex-shrink-0">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs sm:text-[13px] font-extrabold text-[#09285F]">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Right Arrow Button (Gold Accent) */}
              <button
                type="button"
                onClick={() => setPartnerIndex((prev) => (prev < affiliations.length - 1 ? prev + 1 : 0))}
                className="w-7 h-7 rounded-full bg-[#F4B51B] hover:bg-[#eab01a] text-[#09285F] flex items-center justify-center transition flex-shrink-0 cursor-pointer"
                aria-label="Next partner"
              >
                <ChevronRight size={14} strokeWidth={2.4} />
              </button>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 7: BOTTOM CTA (Build Your Future in Engineering at DIET)
        ========================================================= */}
        <section className="w-full py-12 sm:py-16 bg-white border-t border-gray-100">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-[#09285F] text-white rounded-[24px] p-6 sm:p-9 lg:p-10 overflow-hidden border border-[#09285F] flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              {/* Right Side Angled DIET Campus Building Graphic */}
              <div className="absolute top-0 bottom-0 right-0 w-[200px] sm:w-[280px] lg:w-[360px] h-full pointer-events-none select-none z-0 opacity-80 lg:opacity-100">
                <Image
                  src="/diet/event-tech-fest-building.webp"
                  alt="DIET Campus Building"
                  fill
                  className="object-cover object-right"
                  sizes="(max-width: 1024px) 200px, 360px"
                />
              </div>

              {/* Left Content */}
              <div className="relative z-10 max-w-xl">
                <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-white leading-tight mb-2.5">
                  Build Your Future in
                  <br />
                  Engineering at <span className="text-[#F4B51B]">DIET</span>
                </h2>

                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed max-w-md mb-6">
                  Join a trusted institute for quality technical education, practical learning
                  and real career opportunities.
                </p>

                {/* 2 Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/apply"
                    className="inline-flex items-center gap-1.5 bg-[#F4B51B] hover:bg-[#eab01a] text-[#09285F] font-extrabold text-xs px-5 py-2.5 rounded-full transition-all active:scale-95 text-center cursor-pointer"
                  >
                    <span>Apply for Admission</span>
                    <ArrowRight size={13} strokeWidth={2.4} />
                  </Link>

                  <Link
                    href="/#programs"
                    className="inline-flex items-center gap-1.5 bg-transparent hover:bg-white/10 text-white font-semibold text-xs px-5 py-2.5 rounded-full border border-white/30 transition-all active:scale-95 text-center cursor-pointer"
                  >
                    <span>Explore Programs</span>
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
