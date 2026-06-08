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
    <header className="relative min-h-screen overflow-hidden bg-background">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(6,182,212,0.12) 0%, transparent 32%), radial-gradient(circle at 80% 15%, rgba(236,72,153,0.12) 0%, transparent 28%), radial-gradient(circle at 50% 80%, rgba(124,58,237,0.08) 0%, transparent 24%)`,
          }}
        />
      </div>

      {/* Soft Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-cyan-50/50" />

      {/* Decorative Elements */}
      <div className="absolute right-10 top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute left-12 bottom-24 h-52 w-52 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-28">
        <div
          ref={contentRef}
          className="grid items-center gap-12 opacity-0 lg:grid-cols-2 lg:gap-16"
        >
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <span className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
              NEW VINTAGE MOOD
            </span>

            <h1 className="mb-4 text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              <span className="block text-primary">自分だけの</span>
              <span className="block text-5xl font-semibold text-foreground md:text-6xl">ルイ・ヴィトンスタイル</span>
            </h1>

            <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-600 lg:text-lg">
              白ベースの洗練された空間に、今っぽいアクセントを。若者の感性を大事にしたヴィンテージバッグを、安心とともにお届けします。
            </p>

            <div className="mb-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              {[
                { icon: Truck, text: "全国送料無料" },
                { icon: Shield, text: "本物保証" },
                { icon: Sparkles, text: "最短翌日発送" },
              ].map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2.5 shadow-sm"
                >
                  <badge.icon className="h-4 w-4 text-primary" />
                  <span className="text-xs tracking-wider text-slate-600">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start">
              <a
                href="https://revival.tokyo/products/list?category_id=&name=ヴィトン"
                aria-label="コレクションを見る - Revivalのルイ・ヴィトン一覧ページへ移動"
                className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/30"
              >
                コレクションを見る
              </a>
              <a
                href="#product"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-700 transition duration-300 hover:border-primary hover:text-primary focus:outline-none focus:ring-4 focus:ring-primary/20"
              >
                おすすめを見る
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_40px_120px_rgba(15,23,42,0.08)]">
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                <Image
                  src="/topimage.png"
                  alt="Louis Vuitton Collection"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-3 left-6 rounded-3xl bg-white/90 px-5 py-4 shadow-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Best Seller</p>
                <p className="mt-1 text-lg font-semibold text-foreground">今だけの1点</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.3em] text-slate-400">
              SCROLL
            </span>
            <div className="h-12 w-px bg-gradient-to-b from-primary/50 to-transparent" />
          </div>
        </div>
      </div>
    </header>
  )
}
