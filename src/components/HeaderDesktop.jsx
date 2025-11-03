import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { getMenuItems } from '../data/menuData';

export function HeaderDesktop() {
  const { activeSection } = useContext(AppContext);
  const menuItems = getMenuItems();

  return (
    <div className="hidden md:block bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700 p-4 sticky top-0 z-30">
      <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        {menuItems.find(m => m.id === activeSection)?.label}
      </h2>
    </div>
  );
}