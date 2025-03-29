
import { Button } from '@/components/ui/button';
import { 
  Settings, 
  FileCode, 
  Headphones, 
  Server, 
  FileText, 
  BookOpen 
} from 'lucide-react';

const servicesData = [
  {
    title: "Consulenza e Analisi",
    description: "Analizziamo i tuoi processi aziendali per identificare le esigenze specifiche e definire la migliore strategia di implementazione.",
    icon: <FileText className="w-10 h-10 text-erp-blue" />
  },
  {
    title: "Implementazione",
    description: "Configuriamo e implementiamo ERPNext secondo le tue esigenze, assicurando una transizione fluida e senza interruzioni.",
    icon: <Server className="w-10 h-10 text-erp-blue" />
  },
  {
    title: "Personalizzazione",
    description: "Sviluppiamo funzionalità su misura per adattare ERPNext ai processi specifici della tua azienda, creando soluzioni uniche.",
    icon: <Settings className="w-10 h-10 text-erp-blue" />
  },
  {
    title: "Integrazione",
    description: "Integriamo ERPNext con i tuoi sistemi esistenti, assicurando un flusso di dati continuo tra tutte le applicazioni aziendali.",
    icon: <FileCode className="w-10 h-10 text-erp-blue" />
  },
  {
    title: "Formazione",
    description: "Offriamo corsi di formazione personalizzati per garantire che il tuo team sfrutti al massimo tutte le potenzialità del sistema.",
    icon: <BookOpen className="w-10 h-10 text-erp-blue" />
  },
  {
    title: "Supporto Continuo",
    description: "Forniamo assistenza tecnica e consulenza continua per garantire che il tuo sistema ERPNext funzioni sempre in modo ottimale.",
    icon: <Headphones className="w-10 h-10 text-erp-blue" />
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">I Nostri Servizi</h2>
        <p className="section-subtitle text-center">
          Offriamo un servizio completo per l'integrazione e personalizzazione di ERPNext nella tua azienda
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg border border-erp-darkgray hover:shadow-md transition-shadow h-full flex flex-col"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-erp-lighttext flex-grow">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Come Lavoriamo</h3>
          <p className="text-erp-lighttext max-w-3xl mx-auto mb-8">
            Adottiamo un approccio metodico e personalizzato per ogni cliente, seguendo un processo collaudato che garantisce risultati di successo.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-6 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-1/4 max-w-xs flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-erp-blue flex items-center justify-center text-white font-bold text-2xl mb-4">1</div>
              <h4 className="font-semibold text-lg mb-2">Analisi</h4>
              <p className="text-center text-erp-lighttext text-sm">Valutiamo i processi e requisiti della tua azienda</p>
            </div>
            
            <div className="w-full md:w-1/4 max-w-xs flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-erp-blue flex items-center justify-center text-white font-bold text-2xl mb-4">2</div>
              <h4 className="font-semibold text-lg mb-2">Progettazione</h4>
              <p className="text-center text-erp-lighttext text-sm">Definiamo la soluzione personalizzata</p>
            </div>
            
            <div className="w-full md:w-1/4 max-w-xs flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-erp-blue flex items-center justify-center text-white font-bold text-2xl mb-4">3</div>
              <h4 className="font-semibold text-lg mb-2">Implementazione</h4>
              <p className="text-center text-erp-lighttext text-sm">Configuriamo e personalizziamo il sistema</p>
            </div>
            
            <div className="w-full md:w-1/4 max-w-xs flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-erp-blue flex items-center justify-center text-white font-bold text-2xl mb-4">4</div>
              <h4 className="font-semibold text-lg mb-2">Supporto</h4>
              <p className="text-center text-erp-lighttext text-sm">Ti affianchiamo nel lungo periodo</p>
            </div>
          </div>
          
          <div className="mt-12">
            <Button className="bg-erp-blue hover:bg-erp-darkblue text-lg px-6 py-6 h-auto">
              Richiedi una consulenza gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
