# 🪐 Astroneer Wiki & Overlay (Dziennik Badawczy)

Cybernetyczny Dziennik Badawczy dedykowany grze Astroneer. Projekt hybrydowy zbudowany od podstaw: działa jako w pełni responsywna aplikacja webowa oraz jako natywna, przezroczysta nakładka (overlay) przypinana do krawędzi ekranu nad grą.

## 🚀 Główne funkcje

* **Tryb Hybrydowy (Normal / Compact):** Możliwość przeglądania bazy w klasycznym, obszernym układzie desktopowym lub w trybie kompaktowym, zoptymalizowanym pod boczne panele i ekrany dotykowe.
* **Natywny Overlay (Tauri):** Kompilacja do lekkiego programu desktopowego w środowisku Rust. Nakładka pozbawiona ramek okiennych, w pełni przezroczysta i wymuszona na wierzchu (always-on-top).
* **Zdecentralizowane Logi Pokładowe:** Wbudowany system komentarzy (Terminal Dyskusyjny) zasilany całkowicie przez publiczne REST API GitHuba. Każdy wpis w dzienniku posiada przypisane Zgłoszenie (Issue) w repozytorium, pełniąc rolę serverlessowej bazy danych dla społeczności.
* **Internacjonalizacja (i18n):** Płynne przełączanie między językiem polskim i angielskim za pomocą autorskiego silnika opartego na React Context API.
* **Dynamiczny System Tagów:** Baza wiedzy indeksowana przy pomocy tagów z precyzyjnym kodowaniem kolorystycznym (odpowiadającym fazom gry i rodzajom surowców).

## 🛠️ Stos Technologiczny

* **Frontend:** React + Vite
* **Desktop Engine:** Tauri (Rust, WebKitGTK)
* **Baza Danych (Treść):** Lokalne struktury JSON
* **Baza Danych (Komentarze):** GitHub Issues API
* **Stylizacja:** Inline CSS (mroczny, korporacyjno-cybernetyczny interfejs)

## 💻 Uruchomienie lokalne (Development)

**Wymagania:** Node.js, Git, Rust (dla nakładki Tauri).

```bash
# 1. Klonowanie repozytorium
git clone [https://github.com/itaknieogarniesz/astroneer-wiki.git](https://github.com/itaknieogarniesz/astroneer-wiki.git)
cd astroneer-wiki

# 2. Instalacja zależności środowiska
npm install

# 3. Uruchomienie wersji Web w przeglądarce
npm run dev
