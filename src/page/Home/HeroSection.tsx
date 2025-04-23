// import HeroText from "./HeroText";
// import HeroImage from "./HeroImg";

const HeroSection = () => {
    return (
      <section className="flex flex-col-reverse md:gap-5 lg:flex-row  items-center justify-between  bg-[#fdfdfd] relative overflow-hidden w-screen min-h-[100vh] lg:px-36 px-5 py-28  md:py-0">
        {/* bulat */}
          <div className="absolute -top-10 -right-10 lg:w-96 lg:h-96 w-40 h-40 rounded-full bg-gradient-to-br from-orange-200/50 to-slate-300/50 opacity-80 z-0"></div>
          <div className="absolute  top-0 -left-10 w-40 h-40 rounded-full bg-gradient-to-br from-slate-200 to-orange-200  z-0"></div>
      
        {/* Left Content */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Discover the   <br className="hidden md:block" />
            Unique Sound of the <br className="hidden md:block" />
            <span className="text-gray-800">Original Didgeridoo</span>
          </h1>
          <p className="text-gray-500 text-lg mb-8 max-w-xl">
            A high quality didgeridoo collection, made with love by experienced craftsmen. The culture and distinctive sound of this traditional Australian musical instrument.
          </p>
          <button className="bg-orange-300 text-gray-800 font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition">
            View Our Product
          </button>
        </div>
  
        {/* Right Content */}
        <div className="lg:w-1/2 w-full  flex justify-center  relative mb-12 lg:mb-0 ">
          <div className="relative z-10 md:w-72 w-44 mx-auto md:mx-0 md:h-[400px] h-60 bg-orange-200 border-2 border-dashed rounded-t-full">
            <img
              src="/Hero/hero.jpg" // ganti dengan path gambar produk kamu
              alt="Didgeridoo"
              className=" absolute w-72 -bottom-10 -right-10 border-2 border-white lg:h-96 rounded-xl shadow-xl"
            />
           
          </div>
        </div>
  
    </section>
    );
  };
  
  export default HeroSection;
  