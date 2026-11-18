"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ArrowRight, X, ExternalLink, Award } from "lucide-react";

interface MessageItem {
  id: string;
  role: string;
  name: string;
  designation: string;
  image: string;
  title: string;
  bengaliExcerpt: string;
  bengaliFull: string;
  englishFull: string;
  url: string;
}

const leadershipMessages: MessageItem[] = [
  {
    id: "chairman",
    role: "Chairman Message",
    name: "Dr. Md. Sabur Khan",
    designation: "Chairman, Daffodil Family & DIET",
    image: "/diet/leaders/chairman-dr-sabur-khan.webp",
    title: "Chairman Message",
    bengaliExcerpt:
      "বাংলাদেশের প্রেক্ষাপটে কারিগরি ও বৃত্তিমূলক শিক্ষা নতুন যুগে প্রবেশ করেছে। আর শিক্ষা খাতে…",
    bengaliFull:
      "বাংলাদেশের কারিগরি ও শিক্ষা খাত একটি প্রতিস্থাপন যুগে প্রবেশ করেছে। আমাদের প্রযুক্তি এবং দক্ষতা সহ একটি তরুণ সমাজ তৈরি করতে হবে। বিকাশমান যুব সমাজ বর্তমানে দেশের উন্নয়নের প্রধান চালিকাশক্তি। প্রতিক্রিয়া হিসাবে, ড্যাফোডিল ইনস্টিটিউট অফ ইঞ্জিনিয়ারিং অ্যান্ড টেকনোলজি বৈশ্বিক বাজারের চাহিদা অনুসারে প্রতিষ্ঠিত হয়েছে। DIET শিক্ষার্থীদের আধুনিক বিশ্বের প্রযুক্তিগত প্রেক্ষাপট, সক্ষমতা এবং ব্যবহারিক দক্ষতার মধ্যে স্ব-নির্দেশিত হতে উৎসাহিত করে। আমি বিশ্বাস করি DIET বিশ্বের অন্যতম প্রধান কারিগরি শিক্ষা প্রতিষ্ঠান হিসেবে নিজেকে প্রতিষ্ঠিত করবে।",
    englishFull:
      "The technical and vocational education sector in Bangladesh has entered a transformational era. We must build a skilled youth society equipped with cutting-edge technology and problem-solving abilities. Daffodil Institute of Engineering & Technology has been established to meet global industry demands, preparing students for exemplary professional achievements worldwide.",
    url: "https://diet.ac/chairman-message/",
  },
  {
    id: "ceo",
    role: "CEO Message",
    name: "Mohammad Nuruzzaman",
    designation: "Chief Executive Officer (CEO), Daffodil Family",
    image: "/diet/leaders/ceo-dr-nuruzzaman.webp",
    title: "CEO Message",
    bengaliExcerpt:
      "শিক্ষার্থীদের ব্যক্তিগত ও প্রাতিষ্ঠানিক সকল চ্যালেঞ্জ মোকাবেলা করতে সক্ষম হয়ে গড়ে উঠার জন্য…",
    bengaliFull:
      "ড্যাফোডিল ইনস্টিটিউট অফ ইঞ্জিনিয়ারিং অ্যান্ড টেকনোলজি ডিপ্লোমা শিক্ষার্থীদের জন্য সমস্ত ব্যক্তিগত এবং প্রাতিষ্ঠানিক চ্যালেঞ্জ মোকাবেলায় তাদের দক্ষতা বিকাশের একটি উপযুক্ত প্রতিষ্ঠান। আমরা এই ডিজিটাল যুগে আধুনিক কারিগরি বাজারের চাহিদার সাথে মানানসই পাঠ্যক্রম পরিচালনা করছি, যাতে বিশ্বের সাথে তাল মিলিয়ে দেশকে এগিয়ে নেওয়া যায়। ড্যাফোডিল ইনস্টিটিউট উচ্চমানের ব্যবহারিক শিক্ষার মাধ্যমে শিক্ষার্থীদের আইটি ও প্রকৌশল প্রতিভা বিকাশে প্রতিশ্রুতিবদ্ধ।",
    englishFull:
      "Daffodil Institute of Engineering & Technology is the ideal destination for diploma engineering students to cultivate industry-ready competencies. We continuously align our curriculum with digital-age market dynamics, fostering high-caliber technical expertise and entrepreneurial mindsets.",
    url: "https://diet.ac/ceo-message/",
  },
  {
    id: "ed",
    role: "ED Message",
    name: "K M Hasan Ripon",
    designation: "Executive Director (ED), DIET & BSDF",
    image: "/diet/leaders/ed-km-hasan-ripon.webp",
    title: "ED Message",
    bengaliExcerpt:
      "প্রযুক্তির এই যুগে কারিগরি শিক্ষার কোন বিকল্প নেই। বিশ্বের সাথে তাল মিলিয়ে দেশকে এগিয়ে নিতে…",
    bengaliFull:
      "প্রযুক্তির এই যুগে কারিগরি শিক্ষার কোনো বিকল্প নেই। দেশকে এগিয়ে নিয়ে যেতে এবং পৃথিবীর সাথে তাল মেলাতে কারিগরি শিক্ষার অবদান অনস্বীকার্য। ড্যাফোডিল ইনস্টিটিউট আধুনিক ল্যাব, ডিজিটাল ক্লাসরুম ও অভিজ্ঞ শিক্ষকবৃন্দের মাধ্যমে বিশ্বমানের প্রকৌশলী তৈরিতে কাজ করে যাচ্ছে। আমরা শিক্ষার্থীদের কেবল সার্টিফিকেট প্রদানেই সীমাবদ্ধ নই, কোর্স শেষে ১০০% কর্মসংস্থান ও ইন্ডাস্ট্রিয়াল অ্যাটাচমেন্ট নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ।",
    englishFull:
      "There is no substitute for technical and hands-on education in this era of rapid technological acceleration. DIET delivers rigorous practical training across 6 engineering disciplines, ensuring graduates step directly into high-growth engineering careers and higher studies.",
    url: "https://diet.ac/ed-message/",
  },
];

