
const FeaturesSection = () => {
  return (
    <section className="relative min-h-screen  w-screen flex flex-col items-center justify-center md:text-start text-center bg-white py-16 px-4 md:px-32 overflow-hidden">
      {/* Lingkaran dekoratif kiri */}
      <div className="absolute w-24 h-24 bg-gradient-to-r from-yellow-300 to-pink-400 rounded-full top-1/4 left-0 opacity-30  -translate-y-1/2"></div>
      <div className="absolute w-16 h-16 bg-gradient-to-r from-orange-300 to-red-400 rounded-full top-1/2 left-0 opacity-30  -translate-y-1/2"></div>

      {/* Lingkaran dekoratif kanan */}
      <div className="absolute md:block hidden w-20 h-20 bg-gradient-to-r from-yellow-300 to-pink-400 rounded-full top-1/2 right-0 opacity-30  -translate-y-1/2"></div>
      <div className="absolute w-32 h-32 bg-gradient-to-r from-orange-300 to-red-400 rounded-full bottom-0 right-0 opacity-30 "></div>
      <div className="absolute md:hidden w-24 h-24 bg-gradient-to-r from-yellow-300 to-pink-400 rounded-full bottom-1/4 right-0 opacity-30  -translate-y-1/2"></div>


        <p className="text-sm tracking-widest text-red-500 font-semibold uppercase mb-2">Features</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          Explore the uniqueness of our
        </h2>
        <h2 className="md:text-3xl text-xl">handmade didgeridoos.</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {[
            {
              title: "Authentic Sound",
              desc: "Crafted with precision for true didgeridoo resonance.",
              icon: "🎵",
            },
            {
              title: "Handcrafted",
              desc: "Each piece is made with love and skill by local artisans.",
              icon: "🪵",
            },
            {
              title: "Custom Orders",
              desc: "Get a didgeridoo tailored to your preferences.",
              icon: "🎨",
            },
            {
              title: "Global Shipping",
              desc: "We deliver to music lovers around the world.",
              icon: "🌍",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-md text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
            
            </div>
          ))}
        </div>
    </section>
  );
};

export default FeaturesSection;