import React, { createContext, useState } from 'react';

export const FactoresContext = createContext();

export function FactoresProvider({ children }) {
  const [factoresScore, setFactoresScore] = useState({
    solidez: 75,
    confiabilidad: 82,
    adaptabilidad: 68,
    evolucion: 80,
    proteccion: 85,
    rendimiento: 70,
    experiencia: 78,
    integracion: 72
  });

  const calcularPuntajeGeneral = () => {
    const valores = Object.values(factoresScore);
    return Math.round(valores.reduce((a, b) => a + b, 0) / valores.length);
  };

  const value = {
    factoresScore,
    setFactoresScore,
    calcularPuntajeGeneral
  };

  return (
    <FactoresContext.Provider value={value}>{children}</FactoresContext.Provider>
  );
}