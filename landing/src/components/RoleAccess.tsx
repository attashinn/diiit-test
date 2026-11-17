"use client";

import React from "react";
import { ShieldCheck, GraduationCap, Users, ArrowUpRight, LogIn } from "lucide-react";

const portals = [
  {
    title: "Administrator Portal",
    subtitle: "Enterprise Governance & Operations",
    desc: "Oversee university-wide student registrations, faculty management, financial fee structures, and institutional AI analytics.",
    href: "http://127.0.0.1:8000/dashboard/",
    icon: ShieldCheck,
    tag: "Superadmin / Staff",
    color: "#09285F",
    bgBadge: "bg-[#09285F]/10 text-[#09285F]",
  },
  {
    title: "Faculty Teaching Portal",
    subtitle: "Curriculum & Academic Delivery",
    desc: "Manage class attendance, assign course assessments, upload grading marks, publish term papers, and track student performance.",
    href: "http://127.0.0.1:8000/teach/courses/",
    icon: Users,
    tag: "Professors & Lecturers",
    color: "#123DB8",
    bgBadge: "bg-[#123DB8]/10 text-[#123DB8]",
  },
  {
    title: "Student Academic Hub",
    subtitle: "Personal Student Dashboard",
    desc: "View enrolled courses, track real-time semester attendance, submit assignments, inspect exam results, and verify fee invoices.",
    href: "http://127.0.0.1:8000/me/courses/",
    icon: GraduationCap,
    tag: "Enrolled Students",
    color: "#F4B51B",
    bgBadge: "bg-[#F4B51B]/20 text-[#8B6500]",
  },
];

export default function RoleAccess() {
  return (
    <section id="portals" className="w-full py-16 md:py-24 bg-white border-y border-gray-100">
      <div className="max-w-[1340px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123DB8]/10 text-[#123DB8] text-xs font-bold uppercase tracking-wider mb-2">
              University Management System
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09285F] tracking-tight">
              One Unified Campus Portal
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-2 max-w-xl">
              Access real-time academic workflows, automated grading, fee management, and institutional records in single click.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <a
              href="http://127.0.0.1:8000/accounts/login/"
              className="inline-flex items-center gap-2 bg-[#09285F] hover:bg-[#123DB8] text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-md transition"
            >
              <LogIn size={16} />
              <span>Direct Sign In</span>
            </a>
          </div>
        </div>

        {/* Portal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {portals.map((portal, idx) => {
            const Icon = portal.icon;
            return (
              <a
                key={idx}
                href={portal.href}
                className="group relative bg-[#F7F8FA] hover:bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 hover:border-[#123DB8]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-200"
                      style={{ backgroundColor: `${portal.color}15`, color: portal.color }}
                    >
                      <Icon size={24} strokeWidth={2.2} />
                    </div>
                    <span className={`text-[11.5px] font-bold px-3 py-1 rounded-full ${portal.bgBadge}`}>
                      {portal.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#09285F] group-hover:text-[#123DB8] transition">
                    {portal.title}
                  </h3>
                  <div className="text-xs font-semibold text-gray-500 mb-3">
                    {portal.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {portal.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-200/60 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#123DB8] group-hover:underline">
                    Access Portal
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white group-hover:bg-[#123DB8] group-hover:text-white text-gray-700 flex items-center justify-center shadow-sm transition">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
