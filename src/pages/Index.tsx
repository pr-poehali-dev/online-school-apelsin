import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Teachers from "@/components/Teachers";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Courses />
      <Teachers />
      <Contact />
    </div>
  );
};

export default Index;
