"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-neon-cyan/25 py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="https://revival.tokyo/" className="block transition-opacity hover:opacity-80">
          <Image
            src="/logo2.png"
            alt="Revival.tokyo"
            width={600}
            height={200}
            className="h-[64px] w-auto object-contain -my-2"
            priority
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#product"
            className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-neon-cyan"
          >
            Collection
          </a>
          <a
            href="#cta-section"
            className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-neon-cyan"
          >
            Shop
          </a>
        </div>
        
        <a
          href="#cta-section"
          className="luxury-border bg-transparent rounded-full px-6 py-2.5 text-xs font-semibold tracking-[0.2em] text-neon-cyan transition-all hover:bg-neon-cyan/15"
        >
          SHOP NOW
        </a>
      </div>
    </nav>
  )
}
