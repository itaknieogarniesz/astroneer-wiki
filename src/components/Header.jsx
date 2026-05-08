import { useLanguage } from "../i18n/LanguageContext";

export default function Header({ compact, setCompact, search, setSearch }) {
  const { lang, toggleLang, t } = useLanguage();

  return (
    <div style={{
      borderBottom: "1px solid rgba(255,255,255,0.07)",
      padding: compact ? "8px 16px" : "16px 24px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      gap: "12px", flexWrap: "wrap",
      backdropFilter: "blur(10px)",
      position: "sticky", top: 0, zIndex: 100,
      background: "rgba(8,13,26,0.92)",
    }}>

      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
        <div style={{
          width: compact ? 24 : 32, height: compact ? 24 : 32,
          borderRadius: "50%",
          background: "radial-gradient(circle at 35% 35%, #7dd3fc, #3b82f6, #1d4ed8)",
          boxShadow: "0 0 16px rgba(96,165,250,0.4)", flexShrink: 0,
        }} />
        {!compact && (
          <div>
            <div style={{ fontSize: "16px", fontWeight: "700", letterSpacing: "-0.02em", color: "#f1f5f9" }}>
              ASTRONEER<span style={{ color: "#38bdf8" }}>WIKI</span>
            </div>
            <div style={{ fontSize: "9px", color: "#475569", fontFamily: "'Space Mono', monospace", letterSpacing: "0.1em" }}>
              {t("header.subtitle")}
            </div>
          </div>
        )}
      </div>

      {/* Search */}
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder={t("header.search")}
        style={{
          flex: "1 1 160px", minWidth: "100px", maxWidth: "320px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "6px",
          padding: compact ? "5px 10px" : "7px 12px",
          color: "#e2e8f0",
          fontSize: compact ? "11px" : "13px",
          fontFamily: "'Space Mono', monospace",
          outline: "none",
        }}
      />

      {/* Kontrolki: Toggle Mode & Lang */}
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        
        {/* Toggle Language */}
        <button onClick={toggleLang} style={{
          background: "none", border: "1px solid rgba(255,255,255,0.2)",
          color: "#94a3b8", borderRadius: "4px", padding: "4px 8px",
          fontSize: "11px", fontFamily: "'Space Mono', monospace",
          cursor: "pointer", transition: "all 0.2s"
        }}>
          {lang.toUpperCase()}
        </button>

        {/* Mode toggle */}
        <div style={{
          display: "flex",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "6px", overflow: "hidden", flexShrink: 0,
        }}>
          {[[t("header.normal"), false], [t("header.compact"), true]].map(([lbl, val]) => (
            <button key={lbl} onClick={() => setCompact(val)} style={{
              padding: compact ? "4px 9px" : "6px 12px",
              fontSize: "10px", fontFamily: "'Space Mono', monospace",
              background: compact === val ? "rgba(56,189,248,0.2)" : "transparent",
              color: compact === val ? "#38bdf8" : "#64748b",
              border: "none", cursor: "pointer",
              borderRight: val === false ? "1px solid rgba(255,255,255,0.1)" : "none",
              transition: "all 0.15s", letterSpacing: "0.05em",
            }}>{lbl}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
