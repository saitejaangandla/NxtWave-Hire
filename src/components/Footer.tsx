export default function Footer() {
  const year = new Date().getFullYear()

  const cols = [
    { title: 'Company',      links: ['About Us','Our Process','Services','Careers','Blog'] },
    { title: 'For Employers',links: ['Submit Requirement','Screening Method','Hiring Process','Success Stories','Pricing Model'] },
    { title: 'For Candidates',links: ['Join Talent Network','Current Openings','Interview Prep','Career Resources','Referral Program'] },
    { title: 'Legal',        links: ['Privacy Policy','Terms of Service','Cookie Policy','GDPR Compliance'] },
  ]

  return (
    <footer style={{ background: '#0A0F1A', color: '#64748B' }}>
      <div className="wrap" style={{ padding: '64px 28px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: '40px' }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              {/* Left side: NXT WAVE */}
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1', fontFamily: "'Inter', sans-serif" }}>
                <span style={{ fontSize: '15px', fontWeight: 900, color: '#0072C6', letterSpacing: '0.3px' }}>NXT</span>
                <span style={{ fontSize: '11px', fontWeight: 900, color: '#fff', display: 'flex', alignItems: 'center' }}>
                  W
                  <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
                    A
                    <span style={{ position: 'absolute', top: '1px', left: '1px', fontSize: '6px', color: '#0072C6', fontWeight: 900 }}>▲</span>
                  </span>
                  V
                  <span style={{ background: '#fff', color: '#0A2540', fontSize: '8px', padding: '1px 2px 0px 2.5px', borderRadius: '1.5px', marginLeft: '1px', fontWeight: 900, display: 'inline-flex', alignItems: 'center', height: '10px', lineHeight: '1' }}>E</span>
                  <span style={{ fontSize: '5px', fontWeight: 900, verticalAlign: 'super', marginLeft: '1px', alignSelf: 'flex-start', marginTop: '1.5px', color: '#fff' }}>TM</span>
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
            </div>
            <p style={{ fontSize: '13.5px', lineHeight: 1.72, color: '#475569', maxWidth: '255px', marginBottom: '22px' }}>
              Premium recruitment platform specializing in lateral hiring. Verified experienced professionals in 24–48 hours.
            </p>

            {/* Contact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '20px' }}>
              {[
                { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.55a16 16 0 0 0 6.52 6.52l1.61-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2"/></svg>, text: '+91 98765 43210' },
                { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/><polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/></svg>, text: 'hello@nxtwavehire.com' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Social */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {[
                { title: 'LinkedIn', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4z' },
                { title: 'Twitter / X', path: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' },
              ].map((s, i) => (
                <a key={i} href="#" title={s.title} style={{
                  width: '34px', height: '34px', borderRadius: '9px',
                  background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#475569', textDecoration: 'none', transition: 'all .2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,99,235,.2)'; e.currentTarget.style.color = '#93C5FD'; e.currentTarget.style.borderColor = 'rgba(37,99,235,.35)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.06)'; e.currentTarget.style.color = '#475569'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d={s.path}/></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          {cols.map((col, i) => (
            <div key={i}>
              <h4 style={{ fontSize: '12px', fontWeight: 800, color: '#fff', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
                {col.title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '9px' }}>
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" style={{ fontSize: '13.5px', color: '#475569', textDecoration: 'none', transition: 'color .18s' }}
                      onMouseEnter={e => { (e.target as HTMLAnchorElement).style.color = '#CBD5E1' }}
                      onMouseLeave={e => { (e.target as HTMLAnchorElement).style.color = '#475569' }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,.05)' }}>
        <div className="wrap" style={{ padding: '18px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <span style={{ fontSize: '13px' }}>© {year} NXT Wave Hire. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '22px' }}>
            {['Privacy Policy', 'Terms', 'Cookies'].map((t, i) => (
              <a key={i} href="#" style={{ fontSize: '13px', color: '#475569', textDecoration: 'none', transition: 'color .18s' }}
                onMouseEnter={e => { (e.target as HTMLAnchorElement).style.color = '#94A3B8' }}
                onMouseLeave={e => { (e.target as HTMLAnchorElement).style.color = '#475569' }}>
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr 1fr !important; } }
        @media (max-width: 640px)  { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </footer>
  )
}
