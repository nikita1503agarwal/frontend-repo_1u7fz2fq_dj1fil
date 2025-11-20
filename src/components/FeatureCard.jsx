import React from 'react'

export default function FeatureCard({ icon: Icon, title, description, detail }) {
  return (
    <div className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
      <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(1200px 1200px at 10% -10%, rgba(88,28,135,0.15), transparent 40%)'}} />
      <div className="relative z-10 flex items-start gap-4">
        {Icon && (
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600/20 to-fuchsia-600/20 ring-1 ring-white/10">
            <Icon className="h-5 w-5 text-indigo-300" />
          </div>
        )}
        <div>
          <h3 className="text-white text-lg font-semibold tracking-tight">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-400">{description}</p>
          {detail && <p className="mt-3 text-xs leading-6 text-zinc-500">{detail}</p>}
        </div>
      </div>
    </div>
  )
}
