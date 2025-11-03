# 🎓 CalidadSoft - Sistema de Calidad de Software

> Aplicación interactiva para evaluar y mejorar la calidad del software basada en ISO/IEC 25010

![React](https://img.shields.io/badge/React-18+-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📋 Tabla de Contenidos

- [Características](#características)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Cómo Usar](#cómo-usar)
- [Arquitectura](#arquitectura)
- [Componentes Principales](#componentes-principales)
- [API y Contextos](#api-y-contextos)
- [Guía de Desarrollo](#guía-de-desarrollo)
- [Problemas Comunes](#problemas-comunes)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

---

## ✨ Características

### 📊 Dashboard Interactivo
- Visualización de métricas en tiempo real
- Puntuaciones consolidadas de calidad
- Seguimiento del progreso

### ⭐ 8 Factores de Calidad ISO/IEC 25010
- **Funcionalidad**: Capacidad de proporcionar funciones correctas
- **Fiabilidad**: Desempeño bajo condiciones determinadas
- **Portabilidad**: Transferencia a diferentes entornos
- **Mantenibilidad**: Facilidad para modificar el sistema
- **Seguridad**: Protección de información y datos
- **Eficiencia**: Rendimiento vs recursos utilizados
- **Usabilidad**: Facilidad de uso para usuarios
- **Compatibilidad**: Intercambio de información con otros sistemas

### 💻 Analizador de Código
- Evaluación automática de calidad
- Análisis de complejidad
- Métricas de mantenibilidad
- Evaluación de estructura

### 🔄 Proceso de 5 Fases
1. **Planificación** - Definir objetivos y estrategia
2. **Análisis** - Revisar especificaciones
3. **Desarrollo** - Implementar con estándares
4. **Pruebas** - Pruebas exhaustivas
5. **Implementación** - Desplegar en producción

### ✅ Checklist de Auditoría
- Documentación
- Pruebas Unitarias
- Análisis de Seguridad
- Optimización
- Revisión de Código
- Pruebas de Integración

### 📚 Normas ISO de Referencia
- ISO/IEC 25010 - Modelo de Calidad Software
- ISO/IEC 25040 - Evaluación de Calidad
- ISO/IEC 12207 - Ciclo de Vida Software
- ISO 9001 - Gestión de Calidad
- ISO/IEC 27001 - Seguridad de Información
- CMMI v2.0 - Madurez y Capacidad

### 📱 Diseño Responsive
- Totalmente adaptado a dispositivos móviles
- Interfaz fluida en todos los tamaños
- Menú móvil con navegación intuitiva

---

## 🔧 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** v18 o superior
- **npm** v9 o superior
- **React** v18+
- **Tailwind CSS** v3+

### Verificar instalación
```bash
node --version    # v18.0.0 o superior
npm --version     # v9.0.0 o superior
```

---

## 📦 Instalación

### 1. Clonar o descargar el proyecto
```bash
# Opción 1: Clonar (si está en un repositorio)
git clone https://github.com/tu-usuario/CalidadSoft.git
cd CalidadSoft

# Opción 2: Extraer de archivo
unzip CalidadSoft.zip
cd CalidadSoft
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Verificar instalación de paquetes específicos
```bash
npm install react@18
npm install tailwindcss
npm install lucide-react
```

### 4. Iniciar el servidor de desarrollo
```bash
npm run dev
```

### 5. Abrir en el navegador
```
http://localhost:5173
```

---

## 📁 Estructura del Proyecto

```
CalidadSoft/
│
├── 🔧 context/                 (Estado Global con Context API)
│   ├── AppContext.jsx          → Navegación y UI
│   ├── FactoresContext.jsx     → Puntuaciones de 8 factores
│   ├── ProcesoContext.jsx      → Control de 5 fases
│   ├── AuditoriaContext.jsx    → Checklist de auditoría
│   └── TesteoCodigoContext.jsx → Análisis de código
│
├── 📊 data/                    (Datos Estáticos)
│   ├── factoresData.js         → Información de 8 factores
│   ├── procesosData.js         → Información de 5 fases
│   ├── normasData.js           → 6 normas ISO
│   └── menuData.js             → Configuración de menú
│
├── 🎨 components/              (Componentes Reutilizables)
│   ├── TarjetaInfo.jsx         → Tarjeta expandible genérica
│   ├── Sidebar.jsx             → Barra lateral de navegación
│   ├── HeaderDesktop.jsx       → Header para pantalla grande
│   ├── HeaderMobile.jsx        → Header para dispositivos móviles
│   └── MobileMenu.jsx          → Menú desplegable móvil
│
├── 📄 pages/                   (Páginas Principales)
│   ├── PaginaInicio.jsx        → Bienvenida y presentación
│   ├── PaginaDashboard.jsx     → Métricas y KPIs
│   ├── PaginaFactores.jsx      → 8 Factores con sliders
│   ├── PaginaCodigo.jsx        → Analizador de código
│   ├── PaginaProceso.jsx       → Control de 5 fases
│   ├── PaginaAuditoria.jsx     → Checklist interactivo
│   ├── PaginaNormas.jsx        → Normas ISO expandibles
│   └── PaginaConclusiones.jsx  → Conclusiones y recomendaciones
```

---

## 🚀 Cómo Usar

### Navegación Principal

La aplicación cuenta con 8 secciones principales:

#### 1. **Inicio** 🌟
- Bienvenida y presentación del proyecto
- Información sobre excelencia en desarrollo
- Formación profesional
- Impacto empresarial
- Accesos rápidos a otras secciones

#### 2. **Dashboard** 📊
- Vista general de métricas
- Puntaje general de calidad
- Número de factores (8)
- Fase actual del proceso
- Porcentaje de auditoría completada

#### 3. **8 Factores** ⭐
- Ajusta los 8 factores de calidad
- Deslizadores interactivos (0-100%)
- Información detallada de cada factor
- Cálculo automático de puntaje general
- Clasificación: Excelente / Bueno / Necesita Mejora

#### 4. **Código** 💻
- Pega tu código en el textarea
- Click en "Evaluar"
- Recibe puntuación automática basada en:
  - Complejidad del código
  - Mantenibilidad
  - Estructura
  - Legibilidad

#### 5. **Proceso** 🔄
- Visualiza las 5 fases del desarrollo
- Navega entre fases con botones
- Ve tareas específicas de cada fase
- Información de duración y beneficios

#### 6. **Auditoría** ✅
- Checklist de 6 items
- Marca/desmarca items completados
- Visualiza porcentaje de avance
- Progreso visual con barra

#### 7. **Normas** 📚
- 6 normas ISO internacionales
- Expande cada norma para más detalles
- Información sobre beneficios y características
- Aplicación práctica de cada norma

#### 8. **Conclusiones** 📈
- Recomendaciones para estudiantes
- Recomendaciones para profesionales
- Pasos de implementación (6 pasos)
- Resumen del proyecto

---

## 🏗️ Arquitectura

### Patrón: Context API + Componentes Funcionales

```
App.jsx (Providers)
  ↓
AppProvider (Navegación)
  ↓
FactoresProvider (Estado de factores)
  ↓
ProcesoProvider (Estado del proceso)
  ↓
AuditoriaProvider (Estado de auditoría)
  ↓
TesteoCodigoProvider (Estado de análisis)
  ↓
AppContent (Componentes principales)
```

### Flujo de Datos

```
Usuario interactúa
        ↓
    Componente (Page)
        ↓
    Context Hook
        ↓
    Actualiza Estado
        ↓
    Re-renderiza UI
        ↓
    Interfaz actualizada
```

---

## 🎯 Componentes Principales

### AppContext
Gestiona la navegación y estado global de la UI.

```javascript
const { activeSection, setActiveSection, sidebarOpen, setSidebarOpen } = useContext(AppContext);
```

### FactoresContext
Gestiona las puntuaciones de los 8 factores.

```javascript
const { factoresScore, setFactoresScore, calcularPuntajeGeneral } = useContext(FactoresContext);
```

### ProcesoContext
Gestiona las 5 fases del proceso.

```javascript
const { procesoCalidad, fases, avanzarFase, retrocederFase } = useContext(ProcesoContext);
```

### AuditoriaContext
Gestiona el checklist de auditoría.

```javascript
const { auditoriaCheck, toggleCheck, porcentajeAuditoria } = useContext(AuditoriaContext);
```

### TesteoCodigoContext
Gestiona el análisis de código.

```javascript
const { testeoDatos, setTesteoDatos, evaluarCodigo } = useContext(TesteoCodigoContext);
```

---

## 📡 API y Contextos

### Acceder a un Contexto

```javascript
import { useContext } from 'react';
import { FactoresContext } from '../context/FactoresContext';

export function MiComponente() {
  const { factoresScore, calcularPuntajeGeneral } = useContext(FactoresContext);
  
  return <div>Puntaje: {calcularPuntajeGeneral()}</div>;
}
```

### Funciones Principales

#### FactoresContext
```javascript
calcularPuntajeGeneral()  // Retorna número 0-100
setFactoresScore({...})   // Actualiza puntuaciones
```

#### ProcesoContext
```javascript
avanzarFase()   // Ir a siguiente fase
retrocederFase() // Ir a fase anterior
```

#### AuditoriaContext
```javascript
toggleCheck(id)     // Marcar/desmarcar item
porcentajeAuditoria // Porcentaje completado
```

#### TesteoCodigoContext
```javascript
evaluarCodigo()     // Analizar código ingresado
```

---

## 👨‍💻 Guía de Desarrollo

### Crear una Nueva Página

1. **Crear archivo** en `pages/PaginaNueva.jsx`:

```javascript
import React, { useContext } from 'react';
import { FactoresContext } from '../context/FactoresContext';

export default function PaginaNueva() {
  const { calcularPuntajeGeneral } = useContext(FactoresContext);

  return (
    <div className="space-y-6">
      <div className="bg-blue-900 p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-white">Mi Nueva Página</h2>
      </div>
      
      <div className="bg-gray-900 p-6 rounded-lg">
        <p>Puntaje: {calcularPuntajeGeneral()}</p>
      </div>
    </div>
  );
}
```

2. **Agregar al menú** en `data/menuData.js`:

```javascript
{
  id: 'nueva',
  label: 'Nueva Página',
  iconName: 'Star',  // Agregar importación en getIconComponent.js
  color: 'from-pink-500 to-rose-500'
}
```

3. **Renderizar en App.jsx**:

```javascript
import PaginaNueva from './pages/PaginaNueva';

// En AppContent:
{activeSection === 'nueva' && <PaginaNueva />}
```

### Crear un Nuevo Contexto

1. **Crear archivo** en `context/MiContext.jsx`:

```javascript
import React, { createContext, useState } from 'react';

export const MiContext = createContext();

export function MiProvider({ children }) {
  const [estado, setEstado] = useState(valor_inicial);
  
  return (
    <MiContext.Provider value={{ estado, setEstado }}>
      {children}
    </MiContext.Provider>
  );
}
```

2. **Envolver en App.jsx**:

```javascript
<MiProvider>
  <AppContent />
</MiProvider>
```

### Agregar un Icono Nuevo

1. **Importar en** `utils/getIconComponent.js`:

```javascript
import { MiIcono } from 'lucide-react';

const iconMap = {
  // ... iconos existentes
  MiIcono: MiIcono
};
```

2. **Usar en menuData.js**:

```javascript
{ iconName: 'MiIcono', ... }
```

---

## 🐛 Problemas Comunes

### Error: "Unexpected token '<'"

**Causa**: Archivo `.js` contiene JSX
**Solución**: Renombrar a `.jsx` o mover JSX a componente

### Error: "useContext must be used inside a Provider"

**Causa**: Componente no está dentro del Provider
**Solución**: Verificar que App.jsx enuelve el componente con el Provider correcto

### Los estilos no se aplican

**Causa**: Tailwind CSS no está instalado/configurado
**Solución**: 
```bash
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### El icono no aparece

**Causa**: Icono no está importado en `getIconComponent.js`
**Solución**: Agregar el icono al mapeo en utils/getIconComponent.js

### La página en blanco

**Causa**: Error en consola del navegador
**Solución**: 
1. Abre DevTools (F12)
2. Mira la pestaña Console
3. Busca errores de importación o sintaxis

---

## 📝 Guía de Commit

Usa convenciones estándar para commits:

```bash
git commit -m "feat: agregar nueva página de reportes"
git commit -m "fix: corregir error en cálculo de puntaje"
git commit -m "docs: actualizar README"
git commit -m "style: mejorar estilos del dashboard"
git commit -m "refactor: simplificar lógica de contextos"
```

---

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📊 Scripts Disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Lint del código (si está configurado)
npm run lint
```

---

## 🎨 Esquema de Colores

| Sección | Gradiente |
|---------|-----------|
| Inicio | `from-yellow-500 to-orange-500` |
| Dashboard | `from-blue-500 to-cyan-500` |
| 8 Factores | `from-purple-500 to-pink-500` |
| Código | `from-green-500 to-emerald-500` |
| Proceso | `from-orange-500 to-red-500` |
| Auditoría | `from-indigo-500 to-blue-500` |
| Normas | `from-teal-500 to-green-500` |
| Conclusiones | `from-yellow-500 to-orange-500` |

---

## 📱 Breakpoints Responsive

- **Mobile**: < 768px (`sm:`)
- **Tablet**: ≥ 768px (`md:`)
- **Desktop**: ≥ 1024px (`lg:`)

---

## 📚 Recursos Útiles

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [ISO/IEC 25010](https://iso25010.com)
- [Vite Docs](https://vitejs.dev)

---

## 📞 Soporte

Para reportar problemas o sugerencias:

1. Abre una **Issue** en GitHub
2. Describe el problema detalladamente
3. Incluye pasos para reproducir (si aplica)
4. Adjunta screenshots si es visual

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver archivo `LICENSE` para más detalles.

---

## 👥 Autores

- **Desarrollador**: Tu Nombre
- **Diseño**: Inspirado en estándares ISO/IEC 25010

---

## 🎯 Roadmap Futuro

- [ ] Exportar reportes en PDF
- [ ] Gráficos estadísticos más avanzados
- [ ] Comparación histórica de métricas
- [ ] Integración con APIs externas
- [ ] Modo oscuro/claro
- [ ] Soporte multiidioma
- [ ] Autenticación de usuarios
- [ ] Base de datos para almacenar proyectos

---

## ❤️ Agradecimientos

Gracias a:
- La comunidad de React
- Los creadores de Tailwind CSS
- Diseñadores de iconos Lucide

---

**Última actualización**: Noviembre 2025
**Estado**: ✅ En Desarrollo Activo

---

## 🚀 ¡Listo para Usar!

Sigue los pasos de instalación y comienza a mejorar la calidad de tu software hoy.

```bash
npm install && npm run dev
```

¡Disfruta CalidadSoft! 🎉