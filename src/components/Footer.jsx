import { Heart, Code2 } from 'lucide-react'

function Footer() {
  return (
    <footer className="tech-footer border-t border-gray-800/60 py-8 text-center text-gray-500 text-sm relative z-10">
      <div className="max-w-6xl mx-auto px-6 space-y-3">
        <div className="flex items-center justify-center gap-2 font-mono text-xs">
          <span className="text-cyan-400">{'<'}</span>
          <span className="text-gray-400">built_with</span>
          <span className="text-cyan-400">=</span>
          <span className="text-emerald-400">"React"</span>
          <span className="text-cyan-400">/</span>
          <span className="text-gray-400">+</span>
          <span className="text-emerald-400">"Tailwind"</span>
          <span className="text-cyan-400">{'/>'}</span>
        </div>

        <div className="flex items-center justify-center gap-2">
          <Code2 className="w-4 h-4 text-cyan-400" />
          <span>© 2026 Faizul Islam Bhuiyan</span>
          <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
          <span>All rights reserved</span>
        </div>

        <div className="font-mono text-xs text-gray-600">
          <span className="text-cyan-500/60">$</span> deploy --production --success
        </div>
      </div>
    </footer>
  )
}

export default Footer
