const PLAYLIST_URL = "https://www.youtube.com/playlist?list=PLp71ExCbo7pdotUNvH3UMNjg6HycZopk5";

const VIDEOS = [
  {
    videoId: 'K_mIDRkBEGw',
    name: 'Chaitanya Arikati',
    title: 'Head of Talent Acquisition',
    company: 'Abjayon',
    thumbnail: 'https://img.youtube.com/vi/K_mIDRkBEGw/hqdefault.jpg'
  },
  {
    videoId: 'LIb3_AyZ_wQ',
    name: 'Raja Sekhar',
    title: 'Senior HR Executive',
    company: 'West Agile Labs',
    thumbnail: 'https://img.youtube.com/vi/LIb3_AyZ_wQ/hqdefault.jpg'
  },
  {
    videoId: 'hUfEOmF9TaQ',
    name: 'Pavan Kumar',
    title: 'Founder & CEO',
    company: 'ProCorp',
    thumbnail: 'https://img.youtube.com/vi/hUfEOmF9TaQ/hqdefault.jpg'
  },
  {
    videoId: '6EiBJ37MMFc',
    name: 'Vinay Nawale',
    title: 'Head of Human Resources',
    company: 'GS Tech Technologies',
    thumbnail: 'https://img.youtube.com/vi/6EiBJ37MMFc/hqdefault.jpg'
  },
  {
    videoId: 'f1k5caShuOY',
    name: 'Gopal Parvathaneni',
    title: 'Chairman & CEO',
    company: 'EPSoft',
    thumbnail: 'https://img.youtube.com/vi/f1k5caShuOY/hqdefault.jpg'
  },
  {
    videoId: 'cYa8QopFaEY',
    name: 'Vasu Adunutula',
    title: 'Co-Founder',
    company: 'Cybersophy',
    thumbnail: 'https://img.youtube.com/vi/cYa8QopFaEY/hqdefault.jpg'
  }
];

export default function Testimonials() {
  const doubledVideos = [...VIDEOS, ...VIDEOS];

  return (
    <section id="testimonials" className="section" style={{ background: '#F8FAFC', paddingBottom: '72px', overflow: 'hidden' }}>
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <div className="pill" style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', color: '#16A34A', marginBottom: '16px' }}>
            Client Testimonials
          </div>
          <h2 style={{ fontSize: 'clamp(32px,4vw,50px)', fontWeight: 900, letterSpacing: '-1.8px', lineHeight: 1.08, margin: '0 auto 16px', color: '#0F172A' }}>
            Hear from Our Hiring Leaders<br />
            <span className="gradient-text">Across the Network.</span>
          </h2>
        </div>
      </div>

      {/* Scrolling Marquee Container */}
      <div style={{ position: "relative", width: "100%", overflow: "hidden", padding: "16px 0", marginBottom: "40px" }}>
        {/* Fade masks */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "120px",
            background: "linear-gradient(90deg, #F8FAFC, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "120px",
            background: "linear-gradient(270deg, #F8FAFC, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Marquee Track */}
        <div
          className="testimonials-track"
          style={{
            display: "flex",
            gap: "24px",
            width: "max-content",
            animation: "testimonialsMarquee 40s linear infinite",
          }}
        >
          {doubledVideos.map((v, i) => {
            const videoUrl = `https://www.youtube.com/watch?v=${v.videoId}&list=PLp71ExCbo7pdotUNvH3UMNjg6HycZopk5`;
            return (
              <a
                key={i}
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="card testimonial-video-card"
                  style={{
                    width: "300px",
                    borderRadius: '20px',
                    overflow: 'hidden',
                    background: '#fff',
                    border: '1.5px solid #E2E8F0',
                    boxShadow: '0 4px 12px rgba(15,23,42,0.03)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                    e.currentTarget.style.borderColor = '#2563EB';
                    e.currentTarget.style.boxShadow = '0 20px 32px rgba(37,99,235,0.08)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.borderColor = '#E2E8F0';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(15,23,42,0.03)';
                  }}
                >
                  {/* Thumbnail Image container */}
                  <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', background: '#0F172A', overflow: 'hidden' }}>
                    <img
                      src={v.thumbnail}
                      alt={v.name}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />

                    {/* Subtle bottom shadow overlay */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(15,23,42,0) 60%, rgba(15,23,42,0.25) 100%)',
                      zIndex: 1
                    }} />
                  </div>

                  {/* Details section */}
                  <div style={{ padding: '18px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', marginBottom: '6px', letterSpacing: '-0.3px', lineHeight: 1.3 }}>
                      {v.name}
                    </h3>
                    <div style={{ fontSize: '12.5px', color: '#64748B', lineHeight: 1.4, marginBottom: '2px' }}>
                      {v.title}
                    </div>
                    <div style={{ fontSize: '12.5px', color: '#2563EB', fontWeight: 700, marginTop: 'auto' }}>
                      {v.company}
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      <div className="wrap">
        {/* View Full Playlist CTA */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '44px' }}>
          <a
            href={PLAYLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '13px 26px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg,#2563EB,#1D4ED8)',
              color: '#fff',
              fontWeight: 700,
              fontSize: '14.5px',
              textDecoration: 'none',
              boxShadow: '0 4px 18px rgba(37,99,235,0.3)',
              transition: 'all 0.25s'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,99,235,0.4)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = '0 4px 18px rgba(37,99,235,0.3)';
            }}
          >
            View Full Playlist on YouTube
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </a>
        </div>

        {/* Overall rating */}
        <div style={{ maxWidth: '460px', margin: '0 auto', padding: '22px 28px', borderRadius: '16px', background: '#fff', border: '1.5px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '18px' }}>
          <div style={{ textAlign: 'center', flexShrink: 0 }}>
            <div style={{ fontSize: '38px', fontWeight: 900, color: '#0F172A', lineHeight: 1 }}>4.9</div>
            <div style={{ display: 'flex', gap: '2px', justifyContent: 'center', marginTop: '4px' }}>
              {Array.from({ length: 5 }).map((_, i) => <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>)}
            </div>
          </div>
          <div style={{ width: '1px', height: '44px', background: '#E2E8F0', flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A' }}>Average client rating</div>
            <div style={{ fontSize: '13px', color: '#64748B', marginTop: '2px' }}>Based on 200+ company reviews</div>
            <div style={{ fontSize: '12px', color: '#22C55E', fontWeight: 700, marginTop: '4px' }}>94% client retention rate</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes testimonialsMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .testimonials-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
