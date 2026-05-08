#!/bin/bash

# Upewnij się, że jesteś w folderze swojego lokalnego repozytorium (astroneer-wiki)!
echo "Inicjowanie protokołu tworzenia zgłoszeń..."

TITLES=(
  "Komentarze: Sylva"
  "Komentarze: Desolo"
  "Komentarze: Calidor"
  "Komentarze: Vesania"
  "Komentarze: Novus"
  "Komentarze: Glacio"
  "Komentarze: Atrox"
  "Komentarze: Stal"
  "Komentarze: Stop Tytanu"
  "Komentarze: Stop Nanowęgla"
  "Komentarze: Grafen"
  "Komentarze: Wybuchowy Proszek"
  "Komentarze: Hydrazyna"
  "Komentarze: Automatyczna fabryka Stopu Nanowęgla"
)

for i in "${!TITLES[@]}"; do
  ISSUE_NUM=$((i+1))
  TITLE="${TITLES[$i]}"
  
  echo "Tworzenie zgłoszenia $ISSUE_NUM: $TITLE"
  gh issue create --title "$TITLE" --body "Cybernetyczny terminal dyskusyjny dla wpisu: **$TITLE**. Badacze mogą zostawiać tu swoje logi i obserwacje."
  
  # Zabezpieczenie przed rate limitem publicznego API GitHuba
  sleep 2
done

echo "Zakończono. Wszystkie logi zostały utworzone w sieci głównej."
