import Hero from "@/components/prep-school/Hero";
import Program from "@/components/prep-school/Program";
import AgeGroups from "@/components/prep-school/AgeGroups";
import Methods from "@/components/prep-school/Methods";
import Schedule from "@/components/prep-school/Schedule";
import Teachers from "@/components/prep-school/Teachers";
import Registration from "@/components/prep-school/Registration";

const PrepSchool = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Program />
      <AgeGroups />
      <Methods />
      <Schedule />
      <Teachers />
      <Registration />
    </div>
  );
};

export default PrepSchool;
