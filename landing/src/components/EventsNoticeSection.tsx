"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  ArrowRight,
  Newspaper,
  Megaphone,
  FileText,
  X,
  Clock,
  Tag,
} from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  date: string;
  image?: string;
  description?: string;
  category: string;
  author?: string;
  fullContent?: string;
}

interface NoticeItem {
  id: string;
  title: string;
  date: string;
  tag: string;
  content?: string;
}

const notices: NoticeItem[] = [
  {
    id: "notice-1",
    title: "Spring 2027 Admission Now Open",
    date: "Nov 08, 2026",
    tag: "Admission",
    content:
      "Applications are invited for admission into 4-Year Diploma in Engineering programs for Spring 2027. Students with minimum GPA 2.00 in SSC can apply online or in person at the Dhanmondi campus.",
  },
  {
    id: "notice-2",
    title: "Semester Final Exam Schedule (Fall 2026)",
    date: "Nov 05, 2026",
    tag: "Examination",
    content:
      "BTEB Fall 2026 semester final examinations will commence from December 15, 2026. Students are advised to collect their admit cards and clear dues before December 05, 2026.",
  },
  {
    id: "notice-3",
    title: "Fee Payment Deadline Reminder",
    date: "Nov 03, 2026",
    tag: "Finance",
    content:
      "The last date for semester tuition fee installment payment without late penalty is November 20, 2026. Payments can be completed via bKash, Nagad, or Accounts Office.",
  },
  {
    id: "notice-4",
    title: "Class Routine Update – All Departments",
    date: "Oct 30, 2026",
    tag: "Academic",
    content:
      "Revised class and laboratory schedules for 3rd and 5th semester students are now effective. Please check the departmental notice board or download the updated timetable PDF.",
  },
];

const subNews: NewsItem[] = [
  {
    id: "news-1",
    title: "Industry Expert Session on AI and Future Engineering",
    date: "Nov 04, 2026",
    image: "/diet/news-expert-session.webp",
    category: "Seminar",
    description:
      "Distinguished guest speakers from international tech firms conducted an in-depth seminar on applied machine learning and automation.",
  },
  {
    id: "news-2",
    title: "DIET Green Campus Initiative Launched",
    date: "Oct 28, 2026",
    image: "/diet/news-green-campus.webp",
    category: "Environment",
    description:
      "Student volunteers and faculty members planted over 200 indigenous saplings across the campus perimeter to promote sustainability.",
  },
  {
    id: "news-3",
    title: "Inter-Department Hackathon 2026 Concludes",
    date: "Oct 22, 2026",
    image: "/diet/news-hackathon.webp",
    category: "Hackathon",
    description:
      "36 student teams competed in a 24-hour sprint developing smart-city solutions, with Team Circuit Breakers winning the top prize.",
  },
];

