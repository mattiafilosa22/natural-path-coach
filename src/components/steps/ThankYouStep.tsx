import { SecondaryButton } from "@/components/SecondaryButton";
import { ContactForm } from "@/components/ContactForm";

export const ThankYouStep = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8 text-center">
      <div className="w-full max-w-3xl space-y-8">
        <div className="text-6xl mb-8">🎉</div>

        {/* <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Grazie!
        </h1>

        <div className="space-y-4">
          <p className="text-lg text-gray-600">
            La tua <span className="font-bold text-fitness-orange">consulenza è stata prenotata</span> con successo.
          </p>
          <p className="text-base text-gray-600">
            Riceverai una <span className="font-bold text-fitness-orange">email di conferma</span> con tutti i dettagli e il link per il tuo <span className="font-bold text-fitness-orange">programma personalizzato</span>.
          </p>
        </div>

        <div className="bg-fitness-orange/10 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-fitness-orange mb-2">
            Cosa succede ora?
          </h3>
          <div className="space-y-2 text-gray-700">
            <p>📧 Controlla la tua <span className="font-bold">email</span> per la conferma</p>
            <p>📅 Prepara le tue <span className="font-bold">domande</span> per la consulenza</p>
            <p>💪 Preparati a iniziare la tua <span className="font-bold text-fitness-orange">trasformazione</span>!</p>
          </div>
        </div>

        <p className="text-sm text-gray-500">
          Non vedi l'email? Controlla anche la cartella spam.
        </p> */}

        <div className="text-left">
          <ContactForm successRedirectTo={undefined} />
        </div>

        <div className="flex justify-center mt-8">
          <SecondaryButton
            onClick={() => window.location.href = "/"}
            variant="light"
            size="lg"
          >
            🏠 Torna alla Homepage
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};