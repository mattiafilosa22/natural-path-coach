import ComingSoon from "@/components/ComingSoon";
import SEOMeta from "@/components/SEOMeta";
import { SITE_CONFIG } from "@/config/site";

const ComingSoonPage = () => {
  return (
    <>
      <SEOMeta
        title="Coming Soon - Marco Del Moro Personal Trainer"
        description="Il sito di Marco Del Moro Personal Trainer è in fase di sviluppo. Presto disponibile il metodo naturale per la trasformazione corporea nel natural bodybuilding."
        keywords="marco del moro, personal trainer, natural bodybuilding, coming soon, piombino"
        canonicalUrl={SITE_CONFIG.url}
        noindex={true}
      />
      <main role="main">
        <ComingSoon />
      </main>
    </>
  );
};

export default ComingSoonPage;
