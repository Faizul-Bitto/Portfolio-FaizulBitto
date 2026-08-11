import { Code2, Server, Database, Wrench } from 'lucide-react'

function Skills() {
  const skillGroups = [
    {
      icon: Code2,
      title: 'Languages',
      color: 'text-cyan-400',
      skills: [
        { name: 'Python' },
        { name: 'JavaScript' },
        { name: 'PHP' },
        { name: 'C++' },
      ],
    },
    {
      icon: Server,
      title: 'Frameworks & Backend',
      color: 'text-indigo-400',
      skills: [
        { name: 'FastAPI' },
        { name: 'Node.js' },
        { name: 'Nest.js' },
        { name: 'Express.js' },
        { name: 'Laravel' },
      ],
    },
    {
      icon: Database,
      title: 'Databases',
      color: 'text-purple-400',
      skills: [
        { name: 'PostgreSQL' },
        { name: 'MySQL' },
        { name: 'MongoDB' },
      ],
    },
    {
      icon: Wrench,
      title: 'Frontend & Tools',
      color: 'text-emerald-400',
      skills: [
        { name: 'Tailwind CSS' },
        { name: 'Bootstrap' },
        { name: 'Git & GitHub' },
        { name: 'Postman' },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal-right">
          <h2 className="text-3xl font-bold gradient-text mb-10 section-heading">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 reveal-stagger">
          {skillGroups.map((group) => {
            const Icon = group.icon
            return (
              <div key={group.title} className="glass-card p-6 rounded-xl space-y-4">
                <div className="flex items-center gap-3">
                  <Icon className={`w-6 h-6 ${group.color}`} />
                  <h3 className="text-lg font-bold text-gray-100">{group.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="skill-tag px-3 py-1.5 rounded-lg bg-gray-800/80 border border-gray-700 text-sm font-medium text-gray-300"
                    >
                      {skill.name}
                    </span>
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

export default Skills
