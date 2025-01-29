import "./globals.css"
import { Mona_Sans as FontSans, Young_Serif as FontSerif } from "next/font/google"
import { cn } from "@/lib/utils"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontSerif = FontSerif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
})

export const metadata = {
  title: {
    default: "Bright America Bonds - Financing Smart Infrastructure",
    template: "%s | Bright America Bonds",
  },
  description:
    "Modernize your city's infrastructure without raising taxes. Bright America Bonds provide innovative financing solutions for energy-efficient upgrades.",
  keywords: ["municipal bonds", "infrastructure financing", "energy efficiency", "LED streetlights", "smart cities"],
  openGraph: {
    title: "Bright America Bonds - Financing Smart Infrastructure",
    description:
      "Modernize your city's infrastructure without raising taxes. Innovative financing for energy-efficient upgrades.",
    url: "https://www.brightamericabonds.com",
    siteName: "Bright America Bonds",
    images: [
      {
        url: "https://www.brightamericabonds.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
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
  twitter: {
    title: "Bright America Bonds - Financing Smart Infrastructure",
    card: "summary_large_image",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-white font-sans antialiased", fontSans.variable, fontSerif.variable)}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

