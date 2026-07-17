import { useState } from 'react'

const IS: React.CSSProperties = {
  width: '100%', padding: '11px 13px', borderRadius: '10px',
  border: '1.5px solid #E2E8F0', fontSize: '14px', color: '#0F172A',
  background: '#F8FAFC', outline: 'none', transition: 'all .2s', fontFamily: 'Inter,sans-serif',
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#374151', marginBottom: '5px', letterSpacing: '.1px' }}>
        {label}{required && <span style={{ color: '#EF4444', marginLeft: '2px' }}>*</span>}
      </label>
      {children}
    </div>
  )
}

export default function HiringForm() {
  const [data, setData] = useState({ company: '', contact: '', email: '', phone: '', role: '', experience: '', skills: '', urgency: '', notes: '' })
  const [ok, setOk] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [err, setErr] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErr('');
    
    try {
      const response = await fetch('/api/hiring', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setOk(true);
      } else {
        const body = await response.json();
        setErr(body.error || 'Failed to submit requirement');
      }
    } catch (error: any) {
      console.error("Submission to MongoDB failed, trying fallback:", error);
      const submitUrl = import.meta.env.VITE_FORMSPREE_URL || import.meta.env.VITE_GOOGLE_SHEET_URL || "";
      
      if (submitUrl) {
        try {
          const isFormspree = submitUrl.includes("formspree.io");
          
          const response = await fetch(submitUrl, {
            method: 'POST',
            mode: isFormspree ? 'cors' : 'no-cors',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...data,
              timestamp: new Date().toISOString()
            })
          });
          
          if (isFormspree) {
            if (response.ok) {
              setOk(true);
            } else {
              const errData = await response.json();
              console.error("Formspree error response:", errData);
              setErr("Submission failed: " + (errData.error || "Please check configuration."));
            }
          } else {
            // Google Sheets fallback success (no-cors ignores status)
            setOk(true);
          }
        } catch (fbError: any) {
          console.error("Fallback submission failed:", fbError);
          setErr("A network error occurred. Please check your internet connection.");
        }
      } else {
        setErr("A network error occurred. Please check your internet connection.");
      }
    }
    setSubmitting(false);
  }

  const foc = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = '#2563EB'; e.target.style.background = '#fff'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,.1)'
  }
  const blr = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = '#E2E8F0'; e.target.style.background = '#F8FAFC'; e.target.style.boxShadow = 'none'
  }

  if (ok) return (
    <div style={{ background: '#fff', borderRadius: '24px', padding: '52px 36px', border: '1.5px solid #BBF7D0', textAlign: 'center', boxShadow: '0 4px 24px rgba(34,197,94,.1)' }}>
      <div style={{ width: '68px', height: '68px', borderRadius: '50%', background: 'linear-gradient(135deg,#22C55E,#16A34A)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: '0 8px 28px rgba(34,197,94,.3)' }}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>Requirement Received!</h3>
      <p style={{ fontSize: '15px', color: '#64748B', lineHeight: 1.65 }}>
        A dedicated recruitment partner will contact you within <strong style={{ color: '#0F172A' }}>2 business hours</strong>. Expect verified profiles in <strong style={{ color: '#0F172A' }}>24–48 hours</strong>.
      </p>
    </div>
  )

  return (
    <div style={{ background: '#fff', borderRadius: '24px', padding: '36px 30px', border: '1.5px solid #E2E8F0', boxShadow: '0 4px 24px rgba(15,23,42,.06)' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '11px', background: 'linear-gradient(135deg,#2563EB,#1D4ED8)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="7" width="20" height="14" rx="2" stroke="white" strokeWidth="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="white" strokeWidth="2"/></svg>
        </div>
        <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', margin: 0, letterSpacing: '-.3px' }}>Submit Hiring Requirement</h2>
      </div>
      <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '24px' }}>Share your need — receive verified profiles in 24–48 hours.</p>

      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '13px' }}>
          {([
            ['company', 'Company Name', 'Acme Corp', 'text', true],
            ['contact', 'Contact Person', 'Priya Sharma', 'text', true],
            ['email', 'Work Email', 'priya@acmecorp.com', 'email', true],
            ['phone', 'Phone', '+91 98765 43210', 'tel', true],
            ['role', 'Role Title', 'Senior Product Manager', 'text', true],
            ['experience', 'Experience Required', '3–6 years', 'text', true],
          ] as const).map(([k, l, p, t, r]) => (
            <Field key={k} label={l} required={r}>
              <input type={t} placeholder={p} required={r} value={(data as any)[k]}
                onChange={e => setData(d => ({ ...d, [k]: e.target.value }))}
                style={IS} onFocus={foc} onBlur={blr} />
            </Field>
          ))}
        </div>

        <div style={{ display: 'grid', gap: '13px', marginTop: '13px' }}>
          <Field label="Required Skills" required>
            <input type="text" placeholder="React, Node.js, AWS, Product Management..." required
              value={data.skills} onChange={e => setData(d => ({ ...d, skills: e.target.value }))}
              style={IS} onFocus={foc} onBlur={blr} />
          </Field>

          <Field label="Hiring Urgency" required>
            <select required value={data.urgency} onChange={e => setData(d => ({ ...d, urgency: e.target.value }))}
              style={{ ...IS, cursor: 'pointer' }} onFocus={foc} onBlur={blr}>
              <option value="">Select urgency level</option>
              <option value="critical">Critical — Hire within 1 week</option>
              <option value="urgent">Urgent — Hire within 2 weeks</option>
              <option value="normal">Normal — Hire within 1 month</option>
              <option value="planning">Planning — 1–3 months</option>
            </select>
          </Field>

          {/* Upload hint */}
          <div style={{ padding: '11px 14px', borderRadius: '10px', background: '#F8FAFC', border: '1.5px dashed #CBD5E1', display: 'flex', alignItems: 'center', gap: '9px', cursor: 'pointer' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round"/><polyline points="17 8 12 3 7 8" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="12" y1="3" x2="12" y2="15" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round"/></svg>
            <span style={{ fontSize: '13px', color: '#94A3B8' }}>Attach Job Description (PDF or DOCX — optional)</span>
          </div>

          <Field label="Additional Notes">
            <textarea rows={3} placeholder="Team size, specific context, interview rounds, notice period preference..." value={data.notes}
              onChange={e => setData(d => ({ ...d, notes: e.target.value }))}
              style={{ ...IS, resize: 'vertical' }} onFocus={foc} onBlur={blr} />
          </Field>
        </div>

        <button type="submit" disabled={submitting} style={{
          width: '100%', marginTop: '20px', padding: '14px',
          borderRadius: '12px', background: submitting ? '#94A3B8' : 'linear-gradient(135deg,#2563EB,#1D4ED8)',
          color: '#fff', fontWeight: 700, fontSize: '15px', border: 'none', cursor: submitting ? 'not-allowed' : 'pointer',
          boxShadow: submitting ? 'none' : '0 4px 18px rgba(37,99,235,.38)', transition: 'all .22s', fontFamily: 'Inter,sans-serif',
        }}
        onMouseEnter={e => { if(!submitting) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,99,235,.48)' } }}
        onMouseLeave={e => { if(!submitting) { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 18px rgba(37,99,235,.38)' } }}>
          {submitting ? 'Submitting Requirement...' : 'Submit Requirement →'}
        </button>
        {err && <p style={{ color: '#EF4444', fontSize: '13px', marginTop: '10px', textAlign: 'center', fontWeight: 600 }}>{err}</p>}
        <p style={{ textAlign: 'center', fontSize: '12px', color: '#94A3B8', marginTop: '10px' }}>No upfront fees · Response within 2 business hours</p>
      </form>
    </div>
  )
}
