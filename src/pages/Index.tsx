
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Benefits from '@/components/Benefits';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ERPManager.it - Integrazione e personalizzazione ERPNext | Software Gestionale Completo</title>
        <meta name="description" content="Servizi professionali di integrazione, configurazione e personalizzazione ERPNext. Implementazione del software gestionale completo per ottimizzare i processi della tua azienda." />
        <meta name="keywords" content="ERPNext, gestionale aziendale, software ERP, integrazione ERP, personalizzazione ERPNext, software gestionale, open source ERP, implementazione ERPNext, sistema gestionale, automazione processi aziendali" />
        <meta property="og:title" content="ERPManager.it - Software Gestionale ERPNext | Soluzioni Aziendali Complete" />
        <meta property="og:description" content="Servizi professionali di integrazione e personalizzazione ERPNext. Soluzioni gestionali complete per la tua azienda." />
        <meta property="og:url" content="https://erpmanager.it" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ERPManager.it - Software Gestionale ERPNext | Soluzioni Aziendali" />
        <meta name="twitter:description" content="Servizi professionali di integrazione e personalizzazione ERPNext per la tua azienda." />
        <link rel="canonical" href="https://erpmanager.it" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Features />
          <Benefits />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
