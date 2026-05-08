import { useState, useEffect } from "react";

// UWAGA: Podmień te stałe na własne dane!
const REPO_OWNER = "itaknieogarniesz"; 
const REPO_NAME = "astroneer-wiki";

export default function Comments({ issueId, phaseColor }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!issueId) return;

    setLoading(true);
    // Odpytywanie publicznego API GitHuba
    fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues/${issueId}/comments`)
      .then(res => {
        if (!res.ok) throw new Error("Błąd protokołu: Nie udało się pobrać logów z serwera.");
        return res.json();
      })
      .then(data => {
        setComments(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [issueId]);

  if (!issueId) return null;

  return (
    <div style={{ marginTop: "32px", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <h3 style={{ fontSize: "12px", color: phaseColor, fontFamily: "'Space Mono', monospace", letterSpacing: "0.1em" }}>
          TERMINAL DYSKUSYJNY
        </h3>
        <a
          href={`https://github.com/${REPO_OWNER}/${REPO_NAME}/issues/${issueId}#issuecomment-new`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "rgba(255,255,255,0.05)", border: `1px solid ${phaseColor}40`,
            color: "#e2e8f0", padding: "6px 12px", borderRadius: "4px",
            fontSize: "10px", fontFamily: "'Space Mono', monospace", textDecoration: "none",
            transition: "all 0.2s", letterSpacing: "0.05em"
          }}
          onMouseEnter={e => e.target.style.background = `${phaseColor}20`}
          onMouseLeave={e => e.target.style.background = "rgba(255,255,255,0.05)"}
        >
          + DODAJ RAPORT
        </a>
      </div>

      {loading && <div style={{ color: "#64748b", fontSize: "11px", fontFamily: "'Space Mono', monospace" }}>Nawiązywanie połączenia z siecią...</div>}
      {error && <div style={{ color: "#f87171", fontSize: "11px", fontFamily: "'Space Mono', monospace" }}>[ERROR] {error}</div>}

      {!loading && !error && comments.length === 0 && (
        <div style={{ color: "#475569", fontSize: "11px", fontFamily: "'Space Mono', monospace", fontStyle: "italic" }}>
          Brak wpisów w logach. Bądź pierwszym badaczem.
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {comments.map(c => (
          <div key={c.id} style={{ background: "rgba(0,0,0,0.2)", borderLeft: `2px solid ${phaseColor}50`, padding: "12px", borderRadius: "0 6px 6px 0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <img src={c.user.avatar_url} alt="avatar" style={{ width: 18, height: 18, borderRadius: "50%" }} />
              <span style={{ color: "#cbd5e1", fontSize: "12px", fontWeight: "600" }}>{c.user.login}</span>
              <span style={{ color: "#475569", fontSize: "10px", fontFamily: "'Space Mono', monospace" }}>
                {new Date(c.created_at).toLocaleDateString()}
              </span>
            </div>
            {/* Wyświetlanie treści komentarza */}
            <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: "1.5", whiteSpace: "pre-wrap", fontFamily: "'Outfit', sans-serif" }}>
              {c.body}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
