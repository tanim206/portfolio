// Contact.jsx
import { FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 md:px-0 py-12 mt-14">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
        Contact Me
      </h2>
      <p className="text-center text-gray-500 mb-12">
        I’m open to opportunities and collaborations. Feel free to reach out!
      </p>

      {/* Contact Info */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
        <a
          href="mailto:yourmail@example.com"
          className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition"
        >
          <FiMail className="w-5 h-5 " />
          mdtanim.dev@gmail.com
        </a>

        <a
          href="tel:+880123456789"
          className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition"
        >
          <FiPhone className="w-5 h-5 " />
          +880 1646 471206
        </a>
      </div>

      {/* Contact Form */}
      <form className="max-w-5xl mx-auto bg-white text-gray-900 border border-gray-200 rounded-2xl p-6  shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full sm:w-1/2 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2  transition bg-white text-gray-900"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full sm:w-1/2 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2  transition bg-white text-gray-900"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2  transition resize-none bg-white text-gray-900"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 cursor-pointer bg-black text-white font-semibold rounded-xl shadow-md transition"
        >
          Send Message
        </button>
      </form>

      {/* Social Links */}
      <div className="flex justify-center mt-8 gap-4">
        <a
          href="https://github.com/tanim206"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition"
        >
          <FiGithub className="w-5 h-5 " />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition"
        >
          <FiLinkedin className="w-5 h-5 " />
        </a>
      </div>
    </section>
  );
};

export default Contact;