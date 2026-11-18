"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck } from "lucide-react";

interface PartnerItem {
  id: string;
  name: string;
  url: string;
  image: string;
  category: string;
}

const accreditationPartners: PartnerItem[] = [
  {
    id: "bteb",
    name: "Bangladesh Technical Education Board (BTEB)",
    url: "https://bteb.gov.bd/",
    image: "/diet/accreditation/bteb.png",
    category: "Governing Board",
  },
  {
    id: "diu",
    name: "Daffodil International University",
    url: "https://daffodilvarsity.edu.bd/",
    image: "/diet/accreditation/diu.png",
    category: "Academic Partner",
  },
  {
    id: "daffodil-computers",
    name: "Daffodil Computers Ltd.",
    url: "https://daffodil-bd.com/",
    image: "/diet/accreditation/daffodil-computers.png",
    category: "Industry Partner",
  },
  {
    id: "skill-jobs",
    name: "Skill.jobs",
    url: "https://skill.jobs/",
    image: "/diet/accreditation/skill-jobs.png",
    category: "Career & Placement",
  },
  {
    id: "bangladesh-venture-capital",
    name: "Bangladesh Venture Capital",
    url: "https://venture.com.bd/",
    image: "/diet/accreditation/bangladesh-venture-capital.png",
    category: "Entrepreneurship",
  },
  {
    id: "daffodil-education-network",
    name: "Daffodil Education Network",
    url: "https://den.daffodil.family/",
    image: "/diet/accreditation/daffodil-education-network.png",
    category: "Education Network",
  },
  {
    id: "admission-ac",
    name: "Admission.ac",
    url: "https://admission.ac/",
    image: "/diet/accreditation/admission-ac.png",
    category: "Global Admission",
  },
  {
    id: "drc",
    name: "Daffodil Response Center (DRC)",
    url: "https://daffodilvarsity.edu.bd/",
    image: "/diet/accreditation/drc.webp",
    category: "Support Center",
  },
  {
    id: "netcom-learning",
    name: "NetCom Learning",
    url: "https://netcomlearning.com/",
    image: "/diet/accreditation/netcom-learning.webp",
    category: "Global Training",
  },
  {
    id: "daffodil-japan-it",
    name: "Daffodil Japan IT",
    url: "https://daffodiljapanit.com/",
    image: "/diet/accreditation/daffodil-japan-it.png",
    category: "International Tech",
  },
  {
    id: "world-ready",
    name: "The Duke of Edinburgh's Award / World Ready",
    url: "https://intaward.org/",
    image: "/diet/accreditation/world-ready.png",
    category: "Leadership Award",
  },
  {
    id: "sukuna-multiple-campus",
    name: "Sukuna Multiple Campus",
    url: "https://sukuna.edu.np/",
    image: "/diet/accreditation/sukuna-multiple-campus.png",
    category: "Academic Linkage",
  },
];

export default function LinkAccreditation() {
  return (
    <section className="w-full py-16 sm:py-20 bg-white border-y border-gray-100 overflow-hidden relative">
      {/* Background Subtle Gradient Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F9FBFC]/60 via-white to-[#F9FBFC]/40 pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-14"
        >
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 mb-2.5">
            <span className="w-6 h-[3px] bg-[#F4B51B] rounded-full inline-block" />
            <span className="font-extrabold text-[12px] sm:text-[13px] text-[#09285F] uppercase tracking-[0.08em]">
              Affiliations &amp; Global Network
            </span>
            <span className="w-6 h-[3px] bg-[#F4B51B] rounded-full inline-block" />
          </div>

          {/* Main Title (Exact wording from diet.ac) */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#09285F] tracking-tight">
            Link &amp; Accreditation
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 mt-2.5 max-w-2xl mx-auto leading-relaxed">
            Approved by Bangladesh Technical Education Board (BTEB) and collaborating with leading industry enterprises, career platforms, and international academic networks.
          </p>
        </motion.div>

        {/* 12 Partner & Accreditation Cards Grid (Bigger & Full Native Color) */}
        <div className="grid grid-cols-2 min-[480px]:grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-6">
          {accreditationPartners.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                duration: 0.45,
                delay: index * 0.03,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4, scale: 1.03, transition: { duration: 0.18 } }}
              className="group bg-white rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center border border-gray-200/80 hover:border-[#0A44B6]/40 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(9,40,95,0.1)] transition-all duration-200 relative min-h-[130px] sm:min-h-[145px] lg:min-h-[160px]"
            >
              {/* Logo Container (Enlarged & Always Full Color) */}
              <div className="relative w-full h-16 sm:h-20 lg:h-24 flex items-center justify-center px-1">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain transition-transform duration-300 transform group-hover:scale-108"
                  sizes="(max-width: 640px) 180px, (max-width: 1024px) 240px, 280px"
                  priority={index < 6}
                />
              </div>

              {/* External Link Indicator on Hover */}
              <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 group-hover:text-[#0A44B6]">
                <ExternalLink size={13} />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Verification Ribbon */}
        <div className="mt-10 sm:mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAFBFD] border border-gray-200/80 text-[11px] sm:text-xs text-slate-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="font-medium">
              100% Recognized Government Curriculum &bull; Code: BTEB-DIET
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
