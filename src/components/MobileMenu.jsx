import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { getMenuItems } from '../data/menuData';

export function MobileMenu() {
  const { mobileMenuOpen, setMobileMenuOpen, activeSection, setActiveSection } = useContext(AppContext);
  const menuItems = getMenuItems();

  if (!mobileMenuOpen) return null;

  return (
    <>
      <div className="md:hidden fixed inset-0 top-14 bg-black bg-opacity-50 z-30" onClick={() => setMobileMenuOpen(false)}>
        <div className="bg-gray-900 border-r border-gray-700 w-64 h-full p-4 space-y-2 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm ${
                activeSection === item.id
                  ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700'
              }`}
            >
              {item.icon}
              <span className="font-semibold">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}