import { FileText, BookOpen, ExternalLink } from 'lucide-react'

function Publications() {
  return (
    <section id="publications" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal-left">
          <h2 className="text-3xl font-bold gradient-text mb-10 section-heading">
            Research & Publications
          </h2>
        </div>

        <div className="glass-card p-8 rounded-2xl space-y-4 border-l-4 border-l-cyan-500 reveal">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-cyan-400" />
            </div>
            <span className="tech-badge">
              <span className="tech-badge-dot"></span>
              IEEE Published
            </span>
          </div>

          <h3 className="text-xl font-bold text-cyan-300">
            Improving ODI Cricket Predictions: A Novel Approach Using Key
            Features and Advanced Regression Models
          </h3>
          <p className="text-gray-300 text-base leading-relaxed">
            Developed a machine learning pipeline integrating XGBoost, CatBoost,
            Gradient Boosting, and LGBM for score and win probability
            prediction. Integrated the final model into a mobile app using Flask
            backend and Flutter frontend.
          </p>

          <div className="flex flex-wrap gap-2">
            {['XGBoost', 'CatBoost', 'LGBM', 'Flask', 'Flutter'].map((tech) => (
              <span
                key={tech}
                className="skill-tag px-2.5 py-1 rounded-md bg-gray-800/60 border border-gray-700 text-xs font-medium text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href="https://ieeexplore.ieee.org/document/11004737"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tech btn-outline-tech"
          >
            <FileText className="w-4 h-4" />
            <span>Read Publication</span>
            <span className="project-arrow">
              <ExternalLink className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Publications
