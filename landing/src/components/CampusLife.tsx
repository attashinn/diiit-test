"use client";

import React from "react";
import { Laptop, Cpu, BookCheck, Wifi, Award, Users2 } from "lucide-react";

const facilities = [
  {
    title: "High-Performance AI & Cloud Cluster",
    desc: "Over 80 high-performance workstations equipped with GPU acceleration for computer vision and deep learning coursework.",
    icon: Laptop,
  },
  {
    title: "Robotics & Microcontroller Fabrication Lab",
    desc: "3D printers, oscilloscope benches, PCB milling machines, and drone development rigs for national tech competitions.",
    icon: Cpu,
  },
  {
    title: "Modern Central Digital Library",
    desc: "Direct digital access to IEEE Xplore, ACM Digital Library, Springer journals, plus extensive physical reference collections.",
    icon: BookCheck,
  },
  {
    title: "High-Speed Gigabit Wi-Fi Campus",
    desc: "Complete campus-wide Wi-Fi coverage with dedicated secure credentials for students, researchers, and faculty members.",
    icon: Wifi,
  },
  {
    title: "Skill Certification & Incubation Cell",
    desc: "Industry-certified training modules in AWS, Google Cloud, Cisco CCNA, and RedHat Linux embedded into degree programs.",
    icon: Award,
  },
  {
    title: "Student Clubs & Sports Forum",
    desc: "Active programming club, debaters society, sports league, cultural events, and annual tech fest celebrations.",
    icon: Users2,
  },
];

export default function CampusLife() {
  return (
    <section id="campus-life" className="w-full py-20 md:py-28 bg-[#F7F8FA]">
      <div className="max-w-[1340px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123DB8]/10 text-[#123DB8] text-xs font-bold uppercase tracking-wider mb-3">
            Campus Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#09285F] tracking-tight">
            Designed for Modern Engineers
          </h2>
          <p className="text-base sm:text-lg text-[#667085] mt-4 leading-relaxed">
            From industrial hardware rigs to state-of-the-art incubation facilities, DIET provides
            the infrastructure required to turn theoretical concepts into deployed solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-lg transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#123DB8]/10 text-[#123DB8] flex items-center justify-center mb-5">
                  <Icon size={24} strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-[#09285F] mb-2 leading-snug">
                  {fac.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {fac.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
