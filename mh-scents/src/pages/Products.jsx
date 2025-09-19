import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-900 px-6 py-16">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-green-400 text-center mb-6">
        Our Collection
      </h1>
      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
        Explore our handcrafted{" "}
        <span className="text-green-300 font-semibold">Attars</span>, elegant{" "}
        <span className="text-green-300 font-semibold">Perfumes</span>, and{" "}
        <span className="text-green-300 font-semibold">Testers</span> — fresh,
        natural, and made for you.
      </p>

      {/* Perfumes Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-extrabold text-green-400 text-center mb-3">
          Perfumes
        </h2>
        <div className="h-1 w-24 bg-green-500 mx-auto mb-8 rounded"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <ProductCard
            image="/images/perfume1.jpg"
            name="Deepzil"
            description="Crafted from Depteek & Duhnill inspirations — a rich, sophisticated blend of smoky wood and subtle spice."
            price="4000"
          />
          <ProductCard
            image="/images/perfume2.jpg"
            name="Sauvage"
            description="Fresh yet powerful, with citrus top notes layered over warm amber and earthy woods — bold and modern."
            price="4800"
          />
        </div>
      </div>

      {/* Attar Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-extrabold text-green-400 text-center mb-3">
          Attars
        </h2>
        <div className="h-1 w-24 bg-green-500 mx-auto mb-8 rounded"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <ProductCard
            image="/images/attar1.jpg"
            name="White Oudh"
            description="A refined oud with smooth woody depth, balanced by subtle sweetness — elegant and timeless."
            price="2500"
          />
          <ProductCard
            image="/images/attar2.jpg"
            name="Silver & Black"
            description="A bold oriental blend with musky undertones and fresh spicy hints — perfect for lasting impressions."
            price="2200"
          />
        </div>
      </div>

      {/* Testers Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-extrabold text-green-400 text-center mb-3">
          Testers
        </h2>
        <div className="h-1 w-24 bg-green-500 mx-auto mb-8 rounded"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <ProductCard
            image="/images/tester1.jpg"
            name="Deepzil Tester"
            description="A compact size to experience the depth of Deepzil."
            price="600"
          />
          <ProductCard
            image="/images/tester2.jpg"
            name="Sauvage Tester"
            description="Portable tester of the iconic Sauvage fragrance."
            price="700"
          />
        </div>
      </div>

      {/* Custom Order CTA */}
      <div className="text-center mt-20">
        <a
          href="/custom-order"
          className="inline-block bg-green-600 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition"
        >
          Want something custom? Click here
        </a>
      </div>
    </div>
  );
}
