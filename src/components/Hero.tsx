
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-white to-erp-gray py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Il tuo business <span className="text-erp-blue">trasformato</span> con ERPNext
            </h1>
            <p className="text-xl text-erp-lighttext mb-8">
              Integrazione e personalizzazione professionale della soluzione gestionale completa per la tua azienda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-erp-blue hover:bg-erp-darkblue text-lg px-6 py-3 h-auto"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="Scopri i servizi di integrazione ERPNext"
              >
                Scopri i nostri servizi
              </Button>
              <Button 
                variant="outline" 
                className="border-erp-darkgray text-erp-text hover:bg-erp-gray text-lg px-6 py-3 h-auto"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="Richiedi una demo di ERPNext"
              >
                Richiedi Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-xl shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2426&q=80" 
                alt="Dashboard ERPNext personalizzata per la gestione aziendale" 
                className="w-full rounded-xl"
                width="2426"
                height="1617"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="font-semibold text-xl">
                  Dashboard ERPNext personalizzata
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
