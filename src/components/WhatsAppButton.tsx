import { MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    const messageTimer = setTimeout(() => {
      setShowMessage(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(messageTimer);
    };
  }, []);

  const whatsappLink = "https://wa.me/5551991581059?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20odontológica.";

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
    }`}>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block"
        aria-label="Falar no WhatsApp"
      >
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full pulse-whatsapp"></div>
        
        {/* Button */}
        <div className="relative w-16 h-16 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300">
          <MessageCircle className="w-8 h-8 text-white" fill="currentColor" />
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
            Fale conosco no WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>

        {/* Online indicator */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 border-2 border-white rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </a>

      {/* Message Preview (appears once and stays) */}
      {showMessage && (
        <div className="absolute bottom-full right-0 mb-4 pointer-events-auto animate-fade-in">
          <div className="bg-white rounded-2xl shadow-lg p-4 max-w-80 w-80 border relative">
            <button
              onClick={() => setShowMessage(false)}
              className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
              aria-label="Fechar mensagem"
            >
              <X className="w-3 h-3 text-gray-500" />
            </button>
            <div className="flex items-start space-x-3 pr-8">
              <div className="w-10 h-10 bg-[hsl(var(--dental-blue))] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-[hsl(var(--dental-blue))]">
                  Dr. Lenon Uteich
                </div>
                <div className="text-sm text-muted-foreground">
                  Olá! Como posso ajudar com seu sorriso? 😊
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white transform translate-y-full"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;