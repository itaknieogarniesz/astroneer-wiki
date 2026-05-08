import { getColor, PHASE_COLORS } from "../data/tags";
import Comments from "./Comments";

export default function EntryDetail({ entry, onClose, compact }) {
  if (!entry) return null;

  const phase = entry.tags.find(t => PHASE_COLORS[t]);
  const phaseColor = phase ? getColor(phase) : "#38bdf8";

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(8, 13, 26, 0.6)",
          backdropFilter: "blur(4px)",
          zIndex: 999,
          animation: "fadeIn 0.2s ease-out forwards",
          cursor: "pointer",
        }}
      />

      {/* Panel */}
      <div style={{
        position: "fixed", top: 0, right: 0,
        width: compact ? "100%" : "450px",
        height: "100vh",
        background: "#0a0f1a",
        borderLeft: `1px solid ${phaseColor}40`,
        boxShadow: "-10px 0 40px rgba(0,0,0,0.8)",
        zIndex: 1000,
        display: "flex", flexDirection: "column",
        animation: "slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      }}>
        <style>{`
          @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
          @keyframes fadeIn  { from { opacity: 0; } to { opacity: 1; } }
        `}</style>

        {/* Header panelu */}
        <div style={{
          padding: "16px 20px",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <button
            onClick={onClose}
            style={{ background: "none", border: "none", color: "#64748b", cursor: "pointer", fontSize: "18px", transition: "color 0.2s", lineHeight: 1 }}
            onMouseEnter={e => e.target.style.color = "#f87171"}
            onMouseLeave={e => e.target.style.color = "#64748b"}
          >✕</button>
          <div style={{ fontSize: "10px", fontFamily: "'Space Mono', monospace", color: phaseColor, letterSpacing: "0.08em" }}>
            {entry.type?.toUpperCase()} · {entry.id}
          </div>
        </div>

        {/* Treść */}
        <div style={{ flex: 1, overflowY: "auto", padding: "24px" }}>

          {/* Tytuł */}
          <div style={{ marginBottom: "20px" }}>
            <div style={{ fontSize: "22px", fontWeight: "700", color: "#f1f5f9", fontFamily: "'Outfit', sans-serif", marginBottom: "8px" }}>
              {entry.name}
            </div>
            {entry.summary && (
              <div style={{ fontSize: "13px", color: "#94a3b8", lineHeight: "1.6" }}>
                {entry.summary}
              </div>
            )}
          </div>

          {/* Trudność — tylko planety */}
          {entry.difficulty && (
            <div style={{ marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "10px", color: "#475569", fontFamily: "'Space Mono', monospace" }}>TRUDNOŚĆ</span>
              <span style={{ color: phaseColor, letterSpacing: "2px" }}>
                {"★".repeat(entry.difficulty)}
                <span style={{ color: "#1e293b" }}>{"★".repeat(5 - entry.difficulty)}</span>
              </span>
            </div>
          )}

          {/* Sekcje zależne od typu */}
          {(entry.type === "planet" || entry.type === "moon") && <PlanetInfo entry={entry} />}
          {entry.type === "resource" && <ResourceInfo entry={entry} />}
          {entry.type === "guide" && <GuideInfo entry={entry} phaseColor={phaseColor} />}

          {/* Notatki */}
          {entry.notes && (
            <div style={{
              // ... wcześniejszy kod notatek ...
            }}>
              <div style={{ fontSize: "9px", fontWeight: "700", marginBottom: "6px", color: phaseColor, fontFamily: "'Space Mono', monospace", letterSpacing: "0.1em" }}>
                NOTATKI
              </div>
              <div style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: "1.6" }}>{entry.notes}</div>
            </div>
          )}

          {/* TUTAJ WCHODZI SYSTEM KOMENTARZY */}
          <Comments issueId={entry.issueId} phaseColor={phaseColor} />

        </div>
      </div>
    </>
  );
}

// ─── PLANET ──────────────────────────────────────────────────────────────────

