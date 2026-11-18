"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Laptop,
  Briefcase,
  GraduationCap,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  Globe2,
  ExternalLink,
} from "lucide-react";

interface WhyChooseSectionProps {
  onOpenTourModal?: () => void;
}

const institutionalPillars = [
  {
    id: "stipend-books",
    tag: "Government Benefit & Free Books",
    title: "Govt. Monthly Stipend & Free Semester Books",
    bengaliTitle: "নিশ্চিত সরকারি মাসিক উপবৃত্তি ও ফ্রি পাঠ্যবই",
    description:
      "Every eligible diploma student receives a guaranteed government monthly financial stipend under BTEB criteria. Furthermore, DIET distributes 100% free semester textbooks through our Central Book Bank, eliminating textbook purchase expenses for families.",
    icon: BookOpen,
    highlights: ["Guaranteed Govt. Stipend", "100% Free Textbooks", "Central Book Bank Access"],
  },
  {
    id: "work-scholarship",
    tag: "Earn While You Learn",
    title: "Work-Based Scholarship & Paid Campus Roles",
    bengaliTitle: "শিক্ষার্থীদের জন্য ওয়ার্ক-বেসড স্কলারশিপ",
    description:
      "DIET enables students to gain real corporate work experience on campus. Through paid technical apprenticeships in computing laboratories, network maintenance, and department administration, students earn while completing their 4-year diploma.",
    icon: DollarSign,
    highlights: ["On-Campus Technical Roles", "Monthly Financial Allowance", "Practical Work Experience"],
  },
  {
    id: "job-placement",
    tag: "Career Development Cell",
    title: "Dedicated Job Placement & 200+ Corporate Network",
    bengaliTitle: "১০০% ইন্টার্নশিপ ও চাকরি প্লেসমেন্ট সাপোর্ট",
    description:
      "Our full-time career development center coordinates the mandatory 4-month 8th-semester industrial attachment, CV clinics, and mock interviews. We host the annual Daffodil Job Fair connecting graduates directly with 200+ industry recruiters.",
    icon: Briefcase,
    highlights: ["4-Month Industrial Attachment", "Annual Daffodil Job Fairs", "200+ Corporate Linkages"],
  },
  {
    id: "diu-pathway",
    tag: "Higher Education Progression",
    title: "Direct B.Sc. Pathway at Daffodil International University",
    bengaliTitle: "ডিআইইউ-তে সরাসরি বিএসসি ইঞ্জিনিয়ারিং সুযোগ",
    description:
      "Graduating diploma engineers transition seamlessly into B.Sc. Engineering degrees (CSE, EEE, Civil, Textile) at Daffodil International University (DIU) with guaranteed course credit exemptions and up to 50% exclusive alumni waivers.",
    icon: GraduationCap,
    highlights: ["Course Credit Exemptions", "Reserved DIU Admissions", "Up to 50% Alumni Waivers"],
  },
];

