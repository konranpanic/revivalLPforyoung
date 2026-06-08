"use client"

import { useEffect, useRef } from "react"
import { ShoppingBag, Shield, Sparkles } from "lucide-react"

const supports = [
  {
    icon: ShoppingBag,
    title: "手の届く価格",
    description:
      "新品よりも現実的な価格で、憧れブランドをもっと身近に。はじめてでも背伸びしすぎないラインナップです。",
  },
  {
    icon: Shield,
    title: "初心者でも安心",
    description:
      "プロの真贋鑑定済みアイテムだけを厳選。初めてのハイブランド選びでも、不安をしっかり取り除きます。",
  },
  {
    icon: Sparkles,
    title: "トレンド重視",
    description:
      "ヴィトンを中心に、今欲しい人気のバッグ・財布・小物をラインナップ。いまの気分にぴったりの一品を揃えています。",
  },
]

export function SupportSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".support-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-fade-in-up")
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative border-b border-border/50 bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block font-serif text-xs tracking-[0.4em] text-primary">
            SERVICE
          </span>
          <h2 className="font-serif text-2xl font-light leading-relaxed tracking-wide text-foreground md:text-3xl">
            はじめてでも安心できる
            <br className="md:hidden" />
            3つのサービス特徴
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            価格・信頼・トレンドの3つの軸で、若者の「はじめてハイブランド」をサポートします。
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {supports.map((support, index) => (
            <div
              key={index}
              className="support-card group relative opacity-0"
            >
              <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-border/50 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
                {/* Number Badge */}
                <div className="absolute right-6 top-6 font-serif text-5xl font-light text-primary/10">
                  0{index + 1}
                </div>

                {/* Icon */}
                <div className="relative mb-8">
                  <div className="flex h-16 w-16 items-center justify-center">
                    <div className="absolute inset-0 border border-primary/30 transition-transform duration-300 group-hover:rotate-45" />
                    <support.icon className="relative z-10 h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="mb-4 border-b border-primary/20 pb-4 font-serif text-lg font-medium leading-relaxed text-foreground">
                  {support.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {support.description}
                </p>

                {/* Hover Indicator */}
                <div className="mt-6 flex items-center gap-2 text-xs tracking-wider text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span>LEARN MORE</span>
                  <div className="h-px w-8 bg-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
