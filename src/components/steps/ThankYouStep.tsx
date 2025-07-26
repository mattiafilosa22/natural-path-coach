export const ThankYouStep = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8 text-center">
      <div className="max-w-2xl space-y-8">
        <div className="text-6xl mb-8">🎉</div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Grazie!
        </h1>
        
        <div className="space-y-4">
          <p className="text-xl text-gray-600">
            La tua consulenza è stata prenotata con successo.
          </p>
          <p className="text-lg text-gray-600">
            Riceverai una email di conferma con tutti i dettagli e il link per il tuo programma personalizzato.
          </p>
        </div>

        <div className="bg-fitness-orange/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-fitness-orange mb-2">
            Cosa succede ora?
          </h3>
          <div className="space-y-2 text-gray-700">
            <p>📧 Controlla la tua email per la conferma</p>
            <p>📅 Prepara le tue domande per la consulenza</p>
            <p>💪 Preparati a iniziare la tua trasformazione!</p>
          </div>
        </div>

        <p className="text-sm text-gray-500">
          Non vedi l'email? Controlla anche la cartella spam.
        </p>
      </div>
    </div>
  );
};