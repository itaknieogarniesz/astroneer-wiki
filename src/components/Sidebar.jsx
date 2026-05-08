import Tag from "./Tag";
import { TABS, TAG_GROUPS } from "../data/tags";

export default function Sidebar({ compact, activeTab, onTabChange, activeTags, onTagToggle, onClearTags, isMobile }) {
  
  // Wersja Mobilna - Bottom Tab Bar
  if (isMobile) {
    return (
      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0, height: "65px",
        background: "rgba(8,13,26,0.95)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(56,189,248,0.15)",
        display: "flex", justifyContent: "space-around", alignItems: "center",
        zIndex: 900,
        boxShadow: "0 -5px 20px rgba(0,0,0,0.5)",
      }}>
        {TABS.map(tab => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              style={{
                display: "flex", flexDirection: "column", alignItems: "center", gap: "4px",
                padding: "8px",
                background: "transparent", border: "none",
                color: isActive ? "#38bdf8" : "#475569",
                cursor: "pointer", transition: "all 0.2s",
                width: "100%",
              }}
            >
              <span style={{ fontSize: isActive ? "20px" : "18px", filter: isActive ? "drop-shadow(0 0 5px rgba(56,189,248,0.5))" : "none", transition: "all 0.2s" }}>
                {tab.icon}
              </span>
              <span style={{ 
                fontSize: "8px", 
                fontFamily: "'Space Mono', monospace", 
                letterSpacing: "0.05em",
                fontWeight: isActive ? "700" : "400"
              }}>
                {tab.label.toUpperCase()}
              </span>
            </button>
          );
        })}
      </div>
    );
  }

  // Wersja Desktopowa (zostaje bez zmian)
  return (
    <div style={{
      width: compact ? "52px" : "200px",
      flexShrink: 0,
      borderRight: "1px solid rgba(255,255,255,0.06)",
      display: "flex", flexDirection: "column",
      minHeight: "calc(100vh - 57px)",
      padding: compact ? "12px 0" : "20px 0",
      position: "sticky", top: compact ? "49px" : "57px",
      maxHeight: compact ? "calc(100vh - 49px)" : "calc(100vh - 57px)",
      overflowY: "auto",
      transition: "width 0.2s",
    }}>

      {/* Zakładki */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2px", padding: compact ? "0 6px" : "0 12px", marginBottom: "16px" }}>
        {TABS.map(tab => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              title={compact ? tab.label : undefined}
              style={{
                display: "flex", alignItems: "center", gap: "8px",
                padding: compact ? "8px" : "8px 10px",
                justifyContent: compact ? "center" : "flex-start",
                borderRadius: "6px",
                background: isActive ? "rgba(56,189,248,0.12)" : "transparent",
                border: isActive ? "1px solid rgba(56,189,248,0.25)" : "1px solid transparent",
                color: isActive ? "#38bdf8" : "#64748b",
                cursor: "pointer", transition: "all 0.15s",
                fontSize: compact ? "16px" : "12px",
                fontFamily: "'Space Mono', monospace",
                whiteSpace: "nowrap", letterSpacing: "0.03em",
                width: "100%",
              }}
            >
              <span style={{ flexShrink: 0 }}>{tab.icon}</span>
              {!compact && <span>{tab.label}</span>}
            </button>
          );
        })}
      </div>

      {/* Filtry tagów — tylko tryb normalny */}
      {!compact && (
        <div style={{ padding: "0 12px", display: "flex", flexDirection: "column", gap: "16px" }}>
          {activeTags.length > 0 && (
            <button onClick={onClearTags} style={{
              padding: "5px 8px",
              background: "rgba(248,113,113,0.1)",
              border: "1px solid rgba(248,113,113,0.3)",
              borderRadius: "5px", color: "#f87171",
              fontSize: "10px", fontFamily: "'Space Mono', monospace",
              cursor: "pointer", letterSpacing: "0.05em",
            }}>
              ✕ wyczyść ({activeTags.length})
            </button>
          )}

          {TAG_GROUPS.map(group => (
            <div key={group.label}>
              <div style={{
                fontSize: "8px", letterSpacing: "0.15em", color: "#334155",
                fontFamily: "'Space Mono', monospace", marginBottom: "6px",
              }}>
                {group.label}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                {group.tags.map(tag => (
                  <Tag
                    key={tag}
                    label={tag}
                    active={activeTags.includes(tag)}
                    onClick={() => onTagToggle(tag)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
