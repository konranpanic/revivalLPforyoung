"use client"

import { useEffect, useRef } from "react"
import { Sparkles, Shield, Truck } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 }
    )

    if (contentRef.current) {
      observer.observe(contentRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <header className="relative min-h-screen overflow-hidden bg-transparent">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/30 to-secondary/0" />

      {/* Decorative Elements */}
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-neon-cyan/15 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 h-64 w-64 rounded-full bg-neon-magenta/15 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-32">
        <div
          ref={contentRef}
          className="grid items-center gap-12 opacity-0 lg:grid-cols-2 lg:gap-16"
        >
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <span className="mb-6 inline-block font-semibold uppercase tracking-[0.35em] text-neon-cyan">
              STREET × VINTAGE
            </span>

            <h1 className="mb-4 text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              <span className="gold-gradient-text">ルイ・ヴィトン</span>
              <br />
              <span className="text-3xl font-semibold text-neon-magenta md:text-4xl lg:text-5xl">今の私に似合う一品</span>
            </h1>

            <p className="mb-8 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              若さを楽しみながら、上質なヴィンテージを自分らしく着こなす。
              今っぽいスタイルと安心できる本物だけを、スマートにお届けします。
            </p>

            <div className="mb-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              {[
                { icon: Truck, text: "全国送料無料" },
                { icon: Shield, text: "100%本物保証" },
                { icon: Sparkles, text: "最短翌日発送" },
              ].map((badge, index) => (
                <div
                  key={index}
                  className="glass flex items-center gap-2 rounded-full border border-neon-cyan/20 bg-background/80 px-4 py-2.5"
                >
                  <badge.icon className="h-4 w-4 text-neon-cyan" />
                  <span className="text-xs tracking-wider text-foreground/90">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="https://revival.tokyo/products/list?category_id=&name=ヴィトン"
              className="group relative inline-flex items-center overflow-hidden rounded-full bg-neon-cyan px-10 py-4 text-sm font-semibold tracking-[0.15em] text-primary-foreground transition-all duration-300 hover:bg-neon-cyan/90"
            >
              <span className="relative z-10">限定コレクションを見る</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-primary/20" />
              <div className="absolute -inset-8 border border-primary/10" />

              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
                <Image
                  src="/topimage.png"
                  alt="Louis Vuitton Collection"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 glass animate-float border border-primary/30 px-6 py-3">
                <p className="text-xs tracking-wider text-primary">Since 1854</p>
                <p className="font-serif text-lg text-foreground">Heritage</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.3em] text-muted-foreground">
              SCROLL
            </span>
            <div className="h-12 w-px bg-gradient-to-b from-primary/50 to-transparent" />
          </div>
        </div>
      </div>
    </header>
  )
}
