import { Link } from "react-router-dom";

interface CardProps {
  image: string;
  title: string;
  price: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ image, title, price, link }) => {
  return (
    <Link to={link} className="relative w-80 h-96 rounded-lg overflow-hidden shadow-lg block">
      {/* Gambar */}
      <img src={image} alt={title} className="w-full h-full object-cover" />

      {/* Overlay + Title & Price */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-yellow-400 font-bold">{price}</p>
      </div>
    </Link>
  );
};

export default Card;
