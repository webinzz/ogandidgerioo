
const AboutSection = () => {
  return (
    <section className="relative  min-h-[110vh] flex md:flex-row flex-col justify-center items-center bg-white py-16 px-6 md:px-32 overflow-hidden">
     
      <div className="max-w-7xl mx-auto flex flex-col justify-center lg:flex-row gap-10 items-center">
        {/* Gambar */}
        <div className="relative md:w-1/2  flex items-center justify-center z-10">
          <div className="absolute w-32 md:block hidden h-40 bg-gradient-to-r from-white to-yellow-400  translate-y-1/3 bottom-0 left-4 opacity-90 z-10"></div>
          <div className="absolute w-32 md:block hidden h-32 bg-gradient-to-r from-white to-yellow-400  -translate-y-1/3 -translate-x-1/3  rotate-90 top-0 right-0 opacity-50 z-10"></div>

        <div className="md:w-96 w-64 bg-amber-400 md:h-[420px] h-64 rounded-tr-[50px]">.</div>
          
          <img
            src="Hero/hero1.png"
            alt="Pembuat Didgeridoo"
            className="rounded-3xl shadow-lg absolute w-80 h-72"
          />
        </div>

        {/* Teks */}
        <div className="md:text-left text-center md:w-1/2 z-10">
          <p className="text-sm tracking-widest text-red-500 font-semibold uppercase mb-2">ABOUT US</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Owner of <br className="hidden md:block" /> Didgeridoo
          </h2>
          <p className="text-gray-600 text-base mb-4">
          Our passion is to bring the ancient sounds of the didgeridoo to modern audiences. Handcrafted and soulfully played, each didgeridoo tells a story that transcends time.
          </p>

          <button className="bg-red-400 hover:bg-red-500 text-white font-semibold py-3 mt-3 px-6 rounded-full transition duration-300">
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
