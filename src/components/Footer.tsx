
import { Mail, MessageCircle, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-erp-text text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">ERPManager.it</h3>
            <p className="text-gray-300 mb-4">
              Integrazione e personalizzazione professionale di ERPNext per la tua azienda.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:enzo@erpmanager.it" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://t.me/sharpec" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/393272408379" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Servizi</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Consulenza e Analisi
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Implementazione
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Personalizzazione
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Integrazione
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Formazione
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Supporto Continuo
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">ERPNext</h3>
            <ul className="space-y-2">
              <li>
                <a href="#modules" className="text-gray-300 hover:text-white transition-colors">
                  Moduli
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-300 hover:text-white transition-colors">
                  Vantaggi
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Casi di Successo
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Documentazione
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Domande Frequenti
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contatti</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-2 mt-1" />
                <span className="text-gray-300">enzo@erpmanager.it</span>
              </li>
              <li className="flex items-start">
                <MessageCircle className="w-5 h-5 mr-2 mt-1" />
                <span className="text-gray-300">Telegram: @sharpec</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-2 mt-1" />
                <span className="text-gray-300">WhatsApp: +39 327 240 8379</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} ERPManager.it - Tutti i diritti riservati</p>
          <p className="mt-2 text-sm">
            ERPNext è un marchio registrato di Frappe Technologies Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
