import { MessageCircle, Instagram, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 px-6 py-16 flex flex-col items-center">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl font-extrabold text-green-400 mb-8">
          Get in Touch
        </h1>

        <p className="text-gray-300 text-lg mb-8">
          Have a question, want to place an order, or just say hello? We’d love to hear from you! 🌿
        </p>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/923001234567"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-600 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition mb-10"
        >
          <MessageCircle size={22} /> Chat on WhatsApp
        </a>

        {/* Social Links */}
        <div className="flex justify-center gap-8">
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-green-400 transition"
          >
            <Instagram size={32} />
          </a>

          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-green-400 transition"
          >
            <Facebook size={32} />
          </a>
        </div>

        {/* Optional Closing Line */}
        <p className="text-gray-400 text-sm mt-12">
          We respond as quickly as we can! Your fragrance journey starts here. ✨
        </p>
      </div>
    </div>
  );
}
