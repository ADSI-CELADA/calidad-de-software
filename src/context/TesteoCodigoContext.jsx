import React, { createContext, useState } from 'react';

export const TesteoCodigoContext = createContext();

export function TesteoCodigoProvider({ children }) {
  const [testeoDatos, setTesteoDatos] = useState({
    codigoInput: '',
    resultados: null
  });

  const evaluarCodigo = () => {
    if (!testeoDatos.codigoInput.trim()) {
      alert('Por favor ingresa código para evaluar');
      return;
    }

    const lineas = testeoDatos.codigoInput.split('\n').length;
    const complejidad = (testeoDatos.codigoInput.match(/if|for|while|switch|function|class/gi) || []).length;
    const comentarios = (testeoDatos.codigoInput.match(/\/\/|\/\*|\*\//gi) || []).length;
    const variables = (testeoDatos.codigoInput.match(/const |let |var |function /gi) || []).length;

    const puntajeMant = Math.min(100, (comentarios / lineas) * 150);
    const puntajeComp = Math.max(0, 100 - (complejidad * 3));
    const puntajeEst = variables > 0 ? 85 : 40;
    const puntajeFinal = Math.round((puntajeMant + puntajeComp + puntajeEst) / 3);

    setTesteoDatos({
      ...testeoDatos,
      resultados: {
        estado: puntajeFinal >= 75 ? 'Excelente' : puntajeFinal >= 60 ? 'Bueno' : 'Necesita Mejora',
        puntaje: puntajeFinal,
        color: puntajeFinal >= 75 ? 'green' : puntajeFinal >= 60 ? 'yellow' : 'red'
      }
    });
  };

  const value = {
    testeoDatos,
    setTesteoDatos,
    evaluarCodigo
  };

  return (
    <TesteoCodigoContext.Provider value={value}>{children}</TesteoCodigoContext.Provider>
  );
}