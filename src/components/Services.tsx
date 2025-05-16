const Services = () => {
  const services = [
    { title: 'Haircut', icon: '✂️' },
    { title: 'Beard Trim', icon: '🧔' },
    { title: 'Shave', icon: '🪒' },
    { title: 'Facial', icon: '🧖' }
  ];

  return (
    <section className="py-16 px-8">
      <h2 className="text-center text-3xl font-bold mb-12">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div key={idx} className="bg-gray-100 p-6 text-center rounded shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Services;