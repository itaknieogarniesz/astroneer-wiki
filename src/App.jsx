import { useState, useMemo, useEffect } from "react";
import Header   from "./components/Header";
import Sidebar  from "./components/Sidebar";
import EntryCard from "./components/EntryCard";
import CompactList from "./components/CompactList";
import EntryDetail from "./components/EntryDetail";
import { ENTRIES }  from "./data/entries";
import { TAB_TAGS } from "./data/tags";

export default function App() {
  const [compact,    setCompact]    = useState(false);
  const [search,     setSearch]     = useState("");
  const [activeTags, setActiveTags] = useState([]);
  const [activeTab,  setActiveTab]  = useState("all");
  const [selectedEntryId, setSelectedEntryId] = useState(null);
  
  // Detekcja urządzeń mobilnych
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleTag  = tag => setActiveTags(p => p.includes(tag) ? p.filter(t => t !== tag) : [...p, tag]);
  const clearTags  = ()  => { setActiveTags([]); setActiveTab("all"); };

  const handleTab = tab => {
    setActiveTab(tab);
    if (!compact && !isMobile) {
      const tags = TAB_TAGS[tab] || [];
      setActiveTags(tags);
    }
  };

  const selectedEntry = useMemo(() => 
    ENTRIES.find(e => e.id === selectedEntryId), 
    [selectedEntryId]
  );

  const filtered = useMemo(() => {
    return ENTRIES.filter(e => {
      const matchSearch = search === "" ||
        e.name.toLowerCase().includes(search.toLowerCase()) ||
        e.tags.some(t => t.includes(search.toLowerCase()));
      const matchTags = activeTags.length === 0 ||
        activeTags.some(t => e.tags.includes(t));
      return matchSearch && matchTags;
    });
  }, [search, activeTags]);

  return (
    <div style={{
      minHeight: "100vh",
      background: "rgba(8, 13, 26, 0.75",
      color: "#e2e8f0",
      fontFamily: "'Outfit', sans-serif",
      position: "relative",
      overflow: "hidden",
      backgroundImage: `
        radial-gradient(ellipse at 20% 10%, rgba(56,189,248,0.06) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 80%, rgba(168,85,247,0.06) 0%, transparent 50%)
      `,
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Outfit:wght@300;400;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        input::placeholder { color: #475569; }
        input { outline: none; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }
      `}</style>

      <Header
        compact={compact}
        setCompact={setCompact}
        search={search}
        setSearch={setSearch}
      />

      <div style={{ 
        display: "flex", 
        maxWidth: compact ? "800px" : "1100px", 
        margin: "0 auto",
        paddingBottom: isMobile ? "70px" : "0" // Miejsce na dolny pasek
      }}>
        <Sidebar
          compact={compact}
          activeTab={activeTab}
          onTabChange={handleTab}
          activeTags={activeTags}
          onTagToggle={toggleTag}
          onClearTags={clearTags}
          isMobile={isMobile}
        />

        <div style={{ flex: 1, position: "relative", overflowX: "hidden" }}>
          {compact ? (
            <>
              <div style={{
                padding: "6px 16px",
                fontSize: "9px", letterSpacing: "0.12em",
                color: "#334155", fontFamily: "'Space Mono', monospace",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                background: "rgba(255,255,255,0.01)",
              }}>
                {activeTab.toUpperCase()} {search && `· "${search}"`}
              </div>
              <CompactList 
                tabId={activeTab} 
                search={search} 
                onEntryClick={setSelectedEntryId} 
              />
            </>
          ) : (
            <div style={{ padding: isMobile ? "12px" : "20px" }}>
              <div style={{ fontSize: "10px", color: "#334155", fontFamily: "'Space Mono', monospace", marginBottom: "12px" }}>
                {filtered.length} {filtered.length === 1 ? "wynik" : "wyników"}
                {activeTags.length > 0 && ` · filtry: ${activeTags.join(", ")}`}
              </div>
              <div style={{ display: "grid", gap: "8px" }}>
                {filtered.length === 0
                  ? <div style={{ padding: "40px", textAlign: "center", color: "#475569", fontFamily: "'Space Mono', monospace", fontSize: "12px" }}>
                      Brak wyników
                    </div>
                  : filtered.map(e => (
                      <EntryCard
                        key={e.id}
                        entry={e}
                        activeTags={activeTags}
                        onTagClick={toggleTag}
                        onClick={() => setSelectedEntryId(e.id)}
                      />
                    ))
                }
              </div>
            </div>
          )}

          <EntryDetail 
            entry={selectedEntry} 
            onClose={() => setSelectedEntryId(null)} 
            compact={compact || isMobile} 
          />
        </div>
      </div>
    </div>
  );
}
