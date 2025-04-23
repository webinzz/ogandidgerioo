function HeroSection() {
  return (
    <section
      className="min-h-[500px] bg-slate-100 flex flex-col justify-center items-center text-center px-4 py-32 lg:py-0"
      style={{ backgroundImage: `url()` }}
    >
      <p className="text-xl text-gray-700">About Us</p>
      <h1 className="lg:text-5xl text-3xl font-bold mb-4 text-orange-500">
        WHO WE ARE?
      </h1>
      <p className="max-w-3xl text-gray-700 leading-relaxed text-lg">
        We are a collective of passionate artisans, sound healers, and cultural
        storytellers committed to preserving the soul of the didgeridoo. From
        the heart of the forest to the breath of tradition, we shape each
        instrument with reverence and creativity.
      </p>
      <p className="mt-6 max-w-2xl text-gray-600 italic">
        “We don't just make instruments — we breathe life into them.”
      </p>
    </section>
  );
}

export default HeroSection;
