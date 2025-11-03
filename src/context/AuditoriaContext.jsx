import React, { createContext, useState } from 'react';

export const AuditoriaContext = createContext();

export function AuditoriaProvider({ children }) {
  const [auditoriaCheck, setAuditoriaCheck] = useState({
    checks: [
      { id: 1, nombre: 'Documentación', completado: true },
      { id: 2, nombre: 'Pruebas Unitarias', completado: true },
      { id: 3, nombre: 'Análisis Seguridad', completado: false },
      { id: 4, nombre: 'Optimización', completado: true },
      { id: 5, nombre: 'Revisión Código', completado: false },
      { id: 6, nombre: 'Pruebas Integración', completado: true }
    ]
  });

  const toggleCheck = (id) => {
    setAuditoriaCheck({
      checks: auditoriaCheck.checks.map(check =>
        check.id === id ? { ...check, completado: !check.completado } : check
      )
    });
  };

  const porcentajeAuditoria = Math.round(
    (auditoriaCheck.checks.filter(c => c.completado).length / auditoriaCheck.checks.length) * 100
  );

  const value = {
    auditoriaCheck,
    setAuditoriaCheck,
    toggleCheck,
    porcentajeAuditoria
  };

  return (
    <AuditoriaContext.Provider value={value}>{children}</AuditoriaContext.Provider>
  );
}