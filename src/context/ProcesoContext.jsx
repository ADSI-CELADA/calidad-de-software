import React, { createContext, useState } from 'react';

export const ProcesoContext = createContext();

export function ProcesoProvider({ children }) {
  const [procesoCalidad, setProcesoCalidad] = useState({ fase: 0, progreso: 0 });

  const fases = [
    { nombre: 'Planificación', icon: '📋', progreso: 0 },
    { nombre: 'Análisis', icon: '🔍', progreso: 25 },
    { nombre: 'Desarrollo', icon: '💻', progreso: 50 },
    { nombre: 'Pruebas', icon: '✅', progreso: 75 },
    { nombre: 'Implementación', icon: '🚀', progreso: 100 }
  ];

  const avanzarFase = () => {
    if (procesoCalidad.fase < fases.length - 1) {
      const nuevoIndice = procesoCalidad.fase + 1;
      setProcesoCalidad({ fase: nuevoIndice, progreso: fases[nuevoIndice].progreso });
    }
  };

  const retrocederFase = () => {
    if (procesoCalidad.fase > 0) {
      const nuevoIndice = procesoCalidad.fase - 1;
      setProcesoCalidad({ fase: nuevoIndice, progreso: fases[nuevoIndice].progreso });
    }
  };

  const value = {
    procesoCalidad,
    setProcesoCalidad,
    fases,
    avanzarFase,
    retrocederFase
  };

  return (
    <ProcesoContext.Provider value={value}>{children}</ProcesoContext.Provider>
  );
}