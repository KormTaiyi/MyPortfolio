import HeadCom from "../src/components/HeadCom"
import HeroSectionCom from "../src/components/HeroSectionCom"
import TechnologyCom from "../src/components/TechnologyCom"
import AboutCom from "../src/components/AboutCom"
import ProjectCom from "../src/components/ProjectCom"
import FootCom from "../src/components/FootCom"
import ContactCom from "../src/components/ContactCom"

const App = () => {
  return (
    <main className="bg-[#2A2D3A] w-full">
      <section className="m-auto md:w-[90%] sm:w-[95%] w-full">
        <HeadCom/>
        <hr className="text-gray-600"/>
        <HeroSectionCom/>
        <TechnologyCom/>
        <AboutCom/>
        <ProjectCom />
        <ContactCom/>
        <hr className="text-gray-600"/>
        <FootCom/>
      </section>
    </main>
  );
};

export default App;
