import Sidebar from "./Sidebar";
import ProductCard from "./ProductCard";
import HeroSlider from "./HeroSlider";
import { products } from "./Product";

const Product = () => {
  return (
    <>
      <HeroSlider />
      <div className="flex px-6 lg:text-left text-center lg:px-20 py-10 pt-20 gap-10">
        <aside className="w-1/4 hidden lg:block">
          <Sidebar />
        </aside>

        <main className="w-full lg:w-3/4">
          <h2 className="text-2xl font-bold mb-6">Eksplorasi Didgeridoo</h2>
          <p className="mb-10 text-gray-600">
            Temukan koleksi terbaik alat musik didgeridoo, aksesoris, dan
            perlengkapan budaya lainnya. Semua produk dibuat dengan sentuhan
            autentik dan penuh makna.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Product;
