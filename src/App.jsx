import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Publications from './components/Publications'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import './App.css'

function App() {
  useEffect(() => {
    document.body.classList.add('bg-grid')
    return () => document.body.classList.remove('bg-grid')
  }, [])

  useEffect(() => {
    const cursorGlow = document.getElementById('cursor-glow')
    if (cursorGlow) {
      const handleMouseMove = (e) => {
        cursorGlow.style.left = e.clientX + 'px'
        cursorGlow.style.top = e.clientY + 'px'
      }
      const handleMouseLeave = () => {
        cursorGlow.style.opacity = '0'
      }
      const handleMouseEnter = () => {
        cursorGlow.style.opacity = '1'
      }

      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseleave', handleMouseLeave)
      document.addEventListener('mouseenter', handleMouseEnter)

      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseleave', handleMouseLeave)
        document.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [])

  useEffect(() => {
    const progressBar = document.getElementById('scroll-progress')
    if (progressBar) {
      const handleScroll = () => {
        const scrollTop = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = (scrollTop / docHeight) * 100
        progressBar.style.width = progress + '%'
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const canvas = document.getElementById('particles-canvas')
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let particles = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const colors = ['#06b6d4', '#6366f1', '#c084fc', '#22d3ee', '#818cf8']

    class Particle {
      constructor() {
        this.reset()
      }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2.5 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.4
        this.speedY = (Math.random() - 0.5) * 0.4
        this.opacity = Math.random() * 0.5 + 0.1
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.pulse = Math.random() * Math.PI * 2
      }
      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.pulse += 0.02
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1
      }
      draw() {
        const pulseOpacity = this.opacity * (0.7 + 0.3 * Math.sin(this.pulse))
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.globalAlpha = pulseOpacity
        ctx.fill()
        ctx.globalAlpha = 1
      }
    }

    const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 12000))
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    let animationId
    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.update()
        p.draw()
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.08 * (1 - dist / 150)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(drawParticles)
    }

    drawParticles()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [])

  useEffect(() => {
    const revealClasses = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger'

    const fallbackTimer = setTimeout(() => {
      document.querySelectorAll(revealClasses).forEach((el) => {
        el.classList.add('revealed')
      })
    }, 800)

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    )

    document.querySelectorAll(revealClasses).forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight) {
        el.classList.add('revealed')
      } else {
        revealObserver.observe(el)
      }
    })

    return () => {
      clearTimeout(fallbackTimer)
      revealObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    document.querySelectorAll('.glass-card').forEach((card) => {
      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        card.style.setProperty('--mouse-x', x + '%')
        card.style.setProperty('--mouse-y', y + '%')
      }
      card.addEventListener('mousemove', handleMouseMove)
      return () => card.removeEventListener('mousemove', handleMouseMove)
    })
  }, [])

  useEffect(() => {
    const initIcons = () => {
      if (window.lucide) {
        window.lucide.createIcons()
      }
    }
    initIcons()
    const interval = setInterval(initIcons, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div id="cursor-glow"></div>

      <div className="glow-orb glow-1"></div>
      <div className="glow-orb glow-2"></div>
      <div className="glow-orb glow-3"></div>
      <div className="glow-orb glow-4"></div>

      <canvas id="particles-canvas"></canvas>

      <div id="menu-overlay"></div>

      <div id="mobile-menu">
        <a href="#about" className="mobile-link">About</a>
        <a href="#skills" className="mobile-link">Skills</a>
        <a href="#experience" className="mobile-link">Experience</a>
        <a href="#projects" className="mobile-link">Projects</a>
        <a href="#publications" className="mobile-link">Publications</a>
        <a href="#certifications" className="mobile-link">Certifications</a>
        <a href="#education" className="mobile-link">Education</a>
        <a href="#contact" className="mobile-link">Contact</a>
      </div>

      <div id="scroll-progress"></div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Publications />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
