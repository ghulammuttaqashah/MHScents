import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function CustomOrder() {
  const [details, setDetails] = useState("");
  const [bottleType, setBottleType] = useState("Premium");
  const [productType, setProductType] = useState("Attar");

  // WhatsApp link with auto-filled message
  const whatsappLink = `https://wa.me/923023280737?text=Hello! I want to place a custom order. 
Type: ${productType}.
Bottle: ${bottleType}. 
Details: ${encodeURIComponent(details)}`;

  return (
    <div className="min-h-screen bg-gray-900 px-6 py-16 flex flex-col items-center">
      <div className="max-w-3xl w-full bg-gray-800 border border-green-700 rounded-xl p-8 shadow-lg">
        <h1 className="text-4xl font-extrabold text-green-400 mb-6 text-center">
          Create Your Custom Fragrance
        </h1>

        <p className="text-gray-300 text-lg mb-6">
          At <span className="font-semibold text-green-400">MH Scents</span>, a
          custom fragrance is uniquely yours. Describe the scent you imagine —
          it could be based on a favorite perfume, a cherished memory, or a
          personal inspiration. 🌿
        </p>

        {/* Dropdown for Product Type */}
        <div className="mb-6">
          <label className="block text-gray-300 mb-2 font-medium">
            Select Type
          </label>
          <select
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
            className="w-full bg-gray-700 text-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="Attar">Attar</option>
            <option value="Perfume">Perfume</option>
          </select>
        </div>

        {/* Textarea for customer description */}
        <div className="mb-6">
          <label className="block text-gray-300 mb-2 font-medium">
            Describe your desired fragrance
          </label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="e.g., I love the freshness of Rose Attar with a hint of Oudh..."
            className="w-full bg-gray-700 text-gray-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-400"
            rows={5}
          />
        </div>

        {/* Bottle Selection */}
        <div className="mb-6">
          <label className="block text-gray-300 mb-2 font-medium">
            Choose your bottle
          </label>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <button
                onClick={() => setBottleType("Plain")}
                className={`w-full px-4 py-2 rounded-full border font-medium ${
                  bottleType === "Plain"
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-gray-700 text-gray-300 border-green-600 hover:bg-green-600 hover:text-white transition"
                }`}
              >
                Plain
              </button>
              <p className="text-gray-400 text-xs mt-1 text-center">
                Best for personal use, one-time use, budget-friendly
              </p>
            </div>

            <div className="flex-1">
              <button
                onClick={() => setBottleType("Premium")}
                className={`w-full px-4 py-2 rounded-full border font-medium ${
                  bottleType === "Premium"
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-gray-700 text-gray-300 border-green-600 hover:bg-green-600 hover:text-white transition"
                }`}
              >
                Premium
              </button>
              <p className="text-gray-400 text-xs mt-1 text-center">
                Elegant and reusable. Can be refilled for future orders.
              </p>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center mt-6">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition"
          >
            <MessageCircle size={22} /> Submit Your Custom Order
          </a>
        </div>
      </div>
    </div>
  );
}
