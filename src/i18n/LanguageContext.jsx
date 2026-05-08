import { createContext, useState, useContext, useEffect } from 'react';
import pl from './pl.json';
import en from './en.json';

const dictionaries = { pl, en };
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Próba odczytu zapisanego języka z pamięci przeglądarki
  const [lang, setLang] = useState(() => localStorage.getItem("wiki_lang") || "pl");

  // Zapis do localStorage przy każdej zmianie
  useEffect(() => {
    localStorage.setItem("wiki_lang", lang);
  }, [lang]);

  // Funkcja zwracająca przetłumaczony string
  const t = (key) => dictionaries[lang][key] || key;

  const toggleLang = () => setLang(prev => prev === "pl" ? "en" : "pl");

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Wygodny hook do używania w innych komponentach
export const useLanguage = () => useContext(LanguageContext);
