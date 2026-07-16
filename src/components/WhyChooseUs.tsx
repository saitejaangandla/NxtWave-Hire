const CARDS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    tag: 'Speed',
    title: 'Profiles in 24–48 Hours',
    body: 'No waiting weeks. Our dedicated sourcing team delivers pre-screened, verified profiles to your inbox within 24–48 business hours of receiving your requirement—not days, not weeks.',
    color: '#2563EB',
    bg: '#EFF6FF',
    stat: '48h',
    statLabel: 'avg turnaround',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    tag: 'Quality',
    title: 'Two-Layer Candidate Verification',
    body: 'Every candidate passes our proprietary dual-screening — fitment assessment for soft skills, culture fit and role clarity, followed by rigorous technical validation.',
    color: '#06B6D4',
    bg: '#ECFEFF',
    stat: '2×',
    statLabel: 'screening layers',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    tag: 'Precision',
    title: 'Experienced Professionals Only',
    body: 'We exclusively source candidates with 1–10 years of relevant hands-on experience. No fresh graduates, no career switchers — only proven talent ready to contribute from day one.',
    color: '#7C3AED',
    bg: '#F5F3FF',
    stat: '1–10',
    statLabel: 'years only',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    tag: 'Risk-Free',
    title: 'Success-Based Hiring Model',
    body: "You only pay when you hire. No retainers, no upfront costs. Our success-based model means we're 100% aligned with your outcomes — your win is literally our revenue.",
    color: '#22C55E',
    bg: '#F0FDF4',
    stat: '₹0',
    statLabel: 'upfront',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section" id="why" style={{ background: '#F8FAFC' }}>
      <div className="wrap">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="pill" style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', color: '#2563EB', marginBottom: '16px' }}>
            Why Choose Us
          </div>
          <h2 style={{ fontSize: 'clamp(32px,4vw,50px)', fontWeight: 900, letterSpacing: '-1.8px', lineHeight: 1.08, margin: '0 auto 16px', color: '#0F172A' }}>
            Built for Speed.<br />
            <span className="gradient-text">Engineered for Quality.</span>
          </h2>
          <p style={{ fontSize: '17px', color: '#64748B', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            Four principles that set NXT Wave Hire apart from every other recruiter you've worked with.
          </p>
        </div>

        {/* 2×2 grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,280px),1fr))',
          gap: '18px',
        }}>
          {CARDS.map((c, i) => (
            <div key={i} className="card" style={{ padding: '32px 28px', position: 'relative', overflow: 'hidden' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${c.color}50`; e.currentTarget.style.boxShadow = `0 20px 60px ${c.color}1A` }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.boxShadow = '' }}>

              {/* Top accent line */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${c.color}, ${c.color}55)`, borderRadius: '20px 20px 0 0' }} />

              {/* Icon box */}
              <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: c.bg, color: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                {c.icon}
              </div>

              {/* Tag + stat */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <div className="pill" style={{ background: c.bg, color: c.color, border: 'none', fontSize: '10px', padding: '3px 10px' }}>
                  {c.tag}
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: c.color, letterSpacing: '-.5px', lineHeight: 1 }}>{c.stat}</div>
                  <div style={{ fontSize: '9px', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '.5px' }}>{c.statLabel}</div>
                </div>
              </div>

              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0F172A', lineHeight: 1.3, marginBottom: '10px' }}>{c.title}</h3>
              <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.72, margin: 0 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
