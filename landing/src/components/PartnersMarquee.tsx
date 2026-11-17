"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { id: 1, name: "Bangladesh Technical Education Board (BTEB)", img: "/diet/partners/partner_1.png" },
  { id: 2, name: "Ministry of Education Bangladesh", img: "/diet/partners/partner_2.png" },
  { id: 3, name: "Daffodil International University (DIU)", img: "/diet/partners/partner_3.png" },
  { id: 4, name: "British Council Bangladesh", img: "/diet/partners/partner_4.png" },
  { id: 5, name: "Confederation of Tourism & Hospitality (CTH UK)", img: "/diet/partners/partner_5.png" },
  { id: 6, name: "Child & Youth Finance International (CYFI Netherlands)", img: "/diet/partners/partner_6.png" },
  { id: 7, name: "Vinsys IT Services (India)", img: "/diet/partners/partner_7.png" },
];

export default function PartnersMarquee() {
  return (
    <section className="w-full py-14 sm:py-16 bg-[#F8FAFC] border-t border-gray-100 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8"
      >
        {/* Overline with Gold Bar */}
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="w-6 h-[3px] bg-[#F4B51B] rounded-full inline-block" />
          <span className="font-extrabold text-[12px] text-[#09285F] uppercase tracking-[0.08em]">
            Government Affiliations &amp; Global Network
          </span>
          <span className="w-6 h-[3px] bg-[#F4B51B] rounded-full inline-block" />
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-[#09285F]">
          Recognized Nationally, Connected Globally
        </h3>
        <p className="text-xs sm:text-sm text-[#667085] mt-1 max-w-xl mx-auto">
          Approved by the Ministry of Education and partnered with international education bodies.
        </p>
      </motion.div>

      {/* Infinite Logo Track */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left / Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

        {/* CSS Ticker (Duplicates array for seamless loop) */}
        <div className="flex items-center space-x-8 sm:space-x-12 animate-marquee whitespace-nowrap">
          {[...partners, ...partners, ...partners].map((p, idx) => (
            <motion.div
              key={`${p.id}-${idx}`}
              whileHover={{ scale: 1.06, y: -3, transition: { duration: 0.2 } }}
              className="flex-shrink-0 flex items-center justify-center h-16 sm:h-20 px-6 py-2 bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="relative w-24 sm:w-28 h-10 sm:h-12">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  sizes="120px"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
