"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Crown,
  ArrowRight,
  Play,
  Layers,
  FlaskConical,
  Briefcase,
  GraduationCap,
  BookOpen,
  Users,
  Landmark,
  Award,
} from "lucide-react";

interface HeroProps {
  onOpenTourModal: () => void;
}

export default function Hero({ onOpenTourModal }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden min-h-[680px] sm:min-h-[760px] lg:h-[840px] flex flex-col justify-between pt-4 sm:pt-10">
      {/* Background Campus Image (Crisp, Natural Campus Architecture with subtle zoom entrance) */}
      <motion.div
        initial={{ scale: 1.06, opacity: 0.85 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/diet-bg.png"
          alt="Daffodil Institute of Engineering & Technology Campus"
          fill
          priority
          quality={95}
          className="object-cover object-[70%_center] sm:object-[76%_center] lg:object-[82%_center]"
        />

        {/* Natural Atmospheric Blue Overlay: Solid on left for text contrast, transparent on right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(9, 40, 95, 0.98) 0%, rgba(9, 40, 95, 0.93) 40%, rgba(18, 61, 184, 0.62) 56%, rgba(18, 61, 184, 0.14) 72%, transparent 84%)",
          }}
        />
      </motion.div>

      {/* Main Hero Content (Left Composition) */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-3 sm:px-6 lg:px-8 w-full pt-2 sm:pt-6 pb-4 my-auto">
        <div className="max-w-[560px] text-left">
          {/* 1. Positioning Badge with Gold Crown and Trailing Line */}
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2.5 sm:gap-3 mb-3.5 sm:mb-5"
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-white/50 bg-white/10 backdrop-blur-md text-white text-[11px] sm:text-[13px] font-medium">
              <motion.div
                animate={{ rotate: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Crown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F4B51B] fill-[#F4B51B] flex-shrink-0" />
              </motion.div>
              <span>
                Bangladesh&apos;s{" "}
                <span className="text-[#F4B51B] font-bold">No. 1</span>{" "}
                Skill-Based University
              </span>
            </div>
            {/* Trailing Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="hidden sm:block w-16 md:w-24 h-[1.5px] bg-white/35 rounded-full origin-left"
            />
          </motion.div>

          {/* 2. Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-[30px] min-[390px]:text-[34px] sm:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.08] tracking-[-0.025em] mb-3 sm:mb-5"
          >
            Build Practical
            <br />
            Skills for a
            <br />
            <span className="text-[#F4B51B]">Successful Career</span>
          </motion.h1>

          {/* 3. Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-100 text-[13px] sm:text-[16px] leading-relaxed mb-5 sm:mb-8 max-w-[480px] font-normal antialiased"
          >
            Daffodil Institute of Engineering &amp; Technology (DIET) is
            Bangladesh&apos;s leading skill-based university, offering
            industry-focused programs to create job-ready professionals.
          </motion.p>

          {/* 4. Action Buttons (Stacked on mobile, row on large desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 mb-7 sm:mb-11"
          >
            {/* Primary Golden CTA */}
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.18 }}
            >
              <Link
                href="/apply"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#F4B51B] hover:bg-[#eab01a] text-[#09285F] font-bold text-[13.5px] sm:text-[14.5px] px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full shadow-[0_4px_16px_rgba(244,181,27,0.35)] transition-all duration-200 text-center"
              >
                <span>Apply for Admission</span>
                <ArrowRight size={17} strokeWidth={2.6} className="text-[#09285F]" />
              </Link>
            </motion.div>

            {/* Secondary Tour CTA */}
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.18 }}
              type="button"
              onClick={onOpenTourModal}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-[13.5px] sm:text-[14.5px] px-5 py-2.5 sm:py-3.5 rounded-full border-2 border-white backdrop-blur-sm transition-all duration-200 cursor-pointer text-center"
            >
              <Play size={12} className="fill-white text-white translate-x-[0.5px]" />
              <span>Watch Campus Tour</span>
            </motion.button>
          </motion.div>

          {/* 5. Four Feature Highlights with Vertical Dividers */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-4 gap-1 sm:gap-3 pt-4 sm:pt-5 border-t border-white/20"
          >
            {/* Feature 1 */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="min-w-0 flex flex-col items-center text-center pr-1 sm:pr-3 border-r border-white/20 cursor-default"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl border border-white/30 bg-white/10 flex items-center justify-center text-white mb-1.5 flex-shrink-0 transition-transform duration-200 hover:scale-105">
                <Layers className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.9} />
              </div>
              <span className="text-white text-[9px] min-[360px]:text-[10px] sm:text-[12px] font-medium leading-tight">
                Industry-Focused
                <br />
                Programs
              </span>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="min-w-0 flex flex-col items-center text-center px-0.5 sm:px-3 border-r border-white/20 cursor-default"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl border border-white/30 bg-white/10 flex items-center justify-center text-white mb-1.5 flex-shrink-0 transition-transform duration-200 hover:scale-105">
                <FlaskConical className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.9} />
              </div>
              <span className="text-white text-[9px] min-[360px]:text-[10px] sm:text-[12px] font-medium leading-tight">
                Hands-on
                <br />
                Training
              </span>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="min-w-0 flex flex-col items-center text-center px-0.5 sm:px-3 border-r border-white/20 cursor-default"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl border border-white/30 bg-white/10 flex items-center justify-center text-white mb-1.5 flex-shrink-0 transition-transform duration-200 hover:scale-105">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.9} />
              </div>
              <span className="text-white text-[9px] min-[360px]:text-[10px] sm:text-[12px] font-medium leading-tight">
                Internship &amp;
                <br />
                Placement
              </span>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="min-w-0 flex flex-col items-center text-center pl-1 sm:pl-3 cursor-default"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl border border-white/30 bg-white/10 flex items-center justify-center text-white mb-1.5 flex-shrink-0 transition-transform duration-200 hover:scale-105">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.9} />
              </div>
              <span className="text-white text-[9px] min-[360px]:text-[10px] sm:text-[12px] font-medium leading-tight">
                Skilled
                <br />
                Graduates
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 6. Overlapping Curved Bottom Statistics Panel with Spring Slide-in */}
      <div className="relative z-20 w-full px-2 sm:px-6 lg:px-8 mt-auto">
        <div className="max-w-[1260px] mx-auto relative">
          {/* Subtle Golden Wing Accent on Top of the Card */}
          <div className="absolute -top-[2px] left-10 right-10 h-[2.5px] bg-gradient-to-r from-transparent via-[#F4B51B] to-transparent opacity-90 rounded-t-full" />

          {/* White Stats Card with Rounded Top */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-t-[28px] sm:rounded-t-[44px] shadow-[0_-12px_45px_rgba(0,0,0,0.12)] border-t border-x border-gray-100 px-2 sm:px-10 py-4 sm:py-7"
          >
            <div className="grid grid-cols-4 gap-1 sm:gap-4 divide-x divide-gray-200/80">
              {/* Stat 1 */}
              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="min-w-0 flex flex-col items-center text-center px-0.5 sm:px-4 first:pl-0 cursor-default"
              >
                <BookOpen
                  className="w-5 h-5 sm:w-7 sm:h-7 text-[#09285F] mb-1 flex-shrink-0"
                  strokeWidth={1.9}
                />
                <div className="text-base min-[360px]:text-lg sm:text-3xl font-black text-[#09285F] leading-none tracking-tight">
                  5+
                </div>
                <div className="text-[8.5px] min-[360px]:text-[9.5px] sm:text-[12.5px] font-bold text-[#09285F] tracking-tight mt-1 leading-tight">
                  Academic<br />Programs
                </div>
              </motion.div>

              {/* Stat 2 */}
              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="min-w-0 flex flex-col items-center text-center px-0.5 sm:px-4 cursor-default"
              >
                <Users
                  className="w-5 h-5 sm:w-7 sm:h-7 text-[#09285F] mb-1 flex-shrink-0"
                  strokeWidth={1.9}
                />
                <div className="text-base min-[360px]:text-lg sm:text-3xl font-black text-[#09285F] leading-none tracking-tight">
                  4,500+
                </div>
                <div className="text-[8.5px] min-[360px]:text-[9.5px] sm:text-[12.5px] font-bold text-[#09285F] tracking-tight mt-1 leading-tight">
                  Students
                </div>
              </motion.div>

              {/* Stat 3 */}
              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="min-w-0 flex flex-col items-center text-center px-0.5 sm:px-4 cursor-default"
              >
                <Landmark
                  className="w-5 h-5 sm:w-7 sm:h-7 text-[#09285F] mb-1 flex-shrink-0"
                  strokeWidth={1.9}
                />
                <div className="text-base min-[360px]:text-lg sm:text-3xl font-black text-[#09285F] leading-none tracking-tight">
                  50+
                </div>
                <div className="text-[8.5px] min-[360px]:text-[9.5px] sm:text-[12.5px] font-bold text-[#09285F] tracking-tight mt-1 leading-tight">
                  Expert<br />Faculty
                </div>
              </motion.div>

              {/* Stat 4 */}
              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="min-w-0 flex flex-col items-center text-center px-0.5 sm:px-4 last:pr-0 cursor-default"
              >
                <Award
                  className="w-5 h-5 sm:w-7 sm:h-7 text-[#09285F] mb-1 flex-shrink-0"
                  strokeWidth={1.9}
                />
                <div className="text-base min-[360px]:text-lg sm:text-3xl font-black text-[#09285F] leading-none tracking-tight">
                  95%
                </div>
                <div className="text-[8.5px] min-[360px]:text-[9.5px] sm:text-[12.5px] font-bold text-[#09285F] tracking-tight mt-1 leading-tight">
                  Graduate<br />Employment
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
