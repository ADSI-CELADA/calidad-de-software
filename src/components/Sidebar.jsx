import React, { useContext } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { AppContext } from '../context/AppContext';
import { getMenuItems } from '../data/menuData';

export function Sidebar() {
  const { sidebarOpen, setSidebarOpen, activeSection, setActiveSection, setMobileMenuOpen } = useContext(AppContext);
  const menuItems = getMenuItems();

  return (
    <div className={`${sidebarOpen ? 'w-56 md:w-64' : 'w-16 md:w-20'} bg-gradient-to-b from-gray-900 via-gray-850 to-gray-900 border-r border-gray-700 transition-all duration-300 flex flex-col hidden md:flex fixed md:static h-screen z-40 md:z-auto shadow-2xl`}>
      <div className="p-3 md:p-4 border-b border-gray-700 flex items-center justify-between">
        {sidebarOpen && (
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <h1 className="font-bold text-base md:text-lg truncate"> Software Quality </h1>
          </div>
        )}
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-700 rounded-lg flex-shrink-0">
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <nav className="flex-1 p-2 md:p-4 space-y-1 md:space-y-2 overflow-y-auto">
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => {
              setActiveSection(item.id);
              setMobileMenuOpen(false);
            }}
            className={`w-full flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 rounded-lg transition-all text-sm md:text-base ${activeSection === item.id
                ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700'
              }`}
            title={!sidebarOpen ? item.label : ''}
          >
            {item.icon}
            {sidebarOpen && <span className="font-semibold truncate">{item.label}</span>}
          </button>
        ))}
      </nav>

      {sidebarOpen && (
        <div className="p-3 md:p-4 border-t border-gray-700">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-3 text-center text-xs md:text-sm">
            <p className="font-semibold mb-1">ISO/IEC 25010</p>
            <p className="text-gray-200 text-xs">Calidad Software</p>
          </div>
        </div>
      )}
    </div>
  );
}