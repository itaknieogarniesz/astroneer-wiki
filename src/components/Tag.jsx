import { getColor } from "../data/tags";

export default function Tag({ label, active, onClick, small }) {
  const color = getColor(label);
  return (
    <button
      onClick={onClick}
      style={{
        background: active ? color : "rgba(255,255,255,0.05)",
        color: active ? "#0a0f1a" : color,
        border: `1px solid ${color}40`,
        borderRadius: "4px",
        padding: small ? "2px 6px" : "3px 9px",
        fontSize: small ? "9px" : "11px",
        fontFamily: "'Space Mono', monospace",
        cursor: "pointer",
        letterSpacing: "0.03em",
        transition: "all 0.15s",
        whiteSpace: "nowrap",
        fontWeight: active ? "700" : "400",
      }}
    >
      {label}
    </button>
  );
}
