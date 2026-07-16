import { useEffect, useRef, useState } from "react";
import HiringForm from "./HiringForm";
/* ── Company Logo Stack ──────────────────────────────────────── */
function CompanyLogoStack() {
  const logos = [
    // Google
    (
      <div style={{ background: '#fff', borderRadius: '50%', border: '1.5px solid #E2E8F0', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <span style={{ color: '#4285F4', fontWeight: 900, fontSize: '12px', fontFamily: "'Product Sans', sans-serif" }}>G</span>
      </div>
    ),
    // Amazon
    (
      <div style={{ background: '#111', borderRadius: '50%', border: '1.5px solid #fff', width: '28px', height: '28px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <span style={{ color: '#fff', fontWeight: 900, fontSize: '11px', lineHeight: '1', fontFamily: 'sans-serif', marginTop: '-3px' }}>a</span>
        <svg width="14" height="4" viewBox="0 0 14 4" style={{ position: 'absolute', bottom: '6px' }}>
          <path d="M1,1 C4,3 10,3 13,1" fill="none" stroke="#FF9900" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>
    ),
    // NVIDIA
    (
      <div style={{ background: '#76B900', borderRadius: '50%', border: '1.5px solid #fff', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2.5" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" fill="#fff" />
        </svg>
      </div>
    ),
    // Jio
    (
      <div style={{ background: '#E31B23', borderRadius: '50%', border: '1.5px solid #fff', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: '#fff', fontWeight: 850, fontSize: '11px', fontFamily: 'sans-serif' }}>Jio</span>
      </div>
    ),
    // Deloitte
    (
      <div style={{ background: '#111', borderRadius: '50%', border: '1.5px solid #fff', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: '#fff', fontWeight: 800, fontSize: '10px', fontFamily: 'sans-serif', letterSpacing: '-0.3px' }}>
          D<span style={{ color: '#86BC25', fontWeight: 900 }}>.</span>
        </span>
      </div>
    )
  ];

  return (
    <div style={{ display: "flex" }}>
      {logos.map((logo, i) => (
        <div
          key={i}
          style={{
            marginLeft: i > 0 ? "-10px" : 0,
            zIndex: logos.length - i,
            display: "flex",
          }}
        >
          {logo}
        </div>
      ))}
    </div>
  );
}

/* ── Typewriter Animation ───────────────────────────────────── */
function Typewriter() {
  const words = ["Faster.", "Smarter.", "Easier."];
  
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    let timer: any;
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 40 : 85;
    
    const handleType = () => {
      if (!isDeleting) {
        setDisplayText((prev) => currentWord.substring(0, prev.length + 1));
        if (displayText === currentWord) {
          timer = setTimeout(() => setIsDeleting(true), 2200);
          return;
        }
      } else {
        setDisplayText((prev) => currentWord.substring(0, prev.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
      }
      timer = setTimeout(handleType, typingSpeed);
    };
    
    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <span style={{ color: "#0F172A" }}>
      {displayText}
      <span className="typewriter-caret" />
    </span>
  );
}

/* ── Hero ────────────────────────────────────────────────────── */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const items =
      ref.current?.querySelectorAll<HTMLElement>(
        "[data-reveal]",
      );
    if (!items) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting)
            (e.target as HTMLElement).classList.add("fade-up");
        });
      },
      { threshold: 0.12 },
    );
    items.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="hero-mesh"
      id="home"
      style={{
        paddingTop: "132px",
        paddingBottom: "96px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <style>{`
        @keyframes smooth-blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.65; }
        }
        .typewriter-caret {
          display: inline-block;
          width: 2.5px;
          height: 0.95em;
          background: #2563EB;
          margin-left: 5px;
          vertical-align: -0.05em;
          border-radius: 4px;
          box-shadow: 0 0 6px rgba(37,99,235,0.25);
          animation: smooth-blink 1.1s infinite ease-in-out;
        }
      `}</style>

      {/* Abstract circle decoration */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-200px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div className="wrap">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "72px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* ─── Left copy ─── */}
          <div>
            {/* Headline */}
            <div
              data-reveal
              style={{ opacity: 0, animationDelay: ".2s" }}
            >
              <h1
                style={{
                  margin: 0,
                  lineHeight: 1.05,
                  letterSpacing: "-3px",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "clamp(50px,6.8vw,88px)",
                    fontWeight: 900,
                    color: "#0F172A",
                  }}
                >
                  Hire Verified
                </span>
                <span
                  style={{
                    display: "block",
                    fontSize: "clamp(50px,6.8vw,88px)",
                    fontWeight: 900,
                  }}
                  className="gradient-text"
                >
                  Lateral Talent
                </span>
                <span
                  style={{
                    display: "block",
                    fontSize: "clamp(50px,6.8vw,88px)",
                    fontWeight: 900,
                  }}
                >
                  <Typewriter />
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <p
              data-reveal
              style={{
                opacity: 0,
                animationDelay: ".32s",
                fontSize: "20px",
                lineHeight: 1.65,
                color: "#475569",
                maxWidth: "540px",
                marginTop: "28px",
                marginBottom: 0,
              }}
            >
              We help companies hire experienced professionals
              through a structured{" "}
              <strong
                style={{ color: "#0F172A", fontWeight: 600 }}
              >
                two-layer screening process
              </strong>
              , delivering verified candidate profiles within{" "}
              <strong
                style={{ color: "#0F172A", fontWeight: 600 }}
              >
                24–48 hours
              </strong>
              .
            </p>

            {/* Social proof */}
            <div
              data-reveal
              style={{
                opacity: 0,
                animationDelay: ".42s",
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginTop: "22px",
              }}
            >
              <CompanyLogoStack />
              <span
                style={{ fontSize: "13px", color: "#64748B" }}
              >
                <strong style={{ color: "#0F172A" }}>
                  3000+ companies
                </strong>{" "}
                hired through us
              </span>
            </div>

            {/* CTA row */}
            <div
              data-reveal
              style={{
                opacity: 0,
                animationDelay: ".5s",
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginTop: "32px",
              }}
            >
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 28px",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg,#2563EB,#1D4ED8)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "15px",
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(37,99,235,.42)",
                  transition: "all .25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 32px rgba(37,99,235,.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(37,99,235,.42)";
                }}
              >
                Submit Hiring Requirement
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 22px",
                  borderRadius: "12px",
                  background: "#fff",
                  color: "#0F172A",
                  fontWeight: 600,
                  fontSize: "15px",
                  textDecoration: "none",
                  border: "1.5px solid #E2E8F0",
                  boxShadow: "0 2px 8px rgba(15,23,42,.05)",
                  transition: "all .25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#93C5FD";
                  e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(37,99,235,.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#E2E8F0";
                  e.currentTarget.style.boxShadow =
                    "0 2px 8px rgba(15,23,42,.05)";
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.55a16 16 0 0 0 6.52 6.52l1.61-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                    stroke="#475569"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
                Talk to Recruitment Expert
              </a>
            </div>

            {/* Trust strip */}
            <div
              data-reveal
              style={{
                opacity: 0,
                animationDelay: ".6s",
                display: "flex",
                gap: "22px",
                marginTop: "36px",
                flexWrap: "wrap",
              }}
            >
              {[
                { icon: "⚡", t: "24–48h delivery" },
                { icon: "✓", t: "No upfront fees" },
                { icon: "🎯", t: "1–10 yrs only" },
              ].map((x, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span style={{ fontSize: "12px" }}>
                    {x.icon}
                  </span>
                  <span
                    style={{
                      fontSize: "13px",
                      color: "#64748B",
                      fontWeight: 500,
                    }}
                  >
                    {x.t}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Right: Hiring Form ─── */}
          <div
            id="contact"
            data-reveal
            style={{
              opacity: 0,
              animationDelay: ".35s",
              paddingRight: "52px",
            }}
          >
            <HiringForm />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 52px !important; }
          .hero-grid > *:last-child { padding-right: 0 !important; }
        }
      `}</style>
    </section>
  );
}