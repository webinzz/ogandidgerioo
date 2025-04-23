function DescSection() {
  return (
    <section className="h-screen flex flex-col lg:flex-row items-center text-center lg:text-end lg:justify-between lg:px-28 px-8 gap-8 py-20 lg:py-0">
      <img
        src="Hero/Home.png"
        alt="Pembuat Didgeridoo"
        className="rounded shadow-lg p-2 bg-orange-100 lg:h-96 w-[550px] border-amber-300 border-2 border-dashed  "
      />
      <div className="lg:w-1/2">
        <h2 className="text-4xl font-bold mb-4 text-amber-300">
          We Always Share The Ancient Vibes
        </h2>
        <p className="text-gray-700 mb-6">
          Our passion is to bring the ancient sounds of the didgeridoo to modern
          audiences. Handcrafted and soulfully played, each didgeridoo tells a
          story that transcends time.
        </p>
        <button className="bg-amber-300 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600">
          Contact Us
        </button>
      </div>
    </section>
  );
}

export default DescSection;
