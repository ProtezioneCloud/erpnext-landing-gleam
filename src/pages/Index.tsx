
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
        <title>ERPManager.it - Integrazione e personalizzazione ERPNext per la tua azienda</title>
        <meta name="description" content="Integrazione e personalizzazione professionale di ERPNext, il software gestionale completo per la tua azienda. Scopri i nostri servizi di implementazione, configurazione e supporto." />
        <meta name="keywords" content="ERPNext, gestionale, ERP, software aziendale, integrazione ERP, personalizzazione ERPNext, software gestionale, open source ERP, implementazione ERPNext" />
        <meta property="og:title" content="ERPManager.it - Integrazione e personalizzazione ERPNext" />
        <meta property="og:description" content="Integrazione e personalizzazione professionale di ERPNext, il software gestionale completo per la tua azienda." />
        <meta property="og:url" content="https://erpmanager.it" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ERPManager.it - Integrazione e personalizzazione ERPNext" />
        <meta name="twitter:description" content="Integrazione e personalizzazione professionale di ERPNext, il software gestionale completo per la tua azienda." />
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
