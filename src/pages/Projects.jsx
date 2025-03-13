import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'Website bán hàng được xây dựng bằng React, Redux và Tailwind CSS.',
      image: '/assets/images/project1.jpg',
      technologies: ['React', 'Redux', 'Tailwind CSS', 'Firebase'],
      demoLink: 'https://demo-shop.example.com',
      codeLink: 'https://github.com/yourusername/ecommerce-website',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Ứng dụng quản lý công việc với giao diện kéo thả.',
      image: '/assets/images/project2.jpg',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      demoLink: 'https://demo-tasks.example.com',
      codeLink: 'https://github.com/yourusername/task-management-app',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Website portfolio cá nhân (chính là website này).',
      image: '/assets/images/project3.jpg',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      demoLink: 'https://yourusername.github.io/my-portfolio',
      codeLink: 'https://github.com/yourusername/my-portfolio',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center text-primary mb-12">Dự án của tôi</h1>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Dưới đây là một số dự án tiêu biểu tôi đã thực hiện. Mỗi dự án đều thể hiện khả năng giải quyết vấn đề
        và các kỹ năng lập trình của tôi.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects; 