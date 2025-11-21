import React from 'react';

interface NavPillProps {
  label: string;
  active: boolean;
  onClick: () => void;
  colorClass: string;
}

export const NavPill: React.FC<NavPillProps> = ({ label, active, onClick, colorClass }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-3 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-md
        ${active ? `${colorClass} text-gray-800 scale-110 ring-4 ring-white` : 'bg-white text-gray-500 hover:bg-gray-50'}
      `}
    >
      {label}
    </button>
  );
};
