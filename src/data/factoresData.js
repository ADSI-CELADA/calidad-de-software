export const factoresInfo = {
  funcionalidad: {
    nombre: 'Funcionalidad',
    icon: '✓',
    descripcion: 'Capacidad del software para proporcionar funciones que satisfagan necesidades.',
    detalles: 'Incluye correctitud, completitud, y aptitud para el propósito.',
    ejemplos: [
      'App bancaria: transferencias, saldo, pago de servicios',
      'Sistema procesa todas las operaciones correctamente',
      'Todas las funciones se comportan según especificado'
    ],
    metricas: ['Cobertura de requisitos', 'Defectos', 'Pruebas'],
    mejora: ['Pruebas exhaustivas', 'Validación robusta', 'Testing usuario']
  },
  fiabilidad: {
    nombre: 'Fiabilidad',
    icon: '❤️',
    descripcion: 'Capacidad para desempeñar funciones bajo condiciones determinadas.',
    detalles: 'Mide confiabilidad bajo condiciones normales y estrés.',
    ejemplos: [
      'Servidor web: 99.9% uptime',
      'Sistema se recupera de fallos automáticamente',
      'Mantiene estabilidad bajo carga máxima'
    ],
    metricas: ['Disponibilidad', 'MTBF', 'Tasa fallos'],
    mejora: ['Testing carga', 'Redundancia', 'Monitoreo 24/7']
  },
  portabilidad: {
    nombre: 'Portabilidad',
    icon: '💻',
    descripcion: 'Capacidad de ser transferido a diferentes entornos.',
    detalles: 'Mide adaptación a diferentes plataformas y SO.',
    ejemplos: [
      'Funciona en Windows, Mac y Linux',
      'Código se compila sin modificaciones',
      'Base de datos compatible con PostgreSQL y MySQL'
    ],
    metricas: ['Independencia plataforma', 'Instalación', 'Compatibilidad'],
    mejora: ['Frameworks multiplataforma', 'Abstracción hardware', 'Testing multi-OS']
  },
  mantenibilidad: {
    nombre: 'Mantenibilidad',
    icon: '⚙️',
    descripcion: 'Facilidad para modificar el sistema.',
    detalles: 'Incluye modularidad, reusabilidad y testabilidad.',
    ejemplos: [
      'Código bien documentado, fácil entendimiento',
      'Funciones pequeñas y enfocadas',
      'Cambios en módulo no afectan otros'
    ],
    metricas: ['Complejidad ciclomática', 'Tamaño funciones', 'Comentarios'],
    mejora: ['Code reviews', 'Documentación clara', 'Refactoring regular']
  },
  seguridad: {
    nombre: 'Seguridad',
    icon: '🛡️',
    descripcion: 'Protección de información y datos.',
    detalles: 'Incluye confidencialidad, integridad y disponibilidad.',
    ejemplos: [
      'Datos encriptados con AES-256',
      'Autenticación de dos factores',
      'Auditoría de accesos registrada'
    ],
    metricas: ['Vulnerabilidades', 'Penetration testing', 'OWASP'],
    mejora: ['Encriptación datos', 'Validación entrada', 'Auditoría']
  },
  eficiencia: {
    nombre: 'Eficiencia',
    icon: '⏱️',
    descripcion: 'Rendimiento en relación a recursos utilizados.',
    detalles: 'Mide velocidad, memoria y ancho de banda.',
    ejemplos: [
      'Búsqueda: resultados en <1 segundo',
      'Aplicación usa <100MB de RAM',
      'Procesa 1000 transacciones/segundo'
    ],
    metricas: ['Tiempo respuesta', 'Uso memoria', 'CPU'],
    mejora: ['Optimizar algoritmos', 'Caching', 'Profiling']
  },
  usabilidad: {
    nombre: 'Usabilidad',
    icon: '👤',
    descripcion: 'Facilidad para que usuarios utilicen el software.',
    detalles: 'Incluye comprensibilidad, aprendibilidad y operabilidad.',
    ejemplos: [
      'Interfaz intuitiva sin capacitación',
      'Flujo de trabajo natural y lógico',
      'Mensajes de error claros y útiles'
    ],
    metricas: ['Satisfacción usuario', 'Tasa error', 'Tiempo aprendizaje'],
    mejora: ['Testing usuarios', 'UX/UI design', 'Accesibilidad WCAG']
  },
  compatibilidad: {
    nombre: 'Compatibilidad',
    icon: '🔄',
    descripcion: 'Capacidad de intercambiar información con otros sistemas.',
    detalles: 'Incluye interoperabilidad y estándares.',
    ejemplos: [
      'Se integra con sistemas ERP existentes',
      'APIs REST estándar para terceros',
      'Compatible con estándares ISO'
    ],
    metricas: ['APIs documentadas', 'Integraciones', 'Estándares'],
    mejora: ['Documentar APIs', 'Formatos estándar', 'Testing integración']
  }
};