import CertifiedHealthWorkersCompliance from "../components/CertifiedHealthWorkersCompliance";
import CertifiedHealthWorkersFinalCta from "../components/CertifiedHealthWorkersFinalCta";
import CertifiedHealthWorkersHero from "../components/CertifiedHealthWorkersHero";
import CertifiedHealthWorkersTools from "../components/CertifiedHealthWorkersTools";
import CertifiedHealthWorkersWho from "../components/CertifiedHealthWorkersWho";
import CertifiedHealthWorkersWorkflow from "../components/CertifiedHealthWorkersWorkflow";

const CertifiedHealthWorkers = () => {
  return (
    <main>
      <CertifiedHealthWorkersHero />
      <CertifiedHealthWorkersWho />
      <CertifiedHealthWorkersTools />
      <CertifiedHealthWorkersWorkflow />
      <CertifiedHealthWorkersCompliance />
      <CertifiedHealthWorkersFinalCta />
    </main>
  );
};

export default CertifiedHealthWorkers;
