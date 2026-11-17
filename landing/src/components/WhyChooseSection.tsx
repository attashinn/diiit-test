"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Laptop,
  Briefcase,
  GraduationCap,
  Rocket,
  ShieldCheck,
  Layers,
  ArrowRight,
  Play,
  Users,
  Award,
  Check,
} from "lucide-react";

interface WhyChooseSectionProps {
  onOpenTourModal?: () => void;
}

const advantages = [
  {
    id: "laptop",
    title: "One Student, One Laptop",
    subtitle: "Free Laptop for Every Student",
    description:
      "Every diploma student receives a free personal laptop to master programming, CAD drafting, circuit simulations, and hands-on laboratory software.",
    icon: Laptop,
    badgeText: "100% Free",
  },
  {
    id: "placement",
    title: "Dedicated Job Placement Cell",
    subtitle: "95%+ Corporate Placement Rate",
    description:
      "Our career center organizes annual Job Fairs, corporate internships, mock interviews, and direct recruitment linkages with 200+ leading companies.",
    icon: Briefcase,
    badgeText: "200+ Partners",
  },
  {
    id: "diu",
    title: "Direct DIU Higher Education Pathway",
    subtitle: "Credit Transfer & B.Sc. Progression",
    description:
      "Seamless credit transfer and guaranteed admission to B.Sc. Engineering at Daffodil International University (DIU) with exclusive alumni waivers.",
    icon: GraduationCap,
    badgeText: "Credit Transfer",
  },
  {
    id: "venture",
    title: "Daffodil Venture Capital Fund",
    subtitle: "Startup & Innovation Incubation",
    description:
      "Student robotics projects, hardware inventions, and tech startups receive seed capital, laboratory incubation space, and commercial mentoring.",
    icon: Rocket,
    badgeText: "Seed Funding",
  },
  {
    id: "accreditation",
    title: "Govt. Approved & Global Network",
    subtitle: "BTEB & Ministry of Education Affiliated",
    description:
      "Government-recognized 4-year engineering diploma programs with international partnerships across the UK, Netherlands, Malaysia, and South Africa.",
    icon: ShieldCheck,
    badgeText: "BTEB Approved",
  },
  {
    id: "scholarship",
    title: "Work-Based & Merit Scholarships",
    subtitle: "Up to 100% Tuition Fee Waiver",
    description:
      "Merit-based fee reductions, female student scholarships, freedom-fighter quota waivers, and on-campus work-study assistantships available.",
    icon: Layers,
    badgeText: "Up to 100% Waiver",
  },
];

