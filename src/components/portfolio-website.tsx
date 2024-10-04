'use client'

import { useEffect, useRef } from 'react'
import { portfolioContent } from '../data/portfolioContent'
import '../animations.css'
import { Navigation } from './Navigation'
import { About } from './About'
import { Skills } from './Skills'
import { Experience } from './Experience'
import { Projects } from './Projects'
import { Education } from './Education'
import { Contact } from './Contact'
import { Footer } from './Footer'

export function PortfolioWebsite() {
  const aboutRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Set CSS variables
    Object.entries(portfolioContent.colors).forEach(([_key, value]) => {
      document.documentElement.style.setProperty(value.name, value.value)
    })

    // Set about section height
    const setAboutHeight = () => {
      if (aboutRef.current) {
        const windowHeight = window.innerHeight
        const navHeight = document.querySelector('nav')?.offsetHeight || 0
        aboutRef.current.style.minHeight = `${windowHeight - navHeight}px`
      }
    }

    setAboutHeight()
    window.addEventListener('resize', setAboutHeight)

    // Handle reveal effect
    const handleScroll = () => {
      const revealElements = document.querySelectorAll('.reveal-on-scroll');
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add('active');
        } else {
          revealElements[i].classList.remove('active');
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once to set initial state

    return () => {
      window.removeEventListener('resize', setAboutHeight)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-primary text-text">
      <Navigation />
      <main>
        <About aboutRef={aboutRef} />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}