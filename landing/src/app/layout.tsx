import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daffodil Institute of Engineering & Technology (DIET)",
  description:
    "Bangladesh's No. 1 Skill-Based University. Offering industry-focused engineering and technology programs to create job-ready professionals.",
  icons: {
    icon: "/daffodil-crest.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${jakarta.variable} antialiased w-full`}>
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-white text-[#101828] w-full">
        {children}
      </body>
    </html>
  );
}
