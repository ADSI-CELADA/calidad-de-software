import React from 'react';

export default function PaginaConclusiones() {
  return (
    <div className="space-y-4 md:space-y-6 w-full">
      <div className="bg-gradient-to-r from-yellow-900 to-orange-900 border border-yellow-700 rounded-lg md:rounded-xl p-4 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-yellow-100">Conclusiones y Recomendaciones</h3>
        <p className="text-yellow-200 text-sm md:text-base">Resumen y próximos pasos</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
        <div className="bg-gradient-to-br from-green-900 to-emerald-900 border border-green-700 rounded-lg md:rounded-xl p-4 md:p-8">
          <h4 className="text-lg md:text-xl font-bold text-green-100 mb-3 md:mb-4">🎓 Para Estudiantes</h4>
          <ul className="space-y-2 text-green-200 text-xs md:text-sm">
            <li>✓ Aplica ISO/IEC 25010 desde inicio</li>
            <li>✓ Pruebas unitarias continuamente</li>
            <li>✓ Documenta tu código</li>
            <li>✓ Code reviews con compañeros</li>
            <li>✓ Análisis estático de código</li>
            <li>✓ Participa en auditorias</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-cyan-900 border border-blue-700 rounded-lg md:rounded-xl p-4 md:p-8">
          <h4 className="text-lg md:text-xl font-bold text-blue-100 mb-3 md:mb-4">🚀 Para Profesionales</h4>
          <ul className="space-y-2 text-blue-200 text-xs md:text-sm">
            <li>✓ Sistema aseguramiento formal</li>
            <li>✓ Capacita al equipo</li>
            <li>✓ Automatiza pruebas</li>
            <li>✓ Métricas claras y medibles</li>
            <li>✓ Auditorias periódicas</li>
            <li>✓ Certificaciones ISO/IEC</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 border border-purple-700 rounded-lg md:rounded-xl p-4 md:p-8">
        <h4 className="text-lg md:text-xl font-bold text-purple-100 mb-3 md:mb-4">📈 Pasos de Implementación</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          <div className="bg-purple-800 p-3 md:p-4 rounded-lg text-center">
            <p className="text-2xl md:text-3xl font-bold text-purple-200 mb-1">1</p>
            <p className="font-semibold text-purple-100 text-xs md:text-sm">Evaluación</p>
          </div>
          <div className="bg-purple-800 p-3 md:p-4 rounded-lg text-center">
            <p className="text-2xl md:text-3xl font-bold text-purple-200 mb-1">2</p>
            <p className="font-semibold text-purple-100 text-xs md:text-sm">Planificación</p>
          </div>
          <div className="bg-purple-800 p-3 md:p-4 rounded-lg text-center">
            <p className="text-2xl md:text-3xl font-bold text-purple-200 mb-1">3</p>
            <p className="font-semibold text-purple-100 text-xs md:text-sm">Implementación</p>
          </div>
          <div className="bg-purple-800 p-3 md:p-4 rounded-lg text-center">
            <p className="text-2xl md:text-3xl font-bold text-purple-200 mb-1">4</p>
            <p className="font-semibold text-purple-100 text-xs md:text-sm">Monitoreo</p>
          </div>
          <div className="bg-purple-800 p-3 md:p-4 rounded-lg text-center">
            <p className="text-2xl md:text-3xl font-bold text-purple-200 mb-1">5</p>
            <p className="font-semibold text-purple-100 text-xs md:text-sm">Mejora</p>
          </div>
          <div className="bg-purple-800 p-3 md:p-4 rounded-lg text-center">
            <p className="text-2xl md:text-3xl font-bold text-purple-200 mb-1">6</p>
            <p className="font-semibold text-purple-100 text-xs md:text-sm">Certificación</p>
          </div>
        </div>
      </div>
    </div>
  );
}