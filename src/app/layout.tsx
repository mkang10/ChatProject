import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Suspense } from "react";
import { PageLoading } from "@/components/ui/page-loading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ChatKang - Connect Everyone in the Digital Universe",
  description:
    "Experience the next generation of communication with AI-powered features, absolute security, and breakthrough 3D interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Suspense fallback={<PageLoading text="Đang tải trang..." />}>
          {children}
        </Suspense>
        <Toaster />
      </body>
    </html>
  );
}