function PlanetInfo({ entry }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

      {/* Atmosfera */}
      <Row label="Atmosfera" value={entry.atmosphere} />
      {entry.orbits && <Row label="Orbita wokół" value={entry.orbits} colored />}
      {entry.gateway && <Row label="Gateway" value={entry.gateway} />}

      {/* Surowce */}
      {entry.resources && (
        <div>
          <SectionLabel>Surowce</SectionLabel>
          {Object.entries(entry.resources).map(([layer, items]) => (
            <div key={layer} style={{ marginBottom: "10px" }}>
              <div style={{ fontSize: "10px", color: "#475569", fontFamily: "'Space Mono', monospace", marginBottom: "5px", letterSpacing: "0.08em" }}>
                {layerLabel(layer)}
              </div>
              <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                {items.map(r => <ResourcePill key={r} name={r} />)}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Co zabrać */}
      {entry.takewith && (
        <div>
          <SectionLabel>Co zabrać</SectionLabel>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {entry.takewith.map(item => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#cbd5e1" }}>
                <span style={{ color: "#38bdf8", fontSize: "10px" }}>▸</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── RESOURCE ────────────────────────────────────────────────────────────────

function ResourceInfo({ entry }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

      {entry.rarity && <Row label="Rzadkość" value={entry.rarity} />}
      {entry.smelts_to && <Row label="Wytapia się w" value={entry.smelts_to} colored />}
      {entry.craftedIn && <Row label="Crafting w" value={entry.craftedIn} />}

      {/* Gdzie znaleźć */}
      {entry.foundOn && (
        <div>
          <SectionLabel>Gdzie znaleźć</SectionLabel>
          <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
            {entry.foundOn.map(p => (
              <span key={p} style={{
                padding: "3px 9px", borderRadius: "4px", fontSize: "11px",
                fontFamily: "'Space Mono', monospace",
                background: `${getColor(p)}18`, color: getColor(p),
                border: `1px solid ${getColor(p)}30`,
              }}>{p}</span>
            ))}
          </div>
        </div>
      )}

      {/* Przepis */}
      {entry.recipe && (
        <div>
          <SectionLabel>Przepis craftingu</SectionLabel>
          <div style={{ background: "rgba(255,255,255,0.02)", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}>
            {Object.entries(entry.recipe).map(([item, count], i, arr) => (
              <div key={item} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "9px 14px",
                borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
              }}>
                <span style={{ fontSize: "13px", color: "#e2e8f0" }}>{item}</span>
                <span style={{ fontSize: "12px", color: "#38bdf8", fontFamily: "'Space Mono', monospace", fontWeight: "700" }}>×{count}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Do czego służy */}
      {entry.usedFor && (
        <div>
          <SectionLabel>Używany do</SectionLabel>
          <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
            {entry.usedFor.map(u => <ResourcePill key={u} name={u} />)}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── GUIDE ───────────────────────────────────────────────────────────────────

function GuideInfo({ entry, phaseColor }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {entry.sections?.map((s, i) => (
        <div key={i}>
          <h3 style={{
            fontSize: "14px", color: "#f1f5f9", marginBottom: "8px",
            borderLeft: `2px solid ${phaseColor}`, paddingLeft: "10px",
            fontFamily: "'Outfit', sans-serif", fontWeight: "600",
          }}>
            {s.title}
          </h3>
          <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: "1.7", paddingLeft: "12px" }}>
            {s.content}
          </p>
        </div>
      ))}
    </div>
  );
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <div style={{ fontSize: "9px", letterSpacing: "0.15em", color: "#334155", fontFamily: "'Space Mono', monospace", marginBottom: "8px" }}>
      {children.toUpperCase()}
    </div>
  );
}

function Row({ label, value, colored }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "13px", paddingBottom: "8px", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
      <span style={{ color: "#475569", fontFamily: "'Space Mono', monospace", fontSize: "11px" }}>{label}</span>
      <span style={{ color: colored ? getColor(value) : "#e2e8f0" }}>{value}</span>
    </div>
  );
}

function ResourcePill({ name }) {
  return (
    <span style={{
      padding: "3px 8px", borderRadius: "4px",
      fontSize: "11px", fontFamily: "'Space Mono', monospace",
      background: `${getColor(name)}15`, color: getColor(name),
      border: `1px solid ${getColor(name)}25`,
    }}>{name}</span>
  );
}

function layerLabel(layer) {
  return { surface: "POWIERZCHNIA", subsurface: "PODZIEMIA", gaseous: "GAZY", deep: "GŁĘBOKO" }[layer] || layer.toUpperCase();
}
