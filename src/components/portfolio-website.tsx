'use client'

import { useState } from 'react'
import { Menu, X, ChevronDown, ChevronUp, Mail, Linkedin, FileText, Award, Book, Briefcase, Github } from 'lucide-react'

export function PortfolioWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const navItems = ['About', 'Skills', 'Experience', 'Education', 'Contact']

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#4A4947]">
      <nav className="bg-[#FAF7F0] shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-[#4A4947]">RA</span>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[#4A4947] hover:text-[#a49393] inline-flex items-center px-1 pt-1 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-[#4A4947] hover:text-[#a49393] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#a49393]"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="sm:hidden fixed top-16 left-0 right-0 bg-[#B17457] z-50">
            <div className="pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[#4A4947] hover:bg-[#FAF7F0] hover:text-[#a49393] block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        <section id="about" className="bg-[#FAF7F0] text-[#b17457] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                Rahul Atmapujya
              </h1>
              <h2 className="text-3xl tracking-tight font-extrabold sm:text-4xl md:text-4xl mt-4 text-[#4A4947]">
                SharePoint Developer
              </h2>
              <p className="mt-3 text-xl text-[#4A4947] sm:mt-4 max-w-2xl mx-auto">
                Passionate SharePoint Developer with 8+ years of experience in Microsoft technologies. Expertise in SharePoint Online, SPFx, Azure, and Power Platform.
              </p>
              <div className="mt-10 flex justify-center gap-5">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#FAF7F0] bg-[#B17457] hover:bg-[#FAF7F0] hover:text-[#B17457] hover:border-[#B17457]"
                >
                  Contact Me
                </a>
                <a
                  href="#experience"
                  className="inline-flex items-center px-6 py-3 border border-[#4A4947] text-base font-medium rounded-md text-[#B17457] hover:bg-[#B17457] hover:text-[#FAF7F0]"
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 bg-[#B17457]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-[#FAF7F0] sm:text-4xl text-center mb-12">
              Skills
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: 'SharePoint', description: 'SharePoint Online, On-Premises 2013' },
                { name: 'Azure', description: 'App services, Functions, OpenAI Studio, DevOps' },
                { name: 'Microsoft Power Platform', description: 'Power Apps, Power Automate' },
                { name: 'Web Development', description: 'JavaScript, TypeScript, React, HTML, CSS' },
                { name: 'Backend Development', description: 'C#, .NET, REST APIs' },
                { name: 'Other Technologies', description: 'Akumina Framework' },
              ].map((skill) => (
                <div key={skill.name} className="bg-[#FAF7F0] rounded-lg p-6 hover:shadow-lg transition duration-300">
                  <h3 className="text-lg font-medium text-[#4A4947] mb-2">{skill.name}</h3>
                  <p className="text-[#4A4947]">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="py-20 bg-[#FAF7F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-[#4A4947] sm:text-4xl mb-12 text-center">
              Work Experience
            </h2>
            {[
              {
                title: "Senior Software Engineer",
                company: "Agreeya Solutions",
                location: "Noida, India",
                period: "June 2023 to Present",
                responsibilities: [
                  "Developed end-to-end chatbot solution using Azure OpenAI, SPFx, and Azure Functions",
                  "Led junior developers and provided technical mentorship",
                  "Implemented automated workflows using Microsoft Power Automate",
                  "Conducted performance optimization of SharePoint environments",
                ]
              },
              {
                title: "Senior Associate",
                company: "Cognizant India Pvt. Ltd.",
                location: "Pune",
                period: "March 2022 – June 2023",
                responsibilities: [
                  "Developed employee experience platform for client in The Netherlands",
                  "Managed sprint planning and retrospectives",
                  "Led cross-functional teams and coordinated project deliverables",
                ]
              },
              {
                title: "Associate",
                company: "Cognizant",
                location: "Pune",
                period: "April 2021 - March 2022",
                responsibilities: [
                  "Designed and developed custom SharePoint solutions",
                  "Built custom web parts and applications",
                  "Implemented automated workflows to streamline business processes",
                ]
              },
            ].map((job, index) => (
              <div key={index} className="mb-8 border border-[#4A4947] overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-[#4A4947]">
                    {job.title}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-[#4A4947]">
                    {job.company} | {job.location} | {job.period}
                  </p>
                </div>
                <div className="">
                  <button
                    onClick={() => toggleSection(`job-${index}`)}
                    className="px-4 py-5 sm:px-6 w-full text-left bg-[#FAF7F0] text-[#B17457]  flex items-center justify-between focus:outline-none hover:outline-none"
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
                      <ul className="list-disc list-inside text-[#4A4947]">
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

        <section id="education" className="py-20 bg-[#B17457]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-[#FAF7F0] sm:text-4xl mb-12 text-center">
              Education & Certifications
            </h2>
            <div className="bg-[#FAF7F0] shadow overflow-hidden rounded-lg mb-8">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-[#4A4947]">
                  Educational Background
                </h3>
              </div>
              <div className="border-t border-[#a49393]">
                <dl>
                  <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium ">
                      Degree
                    </dt>
                    <dd className="mt-1 text-sm text-[#4A4947] sm:mt-0 sm:col-span-2">
                      Bachelor of Engineering, Electronics & Telecommunication Engineering
                    </dd>
                  </div>
                  <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-[#4A4947]">
                      Institution
                    </dt>
                    <dd className="mt-1 text-sm text-[#4A4947] sm:mt-0 sm:col-span-2">
                      Devi Ahilya Vishwavidyalaya, Indore, India
                    </dd>
                  </div>
                  <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-[#4A4947]">
                      Year
                    </dt>
                    <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                      2012 - 2016
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="bg-[#FAF7F0] shadow overflow-hidden rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-[#4A4947]">
                  Certifications
                </h3>
              </div>
              <div className="border-t border-[#a49393]">
                <ul className="divide-y divide-[#a49393]">
                  {[
                    "Developing Solutions for Microsoft Azure (AZ-204)",
                    "Microsoft Power Platform Fundamentals (PL-900)",
                    "Information Technology Infrastructure Library (ITIL) Certification"
                  ].map((cert, index) => (
                    <li key={index} className="px-4 py-4 sm:px-6">
                      <div className="flex items-center">
                        <Award className="flex-shrink-0 mr-3 h-5 w-5 text-[#4A4947]" />
                        <p className="text-sm font-medium text-[#4A4947]">{cert}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-[#FAF7F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-[#4A4947] sm:text-4xl mb-8">
                Contact Me
              </h2>
              <p className="text-lg text-[#4A4947] mb-8">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="flex justify-center space-x-6">
                <a href="mailto:atmapujyar@gmail.com" className="text-[#4A4947] hover:text-[#a49393]">
                  <Mail className="h-8 w-8" aria-hidden="true" />
                </a>
                <a href="https://www.linkedin.com/in/rahul-atmapujya-45a26a137/" target='_blank' className="text-[#4A4947] hover:text-[#a49393]">
                  <Linkedin className="h-8 w-8" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#B17457] text-[#FAF7F0]">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-base">
            &copy; 2024 Rahul Atmapujya. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}