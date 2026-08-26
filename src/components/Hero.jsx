import { ArrowDownRight, Code2, Mail, Server, Terminal, Zap } from 'lucide-react'
import { useEffect, useRef } from 'react'

function Hero () {
  const typingRef = useRef( null )

  const scrollTo = ( id ) => {
    document.getElementById( id )?.scrollIntoView( { behavior: 'smooth' } )
  }

  // Typewriter effect for the main role
  useEffect( () => {
    const typingEl = typingRef.current
    if ( !typingEl ) return

    const fullText = typingEl.textContent
    typingEl.textContent = ''
    typingEl.classList.add( 'typing-cursor' )

    let charIndex = 0

    function typeChar () {
      if ( charIndex < fullText.length ) {
        typingEl.textContent += fullText.charAt( charIndex )
        charIndex++
        setTimeout( typeChar, 30 + Math.random() * 25 )
      } else {
        typingEl.classList.remove( 'typing-cursor' )
        const cursorSpan = document.createElement( 'span' )
        cursorSpan.className = 'typing-cursor'
        cursorSpan.style.color = '#06b6d4'
        cursorSpan.style.fontWeight = '100'
        cursorSpan.textContent = '|'
        typingEl.parentNode.appendChild( cursorSpan )
      }
    }

    setTimeout( typeChar, 500 )
  }, [] )

  // Terminal typing effect
  useEffect( () => {
    const terminalBody = document.getElementById( 'terminal-body' )
    if ( !terminalBody ) return

    const lines = [
      { text: '$ whoami', color: 'text-gray-500' },
      { text: '> faizul-bitto', color: 'text-cyan-400' },
      { text: '$ cat role.txt', color: 'text-gray-500' },
      { text: '> Backend Engineer • Full Stack Developer', color: 'text-emerald-400' },
      { text: '$ cat stack.txt', color: 'text-gray-500' },
      { text: '> FastAPI • Node.js • NestJS • Laravel', color: 'text-purple-400' },
    ]

    terminalBody.innerHTML = '<span class="text-gray-500">$ </span><span class="text-cyan-400">initializing_portfolio...</span>'

    let lineIndex = 0
    let charIndex = 0
    let lineEl = null

    function typeLine () {
      if ( lineIndex >= lines.length ) {
        const cursor = document.createElement( 'span' )
        cursor.className = 'typing-cursor'
        cursor.style.color = '#06b6d4'
        cursor.textContent = '|'
        terminalBody.appendChild( cursor )
        return
      }

      const line = lines[ lineIndex ]
      if ( charIndex === 0 ) {
        lineEl = document.createElement( 'div' )
        lineEl.className = 'terminal-line'
        terminalBody.appendChild( lineEl )
      }

      if ( charIndex < line.text.length ) {
        const char = line.text.charAt( charIndex )
        const span = document.createElement( 'span' )
        span.className = line.color
        span.textContent = char
        lineEl.appendChild( span )
        charIndex++
        setTimeout( typeLine, 8 )
      } else {
        lineIndex++
        charIndex = 0
        setTimeout( typeLine, 250 )
      }
    }

    setTimeout( typeLine, 800 )

    return () => {
      terminalBody.innerHTML = ''
    }
  }, [] )

  // Floating tech badges animation
  useEffect( () => {
    const badges = document.querySelectorAll( '.float-badge' )
    badges.forEach( ( badge, i ) => {
      badge.style.animationDelay = `${ i * 1.5 }s`
    } )
  }, [] )

  return (
    <section className="min-h-screen pt-28 pb-16 flex items-center relative z-10">
      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 space-y-6 text-center md:text-left">
          {/* Tech status badge */ }
          <div className="reveal flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-2 text-sm text-gray-500 font-mono">
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400">{ '<' }</span>backend<span className="text-cyan-400">{ '/>' }</span>
            </span>
          </div>

          <div className="reveal">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              Faizul Islam <br />
              <span className="gradient-text-shimmer">Bhuiyan</span>
            </h1>
          </div>

          <div className="reveal" style={ { transitionDelay: '0.1s' } }>
            <p className="text-xl font-medium text-cyan-400/90 flex items-center gap-2">
              <Terminal className="w-5 h-5" />
              <span ref={ typingRef } id="typing-text">
                Backend Engineer • Full Stack Developer
              </span>
            </p>
          </div>

          <div className="reveal" style={ { transitionDelay: '0.2s' } }>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl">
              Building robust, scalable backend systems with clean API design
              and solid database architecture. Specialized in{ ' ' }
              <span className="text-cyan-300 font-semibold">FastAPI</span>,{ ' ' }
              <span className="text-indigo-300 font-semibold">Node.js</span>,{ ' ' }
              <span className="text-purple-300 font-semibold">NestJS</span>, and{ ' ' }
              <span className="text-red-300 font-semibold">Laravel</span>.
            </p>
          </div>

          {/* Tech stack quick chips */ }
          <div className="reveal flex flex-wrap gap-2 justify-center md:justify-start" style={ { transitionDelay: '0.25s' } }>
            { [ 'Python', 'FastAPI', 'Node.js', 'NestJS', 'Laravel', 'PostgreSQL' ].map( ( tech ) => (
              <span
                key={ tech }
                className="skill-tag px-3 py-1 rounded-lg bg-gray-800/60 border border-gray-700 text-xs font-medium text-gray-300"
              >
                { tech }
              </span>
            ) ) }
          </div>

          <div className="reveal flex flex-wrap gap-4 pt-2 justify-center md:justify-start" style={ { transitionDelay: '0.3s' } }>
            <button
              onClick={ () => scrollTo( 'projects' ) }
              className="btn-tech btn-primary-tech"
            >
              <span className="btn-corner tl"></span>
              <span className="btn-corner tr"></span>
              <span className="btn-corner bl"></span>
              <span className="btn-corner br"></span>
              <span className="relative z-10">View Projects</span>
              <ArrowDownRight className="w-4 h-4 relative z-10" />
            </button>
            <button
              onClick={ () => scrollTo( 'contact' ) }
              className="btn-tech btn-outline-tech"
            >
              <span className="btn-corner tl"></span>
              <span className="btn-corner tr"></span>
              <span className="btn-corner bl"></span>
              <span className="btn-corner br"></span>
              <span className="relative z-10">Get in Touch</span>
              <Mail className="w-4 h-4 relative z-10" />
            </button>
          </div>

          {/* Quick social links */ }
          <div className="reveal flex items-center gap-3 pt-2 justify-center md:justify-start" style={ { transitionDelay: '0.4s' } }>
            <a
              href="https://github.com/Faizul-Bitto"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon inline-flex items-center justify-center w-10 h-10 rounded-lg"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/faizul-bitto"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon inline-flex items-center justify-center w-10 h-10 rounded-lg"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                />
              </svg>
            </a>
            <a
              href="mailto:fibhuiyanbitto06@gmail.com"
              className="social-icon inline-flex items-center justify-center w-10 h-10 rounded-lg"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="md:col-span-5 flex flex-col items-center gap-8 reveal-scale">
          <div className="hero-img-container relative rounded-2xl">
            {/* Floating tech badges */ }
            <div className="float-badge absolute -top-4 -right-4 z-10 px-3 py-1.5 rounded-lg bg-gray-900/90 border border-cyan-500/50 text-cyan-400 text-xs font-mono shadow-lg shadow-cyan-500/20 backdrop-blur">
              <Zap className="w-3.5 h-3.5 inline mr-1" />
              API
            </div>
            <div className="float-badge absolute -bottom-4 -left-4 z-10 px-3 py-1.5 rounded-lg bg-gray-900/90 border border-indigo-500/50 text-indigo-400 text-xs font-mono shadow-lg shadow-indigo-500/20 backdrop-blur">
              <Server className="w-3.5 h-3.5 inline mr-1" />
              Backend
            </div>
            <img
              src="/profile.png"
              alt="Faizul Islam Bhuiyan"
              className="w-72 h-72 sm:w-80 sm:h-80 object-cover rounded-2xl border border-cyan-500/30 shadow-2xl"
            />
          </div>

          {/* Terminal-style card */ }
          <div className="w-full max-w-sm glass-card rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-900/80 border-b border-gray-800">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              <span className="ml-2 text-xs text-gray-500 font-mono">faizul@dev: ~</span>
            </div>
            <div id="terminal-body" className="px-4 py-3 font-mono text-xs space-y-1.5 min-h-[160px]"></div>
          </div>
        </div>
      </div>

      <style>{ `
        .float-badge {
          animation: floatBadge 3s ease-in-out infinite;
        }
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .terminal-line {
          line-height: 1.6;
        }
      `}</style>
    </section>
  )
}

export default Hero