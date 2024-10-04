import { useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { portfolioContent } from '../data/portfolioContent'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-primary sticky top-0 left-0 right-0 z-50 border-b border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <a href='/portfolio/#'><span className="text-2xl font-bold text-text">RA</span></a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8 stagger-fade-in">
            {portfolioContent.navItems.map((item) => (
              <a
                key={item}
                href={`/portfolio/#${item.toLowerCase()}`}
                className="text-text hover:text-accent inline-flex items-center px-1 pt-1 text-sm font-medium hover-lift"
              >
                {item}
              </a>
            ))}
            <a
              href="/portfolio/resume_Rahul_Atmapujya.pdf"
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
          <div className="pt-2 pb-3 px-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {portfolioContent.navItems.map((item) => (
              <a
                key={item}
                href={`/portfolio/#${item.toLowerCase()}`}
                className="text-text hover:bg-accent hover:text-primary block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="/portfolio/resume_Rahul_Atmapujya.pdf"
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
  )
}