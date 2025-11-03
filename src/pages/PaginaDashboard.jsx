import React, { useContext } from 'react';
import { FactoresContext } from '../context/FactoresContext';
import { ProcesoContext } from '../context/ProcesoContext';
import { AuditoriaContext } from '../context/AuditoriaContext';

export default function PaginaDashboard() {
  const { calcularPuntajeGeneral } = useContext(FactoresContext);
  const { procesoCalidad } = useContext(ProcesoContext);
  const { porcentajeAuditoria } = useContext(AuditoriaContext);

  return (
    <div className="space-y-4 md:space-y-6 w-full">
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 border border-blue-700 rounded-lg md:rounded-xl p-4 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-blue-100">Bienvenido al Sistema</h3>
        <p className="text-blue-200 text-sm md:text-base">Basado en ISO/IEC 25010</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-xl border border-blue-700 shadow-lg hover:shadow-blue-500/30 transition-all transform hover:scale-105">
          <p className="text-blue-300 text-sm font-semibold mb-3">📊 Puntaje</p>
          <p className="text-5xl font-black text-blue-100">{calcularPuntajeGeneral()}</p>
          <p className="text-blue-400 text-xs mt-2">/100</p>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 p-6 rounded-xl border border-purple-700 shadow-lg hover:shadow-purple-500/30 transition-all transform hover:scale-105">
          <p className="text-purple-300 text-sm font-semibold mb-3">⭐ Factores</p>
          <p className="text-5xl font-black text-purple-100">8</p>
          <p className="text-purple-400 text-xs mt-2">ISO/IEC</p>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 p-6 rounded-xl border border-green-700 shadow-lg hover:shadow-green-500/30 transition-all transform hover:scale-105">
          <p className="text-green-300 text-sm font-semibold mb-3">🔄 Fases</p>
          <p className="text-5xl font-black text-green-100">{procesoCalidad.fase + 1}</p>
          <p className="text-green-400 text-xs mt-2">de 5</p>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 p-6 rounded-xl border border-orange-700 shadow-lg hover:shadow-orange-500/30 transition-all transform hover:scale-105">
          <p className="text-orange-300 text-sm font-semibold mb-3">✅ Auditoria</p>
          <p className="text-5xl font-black text-orange-100">{porcentajeAuditoria}%</p>
          <p className="text-orange-400 text-xs mt-2">Completado</p>
        </div>
      </div>
    </div>
  );
}