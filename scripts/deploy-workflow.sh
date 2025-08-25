#!/bin/bash

# Script per facilitare il workflow di deploy multi-ambiente
# Usage: ./scripts/deploy-workflow.sh [develop|test|prod]

set -e

ENVIRONMENT=${1:-help}

show_help() {
    echo "🚀 Natural Path Coach - Deploy Workflow"
    echo ""
    echo "Usage: ./scripts/deploy-workflow.sh [ENVIRONMENT]"
    echo ""
    echo "Environments:"
    echo "  develop  - Push to develop branch (build e test automatici)"
    echo "  test     - Merge develop->main e deploy su Vercel"
    echo "  prod     - Merge main->prod e deploy in produzione"
    echo "  help     - Mostra questo help"
    echo ""
    echo "Workflow completo:"
    echo "  1. develop: Sviluppo e test"
    echo "  2. test:    Test su https://natural-path-coach.vercel.app"
    echo "  3. prod:    Produzione su https://marco-del-moro-personal-trainer.it"
}

check_git_status() {
    if [ -n "$(git status --porcelain)" ]; then
        echo "❌ Ci sono modifiche non committate. Committa prima di procedere."
        git status --short
        exit 1
    fi
}

deploy_develop() {
    echo "🔧 Deploy su ambiente DEVELOP"
    echo ""

    check_git_status

    echo "📦 Pushing to develop branch..."
    git checkout develop
    git push origin develop

    echo "✅ Push completato!"
    echo "🔗 Controlla la build su: https://github.com/mattiafilosa22/natural-path-coach/actions"
}

deploy_test() {
    echo "🧪 Deploy su ambiente TEST"
    echo ""

    check_git_status

    echo "🔄 Merging develop -> main..."
    git checkout main
    git pull origin main
    git merge develop

    echo "📦 Pushing to main branch..."
    git push origin main

    echo "✅ Deploy in corso!"
    echo "🔗 Sito test: https://natural-path-coach.vercel.app"
    echo "🔗 Controlla il deploy su: https://vercel.com/dashboard"
}

deploy_prod() {
    echo "🚀 Deploy su ambiente PRODUZIONE"
    echo ""

    check_git_status

    echo "⚠️  Stai per deployare in PRODUZIONE!"
    read -p "Sei sicuro? (y/N) " -n 1 -r
    echo

    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Deploy annullato"
        exit 1
    fi

    echo "🔄 Merging main -> prod..."
    git checkout prod
    git pull origin prod
    git merge main

    echo "📦 Pushing to prod branch..."
    git push origin prod

    echo "✅ Deploy in corso!"
    echo "🔗 Sito produzione: https://marco-del-moro-personal-trainer.it"
    echo "🔗 Controlla il deploy su: https://github.com/mattiafilosa22/natural-path-coach/actions"
}

case $ENVIRONMENT in
    develop)
        deploy_develop
        ;;
    test)
        deploy_test
        ;;
    prod)
        deploy_prod
        ;;
    help|*)
        show_help
        ;;
esac
