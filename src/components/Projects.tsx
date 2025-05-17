import React from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with product catalog, cart functionality, and secure checkout.',
      image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      description: 'Interactive dashboard for social media analytics with real-time data visualization.',
      image: 'https://images.pexels.com/photos/5077069/pexels-photo-5077069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['React', 'D3.js', 'Firebase', 'Material UI'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 3,
      title: 'Fitness Tracker App',
      description: 'Mobile-responsive web app for tracking workouts, nutrition, and fitness goals.',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['React Native', 'GraphQL', 'PostgreSQL'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 4,
      title: 'Real Estate Listings',
      description: 'Property listing platform with search, filters, and interactive map integration.',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['React', 'Next.js', 'Tailwind CSS', 'Google Maps API'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 5,
      title: 'Task Management System',
      description: 'Collaborative project management tool with task assignment, status tracking, and team chat.',
      image: 'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['React', 'Redux', 'Express', 'Socket.io'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 6,
      title: 'Weather App',
      description: 'Dynamic weather application with location detection, forecasts, and animated visualizations.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['JavaScript', 'Weather API', 'CSS Animations'],
      demoUrl: '#',
      codeUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">My Projects</h2>
        <p className="text-gray-400 mb-10">Featured work and personal projects</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              demoUrl={project.demoUrl}
              codeUrl={project.codeUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;