import { useState } from "react";

type ProductType = {
  id: number;
  name: string;
  image: string;
  price: number;
  description?: string;
};

const ProductCard = ({ product }: { product: ProductType }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="relative group border p-4 rounded-md shadow-sm w-full md:min-w-72 md:max-w-72 cursor-pointer hover:shadow-lg transition"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover mb-4 rounded"
        />
        <h3 className="text-base font-semibold">{product.name}</h3>
        <p className="text-yellow-600 font-bold">${product.price}</p>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white max-w-md w-full p-6 rounded-lg shadow-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
            >
              &times;
            </button>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-yellow-600 font-bold text-lg mb-2">${product.price}</p>
            <p className="text-gray-700">
              {product.description || "No description provided."}
            </p>
            <a
              href={`https://wa.me/6281337744209?text=Hi!I'minterestedin"${product.name}"pricedat$${product.price}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white font-semibold px-6 py-2 rounded-lg mt-4 hover:bg-green-600 transition"
            >
              Order via WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
