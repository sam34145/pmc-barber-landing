const Gallery = () => {
  const images = ["/cut1.jpg", "/cut2.jpg", "/cut3.jpg", "/cut4.jpg"];

  return (
    <section className="py-16 px-8 bg-gray-100">
      <h2 className="text-center text-3xl font-bold mb-12">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {images.map((img, idx) => (
          <img key={idx} src={img} alt={`cut ${idx}`} className="rounded" />

        ))}
      </div>
    </section>
  );
};
export default Gallery;