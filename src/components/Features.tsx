
import { 
  ShoppingCart, 
  BarChart3, 
  Users, 
  LayoutDashboard, 
  FileText, 
  Package, 
  TrendingUp, 
  Calendar, 
  User, 
  Briefcase,
  Settings,
  CreditCard
} from 'lucide-react';

const moduleData = [
  {
    title: "Contabilità",
    description: "Gestione completa di fatturazione, pagamenti, report fiscali e analisi finanziarie.",
    icon: <CreditCard className="w-10 h-10 text-erp-blue" />
  },
  {
    title: "Vendite",
    description: "Gestione del ciclo di vendita, dal lead all'ordine cliente fino alla fatturazione.",
    icon: <ShoppingCart className="w-10 h-10 text-erp-blue" />
  },
  {
    title: "CRM",
    description: "Gestione di clienti, lead, opportunità e comunicazioni con tracciamento completo.",
    icon: <Users className="w-10 h-10 text-erp-blue" />
  },
  {
    title: "Acquisti",
    description: "Controllo del processo di approvvigionamento con richieste, ordini e fatture fornitore.",
    icon: <Package className="w-10 h-10 text-erp-blue" />
  },
  {
    title: "Inventario",
    description: "Monitoraggio giacenze, movimenti, valorizzazioni e tracciabilità lotti completa.",
    icon: <LayoutDashboard className="w-10 h-10 text-erp-blue" />
  },
  {
    title: "Produzione",
    description: "Pianificazione e controllo del processo produttivo, distinte base e cicli di lavorazione.",
    icon: <Settings className="w-10 h-10 text-erp-blue" />
  },
  {
    title: "HR & Payroll",
    description: "Gestione completa del personale, presenze, ferie e buste paga integrate.",
    icon: <User className="w-10 h-10 text-erp-blue" />
  },
  {
    title: "Progetti",
    description: "Pianificazione attività, milestone, timesheet e monitoraggio stati avanzamento.",
    icon: <Briefcase className="w-10 h-10 text-erp-blue" />
  },
  {
    title: "Asset",
    description: "Controllo dei cespiti aziendali, ammortamenti e manutenzioni programmate.",
    icon: <FileText className="w-10 h-10 text-erp-blue" />
  },
  {
    title: "Qualità",
    description: "Gestione controlli qualità, non conformità e azioni correttive.",
    icon: <BarChart3 className="w-10 h-10 text-erp-blue" />
  },
  {
    title: "Business Intelligence",
    description: "Dashboard personalizzabili e report analitici per decisioni strategiche.",
    icon: <TrendingUp className="w-10 h-10 text-erp-blue" />
  },
  {
    title: "Pianificazione",
    description: "Strumenti per la pianificazione delle attività aziendali e allocazione risorse.",
    icon: <Calendar className="w-10 h-10 text-erp-blue" />
  }
];

const Features = () => {
  return (
    <section id="modules" className="section bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Moduli ERPNext</h2>
        <p className="section-subtitle text-center">
          ERPNext offre una suite completa e integrata di moduli per gestire ogni aspetto della tua azienda
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {moduleData.map((module, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg border border-erp-darkgray hover:shadow-md transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                {module.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
              <p className="text-erp-lighttext">{module.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
