import { MessageCircle } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 px-6 py-16 flex flex-col items-center">
      <div className="max-w-3xl text-center">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-green-400 mb-8">
          About MH Scents
        </h1>

        {/* Brand Story */}
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          At <span className="font-semibold text-green-400">MH Scents</span>, we
          believe fragrances are more than just scents—they are{" "}
          <span className="italic">memories, emotions, and identity</span>.
          Every attar and perfume we craft is{" "}
          <span className="font-semibold text-green-300">handmade fresh</span>{" "}
          with care, ensuring purity, originality, and elegance in every drop. 🌿
        </p>

        {/* Refill Promise */}
        <div className="bg-gray-800 border border-green-700 rounded-xl p-6 mb-8 shadow-lg">
          <h2 className="text-xl font-bold text-green-400 mb-3">
            ♻️ Our Refill Promise
          </h2>
          <p className="text-gray-300 leading-relaxed">
            With MH Scents, your bottles never go to waste. Reuse the same bottle to{" "}
            <span className="font-semibold text-green-300">refill any fragrance</span>— 
            whether the same or a new one—at a{" "}
            <span className="font-semibold text-green-300">reduced price</span>.
          </p>
        </div>

        {/* Highlights Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-green-400 font-bold text-lg">✨ Handmade</h3>
            <p className="text-gray-300 text-sm mt-1">
              Crafted carefully with love and tradition.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-green-400 font-bold text-lg">🌱 Fresh</h3>
            <p className="text-gray-300 text-sm mt-1">
              Prepared fresh on every order for quality.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-green-400 font-bold text-lg">🌿 Natural</h3>
            <p className="text-gray-300 text-sm mt-1">
              Inspired by nature, safe and long-lasting.
            </p>
          </div>
        </div>

        {/* Closing Line */}
        <p className="text-xl font-medium text-green-300 italic mb-8">
          “Because your scent should be as unique as you are.”
        </p>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/923001234567" // replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-600 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition"
        >
          <MessageCircle size={22} />
          Visit our WhatsApp Channel
        </a>
      </div>
    </div>
  );
}
