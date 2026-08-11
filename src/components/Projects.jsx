import { Wallet, FolderGit2, Globe, Cpu, Recycle, Hotel, Pill, ArrowUpRight, ExternalLink } from 'lucide-react'

function Projects() {
  const projects = [
    {
      icon: Wallet,
      title: 'Expense Tracker',
      tech: 'Python • FastAPI • PostgreSQL',
      description: 'A full-featured expense tracking application built with FastAPI backend, SQLAlchemy ORM, and PostgreSQL database for managing personal finances effortlessly.',
      links: [
        {
          label: 'View Code',
          href: 'https://github.com/Faizul-Bitto/Project-Expense-Tracker-with-FastAPI',
        },
        {
          label: 'Live Demo',
          href: 'https://expense-tracker-app-vert-nine.vercel.app/',
        },
      ],
    },
    {
      icon: FolderGit2,
      title: 'Todo Application',
      tech: 'FastAPI • Python • PostgreSQL',
      description: 'A modern todo application built with FastAPI backend, SQLAlchemy ORM, and PostgreSQL database.',
      links: [
        {
          label: 'View Code',
          href: 'https://github.com/Faizul-Bitto/Project-Full-Stack-Todo-Application-with-FastAPI',
        },
        {
          label: 'Live Demo',
          href: 'https://project-full-stack-todo-application-with.onrender.com',
        },
      ],
    },
    {
      icon: Globe,
      title: 'Startsmartz Portfolio Application',
      tech: 'Nest.js • MySQL',
      description: 'Professional portfolio website built with Nest.js backend and MySQL database.',
      links: [
        {
          label: 'Visit Site',
          href: 'https://startsmartz.net/',
        },
      ],
    },
    {
      icon: Cpu,
      title: 'CrickPred: Cricket Predictions',
      tech: 'Python • Flask • ML • Flutter',
      description: 'Machine learning system for ODI cricket score and win probability prediction with mobile app.',
      links: [
        {
          label: 'View Code',
          href: 'https://github.com/Faizul-Bitto/Proejct-CrickPred-Circket-ODI-Score-and-Win-Prediction-Using-Machine-Learning',
        },
      ],
    },
    {
      icon: Recycle,
      title: 'GreenCycle: Waste Management',
      tech: 'Laravel • MySQL',
      description: 'Waste management and recycling application with Laravel backend and comprehensive features.',
      links: [
        {
          label: 'View Code',
          href: 'https://github.com/Faizul-Bitto/Project-GreenCycle',
        },
      ],
    },
    {
      icon: Hotel,
      title: 'Hotel Management System',
      tech: 'MERN Stack • Material UI',
      description: 'Full-stack hotel management system with React, Node.js, and MongoDB integration.',
      links: [],
    },
    {
      icon: Pill,
      title: 'Pharmacy Management System',
      tech: 'Laravel • MySQL',
      description: 'Comprehensive pharmacy system with Laravel for inventory and sales management.',
      links: [],
    },
  ]

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal-right">
          <h2 className="text-3xl font-bold gradient-text mb-10 section-heading">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 reveal-stagger">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <div
                key={project.title}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-100">{project.title}</h3>
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="inline-block px-2.5 py-1 text-xs font-bold uppercase rounded bg-indigo-950/70 text-indigo-300 border border-indigo-800/50 mb-3">
                    {project.tech}
                  </span>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                   {project.links.map((link) => (
                     <a
                       key={link.href}
                       href={link.href}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="btn-tech btn-outline-tech text-sm"
                     >
                       {link.label.toLowerCase().includes('code') ? (
                         <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                           <path
                             fillRule="evenodd"
                             clipRule="evenodd"
                             d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                           />
                         </svg>
                       ) : (
                         <ExternalLink className="w-4 h-4" />
                       )}
                       <span>{link.label}</span>
                       <span className="project-arrow">
                         <ArrowUpRight className="w-4 h-4" />
                       </span>
                     </a>
                   ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
