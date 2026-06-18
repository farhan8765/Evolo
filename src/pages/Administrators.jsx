import AdministratorAuditPath from "../components/AdministratorAuditPath";
import AdministratorCompliance from "../components/AdministratorCompliance";
import AdministratorFinalCta from "../components/AdministratorFinalCta";
import AdministratorHero from "../components/AdministratorHero";
import AdministratorOversight from "../components/AdministratorOversight";
import AdministratorWho from "../components/AdministratorWho";
import AdministratorWorkflow from "../components/AdministratorWorkflow";


const Administrators = () => {
  return (
    <main>
      <AdministratorHero />
      <AdministratorWho />
      <AdministratorOversight />
      <AdministratorWorkflow />
      <AdministratorAuditPath />
      <AdministratorCompliance />
      <AdministratorFinalCta />
      
    </main>
  );
};

export default Administrators;
