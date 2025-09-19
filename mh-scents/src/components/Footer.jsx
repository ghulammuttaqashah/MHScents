export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between">
        
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3">
          <div className="h-14 w-10 rounded-lg flex-shrink-0">
            <img
              src="/logo.png"
              alt="MH Scents Logo"
              className="h-full w-full object-cover transform scale-150"
            />
          </div>
          <div className="sm:block">
            <h1 className="text-2xl font-bold text-green-400">Scents</h1>
            <p className="text-sm text-gray-300">Fragrances that define you</p>
          </div>
        </div>
      </div>

      {/* Copyright - always centered at bottom */}
      <div className="text-center text-gray-400 text-xs pb-4">
        © {new Date().getFullYear()} MH Scents. All rights reserved.
      </div>
    </footer>
  );
}
