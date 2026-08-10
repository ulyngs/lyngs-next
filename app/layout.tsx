import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import Script from "next/script";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ulrik Lyngs",
    template: "%s · Ulrik Lyngs",
  },
  description:
    "Personal website of Ulrik Lyngs — research, talks, and open-source tools for digital wellbeing. Co-founder of the Centre for Digital Habits.",
  metadataBase: new URL("https://ulriklyngs.com"),
  openGraph: {
    type: "website",
    siteName: "Ulrik Lyngs",
    url: "https://ulriklyngs.com",
    title: "Ulrik Lyngs",
    description:
      "Research, talks, and open-source tools for digital wellbeing. Co-founder of the Centre for Digital Habits.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ulrik Lyngs",
    description:
      "Research, talks, and open-source tools for digital wellbeing. Co-founder of the Centre for Digital Habits.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream font-sans text-foreground">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          async
          src="https://plausible.io/js/pa-jkKlBB3d_JG4Lwt3b58ON.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`
            window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
            plausible.init()
          `}
        </Script>
      </body>
    </html>
  );
}
