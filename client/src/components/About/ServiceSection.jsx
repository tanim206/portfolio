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
  ];

  return (
    <>
      <h2 className="text-xl font-semibold mb-4 text-white">
        How I Help Businesses
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {services.map((service, i) => (
          <div
            key={i}
            className="p-6 rounded-xl border border-gray-700 hover:border-teal-500 transition"
          >
            <h3 className="font-bold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-gray-400">{service.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServicesSection;