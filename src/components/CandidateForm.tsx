import { useState } from 'react'

const IS: React.CSSProperties = {
  width: '100%', padding: '11px 13px', borderRadius: '10px',
  border: '1.5px solid #E2E8F0', fontSize: '14px', color: '#0F172A',
  background: '#F8FAFC', outline: 'none', transition: 'all .2s', fontFamily: 'Inter,sans-serif',
}

export default function CandidateForm() {
  const [data, setData] = useState({ name: '', email: '', phone: '', exp: '', company: '', skills: '', linkedin: '' })
  const [ok, setOk] = useState(false)

  const foc = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.target.style.borderColor = '#06B6D4'; e.target.style.background = '#fff'; e.target.style.boxShadow = '0 0 0 3px rgba(6,182,212,.1)'
  }
  const blr = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.target.style.borderColor = '#E2E8F0'; e.target.style.background = '#F8FAFC'; e.target.style.boxShadow = 'none'
  }

  if (ok) return (
    <div style={{ background: '#fff', borderRadius: '24px', padding: '48px 30px', border: '1.5px solid #A5F3FC', textAlign: 'center', boxShadow: '0 4px 24px rgba(6,182,212,.1)' }}>
      <div style={{ width: '68px', height: '68px', borderRadius: '50%', background: 'linear-gradient(135deg,#06B6D4,#0891B2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: '0 8px 28px rgba(6,182,212,.3)' }}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2.2" strokeLinecap="round"/><circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2.2"/></svg>
      </div>
      <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>Welcome to the Network!</h3>
      <p style={{ fontSize: '15px', color: '#64748B', lineHeight: 1.65 }}>
        Your profile has been added to our verified talent pool. We'll reach out when a role matches your profile.
      </p>
    </div>
  )

  return (
    <div style={{ background: '#fff', borderRadius: '24px', padding: '36px 30px', border: '1.5px solid #E2E8F0', boxShadow: '0 4px 24px rgba(15,23,42,.06)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg,#06B6D4,#2563EB)' }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '11px', background: 'linear-gradient(135deg,#06B6D4,#0891B2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round"/><circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2"/></svg>
        </div>
        <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', margin: 0, letterSpacing: '-.3px' }}>Join Talent Network</h2>
      </div>
      <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '24px' }}>1–10 years experience? Join our exclusive verified talent pool.</p>

      <form onSubmit={e => { e.preventDefault(); setOk(true) }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {([
            ['name', 'Full Name', 'Arjun Sharma', 'text', true],
            ['email', 'Email Address', 'arjun@email.com', 'email', true],
            ['phone', 'Mobile Number', '+91 98765 43210', 'tel', true],
            ['company', 'Current Company', 'Infosys, TCS, etc.', 'text', false],
            ['linkedin', 'LinkedIn Profile', 'linkedin.com/in/arjun', 'url', false],
          ] as const).map(([k, l, p, t, r]) => (
            <div key={k}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#374151', marginBottom: '5px' }}>
                {l}{r && <span style={{ color: '#EF4444', marginLeft: '2px' }}>*</span>}
              </label>
              <input type={t} placeholder={p} required={r} value={(data as any)[k]}
                onChange={e => setData(d => ({ ...d, [k]: e.target.value }))}
                style={IS} onFocus={foc} onBlur={blr} />
            </div>
          ))}

          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#374151', marginBottom: '5px' }}>
              Years of Experience<span style={{ color: '#EF4444', marginLeft: '2px' }}>*</span>
            </label>
            <select required value={data.exp} onChange={e => setData(d => ({ ...d, exp: e.target.value }))}
              style={{ ...IS, cursor: 'pointer' }} onFocus={foc} onBlur={blr}>
              <option value="">Select range</option>
              <option>1–2 years</option><option>2–4 years</option>
              <option>4–6 years</option><option>6–8 years</option><option>8–10 years</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#374151', marginBottom: '5px' }}>
              Key Skills<span style={{ color: '#EF4444', marginLeft: '2px' }}>*</span>
            </label>
            <input type="text" placeholder="Product Management, Python, React..." required
              value={data.skills} onChange={e => setData(d => ({ ...d, skills: e.target.value }))}
              style={IS} onFocus={foc} onBlur={blr} />
          </div>

          <div style={{ padding: '11px 13px', borderRadius: '10px', background: '#F0FDFE', border: '1.5px dashed #A5F3FC', display: 'flex', alignItems: 'center', gap: '9px', cursor: 'pointer' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round"/><polyline points="17 8 12 3 7 8" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="12" y1="3" x2="12" y2="15" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round"/></svg>
            <span style={{ fontSize: '13px', color: '#0891B2' }}>Upload Resume (PDF or DOCX)</span>
          </div>
        </div>

        <button type="submit" style={{
          width: '100%', marginTop: '18px', padding: '14px', borderRadius: '12px',
          background: 'linear-gradient(135deg,#06B6D4,#0891B2)',
          color: '#fff', fontWeight: 700, fontSize: '15px', border: 'none', cursor: 'pointer',
          boxShadow: '0 4px 18px rgba(6,182,212,.38)', transition: 'all .22s', fontFamily: 'Inter,sans-serif',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(6,182,212,.48)' }}
        onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 18px rgba(6,182,212,.38)' }}>
          Join Talent Network →
        </button>
        <p style={{ textAlign: 'center', fontSize: '12px', color: '#94A3B8', marginTop: '10px' }}>Free · Confidential · No spam</p>
      </form>
    </div>
  )
}
