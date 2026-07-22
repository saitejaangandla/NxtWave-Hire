export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#0A0F1A', color: '#8fa0b5', fontFamily: "'Inter', sans-serif" }}>
      <div className="wrap" style={{ padding: '56px 28px 40px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1.5fr',
            gap: '48px',
            alignItems: 'start',
          }}
          className="footer-grid"
        >
          {/* Brand & Reach Us Column */}
          <div>
            {/* Logo */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1' }}>
                  <span style={{ fontSize: '18px', fontWeight: 900, color: '#0072C6', letterSpacing: '0.5px' }}>NXT</span>
                  <span style={{ fontSize: '13px', fontWeight: 900, color: '#fff', display: 'flex', alignItems: 'center' }}>
                    W
                    <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
                      A
                      <span style={{ position: 'absolute', top: '1px', left: '1px', fontSize: '7px', color: '#0072C6', fontWeight: 900 }}>▲</span>
                    </span>
                    V
                    <span style={{ background: '#fff', color: '#0A2540', fontSize: '9px', padding: '1px 2px 0px 2.5px', borderRadius: '1.5px', marginLeft: '1px', fontWeight: 900, display: 'inline-flex', alignItems: 'center', height: '11px', lineHeight: '1' }}>E</span>
                    <span style={{ fontSize: '6px', fontWeight: 900, verticalAlign: 'super', marginLeft: '2px', alignSelf: 'flex-start', color: '#fff' }}>TM</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Reach Us */}
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#5b7a9c', marginBottom: '18px', letterSpacing: '0.2px' }}>
              Reach Us
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* WhatsApp */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ width: '22px', height: '22px', flexShrink: 0, marginTop: '2px' }}>
                  <svg viewBox="0 0 24 24" width="22" height="22">
                    <path fill="#25D366" d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.762.459 3.48 1.332 5.001L2 22l5.143-1.348a9.97 9.97 0 0 0 4.867 1.258h.004c5.506 0 9.988-4.478 9.989-9.985 0-2.668-1.039-5.176-2.926-7.062A9.92 9.92 0 0 0 12.012 2z"/>
                    <path fill="#FFF" d="M8.536 7.376c-.235-.522-.482-.533-.705-.542-.183-.008-.392-.008-.601-.008s-.549.078-.836.392c-.287.314-1.097 1.072-1.097 2.616 0 1.543 1.123 3.033 1.28 3.242.157.21 2.21 3.374 5.355 4.733.748.324 1.332.518 1.787.662.751.239 1.434.205 1.975.124.603-.09 1.854-.757 2.115-1.488.261-.732.261-1.36.183-1.488-.078-.13-.287-.209-.597-.365s-1.854-.915-2.141-1.02-.496-.157-.705.157c-.209.314-.81 1.02-.992 1.23-.183.209-.366.235-.679.078-.314-.157-1.325-.488-2.524-1.558-.934-.832-1.564-1.859-1.747-2.173-.183-.314-.02-.484.137-.64.141-.141.314-.366.47-.549.157-.183.209-.314.314-.523.105-.209.052-.392-.026-.549-.078-.157-.705-1.701-.966-2.326z"/>
                  </svg>
                </div>
                <div>
                  <a href="https://wa.me/919390111761" target="_blank" rel="noreferrer" style={{ color: '#8fa0b5', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#8fa0b5'}>
                    +919390111761
                  </a>
                  <div style={{ fontSize: '12px', color: '#5b7a9c', marginTop: '2px' }}>(WhatsApp only)</div>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '4px', background: '#0072C6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <a href="mailto:support@nxtwave.tech" style={{ color: '#8fa0b5', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#8fa0b5'}>
                  support@nxtwave.tech
                </a>
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/school/nxtwavetech/posts/?feedView=all"
                target="_blank"
                rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
              >
                <div style={{ width: '22px', height: '22px', borderRadius: '4px', background: '#0A66C2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </div>
                <span style={{ color: '#8fa0b5', fontSize: '14px', fontWeight: 500, transition: 'color .18s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#8fa0b5'}>
                  LinkedIn
                </span>
              </a>
            </div>
          </div>

          {/* Address / Location Column */}
          <div>
            <a
              href="https://www.google.com/maps/place/Sohini+Tech+Park/@17.4226565,78.3461039,17z/data=!4m6!3m5!1s0x3bcb93793ddd7d43:0xa8e39713da01f08d!8m2!3d17.4227794!4d78.3471875!16s%2Fg%2F11ghtqqdpj?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
              style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginTop: '46px', textDecoration: 'none' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5b7a9c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#8fa0b5', margin: 0, fontWeight: 400, transition: 'color .18s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#8fa0b5'}>
                8th Floor, Sohini Tech Park, Nanakramguda Rd, Financial District, Gachibowli, Nanakramguda, Telangana 500032
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,.06)', background: 'rgba(0,0,0,.15)' }}>
        <div className="wrap" style={{ padding: '16px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ fontSize: '13px', color: '#5b7a9c' }}>© {year} NxtWave. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((t, i) => (
              <a key={i} href="#" style={{ fontSize: '13px', color: '#5b7a9c', textDecoration: 'none', transition: 'color .18s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#5b7a9c'}>
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 36px !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </footer>
  )
}
