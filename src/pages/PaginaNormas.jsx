import React, { useContext } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { AppContext } from '../context/AppContext';
import { normasInfo } from '../data/normasData';

export default function PaginaNormas() {
  const { expandedInfo, toggleInfo } = useContext(AppContext);

  return (
    <div className="space-y-4 md:space-y-6 w-full">
      <div className="bg-gradient-to-r from-teal-900 to-green-900 border border-teal-700 rounded-lg md:rounded-xl p-4 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-teal-100">Normas ISO de Calidad</h3>
        <p className="text-teal-200 text-sm md:text-base">Estándares internacionales</p>
      </div>

      <div className="space-y-3 md:space-y-4">
        {normasInfo.map((norma, idx) => (
          <div key={idx} className="bg-gray-900 border border-gray-700 rounded-lg md:rounded-xl overflow-hidden">
            <button
              onClick={() => toggleInfo(`norma-${idx}`)}
              className="w-full p-3 md:p-6 flex items-center justify-between hover:bg-gray-850 transition"
            >
              <div className="text-left min-w-0">
                <p className="text-teal-400 font-bold text-sm md:text-lg">{norma.código}</p>
                <p className="text-gray-200 font-semibold text-xs md:text-base">{norma.titulo}</p>
                <p className="text-gray-400 text-xs">Año: {norma.año}</p>
              </div>
              {expandedInfo[`norma-${idx}`] ? <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
            </button>

            {expandedInfo[`norma-${idx}`] && (
              <div className="border-t border-gray-700 p-4 md:p-6 bg-gray-800 space-y-3 md:space-y-4 text-xs md:text-sm">
                <div>
                  <p className="font-bold text-gray-100 mb-1 md:mb-2">Descripción:</p>
                  <p className="text-gray-300">{norma.descripcion}</p>
                </div>

                <div>
                  <p className="font-bold text-gray-100 mb-1 md:mb-2">Características:</p>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {norma.caracteristicas.map((car, i) => (
                      <span key={i} className="bg-teal-900 text-teal-200 px-2 md:px-3 py-1 rounded-full text-xs">
                        {car}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-bold text-gray-100 mb-1 md:mb-2">Beneficios:</p>
                  <ul className="space-y-1">
                    {norma.beneficios.map((ben, i) => (
                      <li key={i} className="text-gray-300">✓ {ben}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}