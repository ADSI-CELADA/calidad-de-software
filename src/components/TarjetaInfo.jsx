import React, { useContext } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { AppContext } from '../context/AppContext';

export function TarjetaInfo({ id, titulo, contenido, icon }) {
  const { expandedInfo, toggleInfo } = useContext(AppContext);

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-blue-500 transition">
      <button
        onClick={() => toggleInfo(id)}
        className="w-full p-3 md:p-4 flex items-center justify-between hover:bg-gray-750 transition"
      >
        <div className="flex items-center gap-2 md:gap-3 min-w-0">
          <span className="text-xl md:text-2xl flex-shrink-0">{icon}</span>
          <h4 className="font-bold text-gray-100 text-left text-sm md:text-base truncate">{titulo}</h4>
        </div>
        {expandedInfo[id] ? <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
      </button>
      {expandedInfo[id] && (
        <div className="border-t border-gray-700 p-3 md:p-4 bg-gray-750 text-xs md:text-sm">
          {contenido}
        </div>
      )}
    </div>
  );
}