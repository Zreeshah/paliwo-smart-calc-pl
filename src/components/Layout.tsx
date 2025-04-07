
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4 px-6 border-b sticky top-0 bg-white z-10 shadow-sm">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Logo />
            
            <div className="hidden md:flex space-x-6">
              <Link to="/cena-paliwa" className="text-gray-600 hover:text-brand-green">
                Cena Paliwa
              </Link>
              <Link to="/paliwa-premium" className="text-gray-600 hover:text-brand-green">
                Paliwa Premium
              </Link>
              <Link to="/diesel" className="text-gray-600 hover:text-brand-green">
                Diesel
              </Link>
              <Link to="/lpg" className="text-gray-600 hover:text-brand-green">
                LPG
              </Link>
              <Link to="/hybryda" className="text-gray-600 hover:text-brand-green">
                Hybryda
              </Link>
              <Link to="/ekonomiczna-jazda" className="text-gray-600 hover:text-brand-green">
                Ekonomiczna Jazda
              </Link>
              <Link to="/polityka-prywatnosci" className="text-gray-600 hover:text-brand-green">
                Polityka Prywatności
              </Link>
              <Link to="/zastrzezenie-prawne" className="text-gray-600 hover:text-brand-green">
                Zastrzeżenie Prawne
              </Link>
            </div>
            
            <button onClick={toggleMenu} className="md:hidden text-gray-800">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-2 border-t animate-fade-in">
              <div className="flex flex-col space-y-3">
                <Link 
                  to="/cena-paliwa" 
                  className="text-gray-600 hover:text-brand-green py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cena Paliwa
                </Link>
                <Link 
                  to="/paliwa-premium" 
                  className="text-gray-600 hover:text-brand-green py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Paliwa Premium
                </Link>
                <Link 
                  to="/diesel" 
                  className="text-gray-600 hover:text-brand-green py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Diesel
                </Link>
                <Link 
                  to="/lpg" 
                  className="text-gray-600 hover:text-brand-green py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  LPG
                </Link>
                <Link 
                  to="/hybryda" 
                  className="text-gray-600 hover:text-brand-green py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hybryda
                </Link>
                <Link 
                  to="/ekonomiczna-jazda" 
                  className="text-gray-600 hover:text-brand-green py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ekonomiczna Jazda
                </Link>
                <Link 
                  to="/polityka-prywatnosci" 
                  className="text-gray-600 hover:text-brand-green py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Polityka Prywatności
                </Link>
                <Link 
                  to="/zastrzezenie-prawne" 
                  className="text-gray-600 hover:text-brand-green py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Zastrzeżenie Prawne
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
      
      <main className="flex-grow">
        <div className="container mx-auto py-8 px-4 md:px-6">
          {children}
        </div>
      </main>
      
      <footer className="py-6 px-4 border-t bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-sm text-gray-600">
                © 2025 Kalkulator Spalania Paliwa
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link to="/cena-paliwa" className="text-sm text-gray-600 hover:text-brand-green">
                Cena Paliwa
              </Link>
              <Link to="/paliwa-premium" className="text-sm text-gray-600 hover:text-brand-green">
                Paliwa Premium
              </Link>
              <Link to="/diesel" className="text-sm text-gray-600 hover:text-brand-green">
                Diesel
              </Link>
              <Link to="/lpg" className="text-sm text-gray-600 hover:text-brand-green">
                LPG
              </Link>
              <Link to="/hybryda" className="text-sm text-gray-600 hover:text-brand-green">
                Hybryda
              </Link>
              <Link to="/ekonomiczna-jazda" className="text-sm text-gray-600 hover:text-brand-green">
                Ekonomiczna Jazda
              </Link>
              <Link to="/polityka-prywatnosci" className="text-sm text-gray-600 hover:text-brand-green">
                Polityka Prywatności
              </Link>
              <Link to="/zastrzezenie-prawne" className="text-sm text-gray-600 hover:text-brand-green">
                Zastrzeżenie Prawne
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
