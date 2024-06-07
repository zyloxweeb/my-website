import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    image: '/img/project1.png',
    title: 'Progetto 1',
    description: 'Descrizione del progetto 1.',
  },
  // altri progetti
];

function ProjectsPage() {
  return (
    <div>
      <h1>Progetti</h1>
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
