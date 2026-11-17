"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

interface NavDropdownItem {
  name: string;
  href: string;
  desc?: string;
}

const navItems: {
  name: string;
  href: string;
  active?: boolean;
  dropdown?: NavDropdownItem[];
}[] = [
  { name: "Home", href: "/", active: true },
  {
    name: "About",
    href: "/vision",
    dropdown: [
      { name: "Overview & Vision", href: "/vision", desc: "Our history, mission and future trajectory" },
      { name: "DIET At A Glance", href: "/vision#at-a-glance-table", desc: "Institutional profile, facilities and partner matrix" },
      { name: "Leadership & Governance", href: "/vision#our-leadership", desc: "Chairman, CEO & Executive Director guidance" },
      { name: "Affiliations & Recognition", href: "/vision#affiliations", desc: "Accredited by BTEB & Ministry of Education" },
    ],
  },
  {
    name: "Academics",
    href: "#programs",
    dropdown: [
      { name: "Academic Programs", href: "#programs", desc: "Diploma & Bachelor degree programs" },
      { name: "Academic Calendar", href: "#programs", desc: "Semester dates, midterm and final schedules" },
      { name: "Curriculum & Syllabus", href: "#programs", desc: "Outcome-based education curriculum" },
    ],
  },
  {
    name: "Departments",
    href: "#programs",
    dropdown: [
      { name: "Computer Engineering", href: "/departments/computer-engineering", desc: "Software, Hardware, Networking" },
      { name: "Civil Engineering", href: "/departments/civil-engineering", desc: "Construction, Structures, Infrastructure" },
      { name: "Electrical Engineering", href: "/departments/electrical-engineering", desc: "Power, Electronics, Control Systems" },
      { name: "Textile Engineering", href: "/departments/textile-engineering", desc: "Yarn, Fabric, Apparel Manufacturing" },
      { name: "Mechanical Engineering", href: "/departments/mechanical-engineering", desc: "Machine Design, Manufacturing, Maintenance" },
      { name: "Automobile Engineering", href: "/departments/automobile-engineering", desc: "Vehicle Systems, Diagnostics, Modern Auto" },
    ],
  },
  {
    name: "Admission",
    href: "/apply",
    dropdown: [
      { name: "Apply for Admission", href: "/apply", desc: "Direct online application portal" },
      { name: "Admission Requirements", href: "/apply#requirements", desc: "Eligibility criteria & documentation" },
      { name: "Tuition Fees & Scholarships", href: "/#admission", desc: "Merit scholarships up to 100%" },
    ],
  },
  {
    name: "Campus Life",
    href: "#campus-life",
    dropdown: [
      { name: "Laboratories & Facilities", href: "#campus-life", desc: "Advanced computing and hardware labs" },
      { name: "Clubs & Activities", href: "#campus-life", desc: "Robotics club, sports, cultural forum" },
      { name: "Hostel & Transport", href: "#campus-life", desc: "Campus accommodation and bus service" },
    ],
  },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ onOpenSearch }: { onOpenSearch?: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-[0_2px_15px_rgba(0,0,0,0.06)] border-b border-gray-100">
        <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 flex items-center justify-between gap-1.5 sm:gap-2">
          {/* Left: Brand Identity */}
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group flex-shrink-0">
            <div className="relative w-9 h-9 min-[380px]:w-10 min-[380px]:h-10 sm:w-11 sm:h-11 flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/daffodil-crest.svg"
                alt="DIET Crest"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col text-left select-none">
              <span className="font-extrabold text-[12px] min-[380px]:text-[13px] sm:text-[14px] leading-tight text-[#09285F] tracking-tight whitespace-nowrap">
                DAFFODIL INSTITUTE
              </span>
              <span className="font-bold text-[7.5px] min-[380px]:text-[8px] sm:text-[9px] leading-tight text-[#09285F] tracking-tight mt-0.5 whitespace-nowrap">
                OF ENGINEERING &amp;
              </span>
              <span className="font-bold text-[7.5px] min-[380px]:text-[8px] sm:text-[9px] leading-tight text-[#09285F] tracking-tight whitespace-nowrap">
                TECHNOLOGY
              </span>
            </div>
          </Link>

          {/* Center Navigation Links (Desktop) */}
          <div className="hidden xl:flex items-center space-x-1.5 xl:space-x-3">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex flex-col items-center px-3 py-1 text-[14px] font-medium transition-colors ${
                    item.active
                      ? "text-[#123DB8] font-semibold"
                      : "text-[#344054] hover:text-[#123DB8]"
                  }`}
                >
                  <span className="flex items-center gap-1">
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 text-gray-500 ${
                          activeDropdown === item.name ? "rotate-180 text-[#123DB8]" : ""
                        }`}
                      />
                    )}
                  </span>
                  {item.active && (
                    <span className="w-6 h-[2.5px] bg-[#123DB8] rounded-full mt-1" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2.5 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50"
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2.5 hover:bg-[#F7F8FA] transition group/sub"
                        >
                          <div className="text-[13.5px] font-semibold text-[#101828] group-hover/sub:text-[#123DB8]">
                            {subItem.name}
                          </div>
                          {subItem.desc && (
                            <div className="text-[11.5px] text-[#667085] leading-snug mt-0.5">
                              {subItem.desc}
                            </div>
                          )}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Actions: Fully Visible & Perfectly Sized on All Screens */}
          <div className="flex items-center gap-1 min-[360px]:gap-1.5 sm:gap-2.5 flex-shrink-0">
            {/* Search Button */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              type="button"
              onClick={onOpenSearch}
              className="w-7 h-7 min-[380px]:w-8 min-[380px]:h-8 sm:w-10 sm:h-10 rounded-full bg-[#EEF2F6] hover:bg-[#E2E8F0] flex items-center justify-center text-[#09285F] transition-colors cursor-pointer flex-shrink-0"
              aria-label="Search"
            >
              <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2.4} />
            </motion.button>

            {/* Student Portal Button */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <a
                href="http://localhost:8000/accounts/login/"
                className="hidden md:inline-flex items-center gap-1 sm:gap-1.5 bg-[#EFF4FE] hover:bg-[#DBEAFE] text-[#123DB8] border border-[#BFDBFE] font-bold text-[11px] sm:text-[12.5px] px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full transition-colors whitespace-nowrap flex-shrink-0 shadow-xs"
              >
                <span>Student Portal</span>
                <ArrowUpRight className="w-3 h-3 text-[#123DB8]" strokeWidth={2.4} />
              </a>
            </motion.div>

            {/* Golden Yellow Pill Apply Button */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <Link
                href="/apply"
                className="inline-flex items-center gap-1 sm:gap-1.5 bg-[#F4B51B] hover:bg-[#eab01a] text-[#09285F] font-bold text-[10.5px] min-[380px]:text-[11px] sm:text-[13px] px-2.5 min-[380px]:px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-colors whitespace-nowrap flex-shrink-0 shadow-sm"
              >
                <span className="hidden min-[420px]:inline">Apply for Admission</span>
                <span className="inline min-[420px]:hidden">Apply</span>
                <ArrowUpRight className="w-2.5 h-2.5 min-[380px]:w-3 min-[380px]:h-3 sm:w-3.5 sm:h-3.5 text-[#09285F]" strokeWidth={2.6} />
              </Link>
            </motion.div>

            {/* Hamburger Menu Toggle (Always Fully Visible) */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-1 text-[#09285F] hover:bg-slate-100 rounded-lg transition cursor-pointer flex-shrink-0"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" strokeWidth={2.5} />
              ) : (
                <Menu className="w-5 h-5" strokeWidth={2.5} />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile / Tablet Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="xl:hidden bg-white border-t border-gray-100 px-6 py-4 shadow-xl overflow-hidden max-h-[80vh] overflow-y-auto"
            >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-gray-50 pb-2">
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-[15px] font-semibold ${
                      item.active ? "text-[#123DB8]" : "text-[#101828]"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-3 mt-1.5 space-y-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-[13px] text-[#667085] hover:text-[#123DB8] py-0.5"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="pt-4 mt-3 border-t border-gray-100 flex flex-col gap-2.5">
              <a
                href="http://localhost:8000/accounts/login/"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#EFF4FE] text-[#123DB8] font-bold text-sm py-2.5 rounded-xl border border-[#BFDBFE] transition hover:bg-[#DBEAFE]"
              >
                <span>Student Portal Login</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>

      {/* Spacer so the page content starts right beneath the fixed navbar */}
      <div className="h-[47px] sm:h-[73px] w-full flex-shrink-0" aria-hidden="true" />
    </>
  );
}
