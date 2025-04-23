import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "Spirit of the Earth",
    collection: "Authentic Didgeridoo Collection",
    imageLeft: "/HeroSlider/1.jpeg",
    imageRight: "/HeroSlider/1.jpeg",
  },
  {
    id: 2,
    title: "Echoes of the Outback",
    collection: "Handcrafted Instruments",
    imageLeft: "/HeroSlider/2.jpeg",
    imageRight: "/HeroSlider/2.jpeg",
  },
  {
    id: 3,
    title: "Tradition Meets Tone",
    collection: "Indigenous Artistry",
    imageLeft: "/HeroSlider/3.jpeg",
    imageRight: "/HeroSlider/3.jpeg",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] bg-white overflow-hidden flex items-center justify-between px-8 bg-no-repeat bg-cover bg-center "
    style={{ backgroundImage: `url(${slides[current].imageLeft})` }}
    >
      <div className="flex flex-col w-full items-center justify-between transition-all duration-500">
          <p className="uppercase text-sm text-white">
            {slides[current].collection}
          </p>
          <h1 className="text-4xl font-cursive text-white text-center font-bold">
            {slides[current].title}
          </h1>
          <button className="mt-4 px-6 py-2 bg-black text-white rounded-full">
            Shop Now
          </button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-red-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}