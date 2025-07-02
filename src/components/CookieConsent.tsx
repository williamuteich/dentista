import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { Button } from './ui/button';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('lgpd-consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('lgpd-consent', 'accepted');
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('lgpd-consent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[hsl(var(--border))] shadow-lg animate-in slide-in-from-bottom duration-500">
      <div className="container-max py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="w-6 h-6 text-[hsl(var(--dental-blue))] flex-shrink-0 mt-1" />
            <div className="space-y-1">
              <h3 className="font-semibold text-[hsl(var(--dental-blue))]">
                Política de Cookies - LGPD
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Utilizamos cookies para melhorar sua experiência, analisar o tráfego do site e personalizar conteúdo. 
                Ao continuar navegando, você concorda com nossa{' '}
                <a href="#" className="text-[hsl(var(--dental-blue))] hover:underline">
                  Política de Privacidade
                </a>
                .
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={rejectCookies}
              className="text-[hsl(var(--dental-blue))] border-[hsl(var(--dental-blue))] hover:bg-[hsl(var(--dental-blue-light))]"
            >
              Rejeitar
            </Button>
            <Button
              size="sm"
              onClick={acceptCookies}
              className="bg-[hsl(var(--dental-blue))] hover:bg-[hsl(var(--dental-blue-dark))] text-white"
            >
              Aceitar Cookies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;