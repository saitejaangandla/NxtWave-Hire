function CheckRow({ label, desc }: { label: string; desc: string }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '13px',
      padding: '11px 14px', borderRadius: '11px',
      background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.07)',
      marginBottom: '7px', transition: 'all .18s', cursor: 'default',
    }}
    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.14)' }}
    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.07)' }}>
      <div style={{
        width: '30px', height: '30px', borderRadius: '8px', flexShrink: 0,
        background: 'rgba(34,197,94,.2)', border: '1px solid rgba(34,197,94,.3)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
          <path d="M20 6L9 17l-5-5" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div>
        <div style={{ fontSize: '13px', fontWeight: 700, color: '#F1F5F9' }}>{label}</div>
        <div style={{ fontSize: '11px', color: '#64748B', marginTop: '1px' }}>{desc}</div>
      </div>
    </div>
  )
}

export default function ScreeningProcess() {
  const fitment = [
    { l: 'Communication Skills',    d: 'Verbal clarity, articulation, confidence' },
    { l: 'Culture Fit',             d: 'Values alignment and work-style match' },
    { l: 'Role Alignment',          d: 'Career goals vs. role expectations' },
    { l: 'Compensation Expectations',d: 'Realistic vs. market benchmarks' },
    { l: 'Career Stability',        d: 'Tenure patterns and motivation for move' },
  ]
  const technical = [
    { l: 'Skills Assessment',       d: 'Core domain knowledge evaluation' },
    { l: 'Hands-on Experience',     d: 'Real project depth and complexity' },
    { l: 'Problem Solving',         d: 'Analytical thinking under pressure' },
    { l: 'Role Expertise',          d: 'Domain-specific depth and breadth' },
    { l: 'Technical Interview',     d: 'Live evaluation by subject-matter expert' },
  ]

  return (
    <section className="section dark-mesh" id="screening" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Grid texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(rgba(255,255,255,.035) 1px, transparent 1px)',
        backgroundSize: '28px 28px', pointerEvents: 'none',
      }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="pill" style={{ background: 'rgba(37,99,235,.2)', border: '1px solid rgba(37,99,235,.4)', color: '#93C5FD', marginBottom: '16px' }}>
            Screening Process
          </div>
          <h2 style={{ fontSize: 'clamp(32px,4vw,50px)', fontWeight: 900, letterSpacing: '-1.8px', lineHeight: 1.08, margin: '0 auto 16px', color: '#fff' }}>
            No Guesswork.<br />
            <span className="gradient-text-warm">Only Verified Professionals.</span>
          </h2>
          <p style={{ fontSize: '17px', color: '#94A3B8', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            Our two-layer screening eliminates noise so you only meet candidates ready to join and succeed.
          </p>
        </div>

        {/* Two glass cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', gap: '20px', marginBottom: '36px' }}>
          {/* Fitment */}
          <div style={{
            borderRadius: '24px', padding: '36px 30px', position: 'relative', overflow: 'hidden',
            background: 'rgba(37,99,235,.07)',
            border: '1px solid rgba(37,99,235,.25)',
            backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
            transition: 'all .3s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,99,235,.12)'; e.currentTarget.style.borderColor = 'rgba(37,99,235,.4)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(37,99,235,.07)'; e.currentTarget.style.borderColor = 'rgba(37,99,235,.25)'; e.currentTarget.style.transform = '' }}>
            {/* Top glow */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to bottom,rgba(37,99,235,.18),transparent)', borderRadius: '24px 24px 0 0', pointerEvents: 'none' }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#2563EB', boxShadow: '0 0 0 3px rgba(37,99,235,.25)' }} />
                <span style={{ fontSize: '10px', fontWeight: 800, color: '#93C5FD', textTransform: 'uppercase', letterSpacing: '1px' }}>Layer 01</span>
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#fff', letterSpacing: '-.4px', margin: '0 0 6px' }}>Fitment Screening</h3>
              <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '22px', lineHeight: 1.6 }}>Human-led structured interview assessing soft dimensions</p>
              {fitment.map((f, i) => <CheckRow key={i} label={f.l} desc={f.d} />)}
            </div>
          </div>

          {/* Technical */}
          <div style={{
            borderRadius: '24px', padding: '36px 30px', position: 'relative', overflow: 'hidden',
            background: 'rgba(6,182,212,.07)',
            border: '1px solid rgba(6,182,212,.25)',
            backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
            transition: 'all .3s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(6,182,212,.12)'; e.currentTarget.style.borderColor = 'rgba(6,182,212,.4)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(6,182,212,.07)'; e.currentTarget.style.borderColor = 'rgba(6,182,212,.25)'; e.currentTarget.style.transform = '' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to bottom,rgba(6,182,212,.15),transparent)', borderRadius: '24px 24px 0 0', pointerEvents: 'none' }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#06B6D4', boxShadow: '0 0 0 3px rgba(6,182,212,.25)' }} />
                <span style={{ fontSize: '10px', fontWeight: 800, color: '#67E8F9', textTransform: 'uppercase', letterSpacing: '1px' }}>Layer 02</span>
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#fff', letterSpacing: '-.4px', margin: '0 0 6px' }}>Technical Validation</h3>
              <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '22px', lineHeight: 1.6 }}>Domain expert-led evaluation of skills and depth</p>
              {technical.map((t, i) => <CheckRow key={i} label={t.l} desc={t.d} />)}
            </div>
          </div>
        </div>

        {/* Arrow down */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '3px', marginBottom: '28px' }}>
          {[1,2,3].map(n => (
            <div key={n} style={{ width: '1.5px', height: '10px', background: `rgba(37,99,235,${.2 + n * .15})`, borderRadius: '1px' }} />
          ))}
          <div style={{ color: '#2563EB' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>

        {/* Verified badge */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '22px',
            padding: '26px 44px', borderRadius: '20px',
            background: 'linear-gradient(135deg,rgba(34,197,94,.14),rgba(34,197,94,.07))',
            border: '1.5px solid rgba(34,197,94,.35)',
            animation: 'pulseRingGreen 2.4s ease-in-out infinite',
          }}>
            <div style={{
              width: '60px', height: '60px', borderRadius: '50%',
              background: 'linear-gradient(135deg,#22C55E,#16A34A)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 8px 28px rgba(34,197,94,.45)',
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '24px', fontWeight: 900, color: '#fff', letterSpacing: '-.5px' }}>Verified Candidate</div>
              <div style={{ fontSize: '14px', color: '#86EFAC', marginTop: '3px' }}>Both layers passed · Ready for client interviews</div>
            </div>
            <div style={{
              padding: '7px 18px', borderRadius: '999px',
              background: 'rgba(34,197,94,.22)', border: '1px solid rgba(34,197,94,.4)',
              fontSize: '13px', fontWeight: 800, color: '#86EFAC',
            }}>✓ Approved</div>
          </div>
        </div>
      </div>
    </section>
  )
}
