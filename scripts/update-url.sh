#!/bin/bash

# Script per aggiornare l'URL del sito in tutti i file necessari
# Uso: ./update-url.sh "https://tuo-nuovo-dominio.com"

# Colori per output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Verifica che sia stato fornito un URL
if [ $# -eq 0 ]; then
    echo -e "${RED}❌ Errore: Devi fornire il nuovo URL${NC}"
    echo "Uso: $0 \"https://tuo-nuovo-dominio.com\""
    exit 1
fi

NEW_URL="$1"
OLD_URL="https://natural-path-coach.vercel.app"

echo -e "${YELLOW}🔄 Aggiornamento URL da:${NC} $OLD_URL"
echo -e "${YELLOW}🔄 Al nuovo URL:${NC} $NEW_URL"
echo ""

# Funzione per aggiornare un file
update_file() {
    local file="$1"
    if [ -f "$file" ]; then
        echo -e "${YELLOW}📝 Aggiornando:${NC} $file"
        sed -i.bak "s|$OLD_URL|$NEW_URL|g" "$file"
        echo -e "${GREEN}✅ Completato:${NC} $file"
    else
        echo -e "${RED}❌ File non trovato:${NC} $file"
    fi
}

# Lista dei file da aggiornare
echo -e "${YELLOW}🚀 Inizio aggiornamento file...${NC}"
echo ""

# 1. index.html
update_file "index.html"

# 2. sitemap.xml
update_file "public/sitemap.xml"

# 3. robots.txt
update_file "public/robots.txt"

# 4. Configurazione centralizzata
update_file "src/config/site.ts"

# 5. Pagina Index con structured data
update_file "src/pages/Index.tsx"

# 6. Componente SEOMeta (se contiene URL hardcoded)
update_file "src/components/SEOMeta.tsx"

# 7. Altri file che potrebbero contenere l'URL
update_file "src/components/Footer.tsx"
update_file "README.md"
update_file "package.json"

echo ""
echo -e "${GREEN}🎉 Aggiornamento completato!${NC}"
echo ""
echo -e "${YELLOW}📋 Prossimi passi:${NC}"
echo "1. Verifica i file modificati"
echo "2. Cambia allowIndexing: true in src/config/site.ts"
echo "3. Cambia isProduction: true in src/config/site.ts"
echo "4. Testa il sito in locale"
echo "5. Fai commit delle modifiche"
echo "6. Deploy sul nuovo dominio"
echo "7. Aggiorna Google Search Console"
echo "8. Configura redirect 301 dal vecchio URL"
echo ""
echo -e "${YELLOW}📁 File di backup creati con estensione .bak${NC}"
echo -e "${YELLOW}🔍 Per vedere le modifiche: git diff${NC}"
