"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Quote, ExternalLink, Award } from "lucide-react";

interface LeadershipMessage {
  id: string;
  roleBadge: string;
  badgeBg: string;
  accentColor: string;
  name: string;
  designation: string;
  organization: string;
  image: string;
  quoteBengali: string;
  quoteEnglish: string;
  fullBengali: string;
  fullEnglish: string;
  url: string;
}

const leaders: LeadershipMessage[] = [
  {
    id: "chairman",
    roleBadge: "Chairman",
    badgeBg: "bg-[#09285F] text-white",
    accentColor: "border-t-[#09285F]",
    name: "Dr. Md. Sabur Khan",
    designation: "Chairman",
    organization: "Daffodil Family & DIET",
    image: "/diet/leaders/chairman-dr-sabur-khan.webp",
    quoteBengali:
      "বাংলাদেশের প্রেক্ষাপটে কারিগরি ও বৃত্তিমূলক শিক্ষা নতুন যুগে প্রবেশ করেছে। DIET শিক্ষার্থীদের আধুনিক বিশ্বের প্রযুক্তিগত দক্ষতায় স্ব-নির্দেশিত হতে উৎসাহিত করে।",
    quoteEnglish:
      "Technical and vocational education in Bangladesh has entered a transformational era. DIET empowers students with world-class engineering mastery and global vision.",
    fullBengali:
      "বাংলাদেশের প্রেক্ষাপটে কারিগরি ও বৃত্তিমূলক শিক্ষা নতুন যুগে প্রবেশ করেছে। আর শিক্ষা খাতে আমাদের প্রযুক্তি এবং দক্ষতা সহ একটি তরুণ সমাজ তৈরি করতে হবে। বিকাশমান যুব সমাজ বর্তমানে দেশের উন্নয়নের প্রধান চালিকাশক্তি। প্রতিক্রিয়া হিসাবে, ড্যাফোডিল ইনস্টিটিউট অফ ইঞ্জিনিয়ারিং অ্যান্ড টেকনোলজি বৈশ্বিক বাজারের চাহিদা অনুসারে প্রতিষ্ঠিত হয়েছে। DIET শিক্ষার্থীদের আধুনিক বিশ্বের প্রযুক্তিগত প্রেক্ষাপট, সক্ষমতা এবং ব্যবহারিক দক্ষতার মধ্যে স্ব-নির্দেশিত হতে উৎসাহিত করে। আমি বিশ্বাস করি DIET বিশ্বের অন্যতম প্রধান কারিগরি শিক্ষা প্রতিষ্ঠান হিসেবে নিজেকে প্রতিষ্ঠিত করবে।",
    fullEnglish:
      "Technical and vocational education in Bangladesh has entered a transformational era. We must build a skilled youth society equipped with cutting-edge technology and problem-solving abilities. Daffodil Institute of Engineering & Technology has been established to meet global industry demands, preparing students for exemplary professional achievements worldwide.",
    url: "https://diet.ac/chairman-message/",
  },
  {
    id: "ceo",
    roleBadge: "Chief Executive Officer",
    badgeBg: "bg-[#0A44B6] text-white",
    accentColor: "border-t-[#0A44B6]",
    name: "Mohammad Nuruzzaman",
    designation: "CEO",
    organization: "Daffodil Family",
    image: "/diet/leaders/ceo-dr-nuruzzaman.webp",
    quoteBengali:
      "শিক্ষার্থীদের ব্যক্তিগত ও প্রাতিষ্ঠানিক সকল চ্যালেঞ্জ মোকাবেলা করতে সক্ষম হয়ে গড়ে উঠার জন্য DIET একটি আদর্শ প্ল্যাটফর্ম। আমরা কারিগরি বাজারের চাহিদাসম্পন্ন পাঠ্যক্রম পরিচালনা করছি।",
    quoteEnglish:
      "DIET is the dedicated platform for diploma students to develop market-driven skills, bridging academia, emerging technologies, and corporate challenges.",
    fullBengali:
      "ড্যাফোডিল ইনস্টিটিউট অফ ইঞ্জিনিয়ারিং অ্যান্ড টেকনোলজি ডিপ্লোমা শিক্ষার্থীদের জন্য সমস্ত ব্যক্তিগত এবং প্রাতিষ্ঠানিক চ্যালেঞ্জ মোকাবেলায় তাদের দক্ষতা বিকাশের একটি উপযুক্ত প্রতিষ্ঠান। আমরা এই ডিজিটাল যুগে আধুনিক কারিগরি বাজারের চাহিদার সাথে মানানসই পাঠ্যক্রম পরিচালনা করছি, যাতে বিশ্বের সাথে তাল মিলিয়ে দেশকে এগিয়ে নেওয়া যায়। ড্যাফোডিল ইনস্টিটিউট উচ্চমানের ব্যবহারিক শিক্ষার মাধ্যমে শিক্ষার্থীদের আইটি ও প্রকৌশল প্রতিভা বিকাশে প্রতিশ্রুতিবদ্ধ।",
    fullEnglish:
      "Daffodil Institute of Engineering & Technology is the ideal destination for diploma engineering students to cultivate industry-ready competencies. We continuously align our curriculum with digital-age market dynamics, fostering high-caliber technical expertise and entrepreneurial mindsets.",
    url: "https://diet.ac/ceo-message/",
  },
  {
    id: "ed",
    roleBadge: "Executive Director",
    badgeBg: "bg-slate-800 text-white",
    accentColor: "border-t-slate-800",
    name: "K M Hasan Ripon",
    designation: "Executive Director",
    organization: "DIET & BSDF",
    image: "/diet/leaders/ed-km-hasan-ripon.webp",
    quoteBengali:
      "প্রযুক্তির এই যুগে কারিগরি শিক্ষার কোন বিকল্প নেই। আধুনিক ল্যাব ও ব্যবহারিক প্রশিক্ষণের মাধ্যমে আমরা শিক্ষার্থীদের কেবল সার্টিফিকেট নয়, শতভাগ কর্মসংস্থান নিশ্চিতে প্রতিশ্রুতিবদ্ধ।",
    quoteEnglish:
      "There is no substitute for hands-on technical education. DIET delivers rigorous practical training across 6 engineering disciplines with dedicated placement support.",
    fullBengali:
      "প্রযুক্তির এই যুগে কারিগরি শিক্ষার কোনো বিকল্প নেই। দেশকে এগিয়ে নিয়ে যেতে এবং পৃথিবীর সাথে তাল মেলাতে কারিগরি শিক্ষার অবদান অনস্বীকার্য। ড্যাফোডিল ইনস্টিটিউট আধুনিক ল্যাব, ডিজিটাল ক্লাসরুম ও অভিজ্ঞ শিক্ষকবৃন্দের মাধ্যমে বিশ্বমানের প্রকৌশলী তৈরিতে কাজ করে যাচ্ছে। আমরা শিক্ষার্থীদের কেবল সার্টিফিকেট প্রদানেই সীমাবদ্ধ নই, কোর্স শেষে ১০০% কর্মসংস্থান ও ইন্ডাস্ট্রিয়াল অ্যাটাচমেন্ট নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ।",
    fullEnglish:
      "There is no substitute for technical and hands-on education in this era of rapid technological acceleration. DIET delivers rigorous practical training across 6 engineering disciplines, ensuring graduates step directly into high-growth engineering careers and higher studies.",
    url: "https://diet.ac/ed-message/",
  },
];

