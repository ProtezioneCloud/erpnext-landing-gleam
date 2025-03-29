
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <svg width="146" height="34" viewBox="0 0 146 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8">
            <path d="M22.2925 0H11.708C5.79115 0 0.999939 4.86404 0.999939 10.8687V22.8022C0.999939 28.8068 5.79115 33.6708 11.708 33.6708H22.2925C28.2093 33.6708 33.0006 28.8068 33.0006 22.8022V10.8687C33.0006 4.86404 28.2093 0 22.2925 0Z" fill="#2490EF"/>
            <path d="M47.8938 8.7998H44.1689V25.7676H54.9994V22.5679H47.8938V8.7998Z" fill="#36414C"/>
            <path d="M59.2954 8.7998H63.0203V22.5679H70.1259V25.7676H59.2954V8.7998Z" fill="#36414C"/>
            <path d="M77.9934 8.7998H74.2686V25.7676H77.9934V8.7998Z" fill="#36414C"/>
            <path d="M101.504 19.3682C101.504 23.1714 98.8273 26.0498 94.819 26.0498C90.8108 26.0498 88.1343 23.1714 88.1343 19.3682V8.7998H91.8591V19.2271C91.8591 21.1566 93.0214 22.5679 94.819 22.5679C96.6167 22.5679 97.7789 21.1566 97.7789 19.2271V8.7998H101.504V19.3682Z" fill="#36414C"/>
            <path d="M83.1144 15.219C83.1144 18.1676 80.8787 20.4619 77.9934 20.4619H74.2686V25.7676H70.5437V8.7998H77.9934C80.8787 8.7998 83.1144 11.0941 83.1144 14.0427V15.219Z" fill="#36414C"/>
            <path d="M14.0687 17.7996L17.1265 20.9012L23.2437 14.6992" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M123.975 13.6194C123.975 16.5679 121.74 18.8622 118.855 18.8622H115.13V25.7676H111.405V8.7998H118.855C121.74 8.7998 123.975 11.0941 123.975 14.0427V13.6194Z" fill="#36414C"/>
            <path d="M128.702 25.7676H132.427V8.7998H128.702V25.7676Z" fill="#36414C"/>
            <path d="M136.15 8.7998H145.819V11.9995H139.875V15.7026H144.762V18.9023H139.875V22.5679H145.819V25.7676H136.15V8.7998Z" fill="#36414C"/>
            <path d="M111.405 15.219C111.405 18.1676 109.17 20.4619 106.284 20.4619H102.56V25.7676H98.8347V8.7998H106.284C109.17 8.7998 111.405 11.0941 111.405 14.0427V15.219Z" fill="#36414C"/>
            <path d="M118.855 15.6621H115.13V11.9995H118.855C119.754 11.9995 120.25 12.818 120.25 13.8308C120.25 14.8436 119.754 15.6621 118.855 15.6621Z" fill="#36414C"/>
            <path d="M106.284 15.6621H102.56V11.9995H106.284C107.183 11.9995 107.679 12.818 107.679 13.8308C107.679 14.8436 107.183 15.6621 106.284 15.6621Z" fill="#36414C"/>
            <path d="M77.9934 15.6621H74.2686V11.9995H77.9934C78.892 11.9995 79.3892 12.818 79.3892 13.8308C79.3892 14.8436 78.892 15.6621 77.9934 15.6621Z" fill="#36414C"/>
          </svg>
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
          <Button className="bg-erp-blue hover:bg-erp-darkblue">Richiedi Demo</Button>
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
              onClick={() => setIsMenuOpen(false)}
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
