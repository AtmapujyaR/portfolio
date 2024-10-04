'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, ChevronUp, Mail, Linkedin, FileText, Award, Book, Briefcase, Github, Download } from 'lucide-react'
import { portfolioContent } from '../data/portfolioContent'

export function PortfolioWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  useEffect(() => {
    // Set CSS variables
    Object.entries(portfolioContent.colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(value.name, value.value)
    })
  }, [])

  return (
    <div className="min-h-screen bg-primary text-text">
      <nav className="bg-primary shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-text">RA</span>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {portfolioContent.navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-text hover:text-accent inline-flex items-center px-1 pt-1 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
              <a
                href={portfolioContent.resumeLink}
                download
                className="text-text hover:text-accent inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                <Download className="h-5 w-5 mr-1" />
                Resume
              </a>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-text hover:text-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="sm:hidden fixed top-16 left-0 right-0 bg-accent z-50">
            <div className="pt-2 pb-3 space-y-1">
              {portfolioContent.navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-text hover:bg-primary hover:text-accent block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href={portfolioContent.resumeLink}
                download
                className="text-text hover:bg-primary hover:text-accent block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <Download className="h-5 w-5 inline mr-1" />
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        <section id="about" className="bg-primary text-accent py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                {portfolioContent.name}
              </h1>
              <h2 className="text-3xl tracking-tight font-extrabold sm:text-4xl md:text-4xl mt-4 text-text">
                {portfolioContent.title}
              </h2>
              <p className="mt-3 text-xl text-text sm:mt-4 max-w-2xl mx-auto">
                {portfolioContent.about}
              </p>
              <div className="mt-10 flex justify-center gap-5">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-accent hover:bg-primary hover:text-accent hover:border-accent"
                >
                  Contact Me
                </a>
                <a
                  href="#experience"
                  className="inline-flex items-center px-6 py-3 border border-text text-base font-medium rounded-md text-accent hover:bg-accent hover:text-primary"
                >
                  View My Work
                </a>
                <a
                  href={portfolioContent.resumeLink}
                  download
                  className="inline-flex items-center px-6 py-3 border border-text text-base font-medium rounded-md text-accent hover:bg-accent hover:text-primary"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 bg-accent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl text-center mb-12">
              Skills
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {portfolioContent.skills.map((skill) => (
                <div key={skill.name} className="bg-primary rounded-lg p-6 hover:shadow-lg transition duration-300">
                  <h3 className="text-lg font-medium text-text mb-2">{skill.name}</h3>
                  <p className="text-text">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-text sm:text-4xl mb-12 text-center">
              Work Experience
            </h2>
            {portfolioContent.experience.map((job, index) => (
              <div key={index} className="mb-8 border border-text overflow-hidden sm:rounded-lg">
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
                    <div className="px-4 py-5 sm:p-6">
                      <ul className="list-disc list-inside text-text">
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
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl mb-12 text-center">
              Education & Certifications
            </h2>
            <div className="bg-primary shadow overflow-hidden rounded-lg mb-8">
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
            <div className="bg-primary shadow overflow-hidden rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-text">
                  Certifications
                </h3>
              </div>
              <div className="border-t border-secondary">
                <ul className="divide-y divide-secondary">
                  {portfolioContent.certifications.map((cert, index) => (
                    <li key={index} className="px-4 py-4 sm:px-6">
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

        <section id="contact" className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-text sm:text-4xl mb-8">
                Contact Me
              </h2>
              <p className="text-lg text-text mb-8">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="flex justify-center space-x-6">
                <a href={`mailto:${portfolioContent.contact.email}`} className="text-text hover:text-accent">
                  <Mail className="h-8 w-8" aria-hidden="true" />
                </a>
                <a href={portfolioContent.contact.linkedin} target='_blank' className="text-text hover:text-accent">
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