import { useState } from "react";
import { useParams } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const PRODUCTS = {
  "white-oudh": {
    name: "White Oudh",
    image: "/images/attar1.jpg",
    description:
      "A refined oud with smooth woody depth, balanced by subtle sweetness — elegant and timeless.",
    price: { "3ml": 800, "6ml": 1500, "12ml": 2500 }, // updated for sizes
    type: "Attar",
    refill: true,
  },
  "silver-and-black": {
    name: "Silver & Black",
    image: "/images/attar2.jpg",
    description:
      "A bold oriental blend with musky undertones and fresh spicy hints — perfect for lasting impressions.",
    price: { "3ml": 700, "6ml": 1300, "12ml": 2200 }, // updated for sizes
    type: "Attar",
    refill: true,
  },
  "deepzil": {
    name: "Deepzil",
    image: "/images/perfume1.jpg",
    description:
      "Crafted from Depteek & Duhnill inspirations — a rich, sophisticated blend of smoky wood and subtle spice.",
    price: 4000,
    type: "Perfume",
    refill: true,
  },
  "sauvage": {
    name: "Sauvage",
    image: "/images/perfume2.jpg",
    description:
      "Fresh yet powerful, with citrus top notes layered over warm amber and earthy woods — bold and modern.",
    price: 4800,
    type: "Perfume",
    refill: true,
  },
};

export default function ProductDetail() {
  const { productName } = useParams();
  const product = PRODUCTS[productName];
  const [selectedSize, setSelectedSize] = useState(
    product?.type === "Attar" ? "12ml" : null
  );

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-center px-6">
        <h2 className="text-2xl text-red-400">Product not found</h2>
      </div>
    );
  }

  // Determine price dynamically
  const displayPrice =
    product.type === "Attar" ? product.price[selectedSize] : product.price;

  return (
    <div className="min-h-screen bg-gray-900 px-6 py-16 flex flex-col items-center">
      <div className="max-w-3xl w-full bg-gray-800 border border-green-700 rounded-xl p-6 shadow-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-72 object-cover rounded-md mb-6"
        />

        <h1 className="text-4xl font-extrabold text-green-400 mb-4">
          {product.name}
        </h1>

        <p className="text-gray-300 text-lg mb-4">{product.description}</p>

        {/* Size Selection for Attars */}
        {product.type === "Attar" && (
          <div className="flex gap-4 mb-4">
            {["3ml", "6ml", "12ml"].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 rounded-full border font-medium ${
                  selectedSize === size
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-gray-700 text-gray-300 border-green-600 hover:bg-green-600 hover:text-white transition"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        )}

        <p className="text-green-300 font-semibold text-xl mb-4">
          Rs. {displayPrice}
        </p>

        {product.refill && (
          <div className="bg-gray-700 border border-green-600 rounded-lg p-4 mb-4">
            <h3 className="text-green-400 font-bold mb-2">♻️ Refill Option</h3>
            <p className="text-gray-300 text-sm">
              You can reuse your bottle to refill the same fragrance or try a new
              one at a reduced price.
            </p>
          </div>
        )}

        {/* Personal Use Option */}
        <div className="bg-gray-700 border border-green-600 rounded-lg p-4 mb-4">
          <h3 className="text-green-400 font-bold mb-2">🧴 Personal Use Option</h3>
          <p className="text-gray-300 text-sm">
            For personal use, you can purchase in a plain plastic bottle at a
            reduced price — perfect for home or travel.
          </p>
        </div>

        {/* WhatsApp Order CTA */}
        <a
          href={`https://wa.me/923023280737?text=I'm interested in ${product.name}${
            selectedSize ? ` (${selectedSize})` : ""
          }`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 bg-green-600 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition"
        >
          <MessageCircle size={22} /> Order on WhatsApp
        </a>
      </div>
    </div>
  );
}
