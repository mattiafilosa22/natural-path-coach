#!/bin/bash

# Versione semplificata per gestire Vercel senza installazione globale
# Usage: ./scripts/vercel-simple.sh

set -e

echo "🧹 Vercel Environment Management (Simple Version)"
echo "================================================"
echo ""

# Installa vercel localmente se non presente
if [ ! -d "node_modules/vercel" ]; then
    echo "📦 Installazione Vercel CLI locale..."
    npm install vercel
fi

echo "🔐 Login a Vercel..."
npx vercel login

echo ""
echo "📋 Lista progetti:"
npx vercel projects ls

echo ""
echo "🔍 Stato progetto natural-path-coach:"
npx vercel projects inspect natural-path-coach 2>/dev/null || echo "❌ Progetto non trovato o non accessibile"

echo ""
echo "📊 Deployment recenti:"
npx vercel deployments ls 2>/dev/null || echo "❌ Nessun deployment trovato"

echo ""
echo "🎯 Comandi utili:"
echo ""
echo "Per configurare variabili ambiente:"
echo "  npx vercel env add VITE_APP_ENV"
echo "  npx vercel env add VITE_APP_URL"
echo ""
echo "Per eliminare deployment:"
echo "  npx vercel remove [deployment-url]"
echo ""
echo "Per vedere domini:"
echo "  npx vercel domains ls"
echo ""
echo "📱 Dashboard: https://vercel.com/dashboard"
echo ""
echo "✅ Controllo completato!"
