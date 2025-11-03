import React, { useContext } from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';
import { AppContext } from '../context/AppContext';

export function PaginaInicio() {
  const { setActiveSection } = useContext(AppContext);

  return (
    <div className="space-y-6 md:space-y-8 w-full">
      <div className="bg-gradient-to-br from-blue-950 via-purple-950 to-pink-950 border border-purple-700 rounded-2xl p-8 md:p-12 text-center shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
        <h1 className="text-4xl md:text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 leading-tight">
          Transformando la Excelencia en Programación
        </h1>
        <p className="text-base md:text-lg text-gray-300 mb-6 font-light">
          Domina los principios de <span className="text-blue-300 font-semibold">desarrollo profesional</span> y crea soluciones excepcionales
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={() => setActiveSection('dashboard')}
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 text-base"
          >
            📊 Explorar Dashboard
          </button>
          <button
            onClick={() => setActiveSection('factores')}
            className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 text-base"
          >
            ⭐ Ver 8 Factores
          </button>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 hover:border-blue-600 transition-all duration-300 shadow-lg">
        <h3 className="text-3xl font-bold mb-6 text-gray-100 flex items-center gap-3">
          <span className="text-3xl">💡</span> ¿Qué es la Excelencia en Desarrollo?
        </h3>
        <div className="space-y-4 text-gray-300 text-base leading-relaxed">
          <p>
            <strong className="text-blue-300">La excelencia en desarrollo de software</strong> representa el compromiso de cada programador con crear soluciones robustas, eficientes y duraderas que contribuyan significativamente al éxito del proyecto.
          </p>
          <p>
            Es la aplicación práctica de <strong className="text-purple-300">principios fundamentales</strong> que garantizan que cada línea de código sea correcta, mantenible, segura y performante.
          </p>
          <div className="bg-blue-900 bg-opacity-30 border-l-4 border-blue-500 p-4 rounded text-base mt-4">
            <p className="text-blue-200">
              <strong>🎯 Enfoque Integral:</strong> Va más allá de que "funcione" - busca que el código sea profesional, escalable y sostenible en el tiempo.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-indigo-900 to-blue-900 border border-indigo-700 rounded-xl p-8 shadow-lg hover:shadow-indigo-500/20 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="w-8 h-8 text-indigo-200" />
          <h3 className="text-3xl font-bold text-indigo-100">🎓 Formación Profesional</h3>
        </div>

        <div className="space-y-4">
          <div className="bg-indigo-800 bg-opacity-40 p-6 rounded-lg border border-indigo-700">
            <h4 className="text-xl font-bold text-indigo-100 mb-4">Construye Habilidades Valiosas</h4>
            <ul className="space-y-3 text-indigo-200">
              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">💻</span>
                <div>
                  <p className="font-bold text-indigo-100">Pensamiento Crítico Técnico</p>
                  <p className="text-sm text-indigo-300">Analiza problemas complejos y diseña soluciones elegantes</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">📊</span>
                <div>
                  <p className="font-bold text-indigo-100">Arquitectura de Sistemas</p>
                  <p className="text-sm text-indigo-300">Diseña aplicaciones escalables y mantenibles</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">🔍</span>
                <div>
                  <p className="font-bold text-indigo-100">Debugging Avanzado</p>
                  <p className="text-sm text-indigo-300">Identifica y resuelve problemas profundos eficientemente</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">🌍</span>
                <div>
                  <p className="font-bold text-indigo-100">Estándares Internacionales</p>
                  <p className="text-sm text-indigo-300">Domina criterios de excelencia reconocidos globalmente</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-900 to-emerald-900 border border-green-700 rounded-xl p-8 shadow-lg hover:shadow-green-500/20 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="w-8 h-8 text-green-200" />
          <h3 className="text-3xl font-bold text-green-100">💼 Impacto Empresarial</h3>
        </div>

        <div className="bg-green-800 bg-opacity-40 p-6 rounded-lg border border-green-700">
          <h4 className="text-xl font-bold text-green-100 mb-4">Ventajas Competitivas Reales</h4>
          <ul className="space-y-3 text-green-200">
            <li className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">💰</span>
              <div>
                <p className="font-bold text-green-100">Reducción Dramática de Costos</p>
                <p className="text-sm text-green-300">Menos bugs = menos mantenimiento emergente</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">⚡</span>
              <div>
                <p className="font-bold text-green-100">Time-to-Market Acelerado</p>
                <p className="text-sm text-green-300">Equipos más productivos, menos retrasos</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">🛡️</span>
              <div>
                <p className="font-bold text-green-100">Seguridad Garantizada</p>
                <p className="text-sm text-green-300">Protección proactiva de activos digitales</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">😊</span>
              <div>
                <p className="font-bold text-green-100">Satisfacción del Cliente</p>
                <p className="text-sm text-green-300">Productos confiables generan lealtad</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-xl p-8 text-center shadow-xl hover:shadow-pink-500/30 transition-all">
        <h3 className="text-3xl font-bold text-white mb-4">🚀 ¿Listo para Mejorar?</h3>
        <p className="text-white mb-6 text-lg font-light">Explora las herramientas interactivas y aprende a implementar calidad</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={() => setActiveSection('factores')}
            className="bg-white text-rose-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-base"
          >
            ⭐ Explorar 8 Factores
          </button>
          <button
            onClick={() => setActiveSection('codigo')}
            className="bg-white text-rose-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-base"
          >
            💻 Analizar Código
          </button>
        </div>
      </div>
    </div>
  );
}