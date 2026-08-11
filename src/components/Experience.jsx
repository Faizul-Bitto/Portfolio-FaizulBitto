import { ChevronRight, Briefcase, MapPin, Calendar } from 'lucide-react'

function Experience() {
  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal-left">
          <h2 className="text-3xl font-bold gradient-text mb-10 section-heading">
            Experience
          </h2>
        </div>

        <div className="glass-card p-8 rounded-2xl experience-card reveal">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center shrink-0">
                <Briefcase className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-100">
                  Junior Full Stack Developer
                </h3>
                <p className="text-cyan-400 font-semibold mt-1">
                  Startsmartz Technologies
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-gray-800 text-gray-400 w-fit border border-gray-700/50">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                December 2024 – November 2025
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-gray-800 text-gray-400 w-fit border border-gray-700/50">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                Dhaka, Bangladesh
              </span>
            </div>
          </div>

          <ul className="space-y-3 text-gray-300 text-base">
            <li className="flex items-start gap-3">
              <ChevronRight className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                Delivered features across 4 production projects – 1 in Nest.js,
                1 in Node.js, and 2 in Laravel – handling module
                implementations, API development, and critical bug fixes.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                Managed a 6-member developer team – distributing tasks,
                conducting code reviews, debugging issues, and ensuring on-time
                delivery of features.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                Implemented database schema design and REST API endpoints for
                multiple applications, ensuring scalability and
                performance.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                Laravel module development & bug fixing with focus on clean
                code
              </span>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <span>MERN stack feature implementation and optimization</span>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <span>Backend API optimization and performance tuning</span>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <span>Code review, testing, and team collaboration</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience
