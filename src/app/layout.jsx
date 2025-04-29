import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    template: "%s | Shams Ali"
  },
  description: "Professional portfolio of Shams Ali, MERN Stack Developer and DevOps Engineer. Specializing in JavaScript, React, Node.js, and cloud infrastructure.",
  keywords: [
    "MERN Stack Developer",
    "DevOps Engineer",
    "React Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "Full Stack Developer",
    "Cloud Infrastructure"
  ],
  authors: [{ name: "Shams Ali" }],
  creator: "Shams Ali",
  publisher: "Shams Ali",
  metadataBase: new URL("https://yourwebsite.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shams Ali Shaikh- MERN Stack Developer & DevOps Engineer",
    description: "Professional portfolio of Shams Ali, MERN Stack Developer and DevOps Engineer.",
    url: "https://shamsali.vercel.app/", // Replace with your actual domain
    siteName: "Shams Ali Portfolio",
    images: [
      {
        url: "/shamsali.jpg", // Replace with your actual OG image path
        width: 1200,
        height: 630,
        alt: "Shams Ali - MERN Stack Developer & DevOps Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
    // LinkedIn profile URL (for rel="me" verification)
    profile: {
      username: "Shams Ali Shaikh", // e.g., "shams-ali-12345"
    }
  },
  // Removed Twitter-specific metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google407c1251f06022b0.html",
  },
  // Additional social links in the head
  other: {
    "instagram:username": "shamsss_17", // e.g., "shams.ali.dev"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Social profile links */}
        <link rel="me" href="https://www.linkedin.com/in/your-linkedin-username" />
        <link rel="me" href="https://www.linkedin.com/in/shams-ali-shaikh-27194425a/" />
        
        {/* Preload fonts */}
        <link
          rel="preload"
          href="/fonts/geist-sans.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/geist-mono.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}