import React from 'react';

// Project Component
function Project({ title, description, technologies, github }) {
  return (
    <div className="card shadow-lg hover:shadow-2xl transform transition duration-300 hover:-translate-y-2">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p className="text-sm text-gray-500 mt-2">Technologies: {technologies}</p>
        <div className="card-actions justify-end">
          <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View on GitHub</a>
        </div>
      </div>
    </div>
  );
}

// Projects Component
function Projects() {
  const user_info = {
    projects: [
      {
        title: "SiTani",
        description: "SiTani is a website used to borrow goods from the website by farmers. This website is developed using Laravel.",
        technologies: "PHP, Laravel, JavaScript, Bootstrap",
        github: "https://github.com/rickyananada1/PA1-Kel2",
      },
      {
        title: "DelApp",
        description: "Developed to manage data such as bookings, overnight permits, exit permits, and so on.",
        technologies: "Flutter, Dart",
        github: "https://github.com/RivaelManurung/DelApp",
      },
      {
        title: "The Deck",
        description: "An application for ordering food, with frontend using Flutter, backend using Go, and admin site using Laravel.",
        technologies: "Laravel, PHP, Bootstrap, Flutter, Dart, JavaScript, Go, API, HTML, CSS",
        github: "https://github.com/danielmanalu07/PA2-Kel15",
      },
      {
        title: "Blog",
        description: "This website is used to manage blogs using Laravel.",
        technologies: "Laravel, PHP, Bootstrap, JavaScript",
        github: "https://github.com/RivaelManurung/blog",
      },
      {
        title: "Library",
        description: "This website is used to manage blogs using Laravel.",
        technologies: "Laravel, PHP, Bootstrap, JavaScript",
        github: "https://github.com/RivaelManurung/Library",
      },
      {
        title: "Absensi Kominfo",
        description: "This website is used to manage absences using Laravel.",
        technologies: "Laravel, PHP, Bootstrap, JavaScript",
        github: "https://github.com/danielmanalu07/Komfend-WEB-DEV",
      },
    ],
  };

  return (
    <section id="projects" className="p-10 bg-base-100">
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:px-16">
        {user_info.projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
