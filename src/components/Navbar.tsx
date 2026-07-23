import { useState, useEffect } from 'react'

export default function Navbar({ onOpenContact }: { onOpenContact: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const nav = [
    { label: 'Why Us', href: '#why' },
    { label: 'Screening', href: '#screening' },
    { label: 'Process', href: '#process' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Results', href: '#metrics' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      height: '68px',
      transition: 'background .3s, border-color .3s, box-shadow .3s',
      background: scrolled ? 'rgba(248,250,252,.94)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(226,232,240,.7)' : '1px solid transparent',
      boxShadow: scrolled ? '0 1px 20px rgba(15,23,42,.06)' : 'none',
    }}>
      <div className="wrap" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          {/* Left side: NXT WAVE */}
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1', fontFamily: "'Inter', sans-serif" }}>
            <span style={{ fontSize: '15px', fontWeight: 900, color: '#0072C6', letterSpacing: '0.3px' }}>NXT</span>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#0A2540', display: 'flex', alignItems: 'center' }}>
              W
              <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
                A
                <span style={{ position: 'absolute', top: '1px', left: '1px', fontSize: '6px', color: '#0072C6', fontWeight: 900 }}>▲</span>
              </span>
              V
              <span style={{ background: '#0A2540', color: '#fff', fontSize: '8px', padding: '1px 2px 0px 2.5px', borderRadius: '1.5px', marginLeft: '1px', fontWeight: 900, display: 'inline-flex', alignItems: 'center', height: '10px', lineHeight: '1' }}>E</span>
              <span style={{ fontSize: '5px', fontWeight: 900, verticalAlign: 'super', marginLeft: '1px', alignSelf: 'flex-start', marginTop: '1.5px' }}>TM</span>
            </span>
          </div>
          {/* Right side: HIRE Capsule */}
          <div style={{
            background: '#0072C6',
            color: '#fff',
            padding: '4px 10px',
            borderRadius: '6px',
            fontWeight: 800,
            fontSize: '12px',
            letterSpacing: '0.5px',
            display: 'flex',
            alignItems: 'center',
            height: '22px',
            marginLeft: '4px'
          }}>
            HIRE
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="desk-nav" style={{ display: 'flex', gap: '2px' }}>
          {nav.map(n => (
            <a key={n.label} href={n.href} style={{
              padding: '7px 13px', borderRadius: '8px',
              fontSize: '14px', fontWeight: 500, color: '#475569',
              textDecoration: 'none', transition: 'all .18s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#F1F5F9'; e.currentTarget.style.color = '#0F172A' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#475569' }}>
              {n.label}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="desk-nav" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button
            onClick={onOpenContact}
            style={{
              padding: '8px 17px', borderRadius: '9px',
              fontSize: '13.5px', fontWeight: 600, color: '#2563EB',
              textDecoration: 'none', border: '1.5px solid #BFDBFE',
              background: 'transparent', cursor: 'pointer',
              transition: 'all .2s', fontFamily: 'inherit',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#EFF6FF'; e.currentTarget.style.borderColor = '#93C5FD' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = '#BFDBFE' }}>
            Talk to Expert
          </button>
          <a href="#contact" style={{
            padding: '8px 18px', borderRadius: '9px',
            fontSize: '13.5px', fontWeight: 700, color: '#fff',
            textDecoration: 'none',
            background: 'linear-gradient(135deg,#2563EB,#1D4ED8)',
            boxShadow: '0 2px 10px rgba(37,99,235,.32)',
            transition: 'all .2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 5px 18px rgba(37,99,235,.42)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(37,99,235,.32)' }}>
            Submit Requirement
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="mob-toggle" onClick={() => setMobileOpen(!mobileOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '6px', color: '#0F172A' }}>
          {mobileOpen
            ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
            : <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{ background: '#fff', borderTop: '1px solid #E2E8F0', padding: '16px 28px 24px' }}>
          {nav.map(n => (
            <a key={n.label} href={n.href} onClick={() => setMobileOpen(false)}
              style={{ display: 'block', padding: '12px 0', fontSize: '15px', fontWeight: 500, color: '#475569', textDecoration: 'none', borderBottom: '1px solid #F1F5F9' }}>
              {n.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileOpen(false)}
            style={{ display: 'block', marginTop: '16px', padding: '12px', borderRadius: '10px', textAlign: 'center', background: 'linear-gradient(135deg,#2563EB,#1D4ED8)', color: '#fff', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>
            Submit Requirement
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desk-nav  { display: none !important; }
          .mob-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
