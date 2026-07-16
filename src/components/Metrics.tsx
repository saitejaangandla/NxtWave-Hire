import { useEffect, useRef, useState } from 'react'

function useCountUp(target: number, duration = 1400) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true
        const t0 = Date.now()
        const tick = () => {
          const p = Math.min((Date.now() - t0) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setVal(Math.round(eased * target))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: .5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target, duration])

  return { val, ref }
}

function Metric({ value, suffix, prefix = '', label, desc, color, icon }: {
  value: number; suffix?: string; prefix?: string
  label: string; desc: string; color: string; icon: React.ReactNode
}) {
  const { val, ref } = useCountUp(value)
  return (
    <div ref={ref} className="card" style={{ padding: '32px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden', cursor: 'default' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = `${color}44`; e.currentTarget.style.boxShadow = `0 20px 60px ${color}18` }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.boxShadow = '' }}>
      {/* Accent strip */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: `linear-gradient(90deg,${color},${color}66)` }} />

      <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: `${color}12`, color, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
        {icon}
      </div>

      <div style={{ fontSize: '44px', fontWeight: 900, color, letterSpacing: '-2px', lineHeight: 1 }}>
        {prefix}{val}{suffix}
      </div>
      <div style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A', margin: '8px 0 6px' }}>{label}</div>
      <div style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.55 }}>{desc}</div>
    </div>
  )
}

export default function Metrics() {
  const metrics = [
    {
      value: 48, suffix: 'h', label: 'Profile Turnaround', color: '#2563EB',
      desc: 'From your requirement to verified profiles in your inbox',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
    },
    {
      value: 5, suffix: ' Days', label: 'Target Closure', color: '#7C3AED',
      desc: 'Average time from profile delivery to signed offer',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" /><line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" /></svg>,
    },
    {
      value: 7, suffix: ' Days', label: 'End-to-End Hiring', color: '#06B6D4',
      desc: 'Complete cycle from requirement to candidate joining',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    },
    {
      value: 2, suffix: '×', label: 'Candidate Screening', color: '#22C55E',
      desc: 'Fitment layer + technical layer, every single candidate',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    },
    {
      value: 0, prefix: '₹', label: 'Upfront Fees', color: '#F59E0B',
      desc: 'Success-based only — you pay when you hire, nothing before',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
    },
  ]

  return (
    <section className="section" id="metrics" style={{ background: '#F8FAFC' }}>
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="pill" style={{ background: '#FFF7ED', border: '1px solid #FED7AA', color: '#C2410C', marginBottom: '16px' }}>
            Key Metrics
          </div>
          <h2 style={{ fontSize: 'clamp(32px,4vw,50px)', fontWeight: 900, letterSpacing: '-1.8px', lineHeight: 1.08, margin: '0 auto 16px', color: '#0F172A' }}>
            Numbers That Define<br />
            <span className="gradient-text">Our Standard.</span>
          </h2>
          <p style={{ fontSize: '17px', color: '#64748B', maxWidth: '460px', margin: '0 auto', lineHeight: 1.7 }}>
            We measure everything that matters — speed, quality, and outcomes.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,210px),1fr))', gap: '18px' }}>
          {metrics.map((m, i) => <Metric key={i} {...m} />)}
        </div>
      </div>
    </section>
  )
}
