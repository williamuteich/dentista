import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  const whatsappLink = "https://wa.me/5551996615024?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20odontológica.";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="container-max flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-[hsl(var(--dental-blue))] to-[hsl(var(--dental-blue-dark))] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">D</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-[hsl(var(--dental-blue))]">Dra. Ana Souza</h1>
            <p className="text-sm text-muted-foreground">CRO-RS 12345</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground hover:text-[hsl(var(--dental-blue))] transition-colors duration-300 font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="btn-dental-primary">
              <Phone className="w-4 h-4 mr-2" />
              Agendar Avaliação
            </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-white/95 backdrop-blur-md border-t`}>
        <nav className="px-4 py-6 space-y-4">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-2 text-foreground hover:text-[hsl(var(--dental-blue))] transition-colors duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="btn-dental-primary w-full">
                <Phone className="w-4 h-4 mr-2" />
                Agendar Avaliação
              </Button>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;