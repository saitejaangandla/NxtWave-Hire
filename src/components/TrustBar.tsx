const LOGOS = [
  // Row 1
  { name: "Google", abbr: "GO", color: "#4285F4" },
  { name: "Amazon", abbr: "AM", color: "#FF9900" },
  { name: "NVIDIA", abbr: "NV", color: "#76B900" },
  { name: "Accenture", abbr: "AC", color: "#A100FF" },
  { name: "Deloitte", abbr: "DE", color: "#86BC25" },
  { name: "Bank of America", abbr: "BA", color: "#012169" },
  { name: "Bosch", abbr: "BO", color: "#E0001B" },
  // Row 2
  { name: "Jio", abbr: "JI", color: "#0A2885" },
  { name: "TCS", abbr: "TC", color: "#1B365D" },
  { name: "Tech Mahindra", abbr: "TM", color: "#E31B23" },
  { name: "Goldman Sachs", abbr: "GS", color: "#7399C6" },
  { name: "Oracle", abbr: "OR", color: "#F80000" },
  { name: "Samsung", abbr: "SA", color: "#1428A0" },
  { name: "Infosys", abbr: "IN", color: "#007CC3" },
  // Row 3
  { name: "Wipro", abbr: "WI", color: "#005691" },
  { name: "Apollo Hospitals", abbr: "AP", color: "#008080" },
  { name: "SAP", abbr: "SP", color: "#008FD3" },
  { name: "Capgemini", abbr: "CG", color: "#0070AD" },
  { name: "Cyient", abbr: "CY", color: "#004D71" },
  { name: "HCL", abbr: "HC", color: "#0F2D69" },
  { name: "Tata Elxsi", abbr: "TE", color: "#00A1E4" },
  // Row 4
  { name: "Cognizant", abbr: "CO", color: "#0033A0" },
  { name: "CGI", abbr: "CG", color: "#E31937" },
  { name: "Merkle Sokrati", abbr: "MS", color: "#E82127" },
  { name: "Mindtree", abbr: "MT", color: "#FFC72C" },
  { name: "Delhivery", abbr: "DV", color: "#000000" },
  { name: "needl.ai", abbr: "NE", color: "#4A90E2" },
  { name: "Fareportal", abbr: "FP", color: "#00A6DA" },
  // Row 5
  { name: "Prodapt", abbr: "PR", color: "#E31B23" },
  { name: "Tanla", abbr: "TA", color: "#000000" },
  { name: "GlobalLogic", abbr: "GL", color: "#FF5B00" },
  { name: "NTT Data", abbr: "NT", color: "#0066B3" },
  { name: "Fractal", abbr: "FR", color: "#004B87" },
  { name: "Napier Healthcare", abbr: "NH", color: "#0066A2" },
  { name: "GEP", abbr: "GE", color: "#005FA6" },
  // Row 6
  { name: "Systech", abbr: "SY", color: "#004C87" },
  { name: "PwC", abbr: "PW", color: "#D04A02" },
  { name: "Siply", abbr: "SI", color: "#009BD9" },
  { name: "Publicis Sapient", abbr: "PS", color: "#EE3124" },
  { name: "Mentor Graphics", abbr: "MG", color: "#005A9C" },
  { name: "Observe.AI", abbr: "OB", color: "#212121" },
  { name: "Optum", abbr: "OP", color: "#E87722" },
  // Row 7
  { name: "Eurofins", abbr: "ER", color: "#009639" },
  { name: "LatentView", abbr: "LV", color: "#1B4E8F" },
  { name: "Birlasoft", abbr: "BI", color: "#005A9C" },
  { name: "Intellect", abbr: "IT", color: "#FF5A00" },
  { name: "Perficient", abbr: "PE", color: "#E31B23" },
  { name: "Rakuten", abbr: "RA", color: "#BF0000" },
  { name: "Societe Generale", abbr: "SG", color: "#E2001A" },
  // Row 8
  { name: "SpanIdea", abbr: "SI", color: "#0072C6" },
  { name: "ACS Solutions", abbr: "AC", color: "#005691" },
  { name: "Highradius", abbr: "HR", color: "#0093D0" },
  { name: "ValueMomentum", abbr: "VM", color: "#D31D24" },
  { name: "Tredence", abbr: "TR", color: "#00A1E4" },
  { name: "ZS", abbr: "ZS", color: "#0083C1" },
  { name: "ADP", abbr: "AD", color: "#D0202F" },
];

