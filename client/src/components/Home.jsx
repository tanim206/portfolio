import HeroSection from "../components/home/HeroSection"
import Tabs from "../core/tabs";
import GitHubActivityCard from "./home/GitHubActivityCard";

const Home = () => {
  return (
    <div className="mt-30">
      <HeroSection />
      <GitHubActivityCard />
      <Tabs/>
    </div>
  );
};

export default Home;
