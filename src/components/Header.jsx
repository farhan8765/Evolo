import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <header className="w-full bg-gradient-to-r from-[#170F77] via-[#2B1BDD] to-[#170F77] px-6 py-3 flex items-center justify-between">
      {/* Text Content - Centered with equal gap */}
      <div className="flex items-center justify-center flex-1">
        <p className="text-white text-[12px] leading-tight text-center">
          Lorem ipsum dolor sit amet. consectetur{' '}
          <span className="text-[#F5780A]">adipiscing</span>{' '}
          elit.
        </p>
      </div>

      {/* Close Icon - Right side with equal spacing */}
      <div 
        onClick={handleClose}
        className="text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer flex-shrink-0 pr-20"
      >
        <FaTimes size={16} />
      </div>
    </header>
  );
};

export default Header;