export default function EventsNoticeSection() {
  const [activeTab, setActiveTab] = useState<"news" | "events" | "notices">("news");
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);

  const featuredNews: NewsItem = {
    id: "feat-1",
    title: "DIET Students Win National Robotics Competition 2026",
    date: "Nov 06, 2026",
    image: "/diet/news-featured-robotics-clean.webp",
    category: "Robotics",
    description:
      "A student team from DIET has secured the championship title at the National Robotics Competition 2026, showcasing innovation and technical excellence.",
  };

  return (
    <section id="news" className="w-full py-16 sm:py-20 bg-white border-t border-gray-100 overflow-hidden scroll-mt-24">
      <span id="events" className="block -mt-24 pt-24 invisible" />
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-7 sm:mb-8">
          <div>
            {/* Top Kicker with Gold Bar */}
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-[3px] bg-[#F4B51B] rounded-full inline-block" />
              <span className="text-[12.5px] sm:text-[13.5px] font-extrabold text-[#09285F] tracking-tight">
                News, Events &amp; Notices
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#09285F] tracking-[-0.025em] leading-[1.12] mb-2.5">
              Stay Updated with <span className="text-[#F4B51B]">DIET</span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-[14.5px] text-[#667085] leading-relaxed max-w-xl font-normal">
              Latest news, upcoming events, and important notices from the campus.
            </p>
          </div>

          {/* View All Updates Button */}
          <div className="flex-shrink-0">
            <Link
              href="#events"
              className="inline-flex items-center gap-2 border border-[#09285F] text-[#09285F] hover:bg-[#09285F] hover:text-white rounded-full px-5 sm:px-6 py-2 sm:py-2.5 font-bold text-xs sm:text-[13px] transition-all duration-200"
            >
              <span>View All Updates</span>
              <ArrowRight size={14} strokeWidth={2.4} />
            </Link>
          </div>
        </div>

        {/* 3 Filter Tabs (Pill Buttons) */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-7 sm:mb-8">
          {[
            { id: "news", label: "Latest News", icon: Newspaper },
            { id: "events", label: "Upcoming Events", icon: Calendar },
            { id: "notices", label: "Notices", icon: Megaphone },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-[12.5px] font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#09285F] text-white shadow-sm"
                    : "bg-[#F0F4FA] text-[#09285F] hover:bg-[#E2E8F0]"
                }`}
              >
                <Icon size={14} strokeWidth={2.2} />
                <span>{tab.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Main Content Grid: Left Column (7 cols) + Right Column (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
          {/* Left Column (7 cols): Featured Card on Top + 3 News Cards Below */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
            {/* 1. Large Featured News Card */}
            <motion.div
              onClick={() => setSelectedNews(featuredNews)}
              whileHover={{
                y: -4,
                boxShadow: "0 20px 35px -10px rgba(0, 0, 0, 0.18)",
                transition: { duration: 0.22 },
              }}
              className="group relative rounded-[24px] overflow-hidden h-[270px] sm:h-[275px] flex flex-col justify-between p-5 sm:p-6 border border-gray-200/90 cursor-pointer bg-[#0A192F]"
            >
              {/* Background Photo */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={featuredNews.image!}
                  alt={featuredNews.title}
                  fill
                  priority
                  className="object-cover object-top group-hover:scale-108 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B172E] via-[#0B172E]/65 to-transparent" />
              </div>

              {/* Top Row: "Featured" Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="bg-[#F4B51B] text-[#09285F] font-extrabold text-[11px] px-3 py-1 rounded-full shadow-sm">
                  Featured
                </span>
              </div>

              {/* Bottom Content: Date, Headline, Description, Right Arrow */}
              <div className="relative z-10">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-300 mb-1.5">
                  <Calendar size={12} className="text-[#F4B51B]" />
                  <span>{featuredNews.date}</span>
                </div>

                <div className="flex items-end justify-between gap-4">
                  <div className="max-w-xl">
                    <h3 className="text-base sm:text-[20px] font-black text-white leading-tight mb-1.5 group-hover:text-[#F4B51B] transition-colors">
                      {featuredNews.title}
                    </h3>
                    <p className="text-[11.5px] sm:text-[12px] text-slate-300 leading-snug line-clamp-2">
                      {featuredNews.description}
                    </p>
                  </div>

                  {/* Circular White Arrow Button */}
                  <div className="w-8 h-8 rounded-full bg-white text-[#09285F] flex items-center justify-center flex-shrink-0 group-hover:bg-[#F4B51B] transition-colors group-hover:scale-105">
                    <ArrowRight size={14} strokeWidth={2.4} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2. Row of 3 Sub-News Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
              {subNews.map((news, idx) => (
                <motion.div
                  key={news.id}
                  onClick={() => setSelectedNews(news)}
                  whileHover={{
                    y: -4,
                    borderColor: "rgba(18, 61, 184, 0.35)",
                    boxShadow: "0 12px 24px -6px rgba(0,0,0,0.06)",
                    transition: { duration: 0.2 },
                  }}
                  className="group bg-white rounded-[20px] border border-gray-200/90 p-2.5 sm:p-3 flex flex-col justify-between transition-colors cursor-pointer h-[165px]"
                >
                  <div>
                    {/* Thumbnail Image */}
                    <div className="relative aspect-[16/8.5] w-full rounded-[12px] overflow-hidden mb-2 bg-slate-100">
                      <Image
                        src={news.image!}
                        alt={news.title}
                        fill
                        className="object-cover group-hover:scale-108 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, 20vw"
                      />
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-1.5 text-[10.5px] text-[#667085] mb-1">
                      <Calendar size={11} className="text-[#F4B51B]" />
                      <span>{news.date}</span>
                    </div>

                    {/* Title */}
                    <h4 className="text-[12px] font-extrabold text-[#09285F] leading-snug line-clamp-2 group-hover:text-[#123DB8] transition-colors">
                      {news.title}
                    </h4>
                  </div>

                  {/* Bottom Row: Subtle Arrow Indicator */}
                  <div className="flex justify-end pt-1">
                    <div className="w-5 h-5 rounded-full border border-gray-200 text-[#09285F] flex items-center justify-center group-hover:border-[#123DB8] group-hover:text-[#123DB8] transition-colors group-hover:scale-105">
                      <ArrowRight size={9} strokeWidth={2.4} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column (5 cols): Important Notices Box + Upcoming Event Banner */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
            {/* 1. Important Notices Box */}
            <div
              className="bg-white rounded-[24px] border border-gray-200/90 p-4 sm:p-5 flex flex-col justify-between h-[270px] sm:h-[275px] shadow-sm"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-2.5 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <Megaphone size={18} className="text-[#F4B51B]" />
                  <h3 className="text-[16px] font-extrabold text-[#09285F]">
                    Important Notices
                  </h3>
                </div>

                <Link
                  href="#events"
                  className="inline-flex items-center gap-1 text-[11.5px] font-bold text-[#09285F] hover:text-[#123DB8] transition"
                >
                  <span>View All</span>
                  <ArrowRight size={11} strokeWidth={2.4} />
                </Link>
              </div>

              {/* 4 Notices List */}
              <div className="divide-y divide-gray-100 flex-1 flex flex-col justify-between py-1">
                {notices.map((notice) => (
                  <motion.div
                    key={notice.id}
                    onClick={() => setSelectedNotice(notice)}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.15 }}
                    className="py-1.5 flex items-center justify-between gap-3 group cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {/* Document Icon in soft blue container */}
                      <div className="w-7 h-7 rounded-lg bg-[#F0F4FA] text-[#123DB8] flex items-center justify-center flex-shrink-0 group-hover:bg-[#123DB8] group-hover:text-white transition-colors">
                        <FileText size={13} strokeWidth={2.2} />
                      </div>

                      {/* Title & Date */}
                      <div className="min-w-0">
                        <h4 className="text-[12px] font-bold text-[#09285F] leading-snug group-hover:text-[#123DB8] transition-colors truncate">
                          {notice.title}
                        </h4>
                        <span className="text-[10px] text-[#667085] block">
                          {notice.date}
                        </span>
                      </div>
                    </div>

                    {/* Tag Badge */}
                    <span className="text-[10px] font-bold text-[#B57C00] bg-[#FEF6E6] border border-[#F4B51B]/40 px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0">
                      {notice.tag}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 2. Upcoming Event Banner Card */}
            <motion.div
              whileHover={{
                y: -3,
                transition: { duration: 0.2 },
              }}
              className="relative bg-gradient-to-br from-[#09285F] via-[#0B357E] to-[#09285F] text-white rounded-[24px] p-5 sm:p-6 overflow-hidden border border-[#123DB8]/40 flex items-center justify-between h-[165px]"
            >
              {/* Subtle Tech Circle Watermark in Background */}
              <div className="absolute -right-6 -bottom-6 w-36 h-36 rounded-full bg-white/5 pointer-events-none" />
              <div className="absolute right-12 -top-10 w-28 h-28 rounded-full bg-[#F4B51B]/5 pointer-events-none" />

              {/* Left Content */}
              <div className="relative z-10 flex-1 min-w-0 pr-3">
                {/* Badge with Live Indicator */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-white/20 bg-white/10 text-[10.5px] font-bold text-white mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Upcoming Event</span>
                </div>

                {/* Event Title */}
                <h3 className="text-lg sm:text-[20px] font-black text-white leading-tight mb-2 truncate">
                  DIET Tech Fest 2026
                </h3>

                {/* Date & Location */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-slate-200 mb-3">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={11} className="text-[#F4B51B]" />
                    <span>Nov 20 &ndash; Nov 22, 2026</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={11} className="text-[#F4B51B]" />
                    <span>DIET Campus</span>
                  </div>
                </div>

                {/* Action CTA Button */}
                <button
                  type="button"
                  onClick={() =>
                    setSelectedNews({
                      id: "tech-fest",
                      title: "DIET Tech Fest 2026",
                      date: "Nov 20 – Nov 22, 2026",
                      category: "Tech Fest",
                      description:
                        "Annual technical symposium featuring robotics battles, project showcase, codeathon, and seminar sessions by corporate leaders.",
                    })
                  }
                  className="inline-flex items-center gap-1.5 bg-[#F4B51B] hover:bg-[#eab01a] text-[#09285F] font-extrabold text-[11px] px-4 py-1.5 rounded-full transition-colors cursor-pointer"
                >
                  <span>Event Details</span>
                  <ArrowRight size={11} strokeWidth={2.4} />
                </button>
              </div>

              {/* Right Side: Modern Minimalist Event Date Block */}
              <div className="relative z-10 shrink-0 hidden sm:flex flex-col items-center justify-center w-20 h-22 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center shadow-inner">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#F4B51B]">
                  NOV
                </span>
                <span className="text-3xl font-black text-white leading-none my-0.5">
                  20
                </span>
                <span className="text-[9px] font-bold text-blue-200 uppercase tracking-wider">
                  2026
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modal Dialog for News Article with AnimatePresence */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedNews(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 320 }}
              className="relative max-w-lg w-full bg-white rounded-3xl overflow-hidden border border-gray-100 p-6 sm:p-7 space-y-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedNews(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-gray-700 flex items-center justify-center transition cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 text-xs font-bold text-[#F4B51B] bg-[#FEF6E6] border border-[#F4B51B]/40 px-3 py-1 rounded-full w-fit">
                <Tag size={12} />
                <span className="text-[#09285F]">{selectedNews.category}</span>
              </div>

              <h3 className="text-xl font-black text-[#09285F] leading-tight">
                {selectedNews.title}
              </h3>

              <div className="flex items-center gap-2 text-xs text-[#667085]">
                <Calendar size={13} className="text-[#F4B51B]" />
                <span>{selectedNews.date}</span>
              </div>

              <p className="text-sm text-[#475467] leading-relaxed">
                {selectedNews.description}
              </p>

              <div className="pt-3 border-t border-gray-100 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedNews(null)}
                  className="bg-[#09285F] text-white text-xs font-bold px-4 py-2 rounded-full cursor-pointer hover:bg-[#123DB8] transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Dialog for Notice Item with AnimatePresence */}
      <AnimatePresence>
        {selectedNotice && (
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedNotice(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 320 }}
              className="relative max-w-lg w-full bg-white rounded-3xl overflow-hidden border border-gray-100 p-6 sm:p-7 space-y-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedNotice(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-gray-700 flex items-center justify-center transition cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 text-xs font-bold text-[#B57C00] bg-[#FEF6E6] border border-[#F4B51B]/40 px-3 py-1 rounded-full w-fit">
                <FileText size={12} />
                <span>{selectedNotice.tag}</span>
              </div>

              <h3 className="text-xl font-black text-[#09285F] leading-tight">
                {selectedNotice.title}
              </h3>

              <div className="flex items-center gap-2 text-xs text-[#667085]">
                <Clock size={13} className="text-[#F4B51B]" />
                <span>Published on {selectedNotice.date}</span>
              </div>

              <p className="text-sm text-[#475467] leading-relaxed">
                {selectedNotice.content}
              </p>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href="#admission"
                  onClick={() => setSelectedNotice(null)}
                  className="inline-flex items-center gap-1.5 text-xs text-[#123DB8] font-bold hover:underline"
                >
                  <span>Take Action</span>
                  <ArrowRight size={12} />
                </Link>
                <button
                  type="button"
                  onClick={() => setSelectedNotice(null)}
                  className="bg-[#09285F] text-white text-xs font-bold px-4 py-2 rounded-full cursor-pointer hover:bg-[#123DB8] transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
