const Hero = () => {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/hero.jpg)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Precision Cuts & Timeless Style</h1>
        <p className="text-lg mb-6">Your local premium barber experience</p>
        <div className="space-x-4">
          <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200">Book Now</button>
          <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black">Learn More</button>
        </div>
      </div>
    </section>
  );
};
export default Hero;