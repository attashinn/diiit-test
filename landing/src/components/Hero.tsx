"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Crown,
  ArrowRight,
  Play,
  BookOpen,
  Users,
  Landmark,
  Award,
} from "lucide-react";

function CountUp({
  to,
  suffix = "",
  duration = 1.8,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" });

  React.useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animateCount = (now: number) => {
      if (!startTime) startTime = now;
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);

      // easeOutExpo for dynamic counting
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(ease * to);

      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCount);
      } else {
        setCount(to);
      }
    };

    animationFrameId = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

interface HeroProps {
  onOpenTourModal: () => void;
}

const rotatingWords = [
  "Skill-Based",
  "Hands-On",
  "Career-Focused",
  "Industry-Led",
];

export default function Hero({ onOpenTourModal }: HeroProps) {
  const [wordIndex, setWordIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);
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

      {/* Main Hero Content (Streamlined & Clean) */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 sm:pt-8 pb-4 my-auto">
        <div className="max-w-[560px] text-left">
          {/* 1. Official Accreditation Badge */}
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold mb-4 sm:mb-5 shadow-xs"
          >
            <Crown className="w-3.5 h-3.5 text-[#F4B51B] fill-[#F4B51B] flex-shrink-0" />
            <span>Govt. Approved Polytechnic &bull; BTEB Code: 50116</span>
          </motion.div>

          {/* 2. Main Headline with Continuous Rotating Word & Underline */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[32px] min-[390px]:text-[36px] sm:text-5xl lg:text-[54px] font-black text-white leading-[1.14] tracking-tight mb-3.5 sm:mb-4"
          >
            Bangladesh&apos;s No. 1{" "}
            <br className="hidden sm:inline" />
            <span className="relative inline-block text-[#F4B51B]">
              <span className="inline-block overflow-hidden align-bottom pb-1 h-[1.25em]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingWords[wordIndex]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block"
                  >
                    {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              {/* Elegant Curved Underline Accent */}
              <svg
                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2.5 sm:h-3.5 text-[#F4B51B] overflow-visible pointer-events-none"
                viewBox="0 0 175 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
                  d="M2 9C50 2 115 2 173 9"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            Diploma Engineering
          </motion.h1>

          {/* 3. Concise Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-100 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-normal max-w-[480px]"
          >
            Build practical skills for a successful engineering career with free laptop allotment, government stipends, and guaranteed job placement.
          </motion.p>

          {/* 4. Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-3"
          >
            {/* Primary Golden CTA */}
            <Link
              href="/apply"
              className="inline-flex items-center justify-center gap-2 bg-[#F4B51B] hover:bg-[#eab01a] text-[#09285F] font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all text-center"
            >
              <span>Apply for Admission</span>
              <ArrowRight size={16} strokeWidth={2.4} className="text-[#09285F]" />
            </Link>

            {/* Secondary Tour CTA */}
            <button
              type="button"
              onClick={onOpenTourModal}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-full border border-white/30 backdrop-blur-sm transition-all cursor-pointer text-center"
            >
              <Play size={12} className="fill-white text-white" />
              <span>Watch Campus Tour</span>
            </button>
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
                  <CountUp to={5} suffix="+" duration={1.2} />
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
                  <CountUp to={4500} suffix="+" duration={1.8} />
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
                  <CountUp to={50} suffix="+" duration={1.4} />
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
                  <CountUp to={95} suffix="%" duration={1.6} />
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
