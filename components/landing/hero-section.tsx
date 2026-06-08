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
    <header className="relative min-h-screen overflow-hidden">
      {/* 背景写真エリア */}
      <div className="absolute inset-0">
        <Image
          src="/resort-bg.png" // publicフォルダ内の写真パス
          alt="Resort Chill Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* 背景を明るくするための白いオーバーレイ */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-28">
        <div
          ref={contentRef}
          className="grid items-center gap-12 opacity-0 lg:grid-cols-2 lg:gap-16"
        >
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <span className="mb-6 inline-block rounded-full border border-primary/20 bg-white/60 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-primary shadow-sm">
              NEW VINTAGE MOOD
            </span>

            <h1 className="mb-6 text-4xl font-extrabold leading-snug tracking-tight text-foreground md:text-6xl lg:text-7xl">
              <span className="block bg-gradient-to-r from-cyan-600 to-rose-500 bg-clip-text text-transparent leading-tight">
                憧れを、もっと身近に。
              </span>
              <span className="block mt-2 text-3xl font-bold text-slate-900 md:text-5xl lg:text-6xl">
                はじめてのハイブランドも、
                <span className="ml-1 inline-block text-primary underline-offset-4 decoration-2 decoration-primary/30">安心して選べる。</span>
              </span>
            </h1>

            <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-700 lg:text-lg bg-white/30 p-4 rounded-xl">
              厳選されたリユースアイテムを、あなたの毎日に。高価すぎない価格と、はじめてでも安心のサポートで、いま欲しい憧れを手に入れよう。
            </p>

            <div className="mb-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              {[
                { icon: Truck, text: "全国送料無料" },
                { icon: Shield, text: "本物保証" },
                { icon: Sparkles, text: "最短翌日発送" },
              ].map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-full border border-white/50 bg-white/80 px-4 py-2.5 shadow-sm"
                >
                  <badge.icon className="h-4 w-4 text-primary" />
                  <span className="text-xs tracking-wider text-slate-800">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start">
              <a
                href="https://revival.tokyo/products/list?category_id=&name=ヴィトン"
                className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-4 text-sm font-semibold text-white shadow-lg transition duration-300 hover:bg-primary/90"
              >
                今すぐアイテムを見る
              </a>
            </div>
          </div>

          {/* 右側のメイン画像も以前の通り配置 */}
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/topimage.png"
                  alt="Louis Vuitton Collection"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
