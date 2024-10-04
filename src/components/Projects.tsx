import { useState } from 'react';
import { portfolioContent } from '../data/portfolioContent'

export function Projects() {
    const [expandedProjects, setExpandedProjects] = useState<number[]>([]);

    const toggleProjectExpansion = (index: number) => {
        setExpandedProjects(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const isProjectExpanded = (index: number) => expandedProjects.includes(index);

    return (
        <section id="projects" className="py-20 bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-text sm:text-4xl mb-12 text-center rotate-in reveal-on-scroll">
                    Projects
                </h2>
                {portfolioContent.projects.map((project, index) => (
                    <div key={index} className="mb-8 border border-text overflow-hidden sm:rounded-lg fade-in reveal-on-scroll">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-accent">
                                {project.name}
                            </h3>
                        </div>
                        <div className="px-4 py-5 sm:p-6">
                            <p className={`text-text mb-4 ${!isProjectExpanded(index) ? 'line-clamp-3 sm:line-clamp-none' : ''}`}>
                                {project.description}
                            </p>
                            <div
                                className="mb-4 text-accent transition-colors duration-200 sm:hidden"
                                onClick={() => toggleProjectExpansion(index)}
                            >
                                {isProjectExpanded(index) ? 'Show Less' : 'Show More'}
                            </div>
                            <div className="mt-4">
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.technologies.split(', ').map((tech, techIndex) => (
                                        <span key={techIndex} className="px-3 py-1 text-xs font-medium text-primary bg-accent rounded-full">
                                            {tech.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}