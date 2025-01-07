'use client'

import { useCallback } from 'react'

export function Navigation() {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }, [])

  return (
    <nav className="nav-button-container">
      <button
        onClick={() => scrollToSection('evento1')}
        className="nav-button"
      >
        Apoio com IA
      </button>
      <button
        onClick={() => scrollToSection('evento2')}
        className="nav-button"
      >
        Video Jogos Educativos
      </button>
      <button
        onClick={() => scrollToSection('evento3')}
        className="nav-button"
      >
        Bolas sem Telemóveis
      </button>
    </nav>
  )
} 