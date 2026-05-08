import { ENTRIES } from "../data/entries";
import { TAB_TAGS, getColor, PHASE_COLORS, PLANET_COLORS } from "../data/tags";

export default function CompactList({ tabId, search, onEntryClick }) {
  const tagSet = TAB_TAGS[tabId] || [];

  const entries = ENTRIES.filter(e => {
    const matchTab    = tagSet.length === 0 || tagSet.some(t => e.tags.includes(t));
    const matchSearch = search === "" ||
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.tags.some(t => t.includes(search.toLowerCase()));
    return matchTab && matchSearch;
  });

  const phases = Object.keys(PHASE_COLORS);

  // Grupuj po planecie jeśli zakładka = planety
  if (tabId === "planety") {
    const planets = Object.keys(PLANET_COLORS);
    return (
      <div>
        {planets.map(planet => {
          const related = entries.filter(e => e.tags.includes(planet));
          if (!related.length) return null;
          return (
            <div key={planet} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{
                padding: "8px 16px", fontSize: "10px",
                fontFamily: "'Space Mono', monospace",
                color: getColor(planet), letterSpacing: "0.12em",
                background: "rgba(255,255,255,0.02)",
                display: "flex", alignItems: "center", gap: "8px",
              }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: getColor(planet), display: "inline-block", flexShrink: 0 }} />
                {planet.toUpperCase()}
              </div>
              {related.map(e => (
                <CompactRow key={e.id} entry={e} phases={phases} onClick={() => onEntryClick?.(e.id)} />
              ))}
            </div>
          );
        })}
        {!entries.length && <EmptyState />}
      </div>
    );
  }

  return (
    <div>
      {entries.map(e => (
        <CompactRow key={e.id} entry={e} phases={phases} onClick={() => onEntryClick?.(e.id)} />
      ))}
      {!entries.length && <EmptyState />}
    </div>
  );
}

function CompactRow({ entry, phases, onClick }) {
  const phase = entry.tags.find(t => phases.includes(t));
  const phaseColor = phase ? getColor(phase) : "#94a3b8";
  const typeIcon = { planet: "🪐", moon: "🌑", resource: "⛏️", guide: "📋" }[entry.type] || "◈";

  return (
    <div
      onClick={onClick}
      style={{
        display: "flex", alignItems: "center", gap: "10px",
        padding: "7px 16px",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        cursor: "pointer", transition: "background 0.1s",
      }}
      onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.04)"}
      onMouseLeave={e => e.currentTarget.style.background = "transparent"}
    >
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: phaseColor, flexShrink: 0 }} />
      <span style={{ fontSize: "11px", flexShrink: 0 }}>{typeIcon}</span>
      <span style={{ fontSize: "12px", color: "#e2e8f0", fontFamily: "'Space Mono', monospace", flex: 1 }}>
        {entry.name}
      </span>
      <div style={{ display: "flex", gap: "3px" }}>
        {entry.tags.slice(0, 2).map(tag => (
          <span key={tag} style={{
            fontSize: "9px", padding: "1px 5px", borderRadius: "3px",
            background: `${getColor(tag)}22`, color: getColor(tag),
            fontFamily: "'Space Mono', monospace", whiteSpace: "nowrap",
          }}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div style={{ padding: "32px", textAlign: "center", color: "#475569", fontFamily: "'Space Mono', monospace", fontSize: "11px" }}>
      Brak wpisów w tej kategorii
    </div>
  );
}
