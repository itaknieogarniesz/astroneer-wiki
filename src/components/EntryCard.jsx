import Tag from "./Tag";
import { getColor, PHASE_COLORS } from "../data/tags";

export default function EntryCard({ entry, activeTags, onTagClick, onClick }) {
  const phase = entry.tags.find(t => PHASE_COLORS[t]);
  const phaseColor = phase ? PHASE_COLORS[phase] : "#94a3b8";

  const typeIcon = {
    planet:   "🪐",
    moon:     "🌑",
    resource: "⛏️",
    guide:    "📋",
  }[entry.type] || "◈";

  return (
    <div
      onClick={onClick}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderLeft: `3px solid ${phaseColor}`,
        borderRadius: "8px", padding: "14px",
        cursor: "pointer", transition: "all 0.15s",
      }}
      onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
      onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.transform = "none"; }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
        <span style={{ fontSize: "14px" }}>{typeIcon}</span>
        <span style={{ fontSize: "14px", fontWeight: "600", color: "#f1f5f9", fontFamily: "'Outfit', sans-serif" }}>
          {entry.name}
        </span>
        {entry.difficulty && (
          <span style={{ marginLeft: "auto", fontSize: "10px", color: "#475569", fontFamily: "'Space Mono', monospace" }}>
            {"★".repeat(entry.difficulty)}{"☆".repeat(5 - entry.difficulty)}
          </span>
        )}
      </div>

      {entry.summary && (
        <div style={{ fontSize: "12px", color: "#94a3b8", marginBottom: "10px", lineHeight: "1.5", fontFamily: "'Outfit', sans-serif" }}>
          {entry.summary}
        </div>
      )}

      <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
        {entry.tags.map(tag => (
          <Tag
            key={tag}
            label={tag}
            active={activeTags.includes(tag)}
            onClick={e => { e.stopPropagation(); onTagClick(tag); }}
          />
        ))}
      </div>
    </div>
  );
}
