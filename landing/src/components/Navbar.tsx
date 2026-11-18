"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronDown,
  Menu,
  X,
  LayoutGrid,
  GraduationCap,
  Users,
  ShieldCheck,
  FileText,
  PhoneCall,
  Laptop,
  ExternalLink,
  BookOpen,
  Building2,
  Calendar,
  Sparkles,
  Award,
  Globe,
  Compass,
} from "lucide-react";

interface NavDropdownItem {
  name: string;
  href: string;
  desc?: string;
  isExternal?: boolean;
}

interface NavItem {
  name: string;
  href: string;
  dropdown?: NavDropdownItem[];
}

const navItems: NavItem[] = [
  {
    name: "Admissions",
    href: "/apply",
    dropdown: [
      { name: "Apply for Admission", href: "/apply", desc: "Online application form with direct payment" },
      { name: "Admission Requirements", href: "/apply#requirements", desc: "SSC / HSC criteria & eligibility guidelines" },
      { name: "Tuition Fees & Waivers", href: "/#admission", desc: "Semester fee breakdown & up to 100% waiver" },
      { name: "Diploma Engineering Programs", href: "/#programs", desc: "6 BTEB approved 4-year diploma curricula" },
    ],
  },
  {
    name: "Academics",
    href: "/faculty-members",
    dropdown: [
      { name: "Faculty Members", href: "/faculty-members", desc: "Meet all 22+ dedicated instructors & department heads" },
      { name: "Computer Engineering", href: "/departments/computer-engineering", desc: "Software, Hardware, Networking & Web" },
      { name: "Civil Engineering", href: "/departments/civil-engineering", desc: "Structures, Surveying & Construction" },
      { name: "Electrical Engineering", href: "/departments/electrical-engineering", desc: "Power Systems, Electronics & Automation" },
      { name: "Textile Engineering", href: "/departments/textile-engineering", desc: "Yarn, Fabric & Apparel Manufacturing" },
      { name: "Mechanical Engineering", href: "/departments/mechanical-engineering", desc: "Machine Design, Manufacturing & CAD/CAM" },
      { name: "Automobile Engineering", href: "/departments/automobile-engineering", desc: "Modern Engine Systems & Diagnostics" },
      { name: "Academic Calendar", href: "/#programs", desc: "Semester dates, midterm and final schedules" },
    ],
  },
  {
    name: "Campus",
    href: "/#campus-life",
    dropdown: [
      { name: "Laboratories & Workshops", href: "/#campus-life", desc: "Modern engineering labs & practical stations" },
      { name: "Hostel & Accommodation", href: "/#campus-life", desc: "Safe residential hostels for boys & girls" },
      { name: "Transport & Bus Routes", href: "/#campus-life", desc: "Campus bus service across Dhaka city" },
      { name: "Clubs & Extra-Curricular", href: "/#campus-life", desc: "Robotics club, sports & cultural forum" },
    ],
  },
  {
    name: "Research",
    href: "/#programs",
    dropdown: [
      { name: "Innovation & Projects Hub", href: "/#programs", desc: "Final semester capstone projects & prototypes" },
      { name: "Industrial Attachment", href: "/#programs", desc: "4-month full-time industry internship" },
      { name: "Practical Skill Workshops", href: "/#programs", desc: "60% hands-on laboratory learning focus" },
    ],
  },
  {
    name: "International",
    href: "/vision#affiliations",
    dropdown: [
      { name: "Global University Linkages", href: "/vision#affiliations", desc: "Credit transfer & higher study pathways" },
      { name: "Industry Certifications", href: "/#programs", desc: "Cisco, Red Hat & professional IT credentials" },
      { name: "BTEB & International Recognition", href: "/vision#affiliations", desc: "Globally accredited diploma certification" },
    ],
  },
  {
    name: "About",
    href: "/vision",
    dropdown: [
      { name: "Overview & Vision", href: "/vision", desc: "Our history, mission and 2030 trajectory" },
      { name: "Faculty Members Directory", href: "/faculty-members", desc: "Academic faculty, dept heads & mentors" },
      { name: "DIET At A Glance", href: "/vision#at-a-glance-table", desc: "Campus profile, facilities and partner matrix" },
      { name: "Leadership & Governance", href: "/vision#our-leadership", desc: "Chairman, CEO & Executive Director guidance" },
      { name: "Affiliations & Recognition", href: "/vision#affiliations", desc: "Accredited by BTEB & Ministry of Education" },
    ],
  },
];

const topUtilityLinks = [
  { name: "DIET News", href: "/#news" },
  { name: "Forum", href: "http://localhost:8000/accounts/login/", isExternal: true },
  { name: "Students", href: "http://localhost:8000/me/courses/", isExternal: true },
  { name: "Parents", href: "/#contact" },
  { name: "Teachers", href: "http://localhost:8000/teach/courses/", isExternal: true },
  { name: "Alumni", href: "/#contact" },
  { name: "Administration", href: "http://localhost:8000/dashboard/", isExternal: true },
  { name: "Help Desk", href: "/#contact" },
  { name: "Sitemap", href: "/#programs" },
];

