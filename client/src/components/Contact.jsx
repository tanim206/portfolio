import { MdOutlineMailOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { PiPhoneCallLight } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa";
import { GoNorthStar } from "react-icons/go";
import { GiFlatStar } from "react-icons/gi";

const Contact = () => {
  return (
    <div className="max-w-5xl mt-30 pb-8 mb-10 text-white mx-auto px-6 sm:px-8">
      <div className="flex flex-col items-center gap-6 text-center sm:text-left">
        <p className="rounded-full flex justify-center items-center gap-3 border py-1 px-6 sm:px-10 border-[#0b4357] bg-[#0e2638] text-[#64e2f5]">
          <span>
            <GiFlatStar />
          </span>
          <span> Get In Touch</span>
        </p>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#64e2f5]">
          Let's Work Together
        </h1>
        <p className="text-md sm:text-xl text-[#878f9c] text-center">
          Have a project in mind or want to discuss potential opportunities? I'm
          always open <br className="hidden sm:block" /> to new challenges and
          collaborations.
        </p>
      </div>

      {/* contact start */}
      <div className="mt-10 flex flex-col lg:flex-row justify-between items-start gap-8">
        {/* left info */}
        <div className="w-full lg:w-1/2">
         
          {/* info list */}
          <div className="space-y-5">
            {/* Email */}
            <div className="border border-[#303a4d] p-4 rounded-xl flex gap-4 bg-[#142130]">
              <span className="text-[#c083fc] border border-white rounded-xl text-3xl p-3">
                <MdOutlineMailOutline />
              </span>
              <p className="flex flex-col space-y-1">
                <span className="font-semibold">Email</span>
                <span className="text-[#878f9c]">mdtanim.dev@gmail.com</span>
              </p>
            </div>

            {/* Location */}
            <div className="border border-[#303a4d] p-4 rounded-xl flex gap-4 bg-[#142130]">
              <span className="text-[#5fa5fa] border border-white rounded-xl text-3xl p-3">
                <SlLocationPin />
              </span>
              <p className="flex flex-col space-y-1">
                <span className="font-semibold">Location</span>
                <span className="text-[#878f9c]">
                  Chadnigat UP, Gujrat, Moulvibazar, Bangladesh
                </span>
              </p>
            </div>

            {/* Phone */}
            <div className="border border-[#303a4d] p-4 rounded-xl flex gap-4 bg-[#142130]">
              <span className="text-[#49de80] border border-white rounded-xl text-3xl p-3">
                <PiPhoneCallLight />
              </span>
              <p className="flex flex-col space-y-1">
                <span className="font-semibold">Phone & WhatsApp</span>
                <span className="text-[#878f9c]">+880 1646-471206</span>
              </p>
            </div>

            {/* Response Time */}
            <div className="border border-[#303a4d] p-4 rounded-xl flex gap-4 bg-[#142130]">
              <span className="text-[#f7bc25] border border-white rounded-xl text-3xl p-3">
                <FaRegClock />
              </span>
              <p className="flex flex-col space-y-1">
                <span className="font-semibold">Response Time</span>
                <span className="text-[#878f9c]">
                  Typically within 24 hours
                </span>
              </p>
            </div>

            {/* Quick Response */}
            <div className="border border-[#303a4d] p-4 rounded-xl flex gap-4 bg-[#142130]">
              <p className="space-y-1">
                <p className="flex items-center gap-3">
                  <span className="text-[#f7bc25] text-2xl">
                    <GoNorthStar />
                  </span>
                  <span className="font-semibold">Quick Response</span>
                </p>
                <span className="text-[#878f9c]">
                  I prioritize all incoming messages and strive to respond
                  within 24 hours. For urgent matters, feel free to call or
                  WhatsApp directly.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* right form */}
        <div className="w-full lg:w-1/2 bg-[#0e2638] p-6 rounded-2xl border border-[#303a4d] shadow-lg">
          <h2 className="text-2xl font-semibold text-[#64e2f5] mb-6">Contact Form</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-[#142130] border border-[#303a4d] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-[#142130] border border-[#303a4d] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-3 rounded-lg bg-[#142130] border border-[#303a4d] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="p-3 rounded-lg bg-[#142130] border border-[#303a4d] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-cyan-500 text-black font-semibold py-3 rounded-lg hover:bg-cyan-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;