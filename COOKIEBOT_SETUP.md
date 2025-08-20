# Configurazione Cookiebot - Natural Path Coach

## Setup Cookiebot

### 1. Creazione Account Cookiebot

1. Vai su [Cookiebot.com](https://www.cookiebot.com/)
2. Crea un account gratuito (fino a 100 sottopagine)
3. Aggiungi il tuo dominio del sito web

### 2. Configurazione Dominio

1. Nel dashboard Cookiebot, vai su "Domains"
2. Clicca "Add domain"
3. Inserisci il dominio del sito (es. `natural-path-coach.vercel.app`)
4. Seleziona la lingua italiana
5. Copia l'ID che viene generato

### 3. Configurazione nel Progetto

#### Aggiorna l'ID Cookiebot

Nel file `index.html`, sostituire `YOUR_COOKIEBOT_ID` con l'ID reale:

```html
<script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="IL_TUO_ID_REALE" data-blockingmode="auto" type="text/javascript"></script>
```

#### Configurazione Environment Variables (opzionale)

Crea un file `.env` e aggiungi:
```
VITE_COOKIEBOT_ID=IL_TUO_ID_REALE
```

### 4. Configurazione Categorie Cookie

Nel dashboard Cookiebot:

1. **Necessary** (sempre attivi):
   - Cookie di sessione del sito
   - Cookie di sicurezza

2. **Preferences** (preferenze):
   - Impostazioni lingua
   - Impostazioni tema
   - Preferenze utente

3. **Statistics** (statistiche):
   - Google Analytics (quando implementato)
   - Metriche di performance

4. **Marketing** (marketing):
   - Facebook Pixel (quando implementato)
   - Google Ads tracking
   - Altri pixel di retargeting

### 5. Personalizzazione Banner

Nel dashboard Cookiebot, sezione "Cookie banner":

#### Testi Consigliati (Italiano):

**Headline**: "Questo sito utilizza i cookie"

**Body text**: "Utilizziamo i cookie per migliorare la tua esperienza di navigazione, personalizzare contenuti e pubblicità, e analizzare il nostro traffico. Cliccando su 'Accetta tutti' acconsenti all'uso di tutti i cookie."

**Accept button**: "Accetta tutti"
**Decline button**: "Rifiuta"
**Settings button**: "Impostazioni cookie"

#### Colori Brand:
- **Primary color**: `#e67e22` (arancione del sito)
- **Text color**: `#2c3e50` (grigio scuro)
- **Background**: `#ffffff` (bianco)

### 6. Test e Verifica

1. Carica il sito con Cookiebot configurato
2. Verifica che il banner appaia correttamente
3. Testa le diverse opzioni (Accetta, Rifiuta, Impostazioni)
4. Controlla che i cookie vengano gestiti correttamente

### 7. Componenti Implementati

Il progetto include:

- `useCookiebot` hook per gestire lo stato del consenso
- `CookiebotManager` componente wrapper
- `CookieStatus` componente per debug (mostra stato consensi)
- Link "Cookie Settings" nel footer per riaprire il banner

### 8. Aggiunta Futuri Servizi

Quando aggiungerai Google Analytics o Facebook Pixel:

1. Avvolgi gli script con `data-cookieconsent`:

```html
<!-- Google Analytics -->
<script type="text/plain" data-cookieconsent="statistics">
  // codice GA
</script>

<!-- Facebook Pixel -->
<script type="text/plain" data-cookieconsent="marketing">
  // codice FB Pixel
</script>
```

2. I servizi verranno automaticamente abilitati/disabilitati basandosi sul consenso.

### 9. Note Legali

- Cookiebot genera automaticamente la Cookie Policy
- Dovrai ancora creare Privacy Policy e Termini di Servizio
- Il banner rispetta automaticamente GDPR e altre normative

### 10. Monitoraggio

Nel dashboard Cookiebot puoi vedere:
- Statistiche dei consensi
- Report di compliance
- Cookie scansionati automaticamente
- Log delle preferenze utenti
