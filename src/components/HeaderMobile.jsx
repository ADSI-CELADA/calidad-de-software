import React, { useContext } from 'react';
import { Menu } from 'lucide-react';
import { AppContext } from '../context/AppContext';
import { getMenuItems } from '../data/menuData';

export function HeaderMobile() {
  const { mobileMenuOpen, setMobileMenuOpen, activeSection } = useContext(AppContext);
  const menuItems = getMenuItems();

  return (
    <div className="md:hidden fixed top-0 left-0 right-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700 p-4 z-50 flex items-center justify-between shadow-lg">
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="p-2 hover:bg-gray-700 rounded-lg transition"
      >
        <Menu className="w-6 h-6 text-blue-400" />
      </button>
      <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 flex-1 text-center">
        {menuItems.find(m => m.id === activeSection)?.label}
      </h2>
      <div className="w-10" />
    </div>
  );
}