export default function WhyChooseSection({ onOpenTourModal }: WhyChooseSectionProps) {
  return (
    <section id="about" className="w-full py-16 sm:py-24 bg-[#F8FAFC] border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Split Hero: Left Content + Right Building Photo with Yellow Offset Accent */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-14 sm:mb-16">
          {/* Left Column (7 cols): Header, Badges, CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 text-left"
          >
            {/* Overline with Gold Bar */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-[3.5px] bg-[#F4B51B] rounded-full inline-block" />
              <span className="font-extrabold text-[12.5px] text-[#09285F] uppercase tracking-[0.06em]">
                Why Choose DIET?
              </span>
            </div>

            {/* Main Headline with Curved Yellow Brush Stroke Underline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#09285F] tracking-[-0.025em] leading-[1.12] mb-4">
              Empowering Future Engineers
              <br />
              with{" "}
              <span className="relative inline-block text-[#123DB8]">
                Real-World Excellence
                {/* Hand-drawn Golden Underline SVG Stroke */}
                <svg
                  className="absolute -bottom-2.5 left-0 w-full h-3 text-[#F4B51B] overflow-visible pointer-events-none"
                  viewBox="0 0 280 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
                    d="M3 10C70 3 170 2 277 11"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-[15.5px] text-[#667085] leading-relaxed max-w-xl font-normal mb-7">
              Daffodil Institute of Engineering &amp; Technology provides a modern learning
              ecosystem where practical laboratory expertise and direct industry placement take center stage.
            </p>

            {/* 3 Horizontal Highlights */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-9 mb-8">
              {/* Highlight 1 */}
              <motion.div
                whileHover={{ y: -2 }}
                className="flex items-center gap-2.5 cursor-default"
              >
                <div className="w-9 h-9 rounded-xl bg-white border border-gray-200/80 shadow-sm flex items-center justify-center text-[#09285F]">
                  <GraduationCap className="w-5 h-5 text-[#09285F]" strokeWidth={2} />
                </div>
                <span className="text-xs sm:text-[13px] font-bold text-[#09285F] leading-tight">
                  Industry-Focused
                  <br />
                  Learning
                </span>
              </motion.div>

              {/* Highlight 2 */}
              <motion.div
                whileHover={{ y: -2 }}
                className="flex items-center gap-2.5 cursor-default"
              >
                <div className="w-9 h-9 rounded-xl bg-white border border-gray-200/80 shadow-sm flex items-center justify-center text-[#09285F]">
                  <Users className="w-5 h-5 text-[#09285F]" strokeWidth={2} />
                </div>
                <span className="text-xs sm:text-[13px] font-bold text-[#09285F] leading-tight">
                  Strong
                  <br />
                  Industry Network
                </span>
              </motion.div>

              {/* Highlight 3 */}
              <motion.div
                whileHover={{ y: -2 }}
                className="flex items-center gap-2.5 cursor-default"
              >
                <div className="w-9 h-9 rounded-xl bg-white border border-gray-200/80 shadow-sm flex items-center justify-center text-[#09285F]">
                  <Award className="w-5 h-5 text-[#09285F]" strokeWidth={2} />
                </div>
                <span className="text-xs sm:text-[13px] font-bold text-[#09285F] leading-tight">
                  Proven
                  <br />
                  Career Support
                </span>
              </motion.div>
            </div>

            {/* 2 Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 bg-[#09285F] hover:bg-[#123DB8] text-white rounded-full px-6 sm:px-7 py-3 sm:py-3.5 font-bold text-[13.5px] sm:text-[14px] shadow-[0_4px_16px_rgba(9,40,95,0.2)] transition-all duration-200 text-center"
                >
                  <span>Apply for Admission</span>
                  <ArrowRight size={16} strokeWidth={2.4} />
                </Link>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                type="button"
                onClick={onOpenTourModal}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#09285F] rounded-full px-6 py-3 sm:py-3.5 font-semibold text-[13.5px] sm:text-[14px] border border-[#D0D5DD] transition-all duration-200 cursor-pointer text-center"
              >
                <Play size={12} className="fill-[#09285F] text-[#09285F] translate-x-[0.5px]" />
                <span>Watch DIET in Action</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column (5 cols): Building Image with Offset Golden Yellow Accent Card */}
          <div className="lg:col-span-5 relative w-full max-w-[480px] lg:max-w-none mx-auto pr-3 pb-3 sm:pr-4 sm:pb-4">
            {/* Golden Yellow Offset Background Accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="absolute inset-0 translate-x-3.5 sm:translate-x-4 translate-y-3.5 sm:translate-y-4 bg-[#F4B51B] rounded-[32px] sm:rounded-[40px] z-0"
            />

            {/* Main DIET Campus Building Photo Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="relative z-10 rounded-[28px] sm:rounded-[36px] overflow-hidden aspect-[1.5/1] w-full border-[3px] border-white bg-slate-100 shadow-sm"
            >
              <Image
                src="/diet/why-building-exact.webp"
                alt="Daffodil Institute of Engineering & Technology Campus Building"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom 6 Advantage Cards Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(18, 61, 184, 0.35)",
                  boxShadow: "0 18px 30px -8px rgba(0, 0, 0, 0.08)",
                  transition: { duration: 0.22 },
                }}
                className="group bg-white rounded-[24px] p-6 sm:p-7 border border-gray-200/90 transition-colors flex flex-col justify-between cursor-default"
              >
                <div>
                  {/* Top Bar: Icon Container + Yellow Pill Tag with Checkmark */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#EEF2F6] group-hover:bg-[#123DB8] text-[#123DB8] group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
                      <Icon size={22} strokeWidth={2} />
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#09285F] bg-[#FEF6E6] border border-[#F4B51B]/40 px-3 py-1 rounded-full">
                      <Check size={12} strokeWidth={2.6} className="text-[#09285F]" />
                      <span>{item.badgeText}</span>
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-[17.5px] font-extrabold text-[#09285F] group-hover:text-[#123DB8] transition-colors leading-snug mb-1">
                    {item.title}
                  </h3>
                  <div className="text-[12px] font-bold text-[#123DB8] mb-2.5">
                    {item.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-[12.5px] sm:text-[13px] text-[#667085] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Link: Daffodil Standard -> */}
                <div className="pt-4 mt-4 border-t border-gray-50">
                  <Link
                    href="#admission"
                    className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#123DB8] group-hover:gap-2.5 transition-all"
                  >
                    <span>Daffodil Standard</span>
                    <ArrowRight size={14} strokeWidth={2.4} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
