import { Code2, Database, Layers, Rocket } from 'lucide-react'

function About() {
  const focusAreas = [
    {
      icon: Code2,
      title: 'Clean APIs',
      desc: 'RESTful API design with proper auth, validation, and error handling',
      color: 'text-cyan-400',
    },
    {
      icon: Database,
      title: 'Database Architecture',
      desc: 'Scalable schema design with MySQL, PostgreSQL & MongoDB',
      color: 'text-indigo-400',
    },
    {
      icon: Layers,
      title: 'Full Stack',
      desc: 'End-to-end development with modern frameworks',
      color: 'text-purple-400',
    },
    {
      icon: Rocket,
      title: 'Performance',
      desc: 'Optimization, debugging, and production-ready solutions',
      color: 'text-emerald-400',
    },
  ]

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal-left">
          <h2 className="text-3xl font-bold gradient-text mb-8 section-heading">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <div className="glass-card p-8 sm:p-10 rounded-2xl space-y-4 text-gray-300 leading-relaxed text-lg reveal flex flex-col justify-center">
            <p>
              I'm a backend-focused developer with hands-on experience building
              real-world server-side systems. I specialize in creating clean,
              maintainable APIs with proper database architecture and scalable
              backend logic.
            </p>
            <p>
              My tech stack includes
              <span className="text-cyan-300 font-semibold">
                {' '}
                FastAPI, Nest.js, Node.js, Express.js, and Laravel
              </span>
              . I focus on authentication, validation, error handling,
              performance optimization, and debugging to deliver
              production-ready solutions.
            </p>

            {/* Code-style divider */}
            <div className="flex items-center gap-2 pt-2 font-mono text-xs text-gray-500">
              <span className="text-cyan-400">$</span>
              <span>cat about.txt</span>
              <span className="text-gray-600">--success</span>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            {/* Focus areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 reveal-stagger">
              {focusAreas.map((area) => {
                const Icon = area.icon
                return (
                  <div key={area.title} className="glass-card p-5 rounded-xl flex flex-col">
                    <Icon className={`w-6 h-6 ${area.color} mb-2`} />
                    <h3 className="text-sm font-bold text-gray-100 mb-1">
                      {area.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About