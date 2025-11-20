import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function GradientButton({ children = 'Coming soon', onClick, icon = true, className = '', as = 'button', ...props }) {
  const Comp = as
  return (
    <Comp
      onClick={onClick}
      className={`relative inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium text-white transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 ${className}`}
      {...props}
    >
      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/30 via-fuchsia-500/30 to-cyan-500/30 blur-sm" aria-hidden="true" />
      <span className="absolute inset-[1px] rounded-[10px] bg-black/40 backdrop-blur-sm ring-1 ring-white/10" aria-hidden="true" />
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <ArrowRight className="h-4 w-4 opacity-80" />}
      </span>
    </Comp>
  )
}
