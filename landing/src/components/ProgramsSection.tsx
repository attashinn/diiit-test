"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Laptop,
  Layers,
  Zap,
  Grid3X3,
  Cog,
  Car,
  ArrowRight,
} from "lucide-react";

const programs = [
  {
    id: "computer",
    title: "Computer Engineering",
    description:
      "Build expertise in software, hardware, networking and modern computing technologies.",
    image: "/programs/computer.jpg",
    icon: Laptop,
    href: "/departments/computer-engineering",
  },
  {
    id: "civil",
    title: "Civil Engineering",
    description:
      "Gain practical knowledge in construction, structural design, and infrastructure development.",
    image: "/programs/civil.jpg",
    icon: Layers,
    href: "/departments/civil-engineering",
  },
  {
    id: "electrical",
    title: "Electrical Engineering",
    description:
      "Learn about power systems, electronics, control systems and modern electrical technologies.",
    image: "/programs/electrical.jpg",
    icon: Zap,
    href: "/departments/electrical-engineering",
  },
  {
    id: "textile",
    title: "Textile Engineering",
    description:
      "Explore the science of textiles, fabric production, and modern apparel manufacturing.",
    image: "/programs/textile.jpg",
    icon: Grid3X3,
    href: "/departments/textile-engineering",
  },
  {
    id: "mechanical",
    title: "Mechanical Engineering",
    description:
      "Develop hands-on skills in machine design, manufacturing and industrial maintenance.",
    image: "/programs/mechanical.jpg",
    icon: Cog,
    href: "/departments/mechanical-engineering",
  },
  {
    id: "automobile",
    title: "Automobile Engineering",
    description:
      "Learn vehicle systems, diagnostics, maintenance and modern automotive technologies.",
    image: "/programs/automobile.jpg",
    icon: Car,
    href: "/departments/automobile-engineering",
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="w-full pt-14 sm:pt-20 pb-8 sm:pb-12 bg-white overflow-hidden scroll-mt-24">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14"
        >
          <div className="max-w-3xl">
            {/* Overline with Gold Bar */}
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-8 h-[3.5px] bg-[#F4B51B] rounded-full inline-block" />
              <span className="font-extrabold text-[13.5px] text-[#09285F] uppercase tracking-[0.05em]">
                Our Programs
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#09285F] tracking-[-0.02em] leading-tight mb-3">
              Find Your Path.{" "}
              <span className="text-[#F4B51B]">Build Your Future.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-[15.5px] text-[#667085] leading-relaxed max-w-2xl font-normal">
              Explore industry-focused diploma programs designed to develop practical skills
              and prepare you for the evolving world of engineering and technology.
            </p>
          </div>

          {/* View All Programs Button */}
          <motion.div
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="flex-shrink-0"
          >
            <Link
              href="#departments"
              className="inline-flex items-center gap-2 border border-[#09285F] text-[#09285F] hover:bg-[#09285F] hover:text-white rounded-full px-6 py-2.5 font-bold text-[13.5px] transition-all duration-200"
            >
              <span>View All Programs</span>
              <ArrowRight size={16} strokeWidth={2.2} />
            </Link>
          </motion.div>
        </motion.div>

        {/* 6 Program Cards Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {programs.map((prog, idx) => {
            const Icon = prog.icon;
            return (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{
                  y: -7,
                  boxShadow: "0 20px 35px -10px rgba(9, 40, 95, 0.12)",
                  transition: { duration: 0.22 },
                }}
                className="group bg-white rounded-[22px] border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between overflow-hidden cursor-default"
              >
                <div>
                  {/* Photo at Top */}
                  <div className="relative w-full aspect-[309/128] overflow-hidden bg-gray-100">
                    <Image
                      src={prog.image}
                      alt={prog.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-108"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Overlapping Icon Badge */}
                  <div className="-mt-7 ml-5 relative z-10 w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_14px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#123DB8] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    <Icon size={22} strokeWidth={2} />
                  </div>

                  {/* Card Content */}
                  <div className="px-6 pt-3 pb-2">
                    <h3 className="text-[18.5px] font-extrabold text-[#09285F] group-hover:text-[#123DB8] transition-colors leading-snug mb-2">
                      {prog.title}
                    </h3>
                    <p className="text-[13px] sm:text-[13.5px] text-[#667085] leading-relaxed">
                      {prog.description}
                    </p>
                  </div>
                </div>

                {/* Explore Program Link at Bottom */}
                <div className="px-6 pb-6 pt-2">
                  <Link
                    href={prog.href}
                    className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-[#123DB8] group-hover:gap-2.5 transition-all"
                  >
                    <span>Explore Program</span>
                    <ArrowRight size={15} strokeWidth={2.4} />
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
