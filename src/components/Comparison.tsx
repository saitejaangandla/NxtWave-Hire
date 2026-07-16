const ROWS = [
  { trad: 'Resume forwarding without any screening', ours: 'Pre-screened profiles with full assessment' },
  { trad: 'Manual resume filtering by HR teams', ours: 'Verified candidates, zero noise in the shortlist' },
  { trad: 'Weeks-long hiring cycles with no guarantee', ours: 'Fast ~10-day turnaround with clear milestones' },
  { trad: 'Zero technical validation before sharing', ours: 'Mandatory two-layer screening, every candidate' },
  { trad: 'Random CVs pulled from job boards', ours: 'Quality-assured profiles with our match score' },
  { trad: 'Upfront retainer fees regardless of outcome', ours: 'Success-based pricing — you pay only on hire' },
  { trad: 'Minimal recruiter communication and updates', ours: 'Dedicated partner with daily progress updates' },
]

export default function Comparison() {
  return (
    <section className="section" style={{ background: '#fff' }}>
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="pill" style={{ background: '#FEF2F2', border: '1px solid #FECACA', color: '#DC2626', marginBottom: '16px' }}>
            Why Clients Love Us
          </div>
          <h2 style={{ fontSize: 'clamp(32px,4vw,50px)', fontWeight: 900, letterSpacing: '-1.8px', lineHeight: 1.08, margin: '0 auto 16px', color: '#0F172A' }}>
            A Different Kind of<br />
            <span className="gradient-text">Recruitment Partner.</span>
          </h2>
          <p style={{ fontSize: '17px', color: '#64748B', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
            See exactly how we compare — and why leading companies switched to NXT Wave Hire.
          </p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Column headers */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 52px 1fr', gap: '12px', marginBottom: '10px', padding: '0 4px' }}>
            <div style={{ padding: '14px 20px', borderRadius: '12px', background: '#FEF2F2', border: '1.5px solid #FECACA', textAlign: 'center' }}>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#DC2626' }}>Traditional Recruitment</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#94A3B8' }}>VS</span>
            </div>
            <div style={{ padding: '14px 20px', borderRadius: '12px', background: 'linear-gradient(135deg,#EFF6FF,#F0FDFE)', border: '1.5px solid #BFDBFE', textAlign: 'center' }}>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#2563EB' }}>NXT Wave Hire Process</div>
            </div>
          </div>

          {/* Rows */}
          {ROWS.map((r, i) => (
            <div key={i}
              style={{ display: 'grid', gridTemplateColumns: '1fr 52px 1fr', gap: '12px', marginBottom: '7px', transition: 'transform .18s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.008)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = '' }}>
              {/* Traditional */}
              <div style={{
                padding: '13px 18px', borderRadius: '11px', background: '#FFFBFB',
                border: '1.5px solid #FEE2E2', display: 'flex', alignItems: 'center', gap: '10px',
              }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#FEE2E2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round"/></svg>
                </div>
                <span style={{ fontSize: '13.5px', color: '#DC2626', fontWeight: 500 }}>{r.trad}</span>
              </div>
              {/* Arrow */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="#CBD5E1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              {/* Ours */}
              <div style={{
                padding: '13px 18px', borderRadius: '11px',
                background: 'linear-gradient(135deg,#F0FDF4,#EFF6FF)',
                border: '1.5px solid #BBF7D0', display: 'flex', alignItems: 'center', gap: '10px',
              }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span style={{ fontSize: '13.5px', color: '#15803D', fontWeight: 600 }}>{r.ours}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
