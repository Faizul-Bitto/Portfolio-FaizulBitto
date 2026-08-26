import { useState, useEffect } from 'react'
import { ExternalLink, X } from 'lucide-react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const scrollPos = window.scrollY + 150
      const sections = document.querySelectorAll('section[id]')
      sections.forEach((section) => {
        const top = section.offsetTop
        const height = section.offsetHeight
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#publications', label: 'Publications' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'navbar-scrolled' : ''
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          <h1
            id="logo"
            onClick={handleLogoClick}
            className="text-xl sm:text-2xl font-extrabold tracking-tight cursor-pointer hover:opacity-80 transition font-mono whitespace-nowrap"
          >
            <span className="text-cyan-400">{'<'}</span>
            <span className="gradient-text">FAIZUL</span>
            <span className="text-cyan-400">.DEV</span>
            <span className="text-cyan-400">{'/>'}</span>
          </h1>

           <div className="hidden lg:flex gap-6 text-sm font-medium text-gray-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://drive.google.com/drive/folders/1Ym63we7abOdsyJLNTRzJO0hhNCFTmElc?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tech btn-primary-tech text-sm"
            >
              <span className="btn-corner tl"></span>
              <span className="btn-corner tr"></span>
              <span className="btn-corner bl"></span>
              <span className="btn-corner br"></span>
              <span className="relative z-10">View CV</span>
              <ExternalLink className="w-4 h-4 relative z-10" />
            </a>

            <div
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>

      <div
        id="menu-overlay"
        className={`${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      <div id="mobile-menu" className={`${menuOpen ? 'open' : ''}`}>
        <button
          onClick={() => setMenuOpen(false)}
          className="self-end p-2 text-gray-400 hover:text-cyan-400 transition mb-4"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-link"
            onClick={(e) => handleLinkClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}

export default Navbar
