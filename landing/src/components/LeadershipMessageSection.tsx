"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  ArrowRight,
  X,
  Award,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Building2,
} from "lucide-react";

interface LeadershipMessage {
  id: string;
  role: string;
  roleBadge: string;
  badgeStyle: string;
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
    role: "Chairman's Vision",
    roleBadge: "Chairman",
    badgeStyle: "bg-[#09285F] text-[#F4B51B] border-white/20",
    name: "Dr. Md. Sabur Khan",
    designation: "Chairman",
    organization: "Daffodil Family & DIET",
    image: "/diet/leaders/chairman-dr-sabur-khan.webp",
    quoteBengali:
      "বাংলাদেশের প্রেক্ষাপটে কারিগরি ও বৃত্তিমূলক শিক্ষা নতুন যুগে প্রবেশ করেছে। DIET শিক্ষার্থীদের আধুনিক বিশ্বের প্রযুক্তিগত দক্ষতায় স্ব-নির্দেশিত হতে উৎসাহিত করে।",
    quoteEnglish:
      "Technical and vocational education in Bangladesh has entered a transformational era. DIET empowers students with world-class engineering mastery and global vision.",
    fullBengali:
      "বাংলাদেশের কারিগরি ও শিক্ষা খাত একটি প্রতিস্থাপন যুগে প্রবেশ করেছে। আমাদের প্রযুক্তি এবং দক্ষতা সহ একটি তরুণ সমাজ তৈরি করতে হবে। বিকাশমান যুব সমাজ বর্তমানে দেশের উন্নয়নের প্রধান চালিকাশক্তি। প্রতিক্রিয়া হিসাবে, ড্যাফোডিল ইনস্টিটিউট অফ ইঞ্জিনিয়ারিং অ্যান্ড টেকনোলজি বৈশ্বিক বাজারের চাহিদা অনুসারে প্রতিষ্ঠিত হয়েছে। DIET শিক্ষার্থীদের আধুনিক বিশ্বের প্রযুক্তিগত প্রেক্ষাপট, সক্ষমতা এবং ব্যবহারিক দক্ষতার মধ্যে স্ব-নির্দেশিত হতে উৎসাহিত করে। আমি বিশ্বাস করি DIET বিশ্বের অন্যতম প্রধান কারিগরি শিক্ষা প্রতিষ্ঠান হিসেবে নিজেকে প্রতিষ্ঠিত করবে।",
    fullEnglish:
      "The technical and vocational education sector in Bangladesh has entered a transformational era. We must build a skilled youth society equipped with cutting-edge technology and problem-solving abilities. Daffodil Institute of Engineering & Technology has been established to meet global industry demands, preparing students for exemplary professional achievements worldwide.",
    url: "https://diet.ac/chairman-message/",
  },
  {
    id: "ceo",
    role: "CEO's Directive",
    roleBadge: "Chief Executive Officer",
    badgeStyle: "bg-[#0A44B6] text-white border-white/20",
    name: "Mohammad Nuruzzaman",
    designation: "Chief Executive Officer (CEO)",
    organization: "Daffodil Family",
    image: "/diet/leaders/ceo-dr-nuruzzaman.webp",
    quoteBengali:
      "ডিপ্লোমা শিক্ষার্থীদের সমস্ত চ্যালেঞ্জ মোকাবেলা করতে সক্ষম করে তোলার পাশাপাশি তাদের আধুনিক আইটি ও কারিগরি প্রতিভা বিকাশে আমরা প্রতিশ্রুতিবদ্ধ।",
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
    role: "Executive Director's Message",
    roleBadge: "Executive Director",
    badgeStyle: "bg-slate-900 text-white border-white/20",
    name: "K M Hasan Ripon",
    designation: "Executive Director (ED)",
    organization: "DIET & BSDF",
    image: "/diet/leaders/ed-km-hasan-ripon.webp",
    quoteBengali:
      "প্রযুক্তির এই যুগে কারিগরি শিক্ষার কোনো বিকল্প নেই। আধুনিক ল্যাব ও ব্যবহারিক প্রশিক্ষণের মাধ্যমে আমরা বিশ্বমানের প্রকৌশলী গড়ে তুলছি।",
    quoteEnglish:
      "There is no substitute for hands-on technical education. DIET delivers rigorous practical training across 6 engineering disciplines with guaranteed placement linkage.",
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
    <section id="leadership" className="w-full py-16 sm:py-24 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================
            SECTION HEADER
        ========================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          {/* Overline Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-gray-200 text-[#09285F] text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-3.5">
            <Award size={14} className="text-[#F4B51B]" />
            <span>Governance &bull; Leadership Vision</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#09285F] tracking-tight leading-[1.14] mb-3.5">
            Guiding Vision from Our <span className="text-[#0A44B6]">Leadership</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Strategic direction, educational philosophy, and future commitments from the leaders shaping Bangladesh&apos;s premier engineering polytechnic.
          </p>
        </div>

        {/* =========================================================
            3 HIGH-END EXECUTIVE VISION CARDS
        ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className="group bg-white rounded-3xl border border-gray-200/90 hover:border-gray-300 hover:shadow-xl transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                {/* Executive Portrait Container */}
                <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-slate-100 mb-5 shadow-xs">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Role Chip at Top Right */}
                  <div className="absolute top-3 right-3 z-10">
                    <span
                      className={`text-[10px] sm:text-[10.5px] font-black uppercase tracking-wider px-3 py-1 rounded-full border shadow-xs ${leader.badgeStyle}`}
                    >
                      {leader.roleBadge}
                    </span>
                  </div>

                  {/* Golden Floating Quote Icon */}
                  <div className="absolute -bottom-1 left-4 z-10 w-9 h-9 rounded-xl bg-white shadow-md border border-gray-100 flex items-center justify-center text-[#F4B51B]">
                    <Quote size={16} className="fill-[#F4B51B]" />
                  </div>
                </div>

                {/* Leader Identity */}
                <div className="text-left mb-4">
                  <h3 className="text-xl sm:text-[22px] font-black text-[#09285F] group-hover:text-[#0A44B6] transition-colors leading-tight mb-1">
                    {leader.name}
                  </h3>
                  <div className="text-xs font-bold text-[#0A44B6]">
                    {leader.designation} &bull; <span className="text-slate-500 font-semibold">{leader.organization}</span>
                  </div>
                </div>

                {/* Bengali Message Excerpt */}
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal mb-3 text-left bg-slate-50 p-3.5 rounded-xl border border-gray-100">
                  &ldquo;{leader.quoteBengali}&rdquo;
                </p>

                {/* English Context Line */}
                <p className="text-[11.5px] sm:text-xs text-slate-500 leading-relaxed font-normal text-left italic line-clamp-2">
                  {leader.quoteEnglish}
                </p>
              </div>

              {/* Bottom Action: Read Full Statement */}
              <div className="pt-5 mt-5 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setSelectedLeader(leader)}
                  className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-[#09285F] group-hover:text-white text-slate-700 text-xs font-bold transition-all duration-200 cursor-pointer"
                >
                  <span>Read Full Statement</span>
                  <ArrowRight
                    size={13}
                    strokeWidth={2.4}
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
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedLeader(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition cursor-pointer"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>

              {/* Modal Header */}
              <div className="p-6 sm:p-7 border-b border-gray-100 bg-[#FAFBFD] flex items-center gap-4 sm:gap-5 text-left">
                <div className="relative w-18 h-22 sm:w-22 sm:h-26 rounded-2xl overflow-hidden bg-slate-200 flex-shrink-0 border border-gray-200 shadow-xs">
                  <Image
                    src={selectedLeader.image}
                    alt={selectedLeader.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[10.5px] font-bold text-[#0A44B6] uppercase tracking-wider mb-1">
                    <Award size={13} />
                    <span>{selectedLeader.role}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#09285F] leading-tight">
                    {selectedLeader.name}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    {selectedLeader.designation} &bull; {selectedLeader.organization}
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-7 space-y-5 text-left">
                {/* Bengali Message */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A44B6] mb-2 flex items-center gap-1.5">
                    <Quote size={13} className="fill-[#0A44B6]" />
                    <span>বার্তাসমগ্র (বাংলা)</span>
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed font-normal bg-[#F9FBFC] p-4 sm:p-5 rounded-2xl border border-gray-100">
                    {selectedLeader.fullBengali}
                  </p>
                </div>

                {/* English Message */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Official English Statement
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {selectedLeader.fullEnglish}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <a
                    href={selectedLeader.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A44B6] hover:underline"
                  >
                    <span>View on Official DIET Portal</span>
                    <ExternalLink size={12} />
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedLeader(null)}
                    className="text-xs font-bold px-5 py-2.5 rounded-full bg-[#09285F] text-white hover:bg-[#071f4a] transition cursor-pointer"
                  >
                    Close
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
