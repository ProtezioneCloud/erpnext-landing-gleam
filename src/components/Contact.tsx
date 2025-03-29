
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="section bg-erp-gray">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Contattaci</h2>
        <p className="section-subtitle text-center">
          Siamo a tua disposizione per aiutarti a trasformare la tua azienda con ERPNext
        </p>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-6">Contattaci per una consulenza gratuita</h3>
            <p className="mb-8 text-erp-lighttext max-w-2xl mx-auto">
              Siamo pronti ad aiutarti a implementare ERPNext nella tua azienda. Scegli il canale che preferisci per metterti in contatto con noi.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
              <a 
                href="mailto:enzo@erpmanager.it" 
                className="inline-flex items-center justify-center gap-3 py-3 px-6 bg-erp-blue text-white rounded-md hover:bg-erp-darkblue transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Contattaci via Email</span>
              </a>
              
              <a 
                href="https://t.me/sharpec" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-3 py-3 px-6 bg-[#0088cc] text-white rounded-md hover:bg-[#0077b5] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contattaci su Telegram</span>
              </a>
              
              <a 
                href="https://wa.me/393272408379" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-3 py-3 px-6 bg-[#25D366] text-white rounded-md hover:bg-[#128C7E] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Contattaci su WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
