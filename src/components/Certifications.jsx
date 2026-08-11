import { ExternalLink, Award, GraduationCap } from 'lucide-react'

function Certifications() {
  return (
    <section id="certifications" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal-right">
          <h2 className="text-3xl font-bold gradient-text mb-10 section-heading">
            Certifications
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 reveal-stagger">
          <div className="glass-card p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center">
                  <Award className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-100">
                    The Git & GitHub Bootcamp
                  </h3>
                  <p className="text-gray-400 text-sm">Udemy Certified</p>
                </div>
              </div>
            </div>
            <a
              href="https://www.udemy.com/certificate/UC-24adec77-442d-4a03-a1c9-01ddf079c624/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tech btn-outline-tech text-sm"
            >
              <span>View Certificate</span>
              <span className="project-arrow">
                <ExternalLink className="w-4 h-4" />
              </span>
            </a>
          </div>

          <div className="glass-card p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-100">
                    Stanford Code in Place: Python Programming
                  </h3>
                  <p className="text-gray-400 text-sm">Stanford University</p>
                </div>
              </div>
            </div>
            <a
              href="https://codeinplace.stanford.edu/cip4/certificate/w7xyy0"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tech btn-outline-tech text-sm"
            >
              <span>View Certificate</span>
              <span className="project-arrow">
                <ExternalLink className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
