
import React from 'react';
import { Fuel } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <Fuel className="h-8 w-8 text-brand-green" />
        <div className="absolute -top-1 -right-1">
          <div className="w-3 h-3 rounded-full bg-brand-orange" />
        </div>
      </div>
      <div className="font-bold text-xl">
        <span className="text-brand-green">Kalkulator</span>
        <span className="text-brand-orange">Paliwa</span>
      </div>
    </Link>
  );
};

export default Logo;
