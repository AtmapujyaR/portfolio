import { Award, Globe } from 'lucide-react'
import { portfolioContent } from '../data/portfolioContent'

export function Education() {
  return (
    <section id="education" className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-primary sm:text-4xl mb-12 text-center rotate-in reveal-on-scroll">
          Education, Certifications & Languages
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
        <div className="bg-primary shadow overflow-hidden rounded-lg mb-8 fade-in reveal-on-scroll">
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
        <div className="bg-primary shadow overflow-hidden rounded-lg fade-in reveal-on-scroll">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-text">
              Languages
            </h3>
          </div>
          <div className="border-t border-secondary">
            <ul className="divide-y divide-secondary stagger-fade-in">
              {portfolioContent.languages.map((language, index) => (
                <li key={index} className="px-4 py-4 sm:px-6 hover-bright">
                  <div className="flex items-center">
                    <Globe className="flex-shrink-0 mr-3 h-5 w-5 text-text" />
                    <p className="text-sm font-medium text-text">{language}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}