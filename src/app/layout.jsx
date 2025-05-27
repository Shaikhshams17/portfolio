import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientProtection from "@/components/layout/ClientProtection"; // path may vary

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Shams Ali - MERN Stack Developer & DevOps Engineer",
    template: "%s | Shams Ali",
  },
  description:
    "Professional portfolio of Shams Ali, MERN Stack Developer and DevOps Engineer...",
  // ... rest of your metadata
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientProtection />
        {children}
      </body>
    </html>
  );
}
