import { ReactNode } from 'react'

interface AnimatedSectionProps {
  id: string
  title: string
  children: ReactNode
  delay?: number
}

export function AnimatedSection({ id, title, children, delay = 0 }: AnimatedSectionProps) {
  const delayClass = `delay-${delay * 100}`
  
  return (
    <section id={id} className={`section-card animate-fade-in-up ${delayClass}`}>
      <div className="section-card-content">
        <h2 className="text-3xl font-bold text-orange-600 mb-6 animate-fade-in-left delay-200">
          {title}
        </h2>
        <div className="space-y-4 text-gray-700 animate-fade-in-right delay-300">
          {children}
        </div>
      </div>
    </section>
  )
} 