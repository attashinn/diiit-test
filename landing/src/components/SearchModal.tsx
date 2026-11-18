"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight, BookOpen, Building, GraduationCap } from "lucide-react";
import { PORTAL_URLS } from "@/lib/config";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const quickLinks = [
  { title: "B.Sc. in Computer Science & Engineering", type: "Program", category: "Academics", href: "#departments" },
  { title: "B.Sc. in Electrical & Electronic Engineering", type: "Program", category: "Academics", href: "#departments" },
  { title: "B.Sc. in Civil Engineering", type: "Program", category: "Academics", href: "#departments" },
  { title: "Spring 2027 Admission Deadlines", type: "Notice", category: "Admission", href: "#admission" },
  { title: "Merit-based Tuition Fee Waivers", type: "Scholarship", category: "Finance", href: "#admission" },
  { title: "Student Academic Dashboard", type: "Portal", category: "System", href: PORTAL_URLS.login },
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  const filteredLinks = query.trim()
    ? quickLinks.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      )
    : quickLinks;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-6 py-4 border-b border-gray-100">
              <Search size={20} className="text-gray-400 mr-3 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search programs, faculties, admissions, courses..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                className="w-full text-base font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none"
              />
              {query ? (
                <button
                  onClick={() => setQuery("")}
                  className="text-gray-400 hover:text-gray-600 mr-2 cursor-pointer"
                >
                  <X size={18} />
                </button>
              ) : null}
              <button
                onClick={onClose}
                className="px-2 py-1 text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-md ml-2 cursor-pointer"
              >
                ESC
              </button>
            </div>

            {/* Results List */}
            <div className="p-4 max-h-[380px] overflow-y-auto space-y-1">
              <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 px-3 py-1">
                {query ? "Matching Results" : "Quick Suggestions"}
              </div>

              {filteredLinks.length > 0 ? (
                filteredLinks.map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.href}
                    onClick={onClose}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-[#F7F8FA] transition group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#123DB8]/10 text-[#123DB8] flex items-center justify-center">
                        {item.type === "Program" ? (
                          <GraduationCap size={16} />
                        ) : item.type === "Scholarship" ? (
                          <BookOpen size={16} />
                        ) : (
                          <Building size={16} />
                        )}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900 group-hover:text-[#123DB8]">
                          {item.title}
                        </div>
                        <div className="text-xs text-gray-500">{item.category} • {item.type}</div>
                      </div>
                    </div>
                    <ArrowRight size={16} className="text-gray-400 group-hover:text-[#123DB8] group-hover:translate-x-0.5 transition" />
                  </motion.a>
                ))
              ) : (
                <div className="text-center py-8 text-sm text-gray-500">
                  No results found for &quot;{query}&quot;
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
