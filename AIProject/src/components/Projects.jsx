import React from 'react';

const Projects = () => {
  const projects = [
    { id: 1, name: 'Project 1', description: 'A responsive website built with React and Tailwind CSS.' },
    { id: 2, name: 'Project 2', description: 'An interactive dashboard using Chart.js.' },
    { id: 3, name: 'Project 3', description: 'A blog platform with user authentication.' },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Projects</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;