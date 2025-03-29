
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/assets/erp-logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <img src={Logo} alt="ERP Logo" className="h-10 w-auto" />
          <span className="text-erp-text font-bold text-xl">ERPManager</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#modules" className="text-erp-text hover:text-erp-blue font-medium">
            Moduli
          </a>
          <a href="#benefits" className="text-erp-text hover:text-erp-blue font-medium">
            Vantaggi
          </a>
          <a href="#services" className="text-erp-text hover:text-erp-blue font-medium">
            Servizi
          </a>
          <a href="#contact" className="text-erp-text hover:text-erp-blue font-medium">
            Contatti
          </a>
        </nav>

        <div className="hidden md:block">
          <Button 
            className="bg-erp-blue hover:bg-erp-darkblue" 
            onClick={scrollToContact}
          >
            Richiedi Demo
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-5 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#modules" 
              className="text-erp-text hover:text-erp-blue font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Moduli
            </a>
            <a 
              href="#benefits" 
              className="text-erp-text hover:text-erp-blue font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Vantaggi
            </a>
            <a 
              href="#services" 
              className="text-erp-text hover:text-erp-blue font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Servizi
            </a>
            <a 
              href="#contact" 
              className="text-erp-text hover:text-erp-blue font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contatti
            </a>
            <Button 
              className="bg-erp-blue hover:bg-erp-darkblue w-full mt-2"
              onClick={scrollToContact}
            >
              Richiedi Demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
