'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown, ChevronUp, Mail, Linkedin, FileText, Award, Book, Briefcase, Github, Download } from 'lucide-react'
import { portfolioContent } from '../data/portfolioContent'
import '../animations.css'

export function PortfolioWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [showSkills, setShowSkills] = useState(false)
  const aboutRef = useRef<HTMLElement>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  useEffect(() => {
    // Set CSS variables
    Object.entries(portfolioContent.colors).forEach(([key, value]) => {
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

    // Handle scroll for showing skills and reveal effect
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setShowSkills(scrollPosition > 50) // Show skills after scrolling 50px

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
      <nav className="bg-primary sticky top-0 left-0 right-0 z-50 border-b border-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <a href='/#'><span className="text-2xl font-bold text-text">RA</span></a>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 stagger-fade-in">
              {portfolioContent.navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-text hover:text-accent inline-flex items-center px-1 pt-1 text-sm font-medium hover-lift"
                >
                  {item}
                </a>
              ))}
              <a
                href={portfolioContent.resumeLink}
                download
                className="text-text hover:text-accent inline-flex items-center px-1 pt-1 text-sm font-medium hover-lift"
              >
                <Download className="h-5 w-5 mr-1" />
                Resume
              </a>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-accent bg-transparent hover:text-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="sm:hidden absolute top-16 left-0 right-0 bg-primary z-50 border-b border-accent">
            <div className="pt-2 pb-3 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {portfolioContent.navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-text hover:bg-accent hover:text-primary block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href={portfolioContent.resumeLink}
                download
                className="text-text hover:bg-accent hover:text-primary block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <Download className="h-5 w-5 inline mr-1" />
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      <main>
        <section id="about" ref={aboutRef} className="bg-primary text-accent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center stagger-fade-in">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl rotate-in">
                {portfolioContent.name}
              </h1>
              <h2 className="text-3xl tracking-tight font-extrabold sm:text-4xl md:text-4xl mt-4 text-text">
                {portfolioContent.title}
              </h2>
              <p className="mt-3 text-xl text-text sm:mt-4 max-w-2xl mx-auto">
                {portfolioContent.about}
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-5">
                <a
                  href={portfolioContent.resumeLink}
                  download
                  className="inline-flex items-center px-6 py-3 border border-text text-base font-medium rounded-md text-accent hover:bg-accent hover:text-primary hover-lift"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        {showSkills && (
          <section id="skills" className="py-20 bg-accent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-primary sm:text-4xl text-center mb-12 rotate-in reveal-on-scroll">
                Skills
              </h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 stagger-fade-in">
                {portfolioContent.skills.map((skill) => (
                  <div key={skill.name} className="bg-primary rounded-lg p-6 hover:shadow-lg transition duration-300 hover-lift reveal-on-scroll">
                    <h3 className="text-lg font-medium text-text mb-2">{skill.name}</h3>
                    <p className="text-text">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section id="experience" className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-text sm:text-4xl mb-12 text-center rotate-in reveal-on-scroll">
              Work Experience
            </h2>
            {portfolioContent.experience.map((job, index) => (
              <div key={index} className="mb-8 border border-text overflow-hidden sm:rounded-lg fade-in reveal-on-scroll">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-text">
                    {job.title}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-text">
                    {job.company} | {job.location} | {job.period}
                  </p>
                </div>
                <div className="">
                  <button
                    onClick={() => toggleSection(`job-${index}`)}
                    className="px-4 py-5 sm:px-6 w-full text-left bg-primary text-accent flex items-center justify-between focus:outline-none hover:outline-none"
                  >
                    <span>View Responsibilities</span>
                    {expandedSection === `job-${index}` ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>
                  {expandedSection === `job-${index}` && (
                    <div className="px-4 py-5 sm:p-6 fade-in">
                      <ul className="list-disc list-inside text-text stagger-fade-in">
                        {job.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="mb-2">{resp}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="py-20 bg-accent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl mb-12 text-center rotate-in reveal-on-scroll">
              Education & Certifications
            </h2>
            <div className="bg-primary shadow overflow-hidden rounded-lg mb-8 fade-in reveal-on-scroll">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-text">
                  Educational Background
                </h3>
              </div>
              <div className="border-t border-secondary">
                <dl>
                  <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium ">
                      Degree
                    </dt>
                    <dd className="mt-1 text-sm text-text sm:mt-0 sm:col-span-2">
                      {portfolioContent.education.degree}
                    </dd>
                  </div>
                  <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-text">
                      Institution
                    </dt>
                    <dd className="mt-1 text-sm text-text sm:mt-0 sm:col-span-2">
                      {portfolioContent.education.institution}
                    </dd>
                  </div>
                  <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-text">
                      Year
                    </dt>
                    <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                      {portfolioContent.education.year}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="bg-primary shadow overflow-hidden rounded-lg fade-in reveal-on-scroll">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-text">
                  Certifications
                </h3>
              </div>
              <div className="border-t border-secondary">
                <ul className="divide-y divide-secondary stagger-fade-in">
                  {portfolioContent.certifications.map((cert, index) => (
                    <li key={index} className="px-4 py-4 sm:px-6 hover-bright">
                      <div className="flex items-center">
                        <Award className="flex-shrink-0 mr-3 h-5 w-5 text-text" />
                        <p className="text-sm font-medium text-text">{cert}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-primary ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in reveal-on-scroll">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-text sm:text-4xl mb-8 rotate-in">
                Contact Me
              </h2>
              <p className="text-lg text-text mb-8 ">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="flex justify-center space-x-6 stagger-fade-in">
                <a href={`mailto:${portfolioContent.contact.email}`} className="text-text hover:text-accent hover-grow">
                  <Mail className="h-8 w-8" aria-hidden="true" />
                </a>
                <a href={portfolioContent.contact.linkedin} target='_blank' className="text-text hover:text-accent hover-grow">
                  <Linkedin className="h-8 w-8" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-accent text-primary">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-base">
            &copy; {new Date().getFullYear()} {portfolioContent.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}