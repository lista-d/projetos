'use client'

import { ArrowUp } from 'lucide-react'
import { Navigation } from './components/navigation'
import { AnimatedSection } from './components/animated-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title animate-scale-in">
            Lista D
          </h1>
          <p className="hero-subtitle animate-fade-in-left delay-100">
            Olá, Bem-vindo à Lista D! Somos dez crianças que queremos um futuro melhor e uma escola também melhor.
            Por isso, já sabem, votem D!
          </p>
          <p className="hero-cta animate-fade-in-right delay-200">
            Conheça as nossas propostas
          </p>
          
          <Navigation />
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-5xl px-6 py-24 space-y-24">
        <AnimatedSection id="evento1" title="Apoio com IA" delay={2}>
          <div className="space-y-4 text-lg">
            <p>No nosso projeto de uma escola melhor pensamos que ter formação/esclarecimento sobre o que é IA</p>
            <p>Queremos promover ambientes escolares e digitais mais acolhedores.</p>
            <p>Acreditamos que a educação é a chave tornar IA uma ferramenta de estudo</p>
          </div>
        </AnimatedSection>

        <AnimatedSection id="evento2" title="Video Jogos Educativos" delay={3}>
          <div className="space-y-4 text-lg">
            <p>
              Queríamos que a biblioteca estivesse a funcionar à hora de almoço e disponibilizar mais jogos educativos
              para que pudéssemos ocupar o nosso tempo livre
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection id="evento3" title="Bolas sem Telemóveis" delay={4}>
          <div className="space-y-4 text-lg">
            <p>
              Solicitamos que o tempo de alugar as bolas seja mais amplo e compatível com o horário de todas as turmas
              caso não seja possível a requisição pedimos que nos permitam trazê-las de casa
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-500 to-orange-400 text-white py-8 px-6 animate-fade-in-up">
        <div className="container mx-auto max-w-5xl text-center text-lg">
          <p>&copy; 2025 Lista D. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Back to Top Button */}
      <a href="#" className="back-to-top" aria-label="Voltar ao topo">
        <ArrowUp className="w-8 h-8" />
      </a>
    </main>
  )
} 