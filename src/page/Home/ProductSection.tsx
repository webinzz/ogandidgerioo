import { products } from "../Product/Product";
import ProductCard from "../Product/ProductCard";

const Product = () => {
  return (
    <section className="min-h-[120vh] relative w-screen flex flex-col items-center justify-center overflow-x-hidden  text-gray-800 py-20">
      {/* Lingkaran dekoratif - beda dari feature section */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-bl from-blue-300 to-purple-300 rounded-full top-0 left-0 -translate-x-2/3  opacity-30 "></div>
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-green-300 to-blue-400 rounded-full bottom-0 right-0 translate-x-2/3  opacity-50 "></div>

      <div className="text-center mb-12">
        <p className="text-sm tracking-widest text-red-500 font-semibold uppercase mb-2">
          Our Product
        </p>
        <h2 className="text-4xl lg:text-5xl font-bold mb-3">
          various types of didgeridoo available
        </h2>
        <h2 className="lg:text-3xl text-xl">handmade didgeridoos.</h2>
      </div>

      <div className="overflow-x-scroll relative h-[400px] w-full ">
        <div className="flex gap-5 w-max absolute top-0 left-0 ">
          {products.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