export default function LeadershipMessageSection() {
  const [selectedLeader, setSelectedLeader] = useState<LeadershipMessage | null>(null);

  return (
    <section id="leadership" className="w-full py-16 sm:py-24 bg-slate-50/70 border-t border-slate-200/70">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-[#09285F] text-[11px] font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Award size={13} className="text-[#F4B51B]" />
            <span>Leadership &bull; Governance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#09285F] tracking-tight">
            Messages from Our Leadership
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-2.5 font-normal leading-relaxed">
            Strategic guidance, educational philosophy, and future commitments from the leaders shaping Bangladesh&apos;s premier engineering polytechnic.
          </p>
        </div>

        {/* 3 Prestigious Executive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className={`bg-white rounded-2xl border border-slate-200/90 border-t-4 ${leader.accentColor} shadow-sm hover:shadow-xl transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group`}
            >
              <div>
                {/* Header: Photo + Name + Role Badge */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden shrink-0 border border-slate-200/80 shadow-xs bg-slate-100">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      sizes="80px"
                    />
                  </div>

                  <div className="min-w-0">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md inline-block mb-1.5 ${leader.badgeBg}`}
                    >
                      {leader.roleBadge}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0A44B6] transition-colors leading-snug truncate">
                      {leader.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium truncate">
                      {leader.designation} &bull; {leader.organization}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-slate-100 w-full mb-4" />

                {/* Bengali Excerpt */}
                <div className="relative">
                  <Quote size={20} className="text-[#0A44B6]/20 fill-[#0A44B6]/10 mb-2" />
                  <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                    &ldquo;{leader.quoteBengali}&rdquo;
                  </p>
                </div>

                {/* English Context Line */}
                <p className="text-[11.5px] text-slate-400 italic mt-3 font-normal line-clamp-2">
                  {leader.quoteEnglish}
                </p>
              </div>

              {/* Bottom Action: Read Full Statement */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setSelectedLeader(leader)}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-50 group-hover:bg-[#09285F] group-hover:text-white text-slate-700 text-xs font-bold transition-all duration-200 cursor-pointer"
                >
                  <span>Read Full Statement</span>
                  <ArrowRight
                    size={14}
                    className="text-slate-400 group-hover:text-[#F4B51B] group-hover:translate-x-1 transition-all"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================
          INTERACTIVE FULL STATEMENT LIGHTBOX MODAL
      ========================================================= */}
      <AnimatePresence>
        {selectedLeader && (
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedLeader(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ type: "spring", damping: 25, stiffness: 320 }}
              className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative bg-gradient-to-r from-[#09285F] via-[#0A44B6] to-[#09285F] text-white p-6 sm:p-8">
                <button
                  type="button"
                  onClick={() => setSelectedLeader(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="relative w-16 h-20 sm:w-20 sm:h-24 rounded-xl overflow-hidden border-2 border-[#F4B51B] shrink-0 shadow-lg bg-slate-900">
                    <Image
                      src={selectedLeader.image}
                      alt={selectedLeader.name}
                      fill
                      className="object-cover object-top"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#F4B51B]">
                      {selectedLeader.roleBadge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white leading-tight mt-0.5">
                      {selectedLeader.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-blue-100 font-medium">
                      {selectedLeader.designation} &bull; {selectedLeader.organization}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Bengali Full Text */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0A44B6] mb-2">
                    <Quote size={14} />
                    <span>মূল বার্তা (বাংলা)</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal whitespace-pre-line">
                    {selectedLeader.fullBengali}
                  </p>
                </div>

                {/* English Translation */}
                <div className="bg-blue-50/50 rounded-2xl p-5 border border-blue-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Official English Statement
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal italic">
                    &ldquo;{selectedLeader.fullEnglish}&rdquo;
                  </p>
                </div>

                {/* Modal Footer */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-gray-100">
                  <a
                    href={selectedLeader.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A44B6] hover:underline"
                  >
                    <span>View on Official DIET Portal</span>
                    <ExternalLink size={13} />
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedLeader(null)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition cursor-pointer"
                  >
                    Close Message
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
