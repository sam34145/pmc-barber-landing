const Testimonials = () => {
  const reviews = [
    { name: 'John Doe', text: 'The best haircut I’ve ever had!', rating: 5 },
    { name: 'Jane Smith', text: 'Great atmosphere and skilled barbers.', rating: 4 }
  ];

  return (
    <section className="py-16 px-8">
      <h2 className="text-center text-3xl font-bold mb-12">What Clients Say</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {reviews.map((review, idx) => (
          <div key={idx} className="bg-white p-6 rounded shadow">
            <p className="text-gray-700 italic mb-2">“{review.text}”</p>
            <div className="text-sm text-gray-600">- {review.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Testimonials;