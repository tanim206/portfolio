import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-4">
      <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
      <p className="text-xl md:text-2xl mb-6">Oops! Page Not Found</p>
      <Link
        to="/"
        className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition font-semibold"
      >
        Go Back Home
      </Link>
    </section>
  );
};

export default NotFound;
