import { MessageCircle, Leaf, Sparkles, Droplet } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 text-center">
      
      {/* Hero Section */}
      <div className="max-w-2xl">
        {/* Big Tagline */}
        <h1 className="text-5xl font-extrabold text-green-400">
          Fragrances that Define You
        </h1>
        <p className="text-xl text-gray-300 mt-2">
          Discover perfumes that are handmade, fresh, and natural — crafted just for you.
        </p>
      </div>

      {/* Highlights */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
        <div className="flex flex-col items-center">
          <Sparkles className="text-green-400 mb-2" size={32} />
          <p className="text-gray-200 font-medium">Handmade</p>
        </div>
        <div className="flex flex-col items-center">
          <Droplet className="text-green-400 mb-2" size={32} />
          <p className="text-gray-200 font-medium">Fresh</p>
        </div>
        <div className="flex flex-col items-center">
          <Leaf className="text-green-400 mb-2" size={32} />
          <p className="text-gray-200 font-medium">Natural</p>
        </div>
      </div>

      {/* WhatsApp Order Button */}
      <div className="mt-12">
        <a
          href="https://wa.me/923023280737" // replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-600 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition"
        >
          <MessageCircle size={22} />
          Order on WhatsApp
        </a>
      </div>
      
    </div>
  );
}
