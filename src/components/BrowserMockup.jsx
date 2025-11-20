import React from 'react'

export default function BrowserMockup({ children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl overflow-hidden ${className}`} role="figure" aria-label="App mockup browser window">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/40">
        <span className="h-3 w-3 rounded-full bg-red-500/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <span className="h-3 w-3 rounded-full bg-green-500/70" />
        <div className="ml-3 h-6 flex-1 rounded-md bg-white/5 ring-1 ring-white/10" />
      </div>
      <div className="bg-gradient-to-b from-black/40 to-black/20">{children}</div>
    </div>
  )
}
