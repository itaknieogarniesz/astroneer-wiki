export const ENTRIES = [

  // ═══════════════════════════════════════════════
  // PLANETY
  // ═══════════════════════════════════════════════

  {
    id: "sylva",
    issueId: 1,
    name: "Sylva",
    tags: ["sylva", "planety", "początek-gry", "tlen", "żywica", "mieszanka", "kwarc", "glina"],
    type: "planet",
    difficulty: 1,
    atmosphere: "tlen",
    summary: "Planeta startowa. Idealna do nauki mechanik gry.",
    resources: {
      surface:    ["żywica", "mieszanka", "organika", "kwarc"],
      subsurface: ["glina", "węgiel", "amon", "lateryt", "malachit", "sfaleryt"],
      deep:       ["astronium"],
    },
    gateway: "rdzeń",
    notes: "Najlepsze miejsce na pierwszą bazę. Nie leć stąd, zanim nie stworzysz Tlenogeneratora i małego zbiornika na tlen.",
  },

  {
    id: "desolo",
    issueId: 2,
    name: "Desolo",
    tags: ["desolo", "planety", "początek-gry", "brak-atmosfery", "cynk", "wolframit", "co-zabrać", "lądowanie"],
    type: "moon",
    orbits: "sylva",
    difficulty: 1,
    atmosphere: "brak",
    summary: "Księżyc Sylvy. Brak atmosfery, ale spokojny teren i cenny cynk oraz wolframit.",
    resources: {
      surface:    ["mieszanka", "żywica", "kwarc"],
      subsurface: ["cynk", "wolframit", "lateryt"],
      deep:       ["astronium"],
    },
    gateway: "powierzchnia",
    takewith: ["tlenogenerator", "mały-panel-słoneczny", "RTG"],
    notes: "Pierwsze miejsce do odwiedzenia po Sylvie. Brak atmosfery oznacza, że wiatraki nie działają. Weź panele słoneczne.",
  },

  {
    id: "calidor",
    issueId: 3,
    name: "Calidor",
    tags: ["calidor", "planety", "środek-gry", "wybuchowy-proszek", "wolframit", "co-zabrać", "lądowanie"],
    type: "planet",
    difficulty: 2,
    atmosphere: "wybuchowa",
    summary: "Gorąca, sucha planeta. Uwaga na eksplodujące rośliny.",
    resources: {
      surface:    ["mieszanka", "żywica", "organika"],
      subsurface: ["malachit", "wolframit", "hematyt"],
      gaseous:    ["wodór", "siarka"],
      deep:       ["astronium"],
    },
    gateway: "rdzeń",
    takewith: ["tlenogenerator", "modyfikator-wiertła", "dynamit"],
    notes: "Siarka stąd jest potrzebna do Wybuchowego Proszku. Uważaj na florę – wybuchnie, jeśli się zbliżysz.",
  },

  {
    id: "vesania",
    issueId: 4,
    name: "Vesania",
    tags: ["vesania", "planety", "środek-gry", "tytanit", "lit", "co-zabrać", "lądowanie"],
    type: "moon",
    orbits: "calidor",
    difficulty: 3,
    atmosphere: "toksyczna",
    summary: "Egzotyczna planeta z bardzo nierównym terenem.",
    resources: {
      surface:    ["mieszanka", "żywica", "kwarc", "organika"],
      subsurface: ["tytanit", "lit", "wolframit"],
      gaseous:    ["wodór", "azot", "argon"],
      deep:       ["astronium"],
    },
    gateway: "powierzchnia",
    takewith: ["tlenogenerator", "RTG", "średni-magazyn"],
    notes: "Teren jest usiany głębokimi kraterami. Gaz Argon jest kluczowy do produkcji Stali.",
  },

  {
    id: "novus",
    issueId: 5,
    name: "Novus",
    tags: ["novus", "planety", "środek-gry", "lit", "co-zabrać", "lądowanie"],
    type: "moon",
    orbits: "vesania",
    difficulty: 3,
    atmosphere: "słaba",
    summary: "Księżyc Vesanii. Dynamiczny teren, ogromne ilości litu.",
    resources: {
      surface:    ["żywica", "mieszanka", "organika"],
      subsurface: ["lit", "hematyt", "tytanit"],
      gaseous:    ["wodór", "metan"],
      deep:       ["astronium"],
    },
    gateway: "powierzchnia",
    takewith: ["tlenogenerator", "RTG", "wyciągarka"],
    notes: "Dużo stromych zboczy. Lit tu występuje masowo – doskonałe miejsce na fabrykę baterii.",
  },

  {
    id: "glacio",
    issueId: 6,
    name: "Glacio",
    tags: ["glacio", "planety", "późna-gra", "koniec-gry", "mroźna", "tytanit", "hematyt", "co-zabrać"],
    type: "planet",
    difficulty: 4,
    atmosphere: "mroźna",
    summary: "Lodowa planeta. Ogromne złoża Tytanitu i Hematytu.",
    resources: {
      surface:    ["mieszanka", "żywica", "kwarc"],
      subsurface: ["tytanit", "hematyt"],
      gaseous:    ["argon"],
      deep:       ["astronium"],
    },
    gateway: "rdzeń",
    takewith: ["tlenogenerator", "RTG", "wiertło-t3"],
    notes: "Wiatr wieje tu niemal stale. Idealne miejsce na turbiny wiatrowe. Argon na powierzchni bardzo ułatwia produkcję Stali.",
  },

  {
    id: "atrox",
    issueId: 7,
    name: "Atrox",
    tags: ["atrox", "planety", "koniec-gry", "toksyczna", "hydrazyna", "gaz", "co-zabrać", "lądowanie"],
    type: "planet",
    difficulty: 5,
    atmosphere: "śmiertelna",
    summary: "Najbardziej niebezpieczna planeta w układzie. Trudny teren, śmiercionośna flora.",
    resources: {
      surface:    ["organika", "kwarc"],
      subsurface: ["hematyt", "tytanit", "sfaleryt"],
      gaseous:    ["wodór", "metan", "siarka", "azot", "hel"],
      deep:       ["astronium"],
    },
    gateway: "rdzeń",
    takewith: ["tlenogenerator", "RTG", "wiertło-t3", "kanister-na-gaz"],
    notes: "Tylko tutaj zdobędziesz Hel potrzebny do Stopu Nanowęgla. Energia słoneczna i wiatrowa działają tu fatalnie.",
  },

  // ═══════════════════════════════════════════════
  // SUROWCE — ZAAWANSOWANE
  // ═══════════════════════════════════════════════

  {
    id: "steel",
    issueId: 8,
    name: "Stal",
    tags: ["surowce", "stal", "środek-gry", "zaawansowane", "laboratorium-chemiczne"],
    type: "resource",
    rarity: "crafted",
    summary: "Wytrzymały stop. Kluczowy do zaawansowanych konstrukcji.",
    recipe: { "żelazo": 1, "węgiel": 1, "argon": 1 },
    craftedIn: "laboratorium-chemiczne",
    usedFor: ["RTG", "duży-magazyn", "stop-nanowęgla"],
    notes: "Zbuduj Skraplacz Atmosferyczny na Glacio lub Vesanii, by pozyskać Argon.",
  },

  {
    id: "titanium-alloy",
    issueId: 9,
    name: "Stop Tytanu",
    tags: ["surowce", "stop-tytanu", "koniec-gry", "zaawansowane", "laboratorium-chemiczne"],
    type: "resource",
    rarity: "crafted",
    summary: "Lekki, ale niezwykle wytrzymały materiał.",
    recipe: { "tytan": 1, "grafen": 1, "azot": 1 },
    craftedIn: "laboratorium-chemiczne",
    usedFor: ["duży-łazik", "wiertło-t3", "stop-nanowęgla"],
    notes: "Azot najłatwiej zdobyć na Vesanii lub Atrox.",
  },

  {
    id: "nanocarbon-alloy",
    issueId: 10,
    name: "Stop Nanowęgla",
    tags: ["surowce", "stop-nanowęgla", "koniec-gry", "zaawansowane", "laboratorium-chemiczne", "automatyzacja"],
    type: "resource",
    rarity: "crafted",
    summary: "Szczytowe osiągnięcie inżynierii materiałowej. Niezbędne do zakończenia gry.",
    recipe: { "stal": 1, "stop-tytanu": 1, "hel": 1 },
    craftedIn: "laboratorium-chemiczne",
    usedFor: ["RTG", "duży-prom-kosmiczny"],
    notes: "Wymaga Helu, co zmusza do budowy infrastruktury gazowej na Atrox. Pełna automatyzacja tego stopu to ostateczny test inżyniera.",
  },

  {
    id: "graphene",
    issueId: 11,
    name: "Grafen",
    tags: ["surowce", "grafen", "środek-gry", "zaawansowane", "laboratorium-chemiczne"],
    type: "resource",
    rarity: "crafted",
    summary: "Wytrzymała sieć węglowa.",
    recipe: { "grafit": 1, "hydrazyna": 1 },
    craftedIn: "laboratorium-chemiczne",
    usedFor: ["stop-tytanu", "diament"],
    notes: "Pamiętaj, że Hydrazyna jest materiałem wybuchowym. Nie wrzucaj jej do Pieca Topniczego!",
  },

  {
    id: "explosive-powder",
    issueId: 12,
    name: "Wybuchowy Proszek",
    tags: ["surowce", "wybuchowy-proszek", "środek-gry", "zaawansowane", "laboratorium-chemiczne"],
    type: "resource",
    rarity: "crafted",
    summary: "Substancja niezwykle reaktywna.",
    recipe: { "węgiel": 2, "siarka": 1 },
    craftedIn: "laboratorium-chemiczne",
    usedFor: ["dynamit"],
    notes: "Zabierz Skraplacz Atmosferyczny na Calidor, żeby zdobyć Siarkę.",
  },

  {
    id: "hydrazine",
    issueId: 13,
    name: "Hydrazyna",
    tags: ["surowce", "hydrazyna", "środek-gry", "gaz", "paliwo", "laboratorium-chemiczne"],
    type: "resource",
    rarity: "crafted",
    summary: "Najwydajniejsze paliwo rakietowe i reagent chemiczny.",
    recipe: { "amon": 2, "wodór": 1 },
    craftedIn: "laboratorium-chemiczne",
    usedFor: ["silnik-na-hydrazynę", "grafen"],
    notes: "Wodór jest powszechnie dostępny w atmosferze Vesanii i Novusa.",
  },

  // ═══════════════════════════════════════════════
  // PORADNIKI
  // ═══════════════════════════════════════════════

  {
    id: "nca-factory",
    issueId: 14,
    name: "Automatyczna fabryka Stopu Nanowęgla",
    tags: ["stop-nanowęgla", "automatyzacja", "koniec-gry", "obwody-logiczne", "baza", "poradnik"],
    type: "guide",
    summary: "Jak zbudować w pełni zautomatyzowaną fabrykę krok po kroku.",
    sections: [
      {
        title: "Wymagane wyposażenie",
        content: "Laboratorium Chemiczne x3, Piec Topniczy, Skraplacze Atmosferyczne, Automatyczne Ramiona, Czujniki.",
      },
      {
        title: "Logika łańcucha",
        content: "Proces wymaga precyzyjnego transportu z różnych magazynów do Laboratoriów Chemicznych. Żelazo + Węgiel + Argon do Stali. Tytan + Grafen + Azot do Stopu Tytanu. Ostatnie ramię powinno łączyć te dwa stopy z Helem.",
      },
      {
        title: "Bezpieczeństwo",
        content: "Automatyczne Ramiona mogą się zaciąć, jeśli podadzą zły surowiec. Używaj filtrów w slotach ramienia, by przenosiły tylko określone zasoby.",
      },
    ],
    notes: "Zbuduj to na gładkim terenie. Grawitacja potrafi zepsuć niezabezpieczone sterty materiałów.",
  }
];
