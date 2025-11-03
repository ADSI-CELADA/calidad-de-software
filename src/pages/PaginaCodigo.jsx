import React, { useContext } from 'react';
import { Play } from 'lucide-react';
import { TesteoCodigoContext } from '../context/TesteoCodigoContext';

export default function PaginaCodigo() {
  const { testeoDatos, setTesteoDatos, evaluarCodigo } = useContext(TesteoCodigoContext);

  return (
    <div className="space-y-4 md:space-y-6 w-full">
      <div className="bg-gradient-to-r from-green-900 to-emerald-900 border border-green-700 rounded-lg md:rounded-xl p-4 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-green-100">Analizador de Código</h3>
        <p className="text-green-200 text-sm md:text-base">Evaluación automática de calidad</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-gray-900 border border-gray-700 rounded-lg md:rounded-xl p-4 md:p-6">
          <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-gray-100">📝 Tu Código</h4>
          <textarea
            value={testeoDatos.codigoInput}
            onChange={(e) => setTesteoDatos({...testeoDatos, codigoInput: e.target.value})}
            placeholder="Pega tu código..."
            className="w-full h-48 md:h-64 bg-gray-800 text-gray-100 border border-gray-600 rounded-lg p-3 md:p-4 font-mono text-xs md:text-sm focus:border-blue-500 focus:outline-none resize-none"
          />
          <button
            onClick={evaluarCodigo}
            className="mt-3 md:mt-4 w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-2 md:py-3 rounded-lg transition flex items-center justify-center gap-2 text-sm md:text-base"
          >
            <Play className="w-4 h-4" /> Evaluar
          </button>
        </div>

        <div className="space-y-3 md:space-y-4">
          {testeoDatos.resultados && (
            <div className="bg-gray-900 border border-gray-700 rounded-lg md:rounded-xl p-4 md:p-6">
              <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-gray-100">📊 Resultados</h4>
              
              <div className={`p-4 rounded-lg mb-3 md:mb-4 border-2 ${
                testeoDatos.resultados.color === 'green' ? 'bg-green-900 border-green-600' :
                testeoDatos.resultados.color === 'yellow' ? 'bg-yellow-900 border-yellow-600' :
                'bg-red-900 border-red-600'
              }`}>
                <p className={`text-xs md:text-sm mb-1 ${
                  testeoDatos.resultados.color === 'green' ? 'text-green-300' :
                  testeoDatos.resultados.color === 'yellow' ? 'text-yellow-300' :
                  'text-red-300'
                }`}>Estado</p>
                <p className={`text-2xl md:text-3xl font-bold ${
                  testeoDatos.resultados.color === 'green' ? 'text-green-300' :
                  testeoDatos.resultados.color === 'yellow' ? 'text-yellow-300' :
                  'text-red-300'
                }`}>{testeoDatos.resultados.estado}</p>
                <p className={`text-2xl md:text-3xl font-bold mt-2 ${
                  testeoDatos.resultados.color === 'green' ? 'text-green-300' :
                  testeoDatos.resultados.color === 'yellow' ? 'text-yellow-300' :
                  'text-red-300'
                }`}>{testeoDatos.resultados.puntaje}/100</p>
              </div>
            </div>
          )}

          <div className="bg-gray-900 border border-gray-700 rounded-lg md:rounded-xl p-4 md:p-6">
            <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-gray-100">💡 Se Analiza</h4>
            <div className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-300">
              <p>✓ <strong>Complejidad</strong></p>
              <p>✓ <strong>Mantenibilidad</strong></p>
              <p>✓ <strong>Estructura</strong></p>
              <p>✓ <strong>Legibilidad</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}