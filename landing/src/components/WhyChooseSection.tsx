"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Laptop,
  Briefcase,
  GraduationCap,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Wrench,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

interface WhyChooseSectionProps {
  onOpenTourModal?: () => void;
}

const visualPillars = [
  {
    id: "laptop",
    badge: "100% FREE",
    badgeColor: "bg-[#F4B51B] text-[#09285F]",
    title: "One Student, One Laptop",
    subtitle: "Brand-new laptop given to every student from Semester 1 for coding, CAD drafting, and lab simulations.",
    image: "/diet/campus/facility-computer-labs.webp",
    span: "lg:col-span-8",
    aspect: "aspect-[16/9] sm:aspect-[21/9]",
    icon: Laptop,
    stats: "Preloaded with AutoCAD & Python",
  },
  {
    id: "labs",
    badge: "60% PRACTICAL",
    badgeColor: "bg-blue-600 text-white",
    title: "Modern Engineering Labs",
    subtitle: "6 specialized workshops with heavy machinery, microcontrollers, and CAD stations.",
    image: "/diet/campus/engineering_workshop.webp",
    span: "lg:col-span-4",
    aspect: "aspect-[4/3] sm:aspect-[16/10]",
    icon: Wrench,
    stats: "6 Department Labs",
  },
  {
    id: "stipend",
    badge: "GOVT. BENEFIT",
    badgeColor: "bg-emerald-600 text-white",
    title: "Monthly Stipend & Free Books",
    subtitle: "Guaranteed BTEB monthly stipend and complete semester textbooks free from our Central Book Bank.",
    image: "/diet/campus/facility-digital-library.webp",
    span: "lg:col-span-4",
    aspect: "aspect-[4/3] sm:aspect-[16/10]",
    icon: BookOpen,
    stats: "100% Free Course Books",
  },
  {
    id: "placement",
    badge: "200+ RECRUITERS",
    badgeColor: "bg-purple-600 text-white",
    title: "Guaranteed Placement Cell",
    subtitle: "4-month full-time industrial attachment and direct recruitment at the annual Daffodil Job Fair.",
    image: "/diet/campus/tech_seminar.webp",
    span: "lg:col-span-4",
    aspect: "aspect-[4/3] sm:aspect-[16/10]",
    icon: Briefcase,
    stats: "95% Corporate Placement",
  },
  {
    id: "diu",
    badge: "CREDIT TRANSFER",
    badgeColor: "bg-[#09285F] text-[#F4B51B]",
    title: "Direct B.Sc. Pathway at DIU",
    subtitle: "Guaranteed credit waiver into B.Sc. Engineering at Daffodil International University with alumni scholarships.",
    image: "/diet/campus/campus-hero-students.webp",
    span: "lg:col-span-4",
    aspect: "aspect-[4/3] sm:aspect-[16/10]",
    icon: GraduationCap,
    stats: "Up to 50% Tuition Waiver",
  },
];

export default function WhyChooseSection({ onOpenTourModal }: WhyChooseSectionProps) {
  return (
    <section id="about" className="w-full py-16 sm:py-20 bg-[#FAFBFD] border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Clean, Punchy, Zero Wall of Text) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200/80 text-[#09285F] text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-3">
              <ShieldCheck size={14} className="text-[#09285F]" />
              <span>BTEB Approved Polytechnic &bull; Code: 50116</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#09285F] tracking-tight">
              Why Choose DIET?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
              Practical engineering education backed by digital equipment, government benefits, and career guarantees.
            </p>
          </div>

          <Link
            href="/apply"
            className="inline-flex items-center gap-2 self-start md:self-auto bg-[#09285F] hover:bg-[#071f4a] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full transition shadow-xs"
          >
            <span>Apply for Admission</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Visual Bento Grid of Real Institutional Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          {visualPillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`group relative rounded-3xl overflow-hidden border border-gray-200/80 bg-white ${item.span} flex flex-col justify-end min-h-[280px] sm:min-h-[320px]`}
              >
                {/* Background Real Campus Photo */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Atmospheric Gradient Layer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09285F] via-[#09285F]/70 to-[#09285F]/20 group-hover:via-[#09285F]/60 transition-colors duration-300" />
                </div>

                {/* Top Badge & Stat Chip */}
                <div className="relative z-10 p-5 sm:p-6 mb-auto flex items-center justify-between gap-2">
                  <span className={`text-[10.5px] sm:text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-xs ${item.badgeColor}`}>
                    {item.badge}
                  </span>

                  <span className="text-[11px] sm:text-xs font-semibold text-white/90 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    {item.stats}
                  </span>
                </div>

                {/* Bottom Content Overlay (Short, Crisp, Clean) */}
                <div className="relative z-10 p-5 sm:p-7 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-white/15 backdrop-blur-md flex items-center justify-center text-white">
                      <Icon size={16} />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-white tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 font-normal leading-relaxed max-w-2xl">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Quick Facts Ribbon */}
        <div className="mt-8 sm:mt-10 p-4 sm:p-5 rounded-2xl bg-white border border-gray-200/80 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-600">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-[#09285F]">
              Spring 2026 Admissions Now Open
            </span>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <span className="hidden sm:inline text-slate-500">
              Direct entry for SSC &bull; HSC (Science/Voc) lateral entry to 3rd/4th semester
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/faculty-members"
              className="font-bold text-[#09285F] hover:text-[#0A44B6] inline-flex items-center gap-1 transition"
            >
              <span>Meet Faculty (22)</span>
              <ArrowUpRight size={13} />
            </Link>
            <Link
              href="/#programs"
              className="font-bold text-[#09285F] hover:text-[#0A44B6] inline-flex items-center gap-1 transition"
            >
              <span>View 6 Departments</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
