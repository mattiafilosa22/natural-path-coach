#!/bin/bash

# Script di deploy per produzione
# Assicurati di avere configurato:
# - FTP/SFTP credentials
# - O accesso SSH al server

set -e

echo "🚀 Inizio deploy in produzione..."

# 1. Build del progetto per produzione
echo "📦 Building del progetto..."
bun run build:prod

# 2. Test che il build sia andato a buon fine
if [ ! -d "dist" ]; then
  echo "❌ Errore: cartella dist non trovata!"
  exit 1
fi

# 3. Opzioni di deploy (scegli una):

# OPZIONE A: Deploy via rsync/SSH
# rsync -avz --delete dist/ user@server:/path/to/website/

# OPZIONE B: Deploy via FTP (installa lftp: sudo apt install lftp)
# lftp -c "
#   set ftp:ssl-allow no;
#   open -u $FTP_USER,$FTP_PASS $FTP_HOST;
#   lcd dist;
#   cd public_html;
#   mirror --reverse --delete --verbose
# "

# OPZIONE C: Deploy manuale (crea zip)
echo "📦 Creando archivio per deploy manuale..."
cd dist
zip -r ../deploy-$(date +%Y%m%d-%H%M%S).zip .
cd ..
echo "✅ Archivio creato: deploy-$(date +%Y%m%d-%H%M%S).zip"
echo "   Carica questo file sul tuo server e estrailo nella root del sito"

echo "✅ Deploy completato!"
