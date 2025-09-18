import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 text-center">
      
      {/* Hero Section */}
      <div className="max-w-2xl">
        {/* Logo */}
        <div className="h-24 w-16 mx-auto mb-4  rounded-lg">
          <img
            src="/logo.png"
            alt="MH Scents Logo"
            className="h-full w-full object-cover transform scale-150"
          />
        </div>

        {/* Brand Title */}
        <h1 className="text-4xl font-extrabold text-green-700">Scents</h1>
        <p className="text-lg text-gray-700 mt-2">
          Fragrances that define you 
        </p>
       
      </div>

      {/* Highlight */}
      <div className="mt-8 max-w-xl">
        <p className="text-xl font-medium text-gray-800">
          ✨ Handmade perfumes, prepared fresh on every order
        </p>
      </div>

      {/* WhatsApp Order Button */}
      <div className="mt-10">
        <a
          href="https://wa.me/923001234567" // replace with your WhatsApp number
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
