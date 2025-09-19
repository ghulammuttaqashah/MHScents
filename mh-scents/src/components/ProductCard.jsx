import { Link } from "react-router-dom";

export default function ProductCard({ image, name, description, price }) {
  return (
    <div className="bg-gray-800 border border-green-700 rounded-xl p-4 shadow-md hover:shadow-lg transition">
    <Link
  to={`/products/${name
    .replace(/\s+/g, "-")     // spaces → hyphens
    .replace(/&/g, "and")     // replace & with "and"
    .toLowerCase()}`}         // lowercase
>
        <img
          src={image}
          alt={name}
          className="h-40 w-full object-cover rounded-md mb-4"
        />
        <h3 className="text-green-400 font-bold text-lg">{name}</h3>
        <p className="text-gray-300 text-sm mt-1">{description}</p>
        <p className="text-green-300 font-semibold mt-2">Rs. {price}</p>
      </Link>

      {/* WhatsApp Order Button */}
      <a
        href={`https://wa.me/923023280737?text=I'm interested in ${name}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-green-600 text-white text-sm px-4 py-2 rounded-full hover:bg-green-700 transition"
      >
        Order Now
      </a>
    </div>
  );
}
