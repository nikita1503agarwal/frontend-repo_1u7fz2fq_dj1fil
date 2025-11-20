import React, { useState } from 'react'
import GradientButton from './GradientButton'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const submit = async (e) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      return
    }
    setStatus('loading')
    // Fake delay to show state
    await new Promise((r) => setTimeout(r, 800))
    setStatus('success')
  }

  return (
    <form onSubmit={submit} className="w-full max-w-xl mx-auto">
      <div className="relative flex items-center gap-3">
        <input
          type="email"
          aria-label="Email address"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); if (status!=='idle') setStatus('idle') }}
          className="flex-1 rounded-xl bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          required
        />
        <GradientButton as="button" type="submit" icon={false} className="px-6 py-3">
          {status === 'loading' ? 'Submitting…' : status === 'success' ? 'Added ✓' : 'Join waitlist'}
        </GradientButton>
      </div>
      {status === 'error' && (
        <p role="alert" className="mt-2 text-xs text-red-400">Please enter a valid email.</p>
      )}
      {status === 'success' && (
        <p className="mt-2 text-xs text-emerald-400">Thanks! Well keep you posted.</p>
      )}
    </form>
  )
}
