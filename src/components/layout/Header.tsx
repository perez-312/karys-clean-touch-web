
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-bold text-clean-dark">
            Kary's <span className="text-clean-orange">Clean Touch</span>
          </span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-clean-dark hover:text-clean-orange transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-clean-dark hover:text-clean-orange transition-colors">
            Services
          </Link>
          <Link to="/reviews" className="text-clean-dark hover:text-clean-orange transition-colors">
            Reviews
          </Link>
          <Link to="/contact" className="text-clean-dark hover:text-clean-orange transition-colors">
            Contact
          </Link>
          <Link to="/booking">
            <Button className="bg-clean-orange hover:bg-orange-600 transition-colors">
              Book Now
            </Button>
          </Link>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-md md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <Link 
                to="/" 
                className="text-clean-dark hover:text-clean-orange transition-colors px-4 py-2"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="text-clean-dark hover:text-clean-orange transition-colors px-4 py-2"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link 
                to="/reviews" 
                className="text-clean-dark hover:text-clean-orange transition-colors px-4 py-2"
                onClick={toggleMenu}
              >
                Reviews
              </Link>
              <Link 
                to="/contact" 
                className="text-clean-dark hover:text-clean-orange transition-colors px-4 py-2"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link 
                to="/booking" 
                className="w-full"
                onClick={toggleMenu}
              >
                <Button className="bg-clean-orange hover:bg-orange-600 transition-colors w-full">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
