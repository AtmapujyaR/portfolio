import { portfolioContent } from '../data/portfolioContent'

export function Footer() {
  return (
    <footer className="bg-accent text-primary">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-base">
          &copy; {new Date().getFullYear()} {portfolioContent.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}