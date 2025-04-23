const JoinUs = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[90vh] lg:h-screen flex items-center text-end justify-end overflow-hidden px-6 lg:px-32"
      style={{
        backgroundImage: "url('/assets/join-bg.jpg')", // Ganti dengan path gambar kamu
      }}
    >
      {/* Dekorasi bulat-bulat kiri */}
      <div className="absolute w-28 h-28 bg-yellow-300 opacity-30 rounded-full top-10 left-0 lg:left-20 "></div>
      <div className="absolute w-24 h-24 bg-red-300 opacity-20 rounded-full top-1/3 left-0 lg:left-28"></div>
      <div className="absolute w-36 h-36 bg-blue-300 opacity-25 rounded-full top-2/3 left-0 lg:left-20"></div>
      <div className="absolute w-28 h-28 bg-green-300 opacity-20 rounded-full bottom-10 left-0 lg:left-32"></div>
      <div className="absolute w-20 h-20 bg-orange-300 opacity-20 rounded-full top-1/2 left-0 lg:left-20"></div>

      {/* Konten */}
      <div className="relative z-10  max-w-4xl">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-snug">
          READY TO EXPLORE SOUND <br className="hidden lg:block" /> THROUGH
          DIDGERIDOO?
        </h2>
        <p className="text-base lg:text-lg mb-6">
          Join us on a journey of culture and sound. Discover the meaning and
          harmony behind every carving and blowing. Let's preserve the heritage
          and art of didgeridoo making together.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full transition duration-300">
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default JoinUs;
