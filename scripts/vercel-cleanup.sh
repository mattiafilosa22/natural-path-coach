#!/bin/bash

# Script per gestire e pulire gli ambienti Vercel duplicati
# Usage: ./scripts/vercel-cleanup.sh

set -e

echo "🧹 Vercel Environment Cleanup Script"
echo "===================================="
echo ""

# Controlla se vercel CLI è installato
if ! command -v vercel &> /dev/null; then
    echo "📦 Vercel CLI non trovato. Installazione locale..."
    npm install vercel
    # Usa la versione locale di vercel
    VERCEL_CMD="npx vercel"
else
    VERCEL_CMD="vercel"
fi

echo "🔐 Login a Vercel (se necessario)..."
$VERCEL_CMD login

echo ""
echo "📋 Lista progetti Vercel:"
$VERCEL_CMD projects ls

echo ""
echo "🔍 Informazioni progetto natural-path-coach:"
$VERCEL_CMD projects inspect natural-path-coach

echo ""
echo "📊 Deployment attivi:"
$VERCEL_CMD deployments ls natural-path-coach

echo ""
echo "⚙️  Configurazione domains:"
$VERCEL_CMD domains ls

echo ""
echo "🎯 Azioni Raccomandate:"
echo ""
echo "1. Elimina ambienti duplicati:"
echo "   - natural-path-coach-hxm6 (se presente)"
echo "   - Production generico (se presente)"
echo ""
echo "2. Mantieni solo:"
echo "   - natural-path-coach.vercel.app (production)"
echo "   - *.vercel.app (preview per PR)"
echo ""
echo "3. Configura production branch:"
echo "   $VERCEL_CMD --prod --confirm"
echo ""
echo "4. Imposta variabili ambiente:"
echo "   $VERCEL_CMD env add VITE_APP_ENV"
echo "   $VERCEL_CMD env add VITE_APP_URL"
echo "   # etc..."
echo ""

# Opzioni interattive
echo "🚀 Vuoi configurare automaticamente? (y/N)"
read -p "> " -n 1 -r
echo

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo ""
    echo "🔧 Configurazione automatica..."

    # Imposta le variabili di ambiente
    echo "📝 Impostando variabili di ambiente..."
    $VERCEL_CMD env add VITE_APP_ENV production natural-path-coach --force || true
    $VERCEL_CMD env add VITE_APP_URL https://natural-path-coach.vercel.app natural-path-coach --force || true
    $VERCEL_CMD env add VITE_APP_NAME "Marco Del Moro PT (Test)" natural-path-coach --force || true
    $VERCEL_CMD env add VITE_ALLOW_INDEXING false natural-path-coach --force || true
    $VERCEL_CMD env add VITE_IS_PRODUCTION false natural-path-coach --force || true

    echo "✅ Configurazione completata!"
    echo ""
    echo "🔗 Verifica su: https://vercel.com/dashboard"
    echo "🧪 Test su: https://natural-path-coach.vercel.app"
else
    echo "❌ Configurazione automatica annullata"
    echo "💡 Usa la guida manuale in VERCEL_CLEANUP_GUIDE.md"
fi

echo ""
echo "✅ Script completato!"
