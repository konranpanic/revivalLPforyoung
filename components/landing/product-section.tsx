"use client"

import Image from 'next/image'
import { useState, useEffect, useRef } from "react"

const thumbnails = [
  { id: 1, label: "正面全体", src: "/product-171/1.jpeg" },
  { id: 2, label: "底面・角スレ", src: "/product-171/2.jpeg" },
  { id: 3, label: "内側・シリアル", src: "/product-171/3.jpeg" },
  { id: 4, label: "金具拡大", src: "/product-171/4.jpeg" },
]

const specs = [
  { label: "型番（Model No.）", value: "M51240" },
  { label: "シリアル（Serial No.）", value: "FL0015（フランス製造）" },
  { label: "サイズ（Size）", value: "横幅23cm × 高さ13cm × マチ幅7cm" },
  { label: "付属品（Accessories）", value: "ルイ・ヴィトン純正保存袋" },
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
      className="relative border-b border-border/50 bg-transparent py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block font-serif text-xs tracking-[0.4em] text-primary">
            ITEM LIST
          </span>
          <h2 className="font-serif text-2xl font-light tracking-wide text-foreground md:text-3xl">
            ヴィトン中心＋バッグ・財布・小物まで
            <br className="md:hidden" />
            種類が豊富なラインナップ
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            人気のルイ・ヴィトンを中心に、財布や小物も含めて多彩にご用意。はじめての一品選びにぴったりの、安心できるコレクションです。
          </p>
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        {/* 信頼のテキストブロック */}
        <div className="mb-16 rounded-xl border border-primary/20 bg-primary/5 p-8 text-center">
          <h3 className="mb-6 font-serif text-lg text-foreground">初めてでも安心できる信頼の理由</h3>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="mb-2 font-bold text-primary">取引数 1,200件以上</p>
              <p className="text-xs text-muted-foreground">若者に選ばれた実績。はじめてでも頼れる、多くの購入者が信頼しています。</p>
            </div>
            <div>
              <p className="mb-2 font-bold text-primary">満足度 97%</p>
              <p className="text-xs text-muted-foreground">丁寧な商品説明と品質保証で、高評価をいただいています。</p>
            </div>
            <div>
              <p className="mb-2 font-bold text-primary">豊富なカテゴリ</p>
              <p className="text-xs text-muted-foreground">バッグ・財布・小物まで、選べる幅が広いから初めてでも安心です。</p>
            </div>
          </div>
        </div>

        <div className="product-content grid gap-12 opacity-0 lg:grid-cols-2">
          {/* Gallery */}
          <div>
            <div className="relative mb-4 overflow-hidden border border-border/50 bg-background/50 backdrop-blur-sm p-4">
              <div className="relative aspect-square bg-secondary/30">
                <Image
                  src={thumbnails.find((t) => t.id === activeThumb)?.src ?? ''}
                  alt={`ルイ・ヴィトン ${thumbnails.find((t) => t.id === activeThumb)?.label}｜Revival厳選ヴィンテージ`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute left-0 top-0 h-8 w-8 border-l border-t border-primary/30" />
              <div className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-primary/30" />
            </div>

            <div className="grid grid-cols-4 gap-3">
              {thumbnails.map((thumb) => (
                <button
                  key={thumb.id}
                  onClick={() => setActiveThumb(thumb.id)}
                  className={`aspect-square border bg-background/50 p-1 transition-all duration-300 ${
                    activeThumb === thumb.id
                      ? "border-primary"
                      : "border-border/50 hover:border-primary/50"
                  }`}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={thumb.src}
                      alt={`ルイ・ヴィトン ${thumb.label} - Revival厳選個体`}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
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
              トロター ショルダーバッグ
            </h3>

            <div className="mb-8 flex items-baseline gap-3 border-b border-border/50 pb-6">
              <span className="font-serif text-4xl font-semibold tracking-wider text-foreground">
                ¥180,000
              </span>
              <span className="text-sm text-muted-foreground">（税込）</span>
            </div>

            <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
              数ある商品の中でも、状態の良い個体を厳選しました。ヌメ革のエイジングが程よく上品なライトブラウンに育っており、ヴィンテージらしいこなれた高級感を演出してくれます。ファーストヴィトンとして、そのままお出かけに使える素晴らしいコンディションです。
            </p>

            <div className="mb-8 overflow-hidden border border-border/50 bg-background/50 backdrop-blur-sm">
              {specs.map((spec, index) => (
                <div
                  key={index}
                  className={`flex ${index !== specs.length - 1 ? "border-b border-border/50" : ""}`}
                >
                  <div className="w-2/5 bg-primary/5 p-4 text-xs font-medium text-muted-foreground">
                    {spec.label}
                  </div>
                  <div className="flex-1 p-4 text-sm text-foreground">{spec.value}</div>
                </div>
              ))}
            </div>

            <a
              href="https://revival.tokyo/products/detail/171" 
              className="group relative inline-flex w-full items-center justify-center overflow-hidden border border-primary bg-primary/10 px-8 py-4 text-sm font-semibold tracking-[0.1em] text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              <span className="relative z-10">商品詳細を見る</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
          </div>
        </div>
      </div>

      {/* FAQ構造化データ（Google向け） */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "中古のルイ・ヴィトンを買うのは初めてで不安です。偽物ではありませんか？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Revivalでは独自の厳しい真贋鑑定基準をクリアした商品のみを厳選して販売しております。100%本物保証ですので、安心してお買い求めいただけます。"
                }
              },
              {
                "@type": "Question",
                "name": "中古品の状態はどのように評価されていますか？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Revivalではヌメ革のエイジングや金具の状態など、ヴィンテージ品としての美しさを独自のランク基準で丁寧に評価しています。初めての方でも安心して選べるよう、状態を詳細に解説しています。"
                }
              }
            ]
          })
        }}
      />
    </section>
  )
}
