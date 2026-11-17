"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#09285F] text-white pt-16 pb-12 border-t border-[#123DB8]/40">
      <div className="max-w-[1340px] mx-auto px-4 md:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand Info (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/daffodil-crest.svg"
                  alt="DIET Crest"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-extrabold text-[15px] leading-tight text-white tracking-[0.01em]">
                  DAFFODIL INSTITUTE
                </span>
                <span className="font-bold text-[10px] leading-tight text-[#F4B51B] tracking-[0.07em]">
                  OF ENGINEERING &amp; TECHNOLOGY
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm pt-2">
              Daffodil Institute of Engineering &amp; Technology (DIET) is Bangladesh&apos;s
              leading skill-based university, preparing agile engineering and business leaders
              through hands-on laboratory experiences.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <motion.a
                whileHover={{ scale: 1.15, rotate: 4 }}
                whileTap={{ scale: 0.9 }}
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F4B51B] hover:text-[#09285F] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, rotate: -4 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F4B51B] hover:text-[#09285F] text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, rotate: 4 }}
                whileTap={{ scale: 0.9 }}
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F4B51B] hover:text-[#09285F] text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, rotate: -4 }}
                whileTap={{ scale: 0.9 }}
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F4B51B] hover:text-[#09285F] text-white flex items-center justify-center transition-colors"
                aria-label="Twitter / X"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Quick Links (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F4B51B]">
              Academics
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="#departments" className="hover:text-white transition">
                  Computer Science (CSE)
                </Link>
              </li>
              <li>
                <Link href="#departments" className="hover:text-white transition">
                  Electrical Eng. (EEE)
                </Link>
              </li>
              <li>
                <Link href="#departments" className="hover:text-white transition">
                  Civil Engineering (CE)
                </Link>
              </li>
              <li>
                <Link href="#departments" className="hover:text-white transition">
                  Textile Engineering (TE)
                </Link>
              </li>
              <li>
                <Link href="#departments" className="hover:text-white transition">
                  Business Admin (BBA)
                </Link>
              </li>
              <li>
                <Link href="#departments" className="hover:text-white transition">
                  Architecture &amp; Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Institutional (Col 7-8) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F4B51B]">
              Campus Portals
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a
                  href="http://127.0.0.1:8000/dashboard/"
                  className="hover:text-white transition flex items-center gap-1"
                >
                  <span>Admin Dashboard</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="http://127.0.0.1:8000/teach/courses/"
                  className="hover:text-white transition flex items-center gap-1"
                >
                  <span>Faculty Portal</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="http://127.0.0.1:8000/me/courses/"
                  className="hover:text-white transition flex items-center gap-1"
                >
                  <span>Student Portal</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="http://127.0.0.1:8000/accounts/login/"
                  className="hover:text-white transition flex items-center gap-1"
                >
                  <span>Staff Sign In</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <Link href="/vision" className="hover:text-white transition text-[#F4B51B] font-semibold">
                  Our Vision &amp; Mission
                </Link>
              </li>
              <li>
                <Link href="/vision#at-a-glance-table" className="hover:text-white transition">
                  DIET At A Glance
                </Link>
              </li>
              <li>
                <Link href="#admission" className="hover:text-white transition">
                  Admissions Office
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details (Col 9-12) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F4B51B]">
              Dhanmondi Campus
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin size={17} className="text-[#F4B51B] flex-shrink-0 mt-0.5" />
                <span>House 43/A, Road 2/A, Dhanmondi R/A, Dhaka-1209, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#F4B51B] flex-shrink-0" />
                <span>+880 2-9665686, +880 1713-493050</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-[#F4B51B] flex-shrink-0" />
                <span>info@diet.edu.bd, admission@diet.edu.bd</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock size={16} className="text-[#F4B51B] flex-shrink-0" />
                <span>Saturday – Thursday: 9:00 AM – 6:00 PM</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">
                <ShieldCheck size={16} className="text-[#F4B51B]" />
                <span>Govt. Approved &amp; UGC Bangladesh Recognized</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            &copy; 2027 Daffodil Institute of Engineering &amp; Technology (DIET). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="#privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-white transition">
              Terms of Service
            </Link>
            <Link href="#sitemap" className="hover:text-white transition">
              Institutional Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
