'use client'

import React from 'react'
import '../animations.css'
import { Navigation } from './Navigation'
import { About } from './About'
import { Skills } from './Skills'
import { Experience } from './Experience'
import { Projects } from './Projects'
import { Education } from './Education'
import { Contact } from './Contact'
import { Footer } from './Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useSetTheme } from '../hooks/useSetTheme'
import { useSetAboutHeight } from '../hooks/useSetAboutHeight'

export function PortfolioWebsite() {
  useScrollReveal();
  useSetTheme();
  useSetAboutHeight();

  return (
    <div className="min-h-screen bg-primary text-text">
      <Navigation />
      <main>
        <About />
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

// Optimize child components if they don't need frequent re-renders
const MemoizedSkills = React.memo(Skills);
const MemoizedExperience = React.memo(Experience);
const MemoizedProjects = React.memo(Projects);
const MemoizedEducation = React.memo(Education);
const MemoizedContact = React.memo(Contact);
const MemoizedFooter = React.memo(Footer);

// Use memoized components in the JSX
export function OptimizedPortfolioWebsite() {
  useScrollReveal();
  useSetTheme();
  useSetAboutHeight();

  return (
    <div className="min-h-screen bg-primary text-text">
      <Navigation />
      <main>
        <About />
        <MemoizedSkills />
        <MemoizedExperience />
        <MemoizedProjects />
        <MemoizedEducation />
        <MemoizedContact />
      </main>
      <MemoizedFooter />
    </div>
  )
}