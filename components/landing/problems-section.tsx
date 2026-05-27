"use client"

import { useEffect, useRef } from "react"
import { AlertCircle } from "lucide-react"

const problems = [
  {
    title: "インターネットでの高額な購入は、本当に本物かどうか不安...",
    description:
      "フリマアプリや安価なECサイトが増えた現代だからこそ、「もし偽物だったらどうしよう」「騙されたら取り返しが出ない」と、一歩を踏み出せない方が非常に増えています。",
  },
  {
    title: "たくさん種類がありすぎてどれを選べば失敗しない？",
    description:
      "せっかく大きな買い物をするのだから、一時の流行で終わるものではなく、何年、何十年経っても色褪せない、自分の年齢に寄り添ってくれる「本当に価値のある定番」を知りたい。",
  },
  {
    title: "中古品やリユース品だと、傷や汚れの状態が分かりにくい",
    description:
      "「届いてみたら想像以上に使い込まれていた…」なんて失敗は絶対に避けたいもの。言葉だけの「美品」ではなく、細かいディテールまで納得のいく買い物をしたい。",
  },
]

export function ProblemsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".problem-item")
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("animate-fade-in-up")
              }, index * 150)
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
      className="relative border-b border-border/50 bg-card py-24 md:py-32"
    >
      {/* Background Decoration */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block font-serif text-xs tracking-[0.4em] text-primary">
            CONCERNS
          </span>
          <h2 className="font-serif text-2xl font-light leading-relaxed tracking-wide text-foreground md:text-3xl">
            はじめてのハイブランド選び、
            <br className="md:hidden" />
            こんなお悩みや不安はありませんか？
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="problem-item group relative opacity-0 transition-all duration-500"
            >
              <div className="relative h-full overflow-hidden border border-border/50 bg-background p-8 transition-all duration-300 hover:border-primary/30">
                {/* Top Accent Line */}
                <div className="absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-primary via-primary/50 to-transparent transition-all duration-300 group-hover:from-primary group-hover:via-primary group-hover:to-primary/50" />

                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center border border-primary/30 bg-primary/5">
                  <AlertCircle className="h-5 w-5 text-primary" />
                </div>

                {/* Content */}
                <h3 className="mb-4 font-serif text-lg font-medium leading-relaxed text-foreground">
                  {problem.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {problem.description}
                </p>

                {/* Corner Decoration */}
                <div className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-primary/20 transition-all duration-300 group-hover:h-12 group-hover:w-12 group-hover:border-primary/40" />
              </div>
            </div>
          ))}
        </div>

        {/* 誘導リンクエリア */}
        <div className="mt-16 text-center">
          <a
            href="https://revival.tokyo/search?q=ルイヴィトン"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-serif text-sm tracking-widest text-primary transition-all hover:gap-4 hover:underline underline-offset-8"
          >
            <span>ルイ・ヴィトン一覧で探してみる</span>
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}            })
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
      className="relative border-b border-border/50 bg-card py-24 md:py-32"
    >
      {/* Background Decoration */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block font-serif text-xs tracking-[0.4em] text-primary">
            CONCERNS
          </span>
          <h2 className="font-serif text-2xl font-light leading-relaxed tracking-wide text-foreground md:text-3xl">
            はじめてのハイブランド選び、
            <br className="md:hidden" />
            こんなお悩みや不安はありませんか？
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="problem-item group relative opacity-0 transition-all duration-500"
            >
              <div className="relative h-full overflow-hidden border border-border/50 bg-background p-8 transition-all duration-300 hover:border-primary/30">
                {/* Top Accent Line */}
                <div className="absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-primary via-primary/50 to-transparent transition-all duration-300 group-hover:from-primary group-hover:via-primary group-hover:to-primary/50" />

                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center border border-primary/30 bg-primary/5">
                  <AlertCircle className="h-5 w-5 text-primary" />
                </div>

                {/* Content */}
                <h3 className="mb-4 font-serif text-lg font-medium leading-relaxed text-foreground">
                  {problem.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {problem.description}
                </p>

                {/* Corner Decoration */}
                <div className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-primary/20 transition-all duration-300 group-hover:h-12 group-hover:w-12 group-hover:border-primary/40" />
              </div>
            </div>
          ))}
        </div>

        {/* 追加した誘導リンク */}
        <div className="mt-16 text-center">
          <a
            href="https://revival.tokyo/search?q=ルイヴィトン"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-serif text-sm tracking-widest text-primary transition-all hover:gap-4 hover:underline underline-offset-8"
          >
            <span>ルイ・ヴィトン一覧で探してみる</span>
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}            })
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
      className="relative border-b border-border/50 bg-card py-24 md:py-32"
    >
      {/* Background Decoration */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block font-serif text-xs tracking-[0.4em] text-primary">
            CONCERNS
          </span>
          <h2 className="font-serif text-2xl font-light leading-relaxed tracking-wide text-foreground md:text-3xl">
            はじめてのハイブランド選び、
            <br className="md:hidden" />
            こんなお悩みや不安はありませんか？
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="problem-item group relative opacity-0 transition-all duration-500"
            >
              <div className="relative h-full overflow-hidden border border-border/50 bg-background p-8 transition-all duration-300 hover:border-primary/30">
                {/* Top Accent Line */}
                <div className="absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-primary via-primary/50 to-transparent transition-all duration-300 group-hover:from-primary group-hover:via-primary group-hover:to-primary/50" />

                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center border border-primary/30 bg-primary/5">
                  <AlertCircle className="h-5 w-5 text-primary" />
                </div>

                {/* Content */}
                <h3 className="mb-4 font-serif text-lg font-medium leading-relaxed text-foreground">
                  {problem.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {problem.description}
                </p>

                {/* Corner Decoration */}
                <div className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-primary/20 transition-all duration-300 group-hover:h-12 group-hover:w-12 group-hover:border-primary/40" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
