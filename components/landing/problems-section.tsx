"use client"

import Image from 'next/image'
import { AlertCircle, Target, Search } from 'lucide-react'

const problems = [
  {
    title: 'ハイブランドって高すぎる、手が届かない...',
    description:
      '新品価格にため息をついているあなたへ。リユースなら憧れブランドをもっと現実的な価格で手に入れられます。',
    icon: AlertCircle,
  },
  {
    title: '初めてで失敗したくない、ちゃんと選びたい。',
    description:
      '本当に安心できるものを選ぶには、プロの鑑定や状態チェックが必要です。Revivalなら初めてでも納得できるサポート体制があります。',
    icon: Target,
  },
  {
    title: '見た目だけじゃなく、信頼できるかが大事。',
    description:
      '見えない不安をなくすため、写真や説明だけでなく、真贋鑑定済み・状態開示で安心して選べる環境を整えています。',
    icon: Search,
  },
]

export function ProblemsSection() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* 画像エリア */}
        <div className="relative h-[380px] w-full overflow-hidden rounded-[2rem] shadow-2xl sm:h-[420px] md:h-[500px]">
          <Image
            src="/problem-woman.jpg"
            alt="ブランド選びの不安"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* テキストエリア */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-serif font-light text-foreground">
            「ハイブランドって高すぎる」「初めてで失敗したくない」
            <br />
            「でも、ちゃんとしたものが欲しい」
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            そんな人のためのサービスです。はじめてのハイブランドを、安心して選べる環境でお届けします。
          </p>

          <div className="grid gap-8">
            {problems.map((problem, index) => {
              const Icon = problem.icon
              return (
                <div key={index} className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">{problem.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <a
            href="https://revival.tokyo/search?q=ルイヴィトン"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-serif tracking-widest hover:underline"
          >
            ルイ・ヴィトン一覧で探してみる →
          </a>
        </div>
      </div>
    </section>
  )
}
