"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="font-serif text-2xl font-bold text-primary">
            Bright America Bonds
          </Link>
          <nav className="hidden md:flex space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/how-it-works">How It Works</NavLink>
            <NavLink href="/case-studies">Case Studies</NavLink>
            <NavLink href="/investor-information">Investor Information</NavLink>
            <NavLink href="/savings-calculator">Savings Calculator</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/how-it-works">How It Works</NavLink>
            <NavLink href="/case-studies">Case Studies</NavLink>
            <NavLink href="/investor-information">Investor Information</NavLink>
            <NavLink href="/savings-calculator">Savings Calculator</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
        </div>
      )}
    </header>
  )
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-gray-600 hover:text-primary transition-colors">
    {children}
  </Link>
)

export default Header