function renderLogo(name: string) {
  switch (name) {
    case "Google":
      return (
        <span style={{ fontWeight: 800, fontSize: "19px", fontFamily: "'Product Sans', 'Inter', sans-serif", letterSpacing: "-0.5px" }}>
          <span style={{ color: "#4285F4" }}>G</span>
          <span style={{ color: "#EA4335" }}>o</span>
          <span style={{ color: "#FBBC05" }}>o</span>
          <span style={{ color: "#4285F4" }}>g</span>
          <span style={{ color: "#34A853" }}>l</span>
          <span style={{ color: "#EA4335" }}>e</span>
        </span>
      );
    case "Amazon":
      return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", transform: "translateY(2px)" }}>
          <span style={{ fontWeight: 900, color: "#111", fontSize: "16px", lineHeight: "1", fontFamily: "sans-serif" }}>amazon</span>
          <svg width="45" height="6" viewBox="0 0 45 6" style={{ marginTop: "-2px" }}>
            <path d="M2,1 C12,5 32,5 43,1 M38,0.5 L43,1 L41,4.5" fill="none" stroke="#FF9900" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </div>
      );
    case "NVIDIA":
      return (
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#76B900">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" fill="#fff"/>
            <circle cx="12" cy="12" r="10" stroke="#76B900" strokeWidth="2" fill="none" />
          </svg>
          <span style={{ fontWeight: 900, color: "#111", fontSize: "13px", letterSpacing: "0.5px", fontFamily: "sans-serif" }}>NVIDIA</span>
        </div>
      );
    case "Accenture":
      return (
        <span style={{ color: "#000", fontWeight: 800, fontSize: "17px", fontFamily: "sans-serif" }}>
          accenture<span style={{ color: "#A100FF", fontWeight: 900, marginLeft: "1px" }}>&gt;</span>
        </span>
      );
    case "Deloitte":
      return (
        <span style={{ color: "#000", fontWeight: 800, fontSize: "17px", fontFamily: "sans-serif", letterSpacing: "-0.5px" }}>
          Deloitte<span style={{ color: "#86BC25", fontWeight: 900 }}>.</span>
        </span>
      );
    case "Bank of America":
      return (
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <svg width="22" height="14" viewBox="0 0 22 14">
            <rect x="0" y="0" width="8" height="14" fill="#012169" />
            <rect x="9" y="0" width="13" height="6" fill="#E31B23" />
            <rect x="9" y="8" width="13" height="6" fill="#012169" />
          </svg>
          <span style={{ fontWeight: 700, color: "#012169", fontSize: "10px", letterSpacing: "0.3px", fontFamily: "sans-serif" }}>BANK OF AMERICA</span>
        </div>
      );
    case "Bosch":
      return (
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <svg width="18" height="18" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="7" fill="none" stroke="#555" strokeWidth="1.8" />
            <circle cx="8" cy="8" r="4" fill="#E0001B" />
          </svg>
          <span style={{ fontWeight: 900, color: "#E0001B", fontSize: "14px", letterSpacing: "1px", fontFamily: "sans-serif" }}>BOSCH</span>
        </div>
      );
    case "Jio":
      return (
        <div style={{ background: "#E31B23", borderRadius: "50%", width: "28px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "#fff", fontWeight: 800, fontSize: "12px", fontFamily: "sans-serif" }}>Jio</span>
        </div>
      );
    case "TCS":
      return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <svg width="24" height="8" viewBox="0 0 24 8" fill="none" style={{ marginBottom: "-1px" }}>
            <path d="M2,6 C8,1 12,1 16,5 C20,8 21,4 23,2" stroke="#00A1E4" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
          <span style={{ fontWeight: 900, color: "#1B365D", fontSize: "12px", letterSpacing: "0.5px" }}>tcs</span>
        </div>
      );
    case "Tech Mahindra":
      return (
        <span style={{ fontWeight: 800, fontSize: "14px", fontFamily: "sans-serif" }}>
          <span style={{ color: "#E31B23" }}>Tech</span> <span style={{ color: "#333" }}>Mahindra</span>
        </span>
      );
    case "Goldman Sachs":
      return (
        <span style={{ color: "#7399C6", fontWeight: "bold", fontFamily: "Georgia, serif", fontSize: "14px" }}>Goldman Sachs</span>
      );
    case "Oracle":
      return (
        <span style={{ color: "#F80000", fontWeight: 900, fontSize: "17px", letterSpacing: "-0.5px", fontFamily: "sans-serif" }}>ORACLE</span>
      );
    case "Samsung":
      return (
        <span style={{ color: "#1428A0", fontWeight: 900, fontSize: "15px", letterSpacing: "1px", fontFamily: "sans-serif" }}>SAMSUNG</span>
      );
    case "Infosys":
      return (
        <span style={{ color: "#007CC3", fontWeight: 800, fontSize: "15px", fontFamily: "sans-serif", fontStyle: "italic" }}>Infosys</span>
      );
    case "Wipro":
      return (
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <svg width="20" height="20" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="8" fill="none" stroke="#7C3AED" strokeWidth="2" strokeDasharray="3,1" />
            <circle cx="12" cy="12" r="5" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="2,1" />
            <circle cx="12" cy="12" r="2" fill="#059669" />
          </svg>
          <span style={{ fontWeight: 800, color: "#005691", fontSize: "13px", fontFamily: "sans-serif" }}>wipro</span>
        </div>
      );
    case "Apollo Hospitals":
      return (
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <svg width="15" height="18" viewBox="0 0 14 18" fill="#008080">
            <path d="M7,0 C9,4 13,6 13,11 C13,15 7,18 7,18 C7,18 1,15 1,11 C1,6 5,4 7,0 Z" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: "1" }}>
            <span style={{ fontWeight: 800, color: "#008080", fontSize: "10px" }}>Apollo</span>
            <span style={{ fontWeight: 600, color: "#333", fontSize: "6.5px", letterSpacing: "0.3px" }}>HOSPITALS</span>
          </div>
        </div>
      );
    case "SAP":
      return (
        <div style={{ background: "#008FD3", padding: "3px 9px", clipPath: "polygon(0 0, 100% 0, 85% 100%, 15% 100%)", borderRadius: "1px" }}>
          <span style={{ color: "#fff", fontWeight: 900, fontSize: "12px", fontFamily: "sans-serif" }}>SAP</span>
        </div>
      );
    case "Capgemini":
      return (
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <span style={{ fontWeight: 800, color: "#0070AD", fontSize: "14px", fontFamily: "sans-serif" }}>Capgemini</span>
          <span style={{ color: "#0070AD", fontSize: "14px" }}>♠</span>
        </div>
      );
    case "Cyient":
      return (
        <span style={{ fontWeight: 900, color: "#004D71", fontSize: "15px", letterSpacing: "0.5px", fontFamily: "sans-serif" }}>CYIENT</span>
      );
    case "HCL":
      return (
        <span style={{ fontWeight: 900, color: "#0F2D69", fontSize: "17px", fontStyle: "italic", letterSpacing: "-0.5px", fontFamily: "sans-serif" }}>HCL</span>
      );
    case "Tata Elxsi":
      return (
        <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.1", alignItems: "center" }}>
          <span style={{ fontWeight: 900, color: "#00A1E4", fontSize: "17px", letterSpacing: "1px" }}>TATA</span>
          <span style={{ fontWeight: 600, color: "#555", fontSize: "9px", letterSpacing: "0.5px" }}>TATA ELXSI</span>
        </div>
      );
    case "Cognizant":
      return (
        <span style={{ fontWeight: 800, color: "#0033A0", fontSize: "15px", fontFamily: "sans-serif" }}>Cognizant</span>
      );
    case "CGI":
      return (
        <span style={{ fontWeight: 900, color: "#E31937", fontSize: "17px", fontFamily: "sans-serif" }}>CGI</span>
      );
    case "Merkle Sokrati":
      return (
        <div style={{ display: "flex", flexDirection: "column", lineHeight: "1", alignItems: "center" }}>
          <span style={{ fontWeight: 800, color: "#E82127", fontSize: "10px", letterSpacing: "0.3px" }}>MERKLE</span>
          <span style={{ fontWeight: 600, color: "#005691", fontSize: "7.5px", letterSpacing: "0.5px" }}>SOKRATI</span>
        </div>
      );
    case "Mindtree":
      return (
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span style={{ color: "#FFC72C", fontSize: "12px" }}>●</span>
          <span style={{ fontWeight: 700, color: "#111", fontSize: "13px", fontFamily: "sans-serif" }}>Mindtree</span>
        </div>
      );
    case "Delhivery":
      return (
        <span style={{ fontWeight: 900, color: "#000", fontSize: "14px", letterSpacing: "0.5px", fontFamily: "monospace" }}>DELHIVERY</span>
      );
    case "needl.ai":
      return (
        <span style={{ fontWeight: 800, color: "#111", fontSize: "14px", fontFamily: "sans-serif" }}>needl.ai</span>
      );
    case "Fareportal":
      return (
        <span style={{ fontWeight: 800, fontSize: "13px", fontFamily: "sans-serif" }}>
          <span style={{ color: "#00A6DA" }}>Fare</span><span style={{ color: "#34A853" }}>portal</span>
        </span>
      );
    case "Prodapt":
      return (
        <span style={{ fontWeight: 800, color: "#E31B23", fontSize: "14px", fontFamily: "sans-serif" }}>Prodapt</span>
      );
    case "Tanla":
      return (
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <div style={{ width: "10px", height: "10px", background: "#E31B23", borderRadius: "1.5px" }}></div>
          <span style={{ fontWeight: 800, color: "#000", fontSize: "13px", fontFamily: "sans-serif" }}>tanla</span>
        </div>
      );
    case "GlobalLogic":
      return (
        <span style={{ fontWeight: 800, color: "#111", fontSize: "13px", fontFamily: "sans-serif" }}>
          Global<span style={{ color: "#FF5B00" }}>Logic</span>
        </span>
      );
    case "NTT Data":
      return (
        <span style={{ fontWeight: 900, color: "#0066B3", fontSize: "13px", letterSpacing: "0.5px", fontFamily: "sans-serif" }}>NTT DATA</span>
      );
    case "Fractal":
      return (
        <span style={{ fontWeight: 800, color: "#111", fontSize: "13px", fontFamily: "sans-serif" }}>
          fractal<span style={{ color: "#004B87" }}>.</span><span style={{ color: "#FF5B00" }}>.</span>
        </span>
      );
    case "Napier Healthcare":
      return (
        <span style={{ fontWeight: 800, color: "#0066A2", fontSize: "13px", fontFamily: "sans-serif" }}>NAPIER Healthcare</span>
      );
    case "GEP":
      return (
        <span style={{ fontWeight: 900, color: "#005FA6", fontSize: "13px", fontFamily: "sans-serif" }}>GEP</span>
      );
    case "Systech":
      return (
        <span style={{ fontWeight: 800, color: "#004C87", fontSize: "13px", fontFamily: "sans-serif" }}>systech</span>
      );
    case "PwC":
      return (
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 5px)", gap: "1px" }}>
            <div style={{ width: "5px", height: "5px", background: "#D04A02" }}></div>
            <div style={{ width: "5px", height: "5px", background: "#FF9900" }}></div>
            <div style={{ width: "5px", height: "5px", background: "#FFC72C" }}></div>
            <div style={{ width: "5px", height: "5px", background: "#000000" }}></div>
          </div>
          <span style={{ fontWeight: 800, color: "#000000", fontSize: "13px", fontFamily: "sans-serif" }}>pwc</span>
        </div>
      );
    case "Siply":
      return (
        <span style={{ fontWeight: 800, color: "#009BD9", fontSize: "13px", fontFamily: "sans-serif" }}>siply</span>
      );
    case "Publicis Sapient":
      return (
        <span style={{ fontWeight: 700, color: "#EE3124", fontSize: "13px", fontFamily: "sans-serif" }}>publicis sapient</span>
      );
    case "Mentor Graphics":
      return (
        <span style={{ fontWeight: 800, color: "#005A9C", fontSize: "13px", fontFamily: "sans-serif" }}>Mentor Graphics</span>
      );
    case "Observe.AI":
      return (
        <span style={{ fontWeight: 800, color: "#111", fontSize: "13px", letterSpacing: "0.5px", fontFamily: "sans-serif" }}>OBSERVE.AI</span>
      );
    case "Optum":
      return (
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <svg width="10" height="10" viewBox="0 0 12 12" fill="#E87722">
            <rect width="5" height="5" x="0" y="0" />
            <rect width="5" height="5" x="7" y="0" />
            <rect width="5" height="5" x="0" y="7" />
          </svg>
          <span style={{ fontWeight: 900, color: "#111", fontSize: "13px", fontFamily: "sans-serif" }}>OPTUM</span>
        </div>
      );
    case "Eurofins":
      return (
        <span style={{ fontWeight: 800, color: "#009639", fontSize: "13px", fontFamily: "sans-serif" }}>eurofins</span>
      );
    case "LatentView":
      return (
        <span style={{ fontWeight: 800, color: "#1B4E8F", fontSize: "13px", fontFamily: "sans-serif" }}>latentview</span>
      );
    case "Birlasoft":
      return (
        <span style={{ fontWeight: 800, color: "#D31D24", fontSize: "13px", fontFamily: "sans-serif" }}>birlasoft</span>
      );
    case "Intellect":
      return (
        <span style={{ fontWeight: 800, color: "#111", fontSize: "13px", fontFamily: "sans-serif" }}>intellect</span>
      );
    case "Perficient":
      return (
        <span style={{ fontWeight: 800, color: "#111", fontSize: "13px", fontFamily: "sans-serif" }}>PERFICIENT</span>
      );
    case "Rakuten":
      return (
        <span style={{ fontWeight: 900, color: "#BF0000", fontSize: "14px", fontFamily: "sans-serif" }}>Rakuten</span>
      );
    case "Societe Generale":
      return (
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <div style={{ width: "14px", height: "14px", display: "flex", flexDirection: "column" }}>
            <div style={{ height: "7px", background: "#E2001A" }}></div>
            <div style={{ height: "7px", background: "#000" }}></div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: "1" }}>
            <span style={{ fontWeight: 800, color: "#111", fontSize: "9px" }}>SOCIETE</span>
            <span style={{ fontWeight: 800, color: "#111", fontSize: "9px" }}>GENERALE</span>
          </div>
        </div>
      );
    case "SpanIdea":
      return (
        <span style={{ fontWeight: 800, color: "#111", fontSize: "13px", fontFamily: "sans-serif" }}>SPANIDEA</span>
      );
    case "ACS Solutions":
      return (
        <span style={{ fontWeight: 800, color: "#005691", fontSize: "13px", fontFamily: "sans-serif" }}>ACS Solutions</span>
      );
    case "Highradius":
      return (
        <span style={{ fontWeight: 800, color: "#0093D0", fontSize: "13px", fontFamily: "sans-serif" }}>highradius</span>
      );
    case "ValueMomentum":
      return (
        <span style={{ fontWeight: 800, color: "#D31D24", fontSize: "13px", fontFamily: "sans-serif" }}>ValueMomentum</span>
      );
    case "Tredence":
      return (
        <span style={{ fontWeight: 800, color: "#111", fontSize: "13px", fontFamily: "sans-serif" }}>Tredence</span>
      );
    case "ZS":
      return (
        <span style={{ fontWeight: 900, color: "#111", fontSize: "14px", fontFamily: "sans-serif" }}>ZS</span>
      );
    case "ADP":
      return (
        <div style={{ background: "#D0202F", color: "#fff", padding: "2px 7px", fontWeight: 900, fontSize: "12px", borderRadius: "1.5px" }}>
          ADP
        </div>
      );
    default:
      return <span style={{ fontWeight: 700, color: "#111" }}>{name}</span>;
  }
}

