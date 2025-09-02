import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Shield, Database, Clock, UserCheck, FileText } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/10 to-background">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Torna indietro
          </Button>

          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              <Shield className="h-10 w-10 inline-block mr-3 text-primary" />
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 679/2016 (GDPR)
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
            </p>
          </div>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {/* Titolare del Trattamento */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-primary" />
                1. Titolare del Trattamento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p><strong>Marco Del Moro</strong></p>
                <p>Personal Trainer Natural Bodybuilding</p>
                <p>Email: <a href="mailto:marcodelmoropt@gmail.com" className="text-primary hover:underline">marcodelmoropt@gmail.com</a></p>
                <p>Telefono: <a href="tel:+393479309018" className="text-primary hover:underline">+39 347 930 9018</a></p>
                <p>Sede: FM Fitness, Viale Giovanni Amendola 12, 57025 Piombino (LI)</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Per qualsiasi questione relativa al trattamento dei tuoi dati personali, puoi contattarmi direttamente agli indirizzi sopra indicati.
              </p>
            </CardContent>
          </Card>

          {/* Dati Raccolti */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                2. Dati Personali Raccolti
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Attraverso il modulo di contatto raccogliamo:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Nome completo</strong> - per identificarti e personalizzare la comunicazione</li>
                  <li><strong>Indirizzo email</strong> - per ricontattarti e inviarti informazioni</li>
                  <li><strong>Numero di telefono</strong> (facoltativo) - per comunicazioni più dirette</li>
                  <li><strong>Messaggio</strong> - per comprendere le tue esigenze e obiettivi</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Dati tecnici automatici:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Indirizzo IP (per sicurezza e prevenzione spam)</li>
                  <li>Informazioni del browser (per ottimizzare l'esperienza utente)</li>
                  <li>Cookie tecnici necessari al funzionamento del sito</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Finalità e Base Giuridica */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                3. Finalità del Trattamento e Base Giuridica
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">I tuoi dati vengono trattati per:</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>Rispondere alle tue richieste di consulenza</strong></p>
                    <p className="text-sm text-muted-foreground">Base giuridica: Consenso (art. 6, comma 1, lett. a GDPR)</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <p><strong>Fornirti informazioni sui servizi di personal training</strong></p>
                    <p className="text-sm text-muted-foreground">Base giuridica: Consenso (art. 6, comma 1, lett. a GDPR)</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <p><strong>Gestione del rapporto contrattuale (se diventi cliente)</strong></p>
                    <p className="text-sm text-muted-foreground">Base giuridica: Esecuzione del contratto (art. 6, comma 1, lett. b GDPR)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conservazione */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                4. Tempi di Conservazione
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Richieste di contatto</h4>
                  <p className="text-sm">I dati vengono conservati per <strong>2 anni</strong> dalla richiesta, per poter gestire eventuali follow-up.</p>
                </div>
                <div className="bg-secondary/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Clienti attivi</h4>
                  <p className="text-sm">I dati vengono conservati per tutta la durata del rapporto + <strong>10 anni</strong> per obblighi fiscali.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Diritti dell'Interessato */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                5. I Tuoi Diritti
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Secondo il GDPR, hai diritto a:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-medium">Accesso ai dati</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-medium">Rettifica</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-medium">Cancellazione</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-medium">Limitazione del trattamento</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-medium">Portabilità dei dati</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-medium">Revoca del consenso</span>
                  </div>
                </div>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="font-medium mb-2">Come esercitare i tuoi diritti:</p>
                <p className="text-sm">
                  Invia una email a <a href="mailto:marcodelmoropt@gmail.com" className="text-primary hover:underline font-medium">marcodelmoropt@gmail.com</a>
                  specificando la tua richiesta. Ti risponderò entro 30 giorni.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Sicurezza */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                6. Sicurezza dei Dati
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Per proteggere i tuoi dati personali, adotto le seguenti misure:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Trasmissione crittografata tramite protocollo HTTPS</li>
                <li>Accesso limitato ai dati solo al personale autorizzato</li>
                <li>Backup regolari con protezione crittografica</li>
                <li>Monitoraggio costante per prevenire accessi non autorizzati</li>
              </ul>
            </CardContent>
          </Card>

          {/* Cookie */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                7. Cookie e Tecnologie Simili
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Il sito utilizza cookie e tecnologie simili per migliorare l'esperienza utente:</p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">🔧 Cookie Tecnici Necessari</h4>
                  <p className="text-sm text-green-700">
                    Essenziali per il funzionamento del sito. Non richiedono consenso secondo la normativa.
                  </p>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">⚙️ Cookie di Preferenze</h4>
                  <p className="text-sm text-blue-700">
                    Per ricordare le tue scelte e personalizzare l'esperienza. Richiedono il tuo consenso.
                  </p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">📊 Cookie Statistici</h4>
                  <p className="text-sm text-yellow-700">
                    Per analizzare l'uso del sito e migliorarne le performance. Richiedono il tuo consenso.
                  </p>
                </div>
                <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">🎯 Cookie di Marketing</h4>
                  <p className="text-sm text-purple-700">
                    Per mostrare contenuti personalizzati e misurare l'efficacia delle campagne. Richiedono consenso.
                  </p>
                </div>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🍪 Gestione Cookie Dettagliata</h4>
                <p className="text-sm mb-2">
                  Per un elenco completo e dettagliato di tutti i cookie utilizzati, consulta la nostra:
                </p>
                <a
                  href="/cookie-declaration/"
                  className="inline-flex items-center text-primary hover:underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📋 Cookie Declaration (Dichiarazione Cookie)
                </a>
                <p className="text-xs text-muted-foreground mt-2">
                  La dichiarazione viene aggiornata automaticamente ogni volta che vengono rilevati nuovi cookie sul sito.
                </p>
              </div>

              <div className="bg-secondary/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">⚙️ Come gestire le tue preferenze:</h4>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Banner cookie</strong> - Appare al primo accesso, puoi scegliere cosa accettare</li>
                  <li>• <strong>Impostazioni browser</strong> - Puoi bloccare tutti i cookie nelle impostazioni</li>
                  <li>• <strong>Ritira consenso</strong> - Puoi cambiare idea in qualsiasi momento</li>
                </ul>
              </div>
            </CardContent>
          </Card>          {/* Contatti */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                8. Contatti per la Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-primary/5 p-4 rounded-lg">
                <p className="font-medium mb-2">Per qualsiasi domanda sulla privacy o sui tuoi dati:</p>
                <div className="space-y-1 text-sm">
                  <p>📧 Email: <a href="mailto:marcodelmoropt@gmail.com" className="text-primary hover:underline">marcodelmoropt@gmail.com</a></p>
                  <p>📱 Telefono: <a href="tel:+393479309018" className="text-primary hover:underline">+39 347 930 9018</a></p>
                  <p>📍 Sede: FM Fitness, Viale Giovanni Amendola 12, 57025 Piombino (LI)</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Hai anche il diritto di presentare reclamo al Garante per la Protezione dei Dati Personali:
                <a href="https://www.gpdp.it" className="text-primary hover:underline ml-1">www.gpdp.it</a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
