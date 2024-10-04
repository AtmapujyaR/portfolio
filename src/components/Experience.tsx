import { portfolioContent } from '../data/portfolioContent'

export function Experience() {
  return (
    <section id="experience" className="pt-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-text sm:text-4xl mb-12 text-center rotate-in reveal-on-scroll">
          Work Experience
        </h2>
        {portfolioContent.experience.map((job, index) => (
          <div key={index} className="mb-8 border border-text overflow-hidden sm:rounded-lg fade-in reveal-on-scroll">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-accent">
                {job.title}
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-text italic">
                {job.company} | {job.location} | {job.period}
              </p>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <p className="text-text">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}