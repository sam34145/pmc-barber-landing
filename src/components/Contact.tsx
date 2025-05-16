const Contact = () => {
  return (
    <section className="py-16 px-8 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Book an Appointment</h2>
        <form className="grid gap-4">
          <input type="text" placeholder="Name" className="p-3 rounded text-black" />
          <input type="email" placeholder="Email" className="p-3 rounded text-black" />
          <textarea placeholder="Message" className="p-3 rounded text-black" rows={4}></textarea>
          <button type="submit" className="bg-white text-black py-2 rounded hover:bg-gray-300">Send</button>
        </form>
      </div>
    </section>
  );
};
export default Contact;