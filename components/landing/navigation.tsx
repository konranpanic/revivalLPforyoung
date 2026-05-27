"use client"

import { useState, useEffect } from "react"

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
          ? "glass border-b border-primary/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <div className="flex flex-col">
          <span className="font-serif text-xl font-semibold tracking-[0.2em] text-foreground md:text-2xl">
            Revival.tokyo
          </span>
          <span className="hidden text-[10px] tracking-wider text-primary/80 md:block">
            PREMIUM BRAND SELECTION
          </span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#product"
            className="text-sm tracking-wider text-muted-foreground transition-colors hover:text-primary"
          >
            COLLECTION
          </a>
          <a
            href="#cta-section"
            className="text-sm tracking-wider text-muted-foreground transition-colors hover:text-primary"
          >
            PURCHASE
          </a>
        </div>
        <a
          href="#cta-section"
          className="luxury-border bg-transparent px-6 py-2.5 text-xs font-medium tracking-[0.15em] text-primary transition-all hover:bg-primary/10"
        >
          ORDER NOW
        </a>
      </div>
    </nav>
  )
}