const quickApps = [
  {
    title: "Student Portal",
    subtitle: "Course registrations, grades & attendance",
    href: "http://localhost:8000/me/courses/",
    icon: GraduationCap,
    badge: "Active",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    isExternal: true,
  },
  {
    title: "Faculty Portal",
    subtitle: "Teaching schedule, grading & classes",
    href: "http://localhost:8000/teach/courses/",
    icon: Users,
    badge: "Faculty",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    isExternal: true,
  },
  {
    title: "Admin Dashboard",
    subtitle: "Staff controls, admissions & departments",
    href: "http://localhost:8000/dashboard/",
    icon: ShieldCheck,
    badge: "Admin",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    isExternal: true,
  },
  {
    title: "Online Admission",
    subtitle: "Apply for 2026 session with bKash fee",
    href: "/apply",
    icon: Laptop,
    badge: "Open",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    isExternal: false,
  },
  {
    title: "Faculty Directory",
    subtitle: "22 authentic instructors & dept heads",
    href: "/faculty-members",
    icon: BookOpen,
    badge: "22 Staff",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    isExternal: false,
  },
  {
    title: "Help Desk & Hotline",
    subtitle: "+880 1713-493240 admission inquiry",
    href: "/#contact",
    icon: PhoneCall,
    badge: "Support",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    isExternal: false,
  },
];

