"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Globe, Phone, ArrowUp, GraduationCap } from "lucide-react";
import { PORTAL_URLS } from "@/lib/config";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Right Edge Floating Action Buttons (Matches DIET Portal) */}
      <div className="fixed right-3 sm:right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2.5">
        {/* WhatsApp */}
        <a
          href="https://wa.me/8801713493263"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-200"
        >
          <MessageCircle size={20} className="fill-white" />
        </a>

        {/* Official Website */}
        <a
          href="https://diet.ac"
          target="_blank"
          rel="noopener noreferrer"
          title="Official DIET Website"
          aria-label="Official DIET Website"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#10b981] text-white flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-200"
        >
          <Globe size={20} />
        </a>

        {/* Direct Phone Call */}
        <a
          href="tel:+8801713493263"
          title="Call Admission Hotline"
          aria-label="Call Admission Hotline"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#38bdf8] text-white flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-200"
        >
          <Phone size={19} />
        </a>

        {/* Student Portal Shortcut */}
        <a
          href={PORTAL_URLS.login}
          title="Student & Faculty Portal"
          aria-label="Student & Faculty Portal"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#3b82f6] text-white flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-200"
        >
          <GraduationCap size={20} />
        </a>
      </div>

      {/* Bottom Right Scroll To Top */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          title="Scroll to top"
          aria-label="Scroll to top"
          className="fixed bottom-6 right-5 z-40 w-10 h-10 rounded-full bg-white text-gray-700 border border-gray-300 shadow-md hover:bg-gray-50 hover:text-black flex items-center justify-center transition-all duration-200 cursor-pointer"
        >
          <ArrowUp size={18} strokeWidth={2.2} />
        </button>
      )}
    </>
  );
}
