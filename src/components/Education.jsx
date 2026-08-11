import { GraduationCap, Landmark, School, Calendar } from 'lucide-react'

function Education() {
  const education = [
    {
      school: 'North South University',
      degree: 'Bachelor of Science in Computer Science and Engineering (CSE)',
      period: 'January 2020 – June 2024',
      icon: GraduationCap,
      color: 'text-cyan-400',
      border: 'border-cyan-500/30',
      bg: 'from-cyan-500/20 to-blue-500/20',
    },
    {
      school: 'Dhaka City College',
      degree: 'Higher Secondary Certificate (HSC), Science',
      period: 'September 2017 – April 2019',
      icon: Landmark,
      color: 'text-indigo-400',
      border: 'border-indigo-500/30',
      bg: 'from-indigo-500/20 to-purple-500/20',
    },
    {
      school: 'Government Laboratory High School',
      degree: 'Secondary School Certificate (SSC), Science',
      period: 'January 2007 – February 2017',
      icon: School,
      color: 'text-purple-400',
      border: 'border-purple-500/30',
      bg: 'from-purple-500/20 to-pink-500/20',
    },
  ]

  return (
    <section id="education" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal-left">
          <h2 className="text-3xl font-bold gradient-text mb-10 section-heading">
            Education
          </h2>
        </div>

        <div className="space-y-6 reveal-stagger">
          {education.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.school}
                className="glass-card p-6 rounded-2xl flex flex-col sm:flex-row justify-between sm:items-center gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.bg} border ${item.border} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-100">{item.school}</h3>
                    <p className={`${item.color} font-semibold mt-1`}>{item.degree}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 bg-gray-800/80 px-3 py-1.5 rounded-full w-fit font-medium border border-gray-700/50">
                  <Calendar className={`w-3.5 h-3.5 ${item.color}`} />
                  {item.period}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Education
