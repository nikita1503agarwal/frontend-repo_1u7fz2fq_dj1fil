import React from 'react'

export default function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative py-24 sm:py-28 md:py-32 ${className}`}>
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{backgroundImage:'url("data:image/svg+xml,%3Csvg width=\'64\' height=\'64\' viewBox=\'0 0 64 64\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 32h64M32 0v64\' stroke=\'%23ffffff\' stroke-opacity=\'0.05\'/%3E%3C/svg%3E")'}} />
      <div className="container mx-auto max-w-6xl px-6">{children}</div>
    </section>
  )
}
