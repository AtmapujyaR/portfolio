import { Download } from 'lucide-react'
import { portfolioContent } from '../data/portfolioContent'

export function About() {
  return (
    <section id="about" className="bg-primary text-accent flex items-center" style={{ minHeight: 'var(--about-height, 100vh)' }}>
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
              href="/portfolio/resume_Rahul_Atmapujya.pdf"
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
  )
}