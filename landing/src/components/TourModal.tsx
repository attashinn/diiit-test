"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, MapPin, Building, Award } from "lucide-react";

interface TourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TourModal({ isOpen, onClose }: TourModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 320 }}
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-[#09285F] text-white">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#F4B51B] flex items-center justify-center text-[#09285F]">
                  <Play size={16} className="fill-[#09285F]" />
                </div>
                <div>
                  <h3 className="font-bold text-base leading-tight">DIET Campus Tour</h3>
                  <p className="text-xs text-slate-300">Dhanmondi, Dhaka Campus Overview</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer"
              >
                <X size={18} />
              </motion.button>
            </div>

            {/* Video / Visual Container */}
            <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
              <Image
                src="/diet-bg.png"
                alt="Campus Tour Backdrop"
                fill
                className="object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <motion.a
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.92 }}
                  href="https://www.youtube.com/results?search_query=daffodil+institute+of+engineering+and+technology+campus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-20 h-20 rounded-full bg-[#F4B51B] text-[#09285F] flex items-center justify-center shadow-2xl transition duration-300 cursor-pointer group"
                >
                  <Play size={32} className="fill-[#09285F] ml-1 group-hover:scale-105 transition" />
                </motion.a>
                <div className="mt-4 text-white">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold uppercase tracking-wider mb-2">
                    Virtual Tour &amp; Facility Walkthrough
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold">
                    Experience Bangladesh&apos;s Premier Skill Campus
                  </h4>
                </div>
              </div>
            </div>

            {/* Campus Facilities Breakdown */}
            <div className="p-6 bg-white grid grid-cols-1 sm:grid-cols-3 gap-4 text-left border-t border-gray-100">
              <div className="p-3.5 rounded-2xl bg-[#F7F8FA] border border-gray-100">
                <div className="flex items-center gap-2 text-[#123DB8] font-bold text-sm mb-1">
                  <MapPin size={16} />
                  <span>Prime Location</span>
                </div>
                <p className="text-xs text-gray-600">
                  Modern academic towers in Dhanmondi, Dhaka with rapid transport connectivity.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F7F8FA] border border-gray-100">
                <div className="flex items-center gap-2 text-[#123DB8] font-bold text-sm mb-1">
                  <Building size={16} />
                  <span>20+ Modern Labs</span>
                </div>
                <p className="text-xs text-gray-600">
                  Specialized robotics, IoT, computing, and textile laboratories.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F7F8FA] border border-gray-100">
                <div className="flex items-center gap-2 text-[#123DB8] font-bold text-sm mb-1">
                  <Award size={16} />
                  <span>Career Assistance</span>
                </div>
                <p className="text-xs text-gray-600">
                  Annual job fairs, internship linkages, and 95%+ corporate placement support.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
