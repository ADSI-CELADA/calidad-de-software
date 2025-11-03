import React from 'react';
import { AppProvider } from './context/AppContext';
import { FactoresProvider } from './context/FactoresContext';
import { ProcesoProvider } from './context/ProcesoContext';
import { AuditoriaProvider } from './context/AuditoriaContext';
import { TesteoCodigoProvider } from './context/TesteoCodigoContext';
import { Sidebar } from './components/Sidebar';
import { HeaderDesktop } from './components/HeaderDesktop';
import { HeaderMobile } from './components/HeaderMobile';
import { MobileMenu } from './components/MobileMenu';
import { PaginaInicio } from './pages/PaginaInicio';
import PaginaDashboard from './pages/PaginaDashboard';
import PaginaFactores from './pages/PaginaFactores';
import PaginaCodigo from './pages/PaginaCodigo';
import PaginaProceso from './pages/PaginaProceso';
import PaginaAuditoria from './pages/PaginaAuditoria';
import PaginaNormas from './pages/PaginaNormas';
import PaginaConclusiones from './pages/PaginaConclusiones';
import { AppContext } from './context/AppContext';
import { useContext } from 'react';

function AppContent() {
  const { activeSection } = useContext(AppContext);

  return (
    <div className="flex h-screen bg-gray-950 text-gray-100 flex-col md:flex-row max-w-screen max-h-screen overflow-hidden" style={{maxWidth: '1920px', maxHeight: '1080px', margin: '0 auto'}}>
      <Sidebar />
      <HeaderMobile />
      <MobileMenu />

      <div className="flex-1 flex flex-col overflow-hidden w-full">
        <HeaderDesktop />

        <div className="flex-1 overflow-y-auto bg-gray-950 pt-14 md:pt-0 w-full max-h-full" style={{maxHeight: '100vh'}}>
          <div className="p-4 md:p-8 w-full min-h-full flex flex-col">
            {activeSection === 'inicio' && <PaginaInicio />}
            {activeSection === 'dashboard' && <PaginaDashboard />}
            {activeSection === 'factores' && <PaginaFactores />}
            {activeSection === 'codigo' && <PaginaCodigo />}
            {activeSection === 'proceso' && <PaginaProceso />}
            {activeSection === 'auditoria' && <PaginaAuditoria />}
            {activeSection === 'normas' && <PaginaNormas />}
            {activeSection === 'conclusion' && <PaginaConclusiones />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <FactoresProvider>
        <ProcesoProvider>
          <AuditoriaProvider>
            <TesteoCodigoProvider>
              <AppContent />
            </TesteoCodigoProvider>
          </AuditoriaProvider>
        </ProcesoProvider>
      </FactoresProvider>
    </AppProvider>
  );
}