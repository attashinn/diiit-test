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
  CheckCircle2,
  Sparkles,
  Building2,
  Users,
} from "lucide-react";

interface WhyChooseSectionProps {
  onOpenTourModal?: () => void;
}

const keyAdvantages = [
  {
    icon: Laptop,
    iconColor: "text-[#0A44B6] bg-blue-50 border-blue-100",
    title: "One Student, One Laptop",
    desc: "Free personal laptop distributed from Semester 1 for coding, CAD, and circuit simulation.",
    tag: "Free Laptop",
  },
  {
    icon: BookOpen,
    iconColor: "text-emerald-700 bg-emerald-50 border-emerald-100",
    title: "Govt. Stipend & Free Books",
    desc: "Guaranteed monthly BTEB government stipend + 100% free semester textbooks from our Central Book Bank.",
    tag: "Govt. Benefit",
  },
  {
    icon: Briefcase,
    iconColor: "text-purple-700 bg-purple-50 border-purple-100",
    title: "Dedicated Job Placement Cell",
    desc: "4-month industrial attachment, CV clinics, and recruitment linkages with 200+ partner companies.",
    tag: "200+ Partners",
  },
  {
    icon: GraduationCap,
    iconColor: "text-amber-700 bg-amber-50 border-amber-100",
    title: "Direct B.Sc. Pathway at DIU",
    desc: "Guaranteed credit transfer and reserved admission into DIU B.Sc. Engineering with up to 50% waivers.",
    tag: "Credit Transfer",
  },
];

export default function WhyChooseSection({ onOpenTourModal }: WhyChooseSectionProps) {
  return (
    <section id="about" className="w-full pt-12 sm:pt-16 pb-16 sm:pb-20 bg-white border-t border-gray-100 overflow-hidden scroll-mt-24">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (6 cols): Clean, Concise Highlights */}
          <div className="lg:col-span-6 text-left">
            {/* Accreditation Chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-gray-200 text-[#09285F] text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-3.5">
              <ShieldCheck size={14} className="text-[#0A44B6]" />
              <span>BTEB Approved &bull; Institute Code: 50116</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#09285F] tracking-tight leading-[1.12] mb-3.5">
              Why Choose <span className="text-[#F4B51B]">DIET?</span>
            </h2>

            {/* Concise 1-sentence value statement */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8 max-w-lg">
              Combining 60% hands-on laboratory engineering with personal laptop allotment, government stipends, and guaranteed career placement.
            </p>

            {/* 4 Crisp Visual Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mb-8">
              {keyAdvantages.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-2xl border border-gray-100 bg-[#F9FBFC] hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${item.iconColor}`}>
                          <Icon size={18} strokeWidth={2.2} />
                        </div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-white border border-gray-200 px-2 py-0.5 rounded-full">
                          {item.tag}
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-[15px] font-bold text-[#09285F] leading-snug mb-1.5">
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 bg-[#F4B51B] hover:bg-[#eab01a] text-[#09285F] text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition shadow-xs hover:shadow-md"
              >
                <span>Apply for Admission</span>
                <ArrowRight size={15} strokeWidth={2.4} className="text-[#09285F]" />
              </Link>
              <Link
                href="/faculty-members"
                className="inline-flex items-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold px-5 py-3 rounded-full border border-gray-200 transition"
              >
                <span>Meet Faculty</span>
              </Link>
            </div>
          </div>

          {/* Right Column (6 cols): Visual Campus Photo Stack with Floating Stat Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-[540px] lg:max-w-none">
              
              {/* Main Dhanmondi Campus Building Photo */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-lg bg-slate-100 aspect-[4/3] w-full">
                <Image
                  src="/diet/why-building-exact.webp"
                  alt="DIET Dhanmondi Campus Building"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Floating Visual Badge 1 (Top Left): 100% Free Laptop */}
              <div className="absolute -top-4 -left-3 sm:-left-4 bg-white rounded-2xl p-3 sm:p-3.5 shadow-md border border-gray-100 flex items-center gap-3 z-10">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0A44B6] flex items-center justify-center flex-shrink-0">
                  <Laptop size={20} strokeWidth={2.2} />
                </div>
                <div>
                  <div className="text-xs font-black text-[#09285F] leading-tight">
                    1 Student, 1 Laptop
                  </div>
                  <div className="text-[10.5px] font-medium text-emerald-600 mt-0.5">
                    100% Free Allotment
                  </div>
                </div>
              </div>

              {/* Floating Visual Badge 2 (Bottom Right): Career Placement */}
              <div className="absolute -bottom-4 -right-3 sm:-right-4 bg-white rounded-2xl p-3 sm:p-3.5 shadow-md border border-gray-100 flex items-center gap-3 z-10">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Briefcase size={20} strokeWidth={2.2} />
                </div>
                <div>
                  <div className="text-xs font-black text-[#09285F] leading-tight">
                    200+ Recruiters
                  </div>
                  <div className="text-[10.5px] font-medium text-slate-500 mt-0.5">
                    Annual Daffodil Job Fair
                  </div>
                </div>
              </div>

              {/* Floating Visual Badge 3 (Bottom Left): BTEB Affiliation */}
              <div className="absolute -bottom-4 left-6 hidden sm:flex bg-[#09285F] text-white rounded-xl px-3.5 py-2 shadow-md items-center gap-2 z-10">
                <ShieldCheck size={16} className="text-[#F4B51B]" />
                <span className="text-[11px] font-bold">BTEB Code: 50116</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
