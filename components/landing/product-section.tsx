"use client"

import { useState, useEffect, useRef } from "react"

// 画像パスを修正してください（実際のファイル名に合わせてください）
const thumbnails = [
  { id: 1, label: "正面全体", src: "/product-171/1.jpeg" },
  { id: 2, label: "底面・角スレ", src: "/product-171/2.jpeg" },
  { id: 3, label: "内側・シリアル", src: "/product-171/3.jpeg" },
  { id: 4, label: "金具拡大", src: "/product-171/4.jpeg" },
]

const specs = [
  { label: "型番（Model No.）", value: "M51130" },
  { label: "シリアル（Serial No.）", value: "FL0015（フランス製造）" },
  { label: "サイズ（Size）", value: "横幅32cm × 高さ24cm × マチ幅17cm" },
  { label: "付属品（Accessories）", value: "ルイ・ヴィトン純正パドロック、鍵×1、純正保存袋" },
]

export function ProductSection() {
  const [activeThumb, setActiveThumb] = useState(1)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelector(".product-content")?.classList.add("animate-fade-in-up")
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
      id="product"
      ref={sectionRef}
      className="relative border-b border-border/50 bg-card py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block font-serif text-xs tracking-[0.4em] text-primary">
            ITEM DETAIL
          </span>
          <h2 className="font-serif text-2xl font-light tracking-wide text-foreground md:text-3xl">
            本日の厳選お取り扱い商品
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        <div className="product-content grid gap-12 opacity-0 lg:grid-cols-2">
          {/* Gallery */}
          <div>
            {/* Main Image */}
            <div className="relative mb-4 overflow-hidden border border-border/50 bg-background p-4">
              <div className="aspect-square bg-secondary/50">
                <img 
                  src={thumbnails.find((t) => t.id === activeThumb)?.src}
                  alt={thumbnails.find((t) => t.id === activeThumb)?.label}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Corner Accents */}
              <div className="absolute left-0 top-0 h-8 w-8 border-l border-t border-primary/30" />
              <div className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-primary/30" />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {thumbnails.map((thumb) => (
                <button
                  key={thumb.id}
                  onClick={() => setActiveThumb(thumb.id)}
                  className={`aspect-square border bg-background p-1 transition-all duration-300 ${
                    activeThumb === thumb.id
                      ? "border-primary"
                      : "border-border/50 hover:border-primary/50"
                  }`}
                >
                  <img src={thumb.src} alt={thumb.label} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <span className="mb-2 inline-block text-xs tracking-[0.2em] text-primary">
              HANDBAG / ICON MODEL
            </span>

            <h3 className="mb-4 font-serif text-3xl font-light tracking-wide text-foreground">
              モノグラム アルマPM
            </h3>

            <div className="mb-8 flex items-baseline gap-3 border-b border-border/50 pb-6">
              <span className="font-serif text-4xl font-semibold tracking-wider text-foreground">
                ¥148,000
              </span>
              <span className="text-sm text-muted-foreground">（税込）</span>
            </div>

            <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
              数あるアルマの中でも、状態の良い個体を厳選しました。ヌメ革のエイジングが程よく上品なライトブラウンに育っており、ヴィンテージらしいこなれた高級感を演出してくれます。ファーストヴィトンとして、そのままお出かけに使える素晴らしいコンディションです。
            </p>

            {/* Specs Table */}
            <div className="overflow-hidden border border-border/50">
              {specs.map((spec, index) => (
                <div
                  key={index}
                  className={`flex ${index !== specs.length - 1 ? "border-b border-border/50" : ""}`}
                >
                  <div className="w-2/5 bg-secondary/30 p-4 text-xs font-medium text-muted-foreground">
                    {spec.label}
                  </div>
                  <div className="flex-1 p-4 text-sm text-foreground">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
