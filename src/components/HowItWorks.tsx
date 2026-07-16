import { useState } from 'react'

const STEPS = [
  {
    n: '01', color: '#2563EB', time: 'Day 0',
    title: 'Receive Hiring Requirement',
    body: 'You share the role details, required skills, experience band, team context, and compensation range. We assign a dedicated recruitment partner within 2 hours of receiving your brief.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  },
  {
    n: '02', color: '#7C3AED', time: 'Day 1',
    title: 'Source Experienced Candidates',
    body: 'Our network spans 50,000+ experienced professionals. We actively headhunt from LinkedIn, referrals, alumni networks, domain communities, and our proprietary talent database.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/><line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></svg>,
  },
  {
    n: '03', color: '#06B6D4', time: 'Day 1–2',
    title: 'Two-Layer Screening',
    body: 'Every candidate undergoes our structured fitment interview (communication, culture, motivation, compensation fit) followed by a technical deep-dive (domain skills, problem solving, hands-on assessment).',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    n: '04', color: '#22C55E', time: '24–48 hrs',
    title: 'Share Verified Profiles',
    body: 'Within 24–48 hours you receive 3–5 pre-screened candidate profiles — each with our assessment report, interview notes, fitment score, and a specific hiring recommendation.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 2L15 22l-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    n: '05', color: '#F59E0B', time: '~7 days',
    title: 'Interviews & Hiring',
    body: 'You only meet the best-fit candidates. We coordinate scheduling, provide interview prep for candidates, support offer negotiation, and manage the closing process end-to-end.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  },
]

export default function HowItWorks() {
  const [active, setActive] = useState(2)

  return (
    <section className="section" id="process" style={{ background: '#fff' }}>
      <div className="wrap">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="pill" style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', color: '#16A34A', marginBottom: '16px' }}>
            How It Works
          </div>
          <h2 style={{ fontSize: 'clamp(32px,4vw,50px)', fontWeight: 900, letterSpacing: '-1.8px', lineHeight: 1.08, margin: '0 auto 16px', color: '#0F172A' }}>
            Requirement to Hire<br />
            <span className="gradient-text">in ~7 Days.</span>
          </h2>
          <p style={{ fontSize: '17px', color: '#64748B', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
            A five-step process designed for speed without sacrificing candidate quality.
          </p>
        </div>

        {/* Timeline row */}
        <div style={{ position: 'relative', marginBottom: '40px' }}>
          {/* Connector line */}
          <div style={{
            position: 'absolute', top: '36px', left: 'calc(10% + 36px)', right: 'calc(10% + 36px)',
            height: '2px',
            background: `linear-gradient(90deg, ${STEPS.map(s => s.color).join(', ')})`,
            opacity: .25, zIndex: 0,
          }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '16px', position: 'relative' }}>
            {STEPS.map((s, i) => (
              <div key={i} onClick={() => setActive(i)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', position: 'relative', zIndex: 1 }}>
                {/* Step circle */}
                <div style={{
                  width: '72px', height: '72px', borderRadius: '50%',
                  background: active === i ? s.color : '#fff',
                  border: `2px solid ${active === i ? s.color : '#E2E8F0'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: active === i ? '#fff' : s.color,
                  boxShadow: active === i ? `0 8px 28px ${s.color}40` : '0 2px 8px rgba(15,23,42,.05)',
                  transition: 'all .3s',
                  marginBottom: '14px',
                }}>
                  {s.icon}
                </div>

                {/* Time badge */}
                <div style={{
                  padding: '3px 9px', borderRadius: '999px',
                  background: `${s.color}14`, color: s.color,
                  fontSize: '10.5px', fontWeight: 700, marginBottom: '6px',
                }}>{s.time}</div>

                <div style={{ fontSize: '12px', fontWeight: 700, color: '#0F172A', textAlign: 'center', lineHeight: 1.3, opacity: active === i ? 1 : .6 }}>
                  {s.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detail panel */}
        <div key={active} style={{
          padding: '32px 36px',
          borderRadius: '20px',
          background: `linear-gradient(135deg, ${STEPS[active].color}0A, ${STEPS[active].color}05)`,
          border: `1.5px solid ${STEPS[active].color}22`,
          display: 'flex', alignItems: 'flex-start', gap: '24px',
          animation: 'scaleUp .3s ease both',
        }}>
          <div style={{
            width: '56px', height: '56px', borderRadius: '16px', flexShrink: 0,
            background: STEPS[active].color,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff',
            boxShadow: `0 8px 24px ${STEPS[active].color}40`,
          }}>{STEPS[active].icon}</div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, color: STEPS[active].color, letterSpacing: '1px' }}>STEP {STEPS[active].n}</span>
              <div style={{ padding: '2px 9px', borderRadius: '999px', background: `${STEPS[active].color}18`, color: STEPS[active].color, fontSize: '11px', fontWeight: 700 }}>
                {STEPS[active].time}
              </div>
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', margin: '0 0 8px', letterSpacing: '-.4px' }}>{STEPS[active].title}</h3>
            <p style={{ fontSize: '15px', color: '#64748B', lineHeight: 1.75, maxWidth: '640px', margin: 0 }}>{STEPS[active].body}</p>
          </div>
        </div>

        {/* Step indicator dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '7px', marginTop: '22px' }}>
          {STEPS.map((s, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              width: active === i ? '26px' : '7px', height: '7px', borderRadius: '999px',
              background: active === i ? s.color : '#CBD5E1',
              border: 'none', cursor: 'pointer', transition: 'all .28s', padding: 0,
            }} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scaleUp { from { opacity:0; transform:scale(.96) } to { opacity:1; transform:scale(1) } }
        @media (max-width:768px) {
          .step-grid { grid-template-columns: repeat(3,1fr) !important; }
        }
        @media (max-width:480px) {
          .step-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  )
}
