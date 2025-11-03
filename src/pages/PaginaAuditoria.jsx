import React, { useContext } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { AuditoriaContext } from '../context/AuditoriaContext';

export default function PaginaAuditoria() {
  const { auditoriaCheck, toggleCheck, porcentajeAuditoria } = useContext(AuditoriaContext);

  return (
    <div className="space-y-4 md:space-y-6 w-full">
      <div className="bg-gradient-to-r from-indigo-900 to-blue-900 border border-indigo-700 rounded-lg md:rounded-xl p-4 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-indigo-100">Checklist de Auditoria</h3>
        <p className="text-indigo-200 text-sm md:text-base">Verifica completitud de tu auditoria</p>
      </div>

      <div className="bg-gray-900 border border-gray-700 rounded-lg md:rounded-xl p-4 md:p-8">
        <div className="flex items-center justify-between mb-4 md:mb-8">
          <h4 className="text-lg md:text-xl font-bold text-gray-100">Items</h4>
          <div className="text-right">
            <p className={`text-2xl md:text-3xl font-bold ${porcentajeAuditoria >= 80 ? 'text-green-400' : porcentajeAuditoria >= 60 ? 'text-yellow-400' : 'text-red-400'}`}>
              {porcentajeAuditoria}%
            </p>
          </div>
        </div>

        <div className="mb-4 md:mb-6">
          <div className="bg-gray-800 rounded-full h-2 md:h-3 overflow-hidden border border-gray-700">
            <div
              className={`h-full transition-all duration-500 ${
                porcentajeAuditoria >= 80 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                porcentajeAuditoria >= 60 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                'bg-gradient-to-r from-red-500 to-pink-500'
              }`}
              style={{ width: `${porcentajeAuditoria}%` }}
            />
          </div>
        </div>

        <div className="space-y-2">
          {auditoriaCheck.checks.map((check) => (
            <div
              key={check.id}
              onClick={() => toggleCheck(check.id)}
              className={`p-3 md:p-4 rounded-lg border-2 cursor-pointer transition-all ${
                check.completado
                  ? 'bg-green-900 border-green-600'
                  : 'bg-gray-800 border-gray-700 hover:border-gray-500'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 md:w-6 md:h-6 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                  check.completado ? 'bg-green-600 border-green-400' : 'border-gray-500'
                }`}>
                  {check.completado && <CheckCircle2 className="w-4 h-4 text-white" />}
                </div>
                <p className={`font-semibold text-sm md:text-base ${check.completado ? 'text-green-200 line-through' : 'text-gray-200'}`}>
                  {check.nombre}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}