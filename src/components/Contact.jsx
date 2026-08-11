import { Mail, Terminal } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="reveal text-center">
          <h2 className="text-3xl font-bold gradient-text mb-6 section-heading">
            Get In Touch
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* Terminal-style contact card */}
          <div className="glass-card rounded-2xl overflow-hidden reveal">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-900/80 border-b border-gray-800">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              <span className="ml-2 text-xs text-gray-500 font-mono">contact.sh</span>
            </div>
            <div className="p-6 font-mono text-sm space-y-3">
              <div className="text-gray-500">
                <span className="text-cyan-400">$</span> ./send_message.sh
              </div>
              <div className="text-gray-300">
                <span className="text-purple-400">const</span>{' '}
                <span className="text-cyan-300">message</span>{' '}
                <span className="text-gray-500">=</span>{' '}
                <span className="text-emerald-400">"Let's build something amazing!"</span>
              </div>
              <div className="text-gray-500">
                <span className="text-cyan-400">$</span> echo $message
              </div>
              <div className="text-emerald-400">
                {'>'} Let's build something amazing!
              </div>
              <div className="text-gray-500">
                <span className="text-cyan-400">$</span> status
              </div>
              <div className="text-emerald-400">
                {'>'} process.exit(0)
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div className="flex flex-col justify-center gap-4 reveal" style={{ transitionDelay: '0.1s' }}>
            <p className="text-gray-300 text-lg leading-relaxed">
              Interested in working together or have any questions? Feel free to
              reach out.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:fibhuiyanbitto06@gmail.com"
                className="social-icon inline-flex items-center gap-3 px-5 py-3.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-200 hover:border-cyan-500/50 hover:text-cyan-400 transition"
              >
                <Mail className="w-5 h-5" />
                <span className="font-medium">Email Me</span>
                <span className="ml-auto text-xs text-gray-500 font-mono">fibhuiyanbitto06@gmail.com</span>
              </a>

              <a
                href="https://github.com/Faizul-Bitto"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon inline-flex items-center gap-3 px-5 py-3.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-200 hover:border-cyan-500/50 hover:text-cyan-400 transition"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span className="font-medium">GitHub</span>
                <span className="ml-auto text-xs text-gray-500 font-mono">@Faizul-Bitto</span>
              </a>

              <a
                href="https://linkedin.com/in/faizul-bitto"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon inline-flex items-center gap-3 px-5 py-3.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-200 hover:border-cyan-500/50 hover:text-cyan-400 transition"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                  />
                </svg>
                <span className="font-medium">LinkedIn</span>
                <span className="ml-auto text-xs text-gray-500 font-mono">/in/faizul-bitto</span>
              </a>
            </div>

            <div className="flex items-center gap-2 pt-2 font-mono text-xs text-gray-500">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>response_time: {'<'} 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact