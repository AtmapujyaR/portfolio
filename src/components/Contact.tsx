import { Mail, Linkedin } from 'lucide-react'
import { portfolioContent } from '../data/portfolioContent'

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-primary ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in reveal-on-scroll">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-text sm:text-4xl mb-8 rotate-in">
            Contact Me
          </h2>
          <p className="text-lg text-text mb-8 ">
            I'm open to new opportunities and collaborations. Feel free to reach out!
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
  )
}