import ClassifiedStaffCompliance from "../components/ClassifiedStaffCompliance";
import ClassifiedStaffFinalCta from "../components/ClassifiedStaffFinalCta";
import ClassifiedStaffHero from "../components/ClassifiedStaffHero";
import ClassifiedStaffTools from "../components/ClassifiedStaffTools";
import ClassifiedStaffWho from "../components/ClassifiedStaffWho";
import ClassifiedStaffWorkflow from "../components/ClassifiedStaffWorkflow";

const ClassifiedStaff = () => {
  return (
    <main>
      <ClassifiedStaffHero />
      <ClassifiedStaffWho />
      <ClassifiedStaffTools />
      <ClassifiedStaffWorkflow />
      <ClassifiedStaffCompliance />
      <ClassifiedStaffFinalCta />
    </main>
  );
};

export default ClassifiedStaff;
