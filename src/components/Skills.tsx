import React, { useEffect, useRef } from 'react';
import { portfolioContent } from '../data/portfolioContent'

export function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillItems = skillsRef.current?.querySelectorAll('.skill-item');
    skillItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-accent text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold sm:text-4xl mb-12 text-center animate-fade-in">
          Skills
        </h2>
        <div ref={skillsRef} className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioContent.skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-item card bg-primary text-text sm:rounded-lg fade-in reveal-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-lg font-medium mb-2">{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}