
import { CheckCircle2 } from 'lucide-react';

const benefitsData = [
  {
    title: "Open Source e Flessibile",
    description: "Soluzione 100% open source, completamente personalizzabile e adattabile alle tue esigenze specifiche.",
  },
  {
    title: "Interfaccia Intuitiva",
    description: "UI moderna e user-friendly che riduce la curva di apprendimento e aumenta la produttività degli utenti.",
  },
  {
    title: "Tutti i Moduli Integrati",
    description: "Tutti i moduli sono nativamente integrati in un'unica piattaforma, eliminando silos e duplicazioni di dati.",
  },
  {
    title: "Accessibile Ovunque",
    description: "Accedi da qualsiasi dispositivo, in qualsiasi momento, con una soluzione cloud-first sicura e affidabile.",
  },
  {
    title: "Costi Ridotti",
    description: "Abbatti i costi di licenza e manutenzione rispetto ai tradizionali ERP proprietari.",
  },
  {
    title: "Implementazione Rapida",
    description: "Setup veloce con tempi di implementazione significativamente ridotti rispetto alle soluzioni tradizionali.",
  },
  {
    title: "Scalabilità",
    description: "Cresci senza limiti: ERPNext si adatta perfettamente sia alle piccole che alle grandi aziende.",
  },
  {
    title: "Comunità Attiva",
    description: "Beneficia di una grande comunità internazionale di sviluppatori e utenti per supporto continuo.",
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="section bg-erp-gray">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Perché Scegliere ERPNext</h2>
        <p className="section-subtitle text-center">
          Vantaggi concreti per la tua azienda con una soluzione ERP completa e moderna
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsData.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <CheckCircle2 className="w-8 h-8 text-erp-blue mb-4" />
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-erp-lighttext">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow border border-erp-darkgray">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">Trasforma la tua Azienda con ERPNext</h3>
              <p className="text-erp-lighttext mb-4">
                Un sistema ERP integrato consente di eliminare inefficienze, automatizzare processi ripetitivi e prendere decisioni basate su dati accurati e in tempo reale.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-erp-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Riduzione degli errori e delle duplicazioni di dati</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-erp-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Miglioramento dell'efficienza operativa</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-erp-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Maggiore collaborazione tra reparti</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-erp-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Report e analisi avanzate per decisioni strategiche</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
                alt="Team using ERPNext" 
                className="rounded-lg shadow-md w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
