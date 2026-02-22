
const ServicesSection = () => {
  const services = [
    {
      title: "⚡ Full Website Development",
      desc: "Building entire websites from scratch with modern technologies",
    },
    {
      title: "✨ Feature Implementation",
      desc: "Adding powerful new features to existing platforms",
    },
    {
      title: "🚀 Performance Optimization",
      desc: "Optimizing for speed, scalability, and SEO",
    },
    {
      title: "🚀 Performance Optimization",
      desc: "Optimizing for speed, scalability, and SEO",
    },
    {
      title: "🚀 Performance Optimization",
      desc: "Optimizing for speed, scalability, and SEO",
    },
    {
      title: "🚀 Performance Optimization",
      desc: "Optimizing for speed, scalability, and SEO",
    },
  ];

  return (
    <main className="bg-[#151d2b]  h-[440px]">
      <section className=" max-w-5xl mx-auto px-4 md:px-0">
        <h2 className="text-xl font-semibold mb-4 text-white">
          How I Help Businesses
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {services.map((service, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-[#21262f]  hover:border-teal-500 transition"
            >
              <h3 className="font-bold text-[#d8e709] mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServicesSection;
