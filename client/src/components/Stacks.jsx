import Frontend from "./stacks/Frontend";
import Backend from "./stacks/Backend";
import Database from "./stacks/Database";
import Auth from "./stacks/Auth";

const Stacks = () => {
  return (
    <div className="mt-30 max-w-5xl mb-12 mx-auto space-y-8">
      <Frontend />
      <Backend />
      <Database />
      <Auth />
    </div>
  );
};

export default Stacks;
