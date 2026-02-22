import AvailableBadge from "./About/AvailableBadge ";
import Educaion from "./About/Educaion";
import Introduction from "./About/Introduction";
import Journey from "./About/Journey";
import ServiceSection from "./About/ServiceSection";

const About = () => {
  return (
    <div className="mt-30">
      <AvailableBadge />
      <Introduction />
      <Journey />
      <Educaion/>
      {/* <ServiceSection /> */}
    
    </div>
  );
};

export default About;
