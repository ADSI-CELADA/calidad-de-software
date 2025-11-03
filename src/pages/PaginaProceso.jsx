import React, { useContext } from 'react';
import { Play, Pause } from 'lucide-react';
import { ProcesoContext } from '../context/ProcesoContext';
import { procesosInfo } from '../data/procesosData';

export default function PaginaProceso() {
    const { procesoCalidad, fases, avanzarFase, retrocederFase } = useContext(ProcesoContext);

    return (
        <div className="space-y-4 md:space-y-6 w-full">
            <div className="bg-gradient-to-r from-orange-900 to-red-900 border border-orange-700 rounded-lg md:rounded-xl p-4 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-orange-100">Proceso de Calidad</h3>
                <p className="text-orange-200 text-sm md:text-base">5 Fases del ciclo de desarrollo</p>
            </div>

            <div className="bg-gray-900 border border-gray-700 rounded-lg md:rounded-xl p-4 md:p-8 space-y-4 md:space-y-6">
                <div className="mb-6 md:mb-12">
                    <div className="flex items-center justify-between mb-4 md:mb-8 gap-1 md:gap-0">
                        {fases.map((fase, idx) => (
                            <div key={idx} className="flex flex-col items-center flex-1">
                                <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center text-lg md:text-xl mb-2 transition-all flex-shrink-0 ${idx <= procesoCalidad.fase
                                        ? 'bg-gradient-to-br from-blue-500 to-purple-600 scale-110'
                                        : 'bg-gray-700'
                                    } border-2 ${idx <= procesoCalidad.fase ? 'border-blue-400' : 'border-gray-600'
                                    }`}>
                                    {fase.icon}
                                </div>
                                <p className="text-xs md:text-xs font-semibold text-gray-300 text-center leading-tight">{fase.nombre}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gray-800 rounded-full p-1 h-2 md:h-3">
                        <div
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full transition-all duration-500"
                            style={{ width: `${procesoCalidad.progreso}%` }}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
                    <div className="bg-gray-800 border border-gray-700 rounded-lg p-3 md:p-6">
                        <h4 className="text-base md:text-lg font-bold text-gray-100 mb-2 md:mb-3">Fase Actual</h4>
                        <p className="text-xl md:text-2xl font-bold text-blue-300 mb-2 md:mb-3">{fases[procesoCalidad.fase].nombre}</p>
                        <p className="text-gray-300 mb-3 md:mb-4 text-xs md:text-sm">{procesosInfo[procesoCalidad.fase].descripcion}</p>
                        <div className="flex gap-2">
                            <button
                                onClick={retrocederFase}
                                disabled={procesoCalidad.fase === 0}
                                className="flex-1 flex items-center justify-center gap-1 px-2 md:px-3 py-1 md:py-2 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 text-white rounded-lg transition text-xs md:text-sm"
                            >
                                <Pause className="w-3 h-3 md:w-4 md:h-4" /> Ant
                            </button>
                            <button
                                onClick={avanzarFase}
                                disabled={procesoCalidad.fase === fases.length - 1}
                                className="flex-1 flex items-center justify-center gap-1 px-2 md:px-3 py-1 md:py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 text-white rounded-lg transition text-xs md:text-sm"
                            >
                                <Play className="w-3 h-3 md:w-4 md:h-4" /> Sig
                            </button>
                        </div>
                    </div>

                    <div className="bg-gray-800 border border-gray-700 rounded-lg p-3 md:p-6">
                        <h4 className="text-base md:text-lg font-bold text-gray-100 mb-2 md:mb-3">Tareas</h4>
                        <ul className="space-y-1 md:space-y-2">
                            {procesosInfo[procesoCalidad.fase].tareas.map((tarea, i) => (
                                <li key={i} className="text-xs md:text-sm text-gray-300">✓ {tarea}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-gray-800 border border-gray-700 rounded-lg p-3 md:p-6">
                        <h4 className="text-base md:text-lg font-bold text-gray-100 mb-2 md:mb-3">Info</h4>
                        <div className="space-y-2 md:space-y-3 text-xs md:text-sm">
                            <div>
                                <p className="text-gray-400">Beneficio:</p>
                                <p className="text-gray-200 font-semibold">{procesosInfo[procesoCalidad.fase].beneficios}</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Duración:</p>
                                <p className="text-gray-200 font-semibold">{procesosInfo[procesoCalidad.fase].duracion}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}