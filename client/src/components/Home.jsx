import HeroSection from "../components/home/HeroSection"
import Experience from "./home/Experience";
import GitHubActivityCard from "./home/GitHubActivityCard";

const Home = () => {
  return (
    <div className="mt-30 px-4">
      <HeroSection />
      <Experience/>
      <GitHubActivityCard />
    </div>
  );
};

export default Home;
