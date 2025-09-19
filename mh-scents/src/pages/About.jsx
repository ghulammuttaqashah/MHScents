export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16 flex flex-col items-center">
      <div className="max-w-3xl text-center">
        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-green-700 mb-6">
          About MH Scents
        </h1>

        {/* Brand Story */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Inspired by the timeless beauty of the Sindhu heritage,{" "}
          <span className="font-semibold text-green-700">MH Scents</span> brings
          you fragrances that carry stories, emotions, and tradition. Each attar
          and perfume is carefully handmade, keeping alive the essence of nature
          and culture. 🌿
        </p>

        {/* Refill Promise */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-green-800 mb-2">♻️ Our Refill Promise</h2>
          <p className="text-gray-700 leading-relaxed">
            We care about you and our planet. That’s why MH Scents offers{" "}
            <span className="font-semibold">eco-friendly refill packs</span>,
            ensuring you enjoy your favorite fragrance while reducing waste.
          </p>
        </div>

        {/* Closing Line */}
        <p className="text-lg font-medium text-gray-800 italic">
          “Made for you, not from the market.”
        </p>
      </div>
    </div>
  );
}
