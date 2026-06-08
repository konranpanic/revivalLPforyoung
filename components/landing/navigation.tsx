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
      role="navigation"
      aria-label="サイトナビゲーション"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-sm border-b border-slate-200/80 py-3"
          : "bg-background/70 py-4"
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
            className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-600 transition-colors hover:text-primary"
          >
            Collection
          </a>
          <a
            href="#cta-section"
            className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-600 transition-colors hover:text-primary"
          >
            Shop
          </a>
        </div>
        
        <a
          href="#cta-section"
          className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/5 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition duration-300 hover:bg-primary/10"
        >
          SHOP NOW
        </a>
      </div>
    </nav>
  )
}
