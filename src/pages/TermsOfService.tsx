import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, AlertTriangle, CheckCircle, XCircle, Scale, Phone } from "lucide-react";

const TermsOfService = () => {
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
              <Scale className="h-10 w-10 inline-block mr-3 text-primary" />
              Termini di Servizio
            </h1>
            <p className="text-muted-foreground text-lg">
              Condizioni generali per l'utilizzo del sito e dei servizi di personal training
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
            </p>
          </div>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {/* Accettazione */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                1. Accettazione dei Termini
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Utilizzando questo sito web e/o richiedendo i servizi di personal training offerti da Marco Del Moro,
                accetti automaticamente questi Termini di Servizio. Se non accetti questi termini, ti preghiamo di non utilizzare il sito.
              </p>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="font-medium text-sm">
                  ⚠️ <strong>Importante:</strong> Questi termini si applicano sia al sito web che ai servizi di personal training offerti.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Servizi Offerti */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                2. Servizi Offerti
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Marco Del Moro offre:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Consulenze fitness personalizzate</strong> - Valutazione obiettivi e piano d'azione</li>
                  <li><strong>Personal Training</strong> - Sessioni individuali presso FM Fitness, Piombino</li>
                  <li><strong>Small Group Training</strong> - Allenamenti di gruppo (max 2 persone)</li>
                  <li><strong>Online Coaching</strong> - Supporto remoto con app dedicata</li>
                  <li><strong>Piani nutrizionali personalizzati</strong> - Orientamento alimentare natural</li>
                  <li><strong>Supporto e monitoraggio</strong> - Follow-up mensili e assistenza continua</li>
                </ul>
              </div>
              <div className="bg-secondary/10 p-4 rounded-lg">
                <p className="text-sm">
                  <strong>Specializzazione:</strong> Natural Bodybuilding, ricomposizione corporea, metodo RECOMP 365.
                  Tutti i servizi sono orientati all'allenamento e alla nutrizione naturale, senza uso di sostanze dopanti.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Responsabilità Cliente */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                3. Responsabilità del Cliente
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Come cliente, ti impegni a:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Fornire informazioni accurate</strong> sulla tua condizione fisica, stato di salute e obiettivi</li>
                  <li><strong>Comunicare tempestivamente</strong> eventuali problemi di salute, infortuni o limitazioni</li>
                  <li><strong>Seguire le indicazioni</strong> del trainer con responsabilità e buonsenso</li>
                  <li><strong>Rispettare gli orari</strong> degli appuntamenti concordati</li>
                  <li><strong>Comunicare disdette</strong> con almeno 24 ore di anticipo</li>
                  <li><strong>Mantenere un comportamento rispettoso</strong> in palestra e nelle comunicazioni</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">⚠️ Importante - Salute e Sicurezza:</h4>
                <p className="text-sm text-red-700">
                  È tua responsabilità consultare un medico prima di iniziare qualsiasi programma di allenamento,
                  specialmente se hai condizioni mediche preesistenti. Il personal trainer non è un medico e non fornisce consigli medici.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Limitazioni Responsabilità */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <XCircle className="h-5 w-5 text-primary" />
                4. Limitazioni di Responsabilità
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Marco Del Moro non è responsabile per:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Infortuni derivanti da esecuzione incorretta degli esercizi</li>
                  <li>Problemi di salute non comunicati preventivamente</li>
                  <li>Mancato raggiungimento di obiettivi dovuto a non aderenza al programma</li>
                  <li>Problemi tecnici del sito web o delle app utilizzate</li>
                  <li>Interruzioni del servizio dovute a cause di forza maggiore</li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                <p className="text-sm text-amber-800">
                  <strong>Disclaimer:</strong> I risultati del training possono variare da persona a persona in base a diversi fattori
                  (genetica, aderenza al programma, stile di vita, ecc.). Non sono garantiti risultati specifici.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Pagamenti e Cancellazioni */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                5. Pagamenti e Cancellazioni
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">💳 Pagamenti</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Consultazione iniziale: <strong>Gratuita</strong></li>
                    <li>• Pagamenti: Contanti, bonifico, carte</li>
                    <li>• Pacchetti: Pagamento anticipato</li>
                    <li>• Fatturazione: Regolare ricevuta/fattura</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">📅 Cancellazioni</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Disdetta: 24 ore di anticipo</li>
                    <li>• Disdetta tardiva: Sessione persa</li>
                    <li>• Emergenze: Valutazione caso per caso</li>
                    <li>• Rimborsi: Solo per cause gravi documentate</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy e Dati */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                6. Privacy e Trattamento Dati
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Il trattamento dei tuoi dati personali è disciplinato dalla nostra
                <a href="/privacy-policy" className="text-primary hover:underline font-medium mx-1">Privacy Policy</a>
                che costituisce parte integrante di questi Termini di Servizio.
              </p>
              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Dati trattati per i servizi:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Dati anagrafici e di contatto</li>
                  <li>• Informazioni su condizione fisica e obiettivi</li>
                  <li>• Progressi e risultati del training</li>
                  <li>• Comunicazioni e feedback</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Modifiche ai Termini */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                7. Modifiche ai Termini
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Marco Del Moro si riserva il diritto di modificare questi Termini di Servizio in qualsiasi momento.
                Le modifiche saranno effettive dalla data di pubblicazione sul sito web.
              </p>
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                <p className="text-sm text-amber-800">
                  <strong>Notifica modifiche:</strong> Ti informeremo delle modifiche sostanziali via email o
                  tramite avviso sul sito. L'uso continuato dei servizi costituisce accettazione dei nuovi termini.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Legge Applicabile */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                8. Legge Applicabile e Foro Competente
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Questi Termini di Servizio sono disciplinati dalla legge italiana.
                Per qualsiasi controversia, il foro competente è quello di <strong>Livorno</strong>.
              </p>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-sm">
                  Prima di ricorrere alle vie legali, ci impegniamo a cercare una soluzione amichevole
                  attraverso il dialogo diretto e, se necessario, la mediazione.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contatti */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                9. Contatti
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-primary/5 p-4 rounded-lg">
                <p className="font-medium mb-2">Per domande su questi Termini di Servizio:</p>
                <div className="space-y-1 text-sm">
                  <p>📧 Email: <a href="mailto:marcodelmoropt@gmail.com" className="text-primary hover:underline">marcodelmoropt@gmail.com</a></p>
                  <p>📱 Telefono: <a href="tel:+393479309018" className="text-primary hover:underline">+39 347 930 9018</a></p>
                  <p>📍 Sede: FM Fitness, Viale Giovanni Amendola 12, 57025 Piombino (LI)</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Tempo di risposta: Entro 2 giorni lavorativi per email, immediato per telefono negli orari di apertura.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Questi termini sono in vigore dal {new Date().toLocaleDateString('it-IT')} e sostituiscono tutte le versioni precedenti.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
