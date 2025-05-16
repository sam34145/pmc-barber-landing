const About = () => {
  return (
    <section className="py-16 px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img src="/barber-chair.jpg" alt="Barber Chair" className="rounded-lg shadow-lg" />
        <div>
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-4">
            PMC Barber offers premium grooming with a modern touch. From haircuts to beard trims, our barbers ensure you leave looking sharp and confident.
          </p>
          <button className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800">Read More</button>
        </div>
      </div>
    </section>
  );
};
export default About;