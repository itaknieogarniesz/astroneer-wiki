// ═══════════════════════════════════════════════
// KOLORY TAGÓW
// ═══════════════════════════════════════════════

export const PHASE_COLORS = {
  "początek-gry": "#4ade80",
  "środek-gry":   "#fb923c",
  "późna-gra":    "#f87171",
  "koniec-gry":   "#c084fc",
};

export const PLANET_COLORS = {
  sylva:   "#6ee7b7",
  desolo:  "#d1d5db",
  calidor: "#fca5a5",
  vesania: "#c4b5fd",
  novus:   "#93c5fd",
  glacio:  "#bae6fd",
  atrox:   "#f9a8d4",
};

export const TAG_COLORS = {
  // Etap gry
  ...PHASE_COLORS,

  // Planety
  ...PLANET_COLORS,

  // Kategorie główne
  planety:       "#7dd3fc",
  surowce:       "#fdba74",
  automatyzacja: "#a78bfa",
  baza:          "#fde68a",
  poradnik:      "#86efac",

  // Surowce podstawowe
  "żywica":      "#86efac",
  "mieszanka":   "#94a3b8",
  "kwarc":       "#e2e8f0",
  "organika":    "#bbf7d0",
  "glina":       "#d4a27a",
  "ziemia":      "#b45309",
  "amon":        "#fcd34d",
  "grafit":      "#475569",

  // Minerały
  "lateryt":     "#fb923c",
  "malachit":    "#34d399",
  "wolframit":   "#9ca3af",
  "hematyt":     "#f87171",
  "tytanit":     "#60a5fa",
  "sfaleryt":    "#fbbf24",
  "lit":         "#a78bfa",

  // Surowce przetworzone
  "aluminium":   "#fb923c",
  "miedź":       "#f97316",
  "wolfram":     "#9ca3af",
  "żelazo":      "#ef4444",
  "tytan":       "#3b82f6",
  "cynk":        "#fbbf24",
  "węgiel":      "#6b7280",
  "szkło":       "#e2e8f0",
  "ceramika":    "#d4a27a",
  "guma":        "#374151",
  "plastik":     "#22d3ee",

  // Surowce zaawansowane
  "stal":             "#94a3b8",
  "grafen":           "#6b7280",
  "stop-tytanu":      "#93c5fd",
  "stop-nanowęgla":   "#c084fc",
  "wybuchowy-proszek": "#fca5a5",
  "hydrazyna":        "#fde68a",
  "diament":          "#e0f2fe",

  // Gazy
  "gaz":         "#93c5fd",
  "wodór":       "#bae6fd",
  "metan":       "#fde68a",
  "siarka":      "#fef08a",
  "azot":        "#e0f2fe",
  "argon":       "#c4b5fd",
  "hel":         "#fbcfe8",

  // Mechaniki
  "obwody-logiczne":       "#a78bfa",
  "czujnik":               "#c084fc",
  "bramka":                "#818cf8",
  "automatyczne-ramię":    "#f0abfc",
  "transport":             "#7dd3fc",
  "piec-topniczy":         "#fb923c",
  "laboratorium-chemiczne": "#34d399",

  // Survival / podróż
  "lądowanie":  "#7dd3fc",
  "co-zabrać":  "#7dd3fc",
  "rakieta":    "#38bdf8",
  "przetrwanie": "#4ade80",
  "paliwo":     "#fda4af",
  "tlen":       "#bae6fd",

  // Atmosfery
  "brak-atmosfery": "#6b7280",
  "toksyczna":      "#86efac",
  "mroźna":         "#bae6fd",
  "wybuchowa":      "#fca5a5",
  "śmiertelna":     "#f43f5e",

  // Pozostałe
  "podstawowe":   "#94a3b8",
  "minerały":     "#9ca3af",
  "zaawansowane": "#c084fc",
  "crafting":     "#f0abfc",
  "energia":      "#fef08a",
  "słońce":       "#fef08a",
  "wiatr":        "#bae6fd",
  "baterie":      "#fbbf24",
};

export const getColor = t => TAG_COLORS[t] || "#64748b";

// ═══════════════════════════════════════════════
// ZAKŁADKI NAWIGACJI
// ═══════════════════════════════════════════════

export const TABS = [
  { id: "all",           icon: "◈",  label: "Wszystko"      },
  { id: "planety",       icon: "🪐", label: "Planety"       },
  { id: "surowce",       icon: "⛏️", label: "Surowce"       },
  { id: "automatyzacja", icon: "⚙️", label: "Automatyzacja" },
  { id: "poradnik",      icon: "🚀", label: "Poradnik"      },
  { id: "bazy",          icon: "🏗️", label: "Bazy"          },
];

export const TAB_TAGS = {
  all:           [],
  planety:       ["sylva","desolo","calidor","vesania","novus","glacio","atrox","planety"],
  surowce:       ["surowce","podstawowe","minerały","zaawansowane","żywica","mieszanka",
                  "kwarc","organika","glina","lateryt","malachit","wolframit","hematyt",
                  "tytanit","sfaleryt","lit","stal","grafen","stop-tytanu",
                  "stop-nanowęgla","wybuchowy-proszek","hydrazyna"],
  automatyzacja: ["automatyzacja","obwody-logiczne","czujnik","bramka","automatyczne-ramię","stop-nanowęgla"],
  poradnik:      ["poradnik","początek-gry","środek-gry","koniec-gry","lądowanie","co-zabrać","przetrwanie"],
  bazy:          ["baza","energia","słońce","wiatr","baterie"],
};

// ═══════════════════════════════════════════════
// GRUPY TAGÓW DO SIDEBARU
// ═══════════════════════════════════════════════

export const TAG_GROUPS = [
  {
    label: "ETAP GRY",
    tags:  ["początek-gry","środek-gry","późna-gra","koniec-gry"],
  },
  {
    label: "PLANETA",
    tags:  ["sylva","desolo","calidor","vesania","novus","glacio","atrox"],
  },
  {
    label: "TYP WPISU",
    tags:  ["planety","surowce","automatyzacja","baza","poradnik"],
  },
  {
    label: "SUROWCE",
    tags:  ["podstawowe","minerały","zaawansowane","gaz","paliwo","tlen"],
  },
  {
    label: "MECHANIKI",
    tags:  ["obwody-logiczne","automatyczne-ramię","rakieta","lądowanie","co-zabrać","przetrwanie"],
  },
];
