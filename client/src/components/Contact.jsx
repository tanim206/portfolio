import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-5xl mx-auto my-20 p-6  rounded-2xl">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Contact Me
      </h2>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-lg bg-white/10 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-lg bg-white/10 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <input
          type="text"
          placeholder="Subject"
          className="p-3 rounded-lg bg-white/10 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <textarea
          placeholder="Message"
          rows={5}
          className="p-3 rounded-lg bg-white/10 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white resize-none"
        ></textarea>
        <button
          type="submit"
          className="bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;