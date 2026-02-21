import AvailableBadge from "./About/AvailableBadge ";
import HeroSectiom from "./About/HeroSection";
import IntroSection from "./About/IntroSection ";
import ProjectsSection from "./About/ProjectSection";
import ServiceSection from "./About/ServiceSection";

const About = () => {
  return (
    <div className="max-w-5xl px-6  mt-30  mx-auto">
      {/* <HeroSectiom /> */}
      <AvailableBadge />
      <IntroSection />
      <ProjectsSection />
      <ServiceSection />
    </div>
  );
};

export default About;