function LogoChip({ logo }: { logo: (typeof LOGOS)[0] }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px 24px",
        borderRadius: "14px",
        background: "#F8FAFC",
        border: "1px solid #E2E8F0",
        boxShadow: "0 2px 6px rgba(15,23,42,0.03)",
        whiteSpace: "nowrap",
        cursor: "default",
        transition: "all .3s ease",
        height: "48px",
        opacity: 0.8,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05) translateY(-1px)";
        e.currentTarget.style.opacity = "1";
        e.currentTarget.style.background = "#fff";
        e.currentTarget.style.borderColor = "rgba(37,99,235,0.18)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(37,99,235,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.opacity = "0.8";
        e.currentTarget.style.background = "#F8FAFC";
        e.currentTarget.style.borderColor = "#E2E8F0";
        e.currentTarget.style.boxShadow = "0 2px 6px rgba(15,23,42,0.03)";
      }}
    >
      {renderLogo(logo.name)}
    </div>
  );
}

export default function TrustBar() {
  const row1 = LOGOS.slice(0, 28);
  const row2 = LOGOS.slice(28);

  const doubledRow1 = [...row1, ...row1];
  const doubledRow2 = [...row2, ...row2];

  return (
    <div style={{ position: "relative" }}>
      {/* Top Animated Gradient Border */}
      <div style={{ height: "3.5px", width: "100%", background: "linear-gradient(90deg, #2563EB, #06B6D4, #7C3AED, #2563EB)", backgroundSize: "300% 100%", animation: "gradientShift 8s linear infinite" }} />

      <section
        style={{
          padding: "64px 0",
          borderBottom: "1px solid #E2E8F0",
          background: "linear-gradient(180deg, #F8FAFC 0%, #ffffff 100%)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Dynamic Background Glow Blobs */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
          <div style={{
            position: "absolute", top: "10%", left: "15%",
            width: "400px", height: "400px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)",
            animation: "slow-glow 14s infinite alternate ease-in-out"
          }} />
          <div style={{
            position: "absolute", bottom: "10%", right: "15%",
            width: "450px", height: "450px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 70%)",
            animation: "slow-glow 18s infinite alternate-reverse ease-in-out"
          }} />
        </div>

        <div className="wrap" style={{ display: "flex", justifyContent: "center", marginBottom: "32px", position: "relative", zIndex: 1 }}>
          <div
            className="pill"
            style={{
              background: "linear-gradient(135deg, #EFF6FF 0%, #F0FDFE 100%)",
              border: "1px solid #BFDBFE",
              color: "#2563EB",
              fontWeight: 900,
              letterSpacing: "0.5px",
              fontSize: "15px",
              textTransform: "uppercase",
              padding: "8px 22px",
              borderRadius: "999px",
              boxShadow: "0 4px 14px rgba(37,99,235,0.06)",
              position: "relative",
              overflow: "hidden",
              display: "inline-flex",
              alignItems: "center"
            }}
          >
            {/* Shimmer line */}
            <div className="trustbar-pill-glow" />
            <span style={{ position: "relative", zIndex: 1 }}>
              Trusted by growing companies across the globe
            </span>
          </div>
        </div>

        {/* Marquee */}
        <div style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", gap: "16px", zIndex: 1 }}>
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

          {/* Row 1: Left scrolling */}
          <div
            className="marquee-track"
            style={{ gap: "12px", padding: "4px 0" }}
          >
            {doubledRow1.map((logo, i) => (
              <div key={i} style={{ marginRight: "12px" }}>
                <LogoChip logo={logo} />
              </div>
            ))}
          </div>

          {/* Row 2: Right scrolling */}
          <div
            className="marquee-track-reverse"
            style={{ gap: "12px", padding: "4px 0" }}
          >
            {doubledRow2.map((logo, i) => (
              <div key={i} style={{ marginRight: "12px" }}>
                <LogoChip logo={logo} />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Cards Grid */}
        <div className="wrap" style={{ marginTop: "52px", position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
              maxWidth: "980px",
              margin: "0 auto",
            }}
          >
            {[
              {
                v: "3000+",
                l: "Companies Served",
                desc: "From early-stage startups to high-growth tech enterprises",
                icon: (
                  <svg className="stats-card-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="9" cy="7" r="4" stroke="#2563EB" strokeWidth="2"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#2563EB" strokeWidth="2"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#2563EB" strokeWidth="2"/>
                  </svg>
                ),
                color: "#2563EB",
                bg: "#EFF6FF",
              },
              {
                v: "94%",
                l: "Client Retention",
                desc: "Partnerships built on reliable candidate quality and speed",
                icon: (
                  <svg className="stats-card-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#06B6D4" strokeWidth="2"/>
                    <path d="M9 12l2 2 4-4" stroke="#06B6D4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                color: "#06B6D4",
                bg: "#ECFEFF",
              },
              {
                v: "<48 Hours",
                l: "Avg Profile Delivery",
                desc: "First batch of dual-screened candidates in your inbox",
                icon: (
                  <svg className="stats-card-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#22C55E" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="#22C55E" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
                color: "#22C55E",
                bg: "#F0FDF4",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="stats-card"
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  padding: "24px 28px",
                  border: "1.5px solid #E2E8F0",
                  boxShadow: "0 2px 8px rgba(15,23,42,0.03)",
                  transition: "all .28s ease",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${s.color}50`;
                  e.currentTarget.style.boxShadow = `0 12px 30px ${s.color}10`;
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#E2E8F0";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(15,23,42,0.03)";
                  e.currentTarget.style.transform = "";
                }}
              >
                {/* Card top gradient accent */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3.5px", background: s.color }} />

                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: s.bg, color: s.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {s.icon}
                  </div>
                  <div style={{ fontSize: "28px", fontWeight: 850, color: "#0F172A", letterSpacing: "-0.8px", lineHeight: 1 }}>{s.v}</div>
                </div>

                <div style={{ fontSize: "14.5px", fontWeight: 800, color: "#0F172A", marginBottom: "6px", letterSpacing: "-0.1px" }}>{s.l}</div>
                <div style={{ fontSize: "12px", color: "#64748B", lineHeight: 1.5, margin: 0 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes slow-glow {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(40px, -20px) scale(1.08); }
          100% { transform: translate(-20px, 30px) scale(0.92); }
        }
        @keyframes trustbar-shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .trustbar-pill-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(37,99,235,0.18), transparent);
          transform: translateX(-100%);
          animation: trustbar-shimmer 3s infinite linear;
        }
        .stats-card {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .stats-card-icon {
          transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .stats-card:hover .stats-card-icon {
          transform: scale(1.18) rotate(5deg);
        }
      `}</style>
    </div>
  );
}