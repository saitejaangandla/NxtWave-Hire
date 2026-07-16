export default function FinalCTA() {
  return (
    <section style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}
      className="dark-mesh">
      {/* Grid texture */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.035) 1px, transparent 1px)', backgroundSize: '30px 30px', pointerEvents: 'none' }} />

      {/* Glows */}
      <div style={{ position: 'absolute', top: '-120px', right: '8%', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,.22) 0%, transparent 68%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-100px', left: '5%', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,.18) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div className="pill" style={{ background: 'rgba(37,99,235,.2)', border: '1px solid rgba(37,99,235,.4)', color: '#93C5FD', marginBottom: '28px' }}>
          <div className="live-dot" style={{ background: '#06B6D4' }} />
          Start Hiring Today
        </div>

        <h2 style={{ fontSize: 'clamp(38px,5.5vw,64px)', fontWeight: 900, letterSpacing: '-2.5px', lineHeight: 1.06, color: '#fff', margin: '0 auto 20px' }}>
          Looking for Your<br />
          <span className="gradient-text-warm">Next Great Hire?</span>
        </h2>

        <p style={{ fontSize: '18px', color: '#94A3B8', maxWidth: '500px', margin: '0 auto 40px', lineHeight: 1.72 }}>
          Partner with us to receive verified candidate profiles in as little as <strong style={{ color: '#fff' }}>24–48 hours</strong>. No upfront fees. No risk. Just results.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '9px',
            padding: '15px 30px', borderRadius: '12px',
            background: 'linear-gradient(135deg,#2563EB,#1D4ED8)',
            color: '#fff', fontWeight: 700, fontSize: '15px', textDecoration: 'none',
            boxShadow: '0 4px 22px rgba(37,99,235,.5)', transition: 'all .25s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 36px rgba(37,99,235,.6)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 22px rgba(37,99,235,.5)' }}>
            Submit Hiring Requirement
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '9px',
            padding: '15px 28px', borderRadius: '12px',
            background: 'rgba(255,255,255,.08)', color: '#fff', fontWeight: 600, fontSize: '15px', textDecoration: 'none',
            border: '1.5px solid rgba(255,255,255,.18)', transition: 'all .25s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,.14)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.35)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.18)'; e.currentTarget.style.transform = '' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/><line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/></svg>
            Book a Consultation
          </a>
        </div>

        {/* Trust row */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '28px', marginTop: '48px', flexWrap: 'wrap' }}>
          {[
            ['⚡', '24–48h profile delivery'],
            ['🛡️', '2-layer verified candidates'],
            ['💼', 'Success-based pricing'],
            ['✓', 'No upfront fees'],
          ].map(([icon, text], i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              <span style={{ fontSize: '14px' }}>{icon}</span>
              <span style={{ fontSize: '14px', color: '#94A3B8', fontWeight: 500 }}>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
