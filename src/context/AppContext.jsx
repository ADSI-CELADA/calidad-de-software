import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [activeSection, setActiveSection] = useState('inicio');
  const [expandedInfo, setExpandedInfo] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1024);

  const toggleInfo = (id) => {
    setExpandedInfo({
      ...expandedInfo,
      [id]: !expandedInfo[id]
    });
  };

  const value = {
    activeSection,
    setActiveSection,
    expandedInfo,
    toggleInfo,
    mobileMenuOpen,
    setMobileMenuOpen,
    sidebarOpen,
    setSidebarOpen
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}