export default function LeadershipMessageSection() {
  const [activeMessage, setActiveMessage] = useState<MessageItem | null>(null);

  return (
    <section className="w-full py-14 sm:py-20 bg-white border-t border-gray-100 overflow-hidden relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-[3px] bg-[#F4B51B] rounded-full inline-block" />
            <span className="font-extrabold text-[12px] sm:text-[13px] text-[#09285F] uppercase tracking-[0.08em]">
              Leadership &amp; Vision
            </span>
            <span className="w-6 h-[3px] bg-[#F4B51B] rounded-full inline-block" />
          </div>

          {/* Main Title (Exact wording matching diet.ac) */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#09285F] tracking-tight">
            Message
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-xl mx-auto leading-relaxed">
            Guiding principles and strategic direction from the leadership of Daffodil Institute of Engineering &amp; Technology.
          </p>
        </div>

        {/* 3 Leadership Message Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {leadershipMessages.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl border border-blue-200/90 hover:border-[#0A44B6] p-5 sm:p-6 flex items-start gap-4 sm:gap-5 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 relative"
            >
              {/* Leader Photo */}
              <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 border border-gray-200/80 shadow-xs">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 80px, 96px"
                />
              </div>

              {/* Vertical Dividing Line */}
              <div className="w-[1.5px] self-stretch bg-gradient-to-b from-[#0A44B6]/60 via-[#0A44B6]/30 to-transparent flex-shrink-0" />

              {/* Content Column */}
              <div className="flex-1 min-w-0 text-left flex flex-col justify-between self-stretch py-0.5">
                <div>
                  {/* Underlined Title (Matching diet.ac exact style) */}
                  <h3 className="text-sm sm:text-base font-bold text-[#09285F] leading-snug mb-1">
                    <span className="underline decoration-[#0A44B6] underline-offset-4 group-hover:text-[#0A44B6] transition-colors">
                      {item.title}
                    </span>
                  </h3>

                  {/* Leader Name */}
                  <div className="text-[11px] sm:text-xs font-semibold text-slate-500 mb-2">
                    {item.name}
                  </div>

                  {/* Bengali Excerpt */}
                  <p className="text-xs sm:text-[12.5px] text-slate-600 leading-relaxed font-normal line-clamp-3">
                    {item.bengaliExcerpt}
                  </p>
                </div>

                {/* Read More Button (Triggers Lightbox Modal) */}
                <div className="pt-3 mt-2">
                  <button
                    type="button"
                    onClick={() => setActiveMessage(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A44B6] hover:text-[#083896] transition-colors cursor-pointer group/link"
                  >
                    <span>Read More</span>
                    <ArrowRight size={12} strokeWidth={2.4} className="group-hover/link:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* =========================================================
          FULL MESSAGE LIGHTBOX MODAL
      ========================================================= */}
      <AnimatePresence>
        {activeMessage && (
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setActiveMessage(null)}
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
                onClick={() => setActiveMessage(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition cursor-pointer"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>

              {/* Modal Header */}
              <div className="p-6 sm:p-7 border-b border-gray-100 bg-[#FAFBFD] flex items-center gap-4 sm:gap-5 text-left">
                <div className="relative w-16 h-20 sm:w-20 sm:h-24 rounded-2xl overflow-hidden bg-slate-200 flex-shrink-0 border border-gray-200">
                  <Image
                    src={activeMessage.image}
                    alt={activeMessage.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[10.5px] font-bold text-[#0A44B6] uppercase tracking-wider mb-1">
                    <Award size={13} />
                    <span>{activeMessage.role}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#09285F] leading-tight">
                    {activeMessage.name}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    {activeMessage.designation}
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-7 space-y-5 text-left">
                {/* Bengali Message */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A44B6] mb-2 flex items-center gap-1.5">
                    <Quote size={13} />
                    <span>বার্তাসমগ্র (বাংলা)</span>
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed font-normal bg-[#F9FBFC] p-4 rounded-2xl border border-gray-100">
                    {activeMessage.bengaliFull}
                  </p>
                </div>

                {/* English Message */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Official English Statement
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {activeMessage.englishFull}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <a
                    href={activeMessage.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A44B6] hover:underline"
                  >
                    <span>View on diet.ac</span>
                    <ExternalLink size={12} />
                  </a>

                  <button
                    type="button"
                    onClick={() => setActiveMessage(null)}
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
