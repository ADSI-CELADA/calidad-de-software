import React, { useContext } from 'react';
import { FactoresContext } from '../context/FactoresContext';
import { factoresInfo } from '../data/factoresData';
import { TarjetaInfo } from '../components/TarjetaInfo';

export default function PaginaFactores() {
  const { factoresScore, setFactoresScore, calcularPuntajeGeneral } = useContext(FactoresContext);

  return (
    <div className="space-y-4 md:space-y-6 w-full">
      <div className="bg-gradient-to-r from-purple-900 to-pink-900 border border-purple-700 rounded-lg md:rounded-xl p-4 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-purple-100">8 Factores ISO/IEC 25010</h3>
        <p className="text-purple-200 text-sm md:text-base">Ajusta y aprende sobre cada característica</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <div className="space-y-3 md:space-y-4">
          {Object.entries(factoresScore).map(([factor, valor]) => (
            <div key={factor} className="bg-gray-800 p-3 md:p-4 rounded-lg border border-gray-700">
              <div className="flex justify-between items-center mb-2">
                <label className="capitalize font-semibold text-gray-200 text-xs md:text-base">{factor}</label>
                <span className={`text-xs md:text-sm font-bold px-2 py-1 rounded ${
                  valor >= 80 ? 'bg-green-900 text-green-300' :
                  valor >= 60 ? 'bg-yellow-900 text-yellow-300' :
                  'bg-red-900 text-red-300'
                }`}>{valor}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={valor}
                onChange={(e) => setFactoresScore({...factoresScore, [factor]: parseInt(e.target.value)})}
                className="w-full h-2 bg-gray-700 rounded-lg cursor-pointer accent-blue-500"
              />
            </div>
          ))}
        </div>

        <div className="space-y-3 md:space-y-4 max-h-full md:max-h-full overflow-y-auto">
          {Object.entries(factoresInfo).map(([key, info]) => (
            <TarjetaInfo
              key={key}
              id={`factor-${key}`}
              titulo={info.nombre}
              icon={info.icon}
              contenido={
                <div className="space-y-3 text-xs md:text-sm">
                  <p className="text-gray-300"><strong className="text-gray-100">Descripción:</strong> {info.descripcion}</p>
                  <div>
                    <p className="font-semibold text-gray-100 mb-1">Ejemplos:</p>
                    <ul className="space-y-1">
                      {info.ejemplos.map((ej, i) => (
                        <li key={i} className="text-gray-300">• {ej}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              }
            />
          ))}
        </div>
      </div>

      <div className="p-4 md:p-6 bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg border border-blue-700">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-gray-300 text-xs md:text-sm mb-1">Puntuación General</p>
            <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
              {calcularPuntajeGeneral()}
            </p>
          </div>
          <div className="text-right">
            <p className={`text-xl md:text-2xl font-bold ${
              calcularPuntajeGeneral() >= 80 ? 'text-green-400' :
              calcularPuntajeGeneral() >= 60 ? 'text-yellow-400' :
              'text-red-400'
            }`}>
              {calcularPuntajeGeneral() >= 80 ? '✅ Excelente' :
               calcularPuntajeGeneral() >= 60 ? '⚠️ Bueno' :
               '❌ Necesita Mejora'}
            </p>
            <p className="text-gray-400 text-xs md:text-sm mt-1">/100 puntos</p>
          </div>
        </div>
      </div>
    </div>
  );
}