export default function Navbar({ onOpenSearch }: { onOpenSearch?: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [appsOpen, setAppsOpen] = useState(false);
  const appsRef = useRef<HTMLDivElement>(null);

  // Close apps launcher on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (appsRef.current && !appsRef.current.contains(event.target as Node)) {
        setAppsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
        {/* Tier 1: Utility Bar (Desktop: lg and up) */}
        <div className="hidden lg:block w-full bg-[#FAFBFD] border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-end">
            <nav className="flex items-center space-x-3 xl:space-x-4 text-[12px] font-medium text-slate-500">
              {topUtilityLinks.map((item, idx) => (
                <React.Fragment key={item.name}>
                  {item.isExternal ? (
                    <a
                      href={item.href}
                      className="hover:text-[#0A44B6] transition-colors"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="hover:text-[#0A44B6] transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                  {idx < topUtilityLinks.length - 1 && (
                    <span className="text-gray-200 select-none">|</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </div>
        </div>

        {/* Tier 2: Primary Navigation Bar */}
        <div className="w-full bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-[68px] sm:h-[76px] lg:h-[80px] flex items-center justify-between gap-3 sm:gap-4">
            
            {/* Left: Brand Identity (Enlarged Official Crest & Typography) */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 group flex-shrink-0 py-1">
              <div className="relative w-11 h-11 sm:w-13 sm:h-13 lg:w-[54px] lg:h-[54px] flex-shrink-0 transition-transform duration-200 group-hover:scale-105 drop-shadow-sm">
                <Image
                  src="/daffodil-crest.svg"
                  alt="DIET Crest"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col text-left select-none justify-center">
                <span className="font-black text-[14px] sm:text-[17px] lg:text-[18.5px] leading-tight text-[#09285F] tracking-tight whitespace-nowrap">
                  DAFFODIL INSTITUTE
                </span>
                <span className="font-bold text-[8.5px] sm:text-[10px] lg:text-[10.5px] leading-tight text-[#D97706] tracking-[0.06em] mt-0.5 whitespace-nowrap">
                  OF ENGINEERING &amp; TECHNOLOGY
                </span>
              </div>
            </Link>

            {/* Center: Main Navigation Menu (Desktop) */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-[14px] xl:text-[14.5px] font-medium text-[#1E293B] hover:text-[#0A44B6] transition-colors rounded-lg hover:bg-slate-50"
                  >
                    <span>{item.name}</span>
                    {item.dropdown && (
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 text-slate-400 group-hover:text-[#0A44B6] ${
                          activeDropdown === item.name ? "rotate-180 text-[#0A44B6]" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.16, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-1.5 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 py-2.5 z-50 overflow-hidden"
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 hover:bg-[#F8FAFC] transition group/sub"
                          >
                            <div className="text-[13.5px] font-semibold text-[#1E293B] group-hover/sub:text-[#0A44B6] flex items-center justify-between">
                              <span>{subItem.name}</span>
                              <ChevronDown size={11} className="-rotate-90 text-gray-300 opacity-0 group-hover/sub:opacity-100 transition-opacity" />
                            </div>
                            {subItem.desc && (
                              <div className="text-[11.5px] text-slate-500 line-clamp-1 mt-0.5">
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
            </nav>

            {/* Right: Actions (Search, Apply Now, Apps Grid) */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={onOpenSearch}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-slate-600 hover:text-[#0A44B6] hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Search"
              >
                <Search className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={2.2} />
              </motion.button>

              {/* Apply Now Button (DIU / DIET Signature Blue Pill/Rounded) */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center bg-[#0A44B6] hover:bg-[#083896] text-white font-bold text-[12.5px] sm:text-[13.5px] px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap"
                >
                  <span>Apply Now</span>
                </Link>
              </motion.div>

              {/* Apps Launcher Button (3x3 Grid Icon) */}
              <div className="relative" ref={appsRef}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() => setAppsOpen(!appsOpen)}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg border flex items-center justify-center transition-colors cursor-pointer ${
                    appsOpen
                      ? "border-[#0A44B6] bg-blue-50/60 text-[#0A44B6]"
                      : "border-gray-200 text-slate-700 hover:text-[#0A44B6] hover:border-blue-200 hover:bg-blue-50/40"
                  }`}
                  aria-label="Quick Apps and Portals"
                >
                  <LayoutGrid className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={2.2} />
                </motion.button>

                {/* Quick Portals & Apps Popover */}
                <AnimatePresence>
                  {appsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.16, ease: "easeOut" }}
                      className="absolute right-0 top-full mt-2 w-[310px] sm:w-[350px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50"
                    >
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
                        <div className="flex items-center gap-2">
                          <LayoutGrid className="w-4 h-4 text-[#0A44B6]" />
                          <span className="font-bold text-xs uppercase tracking-wider text-slate-800">
                            DIET Portals &amp; Apps
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-400">Quick Access</span>
                      </div>

                      <div className="grid grid-cols-1 gap-2">
                        {quickApps.map((app) => {
                          const Icon = app.icon;
                          const content = (
                            <div className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#F8FAFC] border border-transparent hover:border-gray-100 transition group/app">
                              <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0A44B6] flex items-center justify-center flex-shrink-0 group-hover/app:bg-[#0A44B6] group-hover/app:text-white transition-colors">
                                  <Icon size={17} />
                                </div>
                                <div>
                                  <div className="text-[13px] font-semibold text-[#1E293B] group-hover/app:text-[#0A44B6] transition-colors flex items-center gap-1.5">
                                    <span>{app.title}</span>
                                    {app.isExternal && <ExternalLink size={10} className="text-slate-400" />}
                                  </div>
                                  <div className="text-[11px] text-slate-500 line-clamp-1">
                                    {app.subtitle}
                                  </div>
                                </div>
                              </div>
                              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${app.badgeColor}`}>
                                {app.badge}
                              </span>
                            </div>
                          );

                          return app.isExternal ? (
                            <a
                              key={app.title}
                              href={app.href}
                              onClick={() => setAppsOpen(false)}
                            >
                              {content}
                            </a>
                          ) : (
                            <Link
                              key={app.title}
                              href={app.href}
                              onClick={() => setAppsOpen(false)}
                            >
                              {content}
                            </Link>
                          );
                        })}
                      </div>

                      <div className="mt-3 pt-3 border-t border-gray-100 text-center">
                        <Link
                          href="/apply"
                          onClick={() => setAppsOpen(false)}
                          className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-[#FAFBFD] hover:bg-blue-50 text-[#0A44B6] text-xs font-bold transition border border-gray-100"
                        >
                          <span>Go to Online Admission Form</span>
                          <Sparkles size={13} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Hamburger Menu Toggle (Mobile / Tablet) */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" strokeWidth={2.4} />
                ) : (
                  <Menu className="w-5 h-5" strokeWidth={2.4} />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="lg:hidden bg-white border-t border-gray-100 px-5 py-4 shadow-xl overflow-hidden max-h-[82vh] overflow-y-auto"
            >
              {/* Top CTA in Mobile Drawer */}
              <div className="pb-3 border-b border-gray-100 mb-3 flex items-center gap-2">
                <Link
                  href="/apply"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-2.5 text-center bg-[#0A44B6] text-white text-xs font-bold rounded-lg shadow-sm"
                >
                  Apply for Admission
                </Link>
                <a
                  href="http://localhost:8000/me/courses/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 text-center bg-blue-50 text-[#0A44B6] text-xs font-bold rounded-lg border border-blue-200"
                >
                  Student Portal
                </a>
              </div>

              {/* Main Nav Items */}
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <div key={item.name} className="border-b border-gray-50 pb-2">
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-[14.5px] font-bold text-[#1E293B]"
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
                            className="block text-[13px] text-slate-600 hover:text-[#0A44B6] py-0.5"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Utility Links Section in Mobile Drawer */}
              <div className="pt-4 mt-3 border-t border-gray-100">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Quick Links &amp; Portals
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                  {topUtilityLinks.map((util) =>
                    util.isExternal ? (
                      <a
                        key={util.name}
                        href={util.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-1.5 rounded-md hover:bg-slate-50 hover:text-[#0A44B6] transition"
                      >
                        {util.name}
                      </a>
                    ) : (
                      <Link
                        key={util.name}
                        href={util.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-1.5 rounded-md hover:bg-slate-50 hover:text-[#0A44B6] transition"
                      >
                        {util.name}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer so the page content starts right beneath the fixed navbar */}
      <div className="h-[68px] sm:h-[76px] lg:h-[112px] w-full flex-shrink-0" aria-hidden="true" />
    </>
  );
}
