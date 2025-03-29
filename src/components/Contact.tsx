
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
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-erp-blue p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Informazioni di Contatto</h3>
              <p className="mb-8">
                Contattaci per una consulenza gratuita o per richiedere una demo personalizzata.
              </p>
              
              <div className="space-y-6">
                <a 
                  href="mailto:enzo@erpmanager.it" 
                  className="flex items-center hover:text-erp-lightblue transition-colors"
                >
                  <Mail className="w-6 h-6 mr-4" />
                  <span>enzo@erpmanager.it</span>
                </a>
                
                <a 
                  href="https://t.me/sharpec" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center hover:text-erp-lightblue transition-colors"
                >
                  <MessageCircle className="w-6 h-6 mr-4" />
                  <span>Telegram: @sharpec</span>
                </a>
                
                <a 
                  href="https://wa.me/393272408379" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center hover:text-erp-lightblue transition-colors"
                >
                  <Phone className="w-6 h-6 mr-4" />
                  <span>WhatsApp: +39 327 240 8379</span>
                </a>
              </div>
              
              <div className="mt-12">
                <h4 className="text-xl font-semibold mb-4">Orari di Contatto</h4>
                <p>Lunedì - Venerdì: 9:00 - 18:00</p>
                <p>Sabato - Domenica: Chiuso</p>
              </div>
            </div>
            
            <div className="md:w-3/5 p-8">
              <h3 className="text-2xl font-bold mb-6">Richiedi Informazioni</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-erp-text mb-1">
                      Nome
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full p-3 border border-erp-darkgray rounded-md focus:outline-none focus:ring-2 focus:ring-erp-blue"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-erp-text mb-1">
                      Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full p-3 border border-erp-darkgray rounded-md focus:outline-none focus:ring-2 focus:ring-erp-blue"
                      placeholder="La tua email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-erp-text mb-1">
                    Azienda
                  </label>
                  <input 
                    type="text" 
                    id="company" 
                    className="w-full p-3 border border-erp-darkgray rounded-md focus:outline-none focus:ring-2 focus:ring-erp-blue"
                    placeholder="Nome della tua azienda"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-erp-text mb-1">
                    Messaggio
                  </label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full p-3 border border-erp-darkgray rounded-md focus:outline-none focus:ring-2 focus:ring-erp-blue"
                    placeholder="Descrivi brevemente le tue esigenze"
                  ></textarea>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="privacy" 
                      className="w-4 h-4 text-erp-blue focus:ring-erp-blue border-erp-darkgray rounded"
                    />
                    <label htmlFor="privacy" className="ml-2 text-sm text-erp-lighttext">
                      Accetto la privacy policy
                    </label>
                  </div>
                  
                  <Button className="bg-erp-blue hover:bg-erp-darkblue">
                    Invia Richiesta
                  </Button>
                </div>
              </form>
              
              <div className="mt-8 flex space-x-4 justify-center">
                <a 
                  href="mailto:enzo@erpmanager.it" 
                  className="inline-flex items-center justify-center p-3 bg-white rounded-md border border-erp-darkgray hover:bg-erp-gray"
                >
                  <Mail className="w-6 h-6 text-erp-blue" />
                </a>
                <a 
                  href="https://t.me/sharpec" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center p-3 bg-white rounded-md border border-erp-darkgray hover:bg-erp-gray"
                >
                  <MessageCircle className="w-6 h-6 text-erp-blue" />
                </a>
                <a 
                  href="https://wa.me/393272408379" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center p-3 bg-white rounded-md border border-erp-darkgray hover:bg-erp-gray"
                >
                  <Phone className="w-6 h-6 text-erp-blue" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
