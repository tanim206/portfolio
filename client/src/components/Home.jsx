import HeroSection from "../components/home/HeroSection"
import Tabs from "../core/Tools";
import GitHubActivityCard from "./home/GitHubActivityCard";

const Home = () => {
  return (
    <div className="mt-30 ">
      <HeroSection />
      <Tabs/>
      <GitHubActivityCard />
    </div>
  );
};

export default Home;
