import React, { useEffect } from 'react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleCopy = () => {
    navigator.clipboard.writeText('+91 86391 95926')
    alert('Mobile number copied to clipboard!')
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.65)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      animation: 'fadeIn 0.25s ease-out'
    }} onClick={onClose}>
      <div style={{
        background: '#fff',
        width: '90%',
        maxWidth: '440px',
        borderRadius: '20px',
        padding: '32px',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        position: 'relative',
        animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        fontFamily: "'Inter', sans-serif"
      }} onClick={e => e.stopPropagation()}>
        {/* Close Button */}
        <button onClick={onClose} style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: '#F1F5F9',
          border: 'none',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: '#64748B',
          transition: 'all 0.2s',
          fontSize: '18px',
          fontWeight: 500
        }}
        onMouseEnter={e => { e.currentTarget.style.background = '#E2E8F0'; e.currentTarget.style.color = '#0F172A' }}
        onMouseLeave={e => { e.currentTarget.style.background = '#F1F5F9'; e.currentTarget.style.color = '#64748B' }}>
          ✕
        </button>

        {/* Title */}
        <h3 style={{
          fontSize: '20px',
          fontWeight: 800,
          color: '#0F172A',
          marginTop: 0,
          marginBottom: '10px',
          lineHeight: '1.25'
        }}>
          Talk to a Recruitment Expert
        </h3>
        
        <p style={{
          fontSize: '14.5px',
          color: '#475569',
          lineHeight: '1.5',
          margin: '0 0 24px 0'
        }}>
          Connect directly with our recruitment team via WhatsApp, phone, or email to discuss your hiring requirements.
        </p>

        {/* Info Card */}
        <div style={{
          background: '#F8FAFC',
          border: '1.5px solid #E2E8F0',
          borderRadius: '16px',
          padding: '18px',
          marginBottom: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifySpaceBetween: 'space-between', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '11px', color: '#64748B', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Mobile Number</span>
              <span style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A', marginTop: '2px' }}>+91 86391 95926</span>
            </div>
            <button onClick={handleCopy} style={{
              background: '#fff',
              border: '1.5px solid #E2E8F0',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '12px',
              fontWeight: 600,
              color: '#475569',
              cursor: 'pointer',
              transition: 'all 0.15s'
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#BFDBFE'; e.currentTarget.style.color = '#2563EB' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.color = '#475569' }}>
              Copy
            </button>
          </div>

          <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '12px', display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '11px', color: '#64748B', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email Address</span>
            <a href="mailto:amrutha.g@nxtwave.tech" style={{ fontSize: '14.5px', fontWeight: 600, color: '#2563EB', textDecoration: 'none', marginTop: '2px' }} onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'} onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}>
              amrutha.g@nxtwave.tech
            </a>
          </div>
        </div>

        {/* Buttons Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Chat on WhatsApp */}
          <a href="https://wa.me/918639195926" target="_blank" rel="noreferrer" style={{
            background: '#25D366',
            color: '#fff',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '14px',
            borderRadius: '12px',
            fontWeight: 700,
            fontSize: '14.5px',
            boxShadow: '0 4px 12px rgba(37,211,102,0.24)',
            transition: 'all 0.2s',
            textAlign: 'center'
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 18px rgba(37,211,102,0.36)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(37,211,102,0.24)' }}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.762.459 3.48 1.332 5.001L2 22l5.143-1.348a9.97 9.97 0 0 0 4.867 1.258h.004c5.506 0 9.988-4.478 9.989-9.985 0-2.668-1.039-5.176-2.926-7.062A9.92 9.92 0 0 0 12.012 2z"/>
              <path fill="#25D366" d="M8.536 7.376c-.235-.522-.482-.533-.705-.542-.183-.008-.392-.008-.601-.008s-.549.078-.836.392c-.287.314-1.097 1.072-1.097 2.616 0 1.543 1.123 3.033 1.28 3.242.157.21 2.21 3.374 5.355 4.733.748.324 1.332.518 1.787.662.751.239 1.434.205 1.975.124.603-.09 1.854-.757 2.115-1.488.261-.732.261-1.36.183-1.488-.078-.13-.287-.209-.597-.365s-1.854-.915-2.141-1.02-.496-.157-.705.157c-.209.314-.81 1.02-.992 1.23-.183.209-.366.235-.679.078-.314-.157-1.325-.488-2.524-1.558-.934-.832-1.564-1.859-1.747-2.173-.183-.314-.02-.484.137-.64.141-.141.314-.366.47-.549.157-.183.209-.314.314-.523.105-.209.052-.392-.026-.549-.078-.157-.705-1.701-.966-2.326z"/>
            </svg>
            Chat on WhatsApp
          </a>

          {/* Direct Call */}
          <a href="tel:+918639195926" style={{
            background: '#fff',
            color: '#0F172A',
            border: '1.5px solid #E2E8F0',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '14px',
            borderRadius: '12px',
            fontWeight: 600,
            fontSize: '14.5px',
            transition: 'all 0.2s',
            textAlign: 'center'
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#F8FAFC'; e.currentTarget.style.borderColor = '#CBD5E1' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#E2E8F0' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.55a16 16 0 0 0 6.52 6.52l1.61-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Call Directly
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  )
}
