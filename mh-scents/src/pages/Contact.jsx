import { MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 px-6 py-16 flex flex-col justify-center items-center">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl font-extrabold text-green-400 mb-8">
          Get in Touch
        </h1>

        <p className="text-gray-300 text-lg mb-12">
          Have a question, want to place an order, or just say hello? Chat with us directly on WhatsApp! 🌿
        </p>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/923001234567"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-600 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition"
        >
          <MessageCircle size={22} /> Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