export default function WhyChooseSection({ onOpenTourModal }: WhyChooseSectionProps) {
  return (
    <section id="about" className="w-full py-16 sm:py-24 bg-[#FAFBFD] border-t border-gray-200/80">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-gray-200 text-[#09285F] text-[11px] sm:text-xs font-bold tracking-wide uppercase mb-3.5">
            <ShieldCheck size={14} className="text-[#09285F]" />
            <span>BTEB Approved Institute &bull; Institute Code: 50116</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-[#09285F] tracking-tight leading-tight mb-4">
            Why Choose Daffodil Institute of Engineering &amp; Technology?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            As a leading polytechnic institute in Dhaka under the Daffodil Education Network, DIET combines 60% hands-on laboratory engineering with authentic student welfare programs, modern digital tool allotment, and proven industry placement.
          </p>
        </div>

        {/* Flagship Showcase: One Student, One Laptop Initiative */}
        <div className="bg-white rounded-3xl border border-gray-200/90 overflow-hidden mb-12 sm:mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#09285F] uppercase tracking-wider mb-2.5">
                  <Laptop className="w-4 h-4 text-[#09285F]" />
                  <span>Flagship Welfare Initiative</span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#09285F] tracking-tight mb-2">
                  One Student, One Laptop Project
                </h3>
                <div className="text-xs sm:text-sm font-semibold text-[#D97706] mb-4">
                  প্রতিটি শিক্ষার্থীর জন্য ফ্রি ব্র্যান্ড-নিউ ল্যাপটপ
                </div>

                <p className="text-xs sm:text-[14px] text-slate-600 leading-relaxed mb-6 font-normal">
                  To ensure every student develops job-ready digital engineering skills, DIET provides every registered diploma student with a personal laptop. Students use their machine for software programming, AutoCAD drafting, circuit simulation (Proteus, Multisim), and lab reports starting from Semester 1.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#09285F] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-[13px] text-slate-700 font-medium">
                      Free brand new laptop upon registration
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#09285F] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-[13px] text-slate-700 font-medium">
                      Pre-loaded with licensed engineering software
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#09285F] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-[13px] text-slate-700 font-medium">
                      Dedicated hardware lab support &amp; warranty
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#09285F] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-[13px] text-slate-700 font-medium">
                      High-speed campus Wi-Fi across Dhanmondi
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-100">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 bg-[#09285F] hover:bg-[#071f4a] text-white font-bold text-xs sm:text-[13.5px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition"
                >
                  <span>Apply with Laptop Allotment</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/vision#at-a-glance-table"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#09285F] hover:text-[#0A44B6] px-3 py-2 transition"
                >
                  <span>View All Facilities</span>
                  <ExternalLink size={13} />
                </Link>
              </div>
            </div>

            {/* Right Photo Column (5 cols) */}
            <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] lg:min-h-full bg-slate-100 border-t lg:border-t-0 lg:border-l border-gray-100">
              <Image
                src="/diet/campus/facility-computer-labs.webp"
                alt="DIET Engineering Computer Laboratory"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09285F]/85 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <div className="font-extrabold text-sm sm:text-base">
                  Advanced Computing &amp; CAD Workstations
                </div>
                <div className="text-xs text-slate-200 mt-0.5">
                  Dhanmondi Campus &bull; 6 Specialized Engineering Labs
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Institutional Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 mb-14">
          {institutionalPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/90 flex flex-col justify-between hover:border-gray-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-100 text-[#09285F] flex items-center justify-center flex-shrink-0">
                      <Icon size={20} strokeWidth={2.2} />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-[#09285F] leading-snug mb-1">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#D97706] mb-3">
                    {pillar.bengaliTitle}
                  </div>

                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {pillar.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-700 bg-slate-50 border border-gray-200 px-2.5 py-1 rounded-md"
                      >
                        <CheckCircle2 size={12} className="text-emerald-600" />
                        <span>{h}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Institutional Strip: Dhanmondi Campus & Global Recruiting Info */}
        <div className="bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-bold text-[#09285F] uppercase tracking-wider mb-2">
                <Globe2 className="w-4 h-4 text-[#09285F]" />
                <span>Global Career &amp; Employment Linkage</span>
              </div>
              <h4 className="text-base sm:text-lg font-extrabold text-[#09285F] mb-1.5">
                Overseas Employment Network &bull; Japan &amp; International Technical Visas
              </h4>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                Through Daffodil Japan IT and the Daffodil Group&apos;s licensed Global Recruiting Agency, qualified engineering graduates receive Japanese language training, technical skill matching, and visa facilitation for overseas placement.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5 lg:items-end">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-2 bg-[#09285F] hover:bg-[#071f4a] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-lg transition text-center whitespace-nowrap"
              >
                <span>Apply for Admission</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/faculty-members"
                className="inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-gray-200 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-lg transition text-center whitespace-nowrap"
              >
                <span>Meet Faculty Mentors</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
