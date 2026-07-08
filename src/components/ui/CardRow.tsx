import { ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode
}

export default function CardRow({ title, children }: Props) {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white font-bold text-xl hover:underline cursor-default">{title}</h2>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {children}
      </div>
    </section>
  )
}
