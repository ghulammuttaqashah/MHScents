import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="h-18 w-9 rounded-lg flex-shrink-0 ">
            <img
              src="/logo.png"
              alt="MH Scents Logo"
              className="h-full w-full object-cover transform scale-150"
            />
          </div>
          <div className=" sm:block">
            <h1 className="text-2xl font-bold text-green-700">Scents</h1>
            <p className="text-sm text-gray-600">Fragrances that define you</p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <Link to="/about" className="hover:text-green-600">About</Link>
          <Link to="/products" className="hover:text-green-600">Products</Link>
          <Link to="/custom-order" className="hover:text-green-600">Custom Order</Link>
         
          <Link to="/contact" className="hover:text-green-600">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
            <Link to="/" className="hover:text-green-600" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="hover:text-green-600" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/products" className="hover:text-green-600" onClick={() => setIsOpen(false)}>Products</Link>
            <Link to="/custom-order" className="hover:text-green-600" onClick={() => setIsOpen(false)}>Custom Order</Link>

            <Link to="/contact" className="hover:text-green-600" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
